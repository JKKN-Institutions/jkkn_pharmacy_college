'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

interface HeaderProps {
  fixed?: boolean
}

export default function Header({ fixed = true }: HeaderProps = { fixed: true }) {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Desktop dropdown states
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [affiliationSubmenuOpen, setAffiliationSubmenuOpen] = useState(false)
  const [academicDropdownOpen, setAcademicDropdownOpen] = useState(false)
  const [timeTableSubmenuOpen, setTimeTableSubmenuOpen] = useState(false)
  const [cosPosSubmenuOpen, setCosPosSubmenuOpen] = useState(false)
  const [facilitiesDropdownOpen, setFacilitiesDropdownOpen] = useState(false)
  const [committeeDropdownOpen, setCommitteeDropdownOpen] = useState(false)
  const [othersDropdownOpen, setOthersDropdownOpen] = useState(false)
  const [socialWorkSubmenuOpen, setSocialWorkSubmenuOpen] = useState(false)
  const [mandatoryDisclosuresDropdownOpen, setMandatoryDisclosuresDropdownOpen] = useState(false)
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false)
  const [ugProgramSubmenuOpen, setUgProgramSubmenuOpen] = useState(false)
  const [pgProgramSubmenuOpen, setPgProgramSubmenuOpen] = useState(false)
  const [mPharmacySubmenuOpen, setMPharmacySubmenuOpen] = useState(false)
  const [placementDropdownOpen, setPlacementDropdownOpen] = useState(false)
  const [placementDetailsSubmenuOpen, setPlacementDetailsSubmenuOpen] = useState(false)

  // Mobile accordion states
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const [mobileAffiliationOpen, setMobileAffiliationOpen] = useState(false)
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false)
  const [mobileUgProgramOpen, setMobileUgProgramOpen] = useState(false)
  const [mobilePgProgramOpen, setMobilePgProgramOpen] = useState(false)
  const [mobileMPharmacyOpen, setMobileMPharmacyOpen] = useState(false)
  const [mobileAcademicOpen, setMobileAcademicOpen] = useState(false)
  const [mobileTimeTableOpen, setMobileTimeTableOpen] = useState(false)
  const [mobileCosPosOpen, setMobileCosPosOpen] = useState(false)
  const [mobileFacilitiesOpen, setMobileFacilitiesOpen] = useState(false)
  const [mobileCommitteeOpen, setMobileCommitteeOpen] = useState(false)
  const [mobileOthersOpen, setMobileOthersOpen] = useState(false)
  const [mobileSocialWorkOpen, setMobileSocialWorkOpen] = useState(false)
  const [mobileDisclosuresOpen, setMobileDisclosuresOpen] = useState(false)
  const [mobilePlacementOpen, setMobilePlacementOpen] = useState(false)
  const [mobilePlacementDetailsOpen, setMobilePlacementDetailsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Add data attribute to body when header is fixed
    if (fixed) {
      document.body.setAttribute('data-fixed-header', 'true')
    } else {
      document.body.removeAttribute('data-fixed-header')
    }

    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      if (!fixed) {
        document.body.removeAttribute('data-fixed-header')
      }
    }
  }, [mobileMenuOpen, fixed])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  // Helper function to check if a link is active
  const isActive = (path: string) => pathname === path

  // Helper function to check if a parent menu is active
  const isParentActive = (paths: string[]) => {
    return paths.some(path => pathname?.startsWith(path))
  }

  return (
    <header className={`bg-[#f5f0e8] shadow-md ${fixed ? 'fixed' : 'sticky'} top-0 z-[1000] w-full`}>
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-6">
        <div className="flex items-center justify-between gap-2 lg:gap-3 xl:gap-4 py-3 md:py-0">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="block">
              <Image
                src="/images/logo.png"
                alt="JKKN Logo"
                width={180}
                height={80}
                className="w-32 h-auto sm:w-40 md:w-44 lg:w-40 xl:w-48 object-contain"
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-col flex-1 justify-center">
            {/* First Row */}
            <ul className="flex list-none justify-start flex-nowrap gap-0">
              <li>
                <a
                  href="/"
                  className={`text-black no-underline text-[10px] lg:text-[10px] xl:text-xs font-bold py-2.5 px-2.5 lg:px-1.5 xl:px-4 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] ${isActive('/') ? 'bg-[#1a7f5a] text-white' : ''}`}
                >
                  HOME
                </a>
              </li>
              <li
                className="relative flex items-center"
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <span className={`text-black no-underline text-[10px] lg:text-[10px] xl:text-xs font-bold py-2.5 px-2.5 lg:px-1.5 xl:px-4 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] cursor-default ${isParentActive(['/about']) ? 'underline text-[#1a7f5a]' : ''}`}>
                  ABOUT
                </span>
                <span className={`text-[10px] pointer-events-none -ml-2 ${isParentActive(['/about']) ? 'text-[#1a7f5a]' : 'text-black'}`}>▼</span>

                {/* About Dropdown */}
                {mounted && aboutDropdownOpen && (
                  <div className="absolute top-full left-0 bg-[#f5f0e8] shadow-xl py-2 z-[9999] min-w-[280px]">
                    <a href="/about/overview" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/about/overview') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      About us Overview
                    </a>
                    <a href="/about/vision-mission" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/about/vision-mission') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Vision & Mission
                    </a>
                    <a href="/about/institutional-distinctiveness" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/about/institutional-distinctiveness') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Institutional distinctiveness
                    </a>
                    <a href="/about/our-trust" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/about/our-trust') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Our Trust
                    </a>
                    <a href="/about/our-management" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/about/our-management') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Our Management
                    </a>
                    <a href="/about/our-institutions" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/about/our-institutions') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Our Institutions
                    </a>
                    <a href="/about/the-principal" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/about/the-principal') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      The Principal
                    </a>
                    <a href="/about/administration" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/about/administration') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Administration
                    </a>
                    <a href="/about/cpio" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/about/cpio') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Central Public Information Officer
                    </a>
                    <a href="/about/why-jkkn" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/about/why-jkkn') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Why JKKN?
                    </a>
                    <a href="/about/peos" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/about/peos') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      PEO'S
                    </a>
                    <a href="/about/quality-policy" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/about/quality-policy') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Quality Policy
                    </a>
                    <a href="/about/general-rules" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/about/general-rules') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      General Rules and Regulations
                    </a>
                    <div
                      className="relative"
                      onMouseEnter={() => setAffiliationSubmenuOpen(true)}
                      onMouseLeave={() => setAffiliationSubmenuOpen(false)}
                    >
                      <span className="flex items-center justify-between px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap cursor-default">
                        <span>Affiliation Details</span>
                        <span className="text-xs">›</span>
                      </span>
                      {mounted && affiliationSubmenuOpen && (
                        <div className="absolute left-full top-0 bg-[#f5f0e8] shadow-xl min-w-[280px] py-2 z-[9999]">
                          <a href="/about/affiliation-details/recognition-approval-&-accrediation" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors ${isActive('/about/affiliation-details/recognition-approval-&-accrediation') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                          Recognition Approval & Accrediation
                          </a>

                        </div>
                      )}
                    </div>
                    <a href="/about/institutional-development-plan" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/about/institutional-development-plan') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Institutional Development Plan
                    </a>
                  </div>
                )}
              </li>
              <li
                className="relative flex items-center"
                onMouseEnter={() => setProgramsDropdownOpen(true)}
                onMouseLeave={() => setProgramsDropdownOpen(false)}
              >
                <span className={`text-black no-underline text-[10px] lg:text-[10px] xl:text-xs font-bold py-2.5 px-2.5 lg:px-1.5 xl:px-4 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] cursor-default ${isParentActive(['/programs']) ? 'underline text-[#1a7f5a]' : ''}`}>
                  PROGRAMS OFFERED
                </span>
                <span className={`text-[10px] pointer-events-none -ml-2 ${isParentActive(['/programs']) ? 'text-[#1a7f5a]' : 'text-black'}`}>▼</span>

                {/* Programs Dropdown - Continued in next part due to length */}
                {mounted && programsDropdownOpen && (
                  <div className="absolute top-full left-0 bg-[#f5f0e8] shadow-xl py-2 z-[9999] min-w-[240px]">
                    <div
                      className="relative"
                      onMouseEnter={() => setUgProgramSubmenuOpen(true)}
                      onMouseLeave={() => setUgProgramSubmenuOpen(false)}
                    >
                      <span className="flex items-center justify-between px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap cursor-default">
                        <span>UG Program</span>
                        <span className="text-xs">›</span>
                      </span>
                      {mounted && ugProgramSubmenuOpen && (
                        <div className="absolute left-full top-0 bg-[#f5f0e8] shadow-xl min-w-[250px] py-2 z-[9999]">
                          <a href="/programs/ug-program/b-pharmacy" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors ${isActive('/programs/ug-program/b-pharmacy') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                            B-Pharmacy
                          </a>
                          <a href="/programs/ug-program/b-pharmacy-lateral-entry" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors ${isActive('/programs/ug-program/b-pharmacy-lateral-entry') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                            B-Pharmacy- Lateral Entry
                          </a>
                        </div>
                      )}
                    </div>
                    <div
                      className="relative"
                      onMouseEnter={() => setPgProgramSubmenuOpen(true)}
                      onMouseLeave={() => setPgProgramSubmenuOpen(false)}
                    >
                      <span className="flex items-center justify-between px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap cursor-default">
                        <span>PG Program</span>
                        <span className="text-xs">›</span>
                      </span>
                      {mounted && pgProgramSubmenuOpen && (
                        <div className="absolute left-full top-0 bg-[#f5f0e8] shadow-xl min-w-[280px] py-2 z-[9999]">
                          <div
                            className="relative"
                            onMouseEnter={() => setMPharmacySubmenuOpen(true)}
                            onMouseLeave={() => setMPharmacySubmenuOpen(false)}
                          >
                            <a href="/programs/pg-program/m-pharmacy" className="flex items-center justify-between px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors">
                              <span>M. Pharmacy</span>
                              <span className="text-xs">›</span>
                            </a>
                            {mounted && mPharmacySubmenuOpen && (
                              <div className="absolute left-full top-0 bg-[#f5f0e8] shadow-xl min-w-[260px] py-2 z-[9999]">
                                <a href="/programs/pg-program/m-pharmacy/pharmacology" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors ${isActive('/programs/pg-program/m-pharmacy/pharmacology') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                                  Pharmacology
                                </a>
                                <a href="/programs/pg-program/m-pharmacy/pharmaceutical-analysis" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors ${isActive('/programs/pg-program/m-pharmacy/pharmaceutical-analysis') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                                  Pharmaceutical Analysis
                                </a>
                                <a href="/programs/pg-program/m-pharmacy/pharmaceutical-chemistry" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors ${isActive('/programs/pg-program/m-pharmacy/pharmaceutical-chemistry') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                                  Pharmaceutical Chemistry
                                </a>
                                <a href="/programs/pg-program/m-pharmacy/pharmacy-practice" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors ${isActive('/programs/pg-program/m-pharmacy/pharmacy-practice') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                                  Pharmacy Practice
                                </a>
                                <a href="/programs/pg-program/m-pharmacy/pharmaceutics" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors ${isActive('/programs/pg-program/m-pharmacy/pharmaceutics') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                                  Pharmaceutics
                                </a>
                              </div>
                            )}
                          </div>
                          <a href="/programs/pg-program/pharm-d" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors ${isActive('/programs/pg-program/pharm-d') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                            PHARM.D (Doctor of Pharmacy)
                          </a>
                          <a href="/programs/pg-program/pharm-d-post-baccalaureate" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors ${isActive('/programs/pg-program/pharm-d-post-baccalaureate') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                            PHARM D (POST BACCALAUREATE)
                          </a>
                        </div>
                      )}
                    </div>
                    <a href="/programs/phd" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/programs/phd') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      PhD
                    </a>
                  </div>
                )}
              </li>
              <li
                className="relative flex items-center"
                onMouseEnter={() => setAcademicDropdownOpen(true)}
                onMouseLeave={() => setAcademicDropdownOpen(false)}
              >
                <span className={`text-black no-underline text-[10px] lg:text-[10px] xl:text-xs font-bold py-2.5 px-2.5 lg:px-1.5 xl:px-4 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] cursor-default ${isParentActive(['/academic']) ? 'underline text-[#1a7f5a]' : ''}`}>
                  ACADEMIC
                </span>
                <span className={`text-[10px] pointer-events-none -ml-2 ${isParentActive(['/academic']) ? 'text-[#1a7f5a]' : 'text-black'}`}>▼</span>

                {/* Academic Dropdown */}
                {mounted && academicDropdownOpen && (
                  <div className="absolute top-full left-0 bg-[#f5f0e8] shadow-xl py-2 z-[9999] min-w-[280px]">
                    <a href="/academic/admission-process" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/academic/admission-process') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Admission Process
                    </a>
                    <a href="https://calendar.google.com/calendar/embed?src=c_ef5ec993b1425c37ba43cb1a8797b2dd1a38ef6e1cea9640b2ed6c9b3c354f29%40group.calendar.google.com&ctz=Asia%2FKolkata&mode=AGENDA" className="block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Academic Calendar
                    </a>
                    <div
                      className="relative"
                      onMouseEnter={() => setTimeTableSubmenuOpen(true)}
                      onMouseLeave={() => setTimeTableSubmenuOpen(false)}
                    >
                      <span className="flex items-center justify-between px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap cursor-default">
                        <span>Time Table</span>
                        <span className="text-xs">›</span>
                      </span>
                      {mounted && timeTableSubmenuOpen && (
                        <div className="absolute left-full top-0 bg-[#f5f0e8] shadow-xl min-w-[250px] py-2 z-[9999]">
                          <a href="/academic/time-table/bpharm" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors ${isActive('/academic/time-table/bpharm') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                            B.Pharm Time Table 2024-25
                          </a>
                          <a href="/academic/time-table/pharmd" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors ${isActive('/academic/time-table/pharmd') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                            Pharm.D Time Table 2024-25
                          </a>
                          <a href="/academic/time-table/mpharm" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors ${isActive('/academic/time-table/mpharm') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                            M.Pharm Time Table 2024-25
                          </a>
                        </div>
                      )}
                    </div>
                    <a href="/academic/exam-schedule" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/academic/exam-schedule') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Exam Schedule
                    </a>
                    <a href="/academic/ordinances" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/academic/ordinances') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Ordinances Pertaining To Examinations
                    </a>
                    <div
                      className="relative"
                      onMouseEnter={() => setCosPosSubmenuOpen(true)}
                      onMouseLeave={() => setCosPosSubmenuOpen(false)}
                    >
                      <span className="flex items-center justify-between px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap cursor-default">
                        <span>COs _ POs</span>
                        <span className="text-xs">›</span>
                      </span>
                      {mounted && cosPosSubmenuOpen && (
                        <div className="absolute left-full top-0 bg-[#f5f0e8] shadow-xl min-w-[200px] py-2 z-[9999]">
                          <a href="/academic/cos-pos/bpharm" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors ${isActive('/academic/cos-pos/bpharm') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                            B.PHARM
                          </a>
                          <a href="/academic/cos-pos/mpharm" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors ${isActive('/academic/cos-pos/mpharm') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                            M.PHARM
                          </a>
                          <a href="/academic/cos-pos/pharmd" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors ${isActive('/academic/cos-pos/pharmd') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                            PHARM D
                          </a>
                        </div>
                      )}
                    </div>
                    <a href="/academic/attainment-cos-pos" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/academic/attainment-cos-pos') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Attainment of COs and POs
                    </a>
                    <a href="/academic/study-material" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/academic/study-material') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Study Material
                    </a>
                    <a href="/academic/faculty-profile" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/academic/faculty-profile') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Faculty Profile
                    </a>
                    <a href="/academic/details-of-students" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/academic/details-of-students') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Details of Students
                    </a>
                  </div>
                )}
              </li>
              <li
                className="relative flex items-center"
                onMouseEnter={() => setFacilitiesDropdownOpen(true)}
                onMouseLeave={() => setFacilitiesDropdownOpen(false)}
              >
                <span className={`text-black no-underline text-[10px] lg:text-[10px] xl:text-xs font-bold py-2.5 px-2.5 lg:px-1.5 xl:px-4 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] cursor-default ${isParentActive(['/facilities']) ? 'underline text-[#1a7f5a]' : ''}`}>
                  FACILITIES
                </span>
                <span className={`text-[10px] pointer-events-none -ml-2 ${isParentActive(['/facilities']) ? 'text-[#1a7f5a]' : 'text-black'}`}>▼</span>

                {/* Facilities Dropdown */}
                {mounted && facilitiesDropdownOpen && (
                  <div className="absolute top-full left-0 bg-[#f5f0e8] shadow-xl py-2 z-[9999] min-w-[280px] max-h-[80vh] overflow-y-auto">
                    <a href="/facilities/class-room" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/facilities/class-room') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Class Room
                    </a>
                    <a href="/facilities/seminar-hall" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/facilities/seminar-hall') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Seminar Hall
                    </a>
                    <a href="/facilities/lab" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/facilities/lab') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Lab
                    </a>
                    <a href="/facilities/central-facilities" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/facilities/central-facilities') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Central Facilities
                    </a>
                    <a href="/facilities/library" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/facilities/library') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Library
                    </a>
                    <a href="/facilities/internship-opportunities" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/facilities/internship-opportunities') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Internship opportunities for students
                    </a>
                    <a href="/facilities/hostel" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/facilities/hostel') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      hostel
                    </a>
                    <a href="/facilities/sports" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/facilities/sports') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Sports
                    </a>
                    <a href="/facilities/food-court" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/facilities/food-court') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Food Court
                    </a>
                    <a href="/facilities/transport" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/facilities/transport') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Transport
                    </a>
                    <a href="/facilities/health-facilities" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/facilities/health-facilities') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Health Facilities
                    </a>
                    <a href="/facilities/ambulance-services" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/facilities/ambulance-services') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Ambulance Services
                    </a>
                    <a href="/facilities/wifi" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/facilities/wifi') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Wifi
                    </a>
                    <a href="/facilities/bank-post-office" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/facilities/bank-post-office') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Bank & Post Office
                    </a>
                    <a href="/facilities/nss" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/facilities/nss') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      National Service Scheme (NSS)
                    </a>
                    <a href="/facilities/animal-house" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/facilities/animal-house') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Animal House Facility
                    </a>
                    <a href="/facilities/barrier-free-environment" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/facilities/barrier-free-environment') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Disabled-friendly and Barrier Free Environment
                    </a>
                  </div>
                )}
              </li>
              <li>
                <a
                  href="/nacc"
                  className={`text-black no-underline text-[10px] lg:text-[10px] xl:text-xs font-bold py-2.5 px-2.5 lg:px-1.5 xl:px-4 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] ${isActive('/nacc') ? 'bg-[#1a7f5a] text-white' : ''}`}
                >
                  NACC
                </a>
              </li>
              <li>
                <a
                  href="/iqac"
                  className={`text-black no-underline text-[10px] lg:text-[10px] xl:text-xs font-bold py-2.5 px-2.5 lg:px-1.5 xl:px-4 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] ${isActive('/iqac') ? 'bg-[#1a7f5a] text-white' : ''}`}
                >
                  IQAC
                </a>
              </li>
              <li>
                <a
                  href="/alumni"
                  className={`text-black no-underline text-[10px] lg:text-[10px] xl:text-xs font-bold py-2.5 px-2.5 lg:px-1.5 xl:px-4 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] ${isActive('/alumni') ? 'bg-[#1a7f5a] text-white' : ''}`}
                >
                  ALUMNI
                </a>
              </li>
              <li>
                <a
                  href="/nirf"
                  className={`text-black no-underline text-[10px] lg:text-[10px] xl:text-xs font-bold py-2.5 px-2.5 lg:px-1.5 xl:px-4 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] ${isActive('/nirf') ? 'bg-[#1a7f5a] text-white' : ''}`}
                >
                  NIRF
                </a>
              </li>
              <li>
                <a
                  href="/research"
                  className={`text-black no-underline text-[10px] lg:text-[10px] xl:text-xs font-bold py-2.5 px-2.5 lg:px-1.5 xl:px-4 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] ${isActive('/research') ? 'bg-[#1a7f5a] text-white' : ''}`}
                >
                  RESEARCH
                </a>
              </li>
              <li
                className="relative flex items-center"
                onMouseEnter={() => setPlacementDropdownOpen(true)}
                onMouseLeave={() => setPlacementDropdownOpen(false)}
              >
                <span className={`text-black no-underline text-[10px] lg:text-[10px] xl:text-xs font-bold py-2.5 px-2.5 lg:px-1.5 xl:px-4 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] cursor-default ${isParentActive(['/placement']) ? 'underline text-[#1a7f5a]' : ''}`}>
                  PLACEMENT
                </span>
                <span className={`text-[10px] pointer-events-none -ml-2 ${isParentActive(['/placement']) ? 'text-[#1a7f5a]' : 'text-black'}`}>▼</span>

                {/* Placement Dropdown */}
                {mounted && placementDropdownOpen && (
                  <div className="absolute top-full left-0 bg-[#f5f0e8] shadow-xl py-2 z-[9999] min-w-[240px]">
                    <div
                      className="relative"
                      onMouseEnter={() => setPlacementDetailsSubmenuOpen(true)}
                      onMouseLeave={() => setPlacementDetailsSubmenuOpen(false)}
                    >
                      <span className="flex items-center justify-between px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap cursor-default">
                        <span>placement details</span>
                        <span className="text-xs">‹</span>
                      </span>
                      {mounted && placementDetailsSubmenuOpen && (
                        <div className="absolute right-full top-0 bg-[#f5f0e8] shadow-xl min-w-[280px] py-2 z-[10000]">
                          <a href="/placement/details/placement-cell" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors ${isActive('/placement/details/placement-cell') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                            Placement Cell and Its Activities
                          </a>
                          <a href="/placement/details/corporate-relations" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors ${isActive('/placement/details/corporate-relations') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                            corporate-relations-industry-interface
                          </a>
                          <a href="/placement/details/campus-recruitment" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors ${isActive('/placement/details/campus-recruitment') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                            campus-recruitment
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </li>
            </ul>

            {/* Second Row */}
            <ul className="flex list-none justify-start flex-nowrap gap-0">
              <li
                className="relative flex items-center"
                onMouseEnter={() => setCommitteeDropdownOpen(true)}
                onMouseLeave={() => setCommitteeDropdownOpen(false)}
              >
                <span className={`text-black no-underline text-[10px] lg:text-[10px] xl:text-xs font-bold py-2.5 px-2.5 lg:px-1.5 xl:px-4 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] cursor-default ${isParentActive(['/committee']) ? 'underline text-[#1a7f5a]' : ''}`}>
                  COMMITTEE
                </span>
                <span className={`text-[10px] pointer-events-none -ml-2 ${isParentActive(['/committee']) ? 'text-[#1a7f5a]' : 'text-black'}`}>▼</span>

                {/* Committee Dropdown */}
                {mounted && committeeDropdownOpen && (
                  <div className="absolute top-full left-0 bg-[#f5f0e8] shadow-xl py-2 z-[9999] min-w-[280px]">
                    <a href="/committee/various-committees" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/committee/various-committees') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Various Committees
                    </a>
                    <a href="/committee/sports-committee" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/committee/sports-committee') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Sports committee
                    </a>
                    <a href="/committee/discipline-committee" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/committee/discipline-committee') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Discipline Committee
                    </a>
                    <a href="/committee/anti-ragging-committee" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/committee/anti-ragging-committee') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Anti-Ragging Committee
                    </a>
                    <a href="/committee/malpractice-prevention-committee" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/committee/malpractice-prevention-committee') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Malpractice Prevention Committee
                    </a>
                    <a href="/committee/internal-complaints-committee" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/committee/internal-complaints-committee') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      INTERNAL COMPLAINTS COMMITTEE
                    </a>
                    <a href="/committee/cultural-committee" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/committee/cultural-committee') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      CULTURAL COMMITTEE
                    </a>
                    <a href="/committee/student-grievance-redressal-committee" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/committee/student-grievance-redressal-committee') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Student Grievance Redressal Committee (SGRC)
                    </a>
                    <a href="/committee/equal-opportunity-cell" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/committee/equal-opportunity-cell') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Equal Opportunity Cell (Eoc)
                    </a>
                    <a href="/committee/sedg-cell" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/committee/sedg-cell') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Socio-economically Disadvantaged Group (SEDG) Cell
                    </a>
                  </div>
                )}
              </li>
              <li
                className="relative flex items-center"
                onMouseEnter={() => setOthersDropdownOpen(true)}
                onMouseLeave={() => setOthersDropdownOpen(false)}
              >
                <span className={`text-black no-underline text-[10px] lg:text-[10px] xl:text-xs font-bold py-2.5 px-2.5 lg:px-1.5 xl:px-4 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] cursor-default ${isParentActive(['/others']) ? 'underline text-[#1a7f5a]' : ''}`}>
                  OTHERS
                </span>
                <span className={`text-[10px] pointer-events-none -ml-2 ${isParentActive(['/others']) ? 'text-[#1a7f5a]' : 'text-black'}`}>▼</span>

                {/* Others Dropdown */}
                {mounted && othersDropdownOpen && (
                  <div className="absolute top-full left-0 bg-[#f5f0e8] shadow-xl py-2 z-[9999] min-w-[280px]">
                    <a href="/others/best-practice" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/others/best-practice') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Best Practice
                    </a>
                    <a href="/others/competitive-examination" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/others/competitive-examination') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Competitive Examination and Carrier
                    </a>
                    <a href="/others/digital-campus" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/others/digital-campus') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Digital Campus
                    </a>
                    <div
                      className="relative"
                      onMouseEnter={() => setSocialWorkSubmenuOpen(true)}
                      onMouseLeave={() => setSocialWorkSubmenuOpen(false)}
                    >
                      <span className="flex items-center justify-between px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap cursor-default">
                        <span>social work activities</span>
                        <span className="text-xs">›</span>
                      </span>
                      {mounted && socialWorkSubmenuOpen && (
                        <div className="absolute left-full top-0 bg-[#f5f0e8] shadow-xl min-w-[220px] py-2 z-[9999]">
                          <a href="/others/social-work-activities/youth-red-cross" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors ${isActive('/others/social-work-activities/youth-red-cross') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                            Youth-red-cross
                          </a>
                          <a href="/others/social-work-activities/red-ribbon-club" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors ${isActive('/others/social-work-activities/red-ribbon-club') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                            Red-ribbon-club
                          </a>
                          <a href="/others/social-work-activities/nss" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors ${isActive('/others/social-work-activities/nss') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                            National service scheme
                          </a>
                        </div>
                      )}
                    </div>
                    <a href="/others/drug-information-center" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/others/drug-information-center') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Drug Information Center
                    </a>
                    <a href="/others/national-innovation-startup-policy" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/others/national-innovation-startup-policy') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      National Innovation and Startup Policy 2020-2021
                    </a>
                    <a href="/others/institutions-innovation-council" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/others/institutions-innovation-council') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Institutions Innovation Council
                    </a>
                    <a href="/others/incubation-centre" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/others/incubation-centre') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Incubation Centre
                    </a>
                    <a href="/others/entrepreneurship-development-cell" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/others/entrepreneurship-development-cell') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Entrepreneurship Development Cell
                    </a>
                    <a href="/others/feedback-analysis" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/others/feedback-analysis') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Feedback analysis
                    </a>
                    <a href="/others/ipa-bhavani-kumarapalayam" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/others/ipa-bhavani-kumarapalayam') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      IPA-Bhavani-Kumarapalayam Local Branch
                    </a>
                    <a href="/others/privacy-policy" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/others/privacy-policy') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Privacy Policy
                    </a>
                    <a href="/others/audit-statements-finance" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/others/audit-statements-finance') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Audit Statements Finance
                    </a>
                    <a href="/others/newsletters" className={`block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap ${isActive('/others/newsletters') ? 'bg-[#1a7f5a] text-white' : ''}`}>
                      Newsletters
                    </a>
                  </div>
                )}
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-black no-underline text-[10px] lg:text-[10px] xl:text-xs font-bold py-2.5 px-2.5 lg:px-1.5 xl:px-4 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a]"
                >
                  GALLERY
                </a>
              </li>
              <li>
                <a
                  href="/circulars"
                  className="text-black no-underline text-[10px] lg:text-[10px] xl:text-xs font-bold py-2.5 px-2.5 lg:px-1.5 xl:px-4 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a]"
                >
                  CIRCULARS AND NOTICES
                </a>
              </li>
              <li
                className="relative flex items-center"
                onMouseEnter={() => setMandatoryDisclosuresDropdownOpen(true)}
                onMouseLeave={() => setMandatoryDisclosuresDropdownOpen(false)}
              >
                <span className="text-black no-underline text-[10px] lg:text-[10px] xl:text-xs font-bold py-2.5 px-2.5 lg:px-1.5 xl:px-4 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] cursor-default">
                  MANDATORY DISCLOSURES
                </span>
                <span className="text-[10px] text-black pointer-events-none -ml-2">▼</span>

                {/* Mandatory Disclosures Dropdown */}
                {mounted && mandatoryDisclosuresDropdownOpen && (
                  <div className="absolute top-full left-0 bg-[#f5f0e8] shadow-xl py-2 z-[9999] min-w-[300px]">
                    <a href="/disclosures/ugc-public-disclosure-compliance" className="block px-6 py-3 text-[#666666] text-xs xl:text-sm font-bold hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      UGC PUBLIC DISCLOSURE COMPLIANCE
                    </a>
                    <a href="/disclosures/undertaking" className="block px-6 py-2.5 text-[#666666] text-xs xl:text-sm font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Undertaking
                    </a>
                  </div>
                )}
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-black no-underline text-[10px] lg:text-[10px] xl:text-xs font-bold py-2.5 px-2.5 lg:px-1.5 xl:px-4 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a]"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle & Search */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Icon */}
            <button
              className="touch-target border-none cursor-pointer p-2 flex items-center justify-center bg-transparent group"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:text-[#1a7f5a] transition-colors duration-300"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
                <path d="M20 20L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Hamburger Menu Button */}
            <button
              className="lg:hidden touch-target flex flex-col justify-center items-center border-none cursor-pointer p-2 bg-transparent z-[1002]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-black transition-all duration-300 my-1 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-[998] lg:hidden"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu - Sliding from Right */}
        <div
          className={`fixed top-0 right-0 h-full w-full max-w-[320px] sm:max-w-[360px] bg-[#f5f0e8] shadow-2xl z-[999] transition-transform duration-300 overflow-y-auto lg:hidden ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-20 px-5 pb-8">
            <ul className="flex flex-col space-y-1">
              {/* HOME */}
              <li className="border-b border-gray-200">
                <a
                  href="/"
                  className="block py-3 px-4 text-sm font-bold text-black uppercase hover:bg-[#e8dcc8] transition-colors rounded"
                  onClick={closeMobileMenu}
                >
                  HOME
                </a>
              </li>

              {/* ABOUT - Mobile Accordion */}
              <li className="border-b border-gray-200">
                <button
                  className="w-full flex items-center justify-between py-3 px-4 text-sm font-bold text-black uppercase hover:bg-[#e8dcc8] transition-colors rounded text-left"
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  aria-expanded={mobileAboutOpen}
                >
                  <span>ABOUT</span>
                  <span className={`transition-transform duration-300 ${mobileAboutOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {mobileAboutOpen && (
                  <div className="bg-white/50 py-2 space-y-1">
                    <a href="/about/overview" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      About us Overview
                    </a>
                    <a href="/about/vision-mission" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Vision & Mission
                    </a>
                    <a href="/about/institutional-distinctiveness" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Institutional distinctiveness
                    </a>
                    <a href="/about/our-trust" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Our Trust
                    </a>
                    <a href="/about/our-management" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Our Management
                    </a>
                    <a href="/about/our-institutions" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Our Institutions
                    </a>
                    <a href="/about/the-principal" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      The Principal
                    </a>
                    <a href="/about/administration" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Administration
                    </a>
                    <a href="/about/cpio" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Central Public Information Officer
                    </a>
                    <a href="/about/why-jkkn" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Why JKKN?
                    </a>
                    <a href="/about/peos" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      PEO'S
                    </a>
                    <a href="/about/quality-policy" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Quality Policy
                    </a>
                    <a href="/about/general-rules" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      General Rules and Regulations
                    </a>

                    {/* Affiliation Details Submenu */}
                    <div>
                      <button
                        className="w-full flex items-center justify-between py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8] text-left"
                        onClick={() => setMobileAffiliationOpen(!mobileAffiliationOpen)}
                      >
                        <span>Affiliation Details</span>
                        <span className={`transition-transform duration-300 text-xs ${mobileAffiliationOpen ? 'rotate-180' : ''}`}>▼</span>
                      </button>
                      {mobileAffiliationOpen && (
                        <div className="bg-white/70 py-1">
                          <a href="/about/affiliation-details/aicte" className="block py-2 px-10 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                            AICTE Approval
                          </a>
                          <a href="/about/affiliation-details/pharmacy-council" className="block py-2 px-10 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                            Pharmacy Council Approval
                          </a>
                          <a href="/about/affiliation-details/university" className="block py-2 px-10 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                            University Affiliation
                          </a>
                        </div>
                      )}
                    </div>

                    <a href="/about/institutional-development-plan" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Institutional Development Plan
                    </a>
                  </div>
                )}
              </li>

              {/* PROGRAMS OFFERED - Mobile Accordion */}
              <li className="border-b border-gray-200">
                <button
                  className="w-full flex items-center justify-between py-3 px-4 text-sm font-bold text-black uppercase hover:bg-[#e8dcc8] transition-colors rounded text-left"
                  onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                  aria-expanded={mobileProgramsOpen}
                >
                  <span>PROGRAMS OFFERED</span>
                  <span className={`transition-transform duration-300 ${mobileProgramsOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {mobileProgramsOpen && (
                  <div className="bg-white/50 py-2 space-y-1">
                    {/* UG Program Submenu */}
                    <div>
                      <button
                        className="w-full flex items-center justify-between py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8] text-left"
                        onClick={() => setMobileUgProgramOpen(!mobileUgProgramOpen)}
                      >
                        <span>UG Program</span>
                        <span className={`transition-transform duration-300 text-xs ${mobileUgProgramOpen ? 'rotate-180' : ''}`}>▼</span>
                      </button>
                      {mobileUgProgramOpen && (
                        <div className="bg-white/70 py-1">
                          <a href="/programs/ug-program/b-pharmacy" className="block py-2 px-10 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                            B-Pharmacy
                          </a>
                          <a href="/programs/ug-program/b-pharmacy-lateral-entry" className="block py-2 px-10 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                            B-Pharmacy- Lateral Entry
                          </a>
                        </div>
                      )}
                    </div>

                    {/* PG Program Submenu */}
                    <div>
                      <button
                        className="w-full flex items-center justify-between py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8] text-left"
                        onClick={() => setMobilePgProgramOpen(!mobilePgProgramOpen)}
                      >
                        <span>PG Program</span>
                        <span className={`transition-transform duration-300 text-xs ${mobilePgProgramOpen ? 'rotate-180' : ''}`}>▼</span>
                      </button>
                      {mobilePgProgramOpen && (
                        <div className="bg-white/70 py-1 space-y-1">
                          {/* M.Pharmacy Nested Submenu */}
                          <div>
                            <button
                              className="w-full flex items-center justify-between py-2 px-10 text-sm text-gray-600 hover:bg-[#e8dcc8] text-left"
                              onClick={() => setMobileMPharmacyOpen(!mobileMPharmacyOpen)}
                            >
                              <span>M. Pharmacy</span>
                              <span className={`transition-transform duration-300 text-xs ${mobileMPharmacyOpen ? 'rotate-180' : ''}`}>▼</span>
                            </button>
                            {mobileMPharmacyOpen && (
                              <div className="bg-white py-1">
                                <a href="/programs/pg-program/m-pharmacy/pharmacology" className="block py-2 px-14 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                                  Pharmacology
                                </a>
                                <a href="/programs/pg-program/m-pharmacy/pharmaceutical-analysis" className="block py-2 px-14 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                                  Pharmaceutical Analysis
                                </a>
                                <a href="/programs/pg-program/m-pharmacy/pharmaceutical-chemistry" className="block py-2 px-14 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                                  Pharmaceutical Chemistry
                                </a>
                                <a href="/programs/pg-program/m-pharmacy/pharmacy-practice" className="block py-2 px-14 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                                  Pharmacy Practice
                                </a>
                                <a href="/programs/pg-program/m-pharmacy/pharmaceutics" className="block py-2 px-14 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                                  Pharmaceutics
                                </a>
                              </div>
                            )}
                          </div>

                          <a href="/programs/pg-program/pharm-d" className="block py-2 px-10 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                            PHARM.D (Doctor of Pharmacy)
                          </a>
                          <a href="/programs/pg-program/pharm-d-post-baccalaureate" className="block py-2 px-10 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                            PHARM D (POST BACCALAUREATE)
                          </a>
                        </div>
                      )}
                    </div>

                    <a href="/programs/phd" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      PhD
                    </a>
                  </div>
                )}
              </li>

              {/* ACADEMIC - Mobile Accordion */}
              <li className="border-b border-gray-200">
                <button
                  className="w-full flex items-center justify-between py-3 px-4 text-sm font-bold text-black uppercase hover:bg-[#e8dcc8] transition-colors rounded text-left"
                  onClick={() => setMobileAcademicOpen(!mobileAcademicOpen)}
                  aria-expanded={mobileAcademicOpen}
                >
                  <span>ACADEMIC</span>
                  <span className={`transition-transform duration-300 ${mobileAcademicOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {mobileAcademicOpen && (
                  <div className="bg-white/50 py-2 space-y-1">
                    <a href="/academic/admission-process" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Admission Process
                    </a>
                    <a href="https://calendar.google.com/calendar/embed?src=c_ef5ec993b1425c37ba43cb1a8797b2dd1a38ef6e1cea9640b2ed6c9b3c354f29%40group.calendar.google.com&ctz=Asia%2FKolkata&mode=AGENDA" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Academic Calendar
                    </a>

                    {/* Time Table Submenu */}
                    <div>
                      <button
                        className="w-full flex items-center justify-between py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8] text-left"
                        onClick={() => setMobileTimeTableOpen(!mobileTimeTableOpen)}
                      >
                        <span>Time Table</span>
                        <span className={`transition-transform duration-300 text-xs ${mobileTimeTableOpen ? 'rotate-180' : ''}`}>▼</span>
                      </button>
                      {mobileTimeTableOpen && (
                        <div className="bg-white/70 py-1">
                          <a href="/academic/time-table/bpharm" className="block py-2 px-10 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                            B.Pharm Time Table 2024-25
                          </a>
                          <a href="/academic/time-table/pharmd" className="block py-2 px-10 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                            Pharm.D Time Table 2024-25
                          </a>
                          <a href="/academic/time-table/mpharm" className="block py-2 px-10 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                            M.Pharm Time Table 2024-25
                          </a>
                        </div>
                      )}
                    </div>

                    <a href="/academic/exam-schedule" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Exam Schedule
                    </a>
                    <a href="/academic/ordinances" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Ordinances Pertaining To Examinations
                    </a>

                    {/* COs _ POs Submenu */}
                    <div>
                      <button
                        className="w-full flex items-center justify-between py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8] text-left"
                        onClick={() => setMobileCosPosOpen(!mobileCosPosOpen)}
                      >
                        <span>COs _ POs</span>
                        <span className={`transition-transform duration-300 text-xs ${mobileCosPosOpen ? 'rotate-180' : ''}`}>▼</span>
                      </button>
                      {mobileCosPosOpen && (
                        <div className="bg-white/70 py-1">
                          <a href="/academic/cos-pos/bpharm" className="block py-2 px-10 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                            B.PHARM
                          </a>
                          <a href="/academic/cos-pos/mpharm" className="block py-2 px-10 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                            M.PHARM
                          </a>
                          <a href="/academic/cos-pos/pharmd" className="block py-2 px-10 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                            PHARM D
                          </a>
                        </div>
                      )}
                    </div>

                    <a href="/academic/attainment-cos-pos" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Attainment of COs and POs
                    </a>
                    <a href="/academic/study-material" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Study Material
                    </a>
                    <a href="/academic/faculty-profile" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Faculty Profile
                    </a>
                    <a href="/academic/details-of-students" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Details of Students
                    </a>
                  </div>
                )}
              </li>

              {/* FACILITIES - Mobile Accordion */}
              <li className="border-b border-gray-200">
                <button
                  className="w-full flex items-center justify-between py-3 px-4 text-sm font-bold text-black uppercase hover:bg-[#e8dcc8] transition-colors rounded text-left"
                  onClick={() => setMobileFacilitiesOpen(!mobileFacilitiesOpen)}
                  aria-expanded={mobileFacilitiesOpen}
                >
                  <span>FACILITIES</span>
                  <span className={`transition-transform duration-300 ${mobileFacilitiesOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {mobileFacilitiesOpen && (
                  <div className="bg-white/50 py-2 space-y-1">
                    <a href="/facilities/class-room" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Class Room
                    </a>
                    <a href="/facilities/seminar-hall" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Seminar Hall
                    </a>
                    <a href="/facilities/lab" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Lab
                    </a>
                    <a href="/facilities/central-facilities" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Central Facilities
                    </a>
                    <a href="/facilities/library" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Library
                    </a>
                    <a href="/facilities/internship-opportunities" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Internship opportunities for students
                    </a>
                    <a href="/facilities/hostel" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      hostel
                    </a>
                    <a href="/facilities/sports" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Sports
                    </a>
                    <a href="/facilities/food-court" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Food Court
                    </a>
                    <a href="/facilities/transport" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Transport
                    </a>
                    <a href="/facilities/health-facilities" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Health Facilities
                    </a>
                    <a href="/facilities/ambulance-services" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Ambulance Services
                    </a>
                    <a href="/facilities/wifi" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Wifi
                    </a>
                    <a href="/facilities/bank-post-office" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Bank & Post Office
                    </a>
                    <a href="/facilities/nss" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      National Service Scheme (NSS)
                    </a>
                    <a href="/facilities/animal-house" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Animal House Facility
                    </a>
                    <a href="/facilities/barrier-free-environment" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Disabled-friendly and Barrier Free Environment
                    </a>
                  </div>
                )}
              </li>

              {/* NACC */}
              <li className="border-b border-gray-200">
                <a
                  href="/nacc"
                  className="block py-3 px-4 text-sm font-bold text-black uppercase hover:bg-[#e8dcc8] transition-colors rounded"
                  onClick={closeMobileMenu}
                >
                  NACC
                </a>
              </li>

              {/* IQAC */}
              <li className="border-b border-gray-200">
                <a
                  href="/iqac"
                  className="block py-3 px-4 text-sm font-bold text-black uppercase hover:bg-[#e8dcc8] transition-colors rounded"
                  onClick={closeMobileMenu}
                >
                  IQAC
                </a>
              </li>

              {/* ALUMNI */}
              <li className="border-b border-gray-200">
                <a
                  href="/alumni"
                  className="block py-3 px-4 text-sm font-bold text-black uppercase hover:bg-[#e8dcc8] transition-colors rounded"
                  onClick={closeMobileMenu}
                >
                  ALUMNI
                </a>
              </li>

              {/* NIRF */}
              <li className="border-b border-gray-200">
                <a
                  href="/nirf"
                  className="block py-3 px-4 text-sm font-bold text-black uppercase hover:bg-[#e8dcc8] transition-colors rounded"
                  onClick={closeMobileMenu}
                >
                  NIRF
                </a>
              </li>

              {/* RESEARCH */}
              <li className="border-b border-gray-200">
                <a
                  href="/research"
                  className="block py-3 px-4 text-sm font-bold text-black uppercase hover:bg-[#e8dcc8] transition-colors rounded"
                  onClick={closeMobileMenu}
                >
                  RESEARCH
                </a>
              </li>

              {/* PLACEMENT - Mobile Accordion */}
              <li className="border-b border-gray-200">
                <button
                  className="w-full flex items-center justify-between py-3 px-4 text-sm font-bold text-black uppercase hover:bg-[#e8dcc8] transition-colors rounded text-left"
                  onClick={() => setMobilePlacementOpen(!mobilePlacementOpen)}
                  aria-expanded={mobilePlacementOpen}
                >
                  <span>PLACEMENT</span>
                  <span className={`transition-transform duration-300 ${mobilePlacementOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {mobilePlacementOpen && (
                  <div className="bg-white/50 py-2 space-y-1">
                    {/* Placement Details Submenu */}
                    <div>
                      <button
                        className="w-full flex items-center justify-between py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8] text-left"
                        onClick={() => setMobilePlacementDetailsOpen(!mobilePlacementDetailsOpen)}
                      >
                        <span>placement details</span>
                        <span className={`transition-transform duration-300 text-xs ${mobilePlacementDetailsOpen ? 'rotate-180' : ''}`}>▼</span>
                      </button>
                      {mobilePlacementDetailsOpen && (
                        <div className="bg-white/70 py-1">
                          <a href="/placement/details/placement-cell" className="block py-2 px-10 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                            Placement Cell and Its Activities
                          </a>
                          <a href="/placement/details/corporate-relations" className="block py-2 px-10 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                            corporate-relations-industry-interface
                          </a>
                          <a href="/placement/details/campus-recruitment" className="block py-2 px-10 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                            campus-recruitment
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </li>

              {/* COMMITTEE - Mobile Accordion */}
              <li className="border-b border-gray-200">
                <button
                  className="w-full flex items-center justify-between py-3 px-4 text-sm font-bold text-black uppercase hover:bg-[#e8dcc8] transition-colors rounded text-left"
                  onClick={() => setMobileCommitteeOpen(!mobileCommitteeOpen)}
                  aria-expanded={mobileCommitteeOpen}
                >
                  <span>COMMITTEE</span>
                  <span className={`transition-transform duration-300 ${mobileCommitteeOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {mobileCommitteeOpen && (
                  <div className="bg-white/50 py-2 space-y-1">
                    <a href="/committee/various-committees" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Various Committees
                    </a>
                    <a href="/committee/sports-committee" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Sports committee
                    </a>
                    <a href="/committee/discipline-committee" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Discipline Committee
                    </a>
                    <a href="/committee/anti-ragging-committee" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Anti-Ragging Committee
                    </a>
                    <a href="/committee/malpractice-prevention-committee" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Malpractice Prevention Committee
                    </a>
                    <a href="/committee/internal-complaints-committee" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      INTERNAL COMPLAINTS COMMITTEE
                    </a>
                    <a href="/committee/cultural-committee" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      CULTURAL COMMITTEE
                    </a>
                    <a href="/committee/student-grievance-redressal-committee" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Student Grievance Redressal Committee (SGRC)
                    </a>
                    <a href="/committee/equal-opportunity-cell" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Equal Opportunity Cell (Eoc)
                    </a>
                    <a href="/committee/sedg-cell" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Socio-economically Disadvantaged Group (SEDG) Cell
                    </a>
                  </div>
                )}
              </li>

              {/* OTHERS - Mobile Accordion */}
              <li className="border-b border-gray-200">
                <button
                  className="w-full flex items-center justify-between py-3 px-4 text-sm font-bold text-black uppercase hover:bg-[#e8dcc8] transition-colors rounded text-left"
                  onClick={() => setMobileOthersOpen(!mobileOthersOpen)}
                  aria-expanded={mobileOthersOpen}
                >
                  <span>OTHERS</span>
                  <span className={`transition-transform duration-300 ${mobileOthersOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {mobileOthersOpen && (
                  <div className="bg-white/50 py-2 space-y-1">
                    <a href="/others/best-practice" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Best Practice
                    </a>
                    <a href="/others/competitive-examination" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Competitive Examination and Carrier
                    </a>
                    <a href="/others/digital-campus" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Digital Campus
                    </a>

                    {/* Social Work Activities Submenu */}
                    <div>
                      <button
                        className="w-full flex items-center justify-between py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8] text-left"
                        onClick={() => setMobileSocialWorkOpen(!mobileSocialWorkOpen)}
                      >
                        <span>social work activities</span>
                        <span className={`transition-transform duration-300 text-xs ${mobileSocialWorkOpen ? 'rotate-180' : ''}`}>▼</span>
                      </button>
                      {mobileSocialWorkOpen && (
                        <div className="bg-white/70 py-1">
                          <a href="/others/social-work-activities/youth-red-cross" className="block py-2 px-10 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                            Youth-red-cross
                          </a>
                          <a href="/others/social-work-activities/red-ribbon-club" className="block py-2 px-10 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                            Red-ribbon-club
                          </a>
                          <a href="/others/social-work-activities/nss" className="block py-2 px-10 text-sm text-gray-600 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                            National service scheme
                          </a>
                        </div>
                      )}
                    </div>

                    <a href="/others/drug-information-center" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Drug Information Center
                    </a>
                    <a href="/others/national-innovation-startup-policy" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      National Innovation and Startup Policy 2020-2021
                    </a>
                    <a href="/others/institutions-innovation-council" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Institutions Innovation Council
                    </a>
                    <a href="/others/incubation-centre" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Incubation Centre
                    </a>
                    <a href="/others/entrepreneurship-development-cell" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Entrepreneurship Development Cell
                    </a>
                    <a href="/others/feedback-analysis" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Feedback analysis
                    </a>
                    <a href="/others/ipa-bhavani-kumarapalayam" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      IPA-Bhavani-Kumarapalayam Local Branch
                    </a>
                    <a href="/others/privacy-policy" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Privacy Policy
                    </a>
                    <a href="/others/audit-statements-finance" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Audit Statements Finance
                    </a>
                    <a href="/others/newsletters" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Newsletters
                    </a>
                  </div>
                )}
              </li>

              {/* GALLERY */}
              <li className="border-b border-gray-200">
                <a
                  href="/gallery"
                  className="block py-3 px-4 text-sm font-bold text-black uppercase hover:bg-[#e8dcc8] transition-colors rounded"
                  onClick={closeMobileMenu}
                >
                  GALLERY
                </a>
              </li>

              {/* CIRCULARS AND NOTICES */}
              <li className="border-b border-gray-200">
                <a
                  href="/circulars"
                  className="block py-3 px-4 text-sm font-bold text-black uppercase hover:bg-[#e8dcc8] transition-colors rounded"
                  onClick={closeMobileMenu}
                >
                  CIRCULARS AND NOTICES
                </a>
              </li>

              {/* MANDATORY DISCLOSURES - Mobile Accordion */}
              <li className="border-b border-gray-200">
                <button
                  className="w-full flex items-center justify-between py-3 px-4 text-sm font-bold text-black uppercase hover:bg-[#e8dcc8] transition-colors rounded text-left"
                  onClick={() => setMobileDisclosuresOpen(!mobileDisclosuresOpen)}
                  aria-expanded={mobileDisclosuresOpen}
                >
                  <span>MANDATORY DISCLOSURES</span>
                  <span className={`transition-transform duration-300 ${mobileDisclosuresOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {mobileDisclosuresOpen && (
                  <div className="bg-white/50 py-2 space-y-1">
                    <a href="/disclosures/ugc-public-disclosure-compliance" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8] font-bold" onClick={closeMobileMenu}>
                      UGC PUBLIC DISCLOSURE COMPLIANCE
                    </a>
                    <a href="/disclosures/undertaking" className="block py-2 px-6 text-sm text-gray-700 hover:bg-[#e8dcc8]" onClick={closeMobileMenu}>
                      Undertaking
                    </a>
                  </div>
                )}
              </li>

              {/* CONTACT */}
              <li className="border-b border-gray-200">
                <a
                  href="/contact"
                  className="block py-3 px-4 text-sm font-bold text-black uppercase hover:bg-[#e8dcc8] transition-colors rounded"
                  onClick={closeMobileMenu}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
