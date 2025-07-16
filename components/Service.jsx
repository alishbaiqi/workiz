"use client"
import React from "react";

export default function Service() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center py-12 px-4 bg-white">
        <h1
          className="text-[#23282b] font-bold text-3xl md:text-5xl text-center mb-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Made for field service businesses
        </h1>
        <p
          className="text-[#23282b] text-base md:text-lg font-normal text-center max-w-2xl"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Customize Workiz to grow your business. Schedule jobs, dispatch, invoice and get paid all in one place.
        </p>
      </section>
      {/* Services grid section */}
      <section className="w-full flex flex-col items-center justify-center py-12 px-4 bg-white">
        <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
          {/* HVAC */}
          <div className="flex flex-col items-start">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-6"><circle cx="24" cy="24" r="24" fill="none"/><path d="M24 24l-7-12" stroke="#FFD600" strokeWidth="3"/><path d="M24 24l12 7" stroke="#485256" strokeWidth="3"/><path d="M24 24l-7 12" stroke="#FFD600" strokeWidth="3"/><circle cx="24" cy="24" r="5" fill="#485256"/></svg>
            <h3 className="text-[#23282b] font-bold text-2xl mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>HVAC</h3>
            <p className="text-[#23282b] text-base mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Secure more HVAC jobs all year round with service plans, sales proposals, price book, and more.
            </p>
            <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Learn More <span className="ml-1">→</span>
            </a>
          </div>
          {/* Plumbing */}
          <div className="flex flex-col items-start">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-6"><path d="M16 16v8a8 8 0 0 0 16 0v-8" stroke="#FFD600" strokeWidth="3"/><rect x="20" y="8" width="8" height="8" rx="2" fill="#485256"/><path d="M24 32v8" stroke="#485256" strokeWidth="3"/><circle cx="24" cy="42" r="2" fill="#FFD600"/></svg>
            <h3 className="text-[#23282b] font-bold text-2xl mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Plumbing</h3>
            <p className="text-[#23282b] text-base mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Win more plumbing jobs and close bigger deals with online booking and sales proposals all in one place.
            </p>
            <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Learn more <span className="ml-1">→</span>
            </a>
          </div>
          {/* Electricians */}
          <div className="flex flex-col items-start">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-6"><path d="M24 8v16l8-8" stroke="#FFD600" strokeWidth="3"/><path d="M24 24l-8 8v8" stroke="#485256" strokeWidth="3"/></svg>
            <h3 className="text-[#23282b] font-bold text-2xl mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Electricians</h3>
            <p className="text-[#23282b] text-base mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Get your entire electrician business organized, increase efficiency, and streamline communications.
            </p>
            <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Learn more <span className="ml-1">→</span>
            </a>
          </div>
          {/* Garage Door */}
          <div className="flex flex-col items-start">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-6"><rect x="12" y="20" width="24" height="16" rx="2" fill="#FFD600"/><path d="M12 20l12-8 12 8" stroke="#485256" strokeWidth="3"/></svg>
            <h3 className="text-[#23282b] font-bold text-2xl mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Garage Door</h3>
            <p className="text-[#23282b] text-base mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Win more garage door jobs and increase repeat business with service plans, sales proposals, and more.
            </p>
            <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Learn more <span className="ml-1">→</span>
            </a>
          </div>
          {/* Locksmith */}
          <div className="flex flex-col items-start">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-6"><rect x="18" y="24" width="12" height="12" rx="3" fill="#485256"/><path d="M24 24v-6a6 6 0 1 1 12 0v6" stroke="#FFD600" strokeWidth="3"/><circle cx="24" cy="34" r="2" fill="#FFD600"/></svg>
            <h3 className="text-[#23282b] font-bold text-2xl mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Locksmith</h3>
            <p className="text-[#23282b] text-base mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Make your locksmith business more efficient with online booking, quick dispatching, and scheduling.
            </p>
            <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Learn more <span className="ml-1">→</span>
            </a>
          </div>
          {/* Junk Removal */}
          <div className="flex flex-col items-start">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-6"><rect x="12" y="32" width="24" height="8" rx="2" fill="#FFD600"/><rect x="16" y="24" width="16" height="8" rx="2" fill="#485256"/><circle cx="20" cy="40" r="2" fill="#485256"/><circle cx="28" cy="40" r="2" fill="#485256"/></svg>
            <h3 className="text-[#23282b] font-bold text-2xl mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Junk Removal</h3>
            <p className="text-[#23282b] text-base mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Be the #1 junk removal business with all the tools you need to manage and grow your operations.
            </p>
            <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Learn more <span className="ml-1">→</span>
            </a>
          </div>
          {/* Appliance repair */}
          <div className="flex flex-col items-start">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-6"><rect x="16" y="16" width="16" height="16" rx="2" fill="#485256"/><path d="M24 16v-4" stroke="#FFD600" strokeWidth="3"/><path d="M24 32v4" stroke="#FFD600" strokeWidth="3"/><path d="M16 24h-4" stroke="#FFD600" strokeWidth="3"/><path d="M32 24h4" stroke="#FFD600" strokeWidth="3"/></svg>
            <h3 className="text-[#23282b] font-bold text-2xl mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Appliance repair</h3>
            <p className="text-[#23282b] text-base mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Manage your appliance repair business more efficiently with inventory management and online booking.
            </p>
            <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Learn more <span className="ml-1">→</span>
            </a>
          </div>
          {/* Other Industries */}
          <div className="flex flex-col items-start">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-6"><circle cx="16" cy="32" r="4" fill="#FFD600"/><circle cx="32" cy="16" r="4" fill="#485256"/><path d="M20 32h8" stroke="#485256" strokeWidth="3"/><path d="M32 20v8" stroke="#FFD600" strokeWidth="3"/></svg>
            <h3 className="text-[#23282b] font-bold text-2xl mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Other Industries</h3>
            <p className="text-[#23282b] text-base mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              No matter what industry you work in, we have all the tools you need to run your business like a pro.
            </p>
            <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Learn more <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </section>
      {/* Call to action video section */}
      <VideoCtaSection />
    </>
  );
}

