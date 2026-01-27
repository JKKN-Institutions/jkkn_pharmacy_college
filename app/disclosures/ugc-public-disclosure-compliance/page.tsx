import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function UGCPublicDisclosureCompliancePage() {
  return (
    <div className="min-h-screen bg-[#f5f1e8]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Page Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-8">
          UGC PUBLIC DISCLOSURE COMPLIANCE
        </h1>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="text-justify">
            In compliance with the University Grants Commission (UGC) regulations, JKKN College of Pharmacy is committed to maintaining transparency and accountability in all aspects of its operations. This page provides comprehensive information regarding our compliance with UGC public disclosure norms.
          </p>

          {/* Compliance Overview */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance Overview</h2>
            <p className="text-justify mb-3">
              The University Grants Commission mandates that all higher education institutions under its purview must publicly disclose relevant information regarding their academic, administrative, and financial operations. This ensures transparency and helps stakeholders make informed decisions.
            </p>
          </div>

          {/* Key Areas of Disclosure */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Areas of Disclosure</h2>
            <p className="text-justify mb-3">
              JKKN College of Pharmacy maintains compliance with UGC regulations in the following areas:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Institutional information and accreditation status</li>
              <li>Academic programs and curriculum details</li>
              <li>Faculty qualifications and profiles</li>
              <li>Infrastructure and facilities</li>
              <li>Student enrollment and performance data</li>
              <li>Fee structure and financial information</li>
              <li>Research activities and publications</li>
              <li>Governance and administration</li>
            </ul>
          </div>

          {/* Regulatory Framework */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Framework</h2>
            <p className="text-justify mb-3">
              Our compliance framework is based on:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>UGC (Public Disclosure) Regulations</li>
              <li>AICTE Mandatory Disclosure Guidelines</li>
              <li>Pharmacy Council of India requirements</li>
              <li>NAAC accreditation standards</li>
              <li>State and Central Government directives</li>
            </ul>
          </div>

          {/* Transparency Commitment */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Transparency</h2>
            <p className="text-justify mb-3">
              JKKN College of Pharmacy is dedicated to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Regular updates of all mandatory disclosures</li>
              <li>Easy access to information for all stakeholders</li>
              <li>Accurate and timely reporting of institutional data</li>
              <li>Compliance with all regulatory requirements</li>
              <li>Continuous improvement in transparency practices</li>
            </ul>
          </div>

          {/* Access to Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Access to Information</h2>
            <p className="text-justify">
              All mandatory disclosure information is available on our website and is regularly updated. Stakeholders can access detailed information through the respective sections of our website or contact our administration office for specific queries.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-justify mb-4">
              For any queries regarding UGC public disclosure compliance, please contact:
            </p>
            <div className="text-gray-700 space-y-1">
              <p className="font-semibold">JKKN College of Pharmacy</p>
              <p>
                <strong>Phone:</strong> +919345855001
              </p>
              <p>
                <strong>Email:</strong> info@jkkn.ac.in
              </p>
              <p>
                <strong>Address:</strong> JKKN College of Pharmacy,
              </p>
              <p>Natarajapuram, NH-544 (Salem To Coimbatore National Highway),</p>
              <p>Kumarapalayam (TK), Namakkal (DT). Tamil Nadu. 638183.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
