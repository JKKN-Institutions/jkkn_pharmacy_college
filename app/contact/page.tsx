import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f5f1e8]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Contact Information */}
          <div>
            {/* Page Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-8">
              Contact Us
            </h1>

            {/* Welcome Message */}
            <p className="text-gray-700 leading-relaxed mb-8">
              "Welcome to our Website. We are glad to have you around. Natarajapuram, NH-544 (Salem to Coimbatore), Near Erode,
              <br />
              Kumarapalayam – 638 183, Namakkal District, Tamil Nadu, India"
            </p>

            {/* Button */}
            <a
              href="#"
              className="inline-block px-8 py-3 bg-[#7CAF5A] text-white font-semibold rounded hover:bg-[#6B9E4E] transition-colors"
            >
              Online Admissions 2023 - 2024
            </a>
          </div>

          {/* Right Side - Contact Details Boxes */}
          <div className="space-y-6">
            {/* Phone Box */}
            <div className="bg-[#E8F5E9] p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <Phone className="w-8 h-8 text-[#7CAF5A] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Phone:</h3>
                  <p className="text-gray-700 text-lg">+(91) 93458 55001</p>
                </div>
              </div>
            </div>

            {/* Email Box */}
            <div className="bg-[#E8F5E9] p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <Mail className="w-8 h-8 text-[#7CAF5A] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Email:</h3>
                  <p className="text-gray-700 text-lg">pharmacy@jkkn.ac.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
