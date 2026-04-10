import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-stone-900">
      {/*
        VIDEO ELEMENT — replace the src with your hosted MP4 URL.
        Keep autoPlay, muted, loop, playsInline for mobile compatibility.
      */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      >
        {/* <source src="https://your-cdn.com/archway-video.mp4" type="video/mp4" /> */}
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/60" />

      {/* Centered content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="flex flex-col items-center gap-4"
        >
          {/* Names */}
          <h1 className="font-serif text-5xl sm:text-6xl text-white font-normal leading-tight">
            Yassine &amp; Fatima
          </h1>

          {/* Tagline */}
          <p className="text-xs tracking-[0.35em] text-white/80 uppercase font-sans font-medium">
            We Are Getting Married
          </p>

          {/* Diamond separator */}
          <span className="text-gold text-lg select-none">❖</span>

          {/* Date */}
          <p className="font-serif text-xl text-white/90 italic">
            May 27, 2026
          </p>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase font-sans">Scroll</span>
          <div className="w-px h-8 bg-white/30 animate-pulse" />
        </motion.div>
      </div>
    </section>
  )
}
