import Header from '@/components/Header'

export default function ClassRoomPage() {
  return (
    <div className="min-h-screen bg-[#f5f1e8]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Page Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-[#2d5f2e] mb-8">
          Class - Room
        </h1>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="w-full h-[240px] bg-gray-200 relative overflow-hidden">
            <img
              src="/images/class_room-1.webp"
              alt="Class Room 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[240px] bg-gray-200 relative overflow-hidden">
            <img
              src="/images/class_room-2.webp"
              alt="Class Room 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[240px] bg-gray-200 relative overflow-hidden">
            <img
              src="/images/class_room-3.webp"
              alt="Class Room 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          {/* First Paragraph */}
          <p className="text-justify">
            Remaining at the vanguard of educational technology is a source of pride for our college. Our steadfast dedication to infusing the latest instructional innovations into our classrooms and laboratories underscores our commitment to fostering exceptional learning environments. Uncompromising in our approach, we have established smart classrooms that boast cutting-edge multimedia amenities, such as LCD projectors, laptops, and advanced audio-visual systems. These technological advancements amplify the teaching-learning dynamic, facilitating seamless information absorption for students and enabling educators to deliver content with utmost clarity and effectiveness.
          </p>

          {/* Second Paragraph */}
          <p className="text-justify">
            The cornerstone of our institution's ethos lies in our unyielding pursuit of technological advancement in education. This steadfast commitment is palpable through our deployment of state-of-the-art instructional technologies across our learning spaces. Our smart classrooms, thoughtfully outfitted with modern multimedia resources including LCD projectors, laptops, and immersive audio-visual systems, exemplify our resolute approach to enhancing the educational experience. This technological integration harmoniously empowers both educators to articulate concepts with precision and students to engage with the learning material in a more interactive and absorbing manner, ultimately propelling the academic journey to unprecedented heights.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 mt-6">
            <li className="flex items-start">
              <span className="text-gray-900 mr-3">▪</span>
              <span className="text-gray-700">
                The college prides itself on staying at the forefront of technology in education.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 mr-3">▪</span>
              <span className="text-gray-700">
                Our commitment to providing the latest instructional technologies in our classrooms and laboratories is unwavering. Our smart classrooms are equipped with state-of-the-art multimedia facilities, including LCD projectors, laptops, and audio-visual systems.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 mr-3">▪</span>
              <span className="text-gray-700">
                This technology enhances the teaching-learning experience, making it easier for students to absorb information and for teachers to present it effectively.
              </span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}
