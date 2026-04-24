import { motion } from 'framer-motion'
import { MessageCircle, Check } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/601127178420?text=Hi%2C%20I%27m%20interested%20in%20the%20%C2%A3650%20website%20package'

const included = [
  '5-Page Custom Website',
  'Domain & Hosting Included for 1 Year',
  'Mobile & Tablet Optimization',
  'Basic SEO Setup',
  'Contact Form & Links to Socials',
]

export default function Offer() {
  return (
    <section id="offer" className="py-16 sm:py-28 lg:py-36 bg-navy-light px-4 sm:px-0">
      <div className="max-w-3xl mx-auto sm:px-8">
        <motion.div
          className="relative text-center rounded-3xl border border-gold/20 p-6 sm:p-12 md:p-16 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.06)_0%,_transparent_70%)]" />

          <div className="relative z-10">
            <motion.p
              className="text-gold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              The complete package
            </motion.p>

            <h2 className="font-serif text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              Everything you need.
            </h2>
            <p className="font-serif text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray mb-2">
              Nothing you don't.
            </p>

            {/* Comparison price + Main price */}
            <motion.div
              className="my-6 sm:my-10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {/* Strikethrough comparison */}
              <p className="text-gray-dark text-sm sm:text-lg line-through mb-2">
                Agency average: £2,000
              </p>

              {/* Main price — massive and glowing, clamp for mobile */}
              <span
                className="font-serif font-bold text-gold block"
                style={{
                  fontSize: 'clamp(4rem, 18vw, 8rem)',
                  textShadow: '0 0 60px rgba(212,175,55,0.25), 0 0 120px rgba(212,175,55,0.1)',
                }}
              >
                £650
              </span>

              {/* Save badge */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mt-3">
                <span className="inline-block bg-gold/15 text-gold text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
                  Save 67%
                </span>
                <p className="text-gray text-xs sm:text-base">One-time payment · No surprises</p>
              </div>
            </motion.div>

            {/* Included list — single column */}
            <div className="max-w-xs sm:max-w-sm mx-auto mb-8 sm:mb-12">
              {included.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3 py-2.5 sm:py-3 border-b border-white/5 last:border-0"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                >
                  <Check className="w-4 h-4 text-gold flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-white/90 text-[0.85rem] sm:text-base text-left">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA — full width on mobile */}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-bold text-base sm:text-lg w-full sm:w-auto max-w-[320px] sm:max-w-none px-8 sm:px-10 py-4 rounded-full transition-all duration-300 cursor-pointer shadow-[0_0_40px_rgba(212,175,55,0.25)] hover:shadow-[0_0_60px_rgba(212,175,55,0.4)]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              Get Your Website Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
