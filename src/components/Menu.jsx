import { motion } from 'framer-motion'
import { UtensilsCrossed } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const courses = [
  { label: '— Starter —', dish: 'Caviar' },
  { label: '— Main —', dish: 'Steak Frites' },
  { label: '— Dessert —', dish: 'Dame Blanche' },
]

export default function Menu() {
  return (
    <section className="px-6 py-16 border-b border-stone-200/60">
      <motion.div {...fadeUp}>
        {/* Decorative double-border card */}
        <div className="border-4 border-double border-rose-800/50 rounded-3xl px-8 py-10 flex flex-col items-center gap-6">
          {/* Header */}
          <div className="text-center">
            <UtensilsCrossed size={20} className="mx-auto text-rose-800/60 mb-3" />
            <h2 className="font-serif text-4xl text-stone-800">Menu</h2>
            <div className="w-12 h-px bg-rose-800/20 mx-auto mt-4" />
          </div>

          {/* Courses */}
          <div className="w-full flex flex-col items-center gap-5">
            {courses.map((course, i) => (
              <div key={course.label} className="w-full flex flex-col items-center gap-2">
                <p className="text-[10px] tracking-[0.2em] text-stone-500 uppercase font-sans">
                  {course.label}
                </p>
                <p className="font-serif text-2xl text-stone-800">{course.dish}</p>
                {i < courses.length - 1 && (
                  <div className="w-10 h-px bg-stone-300/60 mt-2" />
                )}
              </div>
            ))}
          </div>

          {/* Bottom decorative text */}
          <p className="font-serif italic text-stone-400 text-xs">
            A culinary journey crafted with love
          </p>
        </div>
      </motion.div>
    </section>
  )
}
