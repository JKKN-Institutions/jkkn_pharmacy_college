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

    </div>
  )
}
