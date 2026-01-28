'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NIRF2024Page() {
  return (
    <main>
      <Header />

      {/* NIRF-2024 Content Section */}
      <section className="bg-[#FBFBEE] min-h-screen py-12 px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Page Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#006837] mb-8">
            NIRF-2024
          </h1>

          {/* Content */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <p className="text-gray-600 text-lg">
              NIRF 2024 data and reports will be displayed here.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
