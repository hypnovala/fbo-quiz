// ─── Types ───────────────────────────────────────────────────────────────────

export interface Option {
  letter: string
  title: string
  hint?: string
}

export interface QuestionScreen {
  type: 'question'
  id: string
  eyebrow: string
  question: string
  sub: string
  options: Option[]
}

export interface InterstitialScreen {
  type: 'interstitial'
  id: string
  icon: string
  heading: string
  body: string
}

export interface ResultsScreen {
  type: 'results'
  id: string
}

export type Screen = QuestionScreen | InterstitialScreen | ResultsScreen

// ─── Screen flow ──────────────────────────────────────────────────────────────

export const SCREENS: Screen[] = [
  {
    type: 'question',
    id: 'q1',
    eyebrow: 'Your Body',
    question: 'How connected do you feel\nto your body right now?',
    sub: 'Be honest — this is just for you.',
    options: [
      { letter: 'A', title: 'Completely disconnected',  hint: 'I live mostly in my head' },
      { letter: 'B', title: 'Aware, but not at home',   hint: "I can feel it, but we're not close friends" },
      { letter: 'C', title: 'Somewhat connected',       hint: 'Good days and distant days' },
      { letter: 'D', title: 'Deeply in my body',        hint: 'I feel everything — I want to feel more' },
    ],
  },
  {
    type: 'interstitial',
    id: 'i1',
    icon: '🌿',
    heading: 'That takes courage\nto admit.',
    body: 'Wherever you are, this is the exact right place to begin. The FBO program was designed to meet you here — not where you think you should be.',
  },
  {
    type: 'question',
    id: 'q2',
    eyebrow: 'Your Experience',
    question: 'How would you describe\nyour relationship to pleasure?',
    sub: 'No judgment here — only curiosity.',
    options: [
      { letter: 'A', title: 'Pleasure feels far away or inaccessible', hint: "Like it's for other people, not me" },
      { letter: 'B', title: 'I can feel pleasure, but it feels small',  hint: 'Localized, brief, never quite enough' },
      { letter: 'C', title: 'Pleasure is present but I perform it',     hint: "I reach for it, but I'm watching myself" },
      { letter: 'D', title: 'I feel pleasure but want it to expand',    hint: 'Ready to go deeper, further, wider' },
    ],
  },
  {
    type: 'question',
    id: 'q3',
    eyebrow: 'Your Intention',
    question: 'What brings you\nto this work?',
    sub: 'Choose the one that resonates most deeply.',
    options: [
      { letter: 'A', title: 'I want to heal from shame or past experiences', hint: 'Reclaim what feels lost or taken' },
      { letter: 'B', title: 'I want deeper, fuller orgasmic experience',      hint: "Expand what's already there" },
      { letter: 'C', title: 'I want to feel truly at home in my body',        hint: 'A sense of embodied belonging' },
      { letter: 'D', title: "I'm curious and ready to explore",               hint: "I don't have a specific destination" },
    ],
  },
  {
    type: 'question',
    id: 'q4',
    eyebrow: 'Your Nervous System',
    question: 'When something feels good,\nwhat typically happens?',
    sub: "Notice what's most familiar.",
    options: [
      { letter: 'A', title: 'I brace or contract — good feelings feel unsafe', hint: 'My body guards against receiving' },
      { letter: 'B', title: 'I rush toward the peak and lose the journey',      hint: 'Always reaching, rarely arriving' },
      { letter: 'C', title: 'I stay in my head and narrate the experience',     hint: 'Thinking about feeling instead of feeling' },
      { letter: 'D', title: 'I can receive it, and I want to expand that',      hint: 'A good foundation to build on' },
    ],
  },
  {
    type: 'interstitial',
    id: 'i2',
    icon: '✦',
    heading: 'Your body is not\nbroken.',
    body: 'These patterns are protective — they developed for good reasons. The FBO method works with your nervous system, not against it. Safety first, always.',
  },
  {
    type: 'question',
    id: 'q5',
    eyebrow: 'Your Practice',
    question: 'How much time can you\noffer yourself each week?',
    sub: 'There is no wrong answer.',
    options: [
      { letter: 'A', title: '15–20 minutes a few times a week',               hint: 'Small and consistent' },
      { letter: 'B', title: '35 minutes, once or twice a week',               hint: 'The core FBO practice length' },
      { letter: 'C', title: 'An hour or more when I can',                     hint: 'Spacious and immersive' },
      { letter: 'D', title: "I'm flexible — I'll move with what feels right", hint: "Following the body's rhythm" },
    ],
  },
  {
    type: 'question',
    id: 'q6',
    eyebrow: 'Your History',
    question: 'Have you done somatic or\nbody-based work before?',
    sub: 'This helps us understand where to begin.',
    options: [
      { letter: 'A', title: 'Never — this is completely new',                    hint: 'A truly open beginning' },
      { letter: 'B', title: 'A little — yoga, breathwork, or meditation',        hint: 'Some body awareness already present' },
      { letter: 'C', title: 'Yes — therapy, bodywork, or healing work',          hint: 'A foundation to build on' },
      { letter: 'D', title: "Extensive — I'm well-practiced in somatic work",    hint: 'Ready to go deeper' },
    ],
  },
  {
    type: 'results',
    id: 'results',
  },
]

