'use client'

import Header from '@/components/Header'
import Image from 'next/image'

export default function OurTrustPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          {/* Founder Portrait */}
          <div className="flex justify-center mb-8 lg:mb-12">
            <div className="relative">
              {/* Ornate Frame - using CSS border as placeholder */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                {/* Golden ornate frame effect */}
                <div className="absolute inset-0 rounded-full border-[20px] lg:border-[24px] border-[#B8860B] shadow-2xl"
                     style={{
                       borderImage: 'linear-gradient(135deg, #D4AF37, #FFD700, #B8860B, #DAA520) 1',
                       boxShadow: '0 0 30px rgba(184, 134, 11, 0.4), inset 0 0 20px rgba(212, 175, 55, 0.3)'
                     }}>
                </div>
                {/* Inner green circle background */}
                <div className="absolute inset-6 lg:inset-7 rounded-full bg-gradient-to-br from-[#5a9a6b] to-[#3d7a4d] overflow-hidden">
                  {/* Placeholder for founder image - replace with actual image */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-[#6aaa7b] to-[#4d8a5d]">
                    <div className="text-center text-white">
                      <p className="text-sm opacity-75">[Founder Photo]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Name */}
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-[#0F6B3E] mb-4 lg:mb-6">
            SHRI. J.K.K.NATTARAJAH
          </h1>

          {/* Founder Title */}
          <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-center text-[#0F6B3E] mb-8 lg:mb-12">
            Founder J.K.K. Rangammal Charitable Trust
          </h2>

          {/* Content Paragraphs */}
          <div className="max-w-6xl mx-auto space-y-6 text-gray-700 leading-relaxed">
            <p className="text-justify text-base lg:text-lg">
              In the 1960s, female children in Kumarapalayam had to walk 2.5 km to the nearby town of Bhavani for schooling. Some parents hesitated to send their daughters, while others ceased their children's education altogether, resulting in them staying at home or working in handlooms and dyeing industries. Recognizing the need for women's education, Shri J.K.K. Natarajah, a visionary philanthropist of the area, initiated a girls' school in the town in 1965, four years before the inception of the trust.
            </p>

            <p className="text-justify text-base lg:text-lg">
              The Trust, J.K.K. Rangammal Charitable Trust (Reg No: 33), was established in 1969 with the mission of providing literacy and empowering women, aiming to upgrade the socio-economic status of the community. Following in her father's footsteps, Smt. N. Sendamaraai, Managing Trustee, expanded the service to offer multi-disciplinary education to both genders. Now, under the umbrella of the Trust, there are ten institutions, including Dental, Pharmacy, Nursing, Education, Engineering, Arts, and Science colleges, as well as a Government-Aided Girls' School and Matriculation schools.
            </p>

            <p className="text-justify text-base lg:text-lg">
              The Trust actively engages in various social service activities, including health-oriented services like free dental camps, treatments, surgeries, blood donation drives, and motivational and entrepreneurship awareness camps. It also extends its charitable efforts to provide medical support to the impoverished, assist the destitute, offer natural calamity support, grant educational scholarships to underprivileged students, and foster cultural enrichment. A pioneering establishment of the region since its inception, the Trust's grand service to society remains immense, not only in terms of education but also in community welfare.
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
