import { useQuery } from '@tanstack/react-query'
import { getJourney } from '../../api'

// Figma descriptions for each API journey step
const journeyDesign: Record<string, string> = {
  discover:
    'Explore a topic and find the questions you want to answer.',

  practice:
    'Try an exercise, work through a challenge, and ask for help.',

  build:
    'Apply your learning to a small idea with a clear purpose.',

  share:
    'Show your process, gather feedback, and help someone else.',
}

function LearningJourney() {
  const {
    data: journey,
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['journey'],
    queryFn: getJourney,
  })

  // Sort steps according to the order from the API
  const sortedJourney = [...(journey ?? [])].sort(
    (a, b) => a.step - b.step
  )

  return (
    <section
      id="learning-journey"
      aria-labelledby="learning-journey-title"
      className="scroll-mt-28 bg-white py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">

        {/* SECTION LABEL */}
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#4284F4]"
          />

          <span className="text-[11px] font-medium uppercase tracking-wide text-[#5F6368]">
            Progress, not perfection
          </span>
        </div>

        {/* HEADING */}
        <h2
          id="learning-journey-title"
          className="mt-5 text-[32px] leading-[1.15] font-bold text-[#242424] sm:text-[36px] lg:text-[40px]"
        >
          A journey you can keep building on.
        </h2>

        {/* LOADING STATE */}
        {isPending && (
          <p
            role="status"
            className="mt-10 text-[16px] text-[#5F6368]"
          >
            Loading learning journey...
          </p>
        )}

        {/* ERROR STATE */}
        {isError && (
          <div role="alert" className="mt-10">
            <p className="text-red-600">
              Failed to load learning journey.
            </p>

            <button
              type="button"
              onClick={() => refetch()}
              className="mt-3 font-medium text-[#1967D2] underline"
            >
              Try again
            </button>
          </div>
        )}

        {/* EMPTY STATE */}
        {!isPending &&
          !isError &&
          sortedJourney.length === 0 && (
            <p className="mt-10 text-[#5F6368]">
              No learning journey steps are available.
            </p>
          )}

        {/* JOURNEY STEPS */}
        {!isPending &&
          !isError &&
          sortedJourney.length > 0 && (
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

              {sortedJourney.map((item) => (
                <article
                  key={item.id}
                  className="min-w-0"
                >
                  {/* STEP NUMBER */}
                  <span className="block text-[30px] leading-[1.2] font-bold text-[#1967D2]">
                    {String(item.step).padStart(2, '0')}
                  </span>

                  {/* DIVIDER */}
                  <div className="mt-4 border-t border-[#DADCE0]" />

                  {/* STEP TITLE */}
                  <h3 className="mt-4 text-[20px] leading-[1.3] font-semibold text-[#242424]">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-4 text-[14px] leading-[1.6] text-[#5F6368]">
                    {journeyDesign[item.id] ?? item.description}
                  </p>
                </article>
              ))}

            </div>
          )}

      </div>
    </section>
  )
}

export default LearningJourney
