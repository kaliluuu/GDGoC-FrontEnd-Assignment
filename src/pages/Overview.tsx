import OverviewIntro from '../components/overview/intro'
import OverviewSectionNav from '../components/overview/sectionnav'
import LearningTrack from '../components/overview/learningtrack'
import LearningOutcomes from '../components/overview/learningoutcomes'

function Overview() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 pt-6 pb-16 sm:px-10 lg:px-16">
        {/* 1. Overview Introduction */}
        <OverviewIntro />
      </div>

      {/* 2. Section Navigation */}
      <OverviewSectionNav />

      {/* 3. Placeholder */}
       <div className="mx-auto max-w-[1280px] px-6 pb-16 sm:px-10 lg:px-16">
        <LearningTrack />

      <LearningOutcomes />
        <section id="program-format" className="scroll-mt-28 py-16">
          <h2 className="text-3xl font-bold text-[#242424]">
            Program Format
          </h2>
        </section>

        <section id="learning-journey" className="scroll-mt-28 py-16">
          <h2 className="text-3xl font-bold text-[#242424]">
            Learning Journey
          </h2>
        </section>

        <section id="starting-point" className="scroll-mt-28 py-16">
          <h2 className="text-3xl font-bold text-[#242424]">
            Starting Point
          </h2>
        </section>
      </div>
    </div>
  )
}

export default Overview