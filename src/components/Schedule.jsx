import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const events = [
  { time: '14:00', event: 'Lunch', icon: '🍽️' },
  { time: '18:00', event: 'Ceremony', icon: '💍' },
  { time: '22:00', event: 'Party', icon: '🎶' },
  { time: '02:00', event: 'End', icon: '🌙' },
]

export default function Schedule() {
  return (
    <section className="px-6 py-16 border-b border-stone-200/60">
      <motion.div {...fadeUp} className="text-center mb-10">
        <Clock size={20} className="mx-auto text-stone-400 mb-3" />
        <h2 className="font-serif text-3xl text-stone-800">Schedule</h2>
        <div className="w-12 h-px bg-stone-300/60 mx-auto my-4" />
        <p className="text-[10px] tracking-[0.25em] text-stone-500 uppercase font-sans">
          What We Have Planned For You
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative flex flex-col items-center gap-0">
        {/* Vertical connecting line */}
        <div className="absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-px bg-stone-200" />

        {events.map((item, i) => (
          <motion.div
            key={item.time}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative z-10 flex flex-col items-center mb-8 last:mb-0"
          >
            {/* Time pill */}
            <div className="bg-[#F9F6F0] border border-stone-300 rounded-full px-5 py-1.5 mb-3 shadow-sm">
              <span className="font-serif text-base text-stone-700 tabular-nums">
                {item.time}
              </span>
            </div>

            {/* Event name */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-lg select-none">{item.icon}</span>
              <span className="font-serif text-xl text-stone-800">{item.event}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
