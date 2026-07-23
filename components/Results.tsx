'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { MODULES, calcScores, getRecommendedIndex } from './quizData'

const COURSE_URL = 'https://course.brockjohn.com/'
const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/valasomatic_reset/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@vala_somaticreset' },
]

function ResultsInner() {
  const params = useSearchParams()

  const answers: Record<string, number> = {}
  params.forEach((val, key) => {
    if (key.startsWith('q')) answers[key] = Number(val)
  })

  const scores   = calcScores(answers)
  const recIdx   = getRecommendedIndex(scores)
  const maxScore = Math.max(...scores, 1)
  const rec      = MODULES[recIdx]

  return (
    <div className="min-h-screen bg-warm font-jost">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-warm border-b border-[rgba(201,169,110,0.2)] px-6 h-16 flex items-center justify-between">
        <span className="font-playfair text-[16px] text-amber">
          Brock<em className="italic text-gold">John</em>
        </span>
        <div className="flex items-center gap-4">
          <a href="/quiz" className="text-[11px] tracking-[0.14em] uppercase text-[rgba(107,76,42,0.4)] hover:text-amber transition-colors">
            Retake quiz
          </a>
          <a href={COURSE_URL} className="bg-brown text-cream px-5 py-2.5 rounded-lg text-[11px] tracking-[0.18em] uppercase font-medium hover:opacity-85 transition-opacity">
            Sign Up Now
          </a>
        </div>
      </nav>

      <div className="bg-[#EDE4C8] border-b border-[rgba(201,169,110,0.25)] px-6 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-center text-center">
          <div className="flex items-center justify-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] tracking-[0.14em] uppercase text-amber hover:text-brown transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-warm px-6 pt-14 pb-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[340px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(201,169,110,0.1) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[rgba(201,169,110,0.1)] border border-[rgba(201,169,110,0.28)] px-4 py-2 rounded-full mb-6">
            <span className="text-gold text-[11px]">✦</span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-amber font-medium">Full Body Orgasmic · Level 1</span>
          </div>
          <h1 className="font-playfair text-[clamp(34px,6vw,56px)] font-bold text-brown leading-[1.05] mb-5">
            Awaken Every<br /><em className="italic text-amber">Inch of Your Body.</em>
          </h1>
          <p className="font-cormorant text-[19px] italic text-amber leading-[1.6] mb-8 max-w-md mx-auto opacity-88">
            The somatic program teaching women how to receive full-body orgasmic pleasure — starting from the inside out.
          </p>
          <div className="flex flex-col items-center gap-3">
            <a href={COURSE_URL} className="w-full max-w-xs py-4 bg-brown text-cream rounded-xl font-jost text-[12px] font-medium tracking-[0.2em] uppercase hover:opacity-85 transition-opacity text-center block">
              Sign Up Now
            </a>
          </div>
        </div>
      </section>

      {/* Proof bar */}
      <div className="bg-[#EDE4C8] border-y border-[rgba(201,169,110,0.3)] px-6 py-4">
        <div className="flex items-center justify-center max-w-2xl mx-auto">
          {[
            { val: '7',        label: 'Deep Modules'    },
            { val: '35 min',   label: 'Core Practice'   },
            { val: 'Lifetime', label: 'Access'          },
          ].map((s, i, arr) => (
            <div key={s.label} className="flex items-center">
              <div className="flex flex-col items-center px-4 py-1">
                <span className="font-playfair text-[18px] font-bold text-brown">{s.val}</span>
                <span className="text-[10px] tracking-[0.12em] uppercase text-[rgba(107,76,42,0.6)] mt-1">{s.label}</span>
              </div>
              {i < arr.length - 1 && <div className="w-px h-8 bg-[rgba(201,169,110,0.3)]" />}
            </div>
          ))}
        </div>
      </div>

      {/* Recommended module */}
      <section className="bg-soft px-6 py-14 border-t border-[rgba(201,169,110,0.15)]">
        <div className="max-w-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium mb-3">Your Results</p>
          <h2 className="font-playfair text-[clamp(26px,4vw,38px)] font-bold text-brown leading-[1.1] mb-4">
            Your Recommended <em className="italic text-amber">Starting Module</em>
          </h2>
          <p className="text-[14px] leading-[1.8] text-[rgba(107,76,42,0.7)] mb-8 max-w-md">
            There's no wrong door into this work. Your answers simply point to where your body is asking to begin — the place where a little attention will open the most.
          </p>

          {/* Hero recommendation card */}
          <div className="bg-brown rounded-2xl p-6 mb-6 relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full pointer-events-none" style={{ border: '1px solid rgba(201,169,110,0.12)' }} />
            <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full pointer-events-none" style={{ border: '1px solid rgba(201,169,110,0.18)' }} />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center flex-shrink-0 font-playfair font-bold text-brown text-sm">
                  {rec.num}
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.28em] uppercase text-[rgba(201,169,110,0.55)]">Module {rec.num} · {rec.tag}</p>
                  <p className="font-playfair text-[22px] font-bold text-cream leading-snug">{rec.title}</p>
                </div>
              </div>
              <p className="font-cormorant text-[17px] italic text-[rgba(245,238,216,0.75)] leading-[1.65] mb-4">{rec.desc}</p>
              <p className="text-[13px] leading-[1.8] text-[rgba(245,238,216,0.55)]">{rec.detail}</p>
            </div>
          </div>

          {/* All modules with score bars */}
          <p className="text-[10px] tracking-[0.22em] uppercase text-[rgba(107,76,42,0.4)] mb-3 font-medium">Your full profile</p>
          <div className="flex flex-col gap-2">
            {MODULES.map((m, i) => {
              const isRec  = i === recIdx
              const barPct = Math.round((scores[i] / maxScore) * 100)
              return (
                <div key={m.num} className={['flex items-center gap-3 px-4 py-3 rounded-xl', isRec ? 'border-[1.5px] border-gold bg-[rgba(201,169,110,0.07)]' : 'border border-[rgba(201,169,110,0.2)] bg-white'].join(' ')}>
                  <span className={`text-[10px] tracking-[0.18em] w-7 flex-shrink-0 font-medium ${isRec ? 'text-gold' : 'text-[rgba(201,169,110,0.45)]'}`}>{m.num}</span>
                  <div className="flex-1 min-w-0">
                    <span className={`text-[13px] leading-snug block ${isRec ? 'text-brown font-medium' : 'text-brown'}`}>{m.title}</span>
                    <div className="h-[3px] bg-[rgba(201,169,110,0.15)] rounded-full mt-1.5">
                      <div className={`h-[3px] rounded-full ${isRec ? 'bg-gold' : 'bg-[rgba(201,169,110,0.3)]'}`} style={{ width: `${barPct}%` }} />
                    </div>
                  </div>
                  <span className={['text-[10px] tracking-[0.1em] uppercase border px-2 py-0.5 rounded-lg flex-shrink-0 whitespace-nowrap', isRec ? 'bg-gold text-brown border-gold' : 'text-gold border-[rgba(201,169,110,0.3)]'].join(' ')}>
                    {isRec ? '★ ' : ''}{m.tag}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7-module journey */}
      <section className="bg-brown px-6 py-14">
        <div className="max-w-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[rgba(201,169,110,0.55)] mb-3">The Full Journey</p>
          <h2 className="font-playfair text-[clamp(26px,4vw,38px)] font-bold text-cream leading-[1.1] mb-3">
            7 Modules. <em className="italic text-gold">One Awakening.</em>
          </h2>
          <p className="font-cormorant text-[18px] italic text-[rgba(245,238,216,0.55)] mb-10 leading-relaxed">
            Each module builds on the last — a slow, intentional spiral inward.
          </p>
          <div className="flex flex-col gap-3 mb-10">
            {MODULES.map((m, i) => {
              const isRec = i === recIdx
              return (
                <div key={m.num} className={['rounded-xl p-5 relative overflow-hidden', isRec ? 'bg-gold' : 'bg-[rgba(245,238,216,0.04)] border border-[rgba(201,169,110,0.1)]'].join(' ')}>
                  {isRec && <div className="text-[9px] tracking-[0.22em] uppercase text-[rgba(46,31,14,0.6)] mb-2 font-medium">★ Recommended for you</div>}
                  <div className="flex items-start gap-3">
                    <span className={`text-[10px] tracking-[0.2em] flex-shrink-0 mt-1 font-medium ${isRec ? 'text-[rgba(46,31,14,0.5)]' : 'text-[rgba(201,169,110,0.4)]'}`}>{m.num}</span>
                    <div>
                      <p className={`font-playfair text-[17px] font-bold mb-1 leading-snug ${isRec ? 'text-brown' : 'text-cream'}`}>{m.title}</p>
                      <p className={`text-[13px] leading-[1.65] ${isRec ? 'text-[rgba(46,31,14,0.75)]' : 'text-[rgba(245,238,216,0.45)]'}`}>{m.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <a href={COURSE_URL} className="block w-full text-center py-4 bg-gold text-brown rounded-xl font-jost text-[12px] font-semibold tracking-[0.2em] uppercase hover:opacity-88 transition-opacity">
            Sign Up Now
          </a>
        </div>
      </section>

      {/* The Approach */}
      <section className="bg-soft px-6 py-14">
        <div className="max-w-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium mb-3">The Approach</p>
          <h2 className="font-playfair text-[clamp(26px,4vw,38px)] font-bold text-brown leading-[1.1] mb-4">
            Rooted in the Body's <em className="italic text-amber">Own Wisdom</em>
          </h2>
          <p className="text-[14px] leading-[1.8] text-[rgba(107,76,42,0.7)] mb-8 max-w-md">
            This is somatic education, not performance. Every practice in the program is built on one principle: the body opens when it feels safe, and it closes when it's rushed.
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                icon: '☾',
                title: 'Nervous System First',
                body: "Grounded in polyvagal principles, the work begins with regulation — teaching your body the difference between bracing and receiving. Sensation follows safety, never the other way around.",
              },
              {
                icon: '≈',
                title: 'Breath as the Bridge',
                body: "Breath is the fastest doorway between the mind and the body. You'll learn specific breathing patterns that soften the guard your body has been holding, often for years.",
              },
              {
                icon: '◎',
                title: 'Energy That Circulates',
                body: "Drawing on Taoist energy practices, the later modules teach sensation to move — up the spine, through the belly, out to the fingertips — rather than staying locked in one place.",
              },
            ].map((c) => (
              <div key={c.title} className="p-6 bg-white border border-[rgba(201,169,110,0.2)] rounded-xl flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[rgba(201,169,110,0.12)] border border-[rgba(201,169,110,0.25)] flex items-center justify-center flex-shrink-0 text-gold text-[16px]">
                  {c.icon}
                </div>
                <div>
                  <p className="font-playfair text-[17px] font-bold text-brown mb-1 leading-snug">{c.title}</p>
                  <p className="text-[13px] leading-[1.7] text-[rgba(107,76,42,0.75)]">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-warm px-6 py-14 border-t border-[rgba(201,169,110,0.15)]">
        <div className="max-w-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium mb-3">How It Works</p>
          <h2 className="font-playfair text-[clamp(26px,4vw,38px)] font-bold text-brown leading-[1.1] mb-8">
            Slow Is the <em className="italic text-amber">Fastest Way</em>
          </h2>
          <div className="flex flex-col gap-6">
            {[
              {
                step: '01',
                title: 'Arrive where your body is',
                body: "Start with the module your results point to — or begin at Module 1 and let the arc build naturally. Everything is self-paced. Nothing expires.",
              },
              {
                step: '02',
                title: 'Practice a little, often',
                body: "The core practice is 35 minutes, but most days ask far less of you. Short, repeatable practices matter more than long, occasional ones — that's how the nervous system actually learns.",
              },
              {
                step: '03',
                title: 'Let it integrate',
                body: "The final module is devoted entirely to integration, because awakening that isn't woven into daily life fades. What you build here is meant to stay with you.",
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-5">
                <span className="font-playfair text-[26px] font-bold text-[rgba(201,169,110,0.45)] flex-shrink-0 leading-none mt-1">{s.step}</span>
                <div>
                  <p className="font-playfair text-[18px] font-bold text-brown mb-1 leading-snug">{s.title}</p>
                  <p className="text-[13px] leading-[1.75] text-[rgba(107,76,42,0.75)]">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-soft px-6 py-14 border-t border-[rgba(201,169,110,0.15)]">
        <div className="max-w-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium mb-3">Good Questions</p>
          <h2 className="font-playfair text-[clamp(26px,4vw,38px)] font-bold text-brown leading-[1.1] mb-8">
            What Women <em className="italic text-amber">Usually Ask</em>
          </h2>
          <div className="flex flex-col gap-3">
            {[
              {
                q: 'Do I need any experience with this kind of work?',
                a: "None. The program assumes nothing except a willingness to slow down. Module 1 exists precisely so that you can arrive exactly as you are.",
              },
              {
                q: 'What if I feel very little at first?',
                a: "That's common, and it's information — not failure. A body that has spent years bracing needs time to trust that it's safe to feel. The early modules are built for exactly this.",
              },
              {
                q: 'Is this therapy?',
                a: "No. This is somatic education — structured practices you do with your own body, in your own space. It can sit alongside therapy beautifully, but it doesn't replace it.",
              },
              {
                q: 'How private is this?',
                a: "Completely. Everything happens on your own device, in your own time. There's no group requirement, no camera, no sharing unless you choose it.",
              },
            ].map((f) => (
              <div key={f.q} className="p-6 bg-white border border-[rgba(201,169,110,0.2)] rounded-xl">
                <p className="font-playfair text-[16px] font-bold text-brown mb-2 leading-snug">{f.q}</p>
                <p className="text-[13px] leading-[1.75] text-[rgba(107,76,42,0.75)]">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brown px-6 py-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full pointer-events-none" style={{ border: '1px solid rgba(201,169,110,0.07)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none" style={{ border: '1px solid rgba(201,169,110,0.12)' }} />
        <div className="relative z-10 max-w-sm mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[rgba(201,169,110,0.5)] mb-4">Begin Today</p>
          <h2 className="font-playfair text-[clamp(30px,5vw,48px)] font-bold text-cream leading-[1.05] mb-4">
            Your body has been <em className="italic text-gold block">waiting for this.</em>
          </h2>
          <p className="font-cormorant text-[19px] italic text-[rgba(245,238,216,0.5)] mb-8">You only need to say yes.</p>
          <a href={COURSE_URL} className="inline-block w-full py-[17px] bg-gold text-brown rounded-xl font-jost text-[12px] font-semibold tracking-[0.2em] uppercase hover:opacity-88 transition-opacity">Sign Up Now</a>
          <p className="mt-4 text-[11px] text-[rgba(245,238,216,0.22)]">30-day guarantee · Lifetime access · Cancel Sacred Circle anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown border-t border-[rgba(201,169,110,0.12)] px-6 py-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-5">
          <div className="flex items-center justify-center border-b border-[rgba(201,169,110,0.12)] pb-4">
            <div className="flex items-center gap-5">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] tracking-[0.14em] uppercase text-gold hover:text-cream transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-playfair text-[14px] italic text-[rgba(201,169,110,0.4)]">Brock John · Somatic Sex Education</span>
              <div className="flex flex-col gap-1 text-[11px] tracking-[0.08em] uppercase text-[rgba(245,238,216,0.32)]">
                <a href="tel:346-219-1603" className="hover:text-[rgba(245,238,216,0.5)] transition-colors">346-219-1603</a>
                <a href="mailto:homewithbrockjohn@gmail.com" className="hover:text-[rgba(245,238,216,0.5)] transition-colors">homewithbrockjohn@gmail.com</a>
              </div>
            </div>
            <div className="flex gap-5">
              {['Privacy','Terms','Contact'].map(l => (
                <a key={l} href="#" className="text-[11px] tracking-[0.1em] uppercase text-[rgba(245,238,216,0.2)] hover:text-[rgba(245,238,216,0.45)] transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function Results() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-warm flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border border-[rgba(201,169,110,0.4)] bg-[rgba(201,169,110,0.08)] flex items-center justify-center text-xl mx-auto mb-4">✦</div>
          <p className="font-playfair text-[18px] italic text-amber">Preparing your results…</p>
        </div>
      </div>
    }>
      <ResultsInner />
    </Suspense>
  )
}
