'use client'

import Header from '@/components/Header'

export default function QualityPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          {/* Page Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-6 lg:mb-8">
            Quality Policy
          </h1>

          {/* Introduction Paragraph */}
          <p className="text-gray-700 leading-relaxed mb-8 lg:mb-10">
            JKKN College of Pharmacy is committed to excellence in pharmaceutical education,research, and healthcare, advancing knowledge while preparing individuals for leadership and success in both life and work.
          </p>

          {/* Prime Mottos Section */}
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
            Prime Mottos
          </h2>

          {/* Bullet Points List */}
          <ul className="space-y-4 list-disc ml-6 lg:ml-8 text-gray-700 leading-relaxed">
            <li>
              To pursue excellence in education and research, fostering innovation and advancements in healthcare.
            </li>
            <li>
              To continuously improve our processes, maintaining high standards across all academic and operational activities.
            </li>
            <li>
              To promote a culture of integrity, innovation, and accountability among faculty, staff, and students.
            </li>
            <li>
              To equip learners with the skills and knowledge needed to create sustainable and impactful healthcare solutions that address the needs of the 21st century
            </li>
            <li>
              To cultivate strong communication, teamwork, leadership, and critical thinking skills in students to excel in various contexts.
            </li>
            <li>
              To uphold ethical practices that responsibly address society's healthcare needs.
            </li>
          </ul>
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
