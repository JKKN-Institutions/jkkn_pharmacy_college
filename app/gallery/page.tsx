import Header from '@/components/Header'

export default function GalleryPage() {
  const galleryItems = [
    { title: 'Pongal Celebration', image: '/images/Pongal-Celebration-gallery.jpg' },
    { title: 'Farewell Day', image: '/images/Farewell-Day-gallery.webp' },
    { title: 'Founders Day 2022', image: '/images/Founders-Day-2022-gallery.jpg' },
    { title: 'Blood Camp', image: '/images/Blood-Camp-gallery.webp' },
    { title: 'World Hemophilia Day', image: '/images/World-Hemophilia-Day-gallery.jpg' },
    { title: 'World No Tobacco Day', image: '/images/World-No-Tobacco-Day-gallery.webp' },
    { title: 'World Oral Health Day', image: '/images/World-Oral-Health-Day-gallery.webp' },
    { title: 'Stem Cell', image: '/images/Stem-cell-gallery.webp' },
    { title: '35th College Day', image: '/images/35th-College-Day-gallery.webp' },
    { title: 'ANTI RAGGING SEMINAR', image: '/images/ANTI-RAGGING-SEMINAR-gallery.webp' },
    { title: '26th Graduation Day', image: '/images/26th-Graduation-Day-gallery.webp' },
    { title: 'Basic Of Cancer and Awareness', image: '/images/Basic-Of-Cancer-and-Awareness-gallery.webp' },
    { title: 'Fire and safety', image: '/images/Fire-and-safety-gallery.webp' },
    { title: 'Prosthodontist Day', image: '/images/Prosthodontist-Day-gallery.webp' },
    { title: 'Yoga day', image: '/images/Yoga-day-gallery.webp' },
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

    </div>
  )
}
