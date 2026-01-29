import Header from '@/components/Header'

export default function HostelPage() {
  return (
    <div className="min-h-screen bg-[#f5f1e8]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Boys Hostel Section */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#2d5f2e] mb-8">
            Boys Hostel
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Boys Hostel Image */}
            <div className="w-full max-w-md">
              <img
                src="/images/hostel-1.webp"
                alt="Boys Hostel"
                className="w-full h-auto max-h-[300px] object-cover"
              />
            </div>

            {/* Boys Hostel Content */}
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">■</span>
                  <span className="text-gray-700">
                    Experience contemporary living at our hostel, complete with top-notch amenities and pristine, cozy beds.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">■</span>
                  <span className="text-gray-700">
                    Our restrooms sparkle with cleanliness, ensuring your comfort and hygiene.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">■</span>
                  <span className="text-gray-700">
                    Brighten up your study sessions with well-ventilated rooms, flooded with ample natural light.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">■</span>
                  <span className="text-gray-700">
                    Unwind and relax in our recreation rooms equipped with TVs, the perfect entertainment escape after a long day.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Girls Hostel Section */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2d5f2e] mb-8">
            Girls Hostel
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Girls Hostel Image */}
            <div className="w-full max-w-md">
              <img
                src="/images/hostel-2.webp"
                alt="Girls Hostel"
                className="w-full h-auto max-h-[300px] object-cover"
              />
            </div>

            {/* Girls Hostel Content */}
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">■</span>
                  <span className="text-gray-700">
                    Experience a melting pot of cultures and diverse backgrounds, blending together for an enriching and unforgettable adventure!
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">■</span>
                  <span className="text-gray-700">
                    UIT girl's hostel "Thendral Illam" is set amidst the green campus of UIT and has distinct features that foster the right kind of environment for enriching the personality, academic performance or any other developmental pursuits
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* JKKN College of Pharmacy Hostel Facilities Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">
            JKKN College of Pharmacy Hostel Facilities
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            Welcome to JKKN College of Pharmacy's hostel accommodations, designed to provide learners with a comfortable and conducive living environment during their academic journey.
          </p>

          {/* Accommodation */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Accommodation
            </h3>

            <p className="text-gray-700 font-semibold mb-4">
              Our hostel facilities feature:
            </p>

            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  Separate hostels for boys and girls, with the girls' hostel conveniently located within the campus premises
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  Spacious and well-ventilated rooms equipped with comfortable beds, study tables, and ample storage space
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  Private bathrooms attached to each room ensuring privacy and convenience
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  24/7 high-speed Wi-Fi connectivity throughout the hostels to support academic needs.
                </span>
              </li>
            </ul>
          </div>

          {/* Infrastructure & Amenities */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Infrastructure & Amenities
            </h3>

            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  Well-maintained infrastructure with modern facilities and aesthetically built architecture
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  Uninterrupted power supply with separate generators for students
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  Dedicated study rooms available for students after college hours
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  Multipurpose gyms separately available for boys and girls
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  Indoor and outdoor game facilities for recreation
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  Stationary shops within the campus premises
                </span>
              </li>
            </ul>
          </div>

          {/* Dining & Food Services */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Dining & Food Services
            </h3>

            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  Hygienic kitchen serving nutritious and delicious meals
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  Modern dining halls offering both vegetarian and non-vegetarian food options
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  Mineral water is provided to all, ensuring safe drinking water
                </span>
              </li>
            </ul>
          </div>

          {/* Health & Wellness */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Health & Wellness
            </h3>

            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  24/7 medical facilities with free medicines
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  Well-equipped fitness centres for physical wellbeing
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  Regular yoga sessions for mental wellness
                </span>
              </li>
            </ul>
          </div>

          {/* Management & Security */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Management & Security
            </h3>

            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  Dedicated hostel management committee headed by a Chief Warden.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  Resident staff members ensuring strict adherence to hostel rules and regulations.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  Safe and secure environment with round-the-clock supervision.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  Bus facility available for the Drop and pickup from campus
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
