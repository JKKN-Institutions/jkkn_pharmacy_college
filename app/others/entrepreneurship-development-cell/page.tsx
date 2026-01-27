'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Header from '@/components/Header'

export default function EntrepreneurshipDevelopmentCellPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-[#6B9E4E] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/others" className="hover:text-[#6B9E4E] transition-colors">
              Others
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">Entrepreneurship Development Cell</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-12">
          Entrepreneurship Development Cell
        </h1>

        {/* Content Container */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 md:p-8 lg:p-10">
            <div className="space-y-8 md:space-y-10">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                  Entrepreneurship Development Cell
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  The Entrepreneurship Development Cell (EDC) at JKKN College of Pharmacy is dedicated to fostering a culture of innovation and entrepreneurship among its students. Our mission is to empower the next generation of pharmacists with the skills and knowledge necessary to become successful entrepreneurs in the pharmaceutical industry.
                </p>
              </div>

              {/* Vision */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                  Vision
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Our vision is to create a vibrant entrepreneurial ecosystem that encourages students to explore their innovative ideas, develop them into viable business ventures, and contribute to the growth of the pharmaceutical sector.
                </p>
              </div>

              {/* Mission */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                  Mission
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  The mission of the EDC at JKKN College of Pharmacy is to promote entrepreneurship among students by providing them with the necessary tools, resources, and mentorship. We aim to inspire students to become job creators rather than job seekers, thereby contributing to the economic development of the region.
                </p>
              </div>

              {/* Objectives */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                  Objectives
                </h2>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-gray-900 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                      <strong>Awareness Creation:</strong> Organize seminars, workshops, and awareness programs to educate students about the opportunities and challenges in entrepreneurship.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-gray-900 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                      <strong>Skill Development:</strong> Provide training and mentorship to enhance students' entrepreneurial skills and knowledge.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-gray-900 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                      <strong>Industry Interaction:</strong> Facilitate interactions with industry experts and entrepreneurs to provide real-world insights.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-gray-900 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                      <strong>Startup Support:</strong> Assist students in securing financial support and resources for their startup ventures.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-gray-900 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                      <strong>Innovation Incubation:</strong> Establish an incubation center to nurture innovative ideas and transform them into successful businesses.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Composition */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                  Composition of the Entrepreneurship Development Cell
                </h2>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block mr-2 text-base md:text-lg text-gray-700">✓</span>
                    <span className="text-base md:text-lg text-gray-700">Dr. M. Vijayabaskaran – Coordinator</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block mr-2 text-base md:text-lg text-gray-700">✓</span>
                    <span className="text-base md:text-lg text-gray-700">Dr. M.S. Arun – Co-Coordinator</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block mr-2 text-base md:text-lg text-gray-700">✓</span>
                    <span className="text-base md:text-lg text-gray-700">Ms. K. Kanagapriya – Member</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block mr-2 text-base md:text-lg text-gray-700">✓</span>
                    <span className="text-base md:text-lg text-gray-700">Dr. Alwin Simon – Member</span>
                  </li>
                </ul>
              </div>

              {/* Activities */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                  Activities
                </h2>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-gray-900 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                      <strong>Entrepreneurship Awareness Camps:</strong> Conduct regular camps to inspire students to take up entrepreneurship.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-gray-900 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                      <strong>Guest Lectures:</strong> Invite successful entrepreneurs to share their experiences and insights.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-gray-900 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                      <strong>Industrial Visits:</strong> Organize visits to pharmaceutical companies to expose students to industry practices.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-gray-900 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                      <strong>Mentorship Programs:</strong> Connect students with experienced mentors for guidance and support.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-gray-900 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                      <strong>Pitching Competitions:</strong> Host competitions where students can pitch their business ideas and receive feedback.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0F6B3E] text-white mt-12 md:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* JKKN College of Pharmacy */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">
                JKKN COLLEGE OF PHARMACY
              </h3>
              <div className="border-b-2 border-white w-16 mb-4 md:mb-6"></div>
              <div className="bg-gray-200 h-40 md:h-48 rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0123456789!2d77.5123456!3d11.0123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzQ0LjQiTiA3N8KwMzAnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JKKN College of Pharmacy Location"
                ></iframe>
              </div>
              <Link
                href="#"
                className="inline-block mt-3 md:mt-4 text-sm text-white hover:underline"
              >
                View larger map
              </Link>
            </div>

            {/* Our Institutions */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">
                OUR INSTITUTIONS
              </h3>
              <div className="border-b-2 border-white w-16 mb-4 md:mb-6"></div>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link
                    href="https://jkkndental.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base hover:underline block"
                  >
                    JKKN Dental College and Hospital
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://jkknallied.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base hover:underline block"
                  >
                    JKKN College of Allied Health Science
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">
                CONTACT US
              </h3>
              <div className="border-b-2 border-white w-16 mb-4 md:mb-6"></div>
              <div className="space-y-3 md:space-y-4">
                <p className="text-sm md:text-base">
                  <strong>Call:</strong>{' '}
                  <a href="tel:+919345855001" className="hover:underline">
                    +919345855001
                  </a>
                </p>
                <p className="text-sm md:text-base">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:pharmacy@jkkn.ac.in" className="hover:underline">
                    pharmacy@jkkn.ac.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
