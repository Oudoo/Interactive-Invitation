import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TARGET = new Date('2026-05-27T14:00:00')

function getTimeLeft() {
  const diff = TARGET - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

function TimeBox({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-full aspect-square border border-stone-300 rounded-xl flex items-center justify-center bg-white/60">
        <span className="font-serif text-3xl sm:text-4xl text-stone-800 tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] tracking-[0.2em] text-stone-500 uppercase font-sans">
        {label}
      </span>
    </div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="px-6 py-16 border-b border-stone-200/60">
      <motion.div {...fadeUp} className="text-center mb-8">
        {/* Floral decoration */}
        <div className="text-2xl mb-3 select-none">🌸</div>
        <h2 className="font-serif text-3xl text-stone-800">Countdown</h2>
        {/* Thin divider */}
        <div className="w-12 h-px bg-stone-300/60 mx-auto my-4" />
        <p className="font-serif italic text-stone-500 text-sm tracking-wide">
          We can't wait until this moment!
        </p>
      </motion.div>

      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="grid grid-cols-4 gap-3"
      >
        <TimeBox value={time.days} label="Days" />
        <TimeBox value={time.hours} label="Hours" />
        <TimeBox value={time.minutes} label="Mins" />
        <TimeBox value={time.seconds} label="Secs" />
      </motion.div>
    </section>
  )
}
