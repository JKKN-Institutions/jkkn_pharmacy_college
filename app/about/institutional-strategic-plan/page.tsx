'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Header from '@/components/Header'

// Navigation sections data
const navigationSections = [
  { id: 'overview', label: 'Overview', href: '/about/institutional-strategic-plan' },
  { id: 'edc', label: 'Strategic plan for EDC', href: '/about/institutional-strategic-plan/edc' },
  { id: 'coe', label: 'Strategic plan for COE', href: '/about/institutional-strategic-plan/coe' },
  { id: 'gc', label: 'Strategic plan for GC', href: '/about/institutional-strategic-plan/gc' },
  { id: 'interdisciplinary-research', label: 'Strategic plan for interdisciplinary research', href: '/about/institutional-strategic-plan/interdisciplinary-research' },
  { id: 'pharmaceutical-education', label: 'Strategic plan for Pharmaceutical education', href: '/about/institutional-strategic-plan/pharmaceutical-education' },
  { id: 'research-enhancement', label: 'Strategic plan for research enhancement', href: '/about/institutional-strategic-plan/research-enhancement' },
]

export default function InstitutionalStrategicPlanPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <nav className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-[#6B9E4E] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/about" className="hover:text-[#6B9E4E] transition-colors">
              About
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">Institutional Strategic Plan</span>
          </nav>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Page Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10">Institutional Strategic Plan</h1>

        {/* Content Area with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-4">
              {/* Section Header */}
              <div className="bg-[#0F6B3E] text-white px-6 py-4">
                <h2 className="text-lg font-bold">STRATEGIC PLAN</h2>
              </div>

              {/* Navigation Links */}
              <nav className="divide-y divide-gray-200">
                {navigationSections.map((section) => (
                  <Link
                    key={section.id}
                    href={section.href}
                    className={`block w-full text-left px-6 py-4 text-sm font-semibold transition-all border-l-4 ${
                      section.id === 'overview'
                        ? 'bg-[#D4F1E8] text-[#0F6B3E] border-[#0F6B3E]'
                        : 'bg-white text-gray-700 border-transparent hover:bg-gray-50 hover:text-[#0F6B3E] hover:border-gray-300'
                    }`}
                  >
                    {section.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-8 lg:p-10">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Plan Overview</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      The Institutional Strategic Plan of J.K.K. Nattraja College of Pharmacy is a comprehensive roadmap that outlines our vision, mission, and strategic initiatives for achieving excellence in pharmaceutical education, research, and community service.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our strategic plan is designed to align with national education policies, industry requirements, and global standards in pharmaceutical education while maintaining our commitment to innovation, quality, and inclusiveness.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Vision for the Future</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      The strategic plan encompasses multiple dimensions of institutional development, focusing on:
                    </p>
                    <ul className="space-y-3 mb-4">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">
                          <strong>Excellence in Education</strong> - Enhancing teaching-learning processes and curriculum development
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">
                          <strong>Research and Innovation</strong> - Promoting cutting-edge research and innovative practices
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">
                          <strong>Infrastructure Development</strong> - Upgrading facilities and technological resources
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">
                          <strong>Industry Collaboration</strong> - Strengthening partnerships with pharmaceutical industries
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">
                          <strong>Community Engagement</strong> - Contributing to society through outreach programs
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Strategic Areas</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-[#f5f0e8] p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-[#0F6B3E] mb-3">EDC - Entrepreneurship Development Cell</h3>
                        <p className="text-gray-700 text-sm">
                          Fostering entrepreneurial mindset and skills among students and faculty through specialized programs and initiatives.
                        </p>
                      </div>
                      <div className="bg-[#f5f0e8] p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-[#0F6B3E] mb-3">COE - Center of Excellence</h3>
                        <p className="text-gray-700 text-sm">
                          Establishing centers of excellence in specialized pharmaceutical disciplines to promote advanced learning and research.
                        </p>
                      </div>
                      <div className="bg-[#f5f0e8] p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-[#0F6B3E] mb-3">GC - Guidance and Counseling</h3>
                        <p className="text-gray-700 text-sm">
                          Providing comprehensive guidance and counseling services to support student academic and personal development.
                        </p>
                      </div>
                      <div className="bg-[#f5f0e8] p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-[#0F6B3E] mb-3">Interdisciplinary Research</h3>
                        <p className="text-gray-700 text-sm">
                          Promoting collaborative research across multiple disciplines to address complex pharmaceutical and healthcare challenges.
                        </p>
                      </div>
                      <div className="bg-[#f5f0e8] p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-[#0F6B3E] mb-3">Pharmaceutical Education</h3>
                        <p className="text-gray-700 text-sm">
                          Continuous improvement in curriculum, pedagogy, and educational delivery methods.
                        </p>
                      </div>
                      <div className="bg-[#f5f0e8] p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-[#0F6B3E] mb-3">Research Enhancement</h3>
                        <p className="text-gray-700 text-sm">
                          Strengthening research infrastructure, funding, and publication output across all departments.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Framework</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our strategic plan is implemented through a structured framework that includes:
                    </p>
                    <ul className="space-y-3 mb-4">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">
                          Regular monitoring and evaluation of strategic initiatives
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">
                          Stakeholder engagement and feedback mechanisms
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">
                          Annual review and revision of strategic goals
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">
                          Resource allocation and budgetary planning
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
