'use client'

import Header from '@/components/Header'

export default function WhyJKKNPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          {/* Page Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10 lg:mb-12">
            Why JKKN?
          </h1>

          {/* Content Paragraphs */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-justify">
              The College of Pharmacy is dedicated to offering comprehensive programs that effectively equip students for the multifaceted demands of the pharmacy profession. These programs are meticulously designed to nurture a deep understanding of the technological, legal, civic, and ethical aspects intrinsic to the field. Rooted in a commitment to fostering professional, intellectual, social, and personal growth, the college strives to prepare its students to embark on their careers with competence and integrity.
            </p>

            <p className="text-justify">
              Central to an exemplary pharmacy education within the college is the cultivation of professional expertise in pharmaceutical sciences. This foundational knowledge not only lays the groundwork for future career paths but also imparts essential technical and experimental skills essential for success in the field. Simultaneously, the educational journey ignites intellectual growth by nurturing the development of creative instincts, critical problem-solving abilities, and logical reasoning. The pursuit of innovation and invention is encouraged, fostering a spirit of continuous advancement within each student.
            </p>

            <p className="text-justify">
              An ideal pharmacy education transcends technical proficiency and intellectual prowess. It extends to the realm of interpersonal dynamics, effective communication, and societal engagement. The college places significant emphasis on honing communication skills, the art of persuasion, and the ability to collaborate within a team. Leadership qualities are cultivated alongside a sense of responsibility towards society, fostering a spirit of unity and harmonious interaction within the larger community.
            </p>
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
