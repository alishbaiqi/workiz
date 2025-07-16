"use client";

import React, { useState, use } from 'react';
import { notFound } from 'next/navigation';
import Integrations from '@/components/Integrations';
import FaqSection from '@/components/FaqSection';
import FooterSection   from '@/components/FooterSection';

const validIndustries = [
  'towing-near-me', 'handyman', 'garage-door-repair', 'chimney-sweep', 'carpet-cleaning',
  'locksmith-near-me', 'dryervent-cleaning', 'air-duct-cleaning', 'gate-repair', 'plumbers-near-me',
  'movers-nearme', 'appliance-repair', 'sliding-door-repair', 'pestcontrol', 'roofing',
  'fire-damage-restoration', 'water-damage-restoration', 'mold-removal-nearme', 'roadside-tows', 'allusa-towing', 'hvac', 'plumbing', 'electricians',
  // Add other slugs as needed
];

export default function IndustryPage({ params }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { industry } = use(params);
  if (!validIndustries.includes(industry)) {
    notFound();
  }
  // eslint-disable-next-line spellcheck/spell-checker
  if (industry === 'hvac') {
    return (
      <>
        <div style={{ display: 'flex', minHeight: '500px', width: '100%', marginTop: '80px', border: 'none', boxShadow: 'none', background: '#fff' }}>
          {/* Left Side */}
          <div style={{ background: '#FFD400', flex: 1, padding: '48px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ color: '#23282B', fontWeight: 600, marginBottom: 16 }}>HVAC SOFTWARE</div>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
              <span style={{ background: '#fff', padding: '0 8px', borderRadius: '4px', display: 'inline-block' }}>Grow your business</span><br />
              with the best HVAC software
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#23282B', marginBottom: 32, maxWidth: 600 }}>
              Grow and scale your HVAC business all year long with the home service industry's top business management platform. Schedule, dispatch, send invoices and estimates all in one place.
            </p>
            <button style={{ background: '#23282B', color: '#ffd400', fontWeight: 600, fontSize: '1.25rem', padding: '16px 40px', borderRadius: 8, border: 'none', marginBottom: 32, cursor: 'pointer', width: 'fit-content' }}>Book a demo</button>
            <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src="/images/captera.webp" alt="Capterra" style={{ height: 38 }} />
                <span style={{ color: '#FFD400' }}>★★★★★</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src="/images/software1.webp" alt="Software Advice" style={{ height: 38 }} />
                <span style={{ color: '#FFD400' }}>★★★★★</span>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div style={{ flex: 1, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', border: 'none', boxShadow: 'none' }}>
            <img src="/images/hvac1.webp" alt="HVAC Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopRightRadius: 0, borderBottomRightRadius: 0 }} />
            <div style={{ position: 'absolute', bottom: 32, left: 0, background: 'rgba(0,0,0,0.3)', borderRadius: 16, padding: '24px 32px', color: '#fff', maxWidth: 400 }}>
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Dan Johnson</div>
              <div style={{ fontSize: '1rem' }}>CEO & Founder of Einstein Pros</div>
              <div style={{ color: '#FFD400', fontWeight: 600, fontSize: '1.1rem', marginTop: 8, cursor: 'pointer' }}>▶ Watch testimonial</div>
            </div>
          </div>
        </div>
        {/* Preferred Vendor Section */}
        <section style={{ background: '#fff', padding: '56px 0 32px 0', marginTop: 32 }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: '#23282B', fontWeight: 400, fontSize: '1.5rem', letterSpacing: 2, marginBottom: 32 }}>
              WORKIZ IS THE PREFERRED VENDOR OF:
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
              <div>
                <img src="/images/american-logo.svg" alt="American Standard" style={{ height: 44, marginBottom: 8 }} />
                
              </div>
              <div>
                <img src="/images/trane-logo.svg" alt="Trane" style={{ height: 44, marginBottom: 8 }} />
                
              </div>
              <div>
                <img src="/images/searchking-logo.svg" alt="SearchKings" style={{ height: 44 }} />
              </div>
              <div>
                <img src="/images/jb-logo.svg" alt="JB Warranties" style={{ height: 44 }} />
                
              </div>
            </div>
          </div>
        </section>
        {/* Feature Cards Section */}
        <section style={{ background: '#f7f9fa', padding: '48px 0', marginTop: 0 }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* Left Card: Sales Proposals */}
            <div style={{ flex: 1, minWidth: 400, maxWidth: 600, borderRadius: 24, padding: 0, color: '#fff', position: 'relative', display: 'flex', flexDirection: 'row', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(169.48deg, #096187 5.7%, #23282B 98.96%)' }}>
              {/* Text Content (Left) */}
              <div style={{ flex: 1, padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8, color: '#fff' }}>sales proposals</div>
                <div
  style={{
    fontSize: 40,
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: 24,
    color: '#ffd400',
    letterSpacing: 1,
    display: 'flex',
    flexDirection: 'column',
  }}
>
  <span>Win 25%</span>
  <span>more jobs</span>
</div>

                <div style={{ fontSize: 16, fontWeight: 400, marginBottom: 32, color: '#fff' }}>
                  Close larger deals by<br className="hidden-md" />providing sales proposals<br className="hidden-md" />to fit your customers<br className="hidden-md" />budget requirements.
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 16 }} className="hidden-mobile">
                  <a href="https://www.workiz.com/features/sales-proposals/" style={{ border: '2px solid #fff', color: '#fff', background: 'transparent', fontWeight: 600, fontSize: 16, padding: '12px 32px', borderRadius: 8, textDecoration: 'none', transition: 'background 0.2s, color 0.2s' }}>Learn more</a>
                </div>
                {/* Mobile Image (hidden on desktop) */}
                <div style={{ width: '100%', marginTop: 24, display: 'none' }} className="show-mobile">
                  <img
                    src="https://www.workiz.com/wp-content/uploads/2023/07/hl-sales-proposals-mob.webp"
                    alt="Hl Sales Proposals Mob"
                    style={{ width: '100%', height: 'auto', borderRadius: 16 }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              {/* Desktop Image (Right, hidden on mobile) */}
              <div style={{ flex: '0 0 50%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 0 }} className="hidden-mobile">
                <img
                  src="https://www.workiz.com/wp-content/uploads/2023/07/hl-sales-proposals.webp"
                  alt="Sales Proposals"
                  style={{ width: '90%', maxWidth: 320, height: 'auto', borderRadius: 0 }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            {/* Right Card: Service Plans */}
            <div style={{ flex: 1, minWidth: 400, maxWidth: 600, borderRadius: 24, padding: 0, color: '#23282B', position: 'relative', display: 'flex', flexDirection: 'row', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(180deg, #F6F8FA 0%, #E4E9EC 100%)', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              {/* Text Content (Left) */}
              <div style={{ flex: 1, padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8, color: '#2563eb' }}>Service plans</div>
                <div style={{ fontSize: 34, fontWeight: 700, lineHeight: 1.1, marginBottom: 24, color: '#3b4b52', letterSpacing: -1 }}>Recurring revenue all year round</div>
                <div style={{ fontSize: 16, fontWeight: 400, marginBottom: 32, color: '#23282B' }}>
                  Boost company profits and ensure consistent repair and tune-up work by offering service plans.
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 16 }} className="hidden-mobile">
                  <a href="https://www.workiz.com/features/service-plans/" style={{ border: '2px solid #23282B', color: '#23282B', background: 'transparent', fontWeight: 600, fontSize: 16, padding: '12px 32px', borderRadius: 8, textDecoration: 'none', transition: 'background 0.2s, color 0.2s' }}>Learn more</a>
                </div>
                {/* Mobile Image (hidden on desktop) */}
                <div style={{ width: '100%', marginTop: 24, display: 'none' }} className="show-mobile">
                  <img
                    src="https://www.workiz.com/wp-content/uploads/2023/05/hl-service-plans-mob.webp"
                    alt="Hl Service Plans Mob"
                    style={{ width: '100%', height: 'auto', borderRadius: 16 }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              {/* Desktop Image (Right, hidden on mobile) */}
              <div style={{ flex: '0 0 60%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 0 }} className="hidden-mobile">
                <img
                  src="https://www.workiz.com/wp-content/uploads/2023/05/hl-service-plan.webp"
                  alt="Hl Service Plan"
                  style={{ width: '90%', maxWidth: 320, height: 'auto', borderRadius: 0 }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Price Book Section */}
        <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#fff', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/pricebook.webp"
              alt="Price Book Tablet"
              style={{ width: '100%', maxWidth: 600, borderRadius: 20,  }}
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Right: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
            <div style={{ color: '#22c55e', fontWeight: 700, fontSize: 12, letterSpacing: 1, marginBottom: 4, textTransform: 'uppercase' }}>INCREASE YOUR REVENUE</div>
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 40, marginBottom: 8, lineHeight: 1.1 }}>Price Book</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 12, lineHeight: 1.4 }}>
              Discover the game-changing Price Book feature for HVAC pros! Enhance your field sales and workflow with custom categories, seamless catalog navigation, and quick access to your items. Save time with bulk updates to costs, tax prices, inventory statuses, and categories.
            </div>
            <button style={{ background: '#FFD400', color: '#23282B', fontWeight: 600, fontSize: 18, padding: '12px 28px', borderRadius: 8, border: 'none', cursor: 'pointer', width: 'fit-content', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>Start for free</button>
          </div>
        </section>
        {/* Purchase Orders Section */}
        <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#f6f8fa', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, paddingLeft: 32 }}>
            <div style={{ color: '#f25c4d', fontWeight: 700, fontSize: 12, letterSpacing: 1, marginBottom: 8, textTransform: 'uppercase' }}>PURCHASE ORDERS</div>
            <div style={{ color: '#23282B', fontWeight: 560, fontSize: 35, marginBottom: 16, lineHeight: 1.1 }}>Your one–stop shop for order management</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 24, lineHeight: 1.4 }}>
              Quickly create and send purchase orders to vendors, linking items to your price book and relevant jobs. Track orders and monitor statuses, ensuring full visibility and reducing errors.
            </div>
            <button style={{ background: '#FFD400', color: '#23282B', fontWeight: 600, fontSize: 22, padding: '18px 44px', borderRadius: 8, border: 'none', cursor: 'pointer', width: 'fit-content', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>Start free trial</button>
          </div>
          {/* Right: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 32 }}>
            <img
              src="/images/orders.webp"
              alt="Orders Table"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
        {/* Scheduling Section */}
        <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#f6f8fa', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, paddingLeft: 32 }}>
            <div style={{ color: '#f25c4d', fontWeight: 700, fontSize: 12, letterSpacing: 1,fontFamily:"Plus Jakarta Sans",  marginBottom: 8 }}>HVAC SCHEDULING SOFTWARE</div>
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 35,fontFamily:"Plus Jakarta Sans", marginBottom: 16, lineHeight: 1.1 }}>Schedule and dispatch efficiently</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 24, lineHeight: 1.4 }}>
              Boost your business productivity and visibility with our advanced scheduling software from Workiz. Offer your customers 24/7 online booking to access your services at their convenience. Managing your HVAC tasks becomes a breeze as it enables you to organize and monitor all tasks from one versatile platform, improving your workflow efficiency.
            </div>
            <a href="#" style={{ color: '#23282B', fontWeight: 500,fontFamily:"Plus Jakarta Sans", fontSize: 18, textDecoration: 'none', marginTop: 4, display: 'inline-block' }}>Learn More &rarr;</a>
          </div>
          {/* Right: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 32 }}>
            <img
              src="/images/scheduling.png"
              alt="Scheduling Calendar"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
        {/* HVAC Pros CTA Section */}
        <section style={{ width: 'calc(100% - 48px)', maxWidth: 1200, background: '#FFD400', borderRadius: 32, margin: '48px auto', padding: '35px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, flexWrap: 'wrap', border: 'none', boxShadow: 'none' }}>
          {/* Left: Text Content */}
          <div style={{ flex: 2, minWidth: 320, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 48, position: 'relative' }}>
           
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 32, fontFamily: 'Plus Jakarta Sans, sans-serif', marginBottom: 12, lineHeight: 1.1 }}>The best software for HVAC pros</div>
            <div style={{ color: '#23282B', fontSize: 16, fontWeight: 400, fontFamily: 'Plus Jakarta Sans, sans-serif', marginBottom: 0, lineHeight: 1.4 }}>
              HVAC technicians need a central platform to manage job scheduling, dispatching, invoicing and track their performance.
            </div>
          </div>
          {/* Right: Buttons */}
          <div style={{ flex: 1, minWidth: 260, display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center', paddingRight: 40, position: 'relative' }}>
            <button style={{ background: '#23282B', color: '#FFD400', fontWeight: 600, fontSize: 18, fontFamily: 'Plus Jakarta Sans, sans-serif', padding: '14px 0', borderRadius: 8, border: 'none', cursor: 'pointer', width: '100%', maxWidth: 200, marginBottom: 8 }}>Start free trial</button>
            <button style={{ background: 'transparent', color: '#23282B', fontSize: 18, fontFamily: 'Plus Jakarta Sans, sans-serif', padding: '14px 0', borderRadius: 8, border: '2px solid #23282B', cursor: 'pointer', width: '100%', maxWidth: 200 }}>Book a demo</button>
          </div>
        </section>
        {/* Online Booking Section */}
        <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#fff', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/illustration.webp"
              alt="Online Booking Illustration"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Right: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
            <div style={{ color: '#2563eb', fontWeight: 700, fontSize: 14, letterSpacing: 1, marginBottom: 4,fontFamily:"Plus Jakarta Sans", textTransform: 'uppercase' }}>ONLINE BOOKING</div>
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 40, marginBottom: 8,fontFamily:"Plus Jakarta Sans", lineHeight: 1.1 }}>Make every deal count</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 12, lineHeight: 1.4 }}>
              Increase your sales by offering your customers the opportunity to purchase related products as well as booking more services online. With the most professional online booking system, you can easily upsell premium products and services while attracting potential customers.
            </div>
            <a href="#" style={{ color: '#23282B', fontWeight: 500, fontSize: 18, textDecoration: 'none', marginTop: 4, fontFamily:"Plus Jakarta Sans",display: 'inline-block' }}>Learn more &rarr;</a>
          </div>
        </section>
        {/* Workiz Pay Section */}
        <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#f6f8fa', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, paddingLeft: 32 }}>
            <div style={{ color: '#f25c4d', fontWeight: 700, fontSize: 14, letterSpacing: 1, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', textTransform: 'uppercase' }}>WORKIZ PAY</div>
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 40, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', lineHeight: 1.1 }}>All-in-one financial solution</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 12, lineHeight: 1.4 }}>
              Get paid in the field faster with Workiz Pay, an all-in-one financial solution for your HVAC business. No more dealing with cash and checks, our card readers give you and your customers an easy and accessible solution.  With flexible payment plans now you can close bigger deals while providing the best customer service.
            </div>
            <a href="#" style={{ color: '#23282B', fontWeight: 500, fontSize: 18, textDecoration: 'none', marginTop: 4, fontFamily: 'Plus Jakarta Sans', display: 'inline-block' }}>Learn more &rarr;</a>
          </div>
          {/* Right: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 32 }}>
            <img
              src="/images/workiz-pa.webp"
              alt="Workiz Pay"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
        {/* Automations Section */}
        <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#fff', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/automations-illustration.webp"
              alt="Automations Illustration"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Right: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
            <div style={{ color: '#f25c4d', fontWeight: 700, fontSize: 14, letterSpacing: 1, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', textTransform: 'uppercase' }}>AUTOMATIONS</div>
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 40, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', lineHeight: 1.1 }}>Save yourself time and effort</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 12, lineHeight: 1.4 }}>
              Get more reviews, communicate more efficiently with your techs and customers, send those estimates faster and so much more with custom automation. Save yourself 20 hours a week when you take all your tedious tasks and make them a well-oiled machine.
            </div>
            <a href="#" style={{ color: '#23282B', fontWeight: 500, fontSize: 18, textDecoration: 'none', marginTop: 4, fontFamily: 'Plus Jakarta Sans', display: 'inline-block' }}>Learn more &rarr;</a>
          </div>
        </section>
        {/* Inventory Management Section */}
        <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#fff', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, paddingLeft: 32 }}>
            <div style={{ color: '#f25c4d', fontWeight: 700, fontSize: 14, letterSpacing: 1, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', textTransform: 'uppercase' }}>INVENTORY MANAGEMENT</div>
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 40, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', lineHeight: 1.1 }}>Keep the warehouse organized</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 12, lineHeight: 1.4 }}>
              Stay on top of your operations and always come to the job site prepared with inventory management. Prevent overstocking, shortages, and miscalculations with real-time status updates on all your supplies, plus save 20% of your inventory costs.
            </div>
            <a href="#" style={{ color: '#23282B', fontWeight: 500, fontSize: 18, textDecoration: 'none', marginTop: 4, fontFamily: 'Plus Jakarta Sans', display: 'inline-block' }}>Learn more &rarr;</a>
          </div>
          {/* Right: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 32 }}>
            <img
              src="/images/inventory.webp"
              alt="Inventory Management"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
        {/* Communications Suite Section */}
        <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#fff', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/communications.webp"
              alt="Communications Suite"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Right: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
            <div style={{ color: '#f25c4d', fontWeight: 700, fontSize: 14, letterSpacing: 1, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', textTransform: 'uppercase' }}>COMMUNICATIONS SUITE</div>
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 40, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', lineHeight: 1.1 }}>No more miscommunication</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 12, lineHeight: 1.4 }}>
              Keep your entire team and customers in the loop with our built-in communication suite. Send on my-way text messages, record calls, track numbers and so much more. Communicate more effectively and provide the best customer service with call masking and our built-in phone.
            </div>
            <a href="#" style={{ color: '#23282B', fontWeight: 500, fontSize: 18, textDecoration: 'none', marginTop: 4, fontFamily: 'Plus Jakarta Sans', display: 'inline-block' }}>Learn more &rarr;</a>
          </div>
        </section>
       <Integrations />
       <FaqSection />
       <FooterSection />
       
      </>
    );
  }
  if (industry === 'plumbing') {
    return (
      <>
        <div style={{ display: 'flex', minHeight: '500px', width: '100%', marginTop: '80px' }}>
          {/* Left Side */}
          <div style={{ background: 'yellow', flex: 1, padding: '48px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ color: '#23282B', fontWeight: 600, marginBottom: 16, letterSpacing: 2 }}>PLUMBING SOFTWARE</div>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
              <span style={{ background: '#ffd400', padding: '0 8px', borderRadius: '4px', display: 'inline-block' }}>Grow your plumbing business</span><br />
              with the best plumbing software
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#23282B', marginBottom: 32, maxWidth: 600 }}>
              Streamline scheduling, dispatch, invoicing, and more with the all-in-one platform built for plumbing pros. Book more jobs, get paid faster, and manage your team with ease.
            </p>
            <button style={{ background: '#23282B', color: '#ffd400', fontWeight: 600, fontSize: '1.25rem', padding: '16px 40px', borderRadius: 8, border: 'none', marginBottom: 32, cursor: 'pointer', width: 'fit-content' }}>Book a demo</button>
            
            {/* Logo Section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src="/images/captera.webp" alt="Capttera" style={{ height: 32, width: 'auto' }} />
                <span style={{ color: '#23282B', fontSize: '0.875rem', fontWeight: 500 }}>Capttera</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src="/images/software1.webp" alt="Software Advice" style={{ height: 32, width: 'auto' }} />
                <span style={{ color: '#23282B', fontSize: '0.875rem', fontWeight: 500 }}>Software Advice</span>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div style={{ flex: 1, background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <img src="/images/mike.webp" alt="Plumbing Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopRightRadius: 0, borderBottomRightRadius: 0 }} />
            
            {/* Testimonial Overlay */}
            <div style={{
              position: 'absolute',
              bottom: '80px',
              left: '2px',
              width: '340px',
              background: 'transparent',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '8px',
              padding: '16px',
              color: 'white'
            }}>
              <h3 style={{ 
                fontSize: '1rem', 
                fontWeight: 'bold', 
                marginBottom: '6px', 
                color: 'white',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                whiteSpace: 'nowrap'
              }}>
                Mike Bryant, CEO of Plumbing 365
              </h3>
              <button 
                className="testimonial-button"
                onClick={() => setIsVideoOpen(true)}
                style={{
                  background: '#FFD400',
                  color: '#23282B',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '8px 12px',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: 'all 0.2s ease'
                }}
              >
                <span style={{ fontSize: '1rem' }}>▶</span>
                Watch testimonial
              </button>
            </div>
          </div>
        </div>
          {/* Preferred Vendor Section */}
          <section style={{ background: '#fff', padding: '56px 0 32px 0', marginTop: 32 }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: '#23282B', fontWeight: 400, fontSize: '1.5rem', letterSpacing: 2, marginBottom: 32 }}>
              WORKIZ IS THE PREFERRED VENDOR OF:
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
              <div>
                <img src="/images/american-logo.svg" alt="American Standard" style={{ height: 44, marginBottom: 8 }} />
                
              </div>
              <div>
                <img src="/images/trane-logo.svg" alt="Trane" style={{ height: 44, marginBottom: 8 }} />
                
              </div>
              <div>
                <img src="/images/searchking-logo.svg" alt="SearchKings" style={{ height: 44 }} />
              </div>
              <div>
                <img src="/images/jb-logo.svg" alt="JB Warranties" style={{ height: 44 }} />
                
              </div>
            </div>
          </div>
        </section>
        
        {/* Price Book and Sales Proposals Section */}
        <section style={{ padding: '80px 0', background: '#f8fafc' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 40, padding: '0 20px' }}>
            
            {/* Price Book Card */}
            <div style={{ 
              flex: 1, 
              background: 'radial-gradient(111.61% 111.61% at 97.69% 0%, #FFF3B7 0%, #FFD400 100%)', 
              borderRadius: '20px', 
              position: 'relative',
              overflow: 'hidden',
              height: '500px',
              display: 'flex'
            }}>
              {/* Background Image Layer */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                zIndex: 1
              }}>
                <div style={{ width: '40%' }}></div>
                <div style={{ 
                  width: '60%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center', 
                  alignItems: 'flex-end',
                  paddingRight: '0px'
                }}>
                  <img 
                    src="https://www.workiz.com/wp-content/uploads/2023/09/hl-sales-proposals.webp" 
                    alt="Price Book Desktop Interface" 
                    style={{ 
                      width: 'auto',
                      height: '90%',
                      objectFit: 'contain'
                    }} 
                  />
                </div>
              </div>

              {/* Text Content Layer */}
              <div style={{ 
                width: '50%',
                padding: '60px',
                paddingTop: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                zIndex: 3,
                position: 'relative'
              }}>
                <div>
                  <div style={{ 
                    color: '#23282B', 
                    fontSize: '0.75rem', 
                    fontWeight: 700, 
                    letterSpacing: '2px',
                    marginBottom: '20px',
                    textTransform: 'uppercase',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    PRICE BOOK
                  </div>
                  <h2 style={{ 
                    color: '#23282B', 
                    fontSize: '2.5rem', 
                    fontWeight: 900, 
                    lineHeight: 1.1,
                    marginBottom: '20px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    Visually display your items
                  </h2>
                  <p style={{ 
                    color: '#23282B', 
                    fontSize: '1rem', 
                    fontWeight: 400,
                    lineHeight: 1.4,
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    Give your customers options in professionally designed price book.
                  </p>
                </div>
                <button style={{
                  background: '#23282B',
                  color: '#FFD400',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px 24px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  alignSelf: 'flex-start',
                  marginTop: '40px'
                }}>
                  Learn more
                </button>
              </div>

              {/* Mobile Image for smaller screens */}
              <div style={{
                position: 'absolute',
                right: '-50px',
                top: '30px',
                bottom: '30px',
                width: '60%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2
              }}>
                <img 
                  src="https://www.workiz.com/wp-content/uploads/2023/09/hl-online-booking-mob.webp" 
                  alt="Price Book Interface on Tablet" 
                  style={{ 
                    width: '100%',
                    height: '90%',
                    objectFit: 'contain',
                    display: 'none'
                  }} 
                />
              </div>
            </div>

            {/* Sales Proposals Card */}
            <div style={{ 
              flex: 1, 
              background: 'linear-gradient(169.48deg, #096187 5.7%, #23282B 98.96%)', 
              borderRadius: '20px', 
              position: 'relative',
              overflow: 'hidden',
              height: '500px',
              display: 'flex'
            }}>
              {/* Background Image Layer */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                zIndex: 1
              }}>
                <div style={{ width: '40%' }}></div>
                <div style={{ 
                  width: '60%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center', 
                  alignItems: 'flex-end',
                  paddingRight: '0px'
                }}>
                  <img 
                    src="https://www.workiz.com/wp-content/uploads/2023/07/hl-sales-proposals.webp" 
                    alt="Sales Proposals Desktop" 
                    style={{ 
                      width: 'auto',
                      height: '90%',
                      objectFit: 'contain'
                    }} 
                  />
                </div>
              </div>

              {/* Text Content Layer */}
              <div style={{ 
                width: '50%',
                padding: '60px',
                paddingTop: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                zIndex: 3,
                position: 'relative'
              }}>
                <div>
                  <div style={{ 
                    color: 'white', 
                    fontSize: '0.7rem', 
                    fontWeight: 700, 
                    letterSpacing: '2px',
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    SALES PROPOSALS
                  </div>
                  <h2 style={{ 
                    color: '#FFD400', 
                    fontSize: '2.2rem', 
                    fontWeight: 900, 
                    lineHeight: 1.1,
                    marginBottom: '16px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    Win 25% more jobs
                  </h2>
                  <p style={{ 
                    color: 'white', 
                    fontSize: '0.9rem', 
                    fontWeight: 400,
                    lineHeight: 1.4,
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    Close larger deals by<br/>providing sales proposals<br/>to fit your customers<br/>budget requirements.
                  </p>
                </div>
                <button style={{
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  borderRadius: '8px',
                  padding: '12px 24px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  alignSelf: 'flex-start',
                  marginTop: '120px'
                }}>
                  Learn more
                </button>
              </div>

              {/* Mobile Image for smaller screens */}
              <div style={{
                position: 'absolute',
                right: '20px',
                top: '40px',
                bottom: '40px',
                width: '45%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2
              }}>
                <img 
                  src="https://www.workiz.com/wp-content/uploads/2023/07/hl-sales-proposals-mob.webp" 
                  alt="Sales Proposals Mobile Interface" 
                  style={{ 
                    width: '100%',
                    height: 'auto',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    display: 'none'
                  }} 
                />
              </div>
            </div>
          </div>
        </section>
         {/* Purchase Orders Section */}
         <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#f6f8fa', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: 32 }}>
            <img
              src="/images/orders.webp"
              alt="Orders Table"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Right: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, paddingRight: 32 }}>
            <div style={{ color: '#f25c4d', fontWeight: 700, fontSize: 12, letterSpacing: 1, marginBottom: 8, textTransform: 'uppercase' }}>PURCHASE ORDERS</div>
            <div style={{ color: '#23282B', fontWeight: 560, fontSize: 35, marginBottom: 16, lineHeight: 1.1 }}>Your one–stop shop for order management</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 24, lineHeight: 1.4 }}>
              Quickly create and send purchase orders to vendors, linking items to your price book and relevant jobs. Track orders and monitor statuses, ensuring full visibility and reducing errors.
            </div>
            <button style={{ background: '#FFD400', color: '#23282B', fontWeight: 600, fontSize: 22, padding: '18px 44px', borderRadius: 8, border: 'none', cursor: 'pointer', width: 'fit-content', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>Start free trial</button>
          </div>
        </section>

        {/* Plumbing Scheduling Software Section */}
        <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#fff', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: 32 }}>
            <img
              src="/images/plumbing-jobs.png"
              alt="Plumbing Scheduling Software Interface"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Right: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, paddingRight: 32 }}>
            <div style={{ color: '#10b981', fontWeight: 700, fontSize: 14, letterSpacing: 1, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', textTransform: 'uppercase' }}>PLUMBING SCHEDULING SOFTWARE</div>
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 40, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', lineHeight: 1.1 }}>Organize all your plumbing jobs</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 24, lineHeight: 1.4 }}>
              Boost the productivity of your business with our drag-and-drop plumbing scheduling software. Your customers can easily schedule appointments online and reach your plumbing services round-the-clock. With Workiz, you can organize all your plumbing tasks in a single dashboard, giving you a quick and easy viewing platform.
            </div>
            <a href="#" style={{ color: '#23282B', fontWeight: 500, fontSize: 18, textDecoration: 'none', marginTop: 4, fontFamily: 'Plus Jakarta Sans', display: 'inline-block' }}>Learn More &rarr;</a>
          </div>
        </section>
        
        {/* Yellow CTA Banner Section */}
        <section style={{ 
          background: '#FFD400', 
          borderRadius: '32px', 
          margin: '64px auto', 
          maxWidth: '1200px',
          width: 'calc(100% - 48px)',
          padding: '40px 60px',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: '40px',
          flexWrap: 'wrap',
          position: 'relative'
        }}>
       

          {/* Left: Text Content */}
          <div style={{ 
            flex: '2', 
            minWidth: '400px',
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px'
          }}>
            <h2 style={{ 
              color: '#23282B', 
              fontSize: '2.5rem', 
              fontWeight: 700, 
              lineHeight: 1.1,
              margin: 0,
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
              Grow your business with Workiz
            </h2>
            <p style={{ 
              color: '#23282B', 
              fontSize: '1.1rem', 
              fontWeight: 400,
              lineHeight: 1.5,
              margin: 0,
              maxWidth: '500px',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
              The leading field service platform for teams. Schedule jobs, dispatch, invoice, track performance, and get paid — all in one platform.
            </p>
          </div>

          {/* Right: Buttons */}
          <div style={{ 
            flex: '1', 
            minWidth: '280px',
            display: 'flex', 
            flexDirection: 'column', 
            gap: '12px',
            alignItems: 'flex-end'
          }}>
            <button style={{
              background: '#23282B',
              color: '#FFD400',
              border: 'none',
              borderRadius: '8px',
              padding: '14px 32px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              width: '200px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: 'all 0.2s ease'
            }}>
              Get started free
            </button>
            <button style={{
              background: 'transparent',
              color: '#23282B',
              border: '2px solid #23282B',
              borderRadius: '8px',
              padding: '14px 32px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              width: '200px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: 'all 0.2s ease'
            }}>
              Book a demo
            </button>
          </div>
        </section>

        {/* Pricing Section */}
        <div style={{ 
          background: '#fff', 
          padding: '80px 0',
          textAlign: 'center',
          maxWidth: '1200px', 
          margin: '0 auto'
        }}>
          {/* Heading */}
          <h2 style={{ 
            color: '#23282B', 
            fontSize: '2.3rem', 
            fontWeight: 700, 
            lineHeight: 1.2,
            marginBottom: '60px',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            maxWidth: '900px',
            margin: '0 auto 60px auto'
          }}>
            Finally, a field service software that's easy,<br />powerful & fairly priced
          </h2>

          {/* Toggle Section */}
          <div style={{
            display: 'inline-flex',
            background: '#f1f5f9',
            borderRadius: '50px',
            padding: '12px 16px',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px'
          }}>
            {/* Pay Monthly */}
            <span style={{
              color: '#64748b',
              fontSize: '1rem',
              fontWeight: 500,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              cursor: 'pointer'
            }}>
              Pay monthly
            </span>

            {/* Pay Annually */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: '#e2e8f0',
              borderRadius: '25px',
              padding: '8px 16px'
            }}>
              <span style={{
                color: '#23282B',
                fontSize: '1rem',
                fontWeight: 500,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                cursor: 'pointer'
              }}>
                Pay annually
              </span>
              <span style={{
                background: '#3b82f6',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.875rem',
                fontWeight: 600
              }}>
                Save 17%
              </span>
            </div>
          </div>

          {/* Pricing Table */}
          <div style={{
            display: 'flex',
            gap: '4px',
            marginTop: '60px',
            justifyContent: 'center',
            padding: '0 10px'
          }}>
            {/* Lite Plan */}
            <div style={{
              flex: '1 1 220px',
              minWidth: '220px',
              maxWidth: '250px',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '16px',
              background: 'white',
              position: 'relative'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px', color: '#23282B', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Lite</h3>
              <p style={{ color: '#64748b', marginBottom: '16px', fontSize: '0.75rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>The lite kit.</p>
              
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#23282B', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Free</div>
                <p style={{ color: '#64748b', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Up to 2 members</p>
              </div>

              <button style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                background: 'white',
                color: '#23282B',
                fontWeight: 600,
                marginBottom: '16px',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>Free for ever</button>

              <div>
                <h4 style={{ fontWeight: 600, marginBottom: '8px', color: '#23282B', fontSize: '0.8rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Key features:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Scheduling
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> 20 Invoices, jobs & estimates
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Mobile app
                  </li>
                </ul>
              </div>
            </div>

            {/* Kickstart Plan */}
            <div style={{
              flex: '1 1 220px',
              minWidth: '220px',
              maxWidth: '250px',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '16px',
              background: 'white',
              position: 'relative'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px', color: '#23282B', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Kickstart</h3>
              <p style={{ color: '#64748b', marginBottom: '16px', fontSize: '0.75rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>The perfect starter kit</p>
              
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '2px' }}>
                  <span style={{ fontSize: '0.8rem', textDecoration: 'line-through', color: '#ef4444', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>$225</span>
                  <span style={{ fontSize: '1.8rem', fontWeight: 700, color: '#23282B', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>$187</span>
                  <span style={{ color: '#64748b', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>/month</span>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Annual billing, incl. first 3 users.</p>
              </div>

              <button style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                background: 'white',
                color: '#23282B',
                fontWeight: 600,
                marginBottom: '16px',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>Start for free</button>

              <div>
                <h4 style={{ fontWeight: 600, marginBottom: '8px', color: '#23282B', fontSize: '0.8rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Key features:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Scheduling
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> 2 Automations
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Invoices, jobs & estimates
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Online payments
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Online booking with checkout
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Built-in reports
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Local number
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Client management
                  </li>
                </ul>
              </div>
            </div>

            {/* Standard Plan */}
            <div style={{
              flex: '1 1 220px',
              minWidth: '220px',
              maxWidth: '250px',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '16px',
              background: 'white',
              position: 'relative'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px', color: '#23282B', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Standard</h3>
              <p style={{ color: '#64748b', marginBottom: '16px', fontSize: '0.75rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>The essential tools to grow and boost efficiency.</p>
              
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '2px' }}>
                  <span style={{ fontSize: '0.8rem', textDecoration: 'line-through', color: '#ef4444', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>$275</span>
                  <span style={{ fontSize: '1.8rem', fontWeight: 700, color: '#23282B', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>$229</span>
                  <span style={{ color: '#64748b', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>/month</span>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Annual billing, incl. first 5 users.</p>
              </div>

              <button style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                background: 'white',
                color: '#23282B',
                fontWeight: 600,
                marginBottom: '16px',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>Start for free</button>

              <div>
                <h4 style={{ fontWeight: 600, marginBottom: '8px', color: '#23282B', fontSize: '0.8rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Everything in Kickstart, plus:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Quickbooks Online
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Total of 5 Automations
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Custom fields
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Location tracking
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Service areas
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Subcontractors management
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Leads tracking
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Reserve with Google
                  </li>
                </ul>
              </div>
            </div>

            {/* Pro Plan - Best Value */}
            <div style={{
              flex: '1 1 220px',
              minWidth: '220px',
              maxWidth: '250px',
              border: '2px solid #FFD400',
              borderRadius: '8px',
              padding: '16px',
              background: '#FFFBEB',
              position: 'relative'
            }}>
              {/* Best Value Badge */}
              <div style={{
                position: 'absolute',
                top: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#FFD400',
                color: '#23282B',
                padding: '4px 12px',
                borderRadius: '16px',
                fontSize: '0.7rem',
                fontWeight: 700,
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                BEST VALUE
              </div>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px', color: '#23282B', fontFamily: "'Plus Jakarta Sans', sans-serif", marginTop: '8px' }}>Pro</h3>
              <p style={{ color: '#64748b', marginBottom: '16px', fontSize: '0.75rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>The perfect plan with AI tools and enhanced automations.</p>
              
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '2px' }}>
                  <span style={{ fontSize: '0.8rem', textDecoration: 'line-through', color: '#ef4444', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>$325</span>
                  <span style={{ fontSize: '1.8rem', fontWeight: 700, color: '#23282B', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>$270</span>
                  <span style={{ color: '#64748b', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>/month</span>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Annual billing, incl. first 5 users.</p>
              </div>

              <button style={{
                width: '100%',
                padding: '8px',
                border: 'none',
                borderRadius: '6px',
                background: '#FFD400',
                color: '#23282B',
                fontWeight: 600,
                marginBottom: '16px',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>Start for free</button>

              <div>
                <h4 style={{ fontWeight: 600, marginBottom: '8px', color: '#23282B', fontSize: '0.8rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Everything in Standard, plus:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Performance pay
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> A total of 10 Automations
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#3b82f6', marginRight: '6px', fontSize: '0.8rem' }}>✦</span> Genius leads
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#3b82f6', marginRight: '6px', fontSize: '0.8rem' }}>✦</span> Genius scheduling <span style={{ background: '#3b82f6', color: 'white', padding: '1px 4px', borderRadius: '8px', fontSize: '0.6rem', marginLeft: '4px' }}>New</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Custom reports
                  </li>
                </ul>
              </div>
            </div>

            {/* Ultimate Plan */}
            <div style={{
              flex: '1 1 220px',
              minWidth: '220px',
              maxWidth: '250px',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '16px',
              background: 'white',
              position: 'relative'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px', color: '#23282B', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Ultimate</h3>
              <p style={{ color: '#64748b', marginBottom: '16px', fontSize: '0.75rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Tailored for big companies and growing teams.</p>
              
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#23282B', marginBottom: '2px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Let's talk</div>
                <p style={{ color: '#64748b', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>The complete plan</p>
              </div>

              <button style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                background: 'white',
                color: '#23282B',
                fontWeight: 600,
                marginBottom: '16px',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>Contact us</button>

              <div>
                <h4 style={{ fontWeight: 600, marginBottom: '8px', color: '#23282B', fontSize: '0.8rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Everything in Pro, plus:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Service plans
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> A total of 30 Automations
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Sales proposals
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Inventory management
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Flat rate <span style={{ background: '#3b82f6', color: 'white', padding: '1px 4px', borderRadius: '8px', fontSize: '0.6rem', marginLeft: '4px' }}>New</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Multi-day jobs
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Equipment tracking
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Purchase orders <span style={{ background: '#3b82f6', color: 'white', padding: '1px 4px', borderRadius: '8px', fontSize: '0.6rem', marginLeft: '4px' }}>New</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Zapier integration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Workiz Pay Section */}
        <section style={{ 
          width: '100%', 
          display: 'flex', 
          gap: '48px', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          background: '#f6f8fa', 
          border: 'none', 
          boxShadow: 'none', 
          padding: '64px 0' 
        }}>
          {/* Left: Text Content */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '600px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            gap: '12px', 
            paddingLeft: '32px' 
          }}>
            <div style={{ 
              color: '#f25c4d', 
              fontWeight: 700, 
              fontSize: '14px', 
              letterSpacing: '1px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              textTransform: 'uppercase' 
            }}>
              PLUMBING BUSINESS SOFTWARE
            </div>
            <div style={{ 
              color: '#23282B', 
              fontWeight: 700, 
              fontSize: '40px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              lineHeight: 1.1 
            }}>
              Get total financial control with Workiz pay
            </div>
            <div style={{ 
              color: '#23282B', 
              fontSize: '18px', 
              fontWeight: 400, 
              marginBottom: '24px', 
              lineHeight: 1.4 
            }}>
              Our all-in-one plumbing business software suite allows you to manage all your financial operations and continue to grow. We offer a complete payment solution for your business with our WorkizPay. The card readers let you get paid on the spot, collect tips, and give better customer service. Get the green light from your customers for high-priced plumbing jobs with flexible payment options.
            </div>
            <a href="#" style={{ 
              color: '#23282B', 
              fontWeight: 500, 
              fontSize: '18px', 
              textDecoration: 'none', 
              marginTop: '4px', 
              fontFamily: 'Plus Jakarta Sans', 
              display: 'inline-block' 
            }}>
              Learn More →
            </a>
          </div>
          
          {/* Right: Image */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '700px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingRight: '32px' 
          }}>
            <img
              src="/images/plumbing-bussiness.webp"
              alt="Workiz Pay Financial Control Interface"
              style={{ 
                width: '100%', 
                maxWidth: '600px', 
                borderRadius: '24px', 
                boxShadow: '0 4px 32px rgba(0,0,0,0.10)' 
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        {/* Automations Section */}
        <section style={{ 
          width: '100%', 
          display: 'flex', 
          gap: '48px', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          background: '#fff', 
          border: 'none', 
          boxShadow: 'none', 
          padding: '64px 0' 
        }}>
          {/* Left: Image */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '600px', 
            display: 'flex', 
            justifyContent: 'center',
            paddingLeft: '32px'
          }}>
            <img
              src="/images/automations-illustration-2.webp"
              alt="Automations Interface - When this happens, do this action"
              style={{ 
                width: '100%', 
                maxWidth: '600px', 
                borderRadius: '24px', 
                boxShadow: '0 4px 32px rgba(0,0,0,0.10)' 
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
          
          {/* Right: Text Content */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '600px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            gap: '12px',
            paddingRight: '32px'
          }}>
            <div style={{ 
              color: '#22c55e', 
              fontWeight: 700, 
              fontSize: '14px', 
              letterSpacing: '1px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              textTransform: 'uppercase' 
            }}>
              AUTOMATIONS
            </div>
            <div style={{ 
              color: '#23282B', 
              fontWeight: 700, 
              fontSize: '40px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              lineHeight: 1.1 
            }}>
              Revolutionize your customer service
            </div>
            <div style={{ 
              color: '#23282B', 
              fontSize: '18px', 
              fontWeight: 400, 
              marginBottom: '32px', 
              lineHeight: 1.4 
            }}>
              Deliver the best customer service, get paid on time and get more reviews when you automate tasks in the automation center. Send "on my way" text messages, estimates and invoices and after a job is complete automatically send a review request and keep your plumbing business running like a well oiled machine.
            </div>
            <button style={{ 
              background: '#FFD400', 
              color: '#23282B', 
              fontWeight: 600, 
              fontSize: '18px', 
              padding: '16px 32px', 
              borderRadius: '8px', 
              border: 'none', 
              cursor: 'pointer', 
              width: 'fit-content', 
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              fontFamily: 'Plus Jakarta Sans'
            }}>
              Start free trial
            </button>
          </div>
        </section>

        {/* Multi-day Jobs Section */}
        <section style={{ 
          width: '100%', 
          display: 'flex', 
          gap: '48px', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          background: '#f6f8fa', 
          border: 'none', 
          boxShadow: 'none', 
          padding: '64px 0' 
        }}>
          {/* Left: Text Content */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '600px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            gap: '12px', 
            paddingLeft: '32px' 
          }}>
            <div style={{ 
              color: '#f25c4d', 
              fontWeight: 700, 
              fontSize: '14px', 
              letterSpacing: '1px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              textTransform: 'uppercase' 
            }}>
              MULTI-DAY JOBS
            </div>
            <div style={{ 
              color: '#23282B', 
              fontWeight: 700, 
              fontSize: '40px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              lineHeight: 1.1 
            }}>
              Complex plumbing jobs managed efficiently
            </div>
            <div style={{ 
              color: '#23282B', 
              fontSize: '18px', 
              fontWeight: 400, 
              marginBottom: '24px', 
              lineHeight: 1.4 
            }}>
              Track progress of multi-day plumbing jobs with tasks. You can assign more than one technician to a task and ensure efficient collaboration and job management. With the progress bar you will never miss a step and get more jobs done on time.
            </div>
            <a href="#" style={{ 
              color: '#23282B', 
              fontWeight: 500, 
              fontSize: '18px', 
              textDecoration: 'none', 
              marginTop: '4px', 
              fontFamily: 'Plus Jakarta Sans', 
              display: 'inline-block' 
            }}>
              Learn More →
            </a>
          </div>
          
          {/* Right: Image */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '700px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingRight: '32px' 
          }}>
            <img
              src="/images/multiday-jobs.webp"
              alt="Multi-day Jobs Calendar Interface"
              style={{ 
                width: '100%', 
                maxWidth: '600px', 
                borderRadius: '24px', 
                boxShadow: '0 4px 32px rgba(0,0,0,0.10)' 
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        {/* Client Plans Section */}
        <section style={{ 
          background: '#F5F5F5', 
          paddingTop: '64px', 
          paddingBottom: '64px', 
          width: '100%' 
        }}>
          <div style={{ 
            maxWidth: '1400px', 
            margin: '0 auto', 
            paddingLeft: '32px', 
            paddingRight: '32px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '32px', 
            flexWrap: 'wrap', 
            minHeight: '600px' 
          }}>
            
            {/* Left: Image */}
            <div style={{ 
              flex: 1, 
              minWidth: '340px', 
              maxWidth: '700px', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              paddingLeft: '32px' 
            }}>
              <img
                src="/images/client-plans.png"
                alt="Client Plans Management Interface"
                style={{ 
                  width: '100%', 
                  maxWidth: '600px', 
                  borderRadius: '24px', 
                  boxShadow: '0 4px 32px rgba(0,0,0,0.10)' 
                }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Right: Content */}
            <div style={{ 
              flex: 1, 
              minWidth: '340px', 
              maxWidth: '700px', 
              paddingLeft: '32px' 
            }}>
              <div style={{ 
                color: '#00C896', 
                fontSize: '14px', 
                fontWeight: 600, 
                letterSpacing: '2px', 
                marginBottom: '12px', 
                fontFamily: 'Plus Jakarta Sans', 
                textTransform: 'uppercase' 
              }}>
                PLUMBING FIELD SERVICE SOFTWARE
              </div>
              <div style={{ 
                color: '#23282B', 
                fontWeight: 700, 
                fontSize: '40px', 
                marginBottom: '8px', 
                fontFamily: 'Plus Jakarta Sans', 
                lineHeight: 1.1 
              }}>
                Build recurring customers with Workiz service plans
              </div>
              <div style={{ 
                color: '#23282B', 
                fontSize: '18px', 
                fontWeight: 400, 
                marginBottom: '24px', 
                lineHeight: 1.4 
              }}>
                Maintain a consistent cash flow all year round by tracking and arranging maintenance visits using automatic scheduling designed for your plumbing business. Streamline your servicing process and save valuable time with automatic alerts, enabling you to manage repeat maintenance tasks efficiently.
              </div>
              <a href="#" style={{ 
                color: '#23282B', 
                fontWeight: 500, 
                fontSize: '18px', 
                textDecoration: 'none', 
                marginTop: '4px', 
                fontFamily: 'Plus Jakarta Sans', 
                display: 'inline-block' 
              }}>
                Learn More →
              </a>
            </div>
          </div>
        </section>

        {/* Video Modal */}
        {isVideoOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={() => setIsVideoOpen(false)}
          >
            <div
              className="bg-black rounded-xl overflow-hidden shadow-lg relative"
              style={{ width: "90vw", maxWidth: 640 }}
              onClick={e => e.stopPropagation()}
            >
              <iframe
                width="640"
                height="360"
                src="https://www.youtube.com/embed/-a-9FMOJkYI?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
              <button
                className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition"
                onClick={() => setIsVideoOpen(false)}
              >
                <svg width="24" height="24" fill="none" stroke="#23282b" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 6l12 12M6 18L18 6"/>
                </svg>
              </button>
            </div>
          </div>
        )}
        
        <Integrations />
        <FaqSection />
        <FooterSection />
      </>
    );
  }
  
  if (industry === 'electricians') {
    return (
      <>
        <div style={{ display: 'flex', minHeight: '500px', width: '100%', marginTop: '80px', border: 'none', boxShadow: 'none', background: '#fff' }}>
          {/* Left Side */}
          <div style={{ background: '#FFD400', flex: 1, padding: '48px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ color: '#23282B', fontWeight: 600, marginBottom: 16, letterSpacing: 2 }}>ELECTRICAL CONTRACTOR SOFTWARE</div>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
              <span style={{ background: '#fff', padding: '0 8px', borderRadius: '4px', display: 'inline-block' }}>Boost revenue</span><br />
              by 30% with<br />
              electrician software
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#23282B', marginBottom: 32, maxWidth: 600 }}>
              Electrical contractors that use Workiz increase their revenue by 22%! Manage your jobs, get paid in the field, and join over 120,000 pros who trust Workiz to grow their business.
            </p>
            <button style={{ background: '#23282B', color: '#ffd400', fontWeight: 600, fontSize: '1.25rem', padding: '16px 40px', borderRadius: 8, border: 'none', marginBottom: 32, cursor: 'pointer', width: 'fit-content' }}>Book a demo</button>
            <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src="/images/captera.webp" alt="Capterra" style={{ height: 38 }} />
                <span style={{ color: '#FFD400' }}>★★★★★</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src="/images/software1.webp" alt="Software Advice" style={{ height: 38 }} />
                <span style={{ color: '#FFD400' }}>★★★★★</span>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div style={{ flex: 1, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', border: 'none', boxShadow: 'none' }}>
            <img src="/images/repair-person.webp" alt="Electrician Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopRightRadius: 0, borderBottomRightRadius: 0 }} />
            

          </div>
        </div>

        {/* Win 3X More Jobs Section */}
        <section style={{ 
          background: '#23282B', 
          padding: '24px 0',
          width: '100%' 
        }}>
          <div style={{ 
            maxWidth: '1400px', 
            margin: '0 auto', 
            paddingLeft: '32px', 
            paddingRight: '32px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            
            {/* Left: Win 3X more jobs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, #E91E63, #9C27B0)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h7v8l10-12h-7z"/>
                </svg>
              </div>
              <div style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                color: 'white',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                Win 3X more jobs
              </div>
            </div>

            {/* Right: Award badges */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <img 
                src="/images/badge-1.png" 
                alt="Momentum Leader 2025" 
                style={{ height: '55px', width: 'auto' }}
              />
              <img 
                src="/images/bdge-2.png" 
                alt="High Performer Winter 2024" 
                style={{ height: '55px', width: 'auto' }}
              />
              <img 
                src="/images/badge-3.png" 
                alt="Leader 2025" 
                style={{ height: '55px', width: 'auto' }}
              />
              <img 
                src="/images/badge-4.png" 
                alt="Best Business Leader" 
                style={{ height: '55px', width: 'auto' }}
              />
              <img 
                src="/images/badge-5.png" 
                alt="Leader Winter 2024" 
                style={{ height: '55px', width: 'auto' }}
              />
            </div>
          </div>
        </section>

        {/* Features Section - Inventory & Online Booking */}
        <section style={{ 
          background: '#fff', 
          padding: '80px 0',
          width: '100%' 
        }}>
          <div style={{ 
            maxWidth: '1400px', 
            margin: '0 auto', 
            paddingLeft: '32px', 
            paddingRight: '32px', 
            display: 'flex', 
            gap: '32px',
            flexWrap: 'wrap',
            alignItems: 'stretch'
          }}>
            
            {/* Left Card - Inventory Tracking */}
            <div style={{ 
              background: 'linear-gradient(169.48deg, #096187 5.7%, #23282B 98.96%)',
              borderRadius: '16px', 
              flex: '1',
              minWidth: '500px',
              position: 'relative',
              overflow: 'hidden',
              height: '100%'
            }}>
              {/* Background Image */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '60%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end'
              }}>
                <img 
                  src="https://www.workiz.com/wp-content/uploads/2024/08/feature-block-inventory-electrician-desktop.webp"
                  alt="Feature Block Inventory Electrician Desktop"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Content */}
              <div style={{
                position: 'relative',
                zIndex: 3,
                padding: '40px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '50%'
              }}>
                <div>
                  <div style={{ 
                    fontSize: '12px', 
                    fontWeight: 500, 
                    letterSpacing: '2px',
                    marginBottom: '16px',
                    color: 'white',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    INVENTORY
                  </div>
                  <h3 style={{ 
                    fontSize: '40px', 
                    fontWeight: 700, 
                    lineHeight: 1.1,
                    letterSpacing: '1px',
                    marginBottom: '24px',
                    color: '#FFD400',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    Track your inventory in real-time
                  </h3>
                  <div style={{ 
                    fontSize: '16px', 
                    fontWeight: 400,
                    lineHeight: 1.5,
                    color: 'white',
                    marginBottom: '32px'
                  }}>
                    <p>Cut costs by tracking your inventory with real-time usage data and activity reports.</p>
                  </div>
                </div>
                <div>
                  <a 
                    href="https://www.workiz.com/features/inventory-management/" 
                    style={{
                      background: 'transparent',
                      border: '2px solid white',
                      color: 'white',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textDecoration: 'none',
                      display: 'inline-block',
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>

            {/* Right Card - Online Booking */}
            <div style={{ 
              flex: '1',
              minWidth: '500px'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '8px',
                borderRadius: '16px',
                overflow: 'hidden',
                height: '100%',
                background: 'linear-gradient(180deg, #F6F8FA 0%, #E4E9EC 100%)'
              }}>
                <div style={{
                  position: 'relative',
                  width: '100%'
                }}>
                  {/* Background Layer - Desktop Image */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row'
                  }}>
                    <div style={{ width: '40%' }}></div>
                    <div style={{ 
                      width: '60%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'flex-end'
                    }}>
                      <img 
                        width="640" 
                        height="898"
                        src="https://www.workiz.com/wp-content/uploads/2024/08/Locksmith-online-booking-ElectroTech-desktop.webp"
                        alt="Locksmith Online Booking Electrotech Desktop"
                        style={{
                          width: '100%',
                          height: 'auto'
                        }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>

                  {/* Content Layer */}
                  <div style={{
                    position: 'relative',
                    zIndex: 3,
                    padding: '32px 40px',
                    height: '100%'
                  }}>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'row',
                      height: '100%'
                    }}>
                      {/* Text Column */}
                      <div style={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        paddingRight: '16px',
                        paddingTop: '16px',
                        paddingBottom: '24px',
                        maxWidth: '100%',
                        flexGrow: 1
                      }}>
                        <div>
                          <div style={{
                            fontSize: '12px',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            color: '#1d4ed8',
                            fontFamily: "'Inter', sans-serif",
                            marginBottom: '16px'
                          }}>
                            ONLINE BOOKING
                          </div>
                          <div style={{
                            fontSize: '40px',
                            fontWeight: 700,
                            lineHeight: 1.1,
                            letterSpacing: '1px',
                            marginBottom: '24px',
                            color: '#23282B',
                            fontFamily: "'Plus Jakarta Sans', sans-serif"
                          }}>
                            Be available 24/7
                          </div>
                          <div style={{
                            fontSize: '16px',
                            fontWeight: 400,
                            color: '#666',
                            marginBottom: '32px'
                          }}>
                            <p>Turn leads into jobs, get paid in advance, and increase bookings by 30% with the Workiz Online Booking widget.</p>
                          </div>
                        </div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'flex-end'
                        }}>
                          <a 
                            href="https://www.workiz.com/features/online-booking/"
                            style={{
                              background: 'transparent',
                              border: '2px solid #23282B',
                              color: '#23282B',
                              padding: '12px 24px',
                              borderRadius: '8px',
                              fontSize: '16px',
                              fontWeight: 600,
                              cursor: 'pointer',
                              textDecoration: 'none',
                              display: 'inline-block',
                              fontFamily: "'Plus Jakarta Sans', sans-serif"
                            }}
                          >
                            Online Booking
                          </a>
                        </div>
                      </div>

                      {/* Mobile Image Column */}
                      <div style={{
                        width: '45%',
                        maxWidth: '100%'
                      }}>
                        <img 
                          width="686" 
                          height="384"
                          src="https://www.workiz.com/wp-content/uploads/2024/08/Locksmith-online-booking-ElectroTech-mobile.webp"
                          alt="Locksmith Online Booking Electrotech Mobile"
                          style={{
                            width: '100%',
                            height: 'auto'
                          }}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
         
         {/* Purchase Orders Section */}
         <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#f6f8fa', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: 32 }}>
            <img
              src="/images/orders.webp"
              alt="Orders Table"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Right: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, paddingRight: 32 }}>
            <div style={{ color: '#f25c4d', fontWeight: 700, fontSize: 12, letterSpacing: 1, marginBottom: 8, textTransform: 'uppercase' }}>PURCHASE ORDERS</div>
            <div style={{ color: '#23282B', fontWeight: 560, fontSize: 35, marginBottom: 16, lineHeight: 1.1 }}>Your one–stop shop for order management</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 24, lineHeight: 1.4 }}>
              Quickly create and send purchase orders to vendors, linking items to your price book and relevant jobs. Track orders and monitor statuses, ensuring full visibility and reducing errors.
            </div>
            <button style={{ background: '#FFD400', color: '#23282B', fontWeight: 600, fontSize: 22, padding: '18px 44px', borderRadius: 8, border: 'none', cursor: 'pointer', width: 'fit-content', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>Start free trial</button>
          </div>
        </section>
        
        <Integrations />
        <FaqSection />
        <FooterSection />
      </>
    );
  }
  
  // Convert slug to readable name
  const name = industry.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{name}</h1>
      <p style={{ marginTop: '1rem' }}>This is the dynamic page for <b>{name}</b>. You can add more content here for this industry.</p>
    </div>
  );
}