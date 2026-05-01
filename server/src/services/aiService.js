import {buildFallbackSchema, buildSchemaFromFieldListInput, buildSchemaFromPrompt} from '../utils/formTemplates.js'

// debug(...args)             → logs to console if DEBUG_AI === 'true'
// stripCodeFences(content)   → removes ```json ... ``` fences, returns trimmed inner text
// extractJson(content)       → stripCodeFences, then tries:
//                              1. JSON.parse as-is
//                              2. slice first { ... } and parse
//                              3. slice first [ ... ] and parse
//                              throws if all attempts fail

// slugify(value)             → lowercases, trims, replaces non-alphanumeric with '-', strips leading/trailing '-'
// optionSet(items)           → maps string items to { label, value: slugify(item) }, filters empty
// safeType(type, title)      → normalizes type string to supported enum value:
//                              checks supported set → alias map → title keyword inference → fallback 'short_text'
// normalizeQuestion(raw, index, used) → builds normalized question object:
//                              resolves id (slugified, deduped via used Set),
//                              type via safeType, required (default true), placeholder, description, validation
//                              options (for select/radio/checkbox, with rating fallback)
// normalizeSchema(parsed, prompt)     → extracts title, description, questions from parsed object
//                              maps raw questions through normalizeQuestion, filters blank titles
// enforcePromptFields(schema, prompt) → if field-list input detected → overwrite with direct schema
//                              else if derived schema exists + not all fields matched → merge in derived questions

export const generateFormSchema = async (prompt) => {
  // if no GROQ_API_KEY → return buildFallbackSchema + meta { provider: 'local-fallback' }
  // POST to Groq chat completions (llama-3.1-8b-instant, temp 0.3)
  //   system: instruct model to return JSON only with title, description, fields
  //   user: prompt
  // on non-ok response → throw error
  // extractJson from response content
  // normalizeSchema → enforcePromptFields
  // debug final questions
  // return enforced schema + meta { provider: 'groq' }
  // on any error → return buildFallbackSchema + meta { provider: 'local-fallback', reason: error.message }
}