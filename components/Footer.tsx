export default function Footer() {
  return (
    <footer className="bg-[#0a5a2a] text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* JKKN College of Pharmacy */}
          <div>
            <h3 className="text-xl font-bold mb-4">JKKN COLLEGE OF PHARMACY</h3>
            <p className="text-sm text-gray-200">
              J.K.K. Nattraja Educational Institutions
              <br />
              NH-544 (Salem To Coimbatore)
              <br />
              Komarapalayam - 638183
              <br />
              Namakkal District, Tamil Nadu, India
            </p>
          </div>

          {/* Our Institutions */}
          <div>
            <h3 className="text-xl font-bold mb-4">OUR INSTITUTIONS</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  JKKN College of Pharmacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  JKKN Dental College
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  JKKN College of Engineering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  JKKN College of Arts & Science
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <strong>Phone:</strong> +91 4288 274741-43
              </li>
              <li>
                <strong>Email:</strong> info@jkkn.ac.in
              </li>
              <li>
                <strong>Website:</strong> www.jkkn.ac.in
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-green-700 text-center text-sm text-gray-200">
          <p>&copy; 2024 JKKN College of Pharmacy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
