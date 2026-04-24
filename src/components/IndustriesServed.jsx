import { motion } from 'framer-motion'
import { Wrench, Scissors, Zap, Home, Coffee, Stethoscope } from 'lucide-react'

const industries = [
  { icon: Wrench, label: 'Plumbers' },
  { icon: Scissors, label: 'Salons' },
  { icon: Zap, label: 'Electricians' },
  { icon: Home, label: 'Cleaners' },
  { icon: Coffee, label: 'Cafes' },
  { icon: Stethoscope, label: 'Clinics' },
]

export default function IndustriesServed() {
  return (
    <section
      id="industries"
      className="relative py-4 sm:py-6 lg:py-8 border-t border-b border-white/5 bg-navy-light"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray text-xs sm:text-sm tracking-wide whitespace-nowrap">
            Built for local businesses
          </p>

          {/* Horizontally scrollable on mobile, wrapping on desktop */}
          <div
            className="flex items-center gap-4 sm:gap-6 md:gap-8 sm:flex-wrap sm:justify-center overflow-x-auto w-full sm:w-auto"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <style>{`.industries-scroll::-webkit-scrollbar { display: none; }`}</style>
            {industries.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                className="flex items-center gap-2 text-gray/70 hover:text-gold transition-colors duration-300 cursor-default flex-shrink-0"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Icon className="w-4 h-4 text-gold/60" strokeWidth={1.5} />
                <span className="text-xs tracking-wider uppercase font-medium whitespace-nowrap">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
