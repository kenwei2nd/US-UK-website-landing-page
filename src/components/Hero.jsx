import { useRef, useEffect, useState, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_URL =
  'https://wa.me/601127178420?text=Hi%2C%20I%27m%20interested%20in%20the%20%C2%A3650%20website%20package'

const serif = "'Playfair Display', Georgia, serif"
const sans = "'Inter', system-ui, sans-serif"

/* helper: clamp font size for mobile frames */
const fs = (base, mob) => `clamp(${mob}px, 1.5vw, ${base}px)`

/* ═══════════════════════════════════════════════════
   DEMO SITE 1 — Elite Plumbing
   Navy #0f1b2d · Copper #b87333
   ═══════════════════════════════════════════════════ */
function PlumberSite({ mobile }) {
  const n = '#0f1b2d'
  const c = '#b87333'
  return (
    <div style={{ height: '100%', background: n, color: '#fff', fontFamily: sans, display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `repeating-linear-gradient(-45deg,transparent,transparent 14px,rgba(184,115,51,0.04) 14px,rgba(184,115,51,0.04) 15px)`, pointerEvents: 'none' }} />
      {/* Nav */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: mobile ? '4px 10px' : '7px 18px', background: 'rgba(15,27,45,0.95)', borderBottom: `1px solid rgba(184,115,51,0.15)`, position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
          <span style={{ fontFamily: serif, fontWeight: 700, fontSize: mobile ? 8 : 12, color: c }}>ELITE</span>
          <span style={{ fontSize: mobile ? 7 : 11, fontWeight: 300, opacity: 0.6 }}>PLUMBING</span>
        </div>
        {!mobile && (
          <div style={{ display: 'flex', gap: 16, fontSize: 8, opacity: 0.45, letterSpacing: 0.5 }}>
            <span>Services</span><span>About</span><span>Reviews</span>
          </div>
        )}
        <div style={{ fontSize: mobile ? 5.5 : 8, fontWeight: 700, padding: mobile ? '2px 6px' : '4px 10px', borderRadius: 5, background: c, color: '#fff', letterSpacing: 0.3 }}>
          Call Now — 24/7
        </div>
      </div>
      {/* Hero */}
      <div style={{ padding: mobile ? '12px 12px 8px' : '28px 28px 18px', position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: mobile ? 5 : 8, letterSpacing: 3, color: c, marginBottom: mobile ? 4 : 10, textTransform: 'uppercase' }}>Emergency Plumbing Services</p>
        <h2 style={{ fontFamily: serif, fontSize: mobile ? 16 : 30, fontWeight: 700, lineHeight: 1.15, marginBottom: mobile ? 4 : 10, margin: 0 }}>
          When It Leaks,<br /><span style={{ color: c }}>We're There.</span>
        </h2>
        <p style={{ fontSize: mobile ? 6 : 9.5, opacity: 0.55, lineHeight: 1.6, maxWidth: mobile ? 160 : 280, marginBottom: mobile ? 6 : 16 }}>
          24/7 emergency plumbing across London & the South East.
        </p>
        <div style={{ display: 'flex', gap: mobile ? 4 : 8 }}>
          <span style={{ fontSize: mobile ? 6 : 9, fontWeight: 600, padding: mobile ? '3px 8px' : '6px 16px', borderRadius: 6, background: c, color: '#fff' }}>📞 Call Now</span>
          <span style={{ fontSize: mobile ? 6 : 9, fontWeight: 500, padding: mobile ? '3px 8px' : '6px 16px', borderRadius: 6, border: `1px solid rgba(184,115,51,0.35)`, color: c }}>Get a Quote</span>
        </div>
      </div>
      {/* Services */}
      <div style={{ padding: mobile ? '6px 12px' : '14px 28px', background: 'rgba(0,0,0,0.25)', borderTop: `1px solid rgba(184,115,51,0.1)`, borderBottom: `1px solid rgba(184,115,51,0.1)`, position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: mobile ? 5 : 7.5, letterSpacing: 2, color: c, textAlign: 'center', marginBottom: mobile ? 4 : 10, textTransform: 'uppercase' }}>Our Services</p>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: mobile ? 4 : 8 }}>
          {[['🔧', 'Emergency\nRepairs'], ['🔥', 'Boiler\nInstall'], ['🚿', 'Bathroom\nFitting'], ['🪠', 'Drain\nClearing']].map(([ico, lbl]) => (
            <div key={lbl} style={{ textAlign: 'center', padding: mobile ? '4px 2px' : '10px 4px', borderRadius: 6, border: '1px solid rgba(184,115,51,0.12)', background: 'rgba(184,115,51,0.05)' }}>
              <div style={{ fontSize: mobile ? 8 : 14, marginBottom: 2 }}>{ico}</div>
              <span style={{ fontSize: mobile ? 5 : 7.5, opacity: 0.7, whiteSpace: 'pre-line', lineHeight: 1.3 }}>{lbl}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Testimonial */}
      <div style={{ padding: mobile ? '6px 12px' : '14px 28px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', gap: 2, marginBottom: mobile ? 2 : 5 }}>
          {'★★★★★'.split('').map((s, i) => <span key={i} style={{ fontSize: mobile ? 6 : 9, color: c }}>{s}</span>)}
        </div>
        <p style={{ fontSize: mobile ? 6 : 8.5, fontFamily: serif, fontStyle: 'italic', opacity: 0.55, lineHeight: 1.55, marginBottom: mobile ? 2 : 5 }}>
          "Burst pipe at 2am. They were here in 30 minutes."
        </p>
        <p style={{ fontSize: mobile ? 5 : 7.5, color: c, fontWeight: 600 }}>— Sarah M., Richmond</p>
      </div>
      {/* CTA strip */}
      <div style={{ marginTop: 'auto', padding: mobile ? '6px 12px' : '12px 28px', background: `linear-gradient(135deg, ${c}, #d4955d)`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: serif, fontSize: mobile ? 7 : 11, fontWeight: 600, color: '#fff' }}>Don't wait until it's worse.</span>
        <span style={{ fontSize: mobile ? 5.5 : 8, fontWeight: 700, padding: mobile ? '2px 6px' : '5px 12px', borderRadius: 5, background: n, color: '#fff' }}>Book a Plumber →</span>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   DEMO SITE 2 — Lumina Beauty Lounge
   Cream #faf6f0 · Dusty rose #c9a99a
   ═══════════════════════════════════════════════════ */
function SalonSite({ mobile }) {
  const cream = '#faf6f0', rose = '#c9a99a', charcoal = '#2d2926'
  return (
    <div style={{ height: '100%', background: cream, color: charcoal, fontFamily: sans, display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle, rgba(201,169,154,0.18) 1px, transparent 1px)`, backgroundSize: '22px 22px', pointerEvents: 'none' }} />
      {/* Nav */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: mobile ? '4px 10px' : '8px 20px', borderBottom: `1px solid rgba(201,169,154,0.25)`, position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
          <span style={{ fontFamily: serif, fontWeight: 700, fontSize: mobile ? 9 : 13, color: charcoal }}>LUMINA</span>
          <span style={{ fontSize: mobile ? 6 : 9, fontWeight: 300, color: rose, letterSpacing: 1.5 }}>BEAUTY LOUNGE</span>
        </div>
        {!mobile && (
          <div style={{ display: 'flex', gap: 16, fontSize: 8, color: charcoal, opacity: 0.4, letterSpacing: 0.5 }}>
            <span>Services</span><span>Gallery</span><span>Book</span>
          </div>
        )}
        <div style={{ fontSize: mobile ? 5.5 : 8, fontWeight: 600, padding: mobile ? '2px 8px' : '4px 12px', borderRadius: 20, background: rose, color: '#fff' }}>Book Now</div>
      </div>
      {/* Hero */}
      <div style={{ flex: '0 0 auto', padding: mobile ? '14px 12px 10px' : '32px 28px 20px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ width: mobile ? 24 : 40, height: 1, background: rose, margin: '0 auto', marginBottom: mobile ? 6 : 12, opacity: 0.5 }} />
        <h2 style={{ fontFamily: serif, fontSize: mobile ? 18 : 34, fontWeight: 700, lineHeight: 1.1, marginBottom: mobile ? 4 : 8, color: charcoal }}>
          Beauty, <span style={{ fontStyle: 'italic', color: rose }}>Elevated.</span>
        </h2>
        <p style={{ fontSize: mobile ? 6 : 10, color: charcoal, opacity: 0.5, lineHeight: 1.6, maxWidth: mobile ? 160 : 260, margin: '0 auto', marginBottom: mobile ? 8 : 16 }}>
          Precision cuts. Flawless colour. Expert care.
        </p>
        <span style={{ display: 'inline-block', fontSize: mobile ? 6 : 9, fontWeight: 600, padding: mobile ? '4px 12px' : '7px 20px', borderRadius: 24, background: charcoal, color: cream, letterSpacing: 0.3 }}>Book Your Appointment</span>
      </div>
      {/* Services */}
      <div style={{ padding: mobile ? '6px 12px' : '14px 28px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2,1fr)' : 'repeat(3,1fr)', gap: mobile ? 6 : 12 }}>
          {[['Cuts & Styling', 'Bespoke cuts tailored to you.'], ['Colour Specialists', 'Balayage & full-colour.'], ['Skin & Beauty', 'Facials & bridal packages.']].map(([title, desc]) => (
            <div key={title} style={{ textAlign: 'center', padding: mobile ? '6px 4px' : '12px 8px', borderTop: `2px solid ${rose}`, background: 'rgba(255,255,255,0.6)' }}>
              <h4 style={{ fontFamily: serif, fontSize: mobile ? 6.5 : 10, fontWeight: 600, marginBottom: 2, color: charcoal }}>{title}</h4>
              <p style={{ fontSize: mobile ? 5 : 7.5, opacity: 0.5, lineHeight: 1.5 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Testimonial */}
      <div style={{ padding: mobile ? '6px 16px' : '14px 36px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p style={{ fontFamily: serif, fontStyle: 'italic', fontSize: mobile ? 6 : 9.5, lineHeight: 1.6, color: charcoal, opacity: 0.5, marginBottom: mobile ? 2 : 6 }}>
          "The attention to detail is extraordinary."
        </p>
        <p style={{ fontSize: mobile ? 5 : 7.5, color: rose, fontWeight: 600 }}>— Emma L.</p>
      </div>
      {/* CTA */}
      <div style={{ marginTop: 'auto', padding: mobile ? '6px 12px' : '14px 28px', background: charcoal, textAlign: 'center' }}>
        <span style={{ fontFamily: serif, fontSize: mobile ? 7 : 11, color: cream, fontWeight: 500 }}>Your best look starts here.</span>
        <span style={{ fontSize: mobile ? 5 : 8, color: rose, marginLeft: mobile ? 6 : 12, fontWeight: 600, letterSpacing: 0.5 }}>View Services →</span>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   DEMO SITE 3 — The Corner Café
   Espresso #2c1810 · Amber #f4a429
   ═══════════════════════════════════════════════════ */
function CafeSite({ mobile }) {
  const espresso = '#2c1810', amber = '#f4a429', cream = '#faf3e8'
  return (
    <div style={{ height: '100%', background: espresso, color: cream, fontFamily: sans, display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(244,164,41,0.035) 10px,rgba(244,164,41,0.035) 11px), repeating-linear-gradient(-45deg,transparent,transparent 10px,rgba(244,164,41,0.035) 10px,rgba(244,164,41,0.035) 11px)`, pointerEvents: 'none' }} />
      {/* Nav */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: mobile ? '4px 10px' : '8px 20px', borderBottom: `1px solid rgba(244,164,41,0.12)`, position: 'relative', zIndex: 2 }}>
        <span style={{ fontFamily: serif, fontWeight: 700, fontSize: mobile ? 8 : 12, color: amber }}>THE CORNER CAFÉ</span>
        {!mobile && (
          <div style={{ display: 'flex', gap: 16, fontSize: 8, opacity: 0.4, letterSpacing: 0.5 }}>
            <span>Menu</span><span>Our Story</span><span>Visit</span>
          </div>
        )}
        <span style={{ fontSize: mobile ? 5.5 : 8, fontWeight: 600, color: amber, letterSpacing: 0.3 }}>Order Now →</span>
      </div>
      {/* Hero — split */}
      <div style={{ display: 'flex', padding: mobile ? '8px 10px' : '20px 28px', gap: mobile ? 8 : 20, position: 'relative', zIndex: 1 }}>
        <div style={{ flex: mobile ? '0 0 50px' : '0 0 140px', borderRadius: 12, background: `linear-gradient(160deg, rgba(244,164,41,0.15) 0%, rgba(244,164,41,0.05) 100%)`, border: `1px solid rgba(244,164,41,0.12)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 4 }}>
          <span style={{ fontSize: mobile ? 16 : 32 }}>☕</span>
          <span style={{ fontSize: mobile ? 4 : 7, letterSpacing: 2, textTransform: 'uppercase', color: amber, opacity: 0.6 }}>Est. 2019</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontFamily: serif, fontSize: mobile ? 16 : 30, fontWeight: 700, lineHeight: 1.15, marginBottom: mobile ? 4 : 8 }}>
            Slow Coffee.<br /><span style={{ color: amber }}>Good People.</span>
          </h2>
          <p style={{ fontSize: mobile ? 6 : 9, opacity: 0.5, lineHeight: 1.6, marginBottom: mobile ? 6 : 14 }}>
            Single-origin beans, baked fresh daily.
          </p>
          <span style={{ display: 'inline-block', width: 'fit-content', fontSize: mobile ? 6 : 9, fontWeight: 600, padding: mobile ? '3px 10px' : '6px 18px', borderRadius: 6, background: amber, color: espresso }}>Find Us</span>
        </div>
      </div>
      {/* Testimonial */}
      <div style={{ padding: mobile ? '4px 10px' : '10px 28px', borderTop: `1px solid rgba(244,164,41,0.08)`, position: 'relative', zIndex: 1 }}>
        <p style={{ fontFamily: serif, fontStyle: 'italic', fontSize: mobile ? 6 : 9, opacity: 0.45, lineHeight: 1.6, textAlign: 'center', marginBottom: 2 }}>
          "The best flat white in town."
        </p>
        <p style={{ fontSize: mobile ? 5 : 7.5, color: amber, fontWeight: 600, textAlign: 'center' }}>— Tom R.</p>
      </div>
      {/* Menu */}
      <div style={{ padding: mobile ? '4px 10px' : '12px 28px', background: 'rgba(0,0,0,0.2)', borderTop: `1px solid rgba(244,164,41,0.08)`, borderBottom: `1px solid rgba(244,164,41,0.08)`, position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: mobile ? 5 : 7.5, letterSpacing: 2, color: amber, textAlign: 'center', marginBottom: mobile ? 4 : 8, textTransform: 'uppercase' }}>Menu Highlights</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {[['Flat White', '£3.50'], ['Sourdough', '£4.20'], ['Banana Bread', '£3.80']].map(([item, price]) => (
            <div key={item} style={{ textAlign: 'center' }}>
              <span style={{ fontSize: mobile ? 6 : 9, fontWeight: 600, display: 'block', marginBottom: 1 }}>{item}</span>
              <span style={{ fontSize: mobile ? 5 : 8, color: amber }}>{price}</span>
            </div>
          ))}
        </div>
      </div>
      {/* CTA */}
      <div style={{ marginTop: 'auto', padding: mobile ? '4px 10px' : '12px 28px', textAlign: 'center', background: `linear-gradient(135deg, rgba(244,164,41,0.12),rgba(244,164,41,0.04))` }}>
        <span style={{ fontFamily: serif, fontSize: mobile ? 7 : 11, fontWeight: 500, color: cream, opacity: 0.8 }}>Start your morning right.</span>
        <span style={{ fontSize: mobile ? 5 : 8, color: amber, marginLeft: mobile ? 4 : 10, fontWeight: 600 }}>View Full Menu →</span>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   DEMO SITE 4 — VoltFix Electrical
   Charcoal #1a1a1a · Electric yellow #f5c518
   ═══════════════════════════════════════════════════ */
function ElectricianSite({ mobile }) {
  const dark = '#1a1a1a', yellow = '#f5c518'
  return (
    <div style={{ height: '100%', background: dark, color: '#fff', fontFamily: sans, display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(245,197,24,0.05) 1px,transparent 1px), linear-gradient(90deg,rgba(245,197,24,0.05) 1px,transparent 1px)`, backgroundSize: '30px 30px', pointerEvents: 'none' }} />
      {/* Nav */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: mobile ? '4px 10px' : '7px 20px', borderBottom: `2px solid ${yellow}`, position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ fontSize: mobile ? 8 : 14, color: yellow }}>⚡</span>
          <span style={{ fontWeight: 800, fontSize: mobile ? 8 : 12, letterSpacing: 1 }}>VOLTFIX</span>
        </div>
        {!mobile && (
          <div style={{ display: 'flex', gap: 16, fontSize: 8, opacity: 0.4, letterSpacing: 0.5 }}>
            <span>Services</span><span>Certifications</span><span>Contact</span>
          </div>
        )}
        <div style={{ fontSize: mobile ? 5.5 : 8, fontWeight: 700, padding: mobile ? '2px 6px' : '4px 12px', borderRadius: 4, background: yellow, color: dark }}>Get a Quote</div>
      </div>
      {/* Hero */}
      <div style={{ padding: mobile ? '8px 12px 6px' : '20px 28px 14px', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
        <span style={{ position: 'absolute', right: mobile ? 8 : 20, top: -5, fontFamily: serif, fontSize: mobile ? 50 : 100, fontWeight: 800, color: yellow, opacity: 0.06, lineHeight: 1 }}>24/7</span>
        <p style={{ fontSize: mobile ? 5 : 8, letterSpacing: 3, color: yellow, marginBottom: mobile ? 4 : 8, textTransform: 'uppercase' }}>NICEIC Certified</p>
        <h2 style={{ fontFamily: serif, fontSize: mobile ? 16 : 28, fontWeight: 700, lineHeight: 1.15, marginBottom: mobile ? 4 : 8 }}>
          Wired Right.<br /><span style={{ color: yellow }}>First Time.</span>
        </h2>
        <p style={{ fontSize: mobile ? 6 : 9.5, opacity: 0.5, lineHeight: 1.6, maxWidth: mobile ? 160 : 280, marginBottom: mobile ? 6 : 14 }}>
          Domestic & commercial. Fully insured and guaranteed.
        </p>
        <span style={{ fontSize: mobile ? 6 : 9, fontWeight: 700, padding: mobile ? '3px 10px' : '6px 18px', borderRadius: 4, background: yellow, color: dark }}>⚡ Get a Quote</span>
      </div>
      {/* Services 2×2 */}
      <div style={{ padding: mobile ? '4px 12px' : '10px 28px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: mobile ? 3 : 6 }}>
          {[['Rewiring', 'Full & partial rewires'], ['Fuse Boards', 'Consumer unit upgrades'], ['Lighting', 'LED, smart, outdoor'], ['EV Charging', 'Home charger install']].map(([t, d]) => (
            <div key={t} style={{ padding: mobile ? '4px 6px' : '10px 12px', border: `1px solid rgba(245,197,24,0.15)`, borderLeft: `3px solid ${yellow}`, background: 'rgba(245,197,24,0.03)' }}>
              <h4 style={{ fontSize: mobile ? 6 : 9, fontWeight: 700, marginBottom: 1 }}>{t}</h4>
              <p style={{ fontSize: mobile ? 5 : 7.5, opacity: 0.45, lineHeight: 1.4 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
      {/* CTA bar */}
      <div style={{ padding: mobile ? '4px 10px' : '10px 28px', background: yellow, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: mobile ? 4 : 10, position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: mobile ? 6 : 10, fontWeight: 700, color: dark }}>Safe. Certified. Guaranteed.</span>
        <span style={{ fontSize: mobile ? 5 : 8, fontWeight: 700, padding: mobile ? '2px 6px' : '4px 10px', borderRadius: 4, background: dark, color: '#fff' }}>Call Now →</span>
      </div>
      {/* Testimonial */}
      <div style={{ padding: mobile ? '4px 10px' : '12px 28px', position: 'relative', zIndex: 1, marginTop: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: mobile ? 4 : 8 }}>
          <div style={{ width: mobile ? 16 : 28, height: mobile ? 16 : 28, borderRadius: '50%', background: `linear-gradient(135deg, ${yellow}, rgba(245,197,24,0.4))`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: mobile ? 7 : 12, color: dark, fontWeight: 700, flexShrink: 0 }}>J</div>
          <div>
            <p style={{ fontFamily: serif, fontStyle: 'italic', fontSize: mobile ? 5.5 : 8.5, opacity: 0.5, lineHeight: 1.5, marginBottom: 1 }}>"Rewired our entire house in 3 days."</p>
            <p style={{ fontSize: mobile ? 5 : 7, color: yellow, fontWeight: 600 }}>— James K.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   DEMO SITE 5 — Restore Physio
   White #ffffff · Deep teal #1a5f7a
   ═══════════════════════════════════════════════════ */
function ClinicSite({ mobile }) {
  const white = '#ffffff', teal = '#1a5f7a', grey = '#6b7280'
  return (
    <div style={{ height: '100%', background: white, color: '#1a1a2e', fontFamily: sans, display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 85% 15%, rgba(26,95,122,0.06) 0%, transparent 45%), radial-gradient(circle at 10% 85%, rgba(26,95,122,0.04) 0%, transparent 35%)`, pointerEvents: 'none' }} />
      {/* Nav */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: mobile ? '4px 10px' : '8px 20px', borderBottom: `1px solid rgba(26,95,122,0.1)`, position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <div style={{ width: mobile ? 5 : 8, height: mobile ? 5 : 8, borderRadius: '50%', background: teal }} />
          <span style={{ fontFamily: serif, fontWeight: 700, fontSize: mobile ? 8 : 12, color: teal }}>Restore</span>
          <span style={{ fontSize: mobile ? 6 : 9, fontWeight: 300, color: grey }}>Physio</span>
        </div>
        {!mobile && (
          <div style={{ display: 'flex', gap: 16, fontSize: 8, color: grey, opacity: 0.6, letterSpacing: 0.5 }}>
            <span>Services</span><span>Our Team</span><span>Book</span>
          </div>
        )}
        <div style={{ fontSize: mobile ? 5.5 : 8, fontWeight: 600, padding: mobile ? '2px 8px' : '4px 14px', borderRadius: 20, background: teal, color: '#fff' }}>Book</div>
      </div>
      {/* Hero */}
      <div style={{ flex: '0 0 auto', padding: mobile ? '14px 12px 10px' : '36px 28px 20px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: mobile ? 5 : 8, letterSpacing: 3, color: teal, marginBottom: mobile ? 4 : 10, textTransform: 'uppercase' }}>Expert Physiotherapy</p>
        <h2 style={{ fontFamily: serif, fontSize: mobile ? 17 : 32, fontWeight: 700, lineHeight: 1.15, marginBottom: mobile ? 4 : 8, color: '#1a1a2e' }}>
          Your Recovery<br /><span style={{ color: teal }}>Starts Here.</span>
        </h2>
        <p style={{ fontSize: mobile ? 6 : 9.5, color: grey, lineHeight: 1.6, maxWidth: mobile ? 160 : 260, margin: '0 auto', marginBottom: mobile ? 8 : 16 }}>
          Evidence-based treatment. Hands-on care.
        </p>
        <span style={{ display: 'inline-block', fontSize: mobile ? 6 : 9, fontWeight: 600, padding: mobile ? '4px 12px' : '7px 20px', borderRadius: 24, background: teal, color: '#fff' }}>Book a Consultation</span>
      </div>
      {/* Testimonial */}
      <div style={{ padding: mobile ? '4px 16px' : '10px 36px', textAlign: 'center', borderTop: `1px solid rgba(26,95,122,0.08)`, borderBottom: `1px solid rgba(26,95,122,0.08)`, background: 'rgba(26,95,122,0.02)', position: 'relative', zIndex: 1 }}>
        <p style={{ fontFamily: serif, fontStyle: 'italic', fontSize: mobile ? 6 : 9, color: grey, lineHeight: 1.6, marginBottom: 2 }}>
          "My shoulder pain is completely gone."
        </p>
        <p style={{ fontSize: mobile ? 5 : 7.5, color: teal, fontWeight: 600 }}>— Richard P.</p>
      </div>
      {/* Services — pills */}
      <div style={{ padding: mobile ? '6px 10px' : '14px 28px', position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: mobile ? 5 : 7.5, letterSpacing: 2, color: teal, textAlign: 'center', marginBottom: mobile ? 4 : 10, textTransform: 'uppercase' }}>What We Treat</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: mobile ? 3 : 6, justifyContent: 'center' }}>
          {['Back Pain', 'Sports Injuries', 'Post-Surgery', 'Joint Pain', 'Chronic Pain'].map((s) => (
            <span key={s} style={{ fontSize: mobile ? 5 : 7.5, padding: mobile ? '2px 6px' : '5px 12px', borderRadius: 20, border: `1px solid rgba(26,95,122,0.2)`, color: teal, background: 'rgba(26,95,122,0.04)', fontWeight: 500 }}>{s}</span>
          ))}
        </div>
      </div>
      {/* CTA */}
      <div style={{ marginTop: 'auto', padding: mobile ? '6px 12px' : '14px 28px', background: teal, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: mobile ? 6 : 12 }}>
        <span style={{ fontFamily: serif, fontSize: mobile ? 7 : 11, color: '#fff', fontWeight: 500 }}>Take the first step.</span>
        <span style={{ fontSize: mobile ? 5 : 8, fontWeight: 700, padding: mobile ? '2px 8px' : '4px 12px', borderRadius: 20, background: '#fff', color: teal }}>Book Now →</span>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   NICHE CONFIG
   ═══════════════════════════════════════════════════ */
const niches = [
  { name: 'Elite Plumbing', url: 'eliteplumbing.co.uk', Site: PlumberSite },
  { name: 'Lumina Beauty Lounge', url: 'luminabeauty.co.uk', Site: SalonSite },
  { name: 'The Corner Café', url: 'thecornercafe.co.uk', Site: CafeSite },
  { name: 'VoltFix Electrical', url: 'voltfix.co.uk', Site: ElectricianSite },
  { name: 'Restore Physio', url: 'restorephysio.co.uk', Site: ClinicSite },
]

/* ═══════════════════════════════════════════════════
   BROWSER FRAME WRAPPER
   ═══════════════════════════════════════════════════ */
const BrowserFrame = forwardRef(function BrowserFrame({ niche, style, className, mobile }, ref) {
  const { Site, url } = niche
  return (
    <div
      ref={ref}
      className={`absolute rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 ${className || ''}`}
      style={{ ...style, display: 'flex', flexDirection: 'column', willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}
    >
      {/* Chrome bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: mobile ? 4 : 8, padding: mobile ? '3px 8px' : '6px 14px', background: '#1e1e2e', borderBottom: '1px solid rgba(255,255,255,0.05)', flexShrink: 0 }}>
        <div style={{ display: 'flex', gap: mobile ? 3 : 5 }}>
          <span style={{ width: mobile ? 6 : 9, height: mobile ? 6 : 9, borderRadius: '50%', background: '#ff5f57', display: 'block' }} />
          <span style={{ width: mobile ? 6 : 9, height: mobile ? 6 : 9, borderRadius: '50%', background: '#febc2e', display: 'block' }} />
          <span style={{ width: mobile ? 6 : 9, height: mobile ? 6 : 9, borderRadius: '50%', background: '#28c840', display: 'block' }} />
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 5, padding: mobile ? '1px 6px' : '2px 12px', fontSize: mobile ? 6 : 9, color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', maxWidth: mobile ? 120 : 220, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {url}
          </div>
        </div>
        <div style={{ width: mobile ? 14 : 30 }} />
      </div>
      {/* Site content */}
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        <Site mobile={mobile} />
      </div>
    </div>
  )
})

/* ═══════════════════════════════════════════════════
   HERO — Main Export
   GSAP ScrollTrigger 3D browser showcase
   ═══════════════════════════════════════════════════ */
export default function Hero() {
  const outerRef = useRef(null)
  const pinnedRef = useRef(null)
  const heroContentRef = useRef(null)
  const progressBarRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const frameRefs = useRef([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    // Removed normalizeScroll as it can cause an 'auto-scrolling' or hijacked feel on mobile
    // if ('ontouchstart' in window) {
    //   ScrollTrigger.normalizeScroll(true)
    // }

    const timeout = setTimeout(() => {
      const ctx = gsap.context(() => {
        const frames = frameRefs.current.filter(Boolean)
        if (frames.length === 0) return

        const mob = window.innerWidth < 768

        // If mobile, disable the scroll animation entirely and show a static hero
        if (mob) {
          gsap.set(frames[0], { z: -50, scale: 0.95, opacity: 0.15, rotateX: 0 })
          frames.slice(1).forEach(f => gsap.set(f, { display: 'none' }))
          gsap.set(heroContentRef.current, { opacity: 1, scale: 1, y: 0 })
          gsap.set(progressBarRef.current, { display: 'none' })
          return // Skip timeline creation
        }

        const zFar = -2000
        const zPast = 500

        /* ── initial states ───────────── */
        gsap.set(frames[0], { z: mob ? -180 : -300, scale: 0.88, opacity: 0.95, rotateX: 3 })
        frames.slice(1).forEach((f) => {
          gsap.set(f, { z: zFar, scale: 0.3, opacity: 0, rotateX: 8 })
        })
        gsap.set(heroContentRef.current, { opacity: 0, scale: 0.95, y: 30 })
        gsap.set(progressBarRef.current, { scaleY: 0 })

        /* ── main timeline ─────────────── */
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: outerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
            pin: pinnedRef.current,
            anticipatePin: 1,
          },
        })

        tl.to(progressBarRef.current, { scaleY: 1, duration: 5, ease: 'none' }, 0)
        tl.to(scrollIndicatorRef.current, { opacity: 0, y: -10, duration: 0.12 }, 0)

        const frameDuration = 0.8
        const holdDuration = 0.15
        const gap = 0.1

        // Frame 0
        tl.to(frames[0], { z: 0, scale: 1, opacity: 1, rotateX: 0, duration: 0.25, ease: 'power2.out' }, 0)
        tl.to(frames[0], { duration: holdDuration }, 0.25)
        tl.to(frames[0], { z: zPast, scale: 1.6, opacity: 0, duration: frameDuration * 0.35, ease: 'power2.in' }, 0.25 + holdDuration)

        const frame0End = 0.25 + holdDuration + frameDuration * 0.35

        for (let i = 1; i < frames.length; i++) {
          const start = frame0End + (i - 1) * (frameDuration + gap)
          tl.to(frames[i], { z: 0, scale: 1, opacity: 1, rotateX: 0, duration: frameDuration * 0.5, ease: 'power2.out' }, start)
          tl.to(frames[i], { duration: holdDuration }, start + frameDuration * 0.5)
          tl.to(frames[i], { z: zPast, scale: 1.6, opacity: 0, duration: frameDuration * 0.35, ease: 'power2.in' }, start + frameDuration * 0.5 + holdDuration)
        }

        const lastIdx = frames.length - 1
        const heroStart = frame0End + (lastIdx - 1) * (frameDuration + gap) + frameDuration + 0.1
        tl.to(heroContentRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power2.out' }, heroStart)
      }, outerRef)

      return () => ctx.revert()
    }, 120)

    return () => clearTimeout(timeout)
  }, [isMobile])

  // Frame dimensions: 85vw on mobile, 900px on desktop
  // Using aspect ratio 9:6 (same as 900:600 ≈ 900:580)
  const fw = isMobile ? Math.min(window.innerWidth * 0.85, 380) : 900
  const fh = isMobile ? Math.round(fw * (6 / 9)) : 580
  const perspective = isMobile ? '800px' : '1200px'

  return (
    <section id="hero" ref={outerRef} className="relative" style={{ height: isMobile ? '100vh' : '600vh', minHeight: isMobile ? '600px' : 'auto' }}>
      {/* Pinned viewport */}
      <div ref={pinnedRef} className="h-screen w-full overflow-hidden flex items-center justify-center relative">
        {/* BG — radial gold glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.08)_0%,_transparent_50%)]" />
        {/* BG — subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(250,250,250,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,250,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Scroll progress bar — 2px on mobile, 3px on desktop */}
        <div
          ref={progressBarRef}
          className="fixed right-0 top-0 h-full origin-top z-50"
          style={{
            width: isMobile ? 2 : 3,
            background: 'linear-gradient(to bottom, rgba(212,175,55,0.0), rgba(212,175,55,0.6), rgba(212,175,55,0.0))',
          }}
        />

        {/* 3D frames container */}
        <div
          className="relative flex items-center justify-center"
          style={{ perspective, perspectiveOrigin: '50% 50%', transformStyle: 'preserve-3d', width: fw, height: fh }}
        >
          {niches.map((niche, i) => (
            <BrowserFrame
              key={niche.name}
              niche={niche}
              mobile={isMobile}
              style={{ width: fw, height: fh, left: '50%', top: '50%', marginLeft: -(fw / 2), marginTop: -(fh / 2) }}
              ref={(el) => { frameRefs.current[i] = el }}
            />
          ))}
        </div>

        {/* ── SCROLL indicator ── */}
        {!isMobile && (
          <div
            ref={scrollIndicatorRef}
            className="absolute left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1"
            style={{ bottom: 48 }}
          >
          <motion.span
            style={{
              fontSize: isMobile ? 9 : 10,
              letterSpacing: '0.45em',
              color: '#d4af37',
              fontFamily: sans,
              fontWeight: 500,
              textTransform: 'uppercase',
            }}
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            Scroll
          </motion.span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center -space-y-1.5"
          >
            <ChevronDown style={{ width: isMobile ? 14 : 16, height: isMobile ? 14 : 16, color: '#d4af37', opacity: 0.45 }} />
            <ChevronDown style={{ width: 16, height: 16, color: '#d4af37' }} />
          </motion.div>
        </div>
        )}

        {/* ── Hero content (revealed after all frames) ── */}
        <div ref={heroContentRef} className="absolute inset-0 flex flex-col items-center justify-center z-20 px-5 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold/80 font-sans text-xs sm:text-sm tracking-[0.25em] uppercase mb-6 sm:mb-8">
              Web Design Studio
            </p>
            <h1
              className="font-serif font-bold leading-[1.1] tracking-tight text-white mb-4 sm:mb-6"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}
            >
              Professional websites
              <br />
              for small businesses.
              <br />
              <span className="text-gold" style={{ fontSize: 'clamp(2rem, 7vw, 4.5rem)' }}>£650. Done.</span>
            </h1>
            <p
              className="font-sans text-gray max-w-2xl mx-auto mb-8 sm:mb-12"
              style={{ fontSize: 'clamp(0.9rem, 3vw, 1.1rem)' }}
            >
              Custom designed, mobile-ready, live within days. No monthly fees.
            </p>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-bold text-base sm:text-lg w-full sm:w-auto max-w-[320px] sm:max-w-none px-8 py-4 rounded-full transition-all duration-300 cursor-pointer shadow-[0_0_40px_rgba(212,175,55,0.25)] hover:shadow-[0_0_60px_rgba(212,175,55,0.4)]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              Chat With Us
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
