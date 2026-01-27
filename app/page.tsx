'use client'

import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#004d5c] via-[#006175] to-[#00415a] text-white py-20 px-5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
                <span className="text-2xl">🏆</span>
                <span className="text-sm font-semibold">PCI Approved | AICTE Recognized</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Shape Healthcare's Future at{' '}
                <span className="text-[#ff6b35]">Tamil Nadu's Premier Pharmacy College</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Join J.K.K. Nattraja College of Pharmacy — where pharmaceutical science meets patient care.
                Our PCI-approved programs prepare Learners for impactful careers in the pharmaceutical industry.
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold text-[#ff6b35]">1500+</div>
                  <div className="text-sm text-gray-300 uppercase mt-1">Learners</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#ff6b35]">95%</div>
                  <div className="text-sm text-gray-300 uppercase mt-1">Placement</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#ff6b35]">30+</div>
                  <div className="text-sm text-gray-300 uppercase mt-1">Recruiters</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#ff6b35]">6</div>
                  <div className="text-sm text-gray-300 uppercase mt-1">Programs</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#ff6b35] hover:bg-[#ff5722] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2">
                  Start Your Application →
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-[#004d5c] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300">
                  Explore Programs
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#ffc107] to-[#ffb300] rounded-3xl p-8 shadow-2xl">
                <div className="relative w-full h-[400px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Placeholder for pharmacy image - you can add actual image */}
                    <div className="text-8xl">💊</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="bg-gray-50 py-12 px-5">
        <div className="max-w-[1400px] mx-auto text-center">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Recognized & Approved By
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">💊</span>
              </div>
              <p className="text-sm font-medium text-gray-700">PCI</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">🎓</span>
              </div>
              <p className="text-sm font-medium text-gray-700">AICTE</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">🏛️</span>
              </div>
              <p className="text-sm font-medium text-gray-700">Anna University</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">📚</span>
              </div>
              <p className="text-sm font-medium text-gray-700">TNMGRMU</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">⭐</span>
              </div>
              <p className="text-sm font-medium text-gray-700">NAAC</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="bg-black rounded-3xl overflow-hidden shadow-2xl relative">
                <div className="relative w-full h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-800 to-black">
                  {/* Placeholder for lab equipment image */}
                  <div className="text-8xl">🔬</div>
                </div>
                {/* 100 Years Badge */}
                <div className="absolute bottom-6 right-6 bg-[#ff6b35] text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl">
                  <div className="text-4xl font-bold">100</div>
                  <div className="text-xs font-semibold uppercase">Years Legacy</div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <p className="text-sm font-bold text-[#ff6b35] uppercase tracking-wider mb-4">
                About Our Institution
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#004d5c] mb-6 leading-tight">
                A Century of Excellence in Progressive Pharmaceutical Education
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                J.K.K. Nattraja College of Pharmacy is a premier pharmaceutical institution under J.K.K.
                Nattraja Educational Institutions (JKKN), founded on the vision of Founder J.K.K. Nataraja
                Chettiar (1895-1995).
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Located in Komarapalayam, Namakkal District, Tamil Nadu, our pharmacy college offers an ideal
                environment for focused pharmaceutical learning. Approved by PCI and AICTE, we produce competent
                pharmacists ready to serve the healthcare industry.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 font-medium">PCI & AICTE Approved</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 font-medium">University Affiliated</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 font-medium">Modern Pharma Labs</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 font-medium">Hospital Training</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 font-medium">6 M.Pharm Specializations</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 font-medium">95%+ Placement Record</span>
                </div>
              </div>

              {/* Button */}
              <button className="bg-[#ff6b35] hover:bg-[#ff5722] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2">
                Explore Programs →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="bg-gray-50 py-20 px-5">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-[#ff6b35] uppercase tracking-wider mb-4">
              Academic Programs
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#004d5c] mb-4">
              Comprehensive Pharmaceutical Education Programs
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose from our PCI-approved diploma, undergraduate, and postgraduate programs designed
              to shape competent pharmaceutical professionals.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Diploma in Pharmacy */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#004d5c] to-[#006175] p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl">💊</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Diploma in Pharmacy (D.Pharm)</h3>
                    <p className="text-gray-300 text-sm">2 Years | Full-Time</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Foundation program for community pharmacy practice. Qualify for pharmacy license and
                  retail pharmacy operations.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff6b35] mt-1">✓</span>
                    <span className="text-gray-700">Pharmaceutical chemistry & dispensing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff6b35] mt-1">✓</span>
                    <span className="text-gray-700">Pharmacology & drug interactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff6b35] mt-1">✓</span>
                    <span className="text-gray-700">Hospital & community pharmacy training</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-[#004d5c]">60</span>
                    <span className="text-gray-600 ml-1">Seats</span>
                  </div>
                  <button className="text-[#ff6b35] hover:text-[#ff5722] font-semibold flex items-center gap-2">
                    Apply →
                  </button>
                </div>
              </div>
            </div>

            {/* Bachelor of Pharmacy */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#004d5c] to-[#006175] p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Bachelor of Pharmacy (B.Pharm)</h3>
                    <p className="text-gray-300 text-sm">4 Years | Full-Time</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Comprehensive undergraduate program covering all aspects of pharmaceutical sciences for
                  diverse career paths.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff6b35] mt-1">✓</span>
                    <span className="text-gray-700">Pharmaceutics, Pharmacology & Chemistry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff6b35] mt-1">✓</span>
                    <span className="text-gray-700">Drug formulation & quality control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff6b35] mt-1">✓</span>
                    <span className="text-gray-700">Industrial training & research projects</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-[#004d5c]">100</span>
                    <span className="text-gray-600 ml-1">Seats</span>
                  </div>
                  <button className="text-[#ff6b35] hover:text-[#ff5722] font-semibold flex items-center gap-2">
                    Apply →
                  </button>
                </div>
              </div>
            </div>

            {/* Master of Pharmacy */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#004d5c] to-[#006175] p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🔬</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Master of Pharmacy (M.Pharm)</h3>
                    <p className="text-gray-300 text-sm">2 Years | Full-Time</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Advanced specialization programs for research, academia, and senior industry positions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff6b35] mt-1">✓</span>
                    <span className="text-gray-700">6 specializations available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff6b35] mt-1">✓</span>
                    <span className="text-gray-700">Research-oriented curriculum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff6b35] mt-1">✓</span>
                    <span className="text-gray-700">Industry & academic career paths</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-[#004d5c]">18</span>
                    <span className="text-gray-600 ml-1">Seats/Branch</span>
                  </div>
                  <button className="text-[#ff6b35] hover:text-[#ff5722] font-semibold flex items-center gap-2">
                    Apply →
                  </button>
                </div>
              </div>
            </div>

            {/* Doctor of Pharmacy */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#004d5c] to-[#006175] p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl">👨‍⚕️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Doctor of Pharmacy (Pharm.D)</h3>
                    <p className="text-gray-300 text-sm">6 Years (5+1 Internship)</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Clinical pharmacy program focusing on patient care, drug therapy management, and hospital
                  pharmacy practice.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff6b35] mt-1">✓</span>
                    <span className="text-gray-700">Clinical pharmacy & patient counseling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff6b35] mt-1">✓</span>
                    <span className="text-gray-700">Hospital rotations & internship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff6b35] mt-1">✓</span>
                    <span className="text-gray-700">Therapeutic drug monitoring</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-[#004d5c]">30</span>
                    <span className="text-gray-600 ml-1">Seats</span>
                  </div>
                  <button className="text-[#ff6b35] hover:text-[#ff5722] font-semibold flex items-center gap-2">
                    Apply →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* M.Pharm Specializations Section */}
      <section className="py-20 px-5">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#004d5c] mb-4">
              M.Pharm Specializations Offered
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pharmaceutics */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">💊</span>
              </div>
              <h3 className="text-2xl font-bold text-[#004d5c] mb-3">Pharmaceutics</h3>
              <p className="text-gray-600">
                Drug delivery systems, formulation development, novel drug delivery
              </p>
            </div>

            {/* Pharmacology */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🧪</span>
              </div>
              <h3 className="text-2xl font-bold text-[#004d5c] mb-3">Pharmacology</h3>
              <p className="text-gray-600">
                Drug action mechanisms, toxicology, experimental pharmacology
              </p>
            </div>

            {/* Pharmaceutical Chemistry */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">⚗️</span>
              </div>
              <h3 className="text-2xl font-bold text-[#004d5c] mb-3">Pharmaceutical Chemistry</h3>
              <p className="text-gray-600">
                Drug synthesis, medicinal chemistry, computational drug design
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="bg-gray-50 py-20 px-5">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-[#ff6b35] uppercase tracking-wider mb-4">
              Career Opportunities
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#004d5c] mb-4">
              Diverse Career Paths After Pharmacy
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A pharmacy degree opens doors to numerous career opportunities in the pharmaceutical and
              healthcare industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pharma Industry */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-[#004d5c] mb-3">Pharma Industry</h3>
              <p className="text-gray-600 text-sm">
                Manufacturing, production, quality control & assurance
              </p>
            </div>

            {/* Research & Development */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold text-[#004d5c] mb-3">Research & Development</h3>
              <p className="text-gray-600 text-sm">
                Drug discovery, formulation R&D, clinical trials
              </p>
            </div>

            {/* Hospital Pharmacy */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-[#004d5c] mb-3">Hospital Pharmacy</h3>
              <p className="text-gray-600 text-sm">
                Clinical pharmacist, drug information, patient care
              </p>
            </div>

            {/* Community Pharmacy */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-[#004d5c] mb-3">Community Pharmacy</h3>
              <p className="text-gray-600 text-sm">
                Retail pharmacy, own pharmacy business
              </p>
            </div>

            {/* Regulatory Affairs */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-[#004d5c] mb-3">Regulatory Affairs</h3>
              <p className="text-gray-600 text-sm">
                Drug registration, compliance, documentation
              </p>
            </div>

            {/* Pharmacovigilance */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-[#004d5c] mb-3">Pharmacovigilance</h3>
              <p className="text-gray-600 text-sm">
                Drug safety monitoring, adverse event reporting
              </p>
            </div>

            {/* Medical Writing */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✍️</span>
              </div>
              <h3 className="text-xl font-bold text-[#004d5c] mb-3">Medical Writing</h3>
              <p className="text-gray-600 text-sm">
                Clinical documentation, regulatory writing
              </p>
            </div>

            {/* Pharma Marketing */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-[#004d5c] mb-3">Pharma Marketing</h3>
              <p className="text-gray-600 text-sm">
                Medical representative, product management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Placements Section */}
      <section className="bg-gradient-to-br from-[#004d5c] via-[#006175] to-[#00415a] text-white py-20 px-5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div>
              <p className="text-sm font-bold text-[#ff6b35] uppercase tracking-wider mb-4">
                Training & Placements
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Launching Careers in Pharmaceutical Industry
              </h2>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Our dedicated Training & Placement Cell works tirelessly to connect Learners with leading
                pharmaceutical companies, hospitals, and research organizations.
              </p>
              <p className="text-gray-200 mb-8 leading-relaxed">
                From aptitude training to industry visits, interview preparation to soft skills development —
                we prepare our Learners comprehensively for rewarding careers.
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-5xl font-bold text-[#ff6b35]">95%+</div>
                  <div className="text-sm text-gray-300 mt-2">Placement Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-5xl font-bold text-[#ff6b35]">8 LPA</div>
                  <div className="text-sm text-gray-300 mt-2">Highest Package</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-5xl font-bold text-[#ff6b35]">3.5 LPA</div>
                  <div className="text-sm text-gray-300 mt-2">Average Package</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-5xl font-bold text-[#ff6b35]">30+</div>
                  <div className="text-sm text-gray-300 mt-2">Recruiters</div>
                </div>
              </div>
            </div>

            {/* Right - Top Recruiters */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Our Top Recruiters</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <p className="font-semibold">Sun Pharma</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <p className="font-semibold">Cipla</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <p className="font-semibold">Dr. Reddy's</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <p className="font-semibold">Lupin</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <p className="font-semibold">Aurobindo</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <p className="font-semibold">Hetero</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <p className="font-semibold">Apollo</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <p className="font-semibold">MedPlus</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <p className="font-semibold">Biocon</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <p className="font-semibold">Torrent</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <p className="font-semibold">Alkem</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <p className="font-semibold">Glenmark</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-20 px-5">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-[#ff6b35] uppercase tracking-wider mb-4">
              Infrastructure
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#004d5c] mb-4">
              State-of-the-Art Pharmaceutical Facilities
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Experience pharmaceutical education with modern laboratories and comprehensive campus infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pharmaceutics Lab */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">💊</span>
              </div>
              <h3 className="text-xl font-bold text-[#004d5c] mb-3">Pharmaceutics Lab</h3>
              <p className="text-gray-600 text-sm">
                Tablet press, coating machines, formulation equipment
              </p>
            </div>

            {/* Chemistry Lab */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">⚗️</span>
              </div>
              <h3 className="text-xl font-bold text-[#004d5c] mb-3">Chemistry Lab</h3>
              <p className="text-gray-600 text-sm">
                HPLC, UV-Vis spectrophotometer, analytical instruments
              </p>
            </div>

            {/* Pharmacology Lab */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🧪</span>
              </div>
              <h3 className="text-xl font-bold text-[#004d5c] mb-3">Pharmacology Lab</h3>
              <p className="text-gray-600 text-sm">
                Animal house, organ bath, experimental pharmacology
              </p>
            </div>

            {/* Medicinal Garden */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-[#004d5c] mb-3">Medicinal Garden</h3>
              <p className="text-gray-600 text-sm">
                300+ medicinal plants for hands-on learning
              </p>
            </div>

            {/* Drug Museum */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-[#004d5c] mb-3">Drug Museum</h3>
              <p className="text-gray-600 text-sm">
                500+ drug specimens, crude drugs collection
              </p>
            </div>

            {/* Computer Lab */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-[#004d5c] mb-3">Computer Lab</h3>
              <p className="text-gray-600 text-sm">
                Drug design software, molecular modeling tools
              </p>
            </div>

            {/* Digital Library */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-[#004d5c] mb-3">Digital Library</h3>
              <p className="text-gray-600 text-sm">
                Journals, e-books, research databases
              </p>
            </div>

            {/* Hospital Pharmacy */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-[#004d5c] mb-3">Hospital Pharmacy</h3>
              <p className="text-gray-600 text-sm">
                Clinical training, patient counseling practice
              </p>
            </div>

            {/* Hostels */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-[#004d5c] mb-3">Hostels</h3>
              <p className="text-gray-600 text-sm">
                Separate hostels with modern amenities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section className="bg-gray-50 py-20 px-5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div>
              <p className="text-sm font-bold text-[#ff6b35] uppercase tracking-wider mb-4">
                Admissions 2025-26
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#004d5c] mb-6 leading-tight">
                Begin Your Pharmaceutical Journey at JKKN
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Take the first step towards a rewarding career in the pharmaceutical industry. Join J.K.K. Nattraja College of Pharmacy.
              </p>

              {/* D.Pharm Eligibility */}
              <div className="bg-[#e8f4f8] rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold text-[#004d5c] mb-4">D.Pharm Eligibility</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">✓</span>
                    <span className="text-gray-700">10+2 with Physics, Chemistry & Biology/Mathematics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">✓</span>
                    <span className="text-gray-700">Minimum pass marks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">✓</span>
                    <span className="text-gray-700">Age: 17 years by December 31</span>
                  </li>
                </ul>
              </div>

              {/* B.Pharm Eligibility */}
              <div className="bg-[#e8f4f8] rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold text-[#004d5c] mb-4">B.Pharm Eligibility</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">✓</span>
                    <span className="text-gray-700">10+2 with Physics, Chemistry & Biology/Mathematics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">✓</span>
                    <span className="text-gray-700">Minimum 50% marks (45% for reserved)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">✓</span>
                    <span className="text-gray-700">TNEA counseling or Management quota</span>
                  </li>
                </ul>
              </div>

              {/* M.Pharm / Pharm.D Eligibility */}
              <div className="bg-[#e8f4f8] rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-[#004d5c] mb-4">M.Pharm / Pharm.D Eligibility</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">✓</span>
                    <span className="text-gray-700">B.Pharm from PCI-recognized institution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">✓</span>
                    <span className="text-gray-700">GPAT qualified (for M.Pharm)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">✓</span>
                    <span className="text-gray-700">Minimum 55% aggregate marks</span>
                  </li>
                </ul>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#ff6b35] hover:bg-[#ff5722] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2">
                  📞 Talk to Admissions
                </button>
                <button className="border-2 border-[#004d5c] hover:bg-[#004d5c] hover:text-white text-[#004d5c] font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2">
                  ✉️ Email Us
                </button>
              </div>
            </div>

            {/* Right - Admission Process */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#004d5c] mb-6">Admission Process</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#ff6b35] text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-[#004d5c] mb-1">Check Eligibility</h4>
                    <p className="text-gray-600 text-sm">
                      Verify academic requirements for your chosen program
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#ff6b35] text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-[#004d5c] mb-1">Apply Online</h4>
                    <p className="text-gray-600 text-sm">
                      Submit application via counseling portal or JKKN website
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#ff6b35] text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-[#004d5c] mb-1">Counseling / Selection</h4>
                    <p className="text-gray-600 text-sm">
                      Participate in TNEA/GPAT counseling or direct admission
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#ff6b35] text-white rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-[#004d5c] mb-1">Document Verification</h4>
                    <p className="text-gray-600 text-sm">
                      Submit original documents for verification
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#ff6b35] text-white rounded-full flex items-center justify-center font-bold text-lg">
                    5
                  </div>
                  <div>
                    <h4 className="font-bold text-[#004d5c] mb-1">Fee Payment & Enrollment</h4>
                    <p className="text-gray-600 text-sm">
                      Complete payment and secure your admission
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-[#e8f4f8] py-20 px-5">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-[#ff6b35] uppercase tracking-wider mb-4">
              FAQS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#004d5c] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about admissions, programs, and campus life.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white rounded-2xl p-6 shadow-md group">
              <summary className="font-bold text-[#004d5c] text-lg cursor-pointer flex items-center justify-between">
                What pharmacy courses are offered at JKKN Pharmacy College?
                <span className="text-cyan-500 text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed">
                J.K.K. Nattraja College of Pharmacy offers D.Pharm (2 years), B.Pharm (4 years), M.Pharm (2 years) with specializations in Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Pharmacognosy, Pharmaceutical Analysis, and Pharmacy Practice, and Pharm.D (6 years) for clinical pharmacy practice.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white rounded-2xl p-6 shadow-md group">
              <summary className="font-bold text-[#004d5c] text-lg cursor-pointer flex items-center justify-between">
                Is JKKN Pharmacy College PCI approved?
                <span className="text-cyan-500 text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Yes, J.K.K. Nattraja College of Pharmacy is approved by the Pharmacy Council of India (PCI) and AICTE. It is affiliated with The Tamil Nadu Dr. M.G.R. Medical University for Pharm.D and Anna University for B.Pharm and M.Pharm programs.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white rounded-2xl p-6 shadow-md group">
              <summary className="font-bold text-[#004d5c] text-lg cursor-pointer flex items-center justify-between">
                What is the admission process for B.Pharm?
                <span className="text-cyan-500 text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed">
                B.Pharm admission is based on +2 marks with Physics, Chemistry, and Biology/Mathematics. Minimum 50% marks required (45% for reserved categories). Admission through TNEA counseling or management quota. Applications can be submitted online.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white rounded-2xl p-6 shadow-md group">
              <summary className="font-bold text-[#004d5c] text-lg cursor-pointer flex items-center justify-between">
                What is the placement record at JKKN Pharmacy College?
                <span className="text-cyan-500 text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed">
                JKKN Pharmacy College has 95%+ placement rate with recruiters including Sun Pharma, Cipla, Dr. Reddy's, Lupin, Aurobindo, Apollo Pharmacy, MedPlus, Hetero, and leading hospital pharmacies. Average package is 3.5 LPA with highest reaching 8 LPA.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white rounded-2xl p-6 shadow-md group">
              <summary className="font-bold text-[#004d5c] text-lg cursor-pointer flex items-center justify-between">
                What career opportunities are available after pharmacy?
                <span className="text-cyan-500 text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Pharmacy graduates can work in pharmaceutical manufacturing, quality control, R&D, clinical research, hospital pharmacy, community pharmacy, drug regulatory affairs, pharmacovigilance, medical writing, pharmaceutical marketing, and can open their own pharmacy.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="bg-white rounded-2xl p-6 shadow-md group">
              <summary className="font-bold text-[#004d5c] text-lg cursor-pointer flex items-center justify-between">
                Does JKKN offer Pharm.D program?
                <span className="text-cyan-500 text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Yes, J.K.K. Nattraja College of Pharmacy offers Pharm.D (Doctor of Pharmacy), a 6-year program including 5 years of academic study and 1 year of internship. It focuses on clinical pharmacy, patient care, and pharmaceutical care services.
              </p>
            </details>

            {/* FAQ 7 */}
            <details className="bg-white rounded-2xl p-6 shadow-md group">
              <summary className="font-bold text-[#004d5c] text-lg cursor-pointer flex items-center justify-between">
                What M.Pharm specializations are available?
                <span className="text-cyan-500 text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed">
                M.Pharm specializations include Pharmaceutics (drug delivery systems), Pharmacology (drug action), Pharmaceutical Chemistry (drug synthesis), Pharmacognosy (natural products), Pharmaceutical Analysis (quality control), and Pharmacy Practice (clinical pharmacy).
              </p>
            </details>

            {/* FAQ 8 */}
            <details className="bg-white rounded-2xl p-6 shadow-md group">
              <summary className="font-bold text-[#004d5c] text-lg cursor-pointer flex items-center justify-between">
                Is hostel accommodation available?
                <span className="text-cyan-500 text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Yes, separate hostel facilities are available for both men and women with modern amenities including furnished rooms, 24/7 security, mess facilities, Wi-Fi, recreation areas, and laundry services within the campus.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] py-20 px-5">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Shape Healthcare's Future?
          </h2>
          <p className="text-xl text-white mb-10">
            Join J.K.K. Nattraja College of Pharmacy and become part of a century-long legacy of excellence. Applications for 2025-26 are now open.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white hover:bg-gray-100 text-[#004d5c] font-bold px-10 py-5 rounded-full transition-all duration-300 text-lg flex items-center gap-2">
              Apply Now →
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-[#ff6b35] text-white font-bold px-10 py-5 rounded-full transition-all duration-300 text-lg flex items-center gap-2">
              📞 +91 4288 274747
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
