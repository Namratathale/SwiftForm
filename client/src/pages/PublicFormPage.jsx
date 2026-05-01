import {useEffect, useMemo, useState} from 'react'
import {useParams} from 'react-router-dom'
import {api} from '../lib/api'

// isEmpty(value) → true if value is undefined, null, '', or empty array

export default function PublicFormPage() {
  const {slug} = useParams()
  // state: form, answers, step, status ('loading' | 'ready' | 'error' | 'submitted'), error

  // useEffect on [slug] → fetch api.getPublicForm, setForm + setStatus('ready') or setError + setStatus('error')

  // question → form?.questions?.[step]
  // progress (memo) → 0 if no questions, else Math.round(((step + 1) / total) * 100)

  // updateAnswer(questionId, value) → merges into answers state
  // validateCurrent()              → checks required + isEmpty, sets/clears error, returns bool
  // handleNext()                   → validateCurrent, then increment step (capped at last)
  // handleSubmit()                 → validateCurrent, maps answers to payload, calls api.submitResponse, setStatus('submitted')

  // renderInput() → renders input based on question.type:
  //   'long_text'  → textarea
  //   'select'     → select with options
  //   'radio'      → choice grid with radio inputs
  //   'checkbox'   → choice grid with checkbox inputs (manages array of selected values)
  //   default      → input with typeMap (email, number, date, short_text → text)

  // if status === 'loading'   → loading page
  // if status === 'error'     → error page
  // if status === 'submitted' → success card (with theme CSS vars)
  // if no questions           → empty state page

  return (
    <main className="public-shell">
      {/* Progress bar (width = progress%) */}

      <section className="public-card">
        {/* Top line: form title (eyebrow) + step counter (step+1 / total) */}

        {/* Question title */}
        {/* Question description (if any) */}
        {/* Question stage: renderInput() */}
        {/* Error text (if any) */}

        <div className="question-actions">
          {/* Back button (disabled if step === 0) */}
          {/* If last step → Submit button, else → Next button */}
        </div>
      </section>
    </main>
  )
}