import { motion } from 'framer-motion'
import { Building2, ExternalLink } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function Venue() {
  return (
    <section className="px-6 py-16 border-b border-stone-200/60">
      <motion.div {...fadeUp} className="text-center mb-8">
        <Building2 size={20} className="mx-auto text-stone-400 mb-3" />
        <h2 className="font-serif text-3xl text-stone-800">Venue</h2>
        <div className="w-12 h-px bg-stone-300/60 mx-auto mt-4" />
      </motion.div>

      {/* Placeholder estate illustration */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full h-52 bg-stone-200 rounded-2xl flex flex-col items-center justify-center text-stone-400 mb-6 overflow-hidden"
      >
        {/* SVG line-drawing style placeholder */}
        <svg viewBox="0 0 280 150" className="w-56 opacity-50" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Sky & ground */}
          <rect width="280" height="150" fill="#e7e5e4"/>
          {/* Main building */}
          <rect x="80" y="60" width="120" height="75" fill="#d6d3d1" stroke="#a8a29e" strokeWidth="1.5"/>
          {/* Roof */}
          <polygon points="70,60 140,20 210,60" fill="#c4bfb8" stroke="#a8a29e" strokeWidth="1.5"/>
          {/* Door */}
          <rect x="126" y="100" width="28" height="35" rx="14" fill="#a8a29e" stroke="#78716c" strokeWidth="1"/>
          {/* Windows */}
          <rect x="92" y="75" width="22" height="18" rx="2" fill="#f5f5f4" stroke="#a8a29e" strokeWidth="1"/>
          <rect x="166" y="75" width="22" height="18" rx="2" fill="#f5f5f4" stroke="#a8a29e" strokeWidth="1"/>
          {/* Columns */}
          <rect x="98" y="90" width="6" height="45" fill="#c4bfb8" stroke="#a8a29e" strokeWidth="1"/>
          <rect x="176" y="90" width="6" height="45" fill="#c4bfb8" stroke="#a8a29e" strokeWidth="1"/>
          {/* Trees */}
          <ellipse cx="45" cy="95" rx="22" ry="30" fill="#b5bfac" stroke="#a8a29e" strokeWidth="1"/>
          <rect x="43" y="120" width="4" height="15" fill="#a8a29e"/>
          <ellipse cx="235" cy="95" rx="22" ry="30" fill="#b5bfac" stroke="#a8a29e" strokeWidth="1"/>
          <rect x="233" y="120" width="4" height="15" fill="#a8a29e"/>
          {/* Ground line */}
          <line x1="0" y1="135" x2="280" y2="135" stroke="#a8a29e" strokeWidth="1.5"/>
        </svg>
        <span className="text-xs tracking-widest uppercase mt-2 font-sans">Estate Illustration</span>
      </motion.div>

      {/* Details card */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-3"
      >
        <p className="font-sans font-semibold text-stone-800 text-lg">
          Ocean Front Beach House
        </p>
        <p className="font-sans text-xs tracking-[0.12em] text-stone-500 uppercase leading-relaxed">
          123 Coastal Boulevard<br />
          Beachside Estates, CA 90210<br />
          United States
        </p>

        {/* Thin divider */}
        <div className="w-full h-px bg-stone-100 my-1" />

        <a
          href="https://maps.google.com/?q=Ocean+Front+Beach+House"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-gold text-gold text-xs tracking-widest uppercase font-sans font-medium px-6 py-3 hover:bg-gold/5 transition-colors duration-200"
        >
          Get Directions — Open in Google Maps
          <ExternalLink size={13} />
        </a>
      </motion.div>
    </section>
  )
}
