'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  SCREENS,
  QuestionScreen,
  InterstitialScreen,
} from './quizData'

// ─── Progress bar ─────────────────────────────────────────────────────────────

function ProgressBar({ pct }: { pct: number }) {
  return (
    <div className="h-[2px] w-full bg-[rgba(201,169,110,0.2)] rounded-full overflow-hidden">
      <div
        className="h-full bg-gold rounded-full transition-all duration-500 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

// ─── Question ────────────────────────────────────────────────────────────────

function QuestionView({
  screen,
  selected,
  onSelect,
  onContinue,
}: {
  screen: QuestionScreen
  selected: number | null
  onSelect: (i: number) => void
  onContinue: () => void
}) {
  return (
    <div className="flex flex-col flex-1">
      <p className="text-[10px] tracking-[0.28em] uppercase text-gold font-medium mb-3">
        {screen.eyebrow}
      </p>
      <h1 className="font-playfair text-[clamp(24px,5vw,34px)] font-bold text-brown leading-[1.15] mb-2">
        {screen.question.split('\n').map((l, i, arr) => (
          <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
        ))}
      </h1>
      <p className="font-cormorant text-[17px] italic text-amber opacity-75 leading-relaxed mb-6">
        {screen.sub}
      </p>

      <div className="flex flex-col gap-[10px] flex-1">
        {screen.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className={[
              'flex items-start gap-4 px-5 py-4 text-left rounded-xl border transition-all duration-150 w-full',
              selected === i
                ? 'border-gold bg-[rgba(201,169,110,0.08)]'
                : 'border-[rgba(201,169,110,0.25)] bg-white hover:border-[rgba(201,169,110,0.55)] hover:bg-[#FFFDF8]',
            ].join(' ')}
          >
            <div className={[
              'w-7 h-7 rounded-full border flex items-center justify-center',
              'text-[11px] flex-shrink-0 mt-0.5 transition-all duration-150',
              selected === i
                ? 'bg-gold border-gold text-warm'
                : 'border-[rgba(201,169,110,0.4)] text-gold',
            ].join(' ')}>
              {opt.letter}
            </div>
            <div>
              <p className="text-[14px] text-brown leading-snug">{opt.title}</p>
              {opt.hint && (
                <p className="font-cormorant text-[13px] italic text-amber opacity-60 mt-0.5 leading-snug">
                  {opt.hint}
                </p>
              )}
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <button
          onClick={onContinue}
          disabled={selected === null}
          className={[
            'w-full py-4 rounded-xl font-jost text-[12px] font-medium tracking-[0.2em] uppercase transition-all duration-200',
            selected !== null
              ? 'bg-brown text-cream cursor-pointer hover:opacity-85'
              : 'bg-brown text-cream opacity-25 cursor-not-allowed',
          ].join(' ')}
        >
          Continue
        </button>
        <button
          onClick={onContinue}
          className="text-center text-[12px] text-[rgba(107,76,42,0.4)] tracking-wide hover:text-[rgba(107,76,42,0.65)] transition-colors"
        >
          Skip this question
        </button>
      </div>
    </div>
  )
}

// ─── Interstitial ────────────────────────────────────────────────────────────

function InterstitialView({
  screen,
  onContinue,
}: {
  screen: InterstitialScreen
  onContinue: () => void
}) {
  return (
    <div className="flex flex-col flex-1 items-center justify-center text-center px-2 py-8">
      <div className="w-16 h-16 rounded-full border border-[rgba(201,169,110,0.4)] bg-[rgba(201,169,110,0.08)] flex items-center justify-center text-2xl mb-7">
        {screen.icon}
      </div>
      <h2 className="font-playfair text-[clamp(24px,5vw,30px)] font-bold text-brown leading-[1.2] mb-4">
        {screen.heading.split('\n').map((l, i, arr) => (
          <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
        ))}
      </h2>
      <p className="font-cormorant text-[18px] italic text-amber opacity-80 leading-[1.7] max-w-sm mb-10">
        {screen.body}
      </p>
      <button
        onClick={onContinue}
        className="w-full max-w-xs py-4 bg-brown text-cream rounded-xl font-jost text-[12px] font-medium tracking-[0.2em] uppercase hover:opacity-85 transition-opacity"
      >
        Continue
      </button>
    </div>
  )
}

// ─── Main quiz ────────────────────────────────────────────────────────────────

export default function Quiz() {
  const router = useRouter()
  const [current, setCurrent]   = useState(0)
  const [answers, setAnswers]   = useState<Record<string, number>>({})
  const [selected, setSelected] = useState<number | null>(null)
  const [animKey, setAnimKey]   = useState(0)

  const screen   = SCREENS[current]
  const totalQ   = SCREENS.filter(s => s.type === 'question').length
  const answeredN = Object.keys(answers).length
  const progressPct = Math.max(10, Math.round((answeredN / (totalQ + 1)) * 100))
  const questionIndex = SCREENS.slice(0, current + 1).filter(s => s.type === 'question').length

  function advance() {
    // Build the full updated answers synchronously — don't rely on state update
    const updatedAnswers: Record<string, number> =
      screen.type === 'question' && selected !== null
        ? { ...answers, [screen.id]: selected }
        : { ...answers }

    const nextIdx = current + 1

    // Last screen — go to results
    if (nextIdx >= SCREENS.length || SCREENS[nextIdx].type === 'results') {
      // Encode answers as compact query string: q1=0&q2=2 etc.
      const params = new URLSearchParams()
      for (const [k, v] of Object.entries(updatedAnswers)) {
        params.set(k, String(v))
      }
      router.push(`/result?${params.toString()}`)
      return
    }

    // Update state for UI
    if (screen.type === 'question' && selected !== null) {
      setAnswers(updatedAnswers)
    }
    setSelected(null)
    setAnimKey(k => k + 1)
    setCurrent(nextIdx)
  }

  return (
    <div className="min-h-screen bg-warm flex flex-col max-w-md mx-auto">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 pt-5 pb-0 flex-shrink-0">
        <span className="font-playfair text-[15px] text-amber">
          Brock<em className="italic text-gold">John</em>
        </span>
        <span className="text-[11px] tracking-[0.2em] uppercase text-gold">
          {screen.type === 'question' ? `Question ${questionIndex} of ${totalQ}` : ''}
        </span>
      </div>

      {/* Progress */}
      <div className="px-6 pt-3 pb-0 flex-shrink-0">
        <ProgressBar pct={progressPct} />
      </div>

      {/* Screen */}
      <div key={animKey} className="flex-1 flex flex-col px-6 pt-7 pb-6 animate-fade-slide">
        {screen.type === 'question' && (
          <QuestionView
            screen={screen}
            selected={selected}
            onSelect={setSelected}
            onContinue={advance}
          />
        )}
        {screen.type === 'interstitial' && (
          <InterstitialView screen={screen} onContinue={advance} />
        )}
      </div>
    </div>
  )
}
