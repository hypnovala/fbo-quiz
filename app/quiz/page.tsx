import Quiz from '@/components/Quiz'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Find Your FBO Starting Module · Free Quiz',
  description: 'Answer 6 questions and discover which Full Body Orgasmic module will give you the most benefit — personalised to exactly where you are.',
}

export default function QuizPage() {
  return <Quiz />
}
