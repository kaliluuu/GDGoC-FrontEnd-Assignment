function CommunityUpdates() {
  return (
    <aside className="rounded-[24px] bg-[#FFF7DF] p-6">
      {/* Section label */}
      <div className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className="h-[6px] w-[6px] rounded-full bg-[#4284F4]"
        />

        <span className="text-[11px] font-medium uppercase text-[#5F6368]">
          STAY CURIOUS, STAY CONNECTED
        </span>

      </div>

      {/* Heading */}
      <h3 className="mt-4 max-w-[320px] text-[24px] leading-[1.2] font-bold tracking-[0.75px] text-[#242424]">
        Looking for community updates?
      </h3>

      {/* Description */}
      <p className="mt-4 text-[15px] leading-[1.6] text-[#5F6368]">
        Follow <span className="font-bold">@gdgoc.ugm</span> for learning
        opportunities and what's happening in the community.
      </p>

      {/* Instagram link */}
      <a
        href="https://www.instagram.com/gdgoc.ugm"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-3 text-[15px] font-medium text-[#1967D2] hover:underline"
      >
        Find @gdgoc.ugm

        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </aside>
  )
}

export default CommunityUpdates