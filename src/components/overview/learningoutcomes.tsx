import { useQuery } from '@tanstack/react-query'
import { getTracks } from '../../api'

const outcomeContent: Record<
  string,
  {
    practice: string
    outcome: string
  }
> = {
  'research-discovery': {
    practice: 'Listening, problem framing, and testing assumptions',
    outcome: 'A research insight and a focused problem brief',
  },
  'design-creativity': {
    practice: 'Ideation, user flows, and prototype feedback',
    outcome: 'An interactive prototype and a design story',
  },
  development: {
    practice: 'Coding, testing, and connecting tools',
    outcome: 'A working demo with a clear explanation',
  },
}

function LearningOutcomes() {
  const { data: tracks, isPending, isError } = useQuery({
    queryKey: ['tracks'],
    queryFn: getTracks,
  })

  return (
    <section
      id="learning-outcomes"
      aria-labelledby="learning-outcomes-title"
      className="py-16"
    >
      <h2
        id="learning-outcomes-title"
        className="text-[36px] leading-[1.15] font-medium text-[#242424] sm:text-[40px]"
      >
        From an interest to something you can show.
      </h2>

      <div className="mt-8 overflow-hidden rounded-[24px] border border-[#DADCE0] bg-white">
        {/* table header */}
        <div className="grid grid-cols-[1.1fr_1.9fr_1.9fr] border-b border-[#DADCE0] bg-[#F8F9FA]">
          <div className="px-6 py-5 text-[14px] font-medium text-[#5F6368]">
            Pathway
          </div>
          <div className="px-6 py-5 text-[14px] font-medium text-[#5F6368]">
            What you can practice
          </div>
          <div className="px-6 py-5 text-[14px] font-medium text-[#5F6368]">
            A possible outcome
          </div>
        </div>

        {/* loading state */}
        {isPending && (
          <div className="px-6 py-8 text-[16px] text-[#5F6368]">
            Loading outcomes...
          </div>
        )}

        {/* error state */}
        {isError && (
          <div className="px-6 py-8 text-[16px] text-red-600">
            Failed to load learning outcomes.
          </div>
        )}

        {/* rows */}
        {tracks?.map((track, index) => {
          const content = outcomeContent[track.id]

          return (
            <div
              key={track.id}
              className={`grid grid-cols-[1.1fr_1.9fr_1.9fr] ${
                index !== tracks.length - 1 ? 'border-b border-[#DADCE0]' : ''
              }`}
            >
              <div className="px-6 py-6 text-[16px] font-semibold text-[#242424]">
                {track.name}
              </div>

              <div className="px-6 py-6 text-[16px] leading-[1.6] text-[#5F6368]">
                {content?.practice ?? '-'}
              </div>

              <div className="px-6 py-6 text-[16px] leading-[1.6] text-[#5F6368]">
                {content?.outcome ?? '-'}
              </div>
            </div>
          )
        })}
      </div>

      <p className="mt-8 text-[14px] leading-[1.6] text-[#5F6368]">
        Illustrative learning outcomes. Topics and opportunities are shared through
        community updates.
      </p>
    </section>
  )
}

export default LearningOutcomes