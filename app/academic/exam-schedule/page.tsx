'use client'

import Header from '@/components/Header'

export default function ExamSchedulePage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          {/* Page Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-10 lg:mb-12">
            Exam Schedule
          </h1>

          {/* Content */}
          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* B.Pharm Section */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                B.Pharm:
              </h2>
              <ul className="list-disc ml-6 lg:ml-8 space-y-2">
                <li>
                  1<sup>st</sup> August of Every Year
                </li>
                <li>
                  1<sup>st</sup> February of Every Year
                </li>
              </ul>
            </div>

            {/* Pharm.D Section */}
            <div className="mt-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Pharm.D :
              </h2>
              <ul className="list-disc ml-6 lg:ml-8 space-y-2">
                <li>
                  15<sup>th</sup> October of Every Year
                </li>
                <li>
                  15<sup>th</sup> May of Every Year
                </li>
              </ul>
            </div>

            {/* M.Pharm Section */}
            <div className="mt-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                M.Pharm :
              </h2>
              <ul className="list-disc ml-6 lg:ml-8 space-y-2">
                <li>
                  15<sup>th</sup> April of Every Year
                </li>
                <li>
                  15<sup>th</sup> October of Every Year
                </li>
              </ul>
            </div>

            {/* College Examination Section */}
            <div className="mt-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                College Examination
              </h2>
              <ul className="list-disc ml-6 lg:ml-8 space-y-4">
                <li>
                  Candidates are expected to be in their seats on the bell [9.30 a.m and 12.30 p.m]. No one can enter the hall 30 minutes after the commencement of the examination.
                  <br />
                  <span className="block mt-2">No candidate can receive a question paper before taking her/himassigned seat in the hall.</span>
                </li>
                <li>
                  No candidate will be allowed to leave the examination hall before the expiry of at least half an hour after the question paper has been given out.
                </li>
                <li>
                  Candidates for all the examination should write their answers on both sides of the book supplied.
                </li>
                <li>
                  Everyone should bring their own pen, pencil, rubber, and scale.
                </li>
                <li>
                  No paper other than the question paper should be taken out of the examination hall.
                </li>
                <li>
                  Roll number, class and subject of paper should be clearly indicated on the answer papers.
                </li>
                <li>
                  When additional paper is needed, candidates should stand in their places and thus call attention.
                </li>
                <li>
                  Follow the detailed rules and regulation displayed during the examination.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0F6B3E] text-white mt-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1 - JKKN College of Pharmacy */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6 border-b-2 border-white pb-2 inline-block">
                JKKN COLLEGE OF PHARMACY
              </h3>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-white hover:text-gray-200 transition-colors text-sm lg:text-base"
                >
                  View larger map
                </a>
              </div>
            </div>

            {/* Column 2 - Our Institutions */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6 border-b-2 border-white pb-2 inline-block">
                OUR INSTITUTIONS
              </h3>
              <ul className="space-y-2 mt-6">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-200 transition-colors text-sm lg:text-base block"
                  >
                    JKKN Dental College and Hospital
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Contact Us */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6 border-b-2 border-white pb-2 inline-block">
                CONTACT US
              </h3>
              <div className="mt-6 space-y-2">
                <p className="text-white text-sm lg:text-base">
                  <strong>Call:</strong> +919345855001
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
