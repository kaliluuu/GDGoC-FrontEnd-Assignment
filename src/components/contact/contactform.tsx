
import { useState } from 'react'
import type { FormEvent } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getInquiryCategories } from '../../api'

type ContactFormProps = {
  selectedCategoryId: string | null
  onSelectCategory: (id: string) => void
}

function ContactForm({
  selectedCategoryId,
  onSelectCategory,
}: ContactFormProps) {
  // Fetch inquiry categories from the API
  const {
    data: categories,
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['inquiry-categories'],
    queryFn: getInquiryCategories,
  })

  // Form state
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [organization, setOrganization] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [agreed, setAgreed] = useState(false)

  // Use the first category when nothing has been selected
  const activeCategoryId =
    selectedCategoryId ?? categories?.[0]?.id ?? ''

  const selectedCategory = categories?.find(
    (category) => category.id === activeCategoryId
  )

  // Reusable styling
  const inputClass =
    'w-full rounded-[10px] border border-[#DADCE0] bg-white px-4 py-3 text-[15px] text-[#242424] placeholder:text-[#5F6368] focus:border-[#4284F4] focus:outline-none focus:ring-2 focus:ring-[#4284F4]/20'

  const labelClass =
    'mb-2 block text-[14px] font-medium text-[#242424]'

  // Handle form submission
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!selectedCategory || !agreed) return

    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim()

    const emailSubject =
      `[${selectedCategory.label}] ${subject.trim()}`

    const emailBody = [
      'Hello Google Developer Group on Campus UGM!',
      '',
      `My name is ${fullName}${organization.trim() ? ` from ${organization.trim()}` : ''}.`,
      '',
      message.trim(),
      '',
      `Please kindly reply to ${email.trim()}`,
    ].join('\n')

    const mailtoUrl =
      `mailto:dscugm2@gmail.com` +
      `?subject=${encodeURIComponent(emailSubject)}` +
      `&body=${encodeURIComponent(emailBody)}`

    window.location.href = mailtoUrl
  }

  return (
    <section
      aria-labelledby="contact-form-title"
      className="w-full rounded-[28px] bg-[#F1F3F4] p-6 sm:p-9"
    >
      {/* Heading */}
      <div className="flex items-center justify-between gap-4">
        <h2
          id="contact-form-title"
          className="text-[28px] leading-tight font-bold text-[#242424] sm:text-[32px]"
        >
          Send us a message
        </h2>

        <svg
          aria-hidden="true"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1967D2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 19 19 5M8 5h11v11" />
        </svg>
      </div>

      <p className="mt-6 text-[14px] text-[#5F6368]">
        Fields marked * are required.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-6">

        {/* First name and last name */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className={labelClass}>
              First name *
            </label>

            <input
              id="first-name"
              type="text"
              name="firstName"
              autoComplete="given-name"
              placeholder="Your first name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="last-name" className={labelClass}>
              Last name
            </label>

            <input
              id="last-name"
              type="text"
              name="lastName"
              autoComplete="family-name"
              placeholder="Your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email address *
          </label>

          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Where we can reply to you"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>

        {/* University / organization */}
        <div>
          <label htmlFor="organization" className={labelClass}>
            University / organization
          </label>

          <input
            id="organization"
            type="text"
            name="organization"
            autoComplete="organization"
            placeholder="Where you study or work (optional)"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className={inputClass}
          />
        </div>

        
{/* Inquiry category */}
<div>
  <label htmlFor="category" className={labelClass}>
    Inquiry category *
  </label>

  {/* Wrapper for dropdown and custom arrow */}
  <div className="relative">
    <select
      id="category"
      name="category"
      required
      value={activeCategoryId}
      onChange={(e) => onSelectCategory(e.target.value)}
      disabled={isPending || isError || !categories?.length}
      className={`${inputClass} appearance-none pr-10`}
    >
      {isPending && (
        <option value="">Loading categories...</option>
      )}

      {isError && (
        <option value="">Categories unavailable</option>
      )}

      {!isPending && !isError && categories?.length === 0 && (
        <option value="">No categories available</option>
      )}

      {categories?.map((category) => (
        <option key={category.id} value={category.id}>
          {category.label}
        </option>
      ))}
    </select>

    {/* Blue dropdown arrow */}
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1967D2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </div>

  {isError && (
    <button
      type="button"
      onClick={() => refetch()}
      className="mt-2 text-sm text-[#1967D2] underline"
    >
      Retry loading categories
    </button>
  )}
</div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className={labelClass}>
            Subject *
          </label>

          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="A short introduction to your question"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClass}>
            Your message *
          </label>

          <textarea
            id="message"
            name="message"
            placeholder="Tell us a little about your question or idea..."
            rows={6}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClass} resize-y`}
          />
        </div>

        {/* Consent checkbox */}
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            required
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 accent-[#4284F4]"
          />

          <span className="text-[13px] leading-relaxed text-[#5F6368]">
            I agree that the information I share can be used
            to respond to this inquiry.
          </span>
        </label>

        {/* Submit button and reminder */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={!selectedCategory || isPending || isError}
            className="inline-flex w-fit items-center justify-center gap-4 rounded-[10px] bg-[#4284F4] px-6 py-3 text-[16px] font-medium text-white transition-colors hover:bg-[#1967D2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1967D2] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send message

            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </button>

          <p className="max-w-[230px] text-[12px] leading-relaxed text-[#5F6368]">
            Please don't include passwords or sensitive
            personal information.
          </p>
        </div>

        <p className="text-[12px] text-[#5F6368]">
          Clicking Send message opens your email app
          with a prepared message. Review and send it there.
        </p>
      </form>
    </section>
  )
}

export default ContactForm
