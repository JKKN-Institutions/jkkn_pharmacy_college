'use client'

import Header from '@/components/Header'

export default function OurManagementPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          {/* Management Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Chairperson Section */}
            <div className="flex flex-col items-center">
              {/* Portrait Frame */}
              <div className="relative mb-8">
                <div className="relative w-64 h-64 lg:w-72 lg:h-72">
                  {/* Golden ornate frame effect */}
                  <div className="absolute inset-0 rounded-full border-[20px] lg:border-[22px] border-[#B8860B] shadow-2xl"
                       style={{
                         borderImage: 'linear-gradient(135deg, #D4AF37, #FFD700, #B8860B, #DAA520) 1',
                         boxShadow: '0 0 30px rgba(184, 134, 11, 0.4), inset 0 0 20px rgba(212, 175, 55, 0.3)'
                       }}>
                  </div>
                  {/* Image placeholder */}
                  <div className="absolute inset-6 lg:inset-7 rounded-full overflow-hidden bg-gray-200">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <p className="text-sm">[Chairperson Photo]</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Name */}
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0F6B3E] mb-4 text-center">
                SMT.N.SENDAMARAAI
              </h2>

              {/* Title */}
              <h3 className="text-lg lg:text-xl font-bold text-[#0F6B3E] mb-6 text-center">
                Chairperson - JKKN Educational Institutions
              </h3>

              {/* Description */}
              <div className="text-gray-700 leading-relaxed text-justify space-y-4">
                <p>
                  As the Chairperson of JKKN Educational Institutions, I am honoured to shoulder this immense responsibility, and I take great pride in our exceptional progress. We have earned the status of one of the most prestigious colleges in the region. "Leadership and Excellence" is not merely our motto but the foundation of our values, a testament to our state-of-the-art infrastructure and the exceptional quality of our community.
                </p>
                <p>
                  Our institution provides the necessary infrastructure along with a team of qualified and highly motivated faculty all under one roof for the benefit of our students. Beyond offering world-class education, we instil a progressive attitude, fostering innovation for the betterment of society. The synergy of academic excellence and industrial relevance distinguishes JKKN Educational Institutions, setting us apart. I warmly welcome you to our lush, green campus!
                </p>
              </div>
            </div>

            {/* Director Section */}
            <div className="flex flex-col items-center">
              {/* Portrait Frame */}
              <div className="relative mb-8">
                <div className="relative w-64 h-64 lg:w-72 lg:h-72">
                  {/* Golden ornate frame effect */}
                  <div className="absolute inset-0 rounded-full border-[20px] lg:border-[22px] border-[#B8860B] shadow-2xl"
                       style={{
                         borderImage: 'linear-gradient(135deg, #D4AF37, #FFD700, #B8860B, #DAA520) 1',
                         boxShadow: '0 0 30px rgba(184, 134, 11, 0.4), inset 0 0 20px rgba(212, 175, 55, 0.3)'
                       }}>
                  </div>
                  {/* Image placeholder */}
                  <div className="absolute inset-6 lg:inset-7 rounded-full overflow-hidden bg-gray-200">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <p className="text-sm">[Director Photo]</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Name */}
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0F6B3E] mb-4 text-center">
                MR.S.OMMSHARRAVANA
              </h2>

              {/* Title */}
              <h3 className="text-lg lg:text-xl font-bold text-[#0F6B3E] mb-6 text-center">
                Director - JKKN Educational Institutions
              </h3>

              {/* Description */}
              <div className="text-gray-700 leading-relaxed text-justify space-y-4">
                <p>
                  I extend my heartfelt congratulations to the college for its fervent and focused dedication to shaping future engineers of distinction. At JKKN, we are committed to innovative education methodologies that enable quality learning, foster independent thinking, and facilitate the development of well-rounded personalities. Our mission empowers students to contribute their best to society and the nation.
                </p>
                <p>
                  Together, we strive to make JKKN a premier temple of learning, guiding and inspiring students in their unique paths. Our aim is to cultivate top-notch professionals who excel in their fields, with their flags of success flying high in this vibrant world of competition.
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
