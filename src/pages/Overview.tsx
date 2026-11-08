import OverviewIntro from '../components/overview/intro'
import OverviewSectionNav from '../components/overview/sectionnav'
import LearningTrack from '../components/overview/learningtrack'
import LearningOutcomes from '../components/overview/learningoutcomes'
import ProgramFormat from '../components/overview/programformat'

function Overview() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 pt-6 pb-16 sm:px-10 lg:px-16">
        {/* 1. Overview Introduction */}
        <OverviewIntro />
      </div>

      {/* 2. Section Navigation */}
      <OverviewSectionNav />

      {/* 3. section */}
       <div className="mx-auto max-w-[1280px] px-6 pb-16 sm:px-10 lg:px-16">
        <LearningTrack />
        <LearningOutcomes />
       </div>
      <ProgramFormat />
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
  )
}

export default Overview