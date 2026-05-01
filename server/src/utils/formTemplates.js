const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const optionSet = (items) => items.map((item) => ({label: item, value: slugify(item)}))

const createQuestion = (id, title, type, overrides = {}) => ({
  id,
  title,
  type,
  description: '',
  required: true,
  placeholder: '',
  options: [],
  validation: {},
  ...overrides
})

const uniqueId = (base, used) => {
  let candidate = base || `field_${used.size + 1}`
  let count = 1
  while (used.has(candidate)) {
    candidate = `${base || 'field'}_${count}`
    count += 1
  }
  used.add(candidate)
  return candidate
}

// looksLikeExplicitFieldPrompt(prompt) → returns true if prompt contains field markers or keywords (with/including/etc.)
const looksLikeExplicitFieldPrompt = (prompt) => {
  const text = String(prompt || '').toLowerCase()
  return (
    text.includes('field:') ||
    text.includes('fields:') ||
    /\b(with|including|include|has)\b/.test(text) ||
    /\bfields?\b/.test(text)
  )
}

// extractFieldList(prompt) → finds field segment after marker, splits by comma/and/&,
//                            handles single-word token lists, filters implausible labels (>48 chars)
const extractFieldList = (prompt) => {
  return []
}

// inferQuestionFromLabel(label) → infers type + placeholder + validation from label keywords:
//   password → short_text, email → email, date/dob → date,
//   phone/mobile → short_text, age/number → number,
//   address → long_text, rating → radio (1-5), default → short_text
const inferQuestionFromLabel = (label) => {
  return {title: String(label || '').trim(), type: 'short_text', placeholder: '', required: true}
}

// stripLeadingPromptText(value) → strips "Create a form with ..." prefix, returns fields segment
const stripLeadingPromptText = (value) => {
  return String(value || '').trim()
}

export const buildSchemaFromFieldListInput = (prompt) => {
  // stripLeadingPromptText, normalize separators
  // if no commas + no bullet markers → null
  // split by comma, filter blank fields
  // map fields → inferQuestionFromLabel → createQuestion (with uniqueId)
  // return { title: 'Generated Form', description, questions }
  return null
}

export const buildSchemaFromPrompt = (prompt) => {
  // if !looksLikeExplicitFieldPrompt → null
  // extractFieldList → null if empty
  // map fields → inferQuestionFromLabel → createQuestion (with uniqueId)
  // return { title: 'Custom AI Form', description, questions }
  return null
}

export const buildFallbackSchema = (prompt) => {
  // try buildSchemaFromFieldListInput → return if found
  // try buildSchemaFromPrompt        → return if found
  // keyword match on normalized prompt:
  //   'contact'                         → Contact Form (name, email, phone, message)
  //   'registration' | 'register' | etc → Registration Form (full_name, email, age, phone)
  //   'admission' | 'school'            → School Admission Form (student, guardian, grade, address)
  //   'job'                             → Job Application Form (name, email, phone, role, experience, portfolio, motivation)
  //   'feedback' | 'survey'            → Customer Feedback Survey (name, email, rating, favorite, improvement, recommend)
  // default → Custom AI Form (name, email, details)
  return {
    title: 'Custom AI Form',
    description: `AI-generated form for: ${prompt}`,
    questions: [
      createQuestion('name', 'What is your name?', 'short_text', {placeholder: 'Enter your name'}),
      createQuestion('email', 'What is your email?', 'email', {placeholder: 'name@example.com'}),
      createQuestion('details', 'Tell us more.', 'long_text', {placeholder: 'Add the information you want to collect'})
    ]
  }
}

export const toSlugBase = slugify