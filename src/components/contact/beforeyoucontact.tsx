const guidanceItems = [
  {
    title: 'For learning questions',
    description:
      'Tell us which topic interests you and where you are in your learning journey.',
  },
  {
    title: 'For collaborations',
    description:
      'Share the idea, who it’s for, and how you imagine working with the community.',
  },
  {
    title: 'Not sure which category fits?',
    description:
      'Choose General inquiry. A clear question is always a good starting point.',
  },
]

function BeforeYouContact() {
  return (
    <section className="mt-16 border-t border-[#DADCE0] pt-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16">
        {/* LEFT SIDE */}
        <div>
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-[6px] w-[6px] rounded-full bg-[#4284F4]"
            />

            <span className="text-[11px] font-medium uppercase text-[#5F6368]">
              A little guidance
            </span>
          </div>

          <h2 className="mt-6 text-[37px] leading-[1] font-bold text-[#242424]">
            Help us understand
            <br />
            your idea.
          </h2>

          
<div className="mt-8 inline-flex items-center gap-3 text-[16px] font-medium text-[#1967D2]">
  <span>Explore the programs first</span>

  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
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
</div>

        </div>

        {/* RIGHT SIDE */}
        <div>
          {guidanceItems.map((item) => (
            <div
              key={item.title}
              className="border-b border-[#DADCE0] pt-5 pb-3 first:pt-0"
            >
              <h3 className="text-[18px] font-bold text-[#242424]">
                {item.title}
              </h3>

              <p className="mt-3 text-[16px] leading-[1.6] text-[#5F6368]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BeforeYouContact