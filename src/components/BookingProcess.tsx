import React from 'react';
import { Send, Calendar, CheckSquare, Compass, Phone } from 'lucide-react';
import { BusinessConfig } from '../types';
import { buildWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from '../config/siteConfig';

interface BookingProcessProps {
  config: BusinessConfig;
}

export const BookingProcess: React.FC<BookingProcessProps> = ({ config }) => {
  const steps = [
    {
      number: '01',
      title: 'Send an Enquiry',
      icon: Send,
      description:
        'Contact Cloudy Range Adventure Inc. through WhatsApp (+675 70143943) or our online contact form/email with your desired travel window and interests.',
    },
    {
      number: '02',
      title: 'Plan Your Experience',
      icon: Calendar,
      description:
        'Together we discuss your travel dates, group size, guest house room options, birdwatching or trekking activities, guided tours, meals, and Mt. Hagen transport.',
    },
    {
      number: '03',
      title: 'Confirm Your Booking',
      icon: CheckSquare,
      description:
        'The lodge confirms your booking dates and provides agreed reservation summary, preparation guidelines, and approved payment instructions.',
    },
    {
      number: '04',
      title: 'Arrive & Experience',
      icon: Compass,
      description:
        'Receive rendezvous and transfer instructions from Mt. Hagen into the Cloudy Range. Settle into Auen Village and begin your eco-tourism journey with purpose.',
    },
  ];

  const whatsappUrl = buildWhatsAppUrl(config.whatsappCleanNumber, DEFAULT_WHATSAPP_MESSAGE);

  return (
    <section className="py-16 bg-[#eef4ef] text-[#1c2820] border-b border-[#d8e4dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#dbe8de] text-[#1e4832] text-xs font-semibold uppercase tracking-wider mb-2">
            <span>Simple 4-Step Process</span>
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#12281e]">
            How to Book Your Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#4d5e53]">
            Personalized booking with direct host communication from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white p-6 rounded-2xl border border-[#dce6df] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono font-bold text-xs px-2.5 py-1 rounded bg-[#e8f2eb] text-[#2d5a3f]">
                      STEP {step.number}
                    </span>
                    <div className="p-2 rounded-xl bg-[#f0f6f2] text-[#2d5a3f]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#12281e] mb-2">{step.title}</h3>
                  <p className="text-xs text-[#526458] leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
          >
            <Phone className="w-4 h-4 mr-1.5" />
            <span>Start Step 1: Message Host on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
