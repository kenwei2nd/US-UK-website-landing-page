import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/601127178420?text=Hi%2C%20I%27m%20interested%20in%20the%20%C2%A3650%20website%20package'

export default function FooterCTA() {
  return (
    <section id="final-cta" className="relative py-16 sm:py-32 lg:py-40 bg-navy overflow-hidden px-5 sm:px-0">
      {/* Pronounced golden radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.10)_0%,_rgba(212,175,55,0.04)_30%,_transparent_65%)]" />

      {/* Secondary closer glow behind button area */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)]" />

      {/* Gold divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-gold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4 sm:mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's get started
          </motion.p>

          {/* Headline with clamp */}
          <h2
            className="font-serif font-bold text-white mb-8 sm:mb-12 leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 6vw, 3.75rem)' }}
          >
            Ready to look like the
            <br />
            <span className="text-gold">premier choice</span> in your area?
          </h2>

          {/* CTA — full width on mobile */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-bold text-base sm:text-xl w-full sm:w-auto max-w-[320px] sm:max-w-none px-8 sm:px-14 py-4 sm:py-5 rounded-full transition-all duration-300 cursor-pointer shadow-[0_0_50px_rgba(212,175,55,0.3)] hover:shadow-[0_0_80px_rgba(212,175,55,0.5)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="hidden sm:inline">Chat With Us on WhatsApp</span>
            <span className="sm:hidden">Chat With Us</span>
          </motion.a>
        </motion.div>

        {/* Footer line */}
        <motion.p
          className="mt-16 sm:mt-24 text-gray-dark text-xs tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          © {new Date().getFullYear()} Enable Solution · Built with care for small businesses
        </motion.p>
      </div>
    </section>
  )
}
