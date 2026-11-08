import { Link, useNavigate } from 'react-router-dom'

function CommunityInvitation() {
  const navigate = useNavigate()

  const handleExploreOverview = () => {
    navigate('/overview')

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="community-invitation"
      aria-labelledby="community-invitation-title"
      className="w-full bg-white pt-16 pb-6 lg:pt-20 lg:pb-8"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        {/* LIGHT BLUE INVITATION CARD */}
        <div className="rounded-[32px] bg-[#EAF2FF] px-8 py-10 sm:px-12 lg:px-12 lg:py-12">

          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT SIDE */}
            <div className="min-w-0 flex-1">

              {/* Section label */}
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#4284F4]"
                />

                <span className="text-[11px] font-medium uppercase tracking-wide text-[#5F6368]">
                  Your next chapter
                </span>
              </div>

              {/* Heading */}
              <h2
                id="community-invitation-title"
                className="mt-4 text-[36px] leading-[1.1] tracking-[-1px] font-bold text-[#242424] sm:text-[40px] lg:text-[44px]"
              >
                Bring your curiosity.
                <br />
                We’ll build from there.
              </h2>

              {/* Description */}
              <p className="mt-5 text-[16px] leading-[1.6] text-[#5F6368]">
                Find a learning track, meet a collaborator, or start a conversation.
              </p>
            </div>

            {/* RIGHT SIDE - BUTTONS */}
            <div className="flex shrink-0 flex-col items-start gap-4 lg:items-start">

              {/* Explore overview */}
              <button
                type="button"
                onClick={handleExploreOverview}
                className="inline-flex items-center justify-center gap-5 rounded-[10px] bg-[#4284F4] px-7 py-4 text-[16px] font-medium text-white transition-colors hover:bg-[#1967D2]"
              >
                Explore the overview

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
              </button>

              {/* Contact page */}
              <Link
                to="/contact"
                onClick={() => {
                window.scrollTo({
                top: 0,
                behavior: 'instant',
                    })
                  }}
  className="inline-flex items-center gap-4 text-[16px] font-medium text-[#1967D2] hover:underline"
>
                Talk to the community

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
        </div>
      </div>
    </section>
  )
}

export default CommunityInvitation
