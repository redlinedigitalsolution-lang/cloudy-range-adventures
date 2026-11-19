const DB_NAME = 'ParakarutiLodgeMediaDB';
const STORE_NAME = 'videos';
const VIDEO_KEY = 'lodge_featured_footage';
const VIDEO_META_KEY = 'parakaruti_lodge_video_meta';

export interface VideoMetadata {
  type: 'blob' | 'url' | 'youtube';
  title: string;
  filename?: string;
  sizeBytes?: number;
  url?: string;
  lastUpdated: number;
}

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      return reject(new Error('IndexedDB not supported'));
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveVideoBlob(file: File): Promise<string> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const putReq = store.put(file, VIDEO_KEY);
    putReq.onsuccess = () => {
      const meta: VideoMetadata = {
        type: 'blob',
        title: file.name.replace(/\.[^/.]+$/, ''),
        filename: file.name,
        sizeBytes: file.size,
        lastUpdated: Date.now(),
      };
      try {
        localStorage.setItem(VIDEO_META_KEY, JSON.stringify(meta));
      } catch {
        // local storage may be restricted in some iframe contexts
      }
      const objectUrl = URL.createObjectURL(file);
      resolve(objectUrl);
    };
    putReq.onerror = () => reject(putReq.error);
  });
}

export async function loadSavedVideo(): Promise<{ url: string | null; meta: VideoMetadata | null }> {
  try {
    const metaStr = localStorage.getItem(VIDEO_META_KEY);
    if (!metaStr) return { url: null, meta: null };
    const meta: VideoMetadata = JSON.parse(metaStr);

    // If legacy dummy video URL was saved, clear it so authentic converted video plays
    if (meta.url && (meta.url.includes('ForBiggerBlazes') || meta.url.includes('sample'))) {
      try {
        localStorage.removeItem(VIDEO_META_KEY);
      } catch {
        // ignore
      }
      return { url: null, meta: null };
    }

    if (meta.type === 'url' || meta.type === 'youtube') {
      return { url: meta.url || null, meta };
    }

    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const getReq = store.get(VIDEO_KEY);
      getReq.onsuccess = () => {
        if (getReq.result instanceof Blob) {
          const objectUrl = URL.createObjectURL(getReq.result);
          resolve({ url: objectUrl, meta });
        } else {
          resolve({ url: null, meta: null });
        }
      };
      getReq.onerror = () => resolve({ url: null, meta: null });
    });
  } catch (err) {
    console.warn('Failed to load saved video from storage:', err);
    return { url: null, meta: null };
  }
}

export function saveVideoUrl(url: string, title?: string): VideoMetadata {
  const isYouTube = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/.test(url);
  const meta: VideoMetadata = {
    type: isYouTube ? 'youtube' : 'url',
    title: title || (isYouTube ? 'Parakaruti Eco Lodge Video' : 'Lodge Video Footage'),
    url,
    lastUpdated: Date.now(),
  };
  try {
    localStorage.setItem(VIDEO_META_KEY, JSON.stringify(meta));
  } catch {
    // ignore
  }
  return meta;
}

export async function clearSavedVideo(): Promise<void> {
  try {
    localStorage.removeItem(VIDEO_META_KEY);
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).delete(VIDEO_KEY);
  } catch (err) {
    console.warn('Failed to clear video storage:', err);
  }
}

export function parseYouTubeEmbed(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0` : null;
}
