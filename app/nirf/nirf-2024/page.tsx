import Header from '@/components/Header'
import Link from 'next/link'

export default function NIRF2024Page() {
  return (
    <div className="min-h-screen bg-[#f5f1e8]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-[#0F6B3E]">home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">NIRF-2024</span>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-black mb-12">
          NIRF-2024
        </h1>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Nirf Submitted Section */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#0F6B3E] mb-6">
              Nirf Submitted
            </h2>
            <a
              href="/pdf/NIRF-2024-Nirf-Submitted.pdf"
              className="inline-block px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-gray-300 transition-colors"
            >
              Download
            </a>
          </div>

          {/* Innovation-Submitted Section */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#0F6B3E] mb-6">
              Innovation-Submitted
            </h2>
            <a
              href="/pdf/NIRF-2024-Innovation-Submitted.pdf"
              className="inline-block px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-gray-300 transition-colors"
            >
              Download
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}
