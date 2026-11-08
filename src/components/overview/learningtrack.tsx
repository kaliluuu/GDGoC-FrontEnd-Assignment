import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getTracks } from '../../api'

import hustler from '../../assets/hustler.png'
import hipster from '../../assets/hipster.png'
import hacker from '../../assets/hacker.png'

const trackDesign: Record<
  string,
  {
    eyebrow: string
    image: string
    background: string
    description: string
    topics: string
    route: string
    imageClass: string
  }
> = {
  'research-discovery': {
    eyebrow: 'EXPLORE THE WHY',
    image: hustler,
    background: '#EAF2FF',
    description:
      'Ask better questions, understand people, and turn insight into a clear problem worth solving.',
    topics:
      'Problem framing · User research · Product thinking',
    route: '/hustler',

    // HUSTLER
    imageClass: 'h-[380px] top-[10px] left-[37%]',
  },

  'design-creativity': {
    eyebrow: 'MAKE IT MEANINGFUL',
    image: hipster,
    background: '#FFF7DF',
    description:
      'Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use.',
    topics:
      'UI/UX · Visual storytelling · Prototyping',
    route: '/hipster',

    // HIPSTER
    imageClass: 'h-[370px] top-[10px] left-[39%]',
  },

  development: {
    eyebrow: 'BRING IDEAS TO LIFE',
    image: hacker,
    background: '#EAF5ED',
    description:
      'Learn the tools, write the code, and build useful things with people who enjoy figuring it out.',
    topics:
      'Web & mobile · Cloud · AI foundations',
    route: '/hacker',

    // HACKER
    imageClass: 'h-[400px] top-[10px] left-[43%]',
  },
}

function LearningTrack() {
  const {
    data: tracks,
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['tracks'],
    queryFn: getTracks,
  })

  return (
    <section
      id="learning-track"
      aria-labelledby="learning-track-title"
      className="scroll-mt-28 py-16"
    >
      {/* Section label */}
      <div className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#4284F4]"
        />

        <span className="text-[11px] font-medium uppercase tracking-wide text-[#5F6368]">
          Explore your interests
        </span>
      </div>

      {/* Heading */}
      <h2
        id="learning-track-title"
        className="mt-5 max-w-[750px] text-[36px] leading-[1.08] font-bold text-[#242424] sm:text-[40px] lg:text-[44px]"
      >
        Three ways in. Plenty of ways forward.
      </h2>

      {/* Description */}
      <p className="mt-6 text-[16px] leading-[1.65] text-[#5F6368]">
        These pathways are starting points, not boxes.
        Follow one deeply or bring different skills together.
      </p>

      {/* Loading state */}
      {isPending && (
        <p role="status" className="mt-10 text-[#5F6368]">
          Loading learning tracks...
        </p>
      )}

      {/* Error state */}
      {isError && (
        <div role="alert" className="mt-10">
          <p className="text-red-600">
            Failed to load learning tracks.
          </p>

          <button
            type="button"
            onClick={() => refetch()}
            className="mt-3 text-[#1967D2] underline"
          >
            Try again
          </button>
        </div>
      )}

      {/* Empty state */}
      {tracks?.length === 0 && (
        <p className="mt-10 text-[#5F6368]">
          No learning tracks are available.
        </p>
      )}

      {/* Track cards */}
      {tracks && tracks.length > 0 && (
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track) => {
            const design = trackDesign[track.id]

            return (
              <article
                key={track.id}
                className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-[24px] border border-[#DADCE0] bg-white"
              >
                {/* Colored image background */}
                <div
                  className="relative h-[220px] shrink-0"
                  style={{
                    backgroundColor:
                      design?.background ?? '#F1F3F4',
                  }}
                >
                  {design?.image && (
                    <img
                      src={design.image}
                      alt={`${track.name} illustration`}
                      className={`
                        absolute z-10
                        w-auto max-w-none
                        -translate-x-1/2
                        object-contain
                        ${design.imageClass}
                      `}
                    />
                  )}
                </div>

                {/* White card content */}
                <div className="relative z-0 flex flex-1 flex-col bg-white px-6 pt-20 pb-7">
                  {/* Eyebrow */}
                  <p className="text-[11px] font-medium uppercase tracking-wide text-[#1967D2]">
                    {design?.eyebrow ?? 'EXPLORE THIS TRACK'}
                  </p>

                  {/* Track name from API */}
                  <h3 className="mt-1 text-[24px] leading-[1.2] font-bold text-[#242424]">
                    {track.name}
                  </h3>

                  {/* Figma description */}
                  <p className="mt-4 text-[16px] leading-[1.6] text-[#5F6368]">
                    {design?.description ?? track.description}
                  </p>

                  {/* Topics and link at bottom */}
                  <div className="mt-auto pt-5">
                    <div className="border-t border-[#DADCE0] pt-5">
                      <p className="text-[13px] leading-[1.6] text-[#5F6368]">
                        {design?.topics ?? track.skills.join(' · ')}
                      </p>
                    </div>

                    <Link
                      to={
                        design?.route ??
                        `/overview?track=${encodeURIComponent(track.id)}`
                      }
                      className="mt-3 inline-flex items-start gap-3 text-[16px] font-medium text-[#1967D2] hover:underline"
                    >
                      <span>Explore this track</span>

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
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default LearningTrack
