import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/601127178420?text=Hi%2C%20I%27m%20interested%20in%20the%20%C2%A3650%20website%20package'

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show/hide on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false) // scrolling down
      } else {
        setVisible(true) // scrolling up
      }

      // Background blur after scrolling past hero
      setScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
              ? 'bg-navy/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10'
              : 'bg-transparent'
          }`}
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          exit={{ y: -80 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between h-14 sm:h-16">
            {/* Brand */}
            <a href="#hero" className="flex items-center gap-1.5 group">
              <span className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                Enable
              </span>
              <span className="font-sans text-lg sm:text-xl font-light text-gold">
                Solution
              </span>
            </a>

            {/* CTA — icon only on mobile, full text on sm+ */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light transition-colors duration-300 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Chat With Us on WhatsApp</span>
              <span className="hidden sm:inline text-gold/50">→</span>
            </a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