function VideoCtaSection() {
  const [showModal, setShowModal] = React.useState(false);
  // Vimeo video ID: 920468055
  const vimeoVideoUrl = "https://player.vimeo.com/video/920468055";
  // Vimeo thumbnail (replace with actual if you have it, or use a placeholder)
  const vimeoThumbnail = "https://i.vimeocdn.com/video/1711234567-640x360.jpg"; // Replace with actual thumbnail if available
  return (
    <section className="w-full bg-[#23272a] flex flex-col items-center justify-center py-16 px-4">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-start justify-start gap-12 lg:ml-[-60px]">
        {/* Left side */}
        <div className="flex-1 flex flex-col items-start justify-center text-left lg:ml-16">
          <h2 className="text-white font-extrabold text-2xl md:text-4xl mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            It’s free to try.<br />We hope you do.
          </h2>
          <p className="text-white text-base md:text-lg font-normal mb-8 max-w-xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Increase the efficiency of your field service business with all-in-one platform trusted by over 120,000 pros. Manage all your daily tasks automate your key workflows, win more jobs, get paid in the field faster, and control your business in real-time with Workiz.
          </p>
          <button className="bg-[#FFD600] hover:bg-yellow-400 text-[#23272a] font-bold text-base md:text-lg rounded-md px-8 py-4 mb-8 transition-colors" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Get started – It's free
          </button>
        </div>
        {/* Right side: Video thumbnail and mobile image */}
        <div className="flex-1 flex items-center justify-center relative w-full max-w-xl lg:-ml-20">
          {/* Laptop/video image */}
          <img
            src="https://www.workiz.com/wp-content/uploads/2025/01/device-product-general-DT.webp"
            srcSet="https://www.workiz.com/wp-content/uploads/2025/01/device-product-general-DT.webp 1324w, https://www.workiz.com/wp-content/uploads/2025/01/device-product-general-DT-768x462.webp 768w"
            sizes="(max-width: 1324px) 100vw, 1324px"
            alt="Device Product General Dt"
            className="rounded-xl shadow-lg w-full object-contain"
            style={{ minHeight: 320 }}
          />
          {/* Mobile image overlay */}
          <img
            src="https://www.workiz.com/wp-content/uploads/2025/01/device-product-general-MOB.webp"
            alt="Device Product General Mob"
            className="hidden md:block absolute right-[-20px] bottom-[-40px] w-[180px] h-auto rounded-2xl shadow-2xl"
            style={{ zIndex: 2 }}
          />
          {/* Trusted badge in bottom right */}
          <img
            src="https://www.workiz.com/wp-content/uploads/2025/01/badge-trusted-v2.webp"
            srcSet="https://www.workiz.com/wp-content/uploads/2025/01/badge-trusted-v2.webp 288w, https://www.workiz.com/wp-content/uploads/2025/01/badge-trusted-v2-150x150.webp 150w"
            sizes="(max-width: 288px) 100vw, 288px"
            alt="Badge Trusted V2"
            className="w-44 h-44 object-contain absolute left-[-24px] bottom-[-40px] z-20 -rotate-18"
            style={{ pointerEvents: 'none' }}
          />
          {/* Play button overlay */}
          <button
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-4 shadow-lg hover:bg-opacity-100 transition"
            onClick={() => setShowModal(true)}
            aria-label="Play video"
            style={{ zIndex: 3 }}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#FFD600"/><polygon points="20,16 36,24 20,32" fill="#23272a"/></svg>
          </button>
        </div>
      </div>
      {/* Modal for video playback */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              className="absolute top-8 right-8 text-white text-3xl font-bold z-10"
              onClick={() => setShowModal(false)}
              aria-label="Close video"
            >
              ×
            </button>
            <iframe
              src={vimeoVideoUrl + '?autoplay=1'}
              width="960"
              height="540"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full max-w-3xl rounded-xl shadow-2xl bg-black"
              style={{ maxHeight: '80vh' }}
              title="Workiz Product Tour"
            />
          </div>
        </div>
      )}
    </section>
  );
}
