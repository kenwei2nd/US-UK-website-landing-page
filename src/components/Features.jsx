import { motion } from 'framer-motion'
import { Palette, Smartphone, Search, Rocket, ShieldOff, Globe } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'No templates. Tailored to your specific brand.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Ready',
    description: 'Flawless experience on phones, where 80% of your customers are.',
  },
  {
    icon: Search,
    title: 'Google-Friendly',
    description: 'Built with clean code and basic SEO setup out of the box.',
  },
  {
    icon: Rocket,
    title: 'Live in Days',
    description: 'Fast turnaround without compromising quality.',
  },
  {
    icon: ShieldOff,
    title: 'No Monthly Fees',
    description: 'You own your site 100%. No recurring hostage situations.',
  },
  {
    icon: Globe,
    title: '1 Year Domain & Hosting',
    description: 'First year of domain registration and web hosting included free.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-28 lg:py-36 bg-navy px-5 sm:px-0">
      <div className="max-w-6xl mx-auto sm:px-8 lg:px-12">
        <motion.div
          className="text-center mb-10 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4">
            What's included
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What you get
          </h2>
          <p className="text-gray text-sm sm:text-lg max-w-xl mx-auto">
            Everything a small business needs to look professional online.
          </p>
        </motion.div>

        {/* 1 col on mobile, 2 on sm, 3 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              className="group relative p-5 sm:p-8 rounded-2xl border border-white/[0.06] border-t-2 border-t-gold/25 bg-navy-card hover:border-t-gold/50 transition-all duration-500 cursor-default shadow-lg shadow-black/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gold/0 group-hover:bg-gold/[0.03] transition-colors duration-500" />

              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-gold/15 transition-colors duration-500">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-base sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">
                  {title}
                </h3>
                <p className="text-gray text-[0.85rem] sm:text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
