import { motion } from 'framer-motion'
import { ExternalLink, Monitor } from 'lucide-react'

const demos = [
  {
    name: 'Lumina Beauty Lounge',
    type: 'Beauty & Wellness',
    url: '#',
    placeholder: true,
  },
  {
    name: 'Elite Build Services',
    type: 'Construction & Trade',
    url: '#',
    placeholder: true,
  },
  {
    name: 'The Corner Café',
    type: 'Food & Hospitality',
    url: '#',
    placeholder: true,
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 sm:py-28 lg:py-36 bg-navy px-5 sm:px-0">
      <div className="max-w-6xl mx-auto sm:px-8 lg:px-12">
        <motion.div
          className="text-center mb-10 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            See our work
          </h2>
          <p className="text-gray text-sm sm:text-lg max-w-xl mx-auto">
            Interactive demo sites built with cutting-edge technology.
          </p>
        </motion.div>

        {/* 1 col on mobile, 2 on sm, 3 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {demos.map(({ name, type, url, placeholder }, i) => (
            <motion.a
              key={name}
              href={url}
              target={url !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-white/[0.06] bg-navy-light overflow-hidden hover:border-gold/20 transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              {/* Screenshot / Placeholder area */}
              <div className="relative aspect-[16/10] bg-navy-mid flex items-center justify-center overflow-hidden">
                {placeholder ? (
                  <div className="flex flex-col items-center gap-3 text-gray-dark">
                    <Monitor className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1} />
                    <span className="text-xs tracking-wider uppercase">Coming Soon</span>
                  </div>
                ) : (
                  <img
                    src={`/demos/${name.toLowerCase().replace(/\s+/g, '-')}.webp`}
                    alt={`${name} website preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500 flex items-center justify-center">
                  {url !== '#' && (
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-8 h-8 text-gold" />
                    </div>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-4 sm:p-6">
                <h3 className="font-serif text-base sm:text-lg font-semibold text-white group-hover:text-gold transition-colors duration-300">
                  {name}
                </h3>
                <p className="text-gray text-sm mt-1">{type}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
