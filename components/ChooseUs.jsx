import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    icon: (
      // Custom outlined team/group SVG
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2966F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="3" />
        <circle cx="5.5" cy="10.5" r="2.5" />
        <circle cx="18.5" cy="10.5" r="2.5" />
        <path d="M2 20c0-2.5 3.5-4.5 7-4.5s7 2 7 4.5" />
        <path d="M12 13c3.5 0 7 2 7 4.5" />
        <path d="M12 13c-3.5 0-7 2-7 4.5" />
      </svg>
    ),
    title: "Your teams gets it, fast",
    description: "Built for field pros, not IT people. Workiz is intuitive, with no big learning curves.",
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#2966F6" strokeWidth="1.5"><circle cx="17" cy="12" r="2"/><rect x="3" y="10" width="14" height="4" rx="2"/><circle cx="17" cy="12" r="5" stroke="#2966F6" strokeWidth="1.5" fill="none"/></svg>
    ),
    title: "Get running in days",
    description: "Set up fast without disrupting your business. You can fully onboard in days.",
  },
  {
    icon: (
      // Custom outlined user headset SVG
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2966F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="4" />
        <path d="M4 18v-2a8 8 0 0 1 16 0v2" />
        <path d="M19 21a2 2 0 0 1-2-2v-1" />
        <path d="M5 21a2 2 0 0 0 2-2v-1" />
        <path d="M15.5 14.5l1.5 1.5" />
        <path d="M8.5 14.5l-1.5 1.5" />
      </svg>
    ),
    title: "Onboarding specialist",
    description: "Work 1–on–1 with a real person who really cares about your success.",
  },
];

export default function ChooseUs() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center py-12 px-4 bg-white">
        <h2
          className="text-[#111] font-extrabold text-3xl md:text-4xl text-center mb-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Why Workiz?
        </h2>
        <p
          className="text-[#111] text-base md:text-lg font-normal text-center mb-8"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Trusted by over 120,000 field service pros, get up and running in no time.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center">
          <button
            className="bg-[#2966F6] text-white font-bold text-base md:text-lg rounded-full px-8 py-4 shadow-none border-2 border-[#2966F6] focus:outline-none"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Easy to onboard
          </button>
          <button
            className="bg-white text-[#23282b] font-bold text-base md:text-lg rounded-full px-8 py-4 border-2 border-[#23282b] focus:outline-none"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Easy to use
          </button>
          <button
            className="bg-white text-[#23282b] font-bold text-base md:text-lg rounded-full px-8 py-4 border-2 border-[#23282b] focus:outline-none"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            AI that helps
          </button>
        </div>
      </section>
      {/* New feature section as in screenshot */}
      <section className="w-full flex flex-col items-center justify-center py-8 px-4 bg-white">
        <div className="w-full flex flex-col md:flex-row items-start justify-center gap-8 md:gap-0 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div key={feature.title} className="flex-1 flex flex-col items-center text-center px-4 md:px-8 mb-10 md:mb-0 bg-white py-10 border-none border-0 border-transparent shadow-none" style={{ boxShadow: 'none', border: 'none', borderColor: 'transparent', borderRadius: '12px' }}>
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-[#111] font-extrabold text-xl md:text-2xl mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{feature.title}</h3>
              <p className="text-[#111] text-base md:text-lg font-normal" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonial card section */}
      <section className="w-full flex flex-col items-center justify-center py-8 px-4 bg-white">
        <div className="w-full max-w-7xl mx-auto bg-[#f3f4f6] rounded-[48px] flex flex-col items-center justify-center py-8 px-4 md:px-16" style={{ boxShadow: '0 0 0 0 rgba(0,0,0,0.01)' }}>
          <p className="text-[#111] text-2xl md:text-4xl font-normal text-center mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, lineHeight: 1.15 }}>
            “Since we started with Workiz, my company has grown 3 times in revenue every year”
          </p>
          <div className="flex flex-col items-center">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Yuri Dyomkin" className="w-16 h-16 rounded-full object-cover mb-2" />
            <span className="font-bold text-lg text-[#111]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Yuri Dyomkin</span>
            <span className="text-[#23282b] text-base" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Owner, Garage door ninja</span>
          </div>
        </div>
      </section>
    </>
  );
}

