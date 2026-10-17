import { useState } from 'react'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
// Web3Forms access keys are public by design; they only allow sending to the owner's inbox.
const WEB3FORMS_ACCESS_KEY = '4bc3c996-6926-4376-bf86-74d546fff2f0'

export const STATUS = {
  idle: 'idle',
  submitting: 'submitting',
  success: 'success',
  error: 'error',
}

const MESSAGES = {
  [STATUS.success]: 'Thanks for reaching out. I’ll be in touch soon.',
  [STATUS.error]: 'Something went wrong. Please try again or email me directly.',
}

function useContactForm() {
  const [status, setStatus] = useState(STATUS.idle)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    setStatus(STATUS.submitting)

    const payload = {
      ...Object.fromEntries(new FormData(form)),
      access_key: WEB3FORMS_ACCESS_KEY,
    }

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? `Request failed with status ${response.status}`)
      }

      form.reset()
      setStatus(STATUS.success)
    } catch (error) {
      console.error('Unable to submit the contact form:', error)
      setStatus(STATUS.error)
    }
  }

  return {
    status,
    isSubmitting: status === STATUS.submitting,
    message: MESSAGES[status] ?? '',
    handleSubmit,
  }
}

export default useContactForm
