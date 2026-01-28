'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NIRFPage() {
  return (
    <main>
      <Header />

      {/* NIRF Section */}
      <section className="bg-[#FBFBEE] py-12 px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          {/* NIRF Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#006837] mb-8 sm:mb-10 md:mb-12">
            NIRF
          </h1>

          {/* NIRF Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* NIRF-2024 Button */}
            <a href="/nirf/nirf-2024" className="bg-[#E8E8F0] hover:bg-[#D8D8E8] text-[#5B5B7E] font-semibold text-lg sm:text-xl md:text-2xl px-8 sm:px-10 md:px-12 lg:px-16 py-5 sm:py-6 md:py-7 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-center">
              NIRF-2024
            </a>

            {/* NIRF-2025 Button */}
            <a href="/nirf/nirf-2025" className="bg-[#E8E8F0] hover:bg-[#D8D8E8] text-[#5B5B7E] font-semibold text-lg sm:text-xl md:text-2xl px-8 sm:px-10 md:px-12 lg:px-16 py-5 sm:py-6 md:py-7 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-center">
              NIRF-2025
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
