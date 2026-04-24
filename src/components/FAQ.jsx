import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What's included in the £650?",
    answer:
      "A complete, custom-designed up to 5-page website, mobile optimization, basic SEO setup, domain registration, and hosting for a full year. No hidden costs.",
  },
  {
    question: 'How long does it take?',
    answer:
      'Typically, once we have your content, the site is live and ready within 3 to 5 business days.',
  },
  {
    question: 'Do I need to provide content?',
    answer:
      "Yes, you know your business best! We ask for the raw text and your logo. If you're stuck, we can help structure the copy during our build process.",
  },
  {
    question: "What if I don't like it?",
    answer:
      'We include a dedicated round of revisions before launch to ensure the design matches exactly what you envisioned.',
  },
  {
    question: 'Is there a monthly fee?',
    answer:
      'Your first year of domain and hosting is included. After year one, you only pay the direct renewal cost (usually under £10/month), which you fully control. We charge zero ongoing design fees.',
  },
]

function FAQItem({ question, answer, isOpen, onClick, index }) {
  return (
    <motion.div
      className="border-b border-white/5 last:border-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-4 sm:py-6 text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-[0.95rem] sm:text-lg font-medium text-white group-hover:text-gold transition-colors duration-300 pr-4 sm:pr-6">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gold" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-gray text-sm sm:text-base leading-relaxed pb-4 sm:pb-6 pr-6 sm:pr-10">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-16 sm:py-28 lg:py-36 bg-navy-light px-5 sm:px-0">
      <div className="max-w-3xl mx-auto sm:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-8 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4">
            Common Questions
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Got a question? We've got you.
          </h2>
        </motion.div>

        <div className="rounded-2xl border border-white/[0.06] bg-navy px-4 sm:px-8 py-2 sm:py-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
