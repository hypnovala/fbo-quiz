import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'Find Your FBO Starting Point · Free Quiz',
  description:
    'A 3-minute somatic quiz that reveals which Full Body Orgasmic module will give you the most benefit — personalised to exactly where you are.',
  openGraph: {
    title: 'Find Your FBO Starting Point · Free Quiz',
    description: 'Discover which of the 7 FBO modules your body is ready for — free 3-minute quiz.',
    url: 'https://fbo-quiz.vercel.app',
    siteName: 'BrockJohn · Full Body Orgasmic',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
