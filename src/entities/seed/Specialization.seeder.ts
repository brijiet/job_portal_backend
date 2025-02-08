import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Specialization } from '../specialization.entity';

export default class SpecializationSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(Specialization);
    await repository.upsert([
      {
        title: 'Advertising/Mass Communication',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Agriculture',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Anthropology',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Architecture',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Arts & Humanities',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Astrophysics',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Automobile',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Aviation',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Bio-Chemistry/Bio-Technology',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Biomedical',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Biophysics',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Biotechnology',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Botany',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Ceramics',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Chemical',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Chemistry',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Civil',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Commerce',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Communication',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Computers',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Dairy Technology',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Dermatology',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Economics',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Education',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Electrical',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Electronics/Telecommunication',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Energy',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'ENT',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Environmental',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Fashion Designing/Other Designing',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Film',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Finance',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Fine Arts',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Food Technology',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Genetics',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'History',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Home Science',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Hotel Management',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'HR/Industrial Relations',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Immunology',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Instrumentation',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'International Business',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Journalism',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Law',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Linguistics',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Literature',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Marine',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Marketing',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Maths',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Mechanical',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Medicine',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Metallurgy',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Microbiology',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Mineral',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Mining',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Music',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Neonatal',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Nuclear',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Nursing',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Obstetrics',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Paint/Oil',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Pathology',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Pediatrics',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Petroleum',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Pharmacy',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Philosophy',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Physical Education',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Physics',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Plastics',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Political Science',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Production/Industrial',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Psychiatry',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Psychology',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Radiology',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Rheumatology',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Sanskrit',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Sociology',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Special Education',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Statistics',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Systems',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Textile',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Vocational Courses',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Zoology',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "Ph.D/Doctorate",
        status: true,
      },
      {
        title: 'Advertising/Mass Communication',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Agriculture',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Anthropology',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Architecture',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Arts & Humanities',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Astrophysics',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Automobile',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Aviation',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Bio-Chemistry/Bio-Technology',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Biomedical',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Biophysics',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Biotechnology',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Botany',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Ceramics',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Chemical',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Chemistry',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Civil',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Commerce',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Communication',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Computers',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Dairy Technology',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Dermatology',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Economics',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Education',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Electrical',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Electronics/Telecommunication',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Energy',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'ENT',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Environmental',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Fashion Designing/Other Designing',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Film',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Finance',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Fine Arts',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Food Technology',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Genetics',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'History',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Home Science',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Hotel Management',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'HR/Industrial Relations',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Immunology',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Instrumentation',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'International Business',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Journalism',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Law',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Linguistics',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Literature',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Marine',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Marketing',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Maths',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Mechanical',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Medicine',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Metallurgy',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Microbiology',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Mineral',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Mining',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Music',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Neonatal',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Nuclear',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Nursing',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Obstetrics',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Paint/Oil',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Pathology',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Pediatrics',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Petroleum',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Pharmacy',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Philosophy',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Physical Education',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Physics',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Plastics',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Political Science',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Production/Industrial',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Psychiatry',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Psychology',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Radiology',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Rheumatology',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Sanskrit',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Sociology',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Special Education',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Statistics',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Systems',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Textile',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Vocational Courses',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Zoology',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "MPHIL",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "Other Doctorate",
        status: true,
      },
      {
        title: 'Advertising/Mass Communication',
        course: "MBA/PGDM",
        status: true,
      },
      {
        title: 'Finance',
        course: "MBA/PGDM",
        status: true,
      },
      {
        title: 'Hospitality Management',
        course: "MBA/PGDM",
        status: true,
      },
      {
        title: 'HR/Industrial Relations',
        course: "MBA/PGDM",
        status: true,
      },
      {
        title: 'Information Technology',
        course: "MBA/PGDM",
        status: true,
      },
      {
        title: 'International Business',
        course: "MBA/PGDM",
        status: true,
      },
      {
        title: 'Marketing',
        course: "MBA/PGDM",
        status: true,
      },
      {
        title: 'Operations',
        course: "MBA/PGDM",
        status: true,
      },
      {
        title: 'Systems',
        course: "MBA/PGDM",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "MBA/PGDM",
        status: true,
      },
      {
        title: 'Agriculture',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Automobile',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Aviation',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Bio-Chemistry/Bio-Technology',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Biomedical',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Ceramics',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Chemical',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Civil',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Computers',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Electrical',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Electronics/Telecommunication',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Energy',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Environmental',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Instrumentation',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Marine',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Mechanical',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Metallurgy',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Mineral',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Mining',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Nuclear',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Paint/Oil',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Petroleum',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Plastics',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Production/Industrial',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Textile',
        course: "M.Tech",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "M.Tech",
        status: true,
      },

      {
        title: 'Other Specialization',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Aerospace & Mechanical Engineering',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Agriculture',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Anthropology',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Astronautical Engineering',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Bio-Chemistry',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Biology',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Biotechnology',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Botany',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Chemical Engineering & Materials Science',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Chemistry',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Civil & Environmental Engineering',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Computers',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Cyber Security Engineering',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Dairy Technology',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Data Informatics',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Electrical Engineering',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Electronics',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Electronics & Embedded Technology',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Environmental science',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Food Technology',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Geology',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Home science',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Hospitality Administration',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Industrial & Systems Engineering',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Marine Engineering',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Maths',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Mechanical Engineering',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Mechatronics',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Microbiology',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Nursing',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Optometry',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Organic Chemistry',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Petroleum Engineering',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Physics',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Statistics',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Systems Architecting and Engineering',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Veterinary Science',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Zoology',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "MS/M.Sc(Science)",
        status: true,
      },
      {
        title: 'Computers',
        course: "MCA",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "MCA",
        status: true,
      },
      {
        title: 'Commerce',
        course: "M.Com",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "M.Com",
        status: true,
      },
      {
        title: 'Chemical',
        course: "PG Diploma",
        status: true,
      },
      {
        title: 'Civil',
        course: "PG Diploma",
        status: true,
      },
      {
        title: 'Computers',
        course: "PG Diploma",
        status: true,
      },
      {
        title: 'Electrical',
        course: "PG Diploma",
        status: true,
      },
      {
        title: 'Electronics',
        course: "PG Diploma",
        status: true,
      },
      {
        title: 'Mechanical',
        course: "PG Diploma",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "PG Diploma",
        status: true,
      },
      {
        title: 'Anthropology',
        course: "M.A",
        status: true,
      },
      {
        title: 'Arts & Humanities',
        course: "M.A",
        status: true,
      },
      {
        title: 'Communication',
        course: "M.A",
        status: true,
      },
      {
        title: 'Economics',
        course: "M.A",
        status: true,
      },
      {
        title: 'English',
        course: "M.A",
        status: true,
      },
      {
        title: 'Film',
        course: "M.A",
        status: true,
      },
      {
        title: 'Fine Arts',
        course: "M.A",
        status: true,
      },
      {
        title: 'Hindi',
        course: "M.A",
        status: true,
      },
      {
        title: 'History',
        course: "M.A",
        status: true,
      },
      {
        title: 'Journalism',
        course: "M.A",
        status: true,
      },
      {
        title: 'Maths',
        course: "M.A",
        status: true,
      },
      {
        title: 'Political Science',
        course: "M.A",
        status: true,
      },
      {
        title: 'PR/ Advertising',
        course: "M.A",
        status: true,
      },
      {
        title: 'Psychology',
        course: "M.A",
        status: true,
      },
      {
        title: 'Sanskrit',
        course: "M.A",
        status: true,
      },
      {
        title: 'Sociology',
        course: "M.A",
        status: true,
      },
      {
        title: 'Statistics',
        course: "M.A",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "M.A",
        status: true,
      },
      {
        title: 'CA',
        course: "CA",
        status: true,
      },
      {
        title: 'First Attempt',
        course: "CA",
        status: true,
      },
      {
        title: 'Pursuing',
        course: "CA",
        status: true,
      },
      {
        title: 'Second Attempt',
        course: "CA",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "CA",
        status: true,
      },
      {
        title: 'CS',
        course: "CS",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "CS",
        status: true,
      },
      {
        title: 'Cardiac -Anaes.',
        course: "DM",
        status: true,
      },
      {
        title: 'Cardiology',
        course: "DM",
        status: true,
      },
      {
        title: 'Child & Adolescent Psychiatry',
        course: "DM",
        status: true,
      },
      {
        title: 'Clinical Haematology',
        course: "DM",
        status: true,
      },
      {
        title: 'Clinical Immunology',
        course: "DM",
        status: true,
      },
      {
        title: 'Clinical Pharmacology',
        course: "DM",
        status: true,
      },
      {
        title: 'Critical Care Medicine',
        course: "DM",
        status: true,
      },
      {
        title: 'Endocrinology',
        course: "DM",
        status: true,
      },
      {
        title: 'Gastroenterology',
        course: "DM",
        status: true,
      },
      {
        title: 'Geriatric Mental Health',
        course: "DM",
        status: true,
      },
      {
        title: 'Haematology Pathology',
        course: "DM",
        status: true,
      },
      {
        title: 'Hepatology',
        course: "DM",
        status: true,
      },
      {
        title: 'Immunology',
        course: "DM",
        status: true,
      },
      {
        title: 'Infectious Diseases',
        course: "DM",
        status: true,
      },
      {
        title: 'Medical Genetics',
        course: "DM",
        status: true,
      },
      {
        title: 'Neonatology',
        course: "DM",
        status: true,
      },
      {
        title: 'Nephrology',
        course: "DM",
        status: true,
      },
      {
        title: 'Neuro Anaesthesia',
        course: "DM",
        status: true,
      },
      {
        title: 'Neuro Radiology',
        course: "DM",
        status: true,
      },
      {
        title: 'Neurology',
        course: "DM",
        status: true,
      },
      {
        title: 'Oncology',
        course: "DM",
        status: true,
      },
      {
        title: 'Organ Transplant Anaesthesia & Critical Care',
        course: "DM",
        status: true,
      },
      {
        title: 'Pediatric Anaesthesia',
        course: "DM",
        status: true,
      },
      {
        title: 'Pediatric Cardiology',
        course: "DM",
        status: true,
      },
      {
        title: 'Pediatric Gastroenterology',
        course: "DM",
        status: true,
      },
      {
        title: 'Pediatric Hepatology',
        course: "DM",
        status: true,
      },
      {
        title: 'Pediatric Nephrology',
        course: "DM",
        status: true,
      },
      {
        title: 'Pediatric Oncology',
        course: "DM",
        status: true,
      },
      {
        title: 'Pulmonary Med. & Critical Care Med.',
        course: "DM",
        status: true,
      },
      {
        title: 'Pulmonary Medicine',
        course: "DM",
        status: true,
      },
      {
        title: 'Reproductive Medicine',
        course: "DM",
        status: true,
      },
      {
        title: 'Rheumatology',
        course: "DM",
        status: true,
      },
      {
        title: 'Virology',
        course: "DM",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "DM",
        status: true,
      },
      {
        title: 'ICWA (CMA)',
        course: "ICWA (CMA)",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "ICWA (CMA)",
        status: true,
      },
      {
        title: 'Journalism / Mass Communication',
        course: "Integrated PG",
        status: true,
      },
      {
        title: 'Management',
        course: "Integrated PG",
        status: true,
      },
      {
        title: 'PR/ Advertising',
        course: "Integrated PG",
        status: true,
      },
      {
        title: 'Tourism',
        course: "Integrated PG",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "Integrated PG",
        status: true,
      },
      {
        title: 'Law',
        course: "LLM",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "LLM",
        status: true,
      },
      {
        title: 'Architecture',
        course: "M.Arch",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "M.Arch",
        status: true,
      },
      {
        title: 'Burns & Plastic Surgery',
        course: "M.Ch",
        status: true,
      },
      {
        title: 'Cardio Thoracic and Vascular Surgery',
        course: "M.Ch",
        status: true,
      },
      {
        title: 'Cardio Thoracic Surgery',
        course: "M.Ch",
        status: true,
      },
      {
        title: 'Endocrine Surgery',
        course: "M.Ch",
        status: true,
      },
      {
        title: 'Gynaecological Oncology',
        course: "M.Ch",
        status: true,
      },
      {
        title: 'Hand & Micro Surgery',
        course: "M.Ch",
        status: true,
      },
      {
        title: 'Hand Surgery',
        course: "M.Ch",
        status: true,
      },
      {
        title: 'Hepato Pancreato Biliary Surgery',
        course: "M.Ch",
        status: true,
      },
      {
        title: 'Neuro Surgery',
        course: "M.Ch",
        status: true,
      },
      {
        title: 'Oncology',
        course: "M.Ch",
        status: true,
      },
      {
        title: 'Pediatric Cardio-Thoracic Vascular Surgery',
        course: "M.Ch",
        status: true,
      },
      {
        title: 'Pediatric Surgery',
        course: "M.Ch",
        status: true,
      },
      {
        title: 'Plastic & Reconstructive Surgery',
        course: "M.Ch",
        status: true,
      },
      {
        title: 'Plastic Surgery',
        course: "M.Ch",
        status: true,
      },
      {
        title: 'Surgical Gastroenterology/G.I. Surgery',
        course: "M.Ch",
        status: true,
      },
      {
        title: 'Surgical Oncology',
        course: "M.Ch",
        status: true,
      },
      {
        title: 'Thoracic Surgery',
        course: "M.Ch",
        status: true,
      },
      {
        title: 'Urology',
        course: "M.Ch",
        status: true,
      },
      {
        title: 'Urology/Genito -Urinary Surgery',
        course: "M.Ch",
        status: true,
      },
      {
        title: 'Vascular Surgery',
        course: "M.Ch",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "M.Ch",
        status: true,
      },
      {
        title: 'Animation Film Design',
        course: "M.Des.",
        status: true,
      },
      {
        title: 'Apparel Design',
        course: "M.Des.",
        status: true,
      },
      {
        title: 'Ceramic & Glass Design',
        course: "M.Des.",
        status: true,
      },
      {
        title: 'Design For Retail Experience',
        course: "M.Des.",
        status: true,
      },
      {
        title: 'Digital Game Design',
        course: "M.Des.",
        status: true,
      },
      {
        title: 'Film and Video Communication',
        course: "M.Des.",
        status: true,
      },
      {
        title: 'Furniture Design',
        course: "M.Des.",
        status: true,
      },
      {
        title: 'Graphic Design',
        course: "M.Des.",
        status: true,
      },
      {
        title: 'Information Design',
        course: "M.Des.",
        status: true,
      },
      {
        title: 'Interaction Design',
        course: "M.Des.",
        status: true,
      },
      {
        title: 'Lifestyle Accessory Design',
        course: "M.Des.",
        status: true,
      },
      {
        title: 'New Media Design',
        course: "M.Des.",
        status: true,
      },
      {
        title: 'Photography Design',
        course: "M.Des.",
        status: true,
      },
      {
        title: 'Product Design',
        course: "M.Des.",
        status: true,
      },
      {
        title: 'Strategic Design Management',
        course: "M.Des.",
        status: true,
      },
      {
        title: 'Textile Design',
        course: "M.Des.",
        status: true,
      },
      {
        title: 'Toy & Game Design',
        course: "M.Des.",
        status: true,
      },
      {
        title: 'Transportation & Automobile Design',
        course: "M.Des.",
        status: true,
      },
      {
        title: 'Universal Design',
        course: "M.Des.",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "M.Des.",
        status: true,
      },
      {
        title: 'Education',
        course: "M.Ed",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "M.Ed",
        status: true,
      },
      {
        title: 'Pharmacy',
        course: "M.Pharma",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "M.Pharma",
        status: true,
      },
      {
        title: 'Computers and Management',
        course: "MCM",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "MCM",
        status: true,
      },
      {
        title: 'Dentistry',
        course: "MDS",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "MDS",
        status: true,
      },
      {
        title: 'Anaesthesiology',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Anatomy',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Aviation Medicine/Aerospace Medicine',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Ayurveda',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Bio-Chemistry',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Bio-Physics',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Blood Banking & Immuno. Haem./Imm. Haem. & Blood Trans.',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Cardiology',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'CCM',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Dermatology',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Emergency Medicine',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'ENT',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Forensic Medicine/Forensic Medicine & Toxicology',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'General Practitioner',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'General Surgery',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Geriatrics',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Gyneocology',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Health Administration',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Hepatology',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Hospital Administration',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Immunology',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Lab Medicine',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Maternity & Child Health',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Medical Genetics',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Microbiology',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Neonatal',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Nephrology',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Neuro Surgery',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Nuclear Medicine',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Obstretrics',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Oncology',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Opthalmology',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Orthopaedic',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'P.S.M',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Palliative Medicine',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Pathology',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Pediatrics',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Pharmacology',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Physical Medicine & Rehabilitation',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Psychiatry',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Psychology',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Public Health (Epidemiology)',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Pulmonary Medicine',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'R&D',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Radiology',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Radiotherapy',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Rheumatology',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Social & Preventive Medicine / Community Medicine',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Sports Medicine',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Thoracic Medicine',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Traumatology and Surgery',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Tropical Medicine',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Tuberculosis & Respiratory Diseases / Pulmonary Medicine',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Unani',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Urology',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Venereology',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "Medical-MS/MD",
        status: true,
      },
      {
        title: 'Printmaking',
        course: "MFA",
        status: true,
      },
      {
        title: 'Sculpture',
        course: "MFA",
        status: true,
      },
      {
        title: 'Visual Communication',
        course: "MFA",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "MFA",
        status: true,
      },
      {
        title: 'Veterinary Science',
        course: "MVSC",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "MVSC",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "Other Post Graduate",
        status: true,
      },
      {
        title: 'Agriculture',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Automobile',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Aviation',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Bio-Chemistry/Bio-Technology',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Biomedical',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Ceramics',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Chemical',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Civil',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Computers',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Electrical',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Electronics/Telecommunication',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Energy',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Environmental',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Instrumentation',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Marine',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Mechanical',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Metallurgy',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Mineral',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Mining',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Nuclear',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Paint/Oil',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Petroleum',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Plastics',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Production/Industrial',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Textile',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Electrical and Electronics',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Information Technology',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "B.Tech/B.E.",
        status: true,
      },
      {
        title: 'Commerce',
        course: "B.Com",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "B.Com",
        status: true,
      },
      {
        title: 'Agriculture',
        course: "B.Sc",
        status: true,
      },
      {
        title: 'Anthropology',
        course: "B.Sc",
        status: true,
      },
      {
        title: 'Bio-Chemistry',
        course: "B.Sc",
        status: true,
      },
      {
        title: 'Biology',
        course: "B.Sc",
        status: true,
      },
      {
        title: 'Botany',
        course: "B.Sc",
        status: true,
      },
      {
        title: 'Chemistry',
        course: "B.Sc",
        status: true,
      },
      {
        title: 'Computers',
        course: "B.Sc",
        status: true,
      },
      {
        title: 'Dairy Technology',
        course: "B.Sc",
        status: true,
      },
      {
        title: 'Electronics',
        course: "B.Sc",
        status: true,
      },
      {
        title: 'Environmental Science',
        course: "B.Sc",
        status: true,
      },
      {
        title: 'Food Technology',
        course: "B.Sc",
        status: true,
      },
      {
        title: 'General',
        course: "B.Sc",
        status: true,
      },
      {
        title: 'Geology',
        course: "B.Sc",
        status: true,
      },
      {
        title: 'Home Science',
        course: "B.Sc",
        status: true,
      },
      {
        title: 'Hospitality and Hotel Management',
        course: "B.Sc",
        status: true,
      },
      {
        title: 'Maths',
        course: "B.Sc",
        status: true,
      },
      {
        title: 'Microbiology',
        course: "B.Sc",
        status: true,
      },
      {
        title: 'Nursing',
        course: "B.Sc",
        status: true,
      },
      {
        title: 'Optometry',
        course: "B.Sc",
        status: true,
      },
      {
        title: 'Physics',
        course: "B.Sc",
        status: true,
      },
      {
        title: 'Statistics',
        course: "B.Sc",
        status: true,
      },
      {
        title: 'Zoology',
        course: "B.Sc",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "B.Sc",
        status: true,
      },
      {
        title: 'Arts&Humanities',
        course: "B.A",
        status: true,
      },
      {
        title: 'Communication',
        course: "B.A",
        status: true,
      },
      {
        title: 'Economics',
        course: "B.A",
        status: true,
      },
      {
        title: 'English',
        course: "B.A",
        status: true,
      },
      {
        title: 'Film',
        course: "B.A",
        status: true,
      },
      {
        title: 'Fine Arts',
        course: "B.A",
        status: true,
      },
      {
        title: 'Hindi',
        course: "B.A",
        status: true,
      },
      {
        title: 'History',
        course: "B.A",
        status: true,
      },
      {
        title: 'Hotel Management',
        course: "B.A",
        status: true,
      },
      {
        title: 'Journalism',
        course: "B.A",
        status: true,
      },
      {
        title: 'Maths',
        course: "B.A",
        status: true,
      },
      {
        title: 'Pass Course',
        course: "B.A",
        status: true,
      },
      {
        title: 'Political Science',
        course: "B.A",
        status: true,
      },
      {
        title: 'PR/Advertising',
        course: "B.A",
        status: true,
      },
      {
        title: 'Psychology',
        course: "B.A",
        status: true,
      },
      {
        title: 'Sanskrit',
        course: "B.A",
        status: true,
      },
      {
        title: 'Sociology',
        course: "B.A",
        status: true,
      },
      {
        title: 'Statistics',
        course: "B.A",
        status: true,
      },
      {
        title: 'Vocational Course',
        course: "B.A",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "B.A",
        status: true,
      },
      {
        title: 'Architecture',
        course: "Diploma",
        status: true,
      },
      {
        title: 'Chemical',
        course: "Diploma",
        status: true,
      },
      {
        title: 'Civil',
        course: "Diploma",
        status: true,
      },
      {
        title: 'Computers',
        course: "Diploma",
        status: true,
      },
      {
        title: 'Electrical',
        course: "Diploma",
        status: true,
      },
      {
        title: 'Electronics/Telecommunication',
        course: "Diploma",
        status: true,
      },
      {
        title: 'Engineering',
        course: "Diploma",
        status: true,
      },
      {
        title: 'Export/Import',
        course: "Diploma",
        status: true,
      },
      {
        title: 'Fashion Designing/Other Designing',
        course: "Diploma",
        status: true,
      },
      {
        title: 'Graphic/ Web Designing',
        course: "Diploma",
        status: true,
      },
      {
        title: 'Hotel Management',
        course: "Diploma",
        status: true,
      },
      {
        title: 'Insurance',
        course: "Diploma",
        status: true,
      },
      {
        title: 'Management',
        course: "Diploma",
        status: true,
      },
      {
        title: 'Mechanical',
        course: "Diploma",
        status: true,
      },
      {
        title: 'Tourism',
        course: "Diploma",
        status: true,
      },
      {
        title: 'Visual Arts',
        course: "Diploma",
        status: true,
      },

      {
        title: 'Vocational Course',
        course: "Diploma",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "Diploma",
        status: true,
      },
      {
        title: 'Architecture',
        course: "B.Arch",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "B.Arch",
        status: true,
      },
      {
        title: 'Management',
        course: "B.B.A/ B.M.S",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "B.B.A/ B.M.S",
        status: true,
      },
      {
        title: 'Animation Film Design',
        course: "B.Des.",
        status: true,
      },
      {
        title: 'Ceramic & Glass Design',
        course: "B.Des.",
        status: true,
      },
      {
        title: 'Exhibition Design',
        course: "B.Des.",
        status: true,
      },
      {
        title: 'Film and Video Communication',
        course: "B.Des.",
        status: true,
      },
      {
        title: 'Furniture Design',
        course: "B.Des.",
        status: true,
      },
      {
        title: 'Graphic Design',
        course: "B.Des.",
        status: true,
      },
      {
        title: 'Product Design',
        course: "B.Des.",
        status: true,
      },
      {
        title: 'Textile Design',
        course: "B.Des.",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "B.Des.",
        status: true,
      },
      {
        title: 'Education',
        course: "B.Ed",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "B.Ed",
        status: true,
      },
      {
        title: 'Elementary Education',
        course: "B.El.Ed",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "B.El.Ed",
        status: true,
      },
      {
        title: 'Physical Education',
        course: "B.P.Ed",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "B.P.Ed",
        status: true,
      },
      {
        title: 'Pharmacy',
        course: "B.Pharma",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "B.Pharma",
        status: true,
      },
      {
        title: 'Unani Medicine',
        course: "B.U.M.S",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "B.U.M.S",
        status: true,
      },
      {
        title: 'Ayurveda',
        course: "BAMS",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "BAMS",
        status: true,
      },
      {
        title: 'Computers',
        course: "BCA",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "BCA",
        status: true,
      },
      {
        title: 'Dentistry',
        course: "BDS",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "BDS",
        status: true,
      },
      {
        title: 'Art History',
        course: "BFA",
        status: true,
      },
      {
        title: 'Painting',
        course: "BFA",
        status: true,
      },
      {
        title: 'Printmaking',
        course: "BFA",
        status: true,
      },
      {
        title: 'Sculpture',
        course: "BFA",
        status: true,
      },
      {
        title: 'Visual Communication',
        course: "BFA",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "BFA",
        status: true,
      },
      {
        title: 'Hotel Management',
        course: "BHM",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "BHM",
        status: true,
      },
      {
        title: 'Hotel Management',
        course: "BHMCT",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "BHMCT",
        status: true,
      },
      {
        title: 'Homeopathy',
        course: "BHMS",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "BHMS",
        status: true,
      },
      {
        title: 'Veterinary Science',
        course: "BVSC",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "BVSC",
        status: true,
      },
      {
        title: 'Law',
        course: "LLB",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "LLB",
        status: true,
      },
      {
        title: 'Medicine',
        course: "MBBS",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "MBBS",
        status: true,
      },
      {
        title: 'Other Specialization',
        course: "Other Graduate",
        status: true,
      },
    ],
      ["id"]);

  }
}