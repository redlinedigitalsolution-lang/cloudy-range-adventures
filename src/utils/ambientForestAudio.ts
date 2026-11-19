// Web Audio API ambient sound generator simulating highland breeze and morning birdsong

class AmbientForestAudio {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private noiseSources: AudioBufferSourceNode[] = [];
  private lfos: OscillatorNode[] = [];
  private birdIntervalId: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private createPinkNoiseBuffer(): AudioBuffer {
    if (!this.ctx) throw new Error('AudioContext not initialized');
    const length = this.ctx.sampleRate * 4;
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < length; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.969 * b2 + white * 0.153852;
      b3 = 0.8665 * b3 + white * 0.3104856;
      b4 = 0.55 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.016898;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.06;
      b6 = white * 0.115926;
    }
    return buffer;
  }

  private triggerBirdChirp() {
    if (!this.ctx || !this.isPlaying || !this.masterGain) return;
    try {
      const now = this.ctx.currentTime;
      const baseFreq = 2400 + Math.random() * 900;
      const chirps = Math.random() > 0.4 ? 2 : 3;

      for (let i = 0; i < chirps; i++) {
        const chirpStart = now + i * 0.11;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        const startFreq = baseFreq + (Math.random() * 400 - 200);
        const peakFreq = startFreq + 600 + Math.random() * 400;
        const endFreq = startFreq - 200;

        osc.frequency.setValueAtTime(startFreq, chirpStart);
        osc.frequency.exponentialRampToValueAtTime(peakFreq, chirpStart + 0.04);
        osc.frequency.exponentialRampToValueAtTime(endFreq, chirpStart + 0.09);

        gain.gain.setValueAtTime(0.0001, chirpStart);
        gain.gain.exponentialRampToValueAtTime(0.028, chirpStart + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, chirpStart + 0.09);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(chirpStart);
        osc.stop(chirpStart + 0.1);
      }
    } catch {
      // Audio errors are non-critical
    }
  }

  public play() {
    this.initContext();
    if (!this.ctx || this.isPlaying) return;
    this.isPlaying = true;

    const now = this.ctx.currentTime;
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.0001, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.35, now + 1.5);
    this.masterGain.connect(this.ctx.destination);

    // Mountain Breeze
    const noiseBuffer = this.createPinkNoiseBuffer();
    const breezeSrc = this.ctx.createBufferSource();
    breezeSrc.buffer = noiseBuffer;
    breezeSrc.loop = true;

    const breezeFilter = this.ctx.createBiquadFilter();
    breezeFilter.type = 'lowpass';
    breezeFilter.frequency.setValueAtTime(380, now);
    breezeFilter.Q.setValueAtTime(1.8, now);

    const breezeLfo = this.ctx.createOscillator();
    breezeLfo.frequency.setValueAtTime(0.12, now);
    const breezeLfoGain = this.ctx.createGain();
    breezeLfoGain.gain.setValueAtTime(180, now);

    breezeLfo.connect(breezeLfoGain);
    breezeLfoGain.connect(breezeFilter.frequency);
    breezeLfo.start(now);
    this.lfos.push(breezeLfo);

    const breezeGain = this.ctx.createGain();
    breezeGain.gain.setValueAtTime(0.55, now);

    breezeSrc.connect(breezeFilter);
    breezeFilter.connect(breezeGain);
    breezeGain.connect(this.masterGain);
    breezeSrc.start(now);
    this.noiseSources.push(breezeSrc);

    // Rustling Leaves
    const leavesSrc = this.ctx.createBufferSource();
    leavesSrc.buffer = noiseBuffer;
    leavesSrc.loop = true;

    const leavesFilter = this.ctx.createBiquadFilter();
    leavesFilter.type = 'bandpass';
    leavesFilter.frequency.setValueAtTime(1450, now);
    leavesFilter.Q.setValueAtTime(1.2, now);

    const leavesGain = this.ctx.createGain();
    leavesGain.gain.setValueAtTime(0.08, now);

    const leavesLfo = this.ctx.createOscillator();
    leavesLfo.frequency.setValueAtTime(0.25, now);
    const leavesLfoGain = this.ctx.createGain();
    leavesLfoGain.gain.setValueAtTime(0.04, now);

    leavesLfo.connect(leavesLfoGain);
    leavesLfoGain.connect(leavesGain.gain);
    leavesLfo.start(now);
    this.lfos.push(leavesLfo);

    leavesSrc.connect(leavesFilter);
    leavesFilter.connect(leavesGain);
    leavesGain.connect(this.masterGain);
    leavesSrc.start(now);
    this.noiseSources.push(leavesSrc);

    // Birds Scheduling
    const scheduleNextBird = () => {
      if (!this.isPlaying) return;
      const nextDelay = 4500 + Math.random() * 6500;
      this.birdIntervalId = window.setTimeout(() => {
        this.triggerBirdChirp();
        scheduleNextBird();
      }, nextDelay);
    };

    this.birdIntervalId = window.setTimeout(() => {
      this.triggerBirdChirp();
      scheduleNextBird();
    }, 1800);
  }

  public stop() {
    if (!this.isPlaying || !this.ctx || !this.masterGain) return;
    this.isPlaying = false;

    if (this.birdIntervalId !== null) {
      window.clearTimeout(this.birdIntervalId);
      this.birdIntervalId = null;
    }

    const now = this.ctx.currentTime;
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);

    setTimeout(() => {
      this.noiseSources.forEach((src) => {
        try {
          src.stop();
          src.disconnect();
        } catch {
          // ignore
        }
      });
      this.lfos.forEach((lfo) => {
        try {
          lfo.stop();
          lfo.disconnect();
        } catch {
          // ignore
        }
      });
      this.noiseSources = [];
      this.lfos = [];

      if (this.masterGain) {
        try {
          this.masterGain.disconnect();
        } catch {
          // ignore
        }
        this.masterGain = null;
      }
    }, 800);
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const ambientForestAudio = new AmbientForestAudio();
