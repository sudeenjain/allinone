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
  offices: [
    {
      id: "main-office",
      type: "Main Office",
      badgeColor: "blue",
      address1: "Plot No.8, Royal Ind Estate",
      address2: "8/A National Highway, Lalpar, Morvi",
      city: "Rajkot",
      state: "Gujarat",
      pin: "363642",
      country: "India",
      phone: "+91 98255 38719 / 98255 83846",
      email: "morbi@allinonetech.co.in",
      mapUrl: null // Extensible slot for verified map URL (not invented)
    },
    {
      id: "registered-office",
      type: "Registered Office",
      badgeColor: "emerald",
      address1: "Plot No.8, Royal Ind Estate",
      address2: "8/A National Highway, Lalpar, Morvi",
      city: "Rajkot",
      state: "Gujarat",
      pin: "363642",
      country: "India",
      phone: "02822 - 232211 / +91 98255 38719",
      email: "morbi@allinonetech.co.in",
      mapUrl: null // Extensible slot for verified map URL (not invented)
    }
  ],
  locations: {
    mainOffice: {
      type: "Main Office",
      address: "Plot No.8, Royal Ind Estate, 8/A National Highway, Lalpar, Morvi, Rajkot, Gujarat - 363642, India",
      phone: "+91 98255 38719 / 98255 83846"
    },
    registeredOffice: {
      type: "Registered Office",
      address: "Plot No.8, Royal Ind Estate, 8/A National Highway, Lalpar, Morvi, Rajkot, Gujarat - 363642, India",
      phone: "02822 - 232211 / +91 98255 38719"
    },
    headOffice: {
      type: "Registered Office",
      address: "Plot No.8, Royal Ind Estate, 8/A National Highway, Lalpar, Morvi, Rajkot, Gujarat - 363642, India",
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
      name: "Valued Clients",
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

// 8 Official Corporate Services Extracted 100% Verbatim from "Our Services.docx"
const OUR_SERVICES_DATA = [
  {
    id: "laboratory-set-up",
    title: "Laboratory Set Up",
    icon: "layout-grid",
    color: "blue",
    badge: "BIS / ISI Standards",
    divisionId: "certification",
    divisionLink: "certification/",
    description: "Establishing a laboratory is a critical step in ensuring that testing and quality control processes meet industry standards. We offer comprehensive laboratory setup services that include designing the lab layout, selecting appropriate equipment, and ensuring compliance with regulatory requirements. Our team of experts will work closely with you to understand your specific needs and create a lab environment that optimizes workflow efficiency and safety. We also provide guidance on proper waste management, storage solutions, and safety protocols. Our goal is to ensure that your laboratory is equipped to perform accurate and reliable testing, thereby supporting your efforts in obtaining ISI certification from BIS in India.",
    highlights: [
      "Lab layout & workflow optimization",
      "Regulatory compliance & safety protocols",
      "Waste management & storage architecture",
      "BIS / ISI certification enablement"
    ]
  },
  {
    id: "laboratory-instruments-supply",
    title: "Laboratory Instruments Supply",
    icon: "microscope",
    color: "indigo",
    badge: "Caltronics Equipment",
    divisionId: "laboratory-instruments",
    divisionLink: "laboratory-instruments/",
    description: "Having the right instruments is crucial for any laboratory aiming to achieve high-quality results. We supply a wide range of laboratory instruments, from basic tools to advanced analytical devices, ensuring that all your testing needs are met. Our products are sourced from reputable manufacturers and come with warranties and after-sales support. We understand the importance of precision and reliability in laboratory testing, which is why we only supply instruments that adhere to the highest industry standards. Our supply chain is designed to be efficient and responsive, ensuring that you receive your instruments promptly and can maintain continuous operation in your lab.",
    highlights: [
      "Full spectrum: basic tools to advanced analytical devices",
      "Caltronics brand with manufacturer warranties",
      "Dedicated after-sales support & spare parts",
      "Efficient, responsive nationwide supply chain"
    ]
  },
  {
    id: "training-for-testing",
    title: "Training for Testing",
    icon: "graduation-cap",
    color: "emerald",
    badge: "Staff Proficiency",
    divisionId: "certification",
    divisionLink: "certification/",
    description: "Proper training is essential for the effective use of laboratory equipment and for conducting tests that meet regulatory standards. We offer comprehensive training programs tailored to your laboratory's specific requirements. Our training covers the operation of laboratory instruments, safety procedures, and the methodologies required for accurate testing. Our experienced trainers use a hands-on approach to ensure that your staff is proficient in the use of all equipment and understands the protocols necessary for obtaining reliable test results. By investing in our training services, you ensure that your laboratory operates at peak efficiency and maintains compliance with BIS standards.",
    highlights: [
      "Customized hands-on operational training",
      "Safety procedures & regulatory test protocols",
      "Methodologies for accurate, reproducible results",
      "Continuous BIS compliance maintenance"
    ]
  },
  {
    id: "turn-key-project-experts",
    title: "Turn-Key Project Experts",
    icon: "layers",
    color: "cyan",
    badge: "End-to-End Solutions",
    divisionId: "third-party-inspection",
    divisionLink: "third-party-inspection/",
    description: "Managing a laboratory setup or upgrade can be a complex and time-consuming process. As turn-key project experts, we take the hassle out of this process by offering end-to-end solutions. From initial planning and design to procurement, installation, and commissioning, we handle every aspect of your project. Our team of specialists ensures that your laboratory is fully operational and meets all regulatory requirements upon completion. We take pride in our ability to deliver projects on time and within budget, providing you with a seamless and stress-free experience. With our turn-key solutions, you can focus on your core activities while we take care of the details.",
    highlights: [
      "Initial planning, architectural & engineering design",
      "Complete procurement, installation & commissioning",
      "On-time & within-budget project delivery",
      "Fully operational, turnkey compliance handover"
    ]
  },
  {
    id: "subsidy-project-experts",
    title: "Subsidy Project Experts",
    icon: "badge-percent",
    color: "amber",
    badge: "Financial Grants & Subsidies",
    divisionId: "third-party-inspection",
    divisionLink: "third-party-inspection/",
    description: "Navigating the complexities of subsidy programs can be daunting. Our subsidy project experts are here to help you identify and apply for financial assistance programs that can support your laboratory setup or expansion. We have extensive knowledge of the various subsidies available for businesses in India and can guide you through the application process, ensuring that you meet all eligibility criteria and submit the required documentation. Our goal is to help you secure the funding needed to enhance your laboratory capabilities without overburdening your budget. By leveraging our expertise, you can maximize your chances of obtaining financial support.",
    highlights: [
      "Identification of state & central financial schemes",
      "Eligibility criteria verification & documentation",
      "Guidance through formal government application",
      "Budget optimization for lab expansion"
    ]
  },
  {
    id: "testing-of-all-types-of-products",
    title: "Testing of All Types of Products",
    icon: "check-square",
    color: "purple",
    badge: "Multi-Sector Compliance",
    divisionId: "certification",
    divisionLink: "certification/",
    description: "Our laboratory services cover a wide range of product testing to meet the diverse needs of our clients. Whether you are in the food, pharmaceuticals, textiles, or electronics industry, we have the expertise and equipment to test your products for compliance with ISI standards. Our testing procedures are rigorous and adhere to the highest industry standards, ensuring that your products meet all regulatory requirements. By choosing our testing services, you gain access to reliable data that can help you improve product quality, ensure consumer safety, and maintain compliance with BIS certification requirements.",
    highlights: [
      "Multi-sector testing: Food, Pharma, Textiles, Ceramics, Electronics",
      "Rigorous ISI standard compliance verification",
      "Accurate, audit-ready testing data generation",
      "Enhanced consumer safety & certification confidence"
    ]
  },
  {
    id: "instruments-calibration",
    title: "Instruments Calibration",
    icon: "compass",
    color: "violet",
    badge: "Traceable Metrology",
    divisionId: "calibration",
    divisionLink: "calibration/",
    description: "Accurate testing results depend on the precision of your laboratory instruments. We offer professional calibration services to ensure that your instruments are functioning correctly and providing accurate measurements. Our calibration services are performed by trained technicians using state-of-the-art equipment, and we provide detailed calibration reports for your records. Regular calibration not only ensures compliance with regulatory standards but also extends the life of your instruments and maintains the integrity of your testing processes. With our calibration services, you can have confidence in the accuracy and reliability of your laboratory results.",
    highlights: [
      "Certified metrology technicians & master standards",
      "Detailed, traceable calibration reports & certificates",
      "Extended instrument longevity & drift elimination",
      "Audit readiness for ISO, BIS, and NABL standards"
    ]
  },
  {
    id: "exporters-of-all-types-of-products",
    title: "Exporters of All Types of Products",
    icon: "plane-takeoff",
    color: "rose",
    badge: "Global Trade & Logistics",
    divisionId: "third-party-inspection",
    divisionLink: "third-party-inspection/",
    description: "In addition to our laboratory and consultancy services, we also assist clients in exporting their products. Our export services include guidance on regulatory compliance, documentation, and logistics. We help you navigate the complexities of international trade, ensuring that your products meet the standards and requirements of the destination countries. Our team is experienced in handling the export process for a variety of products, ensuring smooth and efficient shipment. By leveraging our export expertise, you can expand your market reach and grow your business internationally with confidence.",
    highlights: [
      "International trade & destination country compliance",
      "Comprehensive export documentation assistance",
      "End-to-end logistics coordination & shipment handling",
      "Global market expansion for Indian manufacturers"
    ]
  }
];

if (typeof module !== 'undefined') {
  module.exports = { COMPANY_DATA, OUR_SERVICES_DATA };
}

