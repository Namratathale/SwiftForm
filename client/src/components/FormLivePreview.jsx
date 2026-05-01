// normalizeQuestion(question, index) → returns normalized question object with fallback defaults
// normalizeForm(form)               → returns null if no form, else normalized form object with theme + questions

function PreviewField({question}) {
  // renders different input UI based on question.type:
  // 'long_text' → textarea
  // 'select'    → div with first option label
  // 'radio' | 'checkbox' → list of choice items with fallback options
  // default (email, number, date, short_text) → text input with placeholder map
}

export default function FormLivePreview({form}) {
  // preview = normalizeForm(form)

  // if no preview → empty state UI

  return (
    <div className="preview-card">
      {/* Card header: status kicker + question count */}

      {/* Form summary: title + description */}

      <div className="preview-form-stage">
        {/* If questions exist → map over questions:
              each question → article with:
                - step label (Q{index+1}) + required badge
                - question title
                - question description (if any)
                - <PreviewField />
            If no questions → empty state UI */}
      </div>
    </div>
  )
}