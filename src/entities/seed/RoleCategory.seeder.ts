import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { RoleCategory } from '../roleCategory.entity';

const seedData = [
  {
    title: "Banking Operations",
    dapartment: "BFSI, Investments & Trading",
    status: true,
  },
  {
    title: "General Insurance",
    dapartment: "BFSI, Investments & Trading",
    status: true,
  },
  {
    title: "Investment Banking, Private Equity & VC",
    dapartment: "BFSI, Investments & Trading",
    status: true,
  },
  {
    title: "Lending",
    dapartment: "BFSI, Investments & Trading",
    status: true,
  },
  {
    title: "Life Insurance",
    dapartment: "BFSI, Investments & Trading",
    status: true,
  },
  {
    title: "Trading, Asset & Wealth Management",
    dapartment: "BFSI, Investments & Trading",
    status: true,
  },
  {
    title: "Treasury & Forex",
    dapartment: "BFSI, Investments & Trading",
    status: true,
  },
  {
    title: "BFSI, Investments & Trading - Other",
    dapartment: "BFSI, Investments & Trading",
    status: true,
  },
  {
    title: "After Sales Service & Repair",
    dapartment: "Customer Success, Service & Operations",
    status: true,
  },
  {
    title: "Back Office",
    dapartment: "Customer Success, Service & Operations",
    status: true,
  },
  {
    title: "Customer Success",
    dapartment: "Customer Success, Service & Operations",
    status: true,
  },
  {
    title: "Non Voice",
    dapartment: "Customer Success, Service & Operations",
    status: true,
  },
  {
    title: "Operations",
    dapartment: "Customer Success, Service & Operations",
    status: true,
  },
  {
    title: "Operations Support",
    dapartment: "Customer Success, Service & Operations",
    status: true,
  },
  {
    title: "Service Delivery",
    dapartment: "Customer Success, Service & Operations",
    status: true,
  },
  {
    title: "Voice / Blended",
    dapartment: "Customer Success, Service & Operations",
    status: true,
  },
  {
    title: "Customer Success, Service & Operations - Other",
    dapartment: "Customer Success, Service & Operations",
    status: true,
  },
  {
    title: "Business Intelligence & Analytics",
    dapartment: "Data Science & Analytics",
    status: true,
  },
  {
    title: "Data Science & Machine Learning",
    dapartment: "Data Science & Analytics",
    status: true,
  },
  {
    title: "Data Science & Analytics - Other",
    dapartment: "Data Science & Analytics",
    status: true,
  },
  {
    title: "Hardware",
    dapartment: "Engineering - Hardware & Networks",
    status: true,
  },
  {
    title: "IT Network",
    dapartment: "Engineering - Hardware & Networks",
    status: true,
  },
  {
    title: "Telecom",
    dapartment: "Engineering - Hardware & Networks",
    status: true,
  },
  {
    title: "Hardware and Networks - Other",
    dapartment: "Engineering - Hardware & Networks",
    status: true,
  },
  {
    title: "DBA / Data warehousing",
    dapartment: "Engineering - Software & QA",
    status: true,
  },
  {
    title: "DevOps",
    dapartment: "Engineering - Software & QA",
    status: true,
  },
  {
    title: "Quality Assurance and Testing",
    dapartment: "Engineering - Software & QA",
    status: true,
  },
  {
    title: "Software Development",
    dapartment: "Engineering - Software & QA",
    status: true,
  },
  {
    title: "Accounting & Taxation",
    dapartment: "Finance & Accounting",
    status: true,
  },
  {
    title: "Audit & Control",
    dapartment: "Finance & Accounting",
    status: true,
  },
  {
    title: "Finance",
    dapartment: "Finance & Accounting",
    status: true,
  },
  {
    title: "Payroll & Transactions",
    dapartment: "Finance & Accounting",
    status: true,
  },
  {
    title: "Treasury",
    dapartment: "Finance & Accounting",
    status: true,
  },
  {
    title: "Finance & Accounting - Other",
    dapartment: "Finance & Accounting",
    status: true,
  },
  {
    title: "Compensation & Benefits",
    dapartment: "Human Resources",
    status: true,
  },
  {
    title: "Employee Relations",
    dapartment: "Human Resources",
    status: true,
  },
  {
    title: "HR Business Advisory",
    dapartment: "Human Resources",
    status: true,
  },
  {
    title: "HR Operations",
    dapartment: "Human Resources",
    status: true,
  },
  {
    title: "Recruitment & Talent Acquisition",
    dapartment: "Human Resources",
    status: true,
  },
  {
    title: "Recruitment Marketing & Branding",
    dapartment: "Human Resources",
    status: true,
  },
  {
    title: "Human Resources - Other",
    dapartment: "Human Resources",
    status: true,
  },
  {
    title: "IT Infrastructure Services",
    dapartment: "IT & Information Security",
    status: true,
  },
  {
    title: "IT Security",
    dapartment: "IT & Information Security",
    status: true,
  },
  {
    title: "IT Support",
    dapartment: "IT & Information Security",
    status: true,
  },
  {
    title: "IT & Information Security - Other",
    dapartment: "IT & Information Security",
    status: true,
  },
  {
    title: "Advertising & Creative",
    dapartment: "Marketing & Communication",
    status: true,
  },
  {
    title: "Corporate Communication",
    dapartment: "Marketing & Communication",
    status: true,
  },
  {
    title: "Digital Marketing",
    dapartment: "Marketing & Communication",
    status: true,
  },
  {
    title: "Market Research & Insights",
    dapartment: "Marketing & Communication",
    status: true,
  },
  {
    title: "Marketing",
    dapartment: "Marketing & Communication",
    status: true,
  },
  {
    title: "Marketing and Communication - Other",
    dapartment: "Marketing & Communication",
    status: true,
  },
  {
    title: "Product Management - Technology",
    dapartment: "Product Management",
    status: true,
  },
  {
    title: "Product Management - Other",
    dapartment: "Product Management",
    status: true,
  },
  {
    title: "Engineering",
    dapartment: "Production, Manufacturing & Engineering",
    status: true,
  },
  {
    title: "Management",
    dapartment: "Production, Manufacturing & Engineering",
    status: true,
  },
  {
    title: "Operations, Maintenance & Support",
    dapartment: "Production, Manufacturing & Engineering",
    status: true,
  },
  {
    title: "Production & Manufacturing - Other",
    dapartment: "Production, Manufacturing & Engineering",
    status: true,
  },
  {
    title: "Construction / Manufacturing",
    dapartment: "Project & Program Management",
    status: true,
  },
  {
    title: "Finance",
    dapartment: "Project & Program Management",
    status: true,
  },
  {
    title: "Technology / IT",
    dapartment: "Project & Program Management",
    status: true,
  },
  {
    title: "Other Program / Project Management",
    dapartment: "Project & Program Management",
    status: true,
  },
  {
    title: "Business Process Quality",
    dapartment: "Quality Assurance",
    status: true,
  },
  {
    title: "Production & Manufacturing",
    dapartment: "Quality Assurance",
    status: true,
  },
  {
    title: "Quality Assurance - Other",
    dapartment: "Quality Assurance",
    status: true,
  },
  {
    title: "BD / Pre Sales",
    dapartment: "Sales & Business Development",
    status: true,
  },
  {
    title: "Enterprise & B2B Sales",
    dapartment: "Sales & Business Development",
    status: true,
  },
  {
    title: "Retail & B2C Sales",
    dapartment: "Sales & Business Development",
    status: true,
  },
  {
    title: "Sales Support & Operations",
    dapartment: "Sales & Business Development",
    status: true,
  },
  {
    title: "Architecture & Interior Design",
    dapartment: "UX, Design & Architecture",
    status: true,
  },
  {
    title: "Fashion & Accessories",
    dapartment: "UX, Design & Architecture",
    status: true,
  },
  {
    title: "UI / UX",
    dapartment: "UX, Design & Architecture",
    status: true,
  },
  {
    title: "Other Design",
    dapartment: "UX, Design & Architecture",
    status: true,
  },
  {
    title: "Administration",
    dapartment: "Administration & Facilities",
    status: true,
  },
  {
    title: "Facility Management",
    dapartment: "Administration & Facilities",
    status: true,
  },
  {
    title: "Airline Services",
    dapartment: "Aviation & Aerospace",
    status: true,
  },
  {
    title: "Aviation Engineering",
    dapartment: "Aviation & Aerospace",
    status: true,
  },
  {
    title: "Flight & Airport Operations",
    dapartment: "Aviation & Aerospace",
    status: true,
  },
  {
    title: "Pilot",
    dapartment: "Aviation & Aerospace",
    status: true,
  },
  {
    title: "Aviation & Aerospace - Other",
    dapartment: "Aviation & Aerospace",
    status: true,
  },
  {
    title: "Construction Engineering",
    dapartment: "Construction & Site Engineering",
    status: true,
  },
  {
    title: "Surveying",
    dapartment: "Construction & Site Engineering",
    status: true,
  },
  {
    title: "IT Consulting",
    dapartment: "Consulting",
    status: true,
  },
  {
    title: "Management Consulting",
    dapartment: "Consulting",
    status: true,
  },
  {
    title: "Other Consulting",
    dapartment: "Consulting",
    status: true,
  },
  {
    title: "Content Management (Print / Online / Electronic)",
    dapartment: "Content, Editorial & Journalism",
    status: true,
  },
  {
    title: "Editing (Print / Online / Electronic)",
    dapartment: "Content, Editorial & Journalism",
    status: true,
  },
  {
    title: "Journalism",
    dapartment: "Content, Editorial & Journalism",
    status: true,
  },
  {
    title: "Content, Editorial & Journalism - Other",
    dapartment: "Content, Editorial & Journalism",
    status: true,
  },
  {
    title: "CSR & Sustainability",
    dapartment: "CSR & Social Service",
    status: true,
  },
  {
    title: "Social & Public Service",
    dapartment: "CSR & Social Service",
    status: true,
  },
  {
    title: "Downstream",
    dapartment: "Energy & Mining",
    status: true,
  },
  {
    title: "Midstream",
    dapartment: "Energy & Mining",
    status: true,
  },
  {
    title: "Mining",
    dapartment: "Energy & Mining",
    status: true,
  },
  {
    title: "Power Generation",
    dapartment: "Energy & Mining",
    status: true,
  },
  {
    title: "Power Supply and Distribution",
    dapartment: "Energy & Mining",
    status: true,
  },
  {
    title: "Upstream",
    dapartment: "Energy & Mining",
    status: true,
  },
  {
    title: "Energy & Mining - Other",
    dapartment: "Energy & Mining",
    status: true,
  },
  {
    title: "Community Health & Safety",
    dapartment: "Environment Health & Safety",
    status: true,
  },
  {
    title: "Occupational Health & Safety",
    dapartment: "Environment Health & Safety",
    status: true,
  },
  {
    title: "Environment Health and Safety - Other",
    dapartment: "Environment Health & Safety",
    status: true,
  },
  {
    title: "Events & Banquet",
    dapartment: "Food, Beverage & Hospitality",
    status: true,
  },
  {
    title: "F&B Service",
    dapartment: "Food, Beverage & Hospitality",
    status: true,
  },
  {
    title: "Front Office & Guest Services",
    dapartment: "Food, Beverage & Hospitality",
    status: true,
  },
  {
    title: "Housekeeping & Laundry",
    dapartment: "Food, Beverage & Hospitality",
    status: true,
  },
  {
    title: "Kitchen / F&B Production",
    dapartment: "Food, Beverage & Hospitality",
    status: true,
  },
  {
    title: "Tourism Services",
    dapartment: "Food, Beverage & Hospitality",
    status: true,
  },
  {
    title: "Food, Beverage & Hospitality - Other",
    dapartment: "Food, Beverage & Hospitality",
    status: true,
  },
  {
    title: "Doctor",
    dapartment: "Healthcare & Life Sciences",
    status: true,
  },
  {
    title: "Health Informatics",
    dapartment: "Healthcare & Life Sciences",
    status: true,
  },
  {
    title: "Imaging & Diagnostics",
    dapartment: "Healthcare & Life Sciences",
    status: true,
  },
  {
    title: "Nursing",
    dapartment: "Healthcare & Life Sciences",
    status: true,
  },
  {
    title: "Healthcare & Life Sciences - Other",
    dapartment: "Healthcare & Life Sciences",
    status: true,
  },
  {
    title: "Other Hospital Staff",
    dapartment: "Healthcare & Life Sciences",
    status: true,
  },
  {
    title: "Corporate Affairs",
    dapartment: "Legal & Regulatory",
    status: true,
  },
  {
    title: "Crime / Arbitration",
    dapartment: "Legal & Regulatory",
    status: true,
  },
  {
    title: "Legal Operations",
    dapartment: "Legal & Regulatory",
    status: true,
  },
  {
    title: "Legal & Regulatory - Other",
    dapartment: "Legal & Regulatory",
    status: true,
  },
  {
    title: "Animation / Effects",
    dapartment: "Media Production & Entertainment",
    status: true,
  },
  {
    title: "Artists",
    dapartment: "Media Production & Entertainment",
    status: true,
  },
  {
    title: "Direction",
    dapartment: "Media Production & Entertainment",
    status: true,
  },
  {
    title: "Editing",
    dapartment: "Media Production & Entertainment",
    status: true,
  },
  {
    title: "Make Up / Costume",
    dapartment: "Media Production & Entertainment",
    status: true,
  },
  {
    title: "Production",
    dapartment: "Media Production & Entertainment",
    status: true,
  },
  {
    title: "Sound / Light / Technical Support",
    dapartment: "Media Production & Entertainment",
    status: true,
  },
  {
    title: "Media Production & Entertainment - Other",
    dapartment: "Media Production & Entertainment",
    status: true,
  },
  {
    title: "Category Management & Operations",
    dapartment: "Merchandising, Retail & eCommerce",
    status: true,
  },
  {
    title: "eCommerce Operations",
    dapartment: "Merchandising, Retail & eCommerce",
    status: true,
  },
  {
    title: "Merchandising & Planning",
    dapartment: "Merchandising, Retail & eCommerce",
    status: true,
  },
  {
    title: "Retail Store Operations",
    dapartment: "Merchandising, Retail & eCommerce",
    status: true,
  },
  {
    title: "Merchandising, Retail & eCommerce - Other",
    dapartment: "Merchandising, Retail & eCommerce",
    status: true,
  },
  {
    title: "Import & Export",
    dapartment: "Procurement & Supply Chain",
    status: true,
  },
  {
    title: "Procurement & Purchase",
    dapartment: "Procurement & Supply Chain",
    status: true,
  },
  {
    title: "SCM & Logistics",
    dapartment: "Procurement & Supply Chain",
    status: true,
  },
  {
    title: "Stores & Material Management",
    dapartment: "Procurement & Supply Chain",
    status: true,
  },
  {
    title: "Procurement & Supply Chain - Other",
    dapartment: "Procurement & Supply Chain",
    status: true,
  },
  {
    title: "Engineering & Manufacturing",
    dapartment: "Research & Development",
    status: true,
  },
  {
    title: "Pharmaceutical & Biotechnology",
    dapartment: "Research & Development",
    status: true,
  },
  {
    title: "Research & Development - Other",
    dapartment: "Research & Development",
    status: true,
  },
  {
    title: "Assessment / Advisory",
    dapartment: "Risk Management & Compliance",
    status: true,
  },
  {
    title: "Business",
    dapartment: "Risk Management & Compliance",
    status: true,
  },
  {
    title: "Finance",
    dapartment: "Risk Management & Compliance",
    status: true,
  },
  {
    title: "Operations / Strategy",
    dapartment: "Risk Management & Compliance",
    status: true,
  },
  {
    title: "Security / Fraud",
    dapartment: "Risk Management & Compliance",
    status: true,
  },
  {
    title: "Risk Management & Compliance - Other",
    dapartment: "Risk Management & Compliance",
    status: true,
  },
  {
    title: "Security Officer",
    dapartment: "Security Services",
    status: true,
  },
  {
    title: "Security Services - Other",
    dapartment: "Security Services",
    status: true,
  },
  {
    title: "Port & Maritime Operations",
    dapartment: "Shipping & Maritime",
    status: true,
  },
  {
    title: "Shipping Deck",
    dapartment: "Shipping & Maritime",
    status: true,
  },
  {
    title: "Shipping Engineering & Technical",
    dapartment: "Shipping & Maritime",
    status: true,
  },
  {
    title: "Shipping & Maritime - Other",
    dapartment: "Shipping & Maritime",
    status: true,
  },
  {
    title: "Beauty & Personal Care",
    dapartment: "Sports, Fitness & Personal Care",
    status: true,
  },
  {
    title: "Health & Fitness",
    dapartment: "Sports, Fitness & Personal Care",
    status: true,
  },
  {
    title: "Sports Science & Medicine",
    dapartment: "Sports, Fitness & Personal Care",
    status: true,
  },
  {
    title: "Sports Staff and Management",
    dapartment: "Sports, Fitness & Personal Care",
    status: true,
  },
  {
    title: "Sports, Fitness & Personal Care - Other",
    dapartment: "Sports, Fitness & Personal Care",
    status: true,
  },
  {
    title: "Strategic Management",
    dapartment: "Strategic & Top Management",
    status: true,
  },
  {
    title: "Top Management",
    dapartment: "Strategic & Top Management",
    status: true,
  },
  {
    title: "Strategic & Top Management - Other",
    dapartment: "Strategic & Top Management",
    status: true,
  },
  {
    title: "Administration & Staff",
    dapartment: "Teaching & Training",
    status: true,
  },
  {
    title: "Corporate Training",
    dapartment: "Teaching & Training",
    status: true,
  },
  {
    title: "Language Teacher",
    dapartment: "Teaching & Training",
    status: true,
  },
  {
    title: "Life Skills / ECA Teacher",
    dapartment: "Teaching & Training",
    status: true,
  },
  {
    title: "Preschool & Primary Education",
    dapartment: "Teaching & Training",
    status: true,
  },
  {
    title: "Subject / Specialization Teacher",
    dapartment: "Teaching & Training",
    status: true,
  },
  {
    title: "University Level Educator",
    dapartment: "Teaching & Training",
    status: true,
  },
  {
    title: "Teaching & Training - Other",
    dapartment: "Teaching & Training",
    status: true,
  },
  {
    title: "Other",
    dapartment: "Other",
    status: true,
  },
]

export default class RoleCategorySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(RoleCategory);
    const batchSize = 100;
    const seedDataLength = seedData.length;
    for (let i = 0; i < seedDataLength; i += batchSize) {
      const batch = seedData.slice(i, i + batchSize);
      await repository.save(batch);
    };
  }
}