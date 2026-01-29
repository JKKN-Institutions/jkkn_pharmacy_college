import Header from '@/components/Header'

export default function SeminarHallPage() {
  return (
    <div className="min-h-screen bg-[#f5f1e8]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Page Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-[#2d5f2e] mb-8">
          Seminar Hall
        </h1>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="w-full h-[240px] bg-gray-200 relative overflow-hidden">
            <img
              src="/images/seminar_hall-1.webp"
              alt="Seminar Hall 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[240px] bg-gray-200 relative overflow-hidden">
            <img
              src="/images/seminar_hall-2.webp"
              alt="Seminar Hall 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[240px] bg-gray-200 relative overflow-hidden">
            <img
              src="/images/seminar_hall-3.webp"
              alt="Seminar Hall 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          {/* First Paragraph */}
          <p className="text-justify">
            With its array of advanced amenities, the college boasts a fully-furnished seminar hall that serves as an optimal venue for academic gatherings and significant conferences. The hall is equipped with state-of-the-art features, including OHP, LCD projectors, screens, and whiteboards, facilitating seamless and impactful presentations. Whether it's engaging student presentations, faculty assemblies, or enlightening guest lectures, this versatile space provides the essential resources to elevate the success of any event.
          </p>

          {/* Second Paragraph */}
          <p className="text-justify">
            The college's seminar hall stands as a hub of technological excellence, designed to cater to diverse educational requirements. Its comprehensive facilities empower educators to deliver insightful lectures and discussions, while also fostering an environment conducive to meaningful interactions. By offering a blend of convenience and functionality, the seminar hall remains a key asset in facilitating educational engagement and knowledge dissemination within the college community.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 mt-6">
            <li className="flex items-start">
              <span className="text-gray-900 mr-3">▪</span>
              <span className="text-gray-700">
                The college has a seminar hall that is well-equipped and perfect for academic events and important meetings.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 mr-3">▪</span>
              <span className="text-gray-700">
                It comes with facilities like OHP, LCD projectors, screens, whiteboards, and more, which makes it ideal for delivering lectures and talks. Whether it's for student presentations, faculty meetings, or guest lectures, the seminar hall has everything you need to make your event a success.
              </span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}
