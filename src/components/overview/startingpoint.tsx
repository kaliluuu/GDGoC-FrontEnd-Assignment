import { Link } from 'react-router-dom'

function StartingPoint() {
  return (
    <section
      id="starting-point"
      aria-labelledby="starting-point-title"
      className="w-full scroll-mt-28 bg-[#FFF7DF] py-16 lg:py-20"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-6 sm:px-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16 lg:px-16">

        {/* LEFT SIDE */}
        <div>
          {/* Section label */}
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#4284F4]"
            />

            <span className="text-[11px] font-medium uppercase tracking-wide text-[#5F6368]">
              Start where you are
            </span>
          </div>

          {/* Heading */}
          <h2
            id="starting-point-title"
            className="mt-4 max-w-[400px] text-[32px] leading-[1.15] font-bold text-[#242424] sm:text-[35px]"
          >
            New to tech?
            <br />
            That’s a starting point, too.
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center">
          {/* Description */}
          <p className="max-w-[600px] text-[16px] leading-[1.65] tracking-[-1.3px] font-normal text-[#5F6368]">
            You don’t need a finished portfolio or the perfect
            track choice. Pick a topic you’re curious about.
            If you’re unsure, tell us what interests you
            and we can start a conversation.
          </p>

          {/* Contact link */}
          <Link
            to="/contact"
            className="mt-5 inline-flex w-fit items-center gap-3 text-[16px] font-medium text-[#1967D2] transition-colors hover:text-[#174EA6] hover:underline"
          >
            Ask about getting started

            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default StartingPoint
