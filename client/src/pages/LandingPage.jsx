import {useState} from 'react'
import {Link} from 'react-router-dom'

const examplePrompt = 'Create a customer feedback form for a SaaS product onboarding flow'

export default function LandingPage() {
  // state: prompt (initialized to examplePrompt)

  return (
    <main className="page landing-page">
      <section className="landing-compact-shell">
        <div className="hero-copy compact-hero">
          {/* Eyebrow, h1, description paragraph */}

          <div className="landing-prompt-card">
            {/* Prompt label */}
            {/* Prompt textarea */}
            {/* CTA row: 'Use example' button (resets prompt) + inline note */}
            {/* 'Start building' link → /auth */}
          </div>

          {/* Mini grid: 3 info cards (AI draft, Focused builder, Response dashboard) */}
        </div>
      </section>
    </main>
  )
}