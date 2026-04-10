import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Venue from './components/Venue'
import OurStory from './components/OurStory'
import Schedule from './components/Schedule'
import DressCode from './components/DressCode'
import Menu from './components/Menu'
import FAQ from './components/FAQ'
import RSVP from './components/RSVP'
import FloatingAudio from './components/FloatingAudio'

function App() {
  return (
    <div className="relative">
      {/* Centered card — max-w-md on desktop */}
      <div className="max-w-md mx-auto bg-[#F9F6F0] shadow-2xl min-h-screen overflow-hidden">
        <Hero />
        <Countdown />
        <Venue />
        <OurStory />
        <Schedule />
        <DressCode />
        <Menu />
        <FAQ />
        <RSVP />

        {/* Footer */}
        <footer className="py-8 text-center">
          <p className="text-xs tracking-widest text-stone-400 font-sans uppercase">
            Made with Love ❤️ with Oudoo
          </p>
        </footer>
      </div>

      <FloatingAudio />
    </div>
  )
}

export default App
