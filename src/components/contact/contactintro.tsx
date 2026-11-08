
function contactintro() {
  return (
    <section aria-labelledby="contact-title">
      {/* Section label */}
      <div className="flex items-center gap-2">
        <span
          className="h-[5px] w-[5px] rounded-full bg-[#4284F4]"
          aria-hidden="true"
        />

        <span className="text-[10px] font-medium uppercase tracking-wide text-[#5F6368]">
          Contact
        </span>

         <span
          className="h-[3px] w-[3px] rounded-full bg-[#5F6368]"
          aria-hidden="true"
        />

        <span className="text-[10px] font-medium uppercase tracking-wide text-[#5F6368]">
        Let's connect
        </span>
        
      </div>

      {/* Main heading */}
      <h1
        id="contact-title"
        className="mt-5 text-[clamp(32px,4.5vw,57px)] leading-[1.15] font-bold tracking-[1px] text-[#242424]"
      >
        Good things start with{' '}
        <span className="text-[#1967D2]">
          hello.
        </span>
      </h1>

      {/* Description */}
      <p className="mt-5 max-w-[610px] text-[18px] leading-[1.6] text-[#5F6368]">
        A question, a collaboration, or an idea for the
        community? Tell us what’s on your mind.
      </p>
    </section>
  )
}

export default contactintro
