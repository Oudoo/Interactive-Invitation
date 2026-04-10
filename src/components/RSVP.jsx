import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const countries = [
  { code: '+32', flag: '🇧🇪', name: 'Belgium' },
  { code: '+33', flag: '🇫🇷', name: 'France' },
  { code: '+44', flag: '🇬🇧', name: 'UK' },
  { code: '+1', flag: '🇺🇸', name: 'USA' },
  { code: '+212', flag: '🇲🇦', name: 'Morocco' },
  { code: '+31', flag: '🇳🇱', name: 'Netherlands' },
  { code: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: '+34', flag: '🇪🇸', name: 'Spain' },
  { code: '+39', flag: '🇮🇹', name: 'Italy' },
]

function InputField({ label, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] tracking-[0.2em] text-stone-500 uppercase font-sans">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border-b border-stone-300 py-2.5 text-stone-800 font-sans text-sm placeholder:text-stone-300 focus:outline-none focus:border-stone-600 transition-colors duration-200"
      />
    </div>
  )
}

export default function RSVP() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    countryCode: '+32',
    phone: '',
    attendance: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production: send form data to your backend / form service
    setSubmitted(true)
  }

  return (
    <section className="px-6 py-16 border-b border-stone-200/60">
      <motion.div {...fadeUp} className="text-center mb-8">
        <Heart size={20} className="mx-auto text-blush mb-3" />
        <h2 className="font-serif text-4xl text-stone-800">RSVP</h2>
        <div className="w-12 h-px bg-stone-300/60 mx-auto my-4" />
        <p className="font-serif italic text-stone-500 text-sm leading-relaxed">
          We hope to count on you
        </p>
        <p className="text-[10px] tracking-[0.18em] text-stone-400 uppercase font-sans mt-1">
          Please reply by March 30, 2026
        </p>
      </motion.div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-sm p-8 text-center flex flex-col items-center gap-4"
        >
          <span className="text-4xl select-none">💌</span>
          <h3 className="font-serif text-2xl text-stone-800">Thank You!</h3>
          <p className="font-sans text-stone-500 text-sm leading-relaxed">
            Your RSVP has been received. We can't wait to celebrate with you!
          </p>
        </motion.div>
      ) : (
        <motion.form
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          <InputField
            label="Full Name"
            value={form.name}
            onChange={set('name')}
            placeholder="Yassine El Mansouri"
            required
          />

          <InputField
            label="Email Address"
            type="email"
            value={form.email}
            onChange={set('email')}
            placeholder="you@example.com"
            required
          />

          {/* Phone — country code + number */}
          <div className="flex flex-col gap-1">
            <label className="text-[10px] tracking-[0.2em] text-stone-500 uppercase font-sans">
              Phone Number
            </label>
            <div className="flex items-end gap-2 border-b border-stone-300 pb-2.5 focus-within:border-stone-600 transition-colors duration-200">
              <select
                value={form.countryCode}
                onChange={set('countryCode')}
                className="bg-transparent font-sans text-sm text-stone-700 focus:outline-none cursor-pointer shrink-0"
                aria-label="Country code"
              >
                {countries.map((c) => (
                  <option key={c.code + c.name} value={c.code}>
                    {c.flag} {c.code}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                value={form.phone}
                onChange={set('phone')}
                placeholder="470 123 456"
                className="flex-1 bg-transparent text-stone-800 font-sans text-sm placeholder:text-stone-300 focus:outline-none"
              />
            </div>
          </div>

          {/* Attendance */}
          <div className="flex flex-col gap-3">
            <label className="text-[10px] tracking-[0.2em] text-stone-500 uppercase font-sans">
              Will you attend?
            </label>
            <div className="flex flex-col gap-2">
              {[
                { value: 'yes', label: "✓  Yes, I'll be there!" },
                { value: 'no', label: '✗  Regretfully declining' },
              ].map(({ value, label }) => (
                <label
                  key={value}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer border transition-colors duration-200 ${
                    form.attendance === value
                      ? 'border-stone-400 bg-white shadow-sm'
                      : 'border-stone-200 bg-transparent'
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value={value}
                    checked={form.attendance === value}
                    onChange={set('attendance')}
                    className="accent-stone-700"
                  />
                  <span className="font-sans text-sm text-stone-700">{label}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-stone-800 text-white font-sans text-sm tracking-widest uppercase rounded-full py-4 mt-2 hover:bg-stone-700 active:scale-[0.98] transition-all duration-200"
          >
            Send RSVP
          </button>
        </motion.form>
      )}
    </section>
  )
}
