import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function GalleryPage() {
  const galleryItems = [
    { title: 'Pongal Celebration', image: '/images/gallery/pongal-celebration.jpg' },
    { title: 'Farewell Day', image: '/images/gallery/farewell-day.jpg' },
    { title: 'Founders Day 2022', image: '/images/gallery/founders-day-2022.jpg' },
    { title: 'Blood Camp', image: '/images/gallery/blood-camp.jpg' },
    { title: 'World Hemophilia Day', image: '/images/gallery/world-hemophilia-day.jpg' },
    { title: 'World No Tobacco Day', image: '/images/gallery/world-no-tobacco-day.jpg' },
    { title: 'World Oral Health Day', image: '/images/gallery/world-oral-health-day.jpg' },
    { title: 'Stem Cell', image: '/images/gallery/stem-cell.jpg' },
    { title: '35th College Day', image: '/images/gallery/35th-college-day.jpg' },
    { title: 'ANTI RAGGING SEMINAR', image: '/images/gallery/anti-ragging-seminar.jpg' },
    { title: '26th Graduation Day', image: '/images/gallery/26th-graduation-day.jpg' },
    { title: 'Basic Of Cancer and Awareness', image: '/images/gallery/basic-of-cancer-awareness.jpg' },
    { title: 'Fire and safety', image: '/images/gallery/fire-and-safety.jpg' },
    { title: 'Prosthodontist Day', image: '/images/gallery/prosthodontist-day.jpg' },
    { title: 'Yoga day', image: '/images/gallery/yoga-day.jpg' },
  ]

  return (
    <div className="min-h-screen bg-[#f5f1e8]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Page Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-12">
          GALLERY
        </h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {galleryItems.map((item, index) => (
            <div key={index} className="space-y-4">
              {/* Title */}
              <h2 className="text-xl lg:text-2xl font-bold text-[#0F6B3E]">
                {item.title}
              </h2>
              {/* Image */}
              <div className="w-full h-[280px] bg-gray-200 relative overflow-hidden rounded">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