// ─── Module metadata ──────────────────────────────────────────────────────────

export interface Module {
  num: string
  title: string
  tag: string
  desc: string
}

export const MODULES: Module[] = [
  { num: '01', title: 'Arriving in the Body',           tag: 'Foundation',  desc: 'Somatic grounding, nervous system safety, breath as anchor.' },
  { num: '02', title: 'The Breath Portal',              tag: 'Activation',  desc: 'Breath as the bridge from thinking into full sensation.' },
  { num: '03', title: 'Yoni Mapping & Awakening',       tag: 'Embodiment',  desc: 'Internal landscape, sensory vocabulary, yoni awakening.' },
  { num: '04', title: 'The Pleasure Current',           tag: 'Expansion',   desc: 'Moving orgasmic energy beyond one location in the body.' },
  { num: '05', title: 'Moving Energy Through the Body', tag: 'Flow',        desc: 'Slowing the arc of arousal, circulating pleasure fully.' },
  { num: '06', title: 'Receiving Without Performing',   tag: 'Release',     desc: 'Dissolving the observer self — pure sensation, no commentary.' },
  { num: '07', title: 'Full Body Orgasmic Activation',  tag: 'Integration', desc: 'Complete integration: breath, energy, sensation, presence.' },
]

// ─── Scoring matrix ───────────────────────────────────────────────────────────
// SCORING[questionId][answerIndex] = { moduleIndex(0-based): points }

export const SCORING: Record<string, Record<number, number>[]> = {
  q1: [
    { 0: 3 },          // A → M01 +3
    { 0: 2, 1: 1 },    // B → M01 +2, M02 +1
    { 1: 2, 2: 1 },    // C → M02 +2, M03 +1
    { 3: 3 },          // D → M04 +3
  ],
  q2: [
    { 0: 3 },          // A → M01 +3
    { 2: 3 },          // B → M03 +3
    { 5: 3 },          // C → M06 +3
    { 3: 2, 4: 1 },    // D → M04 +2, M05 +1
  ],
  q3: [
    { 0: 2, 5: 1 },    // A → M01 +2, M06 +1
    { 3: 2, 6: 1 },    // B → M04 +2, M07 +1
    { 1: 2, 2: 1 },    // C → M02 +2, M03 +1
    { 1: 3 },          // D → M02 +3
  ],
  q4: [
    { 0: 3 },          // A → M01 +3
    { 4: 3 },          // B → M05 +3
    { 5: 2, 1: 1 },    // C → M06 +2, M02 +1
    { 6: 3 },          // D → M07 +3
  ],
  q5: [
    { 1: 2 },          // A → M02 +2
    {},                // B → balanced
    { 6: 1 },          // C → M07 +1
    {},                // D → balanced
  ],
  q6: [
    { 0: 3 },          // A → M01 +3
    { 2: 2, 1: 1 },    // B → M03 +2, M02 +1
    { 4: 2, 5: 1 },    // C → M05 +2, M06 +1
    { 6: 3 },          // D → M07 +3
  ],
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function calcScores(answers: Record<string, number>): number[] {
  const totals = Array(7).fill(0)
  for (const [qid, aIdx] of Object.entries(answers)) {
    const map = SCORING[qid]?.[aIdx] ?? {}
    for (const [mi, pts] of Object.entries(map)) {
      totals[Number(mi)] += pts as number
    }
  }
  return totals
}

export function getRecommendedIndex(scores: number[]): number {
  let max = -1, idx = 0
  scores.forEach((s, i) => { if (s > max) { max = s; idx = i } })
  return idx
}
