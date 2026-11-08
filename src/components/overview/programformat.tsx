import { useQuery } from '@tanstack/react-query'
import { getFormats } from '../../api'

// Figma presentation settings for each API format
const formatDesign: Record<
  string,
  {
    description: string
    bestFor: string
    icon: string
    iconBackground: string
    order: number
  }
> = {
  'study-groups': {
    description:
      'Build foundations with peers. Work through a topic, compare approaches, and make space for questions.',
    bestFor: 'Learning the fundamentals',
    icon: 'book',
    iconBackground: '#EAF2FF',
    order: 1,
  },

  'hands-on-workshops': {
    description:
      'Get introduced to a tool or method, follow a practical exercise, and take away something to keep exploring.',
    bestFor: 'Trying something new',
    icon: 'code',
    iconBackground: '#EAF5ED',
    order: 2,
  },

  'project-circles': {
    description:
      'Connect research, design, and development around a shared problem. Learn through making and feedback.',
    bestFor: 'Putting skills into practice',
    icon: 'users',
    iconBackground: '#FFF7DF',
    order: 3,
  },

  'knowledge-sharing': {
    description:
      'Walk through an idea, share a lesson from your process, and discover how other students approach their work.',
    bestFor: 'Exchanging perspectives',
    icon: 'bulb',
    iconBackground: '#FCEBE9',
    order: 4,
  },
}

// Reusable SVG icon component
function FormatIcon({ type }: { type: string }) {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1967D2"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Study groups - Book */}
      {type === 'book' && (
        <>
          <path d="M12 6.5C9.5 5 6 5 3 6v13c3-1 6-.5 9 1" />
          <path d="M12 6.5C14.5 5 18 5 21 6v13c-3-1-6-.5-9 1" />
          <path d="M12 6.5V20" />
        </>
      )}

      {/* Hands-on workshops - Code */}
      {type === 'code' && (
        <>
          <path d="m9 7-5 5 5 5" />
          <path d="m15 7 5 5-5 5" />
        </>
      )}

      {/* Project circles - People */}
      {type === 'users' && (
        <>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 19v-2a6 6 0 0 1 12 0v2" />
          <path d="M17 5a3 3 0 0 1 0 6" />
          <path d="M19 14a5 5 0 0 1 2 4v1" />
        </>
      )}

      {/* Knowledge sharing - Lightbulb */}
      {type === 'bulb' && (
        <>
          <path d="M9 18h6" />
          <path d="M10 21h4" />
          <path d="M9 15.5C7 14.5 6 12.5 6 10a6 6 0 1 1 12 0c0 2.5-1 4.5-3 5.5L14 18h-4z" />
        </>
      )}
    </svg>
  )
}

function ProgramFormat() {
  // Fetch learning formats from the API
  const {
    data: formats,
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['formats'],
    queryFn: getFormats,
  })

  // Display only formats provided by the API
  // and arrange them according to the Figma layout
  const displayedFormats = [...(formats ?? [])]
    .filter((format) =>
      Object.prototype.hasOwnProperty.call(
        formatDesign,
        format.id
      )
    )
    .sort(
      (a, b) =>
        formatDesign[a.id].order -
        formatDesign[b.id].order
    )

  return (
    <section
      id="program-format"
      aria-labelledby="program-format-title"
      className="scroll-mt-28 bg-[#F1F3F4] py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">

        {/* SECTION LABEL */}
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#4284F4]"
          />

          <span className="text-[11px] font-medium uppercase tracking-wide text-[#5F6368]">
            Ways to learn
          </span>
        </div>

        {/* HEADING */}
        <h2
          id="program-format-title"
          className="mt-5 max-w-[800px] text-[36px] leading-[1.1] font-bold text-[#242424] sm:text-[40px] lg:text-[44px]"
        >
          The format changes. The curiosity stays.
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-5 text-[16px] leading-[1.65] text-[#5F6368]">
          Explore the kinds of experiences that help you move
          from understanding to doing.
        </p>

        {/* LOADING STATE */}
        {isPending && (
          <p
            role="status"
            className="mt-10 text-[16px] text-[#5F6368]"
          >
            Loading learning formats...
          </p>
        )}

        {/* ERROR STATE */}
        {isError && (
          <div role="alert" className="mt-10">
            <p className="text-red-600">
              Failed to load learning formats.
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
          displayedFormats.length === 0 && (
            <p className="mt-10 text-[#5F6368]">
              No matching learning formats are available.
            </p>
          )}

        {/* FORMAT CARDS */}
        {displayedFormats.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {displayedFormats.map((format) => {
              const design = formatDesign[format.id]

              return (
                <article
                  key={format.id}
                  className="flex h-full items-start gap-5 rounded-[24px] bg-white p-6 sm:p-7"
                >
                  {/* ICON CONTAINER */}
                  <div
                    className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[14px]"
                    style={{
                      backgroundColor: design.iconBackground,
                    }}
                  >
                    <FormatIcon type={design.icon} />
                  </div>

                  {/* TEXT CONTENT */}
                  <div className="min-w-0 flex-1">

                    {/* Format name */}
                    <h3 className="text-[24px] leading-[1.25] font-bold text-[#242424]">
                      {format.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-[14px] leading-[1.6] text-[#5F6368]">
                      {design.description}
                    </p>

                    {/* Best for from Figma */}
                    <p className="mt-3 text-[14px] leading-[1.5] font-medium text-[#1967D2]">
                      Best for · {design.bestFor}
                    </p>

                  </div>
                </article>
              )
            })}
          </div>
        )}

      </div>
    </section>
  )
}

export default ProgramFormat
