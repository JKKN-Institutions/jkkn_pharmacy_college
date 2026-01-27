'use client'

import Header from '@/components/Header'
import Image from 'next/image'

export default function OurInstitutionsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Banner Image */}
        <div className="w-full h-[200px] md:h-[300px] lg:h-[400px] relative">
          <Image
            src="/images/corridor-banner.jpg"
            alt="JKKN Institution Corridor"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-justify">
              At JKKN Institutions, our primary goal is to foster the technical knowledge and skill development of our students, preparing them to thrive in today's competitive world. Through the implementation of effective teaching practices, we strive to establish a strong educational foundation.
            </p>

            <p className="text-justify">
              Our institution boasts well-constructed academic blocks, cutting-edge lab facilities, state-of-the-art operation centers, extensive knowledge resource libraries, and top-notch sports infrastructure. We provide separate accommodation for both male and female students, ensuring a safe and conducive learning environment. Additionally, our general and dental hospitals offer comprehensive healthcare services and practical training opportunities.
            </p>

            <p className="text-justify">
              With actively functioning placement cells, we guarantee promising placements for all our students. Furthermore, we have established valuable partnerships with leading manufacturing and commercial enterprises, facilitating invaluable industrial and corporate exposure for both students and faculty members.
            </p>

            <p className="text-justify">
              Located in Komarapalayam, just 15 km from Erode City, Tamil Nadu, India, our institutions are easily accessible. The Erode railway station and Salem/Coimbatore airports are conveniently nearby, enhancing connectivity for students from various locations.
            </p>

            <p className="text-justify">
              At JKKN Institutions, we foster a culture of commitment, transparency, and teamwork. Our institutions are renowned as knowledge centers that offer abundant opportunities and support, fueling a spirit of initiative and success. We continuously strive for progressive enhancements to cater to the evolving needs of our students and faculty members.
            </p>

            <p className="text-justify">
              JKKN Institutions are committed to providing exceptional educational experiences for our students, empowering them with the skills and knowledge necessary to excel. With a focus on continuous improvement and collaborative partnerships, we ensure that our institutions are recognized as premier centers of education and opportunity.
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
