import Header from '@/components/Header'

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-[#f5f1e8]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Page Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-[#2d5f2e] mb-8">
          Library
        </h1>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="w-full h-[240px] bg-gray-200 relative overflow-hidden">
            <img
              src="/images/lib-1.webp"
              alt="Library 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[240px] bg-gray-200 relative overflow-hidden">
            <img
              src="/images/lib-2.webp"
              alt="Library 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[240px] bg-gray-200 relative overflow-hidden">
            <img
              src="/images/lib-3.webp"
              alt="Library 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed">
          {/* Library details Section */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">
              Library details
            </h2>

            <h3 className="text-xl font-semibold text-black mb-4">
              Welcome to our College Library
            </h3>

            <p className="text-justify mb-4">
              Our college takes pride in its fully equipped and automated library on the 3rd floor of the college building, spanning an impressive area of 193.5852 sq. mts. The library is meticulously divided into four sections, namely lending, reference, digital library, and reading sections, providing a welcoming and conducive environment for learning and research.
            </p>

            <p className="text-justify">
              Our library offers a cutting-edge automation system with barcoded books organized by Dewey Decimal Classification. The advanced KOHA library software ensures smooth transactions like issue, return, and renewal of books. Students can easily access our vast collection through the user-friendly Online Public Access Catalog (OPAC). Additionally, we provide circulation services for lending books, reference assistance, current awareness displays, PWD-friendly systems, reprographic services, open access to bookshelves, and electronic resources for in-house and remote access. Users also benefit from interlibrary loan services and informative orientation programs.
            </p>
          </div>

          {/* Learning Resources Section */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">
              Learning Resources
            </h2>

            <p className="text-justify">
              Our library houses an impressive assortment of approximately 11,938 volumes of books, encompassing various fields, including pharmaceutical sciences and allied sciences. In addition to the academic books, we also maintain a modest collection of books catering to competitive exam aspirants, as well as a general collection of biographies, fiction, and philosophy, providing students with the opportunity to unwind and explore beyond their academic pursuits.
            </p>
          </div>

          {/* Technology and Connectivity Section */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">
              Technology and Connectivity
            </h2>

            <p className="text-justify">
              Recognizing the significance of technology in education, we offer a dedicated internet facility with a LAN supporting up to 10 users, allowing students to access online resources and conduct research from within the library premises. Additionally, our library area is under 24×7 CCTV surveillance, ensuring a secure and comfortable environment for our library users.
            </p>
          </div>

          {/* Supporting Research and Academic Growth Section */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">
              Supporting Research and Academic Growth
            </h2>

            <p className="text-justify">
              For those delving into research, our library offers various research support services, including access to back volumes of journals and interlibrary loan facilities. The availability of national and international journals, totaling 35 in number, further enriches our repository of knowledge.
            </p>
          </div>

          {/* Library Timing Section */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">
              Library Timing
            </h2>

            <p className="text-gray-700 mb-2">
              <strong>Morning: 8.30 AM</strong>
            </p>
            <p className="text-gray-700">
              <strong>Evening: 5.30 pm</strong>
            </p>
          </div>

          {/* List of Subscribed E-resources Section */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">
              List of Subscribed E-resources
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-6 py-4 text-center font-bold text-black">
                      Name
                    </th>
                    <th className="border border-gray-300 px-6 py-4 text-center font-bold text-black">
                      URL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-6 py-4 text-center text-gray-700">
                      DELNET
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      <a
                        href="http://www.delnet.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2d5f2e] hover:underline"
                      >
                        http://www.delnet.in
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 text-center text-gray-700">
                      TN Dr.MGR MEDICAL UNIVERSITY E-CONSORTIUM
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      <a
                        href="http://www.eurekaselect.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2d5f2e] hover:underline"
                      >
                        http://www.eurekaselect.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-6 py-4 text-center text-gray-700">
                      MICROMEDEX
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      <a
                        href="https://www.micromedexsolutions.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2d5f2e] hover:underline"
                      >
                        https://www.micromedexsolutions.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
