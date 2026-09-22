// 100% Authentic Company Data from Provided Workspace Documents
// (Our Services.docx, Updated customer-list.pdf, allinone-catalogue.pdf)

const COMPANY_DATA = {
  name: "ALL IN ONE TECHNOLOGY",
  tagline: "A House of Machinery, Laboratory & Testing",
  established: 2004,
  yearsOfExcellence: "20+ Years",
  gstin: "24AHRPD0104C1Z6",
  turnover: "₹5+ Crore (Growing stage year by year)",
  instrumentBrand: "CALTRONICS",
  brandPhilosophy: "High-tech enterprise with independent intellectual property rights. Vision: Create 'Intelligent analysis instrument' to meet enterprise needs. Mission: Make technical contribution to the development of science and technology.",
  registrations: [
    { title: "ISO Certified", desc: "International Organization for Standardization Quality Management" },
    { title: "GeM Registered", desc: "Government e-Marketplace Verified Supplier" },
    { title: "NSIC Registered", desc: "National Small Industries Corporation Certified" },
    { title: "GST Registered", desc: "GSTIN 24AHRPD0104C1Z6 Active Enterprise" },
    { title: "Export License", desc: "Authorized Exporters of Industrial Products to Global Markets" },
    { title: "Sales Tax & Service Tax", desc: "Statutory Compliant Since Inception" }
  ],
  contacts: {
    phones: [
      "+91 98255 38719",
      "+91 98255 83846",
      "+91 99780 76030"
    ],
    landline: "02822 - 232211",
    email: "morbi@allinonetech.co.in",
    website: "www.allinonetech.co.in"
  },
  locations: {
    headOffice: {
      type: "Registered Office",
      address: "ALL IN ONE TECHNOLOGY, Guest House Road, Nagar Plot - 1, Opp. Radio Center, Morbi - 363641, Gujarat, India",
      phone: "02822 - 232211 / +91 98255 38719"
    },
    factory: {
      type: "Factory / Manufacturing Facility",
      address: "Plot No. 8, Shree Hari Estate, Village: Timbdi, Morbi - 363642, Gujarat, India",
      phone: "+91 98255 83846"
    },
    rajkotBranch: {
      type: "Rajkot Branch Office",
      address: "\"Vitt Bhavan\", Second Floor, 216/217, Gondal Rd, Opp. Gurukul Road, Rajkot, Gujarat - 360002, India",
      phone: "+91 99780 76030"
    },
    ahmedabadBranch: {
      type: "Ahmedabad Branch Office",
      address: "Hubtown A-building, 7th Floor Office No.-720, Gita Mandir, Ahmedabad, Gujarat - 380022, India",
      phone: "+91 98255 38719"
    }
  },
  flagshipGovernmentProject: {
    title: "Gujarat Government Soil Health Card Scheme",
    patron: "Hon'ble Prime Minister Shri Narendra Modi",
    labsCount: "10 State Laboratories Operated",
    samplesTested: "5,00,000+ (Over 5 Lacs) Soil Samples Tested",
    cardsIssued: "5,00,000+ (Over 5 Lacs) Soil Health Cards Issued",
    departmentsServed: [
      "Universities & Academic Institutions",
      "State Agriculture Departments",
      "Government Hospitals & Health Centers",
      "Engineering Colleges & Research Labs",
      "Public Works Department (PWD)"
    ]
  },
  divisions: [
    {
      id: "certification",
      name: "Certification",
      tagline: "BIS / ISI Standards & Regulatory Compliance",
      shortDesc: "End-to-end guidance for obtaining ISI certification from the Bureau of Indian Standards (BIS) in India and ISO management systems.",
      link: "certification/",
      icon: "award"
    },
    {
      id: "laboratory-instruments",
      name: "Laboratory Instruments",
      tagline: "Caltronics Precision Analytical Equipment",
      shortDesc: "Comprehensive supply of analytical instruments from spectrophotometers, flame photometers to chromatography and titration systems.",
      link: "laboratory-instruments/",
      icon: "microscope"
    },
    {
      id: "government-projects",
      name: "Government Projects",
      tagline: "Soil Health Card Scheme & Turn-Key Labs",
      shortDesc: "Over 5,00,000 soil samples tested and cards issued across 10 Gujarat Government laboratories under the Hon'ble Prime Minister's mission.",
      link: "government-projects/",
      icon: "landmark"
    },
    {
      id: "valued-clients",
      name: "Valued Clients Logos",
      tagline: "Trusted by 246+ Industrial Leaders",
      shortDesc: "Authentic partnership with 246+ enterprises across ceramics, polymers, packaging, food & beverage, chemicals, and textiles.",
      link: "valued-clients/",
      icon: "users"
    },
    {
      id: "calibration",
      name: "Calibration",
      tagline: "Traceable Metrology & Precision Verification",
      shortDesc: "Professional instrument calibration by certified technicians using state-of-the-art reference equipment with detailed calibration reports.",
      link: "calibration/",
      icon: "compass"
    },
    {
      id: "third-party-inspection",
      name: "Third Party Inspection Work",
      tagline: "Turn-Key Projects & Quality Audits",
      shortDesc: "Shamkris-aligned 5-stage inspection workflow, turn-key project management, and rigorous product testing for market conformity.",
      link: "third-party-inspection/",
      icon: "clipboard-check"
    }
  ]
};

if (typeof module !== 'undefined') module.exports = COMPANY_DATA;
