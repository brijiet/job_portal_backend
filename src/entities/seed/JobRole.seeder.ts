import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { JobRole } from '../jobRole.entity';

const seedData = [
  {
    title: 'Acquisition Manager',
    roleCategory: 'Banking Operations',
    status: true,
  },
  {
    title: 'Area / Territory Manager',
    roleCategory: 'Banking Operations',
    status: true,
  },
  {
    title: 'Asset Operations',
    roleCategory: 'Banking Operations',
    status: true,
  },
  {
    title: 'ATM Operations Manager',
    roleCategory: 'Banking Operations',
    status: true,
  },
  {
    title: 'Back Office Executive',
    roleCategory: 'Banking Operations',
    status: true,
  },
  {
    title: 'Bank Teller / Clerk',
    roleCategory: 'Banking Operations',
    status: true,
  },
  {
    title: 'Branch Manager',
    roleCategory: 'Banking Operations',
    status: true,
  },
  {
    title: 'Branch Operations Manager',
    roleCategory: 'Banking Operations',
    status: true,
  },
  {
    title: 'Business Correspondent',
    roleCategory: 'Banking Operations',
    status: true,
  },
  {
    title: 'Card Operations Executive / Lead',
    roleCategory: 'Banking Operations',
    status: true,
  },
  {
    title: 'Cashier',
    roleCategory: 'Banking Operations',
    status: true,
  },
  {
    title: 'Personal Banker',
    roleCategory: 'Banking Operations',
    status: true,
  },
  {
    title: 'Phone Banking Officer',
    roleCategory: 'Banking Operations',
    status: true,
  },
  {
    title: 'Regional Manager',
    roleCategory: 'Banking Operations',
    status: true,
  },
  {
    title: 'Relationship Manager',
    roleCategory: 'Banking Operations',
    status: true,
  },
  {
    title: 'Sales Officer',
    roleCategory: 'Banking Operations',
    status: true,
  },
  {
    title: 'Banking Operations - Other',
    roleCategory: 'Banking Operations',
    status: true,
  },
  {
    title: 'Actuarial Analyst',
    roleCategory: 'General Insurance',
    status: true,
  },
  {
    title: 'Actuarial Manager',
    roleCategory: 'General Insurance',
    status: true,
  },
  {
    title: 'Agency Manager',
    roleCategory: 'General Insurance',
    status: true,
  },
  {
    title: 'Area / Territory Manager',
    roleCategory: 'General Insurance',
    status: true,
  },
  {
    title: 'Bancassurance Manager',
    roleCategory: 'General Insurance',
    status: true,
  },
  {
    title: 'Branch Manager',
    roleCategory: 'General Insurance',
    status: true,
  },
  {
    title: 'Claims Executive',
    roleCategory: 'General Insurance',
    status: true,
  },
  {
    title: 'Claims Manager',
    roleCategory: 'General Insurance',
    status: true,
  },
  {
    title: 'Insurance Agent / Advisor',
    roleCategory: 'General Insurance',
    status: true,
  },
  {
    title: 'Insurance Analyst',
    roleCategory: 'General Insurance',
    status: true,
  },
  {
    title: 'Insurance Operations Executive',
    roleCategory: 'General Insurance',
    status: true,
  },
  {
    title: 'Insurance Operations Manager',
    roleCategory: 'General Insurance',
    status: true,
  },
  {
    title: 'Insurance Sales / BD Manager',
    roleCategory: 'General Insurance',
    status: true,
  },
  {
    title: 'Pricing Manager',
    roleCategory: 'General Insurance',
    status: true,
  },
  {
    title: 'Regional Manager',
    roleCategory: 'General Insurance',
    status: true,
  },
  {
    title: 'Relationship Manager',
    roleCategory: 'General Insurance',
    status: true,
  },
  {
    title: 'Underwriter',
    roleCategory: 'General Insurance',
    status: true,
  },
  {
    title: 'General Insurance - Other',
    roleCategory: 'General Insurance',
    status: true,
  },
  {
    title: 'Hedge Fund Manager',
    roleCategory: 'Investment Banking, Private Equity & VC',
    status: true,
  },
  {
    title: 'Investment Banking Analyst',
    roleCategory: 'Investment Banking, Private Equity & VC',
    status: true,
  },
  {
    title: 'Investment Banking Associate',
    roleCategory: 'Investment Banking, Private Equity & VC',
    status: true,
  },
  {
    title: 'Principal / Partner / Director',
    roleCategory: 'Investment Banking, Private Equity & VC',
    status: true,
  },
  {
    title: 'Private Equity Analyst',
    roleCategory: 'Investment Banking, Private Equity & VC',
    status: true,
  },
  {
    title: 'Private Equity Associate',
    roleCategory: 'Investment Banking, Private Equity & VC',
    status: true,
  },
  {
    title: 'Venture Capital Investor',
    roleCategory: 'Investment Banking, Private Equity & VC',
    status: true,
  },
  {
    title: 'Investment Banking, Private Equity & VC - Other',
    roleCategory: 'Investment Banking, Private Equity & VC',
    status: true,
  },
  {
    title: 'Agency Development Manager',
    roleCategory: 'Lending',
    status: true,
  },
  {
    title: 'Area / Territory Manager',
    roleCategory: 'Lending',
    status: true,
  },
  {
    title: 'Collection / Recovery Manager',
    roleCategory: 'Lending',
    status: true,
  },
  {
    title: 'Collection Executive / Officer ',
    roleCategory: 'Lending',
    status: true,
  },
  {
    title: 'Collection Head',
    roleCategory: 'Lending',
    status: true,
  },
  {
    title: 'Credit Analyst',
    roleCategory: 'Lending',
    status: true,
  },
  {
    title: 'Credit Manager',
    roleCategory: 'Lending',
    status: true,
  },
  {
    title: 'Debt Recovery Agent',
    roleCategory: 'Lending',
    status: true,
  },
  {
    title: 'Direct Sales Agent',
    roleCategory: 'Lending',
    status: true,
  },
  {
    title: 'KYC Analyst',
    roleCategory: 'Lending',
    status: true,
  },
  {
    title: 'Loan Officer',
    roleCategory: 'Lending',
    status: true,
  },
  {
    title: 'Microfinance Executive',
    roleCategory: 'Lending',
    status: true,
  },
  {
    title: 'Project Finance Manager',
    roleCategory: 'Lending',
    status: true,
  },
  {
    title: 'Regional Manager',
    roleCategory: 'Lending',
    status: true,
  },
  {
    title: 'Risk Analyst',
    roleCategory: 'Lending',
    status: true,
  },
  {
    title: 'Risk Manager',
    roleCategory: 'Lending',
    status: true,
  },
  {
    title: 'Sales Manager',
    roleCategory: 'Lending',
    status: true,
  },
  {
    title: 'Lending - Other',
    roleCategory: 'Lending',
    status: true,
  },
  {
    title: 'Actuarial Analyst',
    roleCategory: 'Life Insurance',
    status: true,
  },
  {
    title: 'Actuarial Manager',
    roleCategory: 'Life Insurance',
    status: true,
  },
  {
    title: 'Agency Manager',
    roleCategory: 'Life Insurance',
    status: true,
  },
  {
    title: 'Area / Territory Manager',
    roleCategory: 'Life Insurance',
    status: true,
  },
  {
    title: 'Bancassurance Manager',
    roleCategory: 'Life Insurance',
    status: true,
  },
  {
    title: 'Branch Manager',
    roleCategory: 'Life Insurance',
    status: true,
  },
  {
    title: 'Claims Executive',
    roleCategory: 'Life Insurance',
    status: true,
  },
  {
    title: 'Claims Manager',
    roleCategory: 'Life Insurance',
    status: true,
  },
  {
    title: 'Insurance Agent / Advisor',
    roleCategory: 'Life Insurance',
    status: true,
  },
  {
    title: 'Insurance Analyst',
    roleCategory: 'Life Insurance',
    status: true,
  },
  {
    title: 'Insurance Operations Executive',
    roleCategory: 'Life Insurance',
    status: true,
  },
  {
    title: 'Insurance Operations Manager',
    roleCategory: 'Life Insurance',
    status: true,
  },
  {
    title: 'Insurance Sales / BD Manager',
    roleCategory: 'Life Insurance',
    status: true,
  },
  {
    title: 'Pricing Manager',
    roleCategory: 'Life Insurance',
    status: true,
  },
  {
    title: 'Regional Manager',
    roleCategory: 'Life Insurance',
    status: true,
  },
  {
    title: 'Relationship Manager',
    roleCategory: 'Life Insurance',
    status: true,
  },
  {
    title: 'Underwriter',
    roleCategory: 'Life Insurance',
    status: true,
  },
  {
    title: 'Life Insurance - Other',
    roleCategory: 'Life Insurance',
    status: true,
  },
  {
    title: 'Asset Manager',
    roleCategory: 'Trading, Asset & Wealth Management',
    status: true,
  },
  {
    title: 'Commodity Dealer',
    roleCategory: 'Trading, Asset & Wealth Management',
    status: true,
  },
  {
    title: 'Cryptocurrency Trader',
    roleCategory: 'Trading, Asset & Wealth Management',
    status: true,
  },
  {
    title: 'Derivatives Trader',
    roleCategory: 'Trading, Asset & Wealth Management',
    status: true,
  },
  {
    title: 'Equity Dealer',
    roleCategory: 'Trading, Asset & Wealth Management',
    status: true,
  },
  {
    title: 'Equity Research Analyst',
    roleCategory: 'Trading, Asset & Wealth Management',
    status: true,
  },
  {
    title: 'Financial Advisor',
    roleCategory: 'Trading, Asset & Wealth Management',
    status: true,
  },
  {
    title: 'Fixed Income Dealer',
    roleCategory: 'Trading, Asset & Wealth Management',
    status: true,
  },
  {
    title: 'Fund Manager',
    roleCategory: 'Trading, Asset & Wealth Management',
    status: true,
  },
  {
    title: 'Investment Advisor',
    roleCategory: 'Trading, Asset & Wealth Management',
    status: true,
  },
  {
    title: 'MF Distributer / Advisor',
    roleCategory: 'Trading, Asset & Wealth Management',
    status: true,
  },
  {
    title: 'Mutual Fund Operations',
    roleCategory: 'Trading, Asset & Wealth Management',
    status: true,
  },
  {
    title: 'Portfolio Manager',
    roleCategory: 'Trading, Asset & Wealth Management',
    status: true,
  },
  {
    title: 'Research Analyst',
    roleCategory: 'Trading, Asset & Wealth Management',
    status: true,
  },
  {
    title: 'Sales Manager',
    roleCategory: 'Trading, Asset & Wealth Management',
    status: true,
  },
  {
    title: 'Stock Broker',
    roleCategory: 'Trading, Asset & Wealth Management',
    status: true,
  },
  {
    title: 'Wealth Manager',
    roleCategory: 'Trading, Asset & Wealth Management',
    status: true,
  },
  {
    title: 'Trading, Asset & Wealth Management - Other',
    roleCategory: 'Trading, Asset & Wealth Management',
    status: true,
  },
  {
    title: 'Forex Dealer',
    roleCategory: 'Treasury & Forex',
    status: true,
  },
  {
    title: 'Forex Manager',
    roleCategory: 'Treasury & Forex',
    status: true,
  },
  {
    title: 'Treasury Analyst',
    roleCategory: 'Treasury & Forex',
    status: true,
  },
  {
    title: 'Treasury Head',
    roleCategory: 'Treasury & Forex',
    status: true,
  },
  {
    title: 'Treasury Manager',
    roleCategory: 'Treasury & Forex',
    status: true,
  },
  {
    title: 'Treasury Operations',
    roleCategory: 'Treasury & Forex',
    status: true,
  },
  {
    title: 'Treasury & Forex - Other',
    roleCategory: 'Treasury & Forex',
    status: true,
  },
  {
    title: 'BFSI, Investments & Trading - Other',
    roleCategory: 'BFSI, Investments & Trading - Other',
    status: true,
  },
  {
    title: 'Appliance Installer / Repairman',
    roleCategory: 'After Sales Service & Repair',
    status: true,
  },
  {
    title: 'Electrician',
    roleCategory: 'After Sales Service & Repair',
    status: true,
  },
  {
    title: 'Electronics Installer / Repairman',
    roleCategory: 'After Sales Service & Repair',
    status: true,
  },
  {
    title: 'Mechanic',
    roleCategory: 'After Sales Service & Repair',
    status: true,
  },
  {
    title: 'Plumber',
    roleCategory: 'After Sales Service & Repair',
    status: true,
  },
  {
    title: 'Service Engineer',
    roleCategory: 'After Sales Service & Repair',
    status: true,
  },
  {
    title: 'Service Manager',
    roleCategory: 'After Sales Service & Repair',
    status: true,
  },
  {
    title: 'After Sales Service & Repair - Other',
    roleCategory: 'After Sales Service & Repair',
    status: true,
  },
  {
    title: 'Back Office Operations',
    roleCategory: 'Back Office',
    status: true,
  },
  {
    title: 'Billing / Records',
    roleCategory: 'Back Office',
    status: true,
  },
  {
    title: 'Data Entry / MIS',
    roleCategory: 'Back Office',
    status: true,
  },
  {
    title: 'Dialer Manager',
    roleCategory: 'Back Office',
    status: true,
  },
  {
    title: 'Back Office - Other',
    roleCategory: 'Back Office',
    status: true,
  },
  {
    title: 'Customer Success Associate',
    roleCategory: 'Customer Success',
    status: true,
  },
  {
    title: 'Customer Success Manager',
    roleCategory: 'Customer Success',
    status: true,
  },
  {
    title: 'Head - Customer Success',
    roleCategory: 'Customer Success',
    status: true,
  },
  {
    title: 'Customer Success - Other',
    roleCategory: 'Customer Success',
    status: true,
  },
  {
    title: 'Account / Relationship Management - Non Voice',
    roleCategory: 'Non Voice',
    status: true,
  },
  {
    title: 'Bilingual / Multilingual Support - Non Voice',
    roleCategory: 'Non Voice',
    status: true,
  },
  {
    title: 'Chat Support',
    roleCategory: 'Non Voice',
    status: true,
  },
  {
    title: 'Customer Advocacy',
    roleCategory: 'Non Voice',
    status: true,
  },
  {
    title: 'Customer Onboarding - Non Voice',
    roleCategory: 'Non Voice',
    status: true,
  },
  {
    title: 'Customer Retention - Non Voice',
    roleCategory: 'Non Voice',
    status: true,
  },
  {
    title: 'Email Support',
    roleCategory: 'Non Voice',
    status: true,
  },
  {
    title: 'Non Tech Support - Non Voice',
    roleCategory: 'Non Voice',
    status: true,
  },
  {
    title: 'Technical Support - Non Voice',
    roleCategory: 'Non Voice',
    status: true,
  },
  {
    title: 'Non Voice - Other',
    roleCategory: 'Non Voice',
    status: true,
  },
  {
    title: 'Assistant Manager',
    roleCategory: 'Operations',
    status: true,
  },
  {
    title: 'Head - Operations',
    roleCategory: 'Operations',
    status: true,
  },
  {
    title: 'Operations Manager',
    roleCategory: 'Operations',
    status: true,
  },
  {
    title: 'Subject Matter Expert',
    roleCategory: 'Operations',
    status: true,
  },
  {
    title: 'Team Leader',
    roleCategory: 'Operations',
    status: true,
  },
  {
    title: 'Operations - Other',
    roleCategory: 'Operations',
    status: true,
  },
  {
    title: 'MIS Executive',
    roleCategory: 'Operations Support',
    status: true,
  },
  {
    title: 'Operations Engineer',
    roleCategory: 'Operations Support',
    status: true,
  },
  {
    title: 'Technical Operations (Tech Ops)',
    roleCategory: 'Operations Support',
    status: true,
  },
  {
    title: 'Operations Support - Other',
    roleCategory: 'Operations Support',
    status: true,
  },
  {
    title: 'Service Delivery Associate',
    roleCategory: 'Service Delivery',
    status: true,
  },
  {
    title: 'Service Delivery Leader',
    roleCategory: 'Service Delivery',
    status: true,
  },
  {
    title: 'Service Delivery Manager',
    roleCategory: 'Service Delivery',
    status: true,
  },
  {
    title: 'Service Delivery - Other',
    roleCategory: 'Service Delivery',
    status: true,
  },
  {
    title: 'Account / Relationship Management - Voice / Blended',
    roleCategory: 'Voice / Blended',
    status: true,
  },
  {
    title: 'Bilingual / Multilingual Support - Voice / Blended',
    roleCategory: 'Voice / Blended',
    status: true,
  },
  {
    title: 'Collections',
    roleCategory: 'Voice / Blended',
    status: true,
  },
  {
    title: 'Customer Onboarding - Voice / Blended',
    roleCategory: 'Voice / Blended',
    status: true,
  },
  {
    title: 'Customer Retention - Voice / Blended',
    roleCategory: 'Voice / Blended',
    status: true,
  },
  {
    title: 'Guest Services',
    roleCategory: 'Voice / Blended',
    status: true,
  },
  {
    title: 'Non Tech Support - Voice / Blended',
    roleCategory: 'Voice / Blended',
    status: true,
  },
  {
    title: 'Technical Support - Voice / Blended',
    roleCategory: 'Voice / Blended',
    status: true,
  },
  {
    title: 'Voice / Blended - Other',
    roleCategory: 'Voice / Blended',
    status: true,
  },
  {
    title: 'Customer Service',
    roleCategory: 'Customer Success, Service & Operations - Other',
    status: true,
  },
  {
    title: 'Customer Success, Service & Operations - Other',
    roleCategory: 'Customer Success, Service & Operations - Other',
    status: true,
  },
  {
    title: 'Analytics / BI Manager',
    roleCategory: 'Business Intelligence & Analytics',
    status: true,
  },
  {
    title: 'Analytics Consultant',
    roleCategory: 'Business Intelligence & Analytics',
    status: true,
  },
  {
    title: 'BI Administration',
    roleCategory: 'Business Intelligence & Analytics',
    status: true,
  },
  {
    title: 'BI Architect',
    roleCategory: 'Business Intelligence & Analytics',
    status: true,
  },
  {
    title: 'BI Developer',
    roleCategory: 'Business Intelligence & Analytics',
    status: true,
  },
  {
    title: 'Business Analyst',
    roleCategory: 'Business Intelligence & Analytics',
    status: true,
  },
  {
    title: 'Data Analyst',
    roleCategory: 'Business Intelligence & Analytics',
    status: true,
  },
  {
    title: 'Head - Analytics / BI',
    roleCategory: 'Business Intelligence & Analytics',
    status: true,
  },
  {
    title: 'Business Intelligence & Analytics - Other',
    roleCategory: 'Business Intelligence & Analytics',
    status: true,
  },
  {
    title: 'Computer Vision',
    roleCategory: 'Data Science & Machine Learning',
    status: true,
  },
  {
    title: 'Data Engineer',
    roleCategory: 'Data Science & Machine Learning',
    status: true,
  },
  {
    title: 'Data Scientist',
    roleCategory: 'Data Science & Machine Learning',
    status: true,
  },
  {
    title: 'Full Stack Data Scientist',
    roleCategory: 'Data Science & Machine Learning',
    status: true,
  },
  {
    title: 'Head - Data Science',
    roleCategory: 'Data Science & Machine Learning',
    status: true,
  },
  {
    title: 'Machine Learning Engineer',
    roleCategory: 'Data Science & Machine Learning',
    status: true,
  },
  {
    title: 'Manager - Data Science',
    roleCategory: 'Data Science & Machine Learning',
    status: true,
  },
  {
    title: 'Manager - Machine Learning',
    roleCategory: 'Data Science & Machine Learning',
    status: true,
  },
  {
    title: 'NLP / DL Engineering / Architect',
    roleCategory: 'Data Science & Machine Learning',
    status: true,
  },
  {
    title: 'Statistician',
    roleCategory: 'Data Science & Machine Learning',
    status: true,
  },
  {
    title: 'Data Science & Machine Learning - Other',
    roleCategory: 'Data Science & Machine Learning',
    status: true,
  },
  {
    title: 'Data Science & Analytics - Other',
    roleCategory: 'Data Science & Analytics - Other',
    status: true,
  },
  {
    title: 'ASIC / RTL / Logic Design Engineer',
    roleCategory: 'Hardware',
    status: true,
  },
  {
    title: 'Design Team Lead',
    roleCategory: 'Hardware',
    status: true,
  },
  {
    title: 'Design Verification Engineer',
    roleCategory: 'Hardware',
    status: true,
  },
  {
    title: 'EDA Tools Engineer',
    roleCategory: 'Hardware',
    status: true,
  },
  {
    title: 'Embedded Hardware Engineer',
    roleCategory: 'Hardware',
    status: true,
  },
  {
    title: 'Firmware Developer',
    roleCategory: 'Hardware',
    status: true,
  },
  {
    title: 'FPGA Engineer',
    roleCategory: 'Hardware',
    status: true,
  },
  {
    title: 'Functional Verification Engineer',
    roleCategory: 'Hardware',
    status: true,
  },
  {
    title: 'Hardware Architect',
    roleCategory: 'Hardware',
    status: true,
  },
  {
    title: 'Hardware Engineering Manager',
    roleCategory: 'Hardware',
    status: true,
  },
  {
    title: 'Hardware Installation & Maintenance',
    roleCategory: 'Hardware',
    status: true,
  },
  {
    title: 'Hardware Platform Engineer',
    roleCategory: 'Hardware',
    status: true,
  },
  {
    title: 'Hardware Reliability Engineer',
    roleCategory: 'Hardware',
    status: true,
  },
  {
    title: 'Hardware Research Engineer',
    roleCategory: 'Hardware',
    status: true,
  },
  {
    title: 'Head - Hardware Engineering',
    roleCategory: 'Hardware',
    status: true,
  },
  {
    title: 'Physical Design / Layout Engineer',
    roleCategory: 'Hardware',
    status: true,
  },
  {
    title: 'Product Design Engineer',
    roleCategory: 'Hardware',
    status: true,
  },
  {
    title: 'Verification Team Lead',
    roleCategory: 'Hardware',
    status: true,
  },
  {
    title: 'Hardware - Other',
    roleCategory: 'Hardware',
    status: true,
  },
  {
    title: 'Field Service Engineer',
    roleCategory: 'IT Network',
    status: true,
  },
  {
    title: 'Head - Network Operations',
    roleCategory: 'IT Network',
    status: true,
  },
  {
    title: 'Network (Support) Engineer',
    roleCategory: 'IT Network',
    status: true,
  },
  {
    title: 'Network Architect',
    roleCategory: 'IT Network',
    status: true,
  },
  {
    title: 'Network Manager / Administrator',
    roleCategory: 'IT Network',
    status: true,
  },
  {
    title: 'Network Programmer / Analyst',
    roleCategory: 'IT Network',
    status: true,
  },
  {
    title: 'Network Service Technician',
    roleCategory: 'IT Network',
    status: true,
  },
  {
    title: 'System Administrator / Engineer',
    roleCategory: 'IT Network',
    status: true,
  },
  {
    title: 'Team Lead / Network Manager',
    roleCategory: 'IT Network',
    status: true,
  },
  {
    title: 'Wireless Network Engineer',
    roleCategory: 'IT Network',
    status: true,
  },
  {
    title: 'IT Network - Other',
    roleCategory: 'IT Network',
    status: true,
  },
  {
    title: 'RF Design / Layout Engineer',
    roleCategory: 'Telecom',
    status: true,
  },
  {
    title: 'RF Engineering',
    roleCategory: 'Telecom',
    status: true,
  },
  {
    title: 'Switching / Router Engineering',
    roleCategory: 'Telecom',
    status: true,
  },
  {
    title: 'Telecom - Other',
    roleCategory: 'Telecom',
    status: true,
  },
  {
    title: 'Hardware and Networks - Other',
    roleCategory: 'Hardware and Networks - Other',
    status: true,
  },
  {
    title: 'Data warehouse Architect / Consultant',
    roleCategory: 'DBA / Data warehousing',
    status: true,
  },
  {
    title: 'Data warehouse Developer',
    roleCategory: 'DBA / Data warehousing',
    status: true,
  },
  {
    title: 'Data warehouse Manager',
    roleCategory: 'DBA / Data warehousing',
    status: true,
  },
  {
    title: 'Database Administrator',
    roleCategory: 'DBA / Data warehousing',
    status: true,
  },
  {
    title: 'Database Analyst',
    roleCategory: 'DBA / Data warehousing',
    status: true,
  },
  {
    title: 'Database Architect / Designer',
    roleCategory: 'DBA / Data warehousing',
    status: true,
  },
  {
    title: 'Database Developer / Engineer',
    roleCategory: 'DBA / Data warehousing',
    status: true,
  },
  {
    title: 'Database Manager',
    roleCategory: 'DBA / Data warehousing',
    status: true,
  },
  {
    title: 'ETL Developer',
    roleCategory: 'DBA / Data warehousing',
    status: true,
  },
  {
    title: 'Head - Data Base',
    roleCategory: 'DBA / Data warehousing',
    status: true,
  },
  {
    title: 'MIS Manager',
    roleCategory: 'DBA / Data warehousing',
    status: true,
  },
  {
    title: 'DBA / Data warehousing - Other',
    roleCategory: 'DBA / Data warehousing',
    status: true,
  },
  {
    title: 'DevOps Consultant / Architect',
    roleCategory: 'DevOps',
    status: true,
  },
  {
    title: 'DevOps Engineer',
    roleCategory: 'DevOps',
    status: true,
  },
  {
    title: 'DevOps Manager',
    roleCategory: 'DevOps',
    status: true,
  },
  {
    title: 'Head - DevOps',
    roleCategory: 'DevOps',
    status: true,
  },
  {
    title: 'Release Engineer',
    roleCategory: 'DevOps',
    status: true,
  },
  {
    title: 'Release Manager',
    roleCategory: 'DevOps',
    status: true,
  },
  {
    title: 'Site Reliability Engineer',
    roleCategory: 'DevOps',
    status: true,
  },
  {
    title: 'DevOps - Other',
    roleCategory: 'DevOps',
    status: true,
  },
  {
    title: 'AR VR QA Tester',
    roleCategory: 'Quality Assurance and Testing',
    status: true,
  },
  {
    title: 'Automation Test Engineer',
    roleCategory: 'Quality Assurance and Testing',
    status: true,
  },
  {
    title: 'Blockchain Quality Assurance Engineer',
    roleCategory: 'Quality Assurance and Testing',
    status: true,
  },
  {
    title: 'Data / Big Data Testing Engineer',
    roleCategory: 'Quality Assurance and Testing',
    status: true,
  },
  {
    title: 'Game Tester',
    roleCategory: 'Quality Assurance and Testing',
    status: true,
  },
  {
    title: 'Head - QA',
    roleCategory: 'Quality Assurance and Testing',
    status: true,
  },
  {
    title: 'Manual Test Engineer',
    roleCategory: 'Quality Assurance and Testing',
    status: true,
  },
  {
    title: 'Mobile Apps Testing Engineer',
    roleCategory: 'Quality Assurance and Testing',
    status: true,
  },
  {
    title: 'Performance Testing Engineer',
    roleCategory: 'Quality Assurance and Testing',
    status: true,
  },
  {
    title: 'Post Silicon Test Engineer',
    roleCategory: 'Quality Assurance and Testing',
    status: true,
  },
  {
    title: 'Pre Silicon Test Engineer',
    roleCategory: 'Quality Assurance and Testing',
    status: true,
  },
  {
    title: 'QA Team Manager',
    roleCategory: 'Quality Assurance and Testing',
    status: true,
  },
  {
    title: 'Robotic Test Engineer',
    roleCategory: 'Quality Assurance and Testing',
    status: true,
  },
  {
    title: 'Security Testing Engineer',
    roleCategory: 'Quality Assurance and Testing',
    status: true,
  },
  {
    title: 'Software Developer in Test (SDET)',
    roleCategory: 'Quality Assurance and Testing',
    status: true,
  },
  {
    title: 'Test Analyst',
    roleCategory: 'Quality Assurance and Testing',
    status: true,
  },
  {
    title: 'Test Architect',
    roleCategory: 'Quality Assurance and Testing',
    status: true,
  },
  {
    title: 'White Box Testing Engineer',
    roleCategory: 'Quality Assurance and Testing',
    status: true,
  },
  {
    title: 'Quality Assurance and Testing - Other',
    roleCategory: 'Quality Assurance and Testing',
    status: true,
  },
  {
    title: 'Automation Architect',
    roleCategory: 'Software Development',
    status: true,
  },
  {
    title: 'Automation Developer',
    roleCategory: 'Software Development',
    status: true,
  },
  {
    title: 'Back End Developer',
    roleCategory: 'Software Development',
    status: true,
  },
  {
    title: 'Big Data Engineer',
    roleCategory: 'Software Development',
    status: true,
  },
  {
    title: 'CRM Architect',
    roleCategory: 'Software Development',
    status: true,
  },
  {
    title: 'Data Engineer',
    roleCategory: 'Software Development',
    status: true,
  },
  {
    title: 'Data Platform Engineer',
    roleCategory: 'Software Development',
    status: true,
  },
  {
    title: 'Embedded Systems Engineer',
    roleCategory: 'Software Development',
    status: true,
  },
  {
    title: 'Engineering Manager',
    roleCategory: 'Software Development',
    status: true,
  },
  {
    title: 'ERP Architect',
    roleCategory: 'Software Development',
    status: true,
  },
  {
    title: 'ERP Developer',
    roleCategory: 'Software Development',
    status: true,
  },
  {
    title: 'Front End Developer',
    roleCategory: 'Software Development',
    status: true,
  },
  {
    title: 'Full Stack Developer',
    roleCategory: 'Software Development',
    status: true,
  },
  {
    title: 'Game Developer / Programmer',
    roleCategory: 'Software Development',
    status: true,
  },
  {
    title: 'Head - Engineering',
    roleCategory: 'Software Development',
    status: true,
  },
  {
    title: 'Mobile / App Developer',
    roleCategory: 'Software Development',
    status: true,
  },
  {
    title: 'Practice Manager / Head',
    roleCategory: 'Software Development',
    status: true,
  },
  {
    title: 'Search Engineer',
    roleCategory: 'Software Development',
    status: true,
  },
  {
    title: 'Solution Architect',
    roleCategory: 'Software Development',
    status: true,
  },
  {
    title: 'Technical Architect',
    roleCategory: 'Software Development',
    status: true,
  },
  {
    title: 'Technical Lead',
    roleCategory: 'Software Development',
    status: true,
  },
  {
    title: 'Webmaster',
    roleCategory: 'Software Development',
    status: true,
  },
  {
    title: 'Software Development - Other',
    roleCategory: 'Software Development',
    status: true,
  },
  {
    title: 'Accountant / Accounts Executive',
    roleCategory: 'Accounting & Taxation',
    status: true,
  },
  {
    title: 'Accounts Manager',
    roleCategory: 'Accounting & Taxation',
    status: true,
  },
  {
    title: 'Accounts Payable Executive',
    roleCategory: 'Accounting & Taxation',
    status: true,
  },
  {
    title: 'Accounts Payable Manager',
    roleCategory: 'Accounting & Taxation',
    status: true,
  },
  {
    title: 'Accounts Receivable Executive',
    roleCategory: 'Accounting & Taxation',
    status: true,
  },
  {
    title: 'Accounts Receivable Manager',
    roleCategory: 'Accounting & Taxation',
    status: true,
  },
  {
    title: 'Cashier',
    roleCategory: 'Accounting & Taxation',
    status: true,
  },
  {
    title: 'Chartered Accountant (CA)',
    roleCategory: 'Accounting & Taxation',
    status: true,
  },
  {
    title: 'Chief Accountant',
    roleCategory: 'Accounting & Taxation',
    status: true,
  },
  {
    title: 'Chief Accounting Officer (CAO)',
    roleCategory: 'Accounting & Taxation',
    status: true,
  },
  {
    title: 'Company Secretary / Compliance Officer',
    roleCategory: 'Accounting & Taxation',
    status: true,
  },
  {
    title: 'Cost Accountant',
    roleCategory: 'Accounting & Taxation',
    status: true,
  },
  {
    title: 'Financial Accountant',
    roleCategory: 'Accounting & Taxation',
    status: true,
  },
  {
    title: 'Head - Taxation',
    roleCategory: 'Accounting & Taxation',
    status: true,
  },
  {
    title: 'Manager Taxation',
    roleCategory: 'Accounting & Taxation',
    status: true,
  },
  {
    title: 'Tax Analyst',
    roleCategory: 'Accounting & Taxation',
    status: true,
  },
  {
    title: 'Taxation Executive',
    roleCategory: 'Accounting & Taxation',
    status: true,
  },
  {
    title: 'Accounting & Taxation - Other',
    roleCategory: 'Accounting & Taxation',
    status: true,
  },
  {
    title: 'Audit Executive',
    roleCategory: 'Audit & Control',
    status: true,
  },
  {
    title: 'Audit Manager',
    roleCategory: 'Audit & Control',
    status: true,
  },
  {
    title: 'Internal Auditor',
    roleCategory: 'Audit & Control',
    status: true,
  },
  {
    title: 'Audit & Control - Other',
    roleCategory: 'Audit & Control',
    status: true,
  },
  {
    title: 'Analyst - Financial Planning & Analysis',
    roleCategory: 'Finance',
    status: true,
  },
  {
    title: 'Chief Financial Officer (CFO)',
    roleCategory: 'Finance',
    status: true,
  },
  {
    title: 'Finance Executive',
    roleCategory: 'Finance',
    status: true,
  },
  {
    title: 'Finance Manager',
    roleCategory: 'Finance',
    status: true,
  },
  {
    title: 'Financial Analyst',
    roleCategory: 'Finance',
    status: true,
  },
  {
    title: 'Financial Controller',
    roleCategory: 'Finance',
    status: true,
  },
  {
    title: 'Head - Finance & Accounts',
    roleCategory: 'Finance',
    status: true,
  },
  {
    title: 'Investor Relations Officer',
    roleCategory: 'Finance',
    status: true,
  },
  {
    title: 'Manager - Financial Planning & Analysis',
    roleCategory: 'Finance',
    status: true,
  },
  {
    title: 'MIS Executive',
    roleCategory: 'Finance',
    status: true,
  },
  {
    title: 'Finance - Other',
    roleCategory: 'Finance',
    status: true,
  },
  {
    title: 'Billing Executive',
    roleCategory: 'Payroll & Transactions',
    status: true,
  },
  {
    title: 'Payroll Executive',
    roleCategory: 'Payroll & Transactions',
    status: true,
  },
  {
    title: 'Payroll Manager',
    roleCategory: 'Payroll & Transactions',
    status: true,
  },
  {
    title: 'Payroll & Transactions - Other',
    roleCategory: 'Payroll & Transactions',
    status: true,
  },
  {
    title: 'Forex Officer',
    roleCategory: 'Treasury',
    status: true,
  },
  {
    title: 'Treasury Analyst',
    roleCategory: 'Treasury',
    status: true,
  },
  {
    title: 'Treasury Executive',
    roleCategory: 'Treasury',
    status: true,
  },
  {
    title: 'Treasury Head',
    roleCategory: 'Treasury',
    status: true,
  },
  {
    title: 'Treasury Manager',
    roleCategory: 'Treasury',
    status: true,
  },
  {
    title: 'Treasury Operations Manager',
    roleCategory: 'Treasury',
    status: true,
  },
  {
    title: 'Treasury - Other',
    roleCategory: 'Treasury',
    status: true,
  },
  {
    title: 'Finance & Accounting - Other',
    roleCategory: 'Finance & Accounting - Other',
    status: true,
  },
  {
    title: 'C & B Management',
    roleCategory: 'Compensation & Benefits',
    status: true,
  },
  {
    title: 'Head - C & B',
    roleCategory: 'Compensation & Benefits',
    status: true,
  },
  {
    title: 'Performance Management',
    roleCategory: 'Compensation & Benefits',
    status: true,
  },
  {
    title: 'Compensation & Benefits - Other',
    roleCategory: 'Compensation & Benefits',
    status: true,
  },
  {
    title: 'Employee Relations Management',
    roleCategory: 'Employee Relations',
    status: true,
  },
  {
    title: 'HR Policy & Compliance',
    roleCategory: 'Employee Relations',
    status: true,
  },
  {
    title: 'Industrial Relations',
    roleCategory: 'Employee Relations',
    status: true,
  },
  {
    title: 'Employee Relations - Other',
    roleCategory: 'Employee Relations',
    status: true,
  },
  {
    title: 'Advisor / Consultant',
    roleCategory: 'HR Business Advisory',
    status: true,
  },
  {
    title: 'HR Business Advisory - Other',
    roleCategory: 'HR Business Advisory',
    status: true,
  },
  {
    title: 'Background Verification',
    roleCategory: 'HR Operations',
    status: true,
  },
  {
    title: 'Diversity & Inclusion',
    roleCategory: 'HR Operations',
    status: true,
  },
  {
    title: 'Exit Management',
    roleCategory: 'HR Operations',
    status: true,
  },
  {
    title: 'Head - HR',
    roleCategory: 'HR Operations',
    status: true,
  },
  {
    title: 'Head - HRBP',
    roleCategory: 'HR Operations',
    status: true,
  },
  {
    title: 'Head - Shared Services',
    roleCategory: 'HR Operations',
    status: true,
  },
  {
    title: 'HR Analyst',
    roleCategory: 'HR Operations',
    status: true,
  },
  {
    title: 'HR Business Partner (HRBP)',
    roleCategory: 'HR Operations',
    status: true,
  },
  {
    title: 'HR Generalist',
    roleCategory: 'HR Operations',
    status: true,
  },
  {
    title: 'Outplacement',
    roleCategory: 'HR Operations',
    status: true,
  },
  {
    title: 'Shared Services',
    roleCategory: 'HR Operations',
    status: true,
  },
  {
    title: 'HR Operations - Other',
    roleCategory: 'HR Operations',
    status: true,
  },
  {
    title: 'Blue Collar Recruiter',
    roleCategory: 'Recruitment & Talent Acquisition',
    status: true,
  },
  {
    title: 'Campus Recruitment / Campus Relations',
    roleCategory: 'Recruitment & Talent Acquisition',
    status: true,
  },
  {
    title: 'Head - Recruitment',
    roleCategory: 'Recruitment & Talent Acquisition',
    status: true,
  },
  {
    title: 'IT Recruiter',
    roleCategory: 'Recruitment & Talent Acquisition',
    status: true,
  },
  {
    title: 'Leadership Recruiter',
    roleCategory: 'Recruitment & Talent Acquisition',
    status: true,
  },
  {
    title: 'Non IT Recruiter',
    roleCategory: 'Recruitment & Talent Acquisition',
    status: true,
  },
  {
    title: 'Staffing Management',
    roleCategory: 'Recruitment & Talent Acquisition',
    status: true,
  },
  {
    title: 'Recruitment & Talent Acquisition - Other',
    roleCategory: 'Recruitment & Talent Acquisition',
    status: true,
  },
  {
    title: 'Employer / Employee Branding',
    roleCategory: 'Recruitment Marketing & Branding',
    status: true,
  },
  {
    title: 'Recruitment Marketing & Branding - Other',
    roleCategory: 'Recruitment Marketing & Branding',
    status: true,
  },
  {
    title: 'Human Resources - Other',
    roleCategory: 'Human Resources - Other',
    status: true,
  },
  {
    title: 'Cloud System Administration',
    roleCategory: 'IT Infrastructure Services',
    status: true,
  },
  {
    title: 'Configuration and Deployment Management',
    roleCategory: 'IT Infrastructure Services',
    status: true,
  },
  {
    title: 'Data Centre Ops and Server Management',
    roleCategory: 'IT Infrastructure Services',
    status: true,
  },
  {
    title: 'Incident Management',
    roleCategory: 'IT Infrastructure Services',
    status: true,
  },
  {
    title: 'Infrastructure Architect',
    roleCategory: 'IT Infrastructure Services',
    status: true,
  },
  {
    title: 'IT Audit',
    roleCategory: 'IT Infrastructure Services',
    status: true,
  },
  {
    title: 'IT Operations Management',
    roleCategory: 'IT Infrastructure Services',
    status: true,
  },
  {
    title: 'IT Vendor Management',
    roleCategory: 'IT Infrastructure Services',
    status: true,
  },
  {
    title: 'Network Manager',
    roleCategory: 'IT Infrastructure Services',
    status: true,
  },
  {
    title: 'Software Compliance - License Management',
    roleCategory: 'IT Infrastructure Services',
    status: true,
  },
  {
    title: 'System Analyst',
    roleCategory: 'IT Infrastructure Services',
    status: true,
  },
  {
    title: 'IT Infrastructure Services - Other',
    roleCategory: 'IT Infrastructure Services',
    status: true,
  },
  {
    title: 'Application Security Engineer',
    roleCategory: 'IT Security',
    status: true,
  },
  {
    title: 'Chief Information Security Officer (CISO)',
    roleCategory: 'IT Security',
    status: true,
  },
  {
    title: 'Cyber Security',
    roleCategory: 'IT Security',
    status: true,
  },
  {
    title: 'DevSec Engineer',
    roleCategory: 'IT Security',
    status: true,
  },
  {
    title: 'Head - Information Security',
    roleCategory: 'IT Security',
    status: true,
  },
  {
    title: 'Manager Information Security',
    roleCategory: 'IT Security',
    status: true,
  },
  {
    title: 'Network Security Engineer',
    roleCategory: 'IT Security',
    status: true,
  },
  {
    title: 'Security Administrator',
    roleCategory: 'IT Security',
    status: true,
  },
  {
    title: 'Security Architect / Consultant',
    roleCategory: 'IT Security',
    status: true,
  },
  {
    title: 'Security Auditor',
    roleCategory: 'IT Security',
    status: true,
  },
  {
    title: 'Security Engineer / Analyst',
    roleCategory: 'IT Security',
    status: true,
  },
  {
    title: 'System Security Engineer',
    roleCategory: 'IT Security',
    status: true,
  },
  {
    title: 'IT Security - Other',
    roleCategory: 'IT Security',
    status: true,
  },
  {
    title: 'Desktop Engineer',
    roleCategory: 'IT Support',
    status: true,
  },
  {
    title: 'Head - Tech Support',
    roleCategory: 'IT Support',
    status: true,
  },
  {
    title: 'IT Asset Management',
    roleCategory: 'IT Support',
    status: true,
  },
  {
    title: 'Problem Management',
    roleCategory: 'IT Support',
    status: true,
  },
  {
    title: 'IT Support - Other',
    roleCategory: 'IT Support',
    status: true,
  },
  {
    title: 'IT & Information Security - Other',
    roleCategory: 'IT & Information Security - Other',
    status: true,
  },
  {
    title: 'Account Director',
    roleCategory: 'Advertising & Creative',
    status: true,
  },
  {
    title: 'Advertising Management',
    roleCategory: 'Advertising & Creative',
    status: true,
  },
  {
    title: 'Art Direction (Advertisement)',
    roleCategory: 'Advertising & Creative',
    status: true,
  },
  {
    title: 'Client Servicing',
    roleCategory: 'Advertising & Creative',
    status: true,
  },
  {
    title: 'Copywriter',
    roleCategory: 'Advertising & Creative',
    status: true,
  },
  {
    title: 'Head - Creative',
    roleCategory: 'Advertising & Creative',
    status: true,
  },
  {
    title: 'Media Buying',
    roleCategory: 'Advertising & Creative',
    status: true,
  },
  {
    title: 'Media Planning',
    roleCategory: 'Advertising & Creative',
    status: true,
  },
  {
    title: 'Visualiser',
    roleCategory: 'Advertising & Creative',
    status: true,
  },
  {
    title: 'Advertising & Creative - Other',
    roleCategory: 'Advertising & Creative',
    status: true,
  },
  {
    title: 'Analyst Relations',
    roleCategory: 'Corporate Communication',
    status: true,
  },
  {
    title: 'Channel Partner / Client Relations',
    roleCategory: 'Corporate Communication',
    status: true,
  },
  {
    title: 'Community Management',
    roleCategory: 'Corporate Communication',
    status: true,
  },
  {
    title: 'Head - Client Relations',
    roleCategory: 'Corporate Communication',
    status: true,
  },
  {
    title: 'Head - Corporate Communication',
    roleCategory: 'Corporate Communication',
    status: true,
  },
  {
    title: 'Head - Media Relations',
    roleCategory: 'Corporate Communication',
    status: true,
  },
  {
    title: 'Public Relations',
    roleCategory: 'Corporate Communication',
    status: true,
  },
  {
    title: 'Social Responsibility Marketing (CSR)',
    roleCategory: 'Corporate Communication',
    status: true,
  },
  {
    title: 'Corporate Communication - Other',
    roleCategory: 'Corporate Communication',
    status: true,
  },
  {
    title: 'Campaign Manager',
    roleCategory: 'Digital Marketing',
    status: true,
  },
  {
    title: 'Content Marketing Manager',
    roleCategory: 'Digital Marketing',
    status: true,
  },
  {
    title: 'Email Marketing',
    roleCategory: 'Digital Marketing',
    status: true,
  },
  {
    title: 'Growth Marketing',
    roleCategory: 'Digital Marketing',
    status: true,
  },
  {
    title: 'Head - Digital Marketing',
    roleCategory: 'Digital Marketing',
    status: true,
  },
  {
    title: 'Marketing Automation Specialist',
    roleCategory: 'Digital Marketing',
    status: true,
  },
  {
    title: 'Performance Marketing Manager',
    roleCategory: 'Digital Marketing',
    status: true,
  },
  {
    title: 'SEM / PPC Specialist',
    roleCategory: 'Digital Marketing',
    status: true,
  },
  {
    title: 'SEO',
    roleCategory: 'Digital Marketing',
    status: true,
  },
  {
    title: 'Social Media Marketing',
    roleCategory: 'Digital Marketing',
    status: true,
  },
  {
    title: 'Digital Marketing - Other',
    roleCategory: 'Digital Marketing',
    status: true,
  },
  {
    title: 'Market Research / Insights Head',
    roleCategory: 'Market Research & Insights',
    status: true,
  },
  {
    title: 'Market Research Executive',
    roleCategory: 'Market Research & Insights',
    status: true,
  },
  {
    title: 'Market Research Manager',
    roleCategory: 'Market Research & Insights',
    status: true,
  },
  {
    title: 'Market Research & Insights - Other',
    roleCategory: 'Market Research & Insights',
    status: true,
  },
  {
    title: 'Affiliate Marketing',
    roleCategory: 'Marketing',
    status: true,
  },
  {
    title: 'Brand Management',
    roleCategory: 'Marketing',
    status: true,
  },
  {
    title: 'Creative Marketing',
    roleCategory: 'Marketing',
    status: true,
  },
  {
    title: 'Direct Marketing',
    roleCategory: 'Marketing',
    status: true,
  },
  {
    title: 'Event Marketing',
    roleCategory: 'Marketing',
    status: true,
  },
  {
    title: 'Head - Marketing',
    roleCategory: 'Marketing',
    status: true,
  },
  {
    title: 'Marketing Manager',
    roleCategory: 'Marketing',
    status: true,
  },
  {
    title: 'Medical Representative (MR)',
    roleCategory: 'Marketing',
    status: true,
  },
  {
    title: 'Product Marketing',
    roleCategory: 'Marketing',
    status: true,
  },
  {
    title: 'Marketing - Other',
    roleCategory: 'Marketing',
    status: true,
  },
  {
    title: 'Marketing and Communication - Other',
    roleCategory: 'Marketing and Communication - Other',
    status: true,
  },
  {
    title: 'Product Analyst',
    roleCategory: 'Product Management - Technology',
    status: true,
  },
  {
    title: 'Product Head',
    roleCategory: 'Product Management - Technology',
    status: true,
  },
  {
    title: 'Product Manager',
    roleCategory: 'Product Management - Technology',
    status: true,
  },
  {
    title: 'Product Operations Associate / Lead',
    roleCategory: 'Product Management - Technology',
    status: true,
  },
  {
    title: 'Technical Product Manager',
    roleCategory: 'Product Management - Technology',
    status: true,
  },
  {
    title: 'Technology Product Management - Other',
    roleCategory: 'Product Management - Technology',
    status: true,
  },
  {
    title: 'Product Manager - Cards',
    roleCategory: 'Product Management - Other',
    status: true,
  },
  {
    title: 'Product Manager - Insurance',
    roleCategory: 'Product Management - Other',
    status: true,
  },
  {
    title: 'Product Manager - Loans',
    roleCategory: 'Product Management - Other',
    status: true,
  },
  {
    title: 'Product Manager - Pharma',
    roleCategory: 'Product Management - Other',
    status: true,
  },
  {
    title: 'Product Manager - Other',
    roleCategory: 'Product Management - Other',
    status: true,
  },
  {
    title: 'Engineering',
    roleCategory: 'Engineering',
    status: true,
  },
  {
    title: 'Management',
    roleCategory: 'Engineering',
    status: true,
  },
  {
    title: 'Operations, Maintenance & Support',
    roleCategory: 'Engineering',
    status: true,
  },
  {
    title: 'Production & Manufacturing - Other',
    roleCategory: 'Management',
    status: true,
  },
  {
    title: 'Engineering',
    roleCategory: 'Management',
    status: true,
  },
  {
    title: 'Management',
    roleCategory: 'Management',
    status: true,
  },
  {
    title: 'Operations, Maintenance & Support',
    roleCategory: 'Management',
    status: true,
  },
  {
    title: 'Production & Manufacturing - Other',
    roleCategory: 'Management',
    status: true,
  },
  {
    title: 'Assembly Line Operator',
    roleCategory: 'Operations, Maintenance & Support',
    status: true,
  },
  {
    title: 'Chemist',
    roleCategory: 'Operations, Maintenance & Support',
    status: true,
  },
  {
    title: 'Electrician',
    roleCategory: 'Operations, Maintenance & Support',
    status: true,
  },
  {
    title: 'Fitter / Turner',
    roleCategory: 'Operations, Maintenance & Support',
    status: true,
  },
  {
    title: 'Foreman / Technician',
    roleCategory: 'Operations, Maintenance & Support',
    status: true,
  },
  {
    title: 'HVAC Supervisor',
    roleCategory: 'Operations, Maintenance & Support',
    status: true,
  },
  {
    title: 'Line Leader / Supervisor',
    roleCategory: 'Operations, Maintenance & Support',
    status: true,
  },
  {
    title: 'Machine Operator / Machinist',
    roleCategory: 'Operations, Maintenance & Support',
    status: true,
  },
  {
    title: 'Machine Shop Incharge / Supervisor',
    roleCategory: 'Operations, Maintenance & Support',
    status: true,
  },
  {
    title: 'Maintenance Engineer',
    roleCategory: 'Operations, Maintenance & Support',
    status: true,
  },
  {
    title: 'MEP Supervisor',
    roleCategory: 'Operations, Maintenance & Support',
    status: true,
  },
  {
    title: 'Production Manager / Supervisor',
    roleCategory: 'Operations, Maintenance & Support',
    status: true,
  },
  {
    title: 'Service / Maintenance Supervisor',
    roleCategory: 'Operations, Maintenance & Support',
    status: true,
  },
  {
    title: 'Service Engineer',
    roleCategory: 'Operations, Maintenance & Support',
    status: true,
  },
  {
    title: 'Site Supervisor',
    roleCategory: 'Operations, Maintenance & Support',
    status: true,
  },
  {
    title: 'Tool & Die Maker',
    roleCategory: 'Operations, Maintenance & Support',
    status: true,
  },
  {
    title: 'Tool Room Manager',
    roleCategory: 'Operations, Maintenance & Support',
    status: true,
  },
  {
    title: 'Welder',
    roleCategory: 'Operations, Maintenance & Support',
    status: true,
  },
  {
    title: 'Welding Inspector / Supervisor',
    roleCategory: 'Operations, Maintenance & Support',
    status: true,
  },
  {
    title: 'Workshop Manager / Supervisor',
    roleCategory: 'Operations, Maintenance & Support',
    status: true,
  },
  {
    title: 'Operations, Maintenance & Support - Other',
    roleCategory: 'Operations, Maintenance & Support',
    status: true,
  },
  {
    title: 'Production & Manufacturing - Other',
    roleCategory: 'Production & Manufacturing - Other',
    status: true,
  },
  {
    title: 'Construction / Manufacturing',
    roleCategory: 'Construction / Manufacturing',
    status: true,
  },
  {
    title: 'Finance',
    roleCategory: 'Construction / Manufacturing',
    status: true,
  },
  {
    title: 'Technology / IT',
    roleCategory: 'Construction / Manufacturing',
    status: true,
  },
  {
    title: 'Other Program / Project Management',
    roleCategory: 'Construction / Manufacturing',
    status: true,
  },
  {
    title: 'Finance Program Manager',
    roleCategory: 'Finance',
    status: true,
  },
  {
    title: 'Finance Project Head',
    roleCategory: 'Finance',
    status: true,
  },
  {
    title: 'Finance Project Manager',
    roleCategory: 'Finance',
    status: true,
  },
  {
    title: 'Finance - Other',
    roleCategory: 'Finance',
    status: true,
  },
  {
    title: 'Change Manager',
    roleCategory: 'Technology / IT',
    status: true,
  },
  {
    title: 'Director - Program Management',
    roleCategory: 'Technology / IT',
    status: true,
  },
  {
    title: 'Hardware & Network - Project Management',
    roleCategory: 'Technology / IT',
    status: true,
  },
  {
    title: 'Head - Program Management',
    roleCategory: 'Technology / IT',
    status: true,
  },
  {
    title: 'IT Project Lead',
    roleCategory: 'Technology / IT',
    status: true,
  },
  {
    title: 'IT Project Manager',
    roleCategory: 'Technology / IT',
    status: true,
  },
  {
    title: 'Principal Program Manager',
    roleCategory: 'Technology / IT',
    status: true,
  },
  {
    title: 'Program Manager - Technology / IT',
    roleCategory: 'Technology / IT',
    status: true,
  },
  {
    title: 'Technology / IT - Other',
    roleCategory: 'Technology / IT',
    status: true,
  },
  {
    title: 'Document Controller',
    roleCategory: 'Other Program / Project Management',
    status: true,
  },
  {
    title: 'Head - Program / Project',
    roleCategory: 'Other Program / Project Management',
    status: true,
  },
  {
    title: 'Implementation Manager',
    roleCategory: 'Other Program / Project Management',
    status: true,
  },
  {
    title: 'PMO Executive',
    roleCategory: 'Other Program / Project Management',
    status: true,
  },
  {
    title: 'Program Manager',
    roleCategory: 'Other Program / Project Management',
    status: true,
  },
  {
    title: 'Project Coordinator',
    roleCategory: 'Other Program / Project Management',
    status: true,
  },
  {
    title: 'Project Manager',
    roleCategory: 'Other Program / Project Management',
    status: true,
  },
  {
    title: 'Project Planner / Scheduler',
    roleCategory: 'Other Program / Project Management',
    status: true,
  },
  {
    title: 'Other Program / Project Management - Other',
    roleCategory: 'Other Program / Project Management',
    status: true,
  },
  {
    title: 'Call Quality Analyst',
    roleCategory: 'Business Process Quality',
    status: true,
  },
  {
    title: 'Head - Quality',
    roleCategory: 'Business Process Quality',
    status: true,
  },
  {
    title: 'Process / Operational Excellence',
    roleCategory: 'Business Process Quality',
    status: true,
  },
  {
    title: 'Process Excellence / Six Sigma Manager',
    roleCategory: 'Business Process Quality',
    status: true,
  },
  {
    title: 'Quality Analyst',
    roleCategory: 'Business Process Quality',
    status: true,
  },
  {
    title: 'Quality Auditor / Inspector',
    roleCategory: 'Business Process Quality',
    status: true,
  },
  {
    title: 'Quality Manager / Supervisor',
    roleCategory: 'Business Process Quality',
    status: true,
  },
  {
    title: 'Quality Specialist',
    roleCategory: 'Business Process Quality',
    status: true,
  },
  {
    title: 'Business Process Quality - Other',
    roleCategory: 'Business Process Quality',
    status: true,
  },
  {
    title: 'IPQA Officer',
    roleCategory: 'Production & Manufacturing',
    status: true,
  },
  {
    title: 'QA / QC Analyst',
    roleCategory: 'Production & Manufacturing',
    status: true,
  },
  {
    title: 'QA / QC Executive',
    roleCategory: 'Production & Manufacturing',
    status: true,
  },
  {
    title: 'QA / QC Manager',
    roleCategory: 'Production & Manufacturing',
    status: true,
  },
  {
    title: 'QC / Lab Chemist',
    roleCategory: 'Production & Manufacturing',
    status: true,
  },
  {
    title: 'QC Microbiologist',
    roleCategory: 'Production & Manufacturing',
    status: true,
  },
  {
    title: 'Quality Engineer',
    roleCategory: 'Production & Manufacturing',
    status: true,
  },
  {
    title: 'Quality Head',
    roleCategory: 'Production & Manufacturing',
    status: true,
  },
  {
    title: 'Production & Manufacturing - Other',
    roleCategory: 'Production & Manufacturing',
    status: true,
  },
  {
    title: 'Quality Consultant',
    roleCategory: 'Quality Assurance - Other',
    status: true,
  },
  {
    title: 'Quality Assurance - Other',
    roleCategory: 'Quality Assurance - Other',
    status: true,
  },
  {
    title: 'Bidding / Auction / Proposal',
    roleCategory: 'BD / Pre Sales',
    status: true,
  },
  {
    title: 'Business Development Executive (BDE)',
    roleCategory: 'BD / Pre Sales',
    status: true,
  },
  {
    title: 'Business Development Manager (BDM)',
    roleCategory: 'BD / Pre Sales',
    status: true,
  },
  {
    title: 'Events & Promotions',
    roleCategory: 'BD / Pre Sales',
    status: true,
  },
  {
    title: 'Head - BD / Pre Sales',
    roleCategory: 'BD / Pre Sales',
    status: true,
  },
  {
    title: 'Lead Generation / Qualification',
    roleCategory: 'BD / Pre Sales',
    status: true,
  },
  {
    title: 'Merchant Acquisition - BD / Pre Sales',
    roleCategory: 'BD / Pre Sales',
    status: true,
  },
  {
    title: 'Pre Sales Consultant',
    roleCategory: 'BD / Pre Sales',
    status: true,
  },
  {
    title: 'Pre Sales Engineer',
    roleCategory: 'BD / Pre Sales',
    status: true,
  },
  {
    title: 'Pre Sales Head',
    roleCategory: 'BD / Pre Sales',
    status: true,
  },
  {
    title: 'BD / Pre Sales - Other',
    roleCategory: 'BD / Pre Sales',
    status: true,
  },
  {
    title: 'Advertising Sales',
    roleCategory: 'Enterprise & B2B Sales',
    status: true,
  },
  {
    title: 'Area Sales Manager (B2B)',
    roleCategory: 'Enterprise & B2B Sales',
    status: true,
  },
  {
    title: 'Branch Sales Executive',
    roleCategory: 'Enterprise & B2B Sales',
    status: true,
  },
  {
    title: 'Branch Sales Manager (B2B)',
    roleCategory: 'Enterprise & B2B Sales',
    status: true,
  },
  {
    title: 'Channel Management',
    roleCategory: 'Enterprise & B2B Sales',
    status: true,
  },
  {
    title: 'Enterprise Sales Manager',
    roleCategory: 'Enterprise & B2B Sales',
    status: true,
  },
  {
    title: 'Key Account Manager',
    roleCategory: 'Enterprise & B2B Sales',
    status: true,
  },
  {
    title: 'Regional Sales Manager (B2B)',
    roleCategory: 'Enterprise & B2B Sales',
    status: true,
  },
  {
    title: 'Sales Head (B2B)',
    roleCategory: 'Enterprise & B2B Sales',
    status: true,
  },
  {
    title: 'Territory Sales Manager (B2B)',
    roleCategory: 'Enterprise & B2B Sales',
    status: true,
  },
  {
    title: 'Zonal Sales Manager (B2B)',
    roleCategory: 'Enterprise & B2B Sales',
    status: true,
  },
  {
    title: 'Enterprise & B2B Sales - Other',
    roleCategory: 'Enterprise & B2B Sales',
    status: true,
  },
  {
    title: 'Area Sales Manager (B2C)',
    roleCategory: 'Retail & B2C Sales',
    status: true,
  },
  {
    title: 'Branch Sales Manager (B2C)',
    roleCategory: 'Retail & B2C Sales',
    status: true,
  },
  {
    title: 'Direct Sales Executive',
    roleCategory: 'Retail & B2C Sales',
    status: true,
  },
  {
    title: 'Field Sales Executive',
    roleCategory: 'Retail & B2C Sales',
    status: true,
  },
  {
    title: 'Real Estate Consultant / Agent',
    roleCategory: 'Retail & B2C Sales',
    status: true,
  },
  {
    title: 'Regional Sales Manager (B2C)',
    roleCategory: 'Retail & B2C Sales',
    status: true,
  },
  {
    title: 'Retail Banking Sales',
    roleCategory: 'Retail & B2C Sales',
    status: true,
  },
  {
    title: 'Retail Sales',
    roleCategory: 'Retail & B2C Sales',
    status: true,
  },
  {
    title: 'Sales Head (B2C)',
    roleCategory: 'Retail & B2C Sales',
    status: true,
  },
  {
    title: 'Telesales',
    roleCategory: 'Retail & B2C Sales',
    status: true,
  },
  {
    title: 'Territory Sales Manager (B2C)',
    roleCategory: 'Retail & B2C Sales',
    status: true,
  },
  {
    title: 'Zonal Sales Manager (B2C)',
    roleCategory: 'Retail & B2C Sales',
    status: true,
  },
  {
    title: 'Retail & B2C Sales - Other',
    roleCategory: 'Retail & B2C Sales',
    status: true,
  },
  {
    title: 'Client Retention',
    roleCategory: 'Sales Support & Operations',
    status: true,
  },
  {
    title: 'Customer Engagement',
    roleCategory: 'Sales Support & Operations',
    status: true,
  },
  {
    title: 'Sales Operations / Enablement',
    roleCategory: 'Sales Support & Operations',
    status: true,
  },
  {
    title: 'Sales Support & Operations - Other',
    roleCategory: 'Sales Support & Operations',
    status: true,
  },
  {
    title: '3D Visualizer / Artist',
    roleCategory: 'Architecture & Interior Design',
    status: true,
  },
  {
    title: 'Architect',
    roleCategory: 'Architecture & Interior Design',
    status: true,
  },
  {
    title: 'Design Manager',
    roleCategory: 'Architecture & Interior Design',
    status: true,
  },
  {
    title: 'Director - Architecture',
    roleCategory: 'Architecture & Interior Design',
    status: true,
  },
  {
    title: 'Draughtsman',
    roleCategory: 'Architecture & Interior Design',
    status: true,
  },
  {
    title: 'Interior Designer',
    roleCategory: 'Architecture & Interior Design',
    status: true,
  },
  {
    title: 'Landscape Architect',
    roleCategory: 'Architecture & Interior Design',
    status: true,
  },
  {
    title: 'Naval Architect',
    roleCategory: 'Architecture & Interior Design',
    status: true,
  },
  {
    title: 'Project Architect',
    roleCategory: 'Architecture & Interior Design',
    status: true,
  },
  {
    title: 'Store Designer',
    roleCategory: 'Architecture & Interior Design',
    status: true,
  },
  {
    title: 'Town / Urban Planner',
    roleCategory: 'Architecture & Interior Design',
    status: true,
  },
  {
    title: 'Architecture & Interior Design - Other',
    roleCategory: 'Architecture & Interior Design',
    status: true,
  },
  {
    title: 'Accessory Designer',
    roleCategory: 'Fashion & Accessories',
    status: true,
  },
  {
    title: 'Fashion Designer',
    roleCategory: 'Fashion & Accessories',
    status: true,
  },
  {
    title: 'Fashion Stylist',
    roleCategory: 'Fashion & Accessories',
    status: true,
  },
  {
    title: 'Footwear Designer',
    roleCategory: 'Fashion & Accessories',
    status: true,
  },
  {
    title: 'Jewellery Designer',
    roleCategory: 'Fashion & Accessories',
    status: true,
  },
  {
    title: 'Pattern Master',
    roleCategory: 'Fashion & Accessories',
    status: true,
  },
  {
    title: 'Textile Designer',
    roleCategory: 'Fashion & Accessories',
    status: true,
  },
  {
    title: 'Fashion & Accessories - Other',
    roleCategory: 'Fashion & Accessories',
    status: true,
  },
  {
    title: 'Content Designer',
    roleCategory: 'UI / UX',
    status: true,
  },
  {
    title: 'Interaction Designer',
    roleCategory: 'UI / UX',
    status: true,
  },
  {
    title: 'UI / UX Designer',
    roleCategory: 'UI / UX',
    status: true,
  },
  {
    title: 'User Research Manager',
    roleCategory: 'UI / UX',
    status: true,
  },
  {
    title: 'User Researcher',
    roleCategory: 'UI / UX',
    status: true,
  },
  {
    title: 'UX Architect',
    roleCategory: 'UI / UX',
    status: true,
  },
  {
    title: 'UX Design Manager',
    roleCategory: 'UI / UX',
    status: true,
  },
  {
    title: 'UX Head',
    roleCategory: 'UI / UX',
    status: true,
  },
  {
    title: 'UX Writer',
    roleCategory: 'UI / UX',
    status: true,
  },
  {
    title: 'UI / UX - Other',
    roleCategory: 'UI / UX',
    status: true,
  },
  {
    title: '3D Modeller',
    roleCategory: 'Other Design',
    status: true,
  },
  {
    title: 'Animator',
    roleCategory: 'Other Design',
    status: true,
  },
  {
    title: 'Chief Creative Officer (CCO)',
    roleCategory: 'Other Design',
    status: true,
  },
  {
    title: 'Chief Design Officer (CDO)',
    roleCategory: 'Other Design',
    status: true,
  },
  {
    title: 'Communication Designer',
    roleCategory: 'Other Design',
    status: true,
  },
  {
    title: 'Creative / Art Director',
    roleCategory: 'Other Design',
    status: true,
  },
  {
    title: 'Game Designer',
    roleCategory: 'Other Design',
    status: true,
  },
  {
    title: 'Graphic Designer',
    roleCategory: 'Other Design',
    status: true,
  },
  {
    title: 'Illustrator',
    roleCategory: 'Other Design',
    status: true,
  },
  {
    title: 'Image Editor',
    roleCategory: 'Other Design',
    status: true,
  },
  {
    title: 'Industrial Designer',
    roleCategory: 'Other Design',
    status: true,
  },
  {
    title: 'Motion Graphics Designer',
    roleCategory: 'Other Design',
    status: true,
  },
  {
    title: 'Product Designer',
    roleCategory: 'Other Design',
    status: true,
  },
  {
    title: 'Storyboard Artist',
    roleCategory: 'Other Design',
    status: true,
  },
  {
    title: 'Video Editor',
    roleCategory: 'Other Design',
    status: true,
  },
  {
    title: 'Visual Designer',
    roleCategory: 'Other Design',
    status: true,
  },
  {
    title: 'VR / AR Designer',
    roleCategory: 'Other Design',
    status: true,
  },
  {
    title: 'Web Designer',
    roleCategory: 'Other Design',
    status: true,
  },
  {
    title: 'UX, Design & Architecture - Other',
    roleCategory: 'Other Design',
    status: true,
  },
  {
    title: 'Employee Health and Safety Management',
    roleCategory: 'Administration',
    status: true,
  },
  {
    title: 'Front Office',
    roleCategory: 'Administration',
    status: true,
  },
  {
    title: 'Head - Administration',
    roleCategory: 'Administration',
    status: true,
  },
  {
    title: 'Inventory Management',
    roleCategory: 'Administration',
    status: true,
  },
  {
    title: 'Office Admin',
    roleCategory: 'Administration',
    status: true,
  },
  {
    title: 'Transport Management',
    roleCategory: 'Administration',
    status: true,
  },
  {
    title: 'Travel Desk Coordination',
    roleCategory: 'Administration',
    status: true,
  },
  {
    title: 'Vendor Management',
    roleCategory: 'Administration',
    status: true,
  },
  {
    title: 'Administration - Other',
    roleCategory: 'Administration',
    status: true,
  },
  {
    title: 'Back Office',
    roleCategory: 'Facility Management',
    status: true,
  },
  {
    title: 'Equipment Management',
    roleCategory: 'Facility Management',
    status: true,
  },
  {
    title: 'Facility Manager',
    roleCategory: 'Facility Management',
    status: true,
  },
  {
    title: 'Floor / Building Manager',
    roleCategory: 'Facility Management',
    status: true,
  },
  {
    title: 'Food & Beverage Management',
    roleCategory: 'Facility Management',
    status: true,
  },
  {
    title: 'Head - Facilities',
    roleCategory: 'Facility Management',
    status: true,
  },
  {
    title: 'Housekeeping',
    roleCategory: 'Facility Management',
    status: true,
  },
  {
    title: 'Property Manager',
    roleCategory: 'Facility Management',
    status: true,
  },
  {
    title: 'Repair and Maintenance',
    roleCategory: 'Facility Management',
    status: true,
  },
  {
    title: 'Security Management',
    roleCategory: 'Facility Management',
    status: true,
  },
  {
    title: 'Facility Management - Other',
    roleCategory: 'Facility Management',
    status: true,
  },
  {
    title: 'Cabin Crew Supervisor',
    roleCategory: 'Airline Services',
    status: true,
  },
  {
    title: 'Flight Attendant / Steward',
    roleCategory: 'Airline Services',
    status: true,
  },
  {
    title: 'Airline Services - Other',
    roleCategory: 'Airline Services',
    status: true,
  },
  {
    title: 'Aerospace Engineer',
    roleCategory: 'Aviation Engineering',
    status: true,
  },
  {
    title: 'Aircraft / Flight Technician',
    roleCategory: 'Aviation Engineering',
    status: true,
  },
  {
    title: 'Aircraft Maintenance Engineer',
    roleCategory: 'Aviation Engineering',
    status: true,
  },
  {
    title: 'Aviation Engineer',
    roleCategory: 'Aviation Engineering',
    status: true,
  },
  {
    title: 'Flight Engineer',
    roleCategory: 'Aviation Engineering',
    status: true,
  },
  {
    title: 'Radio Engineer / Operator',
    roleCategory: 'Aviation Engineering',
    status: true,
  },
  {
    title: 'Aviation Engineering - Other',
    roleCategory: 'Aviation Engineering',
    status: true,
  },
  {
    title: 'Air Traffic Controller',
    roleCategory: 'Flight & Airport Operations',
    status: true,
  },
  {
    title: 'Airport Duty Manager',
    roleCategory: 'Flight & Airport Operations',
    status: true,
  },
  {
    title: 'Airport Operations Manager',
    roleCategory: 'Flight & Airport Operations',
    status: true,
  },
  {
    title: 'Aviation Security Officer',
    roleCategory: 'Flight & Airport Operations',
    status: true,
  },
  {
    title: 'Cargo Agent / Cargo Officer',
    roleCategory: 'Flight & Airport Operations',
    status: true,
  },
  {
    title: 'Flight Dispatcher',
    roleCategory: 'Flight & Airport Operations',
    status: true,
  },
  {
    title: 'Flight Load Controller',
    roleCategory: 'Flight & Airport Operations',
    status: true,
  },
  {
    title: 'Ground Staff',
    roleCategory: 'Flight & Airport Operations',
    status: true,
  },
  {
    title: 'Ramp Agent',
    roleCategory: 'Flight & Airport Operations',
    status: true,
  },
  {
    title: 'Revenue Management Analyst',
    roleCategory: 'Flight & Airport Operations',
    status: true,
  },
  {
    title: 'Ticketing & Reservation Executive',
    roleCategory: 'Flight & Airport Operations',
    status: true,
  },
  {
    title: 'Flight & Airport Operations - Other',
    roleCategory: 'Flight & Airport Operations',
    status: true,
  },
  {
    title: 'Cadet Pilot',
    roleCategory: 'Pilot',
    status: true,
  },
  {
    title: 'Captain / Commander',
    roleCategory: 'Pilot',
    status: true,
  },
  {
    title: 'Co-Pilot / First Officer / Second Officer',
    roleCategory: 'Pilot',
    status: true,
  },
  {
    title: 'Flight Instructor',
    roleCategory: 'Pilot',
    status: true,
  },
  {
    title: 'Helicopter Pilot',
    roleCategory: 'Pilot',
    status: true,
  },
  {
    title: 'UAV Pilot',
    roleCategory: 'Pilot',
    status: true,
  },
  {
    title: 'Pilot - Other',
    roleCategory: 'Pilot',
    status: true,
  },
  {
    title: 'Aviation & Aerospace - Other',
    roleCategory: 'Aviation & Aerospace - Other',
    status: true,
  },
  {
    title: '3D Designer',
    roleCategory: 'Construction Engineering',
    status: true,
  },
  {
    title: 'Billing / Planning Engineer',
    roleCategory: 'Construction Engineering',
    status: true,
  },
  {
    title: 'Chief Engineer',
    roleCategory: 'Construction Engineering',
    status: true,
  },
  {
    title: 'Civil Engineer',
    roleCategory: 'Construction Engineering',
    status: true,
  },
  {
    title: 'Construction / Site Supervisor',
    roleCategory: 'Construction Engineering',
    status: true,
  },
  {
    title: 'Construction Materials Manager',
    roleCategory: 'Construction Engineering',
    status: true,
  },
  {
    title: 'Electrical Engineer',
    roleCategory: 'Construction Engineering',
    status: true,
  },
  {
    title: 'FEA Engineer',
    roleCategory: 'Construction Engineering',
    status: true,
  },
  {
    title: 'Geotechnical Engineer',
    roleCategory: 'Construction Engineering',
    status: true,
  },
  {
    title: 'Layout Engineer',
    roleCategory: 'Construction Engineering',
    status: true,
  },
  {
    title: 'Mechanical Engineer',
    roleCategory: 'Construction Engineering',
    status: true,
  },
  {
    title: 'MEP Engineer',
    roleCategory: 'Construction Engineering',
    status: true,
  },
  {
    title: 'Project Engineer',
    roleCategory: 'Construction Engineering',
    status: true,
  },
  {
    title: 'Structural Engineer',
    roleCategory: 'Construction Engineering',
    status: true,
  },
  {
    title: 'Tender Executive',
    roleCategory: 'Construction Engineering',
    status: true,
  },
  {
    title: 'Tender Manager',
    roleCategory: 'Construction Engineering',
    status: true,
  },
  {
    title: 'Transportation Engineer',
    roleCategory: 'Construction Engineering',
    status: true,
  },
  {
    title: 'Tunnel Engineer',
    roleCategory: 'Construction Engineering',
    status: true,
  },
  {
    title: 'Construction Engineering - Other',
    roleCategory: 'Construction Engineering',
    status: true,
  },
  {
    title: 'Geographic Information System / GIS',
    roleCategory: 'Surveying',
    status: true,
  },
  {
    title: 'Hydrographic Surveying',
    roleCategory: 'Surveying',
    status: true,
  },
  {
    title: 'Land Surveying',
    roleCategory: 'Surveying',
    status: true,
  },
  {
    title: 'Quantity Surveying',
    roleCategory: 'Surveying',
    status: true,
  },
  {
    title: 'Surveying - Other',
    roleCategory: 'Surveying',
    status: true,
  },
  {
    title: 'Cloud Consultant',
    roleCategory: 'IT Consulting',
    status: true,
  },
  {
    title: 'Functional Consultant',
    roleCategory: 'IT Consulting',
    status: true,
  },
  {
    title: 'IT Security Consultant',
    roleCategory: 'IT Consulting',
    status: true,
  },
  {
    title: 'Subject Matter Expert - IT',
    roleCategory: 'IT Consulting',
    status: true,
  },
  {
    title: 'Technical Consultant',
    roleCategory: 'IT Consulting',
    status: true,
  },
  {
    title: 'Transition Manager',
    roleCategory: 'IT Consulting',
    status: true,
  },
  {
    title: 'IT Consulting - Other',
    roleCategory: 'IT Consulting',
    status: true,
  },
  {
    title: 'Associate / Consultant',
    roleCategory: 'Management Consulting',
    status: true,
  },
  {
    title: 'Associate Partner',
    roleCategory: 'Management Consulting',
    status: true,
  },
  {
    title: 'Engagement Manager',
    roleCategory: 'Management Consulting',
    status: true,
  },
  {
    title: 'Partner / Director',
    roleCategory: 'Management Consulting',
    status: true,
  },
  {
    title: 'Principal Consultant',
    roleCategory: 'Management Consulting',
    status: true,
  },
  {
    title: 'Sr. Consultant',
    roleCategory: 'Management Consulting',
    status: true,
  },
  {
    title: 'Management Consulting - Other',
    roleCategory: 'Management Consulting',
    status: true,
  },
  {
    title: 'Buying / Merchandising Consultant',
    roleCategory: 'Other Consulting',
    status: true,
  },
  {
    title: 'Career Coach',
    roleCategory: 'Other Consulting',
    status: true,
  },
  {
    title: 'Environmental Consultant',
    roleCategory: 'Other Consulting',
    status: true,
  },
  {
    title: 'Executive Assistant',
    roleCategory: 'Other Consulting',
    status: true,
  },
  {
    title: 'Financial Consultant',
    roleCategory: 'Other Consulting',
    status: true,
  },
  {
    title: 'Human Resources Consultant',
    roleCategory: 'Other Consulting',
    status: true,
  },
  {
    title: 'Image Consultant',
    roleCategory: 'Other Consulting',
    status: true,
  },
  {
    title: 'Marketing Consultant',
    roleCategory: 'Other Consulting',
    status: true,
  },
  {
    title: 'Operations Consultant',
    roleCategory: 'Other Consulting',
    status: true,
  },
  {
    title: 'Risk & Compliance Consultant',
    roleCategory: 'Other Consulting',
    status: true,
  },
  {
    title: 'Sales Consultant',
    roleCategory: 'Other Consulting',
    status: true,
  },
  {
    title: 'Security Consultant',
    roleCategory: 'Other Consulting',
    status: true,
  },
  {
    title: 'Social Media Consultant',
    roleCategory: 'Other Consulting',
    status: true,
  },
  {
    title: 'Other Consulting - Other',
    roleCategory: 'Other Consulting',
    status: true,
  },
  {
    title: 'Chief Content Officer (CCO)',
    roleCategory: 'Content Management (Print / Online / Electronic)',
    status: true,
  },
  {
    title: 'Content Creation / Writer',
    roleCategory: 'Content Management (Print / Online / Electronic)',
    status: true,
  },
  {
    title: 'Content Designer / Strategist',
    roleCategory: 'Content Management (Print / Online / Electronic)',
    status: true,
  },
  {
    title: 'Content Moderator',
    roleCategory: 'Content Management (Print / Online / Electronic)',
    status: true,
  },
  {
    title: 'Content Publisher',
    roleCategory: 'Content Management (Print / Online / Electronic)',
    status: true,
  },
  {
    title: 'Technical Content Developer',
    roleCategory: 'Content Management (Print / Online / Electronic)',
    status: true,
  },
  {
    title: 'Content Management (Print / Online / Electronic) - Other',
    roleCategory: 'Content Management (Print / Online / Electronic)',
    status: true,
  },
  {
    title: 'Instructional Designer',
    roleCategory: 'Content Management (Print / Online / Electronic)',
    status: true,
  },
  {
    title: 'Assignment Editor',
    roleCategory: 'Editing (Print / Online / Electronic)',
    status: true,
  },
  {
    title: 'Copy Editor',
    roleCategory: 'Editing (Print / Online / Electronic)',
    status: true,
  },
  {
    title: 'Editor / Content Analyst',
    roleCategory: 'Editing (Print / Online / Electronic)',
    status: true,
  },
  {
    title: 'Editor In Chief',
    roleCategory: 'Editing (Print / Online / Electronic)',
    status: true,
  },
  {
    title: 'Input / Output Editor',
    roleCategory: 'Editing (Print / Online / Electronic)',
    status: true,
  },
  {
    title: 'Managing Editor',
    roleCategory: 'Editing (Print / Online / Electronic)',
    status: true,
  },
  {
    title: 'Editing (Print / Online / Electronic) - Other',
    roleCategory: 'Editing (Print / Online / Electronic)',
    status: true,
  },
  {
    title: 'Anchorperson',
    roleCategory: 'Journalism',
    status: true,
  },
  {
    title: 'Reporting / Corresponding',
    roleCategory: 'Journalism',
    status: true,
  },
  {
    title: 'Journalism - Other',
    roleCategory: 'Journalism',
    status: true,
  },
  {
    title: 'Content, Editorial & Journalism - Other',
    roleCategory: 'Content, Editorial & Journalism - Other',
    status: true,
  },
  {
    title: 'CSR Coordinator/Associate',
    roleCategory: 'CSR & Sustainability',
    status: true,
  },
  {
    title: 'CSR Head',
    roleCategory: 'CSR & Sustainability',
    status: true,
  },
  {
    title: 'CSR Manager',
    roleCategory: 'CSR & Sustainability',
    status: true,
  },
  {
    title: 'Sustainability Manager',
    roleCategory: 'CSR & Sustainability',
    status: true,
  },
  {
    title: 'CSR & Sustainability - Other',
    roleCategory: 'CSR & Sustainability',
    status: true,
  },
  {
    title: 'Civil Servant',
    roleCategory: 'Social & Public Service',
    status: true,
  },
  {
    title: 'Fundraising Officer',
    roleCategory: 'Social & Public Service',
    status: true,
  },
  {
    title: 'Social Worker',
    roleCategory: 'Social & Public Service',
    status: true,
  },
  {
    title: 'Volunteer - Social & Public Service',
    roleCategory: 'Social & Public Service',
    status: true,
  },
  {
    title: 'Social & Public Service - Other',
    roleCategory: 'Social & Public Service',
    status: true,
  },
  {
    title: 'Chemical Engineer (Refining)',
    roleCategory: 'Downstream',
    status: true,
  },
  {
    title: 'Engineering Support Manager',
    roleCategory: 'Downstream',
    status: true,
  },
  {
    title: 'Mechanical Engineer (Refining)',
    roleCategory: 'Downstream',
    status: true,
  },
  {
    title: 'Process Engineer (Refining)',
    roleCategory: 'Downstream',
    status: true,
  },
  {
    title: 'Project Engineer (Refining)',
    roleCategory: 'Downstream',
    status: true,
  },
  {
    title: 'Refinery Maintenance Manager',
    roleCategory: 'Downstream',
    status: true,
  },
  {
    title: 'Refinery Manager',
    roleCategory: 'Downstream',
    status: true,
  },
  {
    title: 'Refinery Operations Manager',
    roleCategory: 'Downstream',
    status: true,
  },
  {
    title: 'Refinery Operator',
    roleCategory: 'Downstream',
    status: true,
  },
  {
    title: 'Downstream - Other',
    roleCategory: 'Downstream',
    status: true,
  },
  {
    title: 'Pipeline Control Center Operator',
    roleCategory: 'Midstream',
    status: true,
  },
  {
    title: 'Pipeline Design Engineer',
    roleCategory: 'Midstream',
    status: true,
  },
  {
    title: 'Pipeline Project Supervisor',
    roleCategory: 'Midstream',
    status: true,
  },
  {
    title: 'Supervisor - Instrumentation Pipeline',
    roleCategory: 'Midstream',
    status: true,
  },
  {
    title: 'Midstream - Other',
    roleCategory: 'Midstream',
    status: true,
  },
  {
    title: 'Construction Manager',
    roleCategory: 'Mining',
    status: true,
  },
  {
    title: 'Electrical Engineer (Mining)',
    roleCategory: 'Mining',
    status: true,
  },
  {
    title: 'Geo Technician',
    roleCategory: 'Mining',
    status: true,
  },
  {
    title: 'Metallurgist',
    roleCategory: 'Mining',
    status: true,
  },
  {
    title: 'Mine Manager',
    roleCategory: 'Mining',
    status: true,
  },
  {
    title: 'Mining Engineer',
    roleCategory: 'Mining',
    status: true,
  },
  {
    title: 'Mining Geologist',
    roleCategory: 'Mining',
    status: true,
  },
  {
    title: 'Mining Surveyor',
    roleCategory: 'Mining',
    status: true,
  },
  {
    title: 'Planning Engineer',
    roleCategory: 'Mining',
    status: true,
  },
  {
    title: 'Process Engineer (Mining)',
    roleCategory: 'Mining',
    status: true,
  },
  {
    title: 'Mining - Other',
    roleCategory: 'Mining',
    status: true,
  },
  {
    title: 'Business Development Manager - Power Generation',
    roleCategory: 'Power Generation',
    status: true,
  },
  {
    title: 'Engineering Supervisor',
    roleCategory: 'Power Generation',
    status: true,
  },
  {
    title: 'Nuclear Engineer',
    roleCategory: 'Power Generation',
    status: true,
  },
  {
    title: 'Plant Maintenance Manager',
    roleCategory: 'Power Generation',
    status: true,
  },
  {
    title: 'Plant Mechanical Engineer',
    roleCategory: 'Power Generation',
    status: true,
  },
  {
    title: 'Plant Performance Engineer',
    roleCategory: 'Power Generation',
    status: true,
  },
  {
    title: 'Plant Project Manager',
    roleCategory: 'Power Generation',
    status: true,
  },
  {
    title: 'Power Plant Technician',
    roleCategory: 'Power Generation',
    status: true,
  },
  {
    title: 'Power Production Manager',
    roleCategory: 'Power Generation',
    status: true,
  },
  {
    title: 'Power Generation - Other',
    roleCategory: 'Power Generation',
    status: true,
  },
  {
    title: 'Distribution Supervisor',
    roleCategory: 'Power Supply and Distribution',
    status: true,
  },
  {
    title: 'Distribution System Designer',
    roleCategory: 'Power Supply and Distribution',
    status: true,
  },
  {
    title: 'Engineering Services Supervisor',
    roleCategory: 'Power Supply and Distribution',
    status: true,
  },
  {
    title: 'Load Dispatcher',
    roleCategory: 'Power Supply and Distribution',
    status: true,
  },
  {
    title: 'Power Supply Manager',
    roleCategory: 'Power Supply and Distribution',
    status: true,
  },
  {
    title: 'Power Supply Technician',
    roleCategory: 'Power Supply and Distribution',
    status: true,
  },
  {
    title: 'Supply & Transmission Services Supervisor',
    roleCategory: 'Power Supply and Distribution',
    status: true,
  },
  {
    title: 'Power Supply and Distribution - Other',
    roleCategory: 'Power Supply and Distribution',
    status: true,
  },
  {
    title: 'Completion Engineer',
    roleCategory: 'Upstream',
    status: true,
  },
  {
    title: 'Derrickman',
    roleCategory: 'Upstream',
    status: true,
  },
  {
    title: 'Drilling Engineer',
    roleCategory: 'Upstream',
    status: true,
  },
  {
    title: 'Exploration and Production Director',
    roleCategory: 'Upstream',
    status: true,
  },
  {
    title: 'Exploration Manager',
    roleCategory: 'Upstream',
    status: true,
  },
  {
    title: 'Geologist',
    roleCategory: 'Upstream',
    status: true,
  },
  {
    title: 'Geophysicist',
    roleCategory: 'Upstream',
    status: true,
  },
  {
    title: 'Geoscientist Manager',
    roleCategory: 'Upstream',
    status: true,
  },
  {
    title: 'Oil Field Manager',
    roleCategory: 'Upstream',
    status: true,
  },
  {
    title: 'Operations Manager - Upstream',
    roleCategory: 'Upstream',
    status: true,
  },
  {
    title: 'Petrophysicist',
    roleCategory: 'Upstream',
    status: true,
  },
  {
    title: 'Production Engineer (Oil and Gas)',
    roleCategory: 'Upstream',
    status: true,
  },
  {
    title: 'Production Manager (Oil & Gas)',
    roleCategory: 'Upstream',
    status: true,
  },
  {
    title: 'Project Engineer',
    roleCategory: 'Upstream',
    status: true,
  },
  {
    title: 'Reservoir Engineer',
    roleCategory: 'Upstream',
    status: true,
  },
  {
    title: 'Rig Supervisor',
    roleCategory: 'Upstream',
    status: true,
  },
  {
    title: 'Upstream - Other',
    roleCategory: 'Upstream',
    status: true,
  },
  {
    title: 'Energy & Mining - Other',
    roleCategory: 'Energy & Mining - Other',
    status: true,
  },
  {
    title: 'EHS Officer',
    roleCategory: 'Community Health & Safety',
    status: true,
  },
  {
    title: 'Food Safety',
    roleCategory: 'Community Health & Safety',
    status: true,
  },
  {
    title: 'Community Health & Safety - Other',
    roleCategory: 'Community Health & Safety',
    status: true,
  },
  {
    title: 'Chief Safety Officer (CSO)',
    roleCategory: 'Occupational Health & Safety',
    status: true,
  },
  {
    title: 'Construction Safety',
    roleCategory: 'Occupational Health & Safety',
    status: true,
  },
  {
    title: 'Hazard / Fire / Injury',
    roleCategory: 'Occupational Health & Safety',
    status: true,
  },
  {
    title: 'Risk Control',
    roleCategory: 'Occupational Health & Safety',
    status: true,
  },
  {
    title: 'Safety Consulting',
    roleCategory: 'Occupational Health & Safety',
    status: true,
  },
  {
    title: 'Safety Operations',
    roleCategory: 'Occupational Health & Safety',
    status: true,
  },
  {
    title: 'Occupational Health & Safety - Other',
    roleCategory: 'Occupational Health & Safety',
    status: true,
  },
  {
    title: 'Environment Health and Safety - Other',
    roleCategory: 'Environment Health and Safety - Other',
    status: true,
  },
  {
    title: 'Banquet Manager',
    roleCategory: 'Events & Banquet',
    status: true,
  },
  {
    title: 'Catering Executive',
    roleCategory: 'Events & Banquet',
    status: true,
  },
  {
    title: 'Catering Manager / Supervisor',
    roleCategory: 'Events & Banquet',
    status: true,
  },
  {
    title: 'Event Executive',
    roleCategory: 'Events & Banquet',
    status: true,
  },
  {
    title: 'Event Planner / Manager',
    roleCategory: 'Events & Banquet',
    status: true,
  },
  {
    title: 'Sponsorship / Partnership Manager',
    roleCategory: 'Events & Banquet',
    status: true,
  },
  {
    title: 'Events & Banquet - Other',
    roleCategory: 'Events & Banquet',
    status: true,
  },
  {
    title: 'Bar Manager',
    roleCategory: 'F&B Service',
    status: true,
  },
  {
    title: 'Barista',
    roleCategory: 'F&B Service',
    status: true,
  },
  {
    title: 'Bartender',
    roleCategory: 'F&B Service',
    status: true,
  },
  {
    title: 'Busser',
    roleCategory: 'F&B Service',
    status: true,
  },
  {
    title: 'Captain / Restaurant Supervisor',
    roleCategory: 'F&B Service',
    status: true,
  },
  {
    title: 'F&B Manager',
    roleCategory: 'F&B Service',
    status: true,
  },
  {
    title: 'Head - F&B',
    roleCategory: 'F&B Service',
    status: true,
  },
  {
    title: 'Restaurant Manager',
    roleCategory: 'F&B Service',
    status: true,
  },
  {
    title: 'Shift Manager / Supervisor',
    roleCategory: 'F&B Service',
    status: true,
  },
  {
    title: 'Sommelier',
    roleCategory: 'F&B Service',
    status: true,
  },
  {
    title: 'Steward / Waiter / Waitress',
    roleCategory: 'F&B Service',
    status: true,
  },
  {
    title: 'F&B Service - Other',
    roleCategory: 'F&B Service',
    status: true,
  },
  {
    title: 'Bell Boy / Porter',
    roleCategory: 'Front Office & Guest Services',
    status: true,
  },
  {
    title: 'Bell Captain',
    roleCategory: 'Front Office & Guest Services',
    status: true,
  },
  {
    title: 'Butler',
    roleCategory: 'Front Office & Guest Services',
    status: true,
  },
  {
    title: 'Cashier',
    roleCategory: 'Front Office & Guest Services',
    status: true,
  },
  {
    title: 'Concierge',
    roleCategory: 'Front Office & Guest Services',
    status: true,
  },
  {
    title: 'Driver',
    roleCategory: 'Front Office & Guest Services',
    status: true,
  },
  {
    title: 'Duty Manager',
    roleCategory: 'Front Office & Guest Services',
    status: true,
  },
  {
    title: 'Front Office Executive',
    roleCategory: 'Front Office & Guest Services',
    status: true,
  },
  {
    title: 'Front Office Manager',
    roleCategory: 'Front Office & Guest Services',
    status: true,
  },
  {
    title: 'Guest Service Associate',
    roleCategory: 'Front Office & Guest Services',
    status: true,
  },
  {
    title: 'Host / Hostess',
    roleCategory: 'Front Office & Guest Services',
    status: true,
  },
  {
    title: 'Hotel / General Manager',
    roleCategory: 'Front Office & Guest Services',
    status: true,
  },
  {
    title: 'Leisure / Casino Manager',
    roleCategory: 'Front Office & Guest Services',
    status: true,
  },
  {
    title: 'Night Auditor / Manager',
    roleCategory: 'Front Office & Guest Services',
    status: true,
  },
  {
    title: 'Receptionist',
    roleCategory: 'Front Office & Guest Services',
    status: true,
  },
  {
    title: 'Revenue Manager',
    roleCategory: 'Front Office & Guest Services',
    status: true,
  },
  {
    title: 'Travel Desk Manager',
    roleCategory: 'Front Office & Guest Services',
    status: true,
  },
  {
    title: 'Front Office & Guest Services - Other',
    roleCategory: 'Front Office & Guest Services',
    status: true,
  },
  {
    title: 'Housekeeping Executive / Attendant',
    roleCategory: 'Housekeeping & Laundry',
    status: true,
  },
  {
    title: 'Housekeeping Manager / Supervisor',
    roleCategory: 'Housekeeping & Laundry',
    status: true,
  },
  {
    title: 'Laundry Manager / Supervisor',
    roleCategory: 'Housekeeping & Laundry',
    status: true,
  },
  {
    title: 'Housekeeping & Laundry - Other',
    roleCategory: 'Housekeeping & Laundry',
    status: true,
  },
  {
    title: 'Brew Master',
    roleCategory: 'Kitchen / F&B Production',
    status: true,
  },
  {
    title: 'Chef De Partie / Demi Chef De Partie',
    roleCategory: 'Kitchen / F&B Production',
    status: true,
  },
  {
    title: 'Commis (Commi 1 / 2 / 3)',
    roleCategory: 'Kitchen / F&B Production',
    status: true,
  },
  {
    title: 'Executive Chef',
    roleCategory: 'Kitchen / F&B Production',
    status: true,
  },
  {
    title: 'Executive Sous Chef / Chef De Cuisine',
    roleCategory: 'Kitchen / F&B Production',
    status: true,
  },
  {
    title: 'Kitchen Steward / Dishwasher',
    roleCategory: 'Kitchen / F&B Production',
    status: true,
  },
  {
    title: 'Pastry Chef',
    roleCategory: 'Kitchen / F&B Production',
    status: true,
  },
  {
    title: 'Sous Chef',
    roleCategory: 'Kitchen / F&B Production',
    status: true,
  },
  {
    title: 'Trainee / Apprentice Chef',
    roleCategory: 'Kitchen / F&B Production',
    status: true,
  },
  {
    title: 'Kitchen / F&B Production - Other',
    roleCategory: 'Kitchen / F&B Production',
    status: true,
  },
  {
    title: 'Activities Coordinator',
    roleCategory: 'Tourism Services',
    status: true,
  },
  {
    title: 'Head - Tour Management',
    roleCategory: 'Tourism Services',
    status: true,
  },
  {
    title: 'Reservation Executive',
    roleCategory: 'Tourism Services',
    status: true,
  },
  {
    title: 'Reservation Manager',
    roleCategory: 'Tourism Services',
    status: true,
  },
  {
    title: 'Tour Guide / Coordinator',
    roleCategory: 'Tourism Services',
    status: true,
  },
  {
    title: 'Tour Manager',
    roleCategory: 'Tourism Services',
    status: true,
  },
  {
    title: 'Tourist Driver',
    roleCategory: 'Tourism Services',
    status: true,
  },
  {
    title: 'Travel Agent / Consultant',
    roleCategory: 'Tourism Services',
    status: true,
  },
  {
    title: 'Visa / Immigration Consultant',
    roleCategory: 'Tourism Services',
    status: true,
  },
  {
    title: 'Tourism Services - Other',
    roleCategory: 'Tourism Services',
    status: true,
  },
  {
    title: 'Food, Beverage & Hospitality - Other',
    roleCategory: 'Food, Beverage & Hospitality - Other',
    status: true,
  },
  {
    title: 'Allergist / Immunologist',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Anesthesiologist',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Ayurved Practitioners',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Bariatric Surgeon',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Breast Surgeon',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Cardiologist',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Chief Medical Officer',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Colon / Rectal Surgeon',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Critical Care Physician',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Dentist',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Dermatologist',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Endocrine Surgeon',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Endocrinologist',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Gastroenterologist',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'General Physician',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'General Surgeon',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Geriatrician',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Gynecological Surgeon',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Gynecologist',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Hand / Neck Surgeon',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Hematologist',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Homeopathy Physician',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Infectiologist',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Laparoscopic Surgeon',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Medical Officer',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Neonatologist',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Neuro Surgeon',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Neurologist',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Neuropsychiatrist',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Oncologist',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Ophthalmological Surgeon',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Orthopedist',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Otolaryngologist (ENT)',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Pain Specialist',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Pediatric Surgeon',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Pediatrician',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Physiotherapist',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Plastic / Reconstructive Surgeon',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Podiatry Surgeon',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Psychiatrist',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Pulmonologist',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Radiologist - Doctor',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Respiratory Therapist',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Rheumatologist',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Robotic Surgeon',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Somnologist',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Thoracic Surgeon',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Transplant Surgeon',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Unani Physician',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Urologic Surgeon',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Urologist',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Vascular Surgeon',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Doctor - Other',
    roleCategory: 'Doctor',
    status: true,
  },
  {
    title: 'Allied Health Manager',
    roleCategory: 'Health Informatics',
    status: true,
  },
  {
    title: 'Clinical Informatics',
    roleCategory: 'Health Informatics',
    status: true,
  },
  {
    title: 'Hospital Administration',
    roleCategory: 'Health Informatics',
    status: true,
  },
  {
    title: 'Medical Biller / Coder',
    roleCategory: 'Health Informatics',
    status: true,
  },
  {
    title: 'Medical Illustrator',
    roleCategory: 'Health Informatics',
    status: true,
  },
  {
    title: 'Medical Record / Health Informatics',
    roleCategory: 'Health Informatics',
    status: true,
  },
  {
    title: 'Medical Transcriptionist',
    roleCategory: 'Health Informatics',
    status: true,
  },
  {
    title: 'Nurse Informaticist',
    roleCategory: 'Health Informatics',
    status: true,
  },
  {
    title: 'Pharmacy Analyst',
    roleCategory: 'Health Informatics',
    status: true,
  },
  {
    title: 'Registrar',
    roleCategory: 'Health Informatics',
    status: true,
  },
  {
    title: 'Schedulers',
    roleCategory: 'Health Informatics',
    status: true,
  },
  {
    title: 'TPA Executive',
    roleCategory: 'Health Informatics',
    status: true,
  },
  {
    title: 'Health Informatics - Other',
    roleCategory: 'Health Informatics',
    status: true,
  },
  {
    title: 'Cardiovascular Technologist',
    roleCategory: 'Imaging & Diagnostics',
    status: true,
  },
  {
    title: 'Dental Laboratory Technician',
    roleCategory: 'Imaging & Diagnostics',
    status: true,
  },
  {
    title: 'Diagnostic Molecular Scientist',
    roleCategory: 'Imaging & Diagnostics',
    status: true,
  },
  {
    title: 'Electrocardiogram Technician',
    roleCategory: 'Imaging & Diagnostics',
    status: true,
  },
  {
    title: 'Electroencephalographic Technician',
    roleCategory: 'Imaging & Diagnostics',
    status: true,
  },
  {
    title: 'Histotechnologist',
    roleCategory: 'Imaging & Diagnostics',
    status: true,
  },
  {
    title: 'Lab Technician',
    roleCategory: 'Imaging & Diagnostics',
    status: true,
  },
  {
    title: 'Neuromonitoring Technician',
    roleCategory: 'Imaging & Diagnostics',
    status: true,
  },
  {
    title: 'Optometrist',
    roleCategory: 'Imaging & Diagnostics',
    status: true,
  },
  {
    title: 'Pathologist',
    roleCategory: 'Imaging & Diagnostics',
    status: true,
  },
  {
    title: 'Phlebotomist',
    roleCategory: 'Imaging & Diagnostics',
    status: true,
  },
  {
    title: 'Radiologist Technician',
    roleCategory: 'Imaging & Diagnostics',
    status: true,
  },
  {
    title: 'Sonographer',
    roleCategory: 'Imaging & Diagnostics',
    status: true,
  },
  {
    title: 'Ultrasound Technologist',
    roleCategory: 'Imaging & Diagnostics',
    status: true,
  },
  {
    title: 'Imaging & Diagnostics - Other',
    roleCategory: 'Imaging & Diagnostics',
    status: true,
  },
  {
    title: 'Associate Nurse Unit Manager',
    roleCategory: 'Nursing',
    status: true,
  },
  {
    title: 'Clinical Nurse Specialist',
    roleCategory: 'Nursing',
    status: true,
  },
  {
    title: 'Emergency Department Nurse',
    roleCategory: 'Nursing',
    status: true,
  },
  {
    title: 'Enrolled Nurse',
    roleCategory: 'Nursing',
    status: true,
  },
  {
    title: 'Nurse Practitioners',
    roleCategory: 'Nursing',
    status: true,
  },
  {
    title: 'Nurse Unit Manager',
    roleCategory: 'Nursing',
    status: true,
  },
  {
    title: 'Registered Nurse',
    roleCategory: 'Nursing',
    status: true,
  },
  {
    title: 'Nursing - Other',
    roleCategory: 'Nursing',
    status: true,
  },
  {
    title: 'Healthcare & Life Sciences - Other',
    roleCategory: 'Healthcare & Life Sciences - Other',
    status: true,
  },
  {
    title: 'Clinical Assistant',
    roleCategory: 'Other Hospital Staff',
    status: true,
  },
  {
    title: 'Patient Service Assistant',
    roleCategory: 'Other Hospital Staff',
    status: true,
  },
  {
    title: 'Pharmacist',
    roleCategory: 'Other Hospital Staff',
    status: true,
  },
  {
    title: 'Volunteer',
    roleCategory: 'Other Hospital Staff',
    status: true,
  },
  {
    title: 'Ward Clerk',
    roleCategory: 'Other Hospital Staff',
    status: true,
  },
  {
    title: 'Other Hospital Staff - Other',
    roleCategory: 'Other Hospital Staff',
    status: true,
  },
  {
    title: 'Corporate Law',
    roleCategory: 'Corporate Affairs',
    status: true,
  },
  {
    title: 'Digital Media & Internet',
    roleCategory: 'Corporate Affairs',
    status: true,
  },
  {
    title: 'Head - Regulatory Affairs',
    roleCategory: 'Corporate Affairs',
    status: true,
  },
  {
    title: 'Intellectual Property (IP)',
    roleCategory: 'Corporate Affairs',
    status: true,
  },
  {
    title: 'Labour / Employment',
    roleCategory: 'Corporate Affairs',
    status: true,
  },
  {
    title: 'Legal Management Consulting',
    roleCategory: 'Corporate Affairs',
    status: true,
  },
  {
    title: 'Mergers & Acquisitions (M & A)',
    roleCategory: 'Corporate Affairs',
    status: true,
  },
  {
    title: 'Real Estate',
    roleCategory: 'Corporate Affairs',
    status: true,
  },
  {
    title: 'Regulatory Affairs Compliance',
    roleCategory: 'Corporate Affairs',
    status: true,
  },
  {
    title: 'Corporate Affairs - Other',
    roleCategory: 'Corporate Affairs',
    status: true,
  },
  {
    title: 'Criminal Law',
    roleCategory: 'Crime / Arbitration',
    status: true,
  },
  {
    title: 'Legal Malpractice / Professional Responsibility',
    roleCategory: 'Crime / Arbitration',
    status: true,
  },
  {
    title: 'Personal Injury',
    roleCategory: 'Crime / Arbitration',
    status: true,
  },
  {
    title: 'Crime / Arbitration - Other',
    roleCategory: 'Crime / Arbitration',
    status: true,
  },
  {
    title: 'Chief Legal Officer (CLO)',
    roleCategory: 'Legal Operations',
    status: true,
  },
  {
    title: 'Due Diligence',
    roleCategory: 'Legal Operations',
    status: true,
  },
  {
    title: 'Legal Administration',
    roleCategory: 'Legal Operations',
    status: true,
  },
  {
    title: 'Legal Documentation / Research',
    roleCategory: 'Legal Operations',
    status: true,
  },
  {
    title: 'Legal Entity Management',
    roleCategory: 'Legal Operations',
    status: true,
  },
  {
    title: 'Legal Liaisoning',
    roleCategory: 'Legal Operations',
    status: true,
  },
  {
    title: 'Legal Officer',
    roleCategory: 'Legal Operations',
    status: true,
  },
  {
    title: 'Legal Operations - Other',
    roleCategory: 'Legal Operations',
    status: true,
  },
  {
    title: 'Bankruptcy',
    roleCategory: 'Legal & Regulatory - Other',
    status: true,
  },
  {
    title: 'Civil Litigation',
    roleCategory: 'Legal & Regulatory - Other',
    status: true,
  },
  {
    title: 'Family Law',
    roleCategory: 'Legal & Regulatory - Other',
    status: true,
  },
  {
    title: 'Immigration',
    roleCategory: 'Legal & Regulatory - Other',
    status: true,
  },
  {
    title: 'Private Attorney / Lawyer',
    roleCategory: 'Legal & Regulatory - Other',
    status: true,
  },
  {
    title: 'Legal & Regulatory - Other',
    roleCategory: 'Legal & Regulatory - Other',
    status: true,
  },
  {
    title: 'Legal Rights - Other',
    roleCategory: 'Legal & Regulatory - Other',
    status: true,
  },
  {
    title: 'Animator',
    roleCategory: 'Animation / Effects',
    status: true,
  },
  {
    title: 'VFX Editor',
    roleCategory: 'Animation / Effects',
    status: true,
  },
  {
    title: 'Visual Effect Artist',
    roleCategory: 'Animation / Effects',
    status: true,
  },
  {
    title: 'Visual Effect Supervisor',
    roleCategory: 'Animation / Effects',
    status: true,
  },
  {
    title: 'Animation / Effects - Other',
    roleCategory: 'Animation / Effects',
    status: true,
  },
  {
    title: 'Actor',
    roleCategory: 'Artists',
    status: true,
  },
  {
    title: 'Choreographer',
    roleCategory: 'Artists',
    status: true,
  },
  {
    title: 'Dance Crew Member',
    roleCategory: 'Artists',
    status: true,
  },
  {
    title: 'Junior Artist',
    roleCategory: 'Artists',
    status: true,
  },
  {
    title: 'Lyricist',
    roleCategory: 'Artists',
    status: true,
  },
  {
    title: 'Music Arranger',
    roleCategory: 'Artists',
    status: true,
  },
  {
    title: 'Music Composer',
    roleCategory: 'Artists',
    status: true,
  },
  {
    title: 'Photographer',
    roleCategory: 'Artists',
    status: true,
  },
  {
    title: 'Radio Jockey / Voiceover Artist',
    roleCategory: 'Artists',
    status: true,
  },
  {
    title: 'Screen Writer',
    roleCategory: 'Artists',
    status: true,
  },
  {
    title: 'Script Writer',
    roleCategory: 'Artists',
    status: true,
  },
  {
    title: 'Singer / Vocalist',
    roleCategory: 'Artists',
    status: true,
  },
  {
    title: 'Stunt Man / Body Double',
    roleCategory: 'Artists',
    status: true,
  },
  {
    title: 'Videographer',
    roleCategory: 'Artists',
    status: true,
  },
  {
    title: 'Voice-over Artist',
    roleCategory: 'Artists',
    status: true,
  },
  {
    title: 'Artists - Other',
    roleCategory: 'Artists',
    status: true,
  },
  {
    title: 'Animation Director',
    roleCategory: 'Direction',
    status: true,
  },
  {
    title: 'Art Director',
    roleCategory: 'Direction',
    status: true,
  },
  {
    title: 'Assistant Director',
    roleCategory: 'Direction',
    status: true,
  },
  {
    title: 'Casting Director',
    roleCategory: 'Direction',
    status: true,
  },
  {
    title: 'Cinematographer',
    roleCategory: 'Direction',
    status: true,
  },
  {
    title: 'Creative Director',
    roleCategory: 'Direction',
    status: true,
  },
  {
    title: 'Director Of Photography',
    roleCategory: 'Direction',
    status: true,
  },
  {
    title: 'Film Director',
    roleCategory: 'Direction',
    status: true,
  },
  {
    title: 'Sound Director',
    roleCategory: 'Direction',
    status: true,
  },
  {
    title: 'Technical Director',
    roleCategory: 'Direction',
    status: true,
  },
  {
    title: 'Direction - Other',
    roleCategory: 'Direction',
    status: true,
  },
  {
    title: 'Film Editor',
    roleCategory: 'Editing',
    status: true,
  },
  {
    title: 'Music Editor',
    roleCategory: 'Editing',
    status: true,
  },
  {
    title: 'News Copy Editor',
    roleCategory: 'Editing',
    status: true,
  },
  {
    title: 'Publicist',
    roleCategory: 'Editing',
    status: true,
  },
  {
    title: 'Script Editor',
    roleCategory: 'Editing',
    status: true,
  },
  {
    title: 'Sound Editor',
    roleCategory: 'Editing',
    status: true,
  },
  {
    title: 'Story Editor',
    roleCategory: 'Editing',
    status: true,
  },
  {
    title: 'Video Editor',
    roleCategory: 'Editing',
    status: true,
  },
  {
    title: 'Editing - Other',
    roleCategory: 'Editing',
    status: true,
  },
  {
    title: 'Costume Designer',
    roleCategory: 'Make Up / Costume',
    status: true,
  },
  {
    title: 'Hair Dresser',
    roleCategory: 'Make Up / Costume',
    status: true,
  },
  {
    title: 'Make Up Artist',
    roleCategory: 'Make Up / Costume',
    status: true,
  },
  {
    title: 'Make Up / Costume - Other',
    roleCategory: 'Make Up / Costume',
    status: true,
  },
  {
    title: 'Assistant Producer',
    roleCategory: 'Production',
    status: true,
  },
  {
    title: 'Broadcast Engineering',
    roleCategory: 'Production',
    status: true,
  },
  {
    title: 'Executive Producer',
    roleCategory: 'Production',
    status: true,
  },
  {
    title: 'Film Producer',
    roleCategory: 'Production',
    status: true,
  },
  {
    title: 'Line Producer',
    roleCategory: 'Production',
    status: true,
  },
  {
    title: 'Location Manager',
    roleCategory: 'Production',
    status: true,
  },
  {
    title: 'Music Producer',
    roleCategory: 'Production',
    status: true,
  },
  {
    title: 'Producer',
    roleCategory: 'Production',
    status: true,
  },
  {
    title: 'TV Producer',
    roleCategory: 'Production',
    status: true,
  },
  {
    title: 'Video Producer',
    roleCategory: 'Production',
    status: true,
  },
  {
    title: 'Production - Other',
    roleCategory: 'Production',
    status: true,
  },
  {
    title: 'Boom Operator',
    roleCategory: 'Sound / Light / Technical Support',
    status: true,
  },
  {
    title: 'Camera Operator',
    roleCategory: 'Sound / Light / Technical Support',
    status: true,
  },
  {
    title: 'Electrician',
    roleCategory: 'Sound / Light / Technical Support',
    status: true,
  },
  {
    title: 'Light Engineer',
    roleCategory: 'Sound / Light / Technical Support',
    status: true,
  },
  {
    title: 'Sound Engineer',
    roleCategory: 'Sound / Light / Technical Support',
    status: true,
  },
  {
    title: 'Sound Mixer',
    roleCategory: 'Sound / Light / Technical Support',
    status: true,
  },
  {
    title: 'Spot Boy',
    roleCategory: 'Sound / Light / Technical Support',
    status: true,
  },
  {
    title: 'Stage Manager',
    roleCategory: 'Sound / Light / Technical Support',
    status: true,
  },
  {
    title: 'Sound / Light / Technical Support - Other',
    roleCategory: 'Sound / Light / Technical Support',
    status: true,
  },
  {
    title: 'Media Production & Entertainment - Other',
    roleCategory: 'Media Production & Entertainment - Other',
    status: true,
  },
  {
    title: 'Category Executive',
    roleCategory: 'Category Management & Operations',
    status: true,
  },
  {
    title: 'Category Head',
    roleCategory: 'Category Management & Operations',
    status: true,
  },
  {
    title: 'Category Manager',
    roleCategory: 'Category Management & Operations',
    status: true,
  },
  {
    title: 'Category Management & Operations - Other',
    roleCategory: 'Category Management & Operations',
    status: true,
  },
  {
    title: 'Catalog Executive',
    roleCategory: 'eCommerce Operations',
    status: true,
  },
  {
    title: 'Catalog Manager',
    roleCategory: 'eCommerce Operations',
    status: true,
  },
  {
    title: 'eCommerce Executive',
    roleCategory: 'eCommerce Operations',
    status: true,
  },
  {
    title: 'eCommerce Manager',
    roleCategory: 'eCommerce Operations',
    status: true,
  },
  {
    title: 'eCommerce Operations - Other',
    roleCategory: 'eCommerce Operations',
    status: true,
  },
  {
    title: 'Merchandise / Retail Planner',
    roleCategory: 'Merchandising & Planning',
    status: true,
  },
  {
    title: 'Merchandiser',
    roleCategory: 'Merchandising & Planning',
    status: true,
  },
  {
    title: 'Merchandising Head',
    roleCategory: 'Merchandising & Planning',
    status: true,
  },
  {
    title: 'Merchandising Manager',
    roleCategory: 'Merchandising & Planning',
    status: true,
  },
  {
    title: 'Site Merchandiser',
    roleCategory: 'Merchandising & Planning',
    status: true,
  },
  {
    title: 'Visual Merchandiser',
    roleCategory: 'Merchandising & Planning',
    status: true,
  },
  {
    title: 'Merchandising & Planning - Other',
    roleCategory: 'Merchandising & Planning',
    status: true,
  },
  {
    title: 'Assistant Store Manager',
    roleCategory: 'Retail Store Operations',
    status: true,
  },
  {
    title: 'Customer Service Representative',
    roleCategory: 'Retail Store Operations',
    status: true,
  },
  {
    title: 'Department / Floor Manager',
    roleCategory: 'Retail Store Operations',
    status: true,
  },
  {
    title: 'Optometrist',
    roleCategory: 'Retail Store Operations',
    status: true,
  },
  {
    title: 'Personal Shopper',
    roleCategory: 'Retail Store Operations',
    status: true,
  },
  {
    title: 'Retail Cashier',
    roleCategory: 'Retail Store Operations',
    status: true,
  },
  {
    title: 'Retail Operations Manager',
    roleCategory: 'Retail Store Operations',
    status: true,
  },
  {
    title: 'Retail Sales Associate',
    roleCategory: 'Retail Store Operations',
    status: true,
  },
  {
    title: 'Retail Store Auditor',
    roleCategory: 'Retail Store Operations',
    status: true,
  },
  {
    title: 'Retail Store Manager',
    roleCategory: 'Retail Store Operations',
    status: true,
  },
  {
    title: 'Retail Team Leader',
    roleCategory: 'Retail Store Operations',
    status: true,
  },
  {
    title: 'Sales Advisor',
    roleCategory: 'Retail Store Operations',
    status: true,
  },
  {
    title: 'Shift Supervisor',
    roleCategory: 'Retail Store Operations',
    status: true,
  },
  {
    title: 'Merchandising & Planning - Other',
    roleCategory: 'Retail Store Operations',
    status: true,
  },
  {
    title: 'Merchandising, Retail & eCommerce - Other',
    roleCategory: 'Merchandising, Retail & eCommerce - Other',
    status: true,
  },
  {
    title: 'Documentation Executive',
    roleCategory: 'Import & Export',
    status: true,
  },
  {
    title: 'Export / Import Executive',
    roleCategory: 'Import & Export',
    status: true,
  },
  {
    title: 'Export / Import Manager',
    roleCategory: 'Import & Export',
    status: true,
  },
  {
    title: 'Import & Export - Other',
    roleCategory: 'Import & Export',
    status: true,
  },
  {
    title: 'Buyer / Senior Buyer',
    roleCategory: 'Procurement & Purchase',
    status: true,
  },
  {
    title: 'Chief Purchase Officer / Chief Procurement Officer (CPO)',
    roleCategory: 'Procurement & Purchase',
    status: true,
  },
  {
    title: 'Commodity Manager',
    roleCategory: 'Procurement & Purchase',
    status: true,
  },
  {
    title: 'Procurement / Purchase Engineer',
    roleCategory: 'Procurement & Purchase',
    status: true,
  },
  {
    title: 'Procurement / Purchase Manager',
    roleCategory: 'Procurement & Purchase',
    status: true,
  },
  {
    title: 'Procurement / Sourcing Head',
    roleCategory: 'Procurement & Purchase',
    status: true,
  },
  {
    title: 'Procurement Analyst',
    roleCategory: 'Procurement & Purchase',
    status: true,
  },
  {
    title: 'Procurement Category Manager',
    roleCategory: 'Procurement & Purchase',
    status: true,
  },
  {
    title: 'Purchase Executive / Officer',
    roleCategory: 'Procurement & Purchase',
    status: true,
  },
  {
    title: 'Strategic Sourcing Manager',
    roleCategory: 'Procurement & Purchase',
    status: true,
  },
  {
    title: 'Vendor Relations',
    roleCategory: 'Procurement & Purchase',
    status: true,
  },
  {
    title: 'Procurement & Purchase - Other',
    roleCategory: 'Procurement & Purchase',
    status: true,
  },
  {
    title: 'Cluster / Hub Manager',
    roleCategory: 'SCM & Logistics',
    status: true,
  },
  {
    title: 'Delivery Executive',
    roleCategory: 'SCM & Logistics',
    status: true,
  },
  {
    title: 'Dispatch Executive / Officer',
    roleCategory: 'SCM & Logistics',
    status: true,
  },
  {
    title: 'Fleet / Transport Manager',
    roleCategory: 'SCM & Logistics',
    status: true,
  },
  {
    title: 'Forklift Operator',
    roleCategory: 'SCM & Logistics',
    status: true,
  },
  {
    title: 'Head - Logistics / SCM',
    roleCategory: 'SCM & Logistics',
    status: true,
  },
  {
    title: 'Logistics / SCM Analyst',
    roleCategory: 'SCM & Logistics',
    status: true,
  },
  {
    title: 'Logistics / SCM Engineer',
    roleCategory: 'SCM & Logistics',
    status: true,
  },
  {
    title: 'Logistics Executive',
    roleCategory: 'SCM & Logistics',
    status: true,
  },
  {
    title: 'Logistics Manager',
    roleCategory: 'SCM & Logistics',
    status: true,
  },
  {
    title: 'Logistics Operations Manager',
    roleCategory: 'SCM & Logistics',
    status: true,
  },
  {
    title: 'Supply Chain Manager',
    roleCategory: 'SCM & Logistics',
    status: true,
  },
  {
    title: 'Warehouse Executive',
    roleCategory: 'SCM & Logistics',
    status: true,
  },
  {
    title: 'Warehouse Manager',
    roleCategory: 'SCM & Logistics',
    status: true,
  },
  {
    title: 'SCM & Logistics - Other',
    roleCategory: 'SCM & Logistics',
    status: true,
  },
  {
    title: 'Demand Planner',
    roleCategory: 'Stores & Material Management',
    status: true,
  },
  {
    title: 'Inventory Controller',
    roleCategory: 'Stores & Material Management',
    status: true,
  },
  {
    title: 'Materials / Inventory Analyst',
    roleCategory: 'Stores & Material Management',
    status: true,
  },
  {
    title: 'Materials Manager',
    roleCategory: 'Stores & Material Management',
    status: true,
  },
  {
    title: 'Store Executive',
    roleCategory: 'Stores & Material Management',
    status: true,
  },
  {
    title: 'Store Keeper / Manager',
    roleCategory: 'Stores & Material Management',
    status: true,
  },
  {
    title: 'Supply Planner',
    roleCategory: 'Stores & Material Management',
    status: true,
  },
  {
    title: 'Stores & Material Management - Other',
    roleCategory: 'Stores & Material Management',
    status: true,
  },
  {
    title: 'Procurement & Supply Chain - Other',
    roleCategory: 'Procurement & Supply Chain - Other',
    status: true,
  },
  {
    title: 'CFD Engineer',
    roleCategory: 'Engineering & Manufacturing',
    status: true,
  },
  {
    title: 'Chemical Research Scientist',
    roleCategory: 'Engineering & Manufacturing',
    status: true,
  },
  {
    title: 'Product Development Engineer',
    roleCategory: 'Engineering & Manufacturing',
    status: true,
  },
  {
    title: 'Product Development Manager',
    roleCategory: 'Engineering & Manufacturing',
    status: true,
  },
  {
    title: 'Head - Design & Development',
    roleCategory: 'Engineering & Manufacturing',
    status: true,
  },
  {
    title: 'Material Scientist',
    roleCategory: 'Engineering & Manufacturing',
    status: true,
  },
  {
    title: 'Process Engineer',
    roleCategory: 'Engineering & Manufacturing',
    status: true,
  },
  {
    title: 'Engineering & Manufacturing - Other',
    roleCategory: 'Engineering & Manufacturing',
    status: true,
  },
  {
    title: 'Design Engineer',
    roleCategory: 'Engineering & Manufacturing',
    status: true,
  },
  {
    title: 'Design Manager',
    roleCategory: 'Engineering & Manufacturing',
    status: true,
  },
  {
    title: 'Bio Technologist',
    roleCategory: 'Pharmaceutical & Biotechnology',
    status: true,
  },
  {
    title: 'Biologist',
    roleCategory: 'Pharmaceutical & Biotechnology',
    status: true,
  },
  {
    title: 'Clinical research Scientist',
    roleCategory: 'Pharmaceutical & Biotechnology',
    status: true,
  },
  {
    title: 'Formulation Scientist',
    roleCategory: 'Pharmaceutical & Biotechnology',
    status: true,
  },
  {
    title: 'Head - R & D',
    roleCategory: 'Pharmaceutical & Biotechnology',
    status: true,
  },
  {
    title: 'Manager - R & D',
    roleCategory: 'Pharmaceutical & Biotechnology',
    status: true,
  },
  {
    title: 'Medical Writer',
    roleCategory: 'Pharmaceutical & Biotechnology',
    status: true,
  },
  {
    title: 'Microbiologist',
    roleCategory: 'Pharmaceutical & Biotechnology',
    status: true,
  },
  {
    title: 'Molecular Biologist',
    roleCategory: 'Pharmaceutical & Biotechnology',
    status: true,
  },
  {
    title: 'Research Associate / Engineer',
    roleCategory: 'Pharmaceutical & Biotechnology',
    status: true,
  },
  {
    title: 'Research Scientist',
    roleCategory: 'Pharmaceutical & Biotechnology',
    status: true,
  },
  {
    title: 'Pharmaceutical & Biotechnology - Other',
    roleCategory: 'Pharmaceutical & Biotechnology',
    status: true,
  },
  {
    title: 'Post Doctoral Researcher',
    roleCategory: 'Research & Development - Other',
    status: true,
  },
  {
    title: 'Research & Development - Other',
    roleCategory: 'Research & Development - Other',
    status: true,
  },
  {
    title: 'Risk Analyst',
    roleCategory: 'Assessment / Advisory',
    status: true,
  },
  {
    title: 'Risk Consultant',
    roleCategory: 'Assessment / Advisory',
    status: true,
  },
  {
    title: 'Assessment / Advisory - Other',
    roleCategory: 'Assessment / Advisory',
    status: true,
  },
  {
    title: 'Chief Compliance Officer (CCO)',
    roleCategory: 'Business',
    status: true,
  },
  {
    title: 'Chief Risk Officer (CRO)',
    roleCategory: 'Business',
    status: true,
  },
  {
    title: 'Insurance Risk',
    roleCategory: 'Business',
    status: true,
  },
  {
    title: 'Business - Other',
    roleCategory: 'Business',
    status: true,
  },
  {
    title: 'Credit Risk',
    roleCategory: 'Finance',
    status: true,
  },
  {
    title: 'Financial Crime',
    roleCategory: 'Finance',
    status: true,
  },
  {
    title: 'Investment / Lending Risk',
    roleCategory: 'Finance',
    status: true,
  },
  {
    title: 'Market Risk',
    roleCategory: 'Finance',
    status: true,
  },
  {
    title: 'Risk Modeling',
    roleCategory: 'Finance',
    status: true,
  },
  {
    title: 'Treasury / Liquidity / Equity Trading',
    roleCategory: 'Finance',
    status: true,
  },
  {
    title: 'Valuation Risk',
    roleCategory: 'Finance',
    status: true,
  },
  {
    title: 'Finance - Other',
    roleCategory: 'Finance',
    status: true,
  },
  {
    title: 'Competition Risk',
    roleCategory: 'Operations / Strategy',
    status: true,
  },
  {
    title: 'Enterprise Risk',
    roleCategory: 'Operations / Strategy',
    status: true,
  },
  {
    title: 'Operational Risk',
    roleCategory: 'Operations / Strategy',
    status: true,
  },
  {
    title: 'Project / Program Risk',
    roleCategory: 'Operations / Strategy',
    status: true,
  },
  {
    title: 'Quality Risk',
    roleCategory: 'Operations / Strategy',
    status: true,
  },
  {
    title: 'Reputation Risk',
    roleCategory: 'Operations / Strategy',
    status: true,
  },
  {
    title: 'Strategic Risk',
    roleCategory: 'Operations / Strategy',
    status: true,
  },
  {
    title: 'Operations / Strategy - Other',
    roleCategory: 'Operations / Strategy',
    status: true,
  },
  {
    title: 'Anti Money Laundering',
    roleCategory: 'Security / Fraud',
    status: true,
  },
  {
    title: 'ATM / Credit Card',
    roleCategory: 'Security / Fraud',
    status: true,
  },
  {
    title: 'Cyber Security / IT Risk',
    roleCategory: 'Security / Fraud',
    status: true,
  },
  {
    title: 'Fraud Analyst',
    roleCategory: 'Security / Fraud',
    status: true,
  },
  {
    title: 'Fraud Detection / Prevention',
    roleCategory: 'Security / Fraud',
    status: true,
  },
  {
    title: 'Transaction Risk',
    roleCategory: 'Security / Fraud',
    status: true,
  },
  {
    title: 'Security / Fraud - Other',
    roleCategory: 'Security / Fraud',
    status: true,
  },
  {
    title: 'Risk Management & Compliance - Other',
    roleCategory: 'Risk Management & Compliance - Other',
    status: true,
  },

  {
    title: 'Risk Management & Compliance - Other',
    roleCategory: 'Security Officer',
    status: true,
  },
  {
    title: 'Armed Security Guard',
    roleCategory: 'Security Officer',
    status: true,
  },
  {
    title: 'Border Patrol Agent',
    roleCategory: 'Security Officer',
    status: true,
  },
  {
    title: 'Ex-Serviceman Armed Security Guard',
    roleCategory: 'Security Officer',
    status: true,
  },
  {
    title: 'Ex-Serviceman Security Supervisor',
    roleCategory: 'Security Officer',
    status: true,
  },
  {
    title: 'Ex-Serviceman Unarmed Security Guard',
    roleCategory: 'Security Officer',
    status: true,
  },
  {
    title: 'Fire Guard',
    roleCategory: 'Security Officer',
    status: true,
  },
  {
    title: 'Personal Security Officer (PSO)',
    roleCategory: 'Security Officer',
    status: true,
  },
  {
    title: 'Reception Guard',
    roleCategory: 'Security Officer',
    status: true,
  },
  {
    title: 'Security Head',
    roleCategory: 'Security Officer',
    status: true,
  },
  {
    title: 'Security Marshal (Bouncer)',
    roleCategory: 'Security Officer',
    status: true,
  },
  {
    title: 'Security Supervisor',
    roleCategory: 'Security Officer',
    status: true,
  },
  {
    title: 'Special Jurisdiction Police Officer',
    roleCategory: 'Security Officer',
    status: true,
  },
  {
    title: 'Unarmed Security Guard',
    roleCategory: 'Security Officer',
    status: true,
  },
  {
    title: 'Security Officer - Other',
    roleCategory: 'Security Officer',
    status: true,
  },
  {
    title: 'CCTV Operator',
    roleCategory: 'Security Services - Other',
    status: true,
  },
  {
    title: 'Private Detective',
    roleCategory: 'Security Services - Other',
    status: true,
  },
  {
    title: 'Security Services - Other',
    roleCategory: 'Security Services - Other',
    status: true,
  },
  {
    title: 'Dock Master',
    roleCategory: 'Port & Maritime Operations',
    status: true,
  },
  {
    title: 'Dredge Master / Mate',
    roleCategory: 'Port & Maritime Operations',
    status: true,
  },
  {
    title: 'Dredging Superintendent',
    roleCategory: 'Port & Maritime Operations',
    status: true,
  },
  {
    title: 'Harbour Master',
    roleCategory: 'Port & Maritime Operations',
    status: true,
  },
  {
    title: 'Marine / Maritime Pilot',
    roleCategory: 'Port & Maritime Operations',
    status: true,
  },
  {
    title: 'Marine Engineer',
    roleCategory: 'Port & Maritime Operations',
    status: true,
  },
  {
    title: 'RTG Crane Operator',
    roleCategory: 'Port & Maritime Operations',
    status: true,
  },
  {
    title: 'Tug Master',
    roleCategory: 'Port & Maritime Operations',
    status: true,
  },
  {
    title: 'Port & Maritime Operations - Other',
    roleCategory: 'Port & Maritime Operations',
    status: true,
  },
  {
    title: 'Able Seaman (AB)',
    roleCategory: 'Shipping Deck',
    status: true,
  },
  {
    title: 'Bosun',
    roleCategory: 'Shipping Deck',
    status: true,
  },
  {
    title: 'Captain / Master Mariner',
    roleCategory: 'Shipping Deck',
    status: true,
  },
  {
    title: 'Chief Officer / Mate',
    roleCategory: 'Shipping Deck',
    status: true,
  },
  {
    title: 'Crane Operator',
    roleCategory: 'Shipping Deck',
    status: true,
  },
  {
    title: 'Deck Cadet',
    roleCategory: 'Shipping Deck',
    status: true,
  },
  {
    title: 'Deck Fitter / Welder',
    roleCategory: 'Shipping Deck',
    status: true,
  },
  {
    title: 'Environmental Officer',
    roleCategory: 'Shipping Deck',
    status: true,
  },
  {
    title: 'Marine Superintendent',
    roleCategory: 'Shipping Deck',
    status: true,
  },
  {
    title: 'Ordinary Seaman (OS)',
    roleCategory: 'Shipping Deck',
    status: true,
  },
  {
    title: 'Radio Officer',
    roleCategory: 'Shipping Deck',
    status: true,
  },
  {
    title: 'Second Officer / Mate',
    roleCategory: 'Shipping Deck',
    status: true,
  },
  {
    title: 'Security Officer',
    roleCategory: 'Shipping Deck',
    status: true,
  },
  {
    title: 'Ship Safety Officer',
    roleCategory: 'Shipping Deck',
    status: true,
  },
  {
    title: 'Third Officer / Mate',
    roleCategory: 'Shipping Deck',
    status: true,
  },
  {
    title: 'Shipping Deck - Other',
    roleCategory: 'Shipping Deck',
    status: true,
  },
  {
    title: '2nd Engineer',
    roleCategory: 'Shipping Engineering & Technical',
    status: true,
  },
  {
    title: '3rd Engineer',
    roleCategory: 'Shipping Engineering & Technical',
    status: true,
  },
  {
    title: '4th Engineer',
    roleCategory: 'Shipping Engineering & Technical',
    status: true,
  },
  {
    title: '5th Engineer / TME',
    roleCategory: 'Shipping Engineering & Technical',
    status: true,
  },
  {
    title: 'Cargo Engineer',
    roleCategory: 'Shipping Engineering & Technical',
    status: true,
  },
  {
    title: 'Chief Engineer',
    roleCategory: 'Shipping Engineering & Technical',
    status: true,
  },
  {
    title: 'Chief ETO',
    roleCategory: 'Shipping Engineering & Technical',
    status: true,
  },
  {
    title: 'Electrician',
    roleCategory: 'Shipping Engineering & Technical',
    status: true,
  },
  {
    title: 'Engine Fitter / Welder',
    roleCategory: 'Shipping Engineering & Technical',
    status: true,
  },
  {
    title: 'ETO / Electrical Engineer',
    roleCategory: 'Shipping Engineering & Technical',
    status: true,
  },
  {
    title: 'Gas Engineer',
    roleCategory: 'Shipping Engineering & Technical',
    status: true,
  },
  {
    title: 'Motorman',
    roleCategory: 'Shipping Engineering & Technical',
    status: true,
  },
  {
    title: 'Oiler',
    roleCategory: 'Shipping Engineering & Technical',
    status: true,
  },
  {
    title: 'Pumpman',
    roleCategory: 'Shipping Engineering & Technical',
    status: true,
  },
  {
    title: 'Reefer Engineer',
    roleCategory: 'Shipping Engineering & Technical',
    status: true,
  },
  {
    title: 'Refrigeration / HVAC Engineer',
    roleCategory: 'Shipping Engineering & Technical',
    status: true,
  },
  {
    title: 'Wiper',
    roleCategory: 'Shipping Engineering & Technical',
    status: true,
  },
  {
    title: 'Shipping Engineering & Technical - Other',
    roleCategory: 'Shipping Engineering & Technical',
    status: true,
  },
  {
    title: 'Chief Cook',
    roleCategory: 'Shipping & Maritime - Other',
    status: true,
  },
  {
    title: 'Cook',
    roleCategory: 'Shipping & Maritime - Other',
    status: true,
  },
  {
    title: 'Purser / First Purser',
    roleCategory: 'Shipping & Maritime - Other',
    status: true,
  },
  {
    title: 'Steward',
    roleCategory: 'Shipping & Maritime - Other',
    status: true,
  },
  {
    title: 'Shipping & Maritime - Other',
    roleCategory: 'Shipping & Maritime - Other',
    status: true,
  },
  {
    title: 'Beauty Advisor / Beautician',
    roleCategory: 'Beauty & Personal Care',
    status: true,
  },
  {
    title: 'Hair Stylist / Hairdresser',
    roleCategory: 'Beauty & Personal Care',
    status: true,
  },
  {
    title: 'Makeup Artist',
    roleCategory: 'Beauty & Personal Care',
    status: true,
  },
  {
    title: 'Masseur / Masseuse',
    roleCategory: 'Beauty & Personal Care',
    status: true,
  },
  {
    title: 'Nail Technician',
    roleCategory: 'Beauty & Personal Care',
    status: true,
  },
  {
    title: 'Pedicurist And Manicurist',
    roleCategory: 'Beauty & Personal Care',
    status: true,
  },
  {
    title: 'Salon / Health Club Manager',
    roleCategory: 'Beauty & Personal Care',
    status: true,
  },
  {
    title: 'Spa Manager / Supervisor',
    roleCategory: 'Beauty & Personal Care',
    status: true,
  },
  {
    title: 'Spa Therapist',
    roleCategory: 'Beauty & Personal Care',
    status: true,
  },
  {
    title: 'Beauty & Personal Care - Other',
    roleCategory: 'Beauty & Personal Care',
    status: true,
  },
  {
    title: 'Center Head',
    roleCategory: 'Health & Fitness',
    status: true,
  },
  {
    title: 'Dietician / Nutritionist',
    roleCategory: 'Health & Fitness',
    status: true,
  },
  {
    title: 'Fitness Trainer / Gym Instructor',
    roleCategory: 'Health & Fitness',
    status: true,
  },
  {
    title: 'Slimming Head / Manager',
    roleCategory: 'Health & Fitness',
    status: true,
  },
  {
    title: 'Yoga Instructor / Trainer',
    roleCategory: 'Health & Fitness',
    status: true,
  },
  {
    title: 'Health & Fitness - Other',
    roleCategory: 'Health & Fitness',
    status: true,
  },
  {
    title: 'High Performance Analyst',
    roleCategory: 'Sports Science & Medicine',
    status: true,
  },
  {
    title: 'Sports Biomechanist',
    roleCategory: 'Sports Science & Medicine',
    status: true,
  },
  {
    title: 'Sports Masseur / Therapist',
    roleCategory: 'Sports Science & Medicine',
    status: true,
  },
  {
    title: 'Sports Nutritionist',
    roleCategory: 'Sports Science & Medicine',
    status: true,
  },
  {
    title: 'Sports Physician',
    roleCategory: 'Sports Science & Medicine',
    status: true,
  },
  {
    title: 'Sports Psychologist',
    roleCategory: 'Sports Science & Medicine',
    status: true,
  },
  {
    title: 'Strength & Conditioning',
    roleCategory: 'Sports Science & Medicine',
    status: true,
  },
  {
    title: 'Video Analyst',
    roleCategory: 'Sports Science & Medicine',
    status: true,
  },
  {
    title: 'Sports Science & Medicine - Other',
    roleCategory: 'Sports Science & Medicine',
    status: true,
  },
  {
    title: 'Adventure Sports Guide',
    roleCategory: 'Sports Staff and Management',
    status: true,
  },
  {
    title: 'Kit Manager',
    roleCategory: 'Sports Staff and Management',
    status: true,
  },
  {
    title: 'Lifeguard',
    roleCategory: 'Sports Staff and Management',
    status: true,
  },
  {
    title: 'Mountaineering Instructor',
    roleCategory: 'Sports Staff and Management',
    status: true,
  },
  {
    title: 'Sports Administrator',
    roleCategory: 'Sports Staff and Management',
    status: true,
  },
  {
    title: 'Sports Agent',
    roleCategory: 'Sports Staff and Management',
    status: true,
  },
  {
    title: 'Sports Club Manager',
    roleCategory: 'Sports Staff and Management',
    status: true,
  },
  {
    title: 'Sports Coach',
    roleCategory: 'Sports Staff and Management',
    status: true,
  },
  {
    title: 'Sports Scout',
    roleCategory: 'Sports Staff and Management',
    status: true,
  },
  {
    title: 'Team Manager',
    roleCategory: 'Sports Staff and Management',
    status: true,
  },
  {
    title: 'Umpire / Referee',
    roleCategory: 'Sports Staff and Management',
    status: true,
  },
  {
    title: 'Sports Staff and Management - Other',
    roleCategory: 'Sports Staff and Management',
    status: true,
  },
  {
    title: 'Sports, Fitness & Personal Care - Other',
    roleCategory: 'Sports, Fitness & Personal Care - Other',
    status: true,
  },
  {
    title: 'Corporate Development Analyst',
    roleCategory: 'Strategic Management',
    status: true,
  },
  {
    title: 'Corporate Development Manager',
    roleCategory: 'Strategic Management',
    status: true,
  },
  {
    title: 'Corporate Planning',
    roleCategory: 'Strategic Management',
    status: true,
  },
  {
    title: 'Strategy Analyst',
    roleCategory: 'Strategic Management',
    status: true,
  },
  {
    title: 'Strategy Manager',
    roleCategory: 'Strategic Management',
    status: true,
  },
  {
    title: 'Strategic Management - Other',
    roleCategory: 'Strategic Management',
    status: true,
  },
  {
    title: 'Board Member',
    roleCategory: 'Top Management',
    status: true,
  },
  {
    title: 'Business Head',
    roleCategory: 'Top Management',
    status: true,
  },
  {
    title: 'CFO',
    roleCategory: 'Top Management',
    status: true,
  },
  {
    title: 'Chairman',
    roleCategory: 'Top Management',
    status: true,
  },
  {
    title: 'CHRO',
    roleCategory: 'Top Management',
    status: true,
  },
  {
    title: 'CIO',
    roleCategory: 'Top Management',
    status: true,
  },
  {
    title: 'CMO',
    roleCategory: 'Top Management',
    status: true,
  },
  {
    title: 'COO',
    roleCategory: 'Top Management',
    status: true,
  },
  {
    title: 'Country Head',
    roleCategory: 'Top Management',
    status: true,
  },
  {
    title: 'CTO',
    roleCategory: 'Top Management',
    status: true,
  },
  {
    title: 'MD / CEO',
    roleCategory: 'Top Management',
    status: true,
  },
  {
    title: 'Top Management - Other',
    roleCategory: 'Top Management',
    status: true,
  },
  {
    title: 'Strategic & Top Management - Other',
    roleCategory: 'Strategic & Top Management - Other',
    status: true,
  },
  {
    title: 'Counselor',
    roleCategory: 'Administration & Staff',
    status: true,
  },
  {
    title: 'Curriculum Designer',
    roleCategory: 'Administration & Staff',
    status: true,
  },
  {
    title: 'Lab Assistant',
    roleCategory: 'Administration & Staff',
    status: true,
  },
  {
    title: 'Librarian',
    roleCategory: 'Administration & Staff',
    status: true,
  },
  {
    title: 'Principal',
    roleCategory: 'Administration & Staff',
    status: true,
  },
  {
    title: 'Proctor / Invigilator',
    roleCategory: 'Administration & Staff',
    status: true,
  },
  {
    title: 'Supervisor / Incharge',
    roleCategory: 'Administration & Staff',
    status: true,
  },
  {
    title: 'Transcriptionist',
    roleCategory: 'Administration & Staff',
    status: true,
  },
  {
    title: 'Translator',
    roleCategory: 'Administration & Staff',
    status: true,
  },
  {
    title: 'Vice Principal',
    roleCategory: 'Administration & Staff',
    status: true,
  },
  {
    title: 'Warden',
    roleCategory: 'Administration & Staff',
    status: true,
  },
  {
    title: 'Administration & Staff - Other',
    roleCategory: 'Administration & Staff',
    status: true,
  },
  {
    title: 'Communication Trainer',
    roleCategory: 'Corporate Training',
    status: true,
  },
  {
    title: 'Compliance Trainer',
    roleCategory: 'Corporate Training',
    status: true,
  },
  {
    title: 'Employee Health & Safety Trainer',
    roleCategory: 'Corporate Training',
    status: true,
  },
  {
    title: 'Head - Training & Development',
    roleCategory: 'Corporate Training',
    status: true,
  },
  {
    title: 'Leadership Trainer',
    roleCategory: 'Corporate Training',
    status: true,
  },
  {
    title: 'Process Trainer',
    roleCategory: 'Corporate Training',
    status: true,
  },
  {
    title: 'Product / Service Trainer',
    roleCategory: 'Corporate Training',
    status: true,
  },
  {
    title: 'Quality Trainer',
    roleCategory: 'Corporate Training',
    status: true,
  },
  {
    title: 'Technical Trainer',
    roleCategory: 'Corporate Training',
    status: true,
  },
  {
    title: 'Voice & Accent Trainer',
    roleCategory: 'Corporate Training',
    status: true,
  },
  {
    title: 'Corporate Training - Other',
    roleCategory: 'Corporate Training',
    status: true,
  },
  {
    title: 'Arabic Teacher',
    roleCategory: 'Language Teacher',
    status: true,
  },
  {
    title: 'Bengali Teacher',
    roleCategory: 'Language Teacher',
    status: true,
  },
  {
    title: 'Chinese Teacher',
    roleCategory: 'Language Teacher',
    status: true,
  },
  {
    title: 'English Teacher',
    roleCategory: 'Language Teacher',
    status: true,
  },
  {
    title: 'French Teacher',
    roleCategory: 'Language Teacher',
    status: true,
  },
  {
    title: 'German Teacher',
    roleCategory: 'Language Teacher',
    status: true,
  },
  {
    title: 'Hindi Teacher',
    roleCategory: 'Language Teacher',
    status: true,
  },
  {
    title: 'Italian Teacher',
    roleCategory: 'Language Teacher',
    status: true,
  },
  {
    title: 'Japanese Teacher',
    roleCategory: 'Language Teacher',
    status: true,
  },
  {
    title: 'Marathi Teacher',
    roleCategory: 'Language Teacher',
    status: true,
  },
  {
    title: 'Punjabi Teacher',
    roleCategory: 'Language Teacher',
    status: true,
  },
  {
    title: 'Russian Teacher',
    roleCategory: 'Language Teacher',
    status: true,
  },
  {
    title: 'Sanskrit Teacher',
    roleCategory: 'Language Teacher',
    status: true,
  },
  {
    title: 'Spanish Teacher',
    roleCategory: 'Language Teacher',
    status: true,
  },
  {
    title: 'Tamil Teacher',
    roleCategory: 'Language Teacher',
    status: true,
  },
  {
    title: 'Telugu Teacher',
    roleCategory: 'Language Teacher',
    status: true,
  },
  {
    title: 'Urdu Teacher',
    roleCategory: 'Language Teacher',
    status: true,
  },
  {
    title: 'Language Teacher - Other',
    roleCategory: 'Language Teacher',
    status: true,
  },
  {
    title: 'Arts Teacher',
    roleCategory: 'Life Skills / ECA Teacher',
    status: true,
  },
  {
    title: 'Communication Skills Teacher',
    roleCategory: 'Life Skills / ECA Teacher',
    status: true,
  },
  {
    title: 'Dance Teacher',
    roleCategory: 'Life Skills / ECA Teacher',
    status: true,
  },
  {
    title: 'Drama / Theater Teacher',
    roleCategory: 'Life Skills / ECA Teacher',
    status: true,
  },
  {
    title: 'Home Science Teacher',
    roleCategory: 'Life Skills / ECA Teacher',
    status: true,
  },
  {
    title: 'Martial Arts Teacher',
    roleCategory: 'Life Skills / ECA Teacher',
    status: true,
  },
  {
    title: 'Music Teacher',
    roleCategory: 'Life Skills / ECA Teacher',
    status: true,
  },
  {
    title: 'Sports / Physical Education Teacher',
    roleCategory: 'Life Skills / ECA Teacher',
    status: true,
  },
  {
    title: 'Life Skills / ECA Teacher - Other',
    roleCategory: 'Life Skills / ECA Teacher',
    status: true,
  },
  {
    title: 'Day Care Teacher / Incharge / Attendant',
    roleCategory: 'Preschool & Primary Education',
    status: true,
  },
  {
    title: 'Nursery Teacher',
    roleCategory: 'Preschool & Primary Education',
    status: true,
  },
  {
    title: 'Primary School Teacher',
    roleCategory: 'Preschool & Primary Education',
    status: true,
  },
  {
    title: 'Preschool & Primary Education - Other',
    roleCategory: 'Preschool & Primary Education',
    status: true,
  },
  {
    title: 'Accountancy Teacher',
    roleCategory: 'Subject / Specialization Teacher',
    status: true,
  },
  {
    title: 'Biology Teacher',
    roleCategory: 'Subject / Specialization Teacher',
    status: true,
  },
  {
    title: 'Biotechnology Teacher',
    roleCategory: 'Subject / Specialization Teacher',
    status: true,
  },
  {
    title: 'Business Studies Teacher',
    roleCategory: 'Subject / Specialization Teacher',
    status: true,
  },
  {
    title: 'Chemistry Teacher',
    roleCategory: 'Subject / Specialization Teacher',
    status: true,
  },
  {
    title: 'Commerce Teacher',
    roleCategory: 'Subject / Specialization Teacher',
    status: true,
  },
  {
    title: 'Computers Teacher',
    roleCategory: 'Subject / Specialization Teacher',
    status: true,
  },
  {
    title: 'Economics Teacher',
    roleCategory: 'Subject / Specialization Teacher',
    status: true,
  },
  {
    title: 'Environmental Science Teacher',
    roleCategory: 'Subject / Specialization Teacher',
    status: true,
  },
  {
    title: 'Finance Teacher',
    roleCategory: 'Subject / Specialization Teacher',
    status: true,
  },
  {
    title: 'Geography Teacher',
    roleCategory: 'Subject / Specialization Teacher',
    status: true,
  },
  {
    title: 'History Teacher',
    roleCategory: 'Subject / Specialization Teacher',
    status: true,
  },
  {
    title: 'Informatics Practices Teacher',
    roleCategory: 'Subject / Specialization Teacher',
    status: true,
  },
  {
    title: 'Mathematics Teacher',
    roleCategory: 'Subject / Specialization Teacher',
    status: true,
  },
  {
    title: 'Physics Teacher',
    roleCategory: 'Subject / Specialization Teacher',
    status: true,
  },
  {
    title: 'Political Science Teacher',
    roleCategory: 'Subject / Specialization Teacher',
    status: true,
  },
  {
    title: 'Psychology Teacher',
    roleCategory: 'Subject / Specialization Teacher',
    status: true,
  },
  {
    title: 'Robotics Teacher',
    roleCategory: 'Subject / Specialization Teacher',
    status: true,
  },
  {
    title: 'Science Teacher',
    roleCategory: 'Subject / Specialization Teacher',
    status: true,
  },
  {
    title: 'Social Studies Teacher',
    roleCategory: 'Subject / Specialization Teacher',
    status: true,
  },
  {
    title: 'Sociology Teacher',
    roleCategory: 'Subject / Specialization Teacher',
    status: true,
  },
  {
    title: 'Special Education Teacher',
    roleCategory: 'Subject / Specialization Teacher',
    status: true,
  },
  {
    title: 'Subject / Specialization Teacher - Other',
    roleCategory: 'Subject / Specialization Teacher',
    status: true,
  },
  {
    title: 'Academic Coordinator',
    roleCategory: 'University Level Educator',
    status: true,
  },
  {
    title: 'Assistant Professor / Lecturer',
    roleCategory: 'University Level Educator',
    status: true,
  },
  {
    title: 'Associate Professor',
    roleCategory: 'University Level Educator',
    status: true,
  },
  {
    title: 'Chairman / Chancellor',
    roleCategory: 'University Level Educator',
    status: true,
  },
  {
    title: 'Dean / Director',
    roleCategory: 'University Level Educator',
    status: true,
  },
  {
    title: 'Placement / Alumni Officer',
    roleCategory: 'University Level Educator',
    status: true,
  },
  {
    title: 'Professor',
    roleCategory: 'University Level Educator',
    status: true,
  },
  {
    title: 'Teaching Assistant',
    roleCategory: 'University Level Educator',
    status: true,
  },
  {
    title: 'Vice - Chancellor',
    roleCategory: 'University Level Educator',
    status: true,
  },
  {
    title: 'Visiting Faculty / Guest Faculty',
    roleCategory: 'University Level Educator',
    status: true,
  },
  {
    title: 'University Level Educator - Other',
    roleCategory: 'University Level Educator',
    status: true,
  },
  {
    title: 'Teaching & Training - Other',
    roleCategory: 'Teaching & Training - Other',
    status: true,
  },
  {
    title: 'Other',
    roleCategory: 'Other',
    status: true,
  },
];

export default class JobRoleSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(JobRole);
    const batchSize = 100;
    const seedDataLength = seedData.length;
    for (let i = 0; i < seedDataLength; i += batchSize) {
      const batch = seedData.slice(i, i + batchSize);
      await repository.save(batch);
    };
  };
};