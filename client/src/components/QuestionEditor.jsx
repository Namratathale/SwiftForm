export default function QuestionEditor({question, index, onChange, onRemove}) {
  // updateField(field, value)        → updates a single field on question via onChange
  // updateValidation(field, value)   → updates question.validation object via onChange
  // updateOptions(value)             → parses comma-separated string into options array via onChange

  return (
    <div className="question-card">
      {/* Card header: Q{index+1} label + required toggle + remove button */}

      {/* Question title input */}

      {/* Description textarea */}

      {/* 2-col grid: type select (all 8 types) + placeholder input */}

      {/* If type is select | radio | checkbox → options input (comma-separated) */}

      {/* If type is short_text | long_text → 2-col grid: min length + max length inputs */}

      {/* If type is number → 2-col grid: min value + max value inputs */}
    </div>
  )
}