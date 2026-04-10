import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function OurStory() {
  return (
    <section className="px-6 py-16 border-b border-stone-200/60 bg-white/30">
      <motion.div {...fadeUp} className="text-center mb-8">
        <BookOpen size={20} className="mx-auto text-stone-400 mb-3" />
        <h2 className="font-serif text-3xl text-stone-800">Our Story</h2>
        <div className="w-12 h-px bg-stone-300/60 mx-auto mt-4" />
      </motion.div>

      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-center"
      >
        <p className="font-serif italic text-stone-600 text-base leading-relaxed">
          It began with a chance encounter on a quiet autumn evening — a smile
          exchanged across a crowded room, and a conversation that never seemed
          to end. What started as friendship blossomed slowly, beautifully, into
          something neither of us could have imagined.
        </p>

        <div className="flex items-center justify-center gap-3 my-6">
          <div className="h-px w-12 bg-stone-300/60" />
          <span className="text-gold text-sm select-none">❖</span>
          <div className="h-px w-12 bg-stone-300/60" />
        </div>

        <p className="font-serif italic text-stone-600 text-base leading-relaxed">
          Through every adventure and quiet moment, Yassine and Fatima found
          in each other a home. Today, they invite you — their dearest family
          and friends — to witness the next chapter of their love story.
        </p>
      </motion.div>
    </section>
  )
}
