import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Check } from 'lucide-react';
import { BusinessConfig } from '../types';
import { buildWhatsAppUrl } from '../config/siteConfig';

interface ContactSectionProps {
  config: BusinessConfig;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ config }) => {
  const initialForm = {
    fullName: '',
    email: '',
    phoneWhatsapp: '',
    country: '',
    arrivalDate: '',
    departureDate: '',
    adults: 2,
    children: 0,
    accommodationRequired: 'Eco Lodge Single Bungalow (8 Available)',
    activities: ['Village Accommodation', 'Bird Watching'],
    transportRequired: 'Yes',
    message: '',
  };

  const [formData, setFormData] = useState(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formattedMessage, setFormattedMessage] = useState('');

  const activityOptions = [
    'Village Accommodation',
    'Bird Watching',
    'Trekking & Hiking',
    'Cultural Activities',
    'Health & Wellness',
    'Conservation',
    'Guided Tours',
    'Agro Tours & Livelihood',
  ];

  const toggleActivity = (activity: string) => {
    setFormData((prev) => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter((a) => a !== activity)
        : [...prev.activities, activity],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Cloudy Range Adventure Inc. (${config.lodgeName}),
I would like to make an enquiry/booking:
- Full Name: ${formData.fullName}
- Email: ${formData.email}
- Phone/WhatsApp: ${formData.phoneWhatsapp}
- Country: ${formData.country || 'Not specified'}
- Arrival Date: ${formData.arrivalDate || 'Flexible'}
- Departure Date: ${formData.departureDate || 'Flexible'}
- Number of Adults: ${formData.adults}
- Number of Children: ${formData.children}
- Accommodation: ${formData.accommodationRequired}
- Activities Interested In: ${formData.activities.join(', ') || 'General exploration'}
- Mt. Hagen Transport Required: ${formData.transportRequired}
- Additional Message: ${formData.message || 'None'}`;

    setFormattedMessage(msg);
    setIsSubmitted(true);
  };

  const directWhatsAppUrl = buildWhatsAppUrl(
    config.whatsappCleanNumber,
    formattedMessage || 'Hello Cloudy Range Adventures Inc., I would like to plan a visit to Parakaruti Eco Lodge.'
  );

  const directEmailUrl = `mailto:${config.email}?subject=${encodeURIComponent(
    `Booking Enquiry: ${formData.fullName || 'Cloudy Range Eco Lodge Visit'}`
  )}&body=${encodeURIComponent(formattedMessage)}`;

  return (
    <section id="contact" className="py-20 bg-[#faf8f5] text-[#1c2820] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#e8efe9] text-[#2d5a3f] text-xs font-semibold tracking-wider uppercase mb-4">
            <Mail className="w-3.5 h-3.5 text-[#52b788]" />
            <span>Direct Booking Enquiry</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#12281e] tracking-tight leading-tight">
            Let’s Plan Your Cloudy Range Adventure
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#465a4e] leading-relaxed max-w-2xl mx-auto">
            Ready to experience the Cloudy Range? Contact {config.businessName} to discuss accommodation, activities, availability and your travel plans.
          </p>
          <div className="w-16 h-1 bg-[#52b788] mx-auto mt-6 rounded-full" />
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-[#e2dcd4] shadow-sm p-6 sm:p-8">
              <h3 className="font-serif font-bold text-2xl text-[#12281e] mb-2">
                Contact Details
              </h3>
              <p className="text-xs text-[#596d60] mb-6">
                Direct community liaison for Parakaruti Eco Lodge
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#eef5f0] text-[#2d5a3f] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#63796c]">
                      Location
                    </h4>
                    <p className="text-sm font-semibold text-[#12281e] mt-0.5">
                      Parakaruti Eco Lodge
                    </p>
                    <p className="text-xs text-[#4c6053]">Auen Village, Dei Council</p>
                    <p className="text-xs text-[#4c6053]">Western Highlands Province, Papua New Guinea</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#63796c]">
                      WhatsApp (Fastest Response)
                    </h4>
                    <a
                      href={`https://wa.me/${config.whatsappCleanNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-[#1f8749] hover:underline block mt-0.5"
                    >
                      {config.whatsappNumber}
                    </a>
                    <p className="text-xs text-[#526659]">International format: +675 70143943</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#eef5f0] text-[#2d5a3f] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#63796c]">
                      Email
                    </h4>
                    <a
                      href={`mailto:${config.email}`}
                      className="text-sm font-semibold text-[#2d5a3f] hover:underline block mt-0.5"
                    >
                      {config.email}
                    </a>
                    <p className="text-xs text-[#526659]">Julie Bengi, Lodge Host</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#ece6de] grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  id="contact-whatsapp-direct-btn"
                  href={`https://wa.me/${config.whatsappCleanNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow transition"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </a>
                <a
                  id="contact-email-direct-btn"
                  href={`mailto:${config.email}?subject=Inquiry%20from%20Website`}
                  className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-[#16382b] hover:bg-[#204a39] text-white font-semibold text-sm shadow transition"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </a>
              </div>
            </div>

            <div className="bg-[#eef4ef] rounded-2xl p-6 border border-[#cfded4] text-xs text-[#354f3e] leading-relaxed">
              <strong className="text-[#12281e] block text-sm font-bold mb-1">
                Coming from Overseas?
              </strong>
              Most guests fly into Jacksons International Airport (Port Moresby) and take a scheduled domestic flight to Mt. Hagen Airport (Air Niugini or PNG Air). We can coordinate your ground transfer directly from Mt. Hagen to Auen Village.
            </div>
          </div>

          {/* Right Column: Booking Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#e2dcd4] shadow-sm p-6 sm:p-8">
            {isSubmitted ? (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#e8efe9] text-[#2d5a3f] flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-[#2d5a3f]" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#12281e]">
                  Enquiry Prepared!
                </h3>
                <p className="text-sm text-[#4d5e53] max-w-md mx-auto leading-relaxed">
                  Your enquiry has been formatted and is ready to send directly to Julie Bengi via WhatsApp or Email.
                </p>

                <div className="p-4 rounded-xl bg-[#f7f5f0] border border-[#e8e2d8] text-xs text-left max-h-56 overflow-y-auto whitespace-pre-wrap font-mono text-[#2c3d31]">
                  {formattedMessage}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow transition"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Send to WhatsApp (+675 70143943)
                  </a>
                  <a
                    href={directEmailUrl}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#2d5a3f] hover:bg-[#224430] text-white font-semibold text-sm shadow transition"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send via Email Client
                  </a>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-[#627568] hover:text-[#12281e] underline cursor-pointer"
                  >
                    Edit form or submit another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#eee8e0] pb-3 mb-4">
                  <h3 className="font-serif font-bold text-2xl text-[#12281e]">
                    Send a Booking Enquiry
                  </h3>
                  <p className="text-xs text-[#526658]">
                    Fill in your details below and we will get back to you with confirmed availability and options.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2f4035] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g., Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#cbd5ce] focus:border-[#2d5a3f] focus:ring-2 focus:ring-[#2d5a3f]/20 outline-none text-sm transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#2f4035] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#cbd5ce] focus:border-[#2d5a3f] focus:ring-2 focus:ring-[#2d5a3f]/20 outline-none text-sm transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2f4035] mb-1.5">
                      WhatsApp / Phone *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.phoneWhatsapp}
                      onChange={(e) => setFormData({ ...formData, phoneWhatsapp: e.target.value })}
                      placeholder="+61 400 000 000"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#cbd5ce] focus:border-[#2d5a3f] focus:ring-2 focus:ring-[#2d5a3f]/20 outline-none text-sm transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#2f4035] mb-1.5">
                      Country of Residence
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g., Australia, Japan, USA, PNG"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#cbd5ce] focus:border-[#2d5a3f] focus:ring-2 focus:ring-[#2d5a3f]/20 outline-none text-sm transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2f4035] mb-1.5">
                      Arrival Date
                    </label>
                    <input
                      type="date"
                      value={formData.arrivalDate}
                      onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#cbd5ce] focus:border-[#2d5a3f] focus:ring-2 focus:ring-[#2d5a3f]/20 outline-none text-sm transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#2f4035] mb-1.5">
                      Departure Date
                    </label>
                    <input
                      type="date"
                      value={formData.departureDate}
                      onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#cbd5ce] focus:border-[#2d5a3f] focus:ring-2 focus:ring-[#2d5a3f]/20 outline-none text-sm transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2f4035] mb-1.5">
                      Adults (12+)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="20"
                      value={formData.adults}
                      onChange={(e) => setFormData({ ...formData, adults: parseInt(e.target.value) || 1 })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#cbd5ce] focus:border-[#2d5a3f] outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#2f4035] mb-1.5">
                      Children
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      value={formData.children}
                      onChange={(e) => setFormData({ ...formData, children: parseInt(e.target.value) || 0 })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#cbd5ce] focus:border-[#2d5a3f] outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#2f4035] mb-1.5">
                      Accommodation
                    </label>
                    <select
                      value={formData.accommodationRequired}
                      onChange={(e) => setFormData({ ...formData, accommodationRequired: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#cbd5ce] focus:border-[#2d5a3f] outline-none text-sm bg-white"
                    >
                      <option value="Eco Lodge Single Bungalow (8 Available)">
                        Eco Lodge Single Bungalow (8 Available)
                      </option>
                      <option value="Multiple Eco Lodge Bungalows (Group)">
                        Multiple Eco Lodge Bungalows (Group)
                      </option>
                      <option value="Family Traditional Bungalow">
                        Family Traditional Bungalow
                      </option>
                      <option value="Village Guest House">Village Guest House</option>
                      <option value="Eco Traditional Hut">Eco Traditional Hut</option>
                      <option value="Not sure / Need advice">Not sure / Need advice</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2f4035] mb-2">
                    Activities Interested In:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {activityOptions.map((activity) => (
                      <label
                        key={activity}
                        className={`flex items-center space-x-2 p-2 rounded-lg border transition cursor-pointer ${
                          formData.activities.includes(activity)
                            ? 'bg-[#eef5f0] border-[#2d5a3f] text-[#12281e]'
                            : 'bg-[#faf8f5] border-[#e2dcd4] text-[#4f6356]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.activities.includes(activity)}
                          onChange={() => toggleActivity(activity)}
                          className="rounded text-[#2d5a3f] focus:ring-[#2d5a3f]"
                        />
                        <span className="font-medium">{activity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2f4035] mb-1.5">
                    Transport Required from Mt. Hagen Airport / Town?
                  </label>
                  <div className="flex items-center space-x-6 text-sm text-[#2f4035]">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="transport"
                        value="Yes"
                        checked={formData.transportRequired === 'Yes'}
                        onChange={() => setFormData({ ...formData, transportRequired: 'Yes' })}
                        className="text-[#2d5a3f] focus:ring-[#2d5a3f]"
                      />
                      <span>Yes, please arrange transfer</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="transport"
                        value="No"
                        checked={formData.transportRequired === 'No'}
                        onChange={() => setFormData({ ...formData, transportRequired: 'No' })}
                        className="text-[#2d5a3f] focus:ring-[#2d5a3f]"
                      />
                      <span>No, organizing own travel</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2f4035] mb-1.5">
                    Additional Message or Special Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your fitness levels, dietary preferences, or specific birdwatching goals..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#cbd5ce] focus:border-[#2d5a3f] focus:ring-2 focus:ring-[#2d5a3f]/20 outline-none text-sm transition"
                  />
                </div>

                <button
                  id="submit-enquiry-btn"
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-4 rounded-xl bg-[#2d5a3f] hover:bg-[#204430] text-white font-bold text-base shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Booking Enquiry
                </button>
                <p className="text-center text-xs text-[#63776b]">
                  Submitting generates a clean WhatsApp / Email message ready for instant review.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
