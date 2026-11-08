import hustler from '../../assets/hustler.png'

function OverviewIntro() {
  return (
    <section
      aria-labelledby="overview-intro-title"
      className="w-full"
    >
      <div className="relative flex flex-col lg:min-h-[300px]">

        {/* LEFT SIDE */}
        <div className="relative z-10 lg:pr-[280px]">

          {/* Section label */}
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#4284F4]"
            />

            <span className="text-[11px] font-medium uppercase tracking-wide text-[#5F6368]">
              Overview • Programs & learning tracks
            </span>
          </div>

          {/* Main heading */}
          <h1
            id="overview-intro-title"
            className="mt-5 text-[36px] leading-[1.08] font-bold text-[#242424] sm:text-[44px] lg:text-[52px]"
          >
            Find your spark.
            <span className="block text-[#1967D2]">
              Build your own path.
            </span>
          </h1>
        </div>

        {/* DESCRIPTION */}
        <p className="relative z-10 mt-6 max-w-[850px] text-[16px] leading-[1.65] text-[#5F6368] lg:pr-[100px]">
          Explore how research, creativity, and development connect.
          Start with one interest. Grow through practice and the
          people around you.
        </p>

        {/* RIGHT SIDE */}
        <div className="mt-5 flex justify-center lg:absolute lg:top-[10px] lg:right-0 lg:mt-0 lg:w-[450px]">
          <img
            src={hustler}
            alt="Research and discovery illustration"
            className="block h-auto w-full max-w-[450px] object-contain"
          />
        </div>

      </div>
    </section>
  )
}

export default OverviewIntro
