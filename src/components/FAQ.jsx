import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, ChevronDown } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const faqs = [
  {
    q: 'Can I bring my children?',
    a: 'We absolutely love your little ones! However, to allow all adults to relax and celebrate freely, we have decided to keep the evening adults-only (18+). We hope you understand and can arrange childcare for the night.',
  },
  {
    q: "What's the best way to get there?",
    a: 'The venue is conveniently located near the city center. We recommend taking a taxi or rideshare for the evening. Detailed directions and a Google Maps link can be found in the Venue section above.',
  },
  {
    q: 'Can I bring a plus one?',
    a: 'Due to our intimate venue size, we can only accommodate guests who are named on the invitation. If your invitation says "and guest," you are welcome to bring one. Please indicate this in your RSVP.',
  },
  {
    q: 'Is there parking nearby?',
    a: 'Yes! There is a large free parking area directly adjacent to the venue. It is well-lit and secure. We recommend arriving 15–20 minutes early to find a comfortable spot.',
  },
]

function AccordionItem({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-2xl shadow-sm overflow-hidden"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-sans font-medium text-stone-800 text-sm pr-4">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-stone-400"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0">
              <div className="w-full h-px bg-stone-100 mb-4" />
              <p className="font-sans text-stone-500 text-sm leading-relaxed">
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section className="px-6 py-16 border-b border-stone-200/60 bg-white/30">
      <motion.div {...fadeUp} className="text-center mb-8">
        <HelpCircle size={20} className="mx-auto text-stone-400 mb-3" />
        <h2 className="font-serif text-3xl text-stone-800">FAQ</h2>
        <div className="w-12 h-px bg-stone-300/60 mx-auto mt-4" />
      </motion.div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.q} faq={faq} index={i} />
        ))}
      </div>
    </section>
  )
}
