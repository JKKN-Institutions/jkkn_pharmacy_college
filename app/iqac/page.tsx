'use client'

import Header from '@/components/Header'

export default function IQACPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          {/* Page Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-8 lg:mb-10">
            IQAC
          </h1>

          {/* Content */}
          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* Introduction */}
            <p className="text-justify">
              IQAC is the heart of our quest for excellence in higher education. It operates as a quality guardian, meticulously planning, guiding, and monitoring quality initiatives within our institution. Comprising distinguished faculty, administrators, and external experts, the IQAC focuses on continuous growth, setting benchmarks, facilitating internal reviews, and overseeing accreditation processes. Its mission is to cultivate a culture of excellence, transparency, and accountability, leading the way to comprehensive institutional growth and unwavering student satisfaction.
            </p>

            {/* Facets of IQAC */}
            <div className="mt-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Facets of IQAC:
              </h2>

              <div className="space-y-3">
                <p>
                  <strong>Curricular Aspects:</strong> Ensuring relevance and rigor in the curriculum.
                </p>
                <p>
                  <strong>Teaching, Learning, and Evaluation:</strong> Enhancing pedagogical effectiveness.
                </p>
                <p>
                  <strong>Research, Innovation & Extension:</strong> Promoting a robust research environment.
                </p>
                <p>
                  <strong>Infrastructure and Learning Resources:</strong> Overseeing optimal utilization of facilities.
                </p>
                <p>
                  <strong>Student Progression:</strong> Guiding student growth and development.
                </p>
                <p>
                  <strong>Leadership and Management:</strong> Steering the institution towards its mission.
                </p>
                <p>
                  <strong>Institutional Values & Best Practices:</strong> Upholding the ethics and values of the institution.
                </p>
                <p>
                  <strong>Patient Care & Community Engagement:</strong> Fostering community relations and patient satisfaction.
                </p>
                <p>
                  <strong>Ranking and Accreditation Committee:</strong> Managing rankings and accreditation.
                </p>
                <p>
                  <strong>DTTM:</strong> Overseeing specific academic matters.
                </p>
              </div>
            </div>

            {/* Members and Their Roles */}
            <div className="mt-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Members and Their Roles:
              </h2>

              <div className="space-y-3">
                <p>
                  <strong>Chairperson:</strong> Dr. S Elanchezhiyan
                </p>
                <p>
                  <strong>Curricular Aspects:</strong> Dr. Rekha
                </p>
                <p>
                  <strong>Teaching, Learning, and Evaluation:</strong> Dr. V. Kumaran
                </p>
                <p>
                  <strong>Research, Innovation & Extension:</strong> Dr. T. Dhineshkumar
                </p>
                <p>
                  <strong>Infrastructure and Learning Resources:</strong> Dr. V. Vigneshkumar
                </p>
                <p>
                  <strong>Student and Progression:</strong> Dr. D. Sai Sadan
                </p>
                <p>
                  <strong>Leadership, Management:</strong> Dr. C. Dhineshkumar
                </p>
                <p>
                  <strong>Institutional Values & Best Practices:</strong> Dr. Monicca
                </p>
                <p>
                  <strong>Patient Care & Community:</strong> Dr. N. S. Naveenraj
                </p>
                <p>
                  <strong>Ranking and Accreditation Committee:</strong> Dr. B. Sasirckha
                </p>
                <p>
                  <strong>DTTM:</strong> Dr. J. Vijay Thiyagarajan
                </p>
                <p>
                  <strong>IQAC Coordinator:</strong> Dr. K Sakthisaranyadevi
                </p>
                <p>
                  <strong>Student Members:</strong> Mr. Gowsik, Ms. Selvashree, Dr. A.S. Surya, Dr. Jothilakshmi, Miss. Yashwanthini.S, Mr. R. Thirumurukash, Mr. P. MuthuPandy, Miss S. MahaLakshmi, Miss. Harsitha, Mr. Kirubhakaran
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0F6B3E] text-white mt-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1 - JKKN Dental College and Hospital */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6 border-b-2 border-white pb-2 inline-block">
                JKKN Dental College and Hospital
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
                    JKKN College of Pharmacy
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
