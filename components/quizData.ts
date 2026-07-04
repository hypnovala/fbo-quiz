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

// ─── Module metadata — real FBO course modules ────────────────────────────────
// Index: 0=Arrival, 1=Sensual Awakening, 2=Breath Ignition,
//        3=Energy Awareness, 4=Expansion, 5=Circulation, 6=Integration

export interface Module {
  num: string
  title: string
  tag: string
  desc: string
  detail: string
}

export const MODULES: Module[] = [
  {
    num: '01',
    title: 'Arrival',
    tag: 'Foundation',
    desc: 'Helping the nervous system settle out of daily stress so the body can receive.',
    detail: 'Before anything can open, the body needs to feel safe. Arrival is the essential first step — releasing the accumulated tension of daily life so your nervous system can shift from doing into being.',
  },
  {
    num: '02',
    title: 'Sensual Awakening',
    tag: 'Presence',
    desc: 'Learning to listen to pure sensation before any story takes over.',
    detail: 'Most of us experience pleasure through the filter of the mind — narrating, judging, comparing. Sensual Awakening teaches you to meet sensation directly, before the thinking self has a chance to interpret it.',
  },
  {
    num: '03',
    title: 'Breath Ignition',
    tag: 'Activation',
    desc: 'Using conscious breath as the bridge between safety and erotic aliveness.',
    detail: 'Breath is the body\'s most immediate gateway. In this module, you learn to use conscious breathing as the bridge between nervous system safety and full erotic aliveness — the fuel for everything that follows.',
  },
  {
    num: '04',
    title: 'Energy Awareness',
    tag: 'Awakening',
    desc: 'Witnessing and awakening the feminine life-force (jing) already present.',
    detail: 'Rooted in Taoist tradition, this module turns attention inward to the feminine life-force — jing — that already exists within you. Through guided awareness, you begin to feel, witness, and consciously work with this living energy.',
  },
  {
    num: '05',
    title: 'Expansion',
    tag: 'Expansion',
    desc: 'Spreading pleasure beyond the pelvis into whole-body orgasmic waves.',
    detail: 'Pleasure was never meant to stay in one place. Expansion teaches you to let sensation move — spreading from the pelvis into the whole body as orgasmic waves that are available to every woman who learns to receive them.',
  },
  {
    num: '06',
    title: 'Circulation',
    tag: 'Flow',
    desc: 'Moving awakened energy through the Taoist microcosmic orbit to sustain and refine it.',
    detail: 'Once energy is awakened and expanded, Circulation teaches you to move it through the body\'s energetic pathways — the Taoist microcosmic orbit — so pleasure becomes sustainable, self-renewing, and ever more refined.',
  },
  {
    num: '07',
    title: 'Integration',
    tag: 'Integration',
    desc: 'Resting in the afterglow so the nervous system can fully absorb and rewire.',
    detail: 'The final and often overlooked step. Integration is the practice of resting in the afterglow — allowing the nervous system the time and space to fully absorb the experience, consolidate the shifts, and rewire toward wholeness.',
  },
]

// ─── Scoring matrix ───────────────────────────────────────────────────────────
// SCORING[questionId][answerIndex] = { moduleIndex(0-based): points }
//
// 0 = Arrival          → for: overwhelmed, disconnected, stress, never done somatic work
// 1 = Sensual Awakening → for: in head, narrating, performing, watching themselves
// 2 = Breath Ignition  → for: curious/new, some breathwork/yoga, wants a bridge
// 3 = Energy Awareness → for: somewhat connected, aware but not home, Taoist curiosity
// 4 = Expansion        → for: wants more, pleasure is small/localized, ready to expand
// 5 = Circulation      → for: experienced, pleasure exists but doesn't sustain/circulate
// 6 = Integration      → for: deeply practiced, rushes past the afterglow, extensive somatic work

export const SCORING: Record<string, Record<number, number>[]> = {
  q1: [
    { 0: 3 },             // A: completely disconnected → Arrival
    { 0: 2, 3: 1 },       // B: aware not at home → Arrival + Energy Awareness
    { 3: 2, 1: 1 },       // C: somewhat connected → Energy Awareness + Sensual Awakening
    { 4: 2, 5: 1 },       // D: deeply in body → Expansion + Circulation
  ],
  q2: [
    { 0: 3 },             // A: pleasure far away → Arrival
    { 4: 3 },             // B: small/localized → Expansion
    { 1: 3 },             // C: perform it / watching self → Sensual Awakening
    { 4: 2, 5: 1 },       // D: want it to expand → Expansion + Circulation
  ],
  q3: [
    { 0: 2, 1: 1 },       // A: heal shame/past → Arrival + Sensual Awakening
    { 4: 2, 5: 1 },       // B: deeper orgasmic experience → Expansion + Circulation
    { 0: 1, 2: 2 },       // C: at home in body → Breath Ignition + Arrival
    { 2: 2, 3: 1 },       // D: curious/explore → Breath Ignition + Energy Awareness
  ],
  q4: [
    { 0: 3 },             // A: brace/contract → Arrival
    { 6: 2, 5: 1 },       // B: rush to peak, lose journey → Integration + Circulation
    { 1: 3 },             // C: head/narrate → Sensual Awakening
    { 5: 2, 6: 1 },       // D: can receive, want to expand → Circulation + Integration
  ],
  q5: [
    { 2: 2 },             // A: 15-20 min → Breath Ignition (shorter practices)
    { 0: 1 },             // B: 35 min → slight Arrival lean
    { 5: 1, 6: 1 },       // C: hour+ → Circulation + Integration
    {},                   // D: flexible → balanced
  ],
  q6: [
    { 0: 3 },             // A: never → Arrival
    { 2: 2, 3: 1 },       // B: yoga/breathwork/meditation → Breath Ignition + Energy Awareness
    { 3: 1, 4: 2 },       // C: therapy/bodywork → Energy Awareness + Expansion
    { 5: 2, 6: 2 },       // D: extensive somatic → Circulation + Integration
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
  let max = -1
  let idx = 0
  scores.forEach((s, i) => {
    if (s > max) { max = s; idx = i }
  })
  return idx
}
