'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [affiliationSubmenuOpen, setAffiliationSubmenuOpen] = useState(false)
  const [strategicPlanSubmenuOpen, setStrategicPlanSubmenuOpen] = useState(false)
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

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="bg-[#f5f0e8] shadow-[0_2px_4px_rgba(0,0,0,0.1)] sticky top-0 z-[1000]">
      <div className="max-w-[1600px] mx-auto px-5">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-5">
          {/* Logo Section */}
          <div className="flex flex-col items-start py-2.5">
            <Image
              src="/images/logo.png"
              alt="JKKN Logo"
              width={180}
              height={80}
              className="object-contain mb-1"
              priority
            />
            
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="hidden max-lg:flex flex-col gap-1.5 border-none cursor-pointer p-2.5 z-[1001] justify-self-end bg-transparent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-black transition-all duration-300"></span>
            <span className="w-6 h-0.5 bg-black transition-all duration-300"></span>
            <span className="w-6 h-0.5 bg-black transition-all duration-300"></span>
          </button>

          {/* Navigation */}
          <nav
            className={`flex flex-col justify-self-center max-lg:fixed max-lg:top-0 max-lg:bg-[#f5f0e8] max-lg:shadow-[-2px_0_10px_rgba(0,0,0,0.1)] max-lg:pt-20 max-lg:px-5 max-lg:pb-5 max-lg:overflow-y-auto max-lg:z-[999] max-lg:w-[300px] max-lg:h-screen transition-all duration-300 ${
              mobileMenuOpen ? 'max-lg:right-0' : 'max-lg:-right-full'
            }`}
          >
            {/* First Row */}
            <ul className="flex list-none justify-start flex-wrap max-lg:flex-col max-lg:mb-5">
              <li>
                <a
                  href="/"
                  className="text-black no-underline text-[13px] font-bold py-2.5 px-6 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] max-[1400px]:text-xs max-[1400px]:px-4 max-xl:text-[11px] max-xl:px-3 max-lg:py-4 max-lg:px-2.5 max-lg:text-sm max-lg:border-b max-lg:border-[#f0f0f0]"
                >
                  HOME
                </a>
              </li>
              <li
                className="relative flex items-center max-lg:w-full max-lg:border-b max-lg:border-[#f0f0f0]"
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <span
                  className="text-black no-underline text-[13px] font-bold py-2.5 px-6 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] max-[1400px]:text-xs max-[1400px]:px-4 max-xl:text-[11px] max-xl:px-3 max-lg:py-4 max-lg:px-2.5 max-lg:text-sm cursor-default"
                >
                  ABOUT
                </span>
                <span className="text-[10px] text-black pointer-events-none -ml-2 max-lg:ml-auto max-lg:mr-2.5">˅</span>

                {/* About Dropdown */}
                {mounted && aboutDropdownOpen && (
                  <div className="absolute top-full left-0 bg-[#f5f0e8] shadow-lg py-2 z-[9999] max-lg:hidden">
                    <a href="/about/overview" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      About us Overview
                    </a>
                    <a href="/about/vision-mission" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Vision & Mission
                    </a>
                    <a href="/about/institutional-distinctiveness" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Institutional distinctiveness
                    </a>
                    <a href="/about/our-trust" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Our Trust
                    </a>
                    <a href="/about/our-management" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Our Management
                    </a>
                    <a href="/about/our-institutions" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Our Institutions
                    </a>
                    <a href="/about/the-principal" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      The Principal
                    </a>
                    <a href="/about/administration" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Administration
                    </a>
                    <a href="/about/cpio" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Central Public Information Officer
                    </a>
                    <a href="/about/why-jkkn" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Why JKKN?
                    </a>
                    <a href="/about/peos" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      PEO'S
                    </a>
                    <a href="/about/quality-policy" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Quality Policy
                    </a>
                    <a href="/about/general-rules" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      General Rules and Regulations
                    </a>
                    <div
                      className="relative"
                      onMouseEnter={() => setAffiliationSubmenuOpen(true)}
                      onMouseLeave={() => setAffiliationSubmenuOpen(false)}
                    >
                      <span className="flex items-center justify-between px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap cursor-default">
                        <span>Affiliation Details</span>
                        <span className="text-xs">›</span>
                      </span>
                      {mounted && affiliationSubmenuOpen && (
                        <div className="absolute left-full top-0 bg-[#f5f0e8] shadow-lg min-w-[320px] py-2 z-[9999]">
                          <a href="/about/affiliation-details/aicte" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                            AICTE Approval
                          </a>
                          <a href="/about/affiliation-details/pharmacy-council" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                            Pharmacy Council Approval
                          </a>
                          <a href="/about/affiliation-details/university" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                            University Affiliation
                          </a>
                        </div>
                      )}
                    </div>
                    <a href="/about/institutional-development-plan" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Institutional Development Plan
                    </a>
                    <div
                      className="relative"
                      onMouseEnter={() => setStrategicPlanSubmenuOpen(true)}
                      onMouseLeave={() => setStrategicPlanSubmenuOpen(false)}
                    >
                      <span className="flex items-center justify-between px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap cursor-default">
                        <span>Institutional Strategic Plan</span>
                        <span className="text-xs">›</span>
                      </span>
                      {mounted && strategicPlanSubmenuOpen && (
                        <div className="absolute left-full top-0 bg-[#f5f0e8] shadow-lg min-w-[380px] py-2 z-[9999]">
                          <a href="/about/institutional-strategic-plan/edc" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                            Strategic plan for EDC
                          </a>
                          <a href="/about/institutional-strategic-plan/coe" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                            Strategic plan for COE
                          </a>
                          <a href="/about/institutional-strategic-plan/gc" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                            Strategic plan for GC
                          </a>
                          <a href="/about/institutional-strategic-plan/interdisciplinary-research" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                            Strategic plan for interdisciplinary research
                          </a>
                          <a href="/about/institutional-strategic-plan/pharmaceutical-education" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                            Strategic plan for Pharmaceutical education
                          </a>
                          <a href="/about/institutional-strategic-plan/research-enhancement" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                            Strategic plan for research enhancement
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </li>
              <li
                className="relative flex items-center max-lg:w-full max-lg:border-b max-lg:border-[#f0f0f0]"
                onMouseEnter={() => setProgramsDropdownOpen(true)}
                onMouseLeave={() => setProgramsDropdownOpen(false)}
              >
                <span
                  className="text-black no-underline text-[13px] font-bold py-2.5 px-6 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] max-[1400px]:text-xs max-[1400px]:px-4 max-xl:text-[11px] max-xl:px-3 max-lg:py-4 max-lg:px-2.5 max-lg:text-sm cursor-default"
                >
                  PROGRAMS OFFERED
                </span>
                <span className="text-[10px] text-black pointer-events-none -ml-2 max-lg:ml-auto max-lg:mr-2.5">˅</span>

                {/* Programs Offered Dropdown */}
                {mounted && programsDropdownOpen && (
                  <div className="absolute top-full left-0 bg-[#f5f0e8] shadow-lg py-2 z-[9999] max-lg:hidden">
                    <div
                      className="relative"
                      onMouseEnter={() => setUgProgramSubmenuOpen(true)}
                      onMouseLeave={() => setUgProgramSubmenuOpen(false)}
                    >
                      <span className="flex items-center justify-between px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap cursor-default">
                        <span>UG Program</span>
                        <span className="text-xs">›</span>
                      </span>
                      {mounted && ugProgramSubmenuOpen && (
                        <div className="absolute left-full top-0 bg-[#f5f0e8] shadow-lg min-w-[280px] py-2 z-[9999]">
                          <a href="/programs/ug-program/b-pharmacy" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                            B-Pharmacy
                          </a>
                          <a href="/programs/ug-program/b-pharmacy-lateral-entry" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
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
                      <span className="flex items-center justify-between px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap cursor-default">
                        <span>PG Program</span>
                        <span className="text-xs">›</span>
                      </span>
                      {mounted && pgProgramSubmenuOpen && (
                        <div className="absolute left-full top-0 bg-[#f5f0e8] shadow-lg min-w-[320px] py-2 z-[9999]">
                          <div
                            className="relative"
                            onMouseEnter={() => setMPharmacySubmenuOpen(true)}
                            onMouseLeave={() => setMPharmacySubmenuOpen(false)}
                          >
                            <a href="/programs/pg-program/m-pharmacy" className="flex items-center justify-between px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                              <span>M. Pharmacy</span>
                              <span className="text-xs">›</span>
                            </a>
                            {mounted && mPharmacySubmenuOpen && (
                              <div className="absolute left-full top-0 bg-[#f5f0e8] shadow-lg min-w-[280px] py-2 z-[9999]">
                                <a href="/programs/pg-program/m-pharmacy/pharmacology" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                                  Pharmacology
                                </a>
                                <a href="/programs/pg-program/m-pharmacy/pharmaceutical-analysis" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                                  Pharmaceutical Analysis
                                </a>
                                <a href="/programs/pg-program/m-pharmacy/pharmaceutical-chemistry" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                                  Pharmaceutical Chemistry
                                </a>
                                <a href="/programs/pg-program/m-pharmacy/pharmacy-practice" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                                  Pharmacy Practice
                                </a>
                                <a href="/programs/pg-program/m-pharmacy/pharmaceutics" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                                  Pharmaceutics
                                </a>
                              </div>
                            )}
                          </div>
                          <a href="/programs/pg-program/pharm-d" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                            PHARM.D (Doctor of Pharmacy)
                          </a>
                          <a href="/programs/pg-program/pharm-d-post-baccalaureate" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                            PHARM D (POST BACCALAUREATE)
                          </a>
                        </div>
                      )}
                    </div>
                    <a href="/programs/phd" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      PhD
                    </a>
                  </div>
                )}
              </li>
              <li className="flex items-center max-lg:w-full max-lg:border-b max-lg:border-[#f0f0f0]">
                <span
                  className="text-black no-underline text-[13px] font-bold py-2.5 px-6 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] max-[1400px]:text-xs max-[1400px]:px-4 max-xl:text-[11px] max-xl:px-3 max-lg:py-4 max-lg:px-2.5 max-lg:text-sm cursor-default"
                >
                  DEPARTMENTS
                </span>
                <span className="text-[10px] text-black pointer-events-none -ml-2 max-lg:ml-auto max-lg:mr-2.5">˅</span>
              </li>
              <li
                className="relative flex items-center max-lg:w-full max-lg:border-b max-lg:border-[#f0f0f0]"
                onMouseEnter={() => setAcademicDropdownOpen(true)}
                onMouseLeave={() => setAcademicDropdownOpen(false)}
              >
                <span
                  className="text-black no-underline text-[13px] font-bold py-2.5 px-6 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] max-[1400px]:text-xs max-[1400px]:px-4 max-xl:text-[11px] max-xl:px-3 max-lg:py-4 max-lg:px-2.5 max-lg:text-sm cursor-default"
                >
                  ACADEMIC
                </span>
                <span className="text-[10px] text-black pointer-events-none -ml-2 max-lg:ml-auto max-lg:mr-2.5">˅</span>

                {/* Academic Dropdown */}
                {mounted && academicDropdownOpen && (
                  <div className="absolute top-full left-0 bg-[#f5f0e8] shadow-lg py-2 z-[9999] max-lg:hidden max-h-[calc(100vh-100px)] overflow-y-auto">
                    <a href="/academic/admission-process" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Admission Process
                    </a>
                    <a href="https://calendar.google.com/calendar/embed?src=c_ef5ec993b1425c37ba43cb1a8797b2dd1a38ef6e1cea9640b2ed6c9b3c354f29%40group.calendar.google.com&ctz=Asia%2FKolkata&mode=AGENDA" target="_blank" rel="noopener noreferrer" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Academic Calendar
                    </a>
                    <div
                      className="relative"
                      onMouseEnter={() => setTimeTableSubmenuOpen(true)}
                      onMouseLeave={() => setTimeTableSubmenuOpen(false)}
                    >
                      <span className="flex items-center justify-between px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap cursor-default">
                        <span>Time Table</span>
                        <span className="text-xs">›</span>
                      </span>
                      {mounted && timeTableSubmenuOpen && (
                        <div className="absolute left-full top-0 bg-[#f5f0e8] shadow-lg min-w-[280px] py-2 z-[9999]">
                          <a href="/academic/time-table/bpharm" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                            B.Pharm Time Table 2024-25
                          </a>
                          <a href="/academic/time-table/pharmd" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                            Pharm.D Time Table 2024-25
                          </a>
                          <a href="/academic/time-table/mpharm" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                            M.Pharm Time Table 2024-25
                          </a>
                        </div>
                      )}
                    </div>
                    <a href="/academic/exam-schedule" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Exam Schedule
                    </a>
                    <a href="/academic/ordinances" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Ordinances Pertaining To Examinations
                    </a>
                    <div
                      className="relative"
                      onMouseEnter={() => setCosPosSubmenuOpen(true)}
                      onMouseLeave={() => setCosPosSubmenuOpen(false)}
                    >
                      <span className="flex items-center justify-between px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap cursor-default">
                        <span>COs _ POs</span>
                        <span className="text-xs">›</span>
                      </span>
                      {mounted && cosPosSubmenuOpen && (
                        <div className="absolute left-full top-0 bg-[#f5f0e8] shadow-lg min-w-[200px] py-2 z-[9999]">
                          <a href="/academic/cos-pos/bpharm" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                            B.PHARM
                          </a>
                          <a href="/academic/cos-pos/mpharm" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                            M.PHARM
                          </a>
                          <a href="/academic/cos-pos/pharmd" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                            PHARM D
                          </a>
                        </div>
                      )}
                    </div>
                    <a href="/academic/attainment-cos-pos" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Attainment of COs and POs
                    </a>
                    <a href="/academic/study-material" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Study Material
                    </a>
                    <a href="/academic/faculty-profile" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Faculty Profile
                    </a>
                    <a href="/academic/details-of-students" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Details of Students
                    </a>
                  </div>
                )}
              </li>
              <li
                className="relative flex items-center max-lg:w-full max-lg:border-b max-lg:border-[#f0f0f0]"
                onMouseEnter={() => setFacilitiesDropdownOpen(true)}
                onMouseLeave={() => setFacilitiesDropdownOpen(false)}
              >
                <span
                  className="text-black no-underline text-[13px] font-bold py-2.5 px-6 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] max-[1400px]:text-xs max-[1400px]:px-4 max-xl:text-[11px] max-xl:px-3 max-lg:py-4 max-lg:px-2.5 max-lg:text-sm cursor-default"
                >
                  FACILITIES
                </span>
                <span className="text-[10px] text-black pointer-events-none -ml-2 max-lg:ml-auto max-lg:mr-2.5">˅</span>

                {/* Facilities Dropdown */}
                {mounted && facilitiesDropdownOpen && (
                  <div className="absolute top-full left-0 bg-[#f5f0e8] shadow-lg py-2 z-[9999] max-lg:hidden max-h-[calc(100vh-100px)] overflow-y-auto">
                    <a href="/facilities/class-room" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Class Room
                    </a>
                    <a href="/facilities/seminar-hall" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Seminar Hall
                    </a>
                    <a href="/facilities/lab" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Lab
                    </a>
                    <a href="/facilities/central-facilities" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Central Facilities
                    </a>
                    <a href="/facilities/library" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Library
                    </a>
                    <a href="/facilities/internship-opportunities" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Internship opportunities for students
                    </a>
                    <a href="/facilities/hostel" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      hostel
                    </a>
                    <a href="/facilities/sports" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Sports
                    </a>
                    <a href="/facilities/food-court" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Food Court
                    </a>
                    <a href="/facilities/transport" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Transport
                    </a>
                    <a href="/facilities/health-facilities" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Health Facilities
                    </a>
                    <a href="/facilities/ambulance-services" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Ambulance Services
                    </a>
                    <a href="/facilities/wifi" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Wifi
                    </a>
                    <a href="/facilities/bank-post-office" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Bank & Post Office
                    </a>
                    <a href="/facilities/nss" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      National Service Scheme (NSS)
                    </a>
                    <a href="/facilities/animal-house" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Animal House Facility
                    </a>
                    <a href="/facilities/barrier-free-environment" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Disabled-friendly and Barrier Free Environment
                    </a>
                  </div>
                )}
              </li>
              <li className="max-lg:border-b max-lg:border-[#f0f0f0]">
                <a
                  href="/nacc"
                  className="text-black no-underline text-[13px] font-bold py-2.5 px-6 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] max-[1400px]:text-xs max-[1400px]:px-4 max-xl:text-[11px] max-xl:px-3 max-lg:py-4 max-lg:px-2.5 max-lg:text-sm"
                >
                  NACC
                </a>
              </li>
              <li className="max-lg:border-b max-lg:border-[#f0f0f0]">
                <a
                  href="/iqac"
                  className="text-black no-underline text-[13px] font-bold py-2.5 px-6 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] max-[1400px]:text-xs max-[1400px]:px-4 max-xl:text-[11px] max-xl:px-3 max-lg:py-4 max-lg:px-2.5 max-lg:text-sm"
                >
                  IQAC
                </a>
              </li>
              <li className="max-lg:border-b max-lg:border-[#f0f0f0]">
                <a
                  href="/alumni"
                  className="text-black no-underline text-[13px] font-bold py-2.5 px-6 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] max-[1400px]:text-xs max-[1400px]:px-4 max-xl:text-[11px] max-xl:px-3 max-lg:py-4 max-lg:px-2.5 max-lg:text-sm"
                >
                  ALUMNI
                </a>
              </li>
            </ul>

            {/* Second Row */}
            <ul className="flex list-none justify-start flex-wrap max-lg:flex-col max-lg:mb-5">
              <li className="max-lg:border-b max-lg:border-[#f0f0f0]">
                <a
                  href="/nirf"
                  className="text-black no-underline text-[13px] font-bold py-2.5 px-6 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] max-[1400px]:text-xs max-[1400px]:px-4 max-xl:text-[11px] max-xl:px-3 max-lg:py-4 max-lg:px-2.5 max-lg:text-sm"
                >
                  NIRF
                </a>
              </li>
              <li className="max-lg:border-b max-lg:border-[#f0f0f0]">
                <a
                  href="/research"
                  className="text-black no-underline text-[13px] font-bold py-2.5 px-6 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] max-[1400px]:text-xs max-[1400px]:px-4 max-xl:text-[11px] max-xl:px-3 max-lg:py-4 max-lg:px-2.5 max-lg:text-sm"
                >
                  RESEARCH
                </a>
              </li>
              <li className="flex items-center max-lg:w-full max-lg:border-b max-lg:border-[#f0f0f0]">
                <span
                  className="text-black no-underline text-[13px] font-bold py-2.5 px-6 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] max-[1400px]:text-xs max-[1400px]:px-4 max-xl:text-[11px] max-xl:px-3 max-lg:py-4 max-lg:px-2.5 max-lg:text-sm cursor-default"
                >
                  PLACEMENT
                </span>
                <span className="text-[10px] text-black pointer-events-none -ml-2 max-lg:ml-auto max-lg:mr-2.5">˅</span>
              </li>
              <li
                className="relative flex items-center max-lg:w-full max-lg:border-b max-lg:border-[#f0f0f0]"
                onMouseEnter={() => setCommitteeDropdownOpen(true)}
                onMouseLeave={() => setCommitteeDropdownOpen(false)}
              >
                <span
                  className="text-black no-underline text-[13px] font-bold py-2.5 px-6 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] max-[1400px]:text-xs max-[1400px]:px-4 max-xl:text-[11px] max-xl:px-3 max-lg:py-4 max-lg:px-2.5 max-lg:text-sm cursor-default"
                >
                  COMMITTEE
                </span>
                <span className="text-[10px] text-black pointer-events-none -ml-2 max-lg:ml-auto max-lg:mr-2.5">˅</span>

                {/* Committee Dropdown */}
                {mounted && committeeDropdownOpen && (
                  <div className="absolute top-full left-0 bg-[#f5f0e8] shadow-lg py-2 z-[9999] max-lg:hidden max-h-[calc(100vh-100px)] overflow-y-auto">
                    <a href="/committee/various-committees" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Various Committees
                    </a>
                    <a href="/committee/sports-committee" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Sports committee
                    </a>
                    <a href="/committee/discipline-committee" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Discipline Committee
                    </a>
                    <a href="/committee/anti-ragging-committee" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Anti-Ragging Committee
                    </a>
                    <a href="/committee/malpractice-prevention-committee" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Malpractice Prevention Committee
                    </a>
                    <a href="/committee/internal-complaints-committee" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      INTERNAL COMPLAINTS COMMITTEE
                    </a>
                    <a href="/committee/cultural-committee" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      CULTURAL COMMITTEE
                    </a>
                    <a href="/committee/student-grievance-redressal-committee" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Student Grievance Redressal Committee (SGRC)
                    </a>
                    <a href="/committee/equal-opportunity-cell" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Equal Opportunity Cell (Eoc)
                    </a>
                    <a href="/committee/sedg-cell" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Socio-economically Disadvantaged Group (SEDG) Cell
                    </a>
                  </div>
                )}
              </li>
              <li
                className="relative flex items-center max-lg:w-full max-lg:border-b max-lg:border-[#f0f0f0]"
                onMouseEnter={() => setOthersDropdownOpen(true)}
                onMouseLeave={() => setOthersDropdownOpen(false)}
              >
                <span
                  className="text-black no-underline text-[13px] font-bold py-2.5 px-6 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] max-[1400px]:text-xs max-[1400px]:px-4 max-xl:text-[11px] max-xl:px-3 max-lg:py-4 max-lg:px-2.5 max-lg:text-sm cursor-default"
                >
                  OTHERS
                </span>
                <span className="text-[10px] text-black pointer-events-none -ml-2 max-lg:ml-auto max-lg:mr-2.5">˅</span>

                {/* Others Dropdown */}
                {mounted && othersDropdownOpen && (
                  <div className="absolute top-full left-0 bg-[#f5f0e8] shadow-lg py-2 z-[9999] max-lg:hidden max-h-[calc(100vh-100px)] overflow-y-auto">
                    <a href="/others/best-practice" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Best Practice
                    </a>
                    <a href="/others/competitive-examination" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Competitive Examination and Carrier
                    </a>
                    <a href="/others/digital-campus" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Digital Campus
                    </a>
                    <div
                      className="relative"
                      onMouseEnter={() => setSocialWorkSubmenuOpen(true)}
                      onMouseLeave={() => setSocialWorkSubmenuOpen(false)}
                    >
                      <span className="flex items-center justify-between px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap cursor-default">
                        <span>social work activities</span>
                        <span className="text-xs">›</span>
                      </span>
                      {mounted && socialWorkSubmenuOpen && (
                        <div className="absolute left-full top-0 bg-[#f5f0e8] shadow-lg min-w-[250px] py-2 z-[9999]">
                          <a href="/others/social-work-activities/youth-red-cross" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                            Youth-red-cross
                          </a>
                          <a href="/others/social-work-activities/red-ribbon-club" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                            Red-ribbon-club
                          </a>
                          <a href="/others/social-work-activities/national-service-scheme" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors">
                            National service scheme
                          </a>
                        </div>
                      )}
                    </div>
                    <a href="/others/drug-information-center" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Drug Information Center
                    </a>
                    <a href="/others/national-innovation-startup-policy" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      National Innovation and Startup Policy 2020-2021
                    </a>
                    <a href="/others/institutions-innovation-council" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Institutions Innovation Council
                    </a>
                    <a href="/others/incubation-centre" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Incubation Centre
                    </a>
                    <a href="/others/entrepreneurship-development-cell" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Entrepreneurship Development Cell
                    </a>
                    <a href="/others/feedback-analysis" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Feedback analysis
                    </a>
                    <a href="/others/ipa-bhavani-kumarapalayam" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      IPA-Bhavani-Kumarapalayam Local Branch
                    </a>
                    <a href="/others/privacy-policy" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Privacy Policy
                    </a>
                    <a href="/others/audit-statements-finance" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Audit Statements Finance
                    </a>
                    <a href="/others/newsletters" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Newsletters
                    </a>
                  </div>
                )}
              </li>
              <li className="max-lg:border-b max-lg:border-[#f0f0f0]">
                <a
                  href="/gallery"
                  className="text-black no-underline text-[13px] font-bold py-2.5 px-6 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] max-[1400px]:text-xs max-[1400px]:px-4 max-xl:text-[11px] max-xl:px-3 max-lg:py-4 max-lg:px-2.5 max-lg:text-sm"
                >
                  GALLERY
                </a>
              </li>
              <li className="max-lg:border-b max-lg:border-[#f0f0f0]">
                <a
                  href="/circulars"
                  className="text-black no-underline text-[13px] font-bold py-2.5 px-6 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] max-[1400px]:text-xs max-[1400px]:px-4 max-xl:text-[11px] max-xl:px-3 max-lg:py-4 max-lg:px-2.5 max-lg:text-sm"
                >
                  CIRCULARS AND NOTICES
                </a>
              </li>
              <li
                className="relative flex items-center max-lg:w-full max-lg:border-b max-lg:border-[#f0f0f0]"
                onMouseEnter={() => setMandatoryDisclosuresDropdownOpen(true)}
                onMouseLeave={() => setMandatoryDisclosuresDropdownOpen(false)}
              >
                <span
                  className="text-black no-underline text-[13px] font-bold py-2.5 px-6 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] max-[1400px]:text-xs max-[1400px]:px-4 max-xl:text-[11px] max-xl:px-3 max-lg:py-4 max-lg:px-2.5 max-lg:text-sm cursor-default"
                >
                  MANDATORY DISCLOSURES
                </span>
                <span className="text-[10px] text-black pointer-events-none -ml-2 max-lg:ml-auto max-lg:mr-2.5">˅</span>

                {/* Mandatory Disclosures Dropdown */}
                {mounted && mandatoryDisclosuresDropdownOpen && (
                  <div className="absolute top-full left-0 bg-[#f5f0e8] shadow-lg py-2 z-[9999] max-lg:hidden max-h-[calc(100vh-100px)] overflow-y-auto">
                    <a href="/disclosures/ugc-public-disclosure-compliance" className="block px-6 py-3 text-[#666666] text-[15px] font-bold hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      UGC PUBLIC DISCLOSURE COMPLIANCE
                    </a>
                    <a href="/disclosures/ugc-regulations" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      UGC Regulations and Guidelines
                    </a>
                    <a href="/disclosures/public-self-disclosure" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Public Self disclosure
                    </a>
                    <a href="/disclosures/undertaking" className="block px-6 py-2.5 text-[#666666] text-[15px] font-medium hover:bg-[#e8dcc8] transition-colors whitespace-nowrap">
                      Undertaking
                    </a>
                  </div>
                )}
              </li>
              <li className="max-lg:border-b max-lg:border-[#f0f0f0]">
                <a
                  href="/contact"
                  className="text-black no-underline text-[13px] font-bold py-2.5 px-6 block whitespace-nowrap transition-colors duration-300 uppercase hover:text-[#1a7f5a] max-[1400px]:text-xs max-[1400px]:px-4 max-xl:text-[11px] max-xl:px-3 max-lg:py-4 max-lg:px-2.5 max-lg:text-sm"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>

          {/* Search Icon */}
          <button
            className="border-none cursor-pointer p-2.5 flex items-center justify-center justify-self-end bg-transparent max-lg:ml-auto group"
            aria-label="Search"
          >
            <svg
              className="w-[22px] h-[22px] text-black group-hover:text-[#1a7f5a] transition-colors duration-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
              <path d="M20 20L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
