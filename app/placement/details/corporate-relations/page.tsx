'use client'

import Header from '@/components/Header'

export default function CorporateRelationsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          {/* Page Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10 lg:mb-12">
            Corporate Relation
          </h1>

          {/* Content Paragraphs */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-justify">
              The Corporate Relations & Industry Interface (CR & II) is a unique and dedicated department of "JKKN College of Pharmacy", established to provide expert guidance to students in specific areas beyond their regular academic curriculum and help them fulfill their career ambitions.
            </p>

            <p className="text-justify">
              CR & II empowers students with adequate Life Skills and domain skills so that they graduate from the college as competent and confident individuals who can take on the never-ending challenges of the industry.
            </p>

            <p className="text-justify">
              The College management has demonstrated its commitment to this important function by facilitating excellent infrastructure, human and other resources, in every campus.
            </p>

            <p className="text-justify">
              The Corporate Relations & Industry Interface (CR & II) strives to achieve excellent placement of students each year. A proven track record of consistent high quality placements year-on-year is one of the reasons for many bright students opting for admissions in JKKN Educational Institutions.
            </p>

            {/* Mission Section */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-12 mb-6">
              Mission
            </h2>

            <p className="text-justify">
              "To facilitate holistic career development of students through comprehensive and systematic training on Life Skills and build competence in core areas through innovative practical applications"
            </p>
          </div>
        </div>
      </main>

    </div>
  )
}
