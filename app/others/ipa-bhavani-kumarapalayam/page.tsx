'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Header from '@/components/Header'

export default function IPABhavaniKumarapalayamPage() {
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
            <span className="text-gray-900 font-medium">IPA-Bhavani-Kumarapalayam Local Branch</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-12">
          IPA-Bhavani-Kumarapalayam Local Branch
        </h1>

        {/* Content Container */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 md:p-8 lg:p-10">
            <div className="space-y-8 md:space-y-10">
              {/* Main Heading */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0F6B3E] mb-4 md:mb-6">
                  INDIAN PHARMACEUTICAL ASSOCIATION -BHAVANI KUMARAPALAYAM LOCAL BRANCH
                </h2>
                <p className="text-base md:text-lg text-gray-900 leading-relaxed mb-4">
                  The Indian Pharmaceutical Association (IPA) – Bhavani Kumarapalayam Local Branch is a professional organization dedicated to promoting the growth and development of the pharmaceutical industry in the region. Our branch is affiliated with the JKKN College of Pharmacy, a premier institution for pharmaceutical education and research.
                </p>
              </div>

              {/* Our Mission */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                  Our Mission
                </h3>
                <p className="text-base md:text-lg text-gray-900 leading-relaxed">
                  Our mission is to foster innovation, encourage collaboration, and provide support to pharmaceutical professionals, students, and researchers in the Bhavani Kumarapalayam area. We strive to enhance the knowledge and skills of our members, promote ethical practices, and contribute to the overall advancement of the pharmaceutical sector.
                </p>
              </div>

              {/* Membership Benefits */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                  Membership Benefits
                </h3>
                <p className="text-base md:text-lg text-gray-900 leading-relaxed mb-3">
                  By becoming a member of the IPA – Bhavani Kumarapalayam Local Branch, you can:
                </p>
                <ul className="space-y-2 md:space-y-3 text-base md:text-lg text-gray-900">
                  <li className="leading-relaxed">– Access exclusive educational resources and training programs</li>
                  <li className="leading-relaxed">– Participate in workshops, seminars, and conferences</li>
                  <li className="leading-relaxed">– Network with industry professionals and experts</li>
                  <li className="leading-relaxed">– Stay updated on the latest trends and developments in the pharmaceutical field</li>
                  <li className="leading-relaxed">– Contribute to community outreach and public health initiatives</li>
                </ul>
              </div>

              {/* Events and Activities */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                  Events and Activities
                </h3>
                <p className="text-base md:text-lg text-gray-900 leading-relaxed mb-3">
                  We organize a wide range of events and activities throughout the year, including:
                </p>
                <ul className="space-y-2 md:space-y-3 text-base md:text-lg text-gray-900">
                  <li className="leading-relaxed">– Guest lectures by renowned pharmaceutical experts</li>
                  <li className="leading-relaxed">– Industrial visits to leading pharmaceutical companies</li>
                  <li className="leading-relaxed">– Research paper presentations and discussions</li>
                  <li className="leading-relaxed">– Workshops on emerging technologies and best practices</li>
                  <li className="leading-relaxed">– Social gatherings and cultural events</li>
                </ul>
              </div>

              {/* Collaboration with JKKN College of Pharmacy */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                  Collaboration with JKKN College of Pharmacy
                </h3>
                <p className="text-base md:text-lg text-gray-900 leading-relaxed mb-3">
                  Our strong collaboration with the JKKN College of Pharmacy enables us to:
                </p>
                <ul className="space-y-2 md:space-y-3 text-base md:text-lg text-gray-900">
                  <li className="leading-relaxed">-Provide internship and placement opportunities for students</li>
                  <li className="leading-relaxed">– Facilitate industry-academia interactions and knowledge exchange</li>
                  <li className="leading-relaxed">– Support research projects and innovations in the pharmaceutical domain</li>
                  <li className="leading-relaxed">– Organize joint events and programs for the benefit of students and professionals</li>
                </ul>
              </div>

              {/* Join Us */}
              <div>
                <p className="text-base md:text-lg text-gray-900 leading-relaxed">
                  <strong>Join Us :</strong> E-Mail:ipabvnkpm@jkkn.ac.in Website: pharmacy.jkkn.ac.in
                </p>
              </div>

              {/* Council Members Table */}
              <div className="overflow-x-auto -mx-6 md:-mx-8 lg:-mx-10 px-6 md:px-8 lg:px-10">
                <div className="inline-block min-w-full align-middle">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-3 text-left text-sm md:text-base font-semibold text-gray-700">
                          S.No
                        </th>
                        <th className="border border-gray-300 px-4 py-3 text-left text-sm md:text-base font-semibold text-gray-700">
                          Name
                        </th>
                        <th className="border border-gray-300 px-4 py-3 text-left text-sm md:text-base font-semibold text-gray-700">
                          Designation
                        </th>
                        <th className="border border-gray-300 px-4 py-3 text-left text-sm md:text-base font-semibold text-gray-700">
                          Number
                        </th>
                        <th className="border border-gray-300 px-4 py-3 text-left text-sm md:text-base font-semibold text-gray-700">
                          Email
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">1.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">Dr. V. Senthil</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">President</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">9842650602</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">pharmacyprincipal@jkkn.ac.in</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">2.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">Dr. S. Ananda Thangadurai</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">Vice President</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">9443367700</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">pharmacyviceprincipal@jkkn.ac.in</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">3.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">Mr. V. Venkateswaran</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">Hon. Secretary</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">9789293089</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">venkateswaran.v@jkkn.ac.in</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">4.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">Dr. M. Vijayabaskaran</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">Hon. Treasurer</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">9443331387</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">hodpharmachemistry@jkkn.ac.in</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">5.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">Dr. M.S. Arun</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">Hon . Joint Secretary</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">9994851232</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">arun.ms@jkkn.ac.in</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">6.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">Dr. N. Venkateswaramurthy</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">Council Member</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">9842724689</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">hodpharmacypractice@jkkn.ac.in</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">7.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">Dr. B. Rajkapoor</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">Council Member</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">9486700029</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">rajkapoor.balasubramanian@jkkn. ac.in</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">8.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">Mr. V. Vijayanandhan</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">Council Member</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">6383480658</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">vijayanandhan@jkkn.ac.in</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">9.</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">Dr. V. Sekar</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">Council Member</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">9842663659</td>
                        <td className="border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-700">hodpharmaceuticalanalysis@jkkn.ac.in</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
