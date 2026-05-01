import {useEffect, useMemo, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
import {api} from '../lib/api'

export default function DashboardPage() {
  const {id} = useParams()
  const {token} = useAuth()
  // state: data, error

  // useEffect on [id, token] → fetch api.getDashboard, setData or setError

  // completionRate (memo) → 0 if no data, else Math.min(100, totalResponses * 12)

  // if error → error page
  // if !data → loading page

  return (
    <main className="page dashboard-page">
      <section className="dashboard-hero glass-panel">
        {/* Hero copy: eyebrow, form title, form description */}

        {/* Stats grid: 3 stat cards (totalResponses, questionCount, published status) */}
      </section>

      <section className="dashboard-grid">
        {/* Momentum panel: eyebrow, h2, meter bar (width = completionRate%), helper text */}

        <article className="glass-panel response-panel">
          {/* Panel header: eyebrow + h2 */}

          <div className="responses-table">
            {/* If no responses → empty helper text */}
            {/* Else map latestResponses → response row with: */}
            {/*   submittedAt timestamp */}
            {/*   answer stack: each answer shows question title + value */}
            {/*   (array values joined by ', ', lookup question title by questionId) */}
          </div>
        </article>
      </section>
    </main>
  )
}