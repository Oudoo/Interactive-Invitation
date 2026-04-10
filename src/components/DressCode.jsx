import { motion } from 'framer-motion'
import { Shirt } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const swatches = [
  { color: '#F4A7B9', label: 'Blush Pink' },
  { color: '#C4A882', label: 'Taupe' },
  { color: '#F5F0E8', label: 'Cream' },
]

export default function DressCode() {
  return (
    <section className="px-6 py-16 border-b border-stone-200/60 bg-white/30">
      <motion.div {...fadeUp} className="text-center mb-8">
        <Shirt size={20} className="mx-auto text-stone-400 mb-3" />
        <h2 className="font-serif text-3xl text-stone-800">Dress Code</h2>
        <div className="w-12 h-px bg-stone-300/60 mx-auto mt-4" />
      </motion.div>

      {/* Semi-Formal label */}
      <motion.p
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-serif text-4xl font-bold text-stone-800 text-center mb-8"
      >
        Semi-Formal
      </motion.p>

      {/* Two-column grid */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 gap-4 mb-8"
      >
        <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
          <p className="text-[10px] tracking-[0.25em] text-stone-500 uppercase font-sans mb-2">
            Women
          </p>
          <div className="w-8 h-px bg-stone-200 mx-auto mb-3" />
          <p className="font-serif text-lg text-stone-800">Cocktail Dress</p>
        </div>
        <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
          <p className="text-[10px] tracking-[0.25em] text-stone-500 uppercase font-sans mb-2">
            Men
          </p>
          <div className="w-8 h-px bg-stone-200 mx-auto mb-3" />
          <p className="font-serif text-lg text-stone-800">Suit &amp; Tie</p>
        </div>
      </motion.div>

      {/* Color swatches */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col items-center gap-4"
      >
        <p className="text-[10px] tracking-[0.25em] text-stone-500 uppercase font-sans">
          Suggested Colors
        </p>
        <div className="flex items-center gap-4">
          {swatches.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <div
                className="w-10 h-10 rounded-full border-2 border-stone-200 shadow-sm"
                style={{ backgroundColor: s.color }}
                title={s.label}
              />
              <span className="text-[9px] text-stone-400 font-sans tracking-wide">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
