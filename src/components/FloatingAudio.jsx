import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function FloatingAudio() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    audioRef.current = new Audio()
    // Replace with your actual hosted audio file URL
    // audioRef.current.src = 'https://your-cdn.com/wedding-music.mp3'
    audioRef.current.loop = true
    audioRef.current.volume = 0.5

    return () => {
      audioRef.current.pause()
      audioRef.current = null
    }
  }, [])

  const toggleAudio = () => {
    if (!audioRef.current) return
    // If no src set, just toggle state for UI demonstration
    if (!audioRef.current.src || audioRef.current.src === window.location.href) {
      setPlaying((p) => !p)
      return
    }
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {})
    }
    setPlaying((p) => !p)
  }

  return (
    <button
      onClick={toggleAudio}
      aria-label={playing ? 'Mute music' : 'Play music'}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-lg border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-white transition-all duration-200"
    >
      {playing ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </button>
  )
}
