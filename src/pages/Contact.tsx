import { useState } from 'react'
import ContactIntro from '../components/contactintro'
import InquiryGuidance from '../components/inquiryguidance'
import CommunityUpdates from '../components/communityupdates'
import ContactForm from '../components/contactform'

function Contact() {
  // Shared selected category state
  const [selectedCategoryId, setSelectedCategoryId] =
    useState<string | null>(null)

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 pt-12 pb-16 sm:px-10 lg:px-16">

        {/* Contact introduction */}
        <ContactIntro />

        {/* Contact workspace */}
        <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,456px)_minmax(0,1fr)] lg:gap-16">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8">
            <InquiryGuidance
              selectedCategoryId={selectedCategoryId}
              onSelectCategory={setSelectedCategoryId}
            />

            <CommunityUpdates />
          </div>

          {/* RIGHT */}
          <ContactForm
            selectedCategoryId={selectedCategoryId}
            onSelectCategory={setSelectedCategoryId}
            />
        </div>
      </div>
    </div>
  )
}

export default Contact