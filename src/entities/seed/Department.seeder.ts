import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Department } from '../department.entity';

const seedData = [{
  title: 'BFSI, Investments & Trading',
  status: true,
},
{
  title: 'Customer Success, Service & Operations',
  status: true,
},
{
  title: 'Data Science & Analytics',
  status: true,
},
{
  title: 'Engineering - Hardware & Networks',
  status: true,
},
{
  title: 'Engineering - Software & QA',
  status: true,
},
{
  title: 'Finance & Accounting',
  status: true,
},
{
  title: 'Human Resources',
  status: true,
},
{
  title: 'IT & Information Security',
  status: true,
},
{
  title: 'Marketing & Communication',
  status: true,
},
{
  title: 'Product Management',
  status: true,
},
{
  title: 'Production, Manufacturing & Engineering',
  status: true,
},
{
  title: 'Project & Program Management',
  status: true,
},
{
  title: 'Quality Assurance',
  status: true,
},
{
  title: 'Sales & Business Development',
  status: true,
},
{
  title: 'UX, Design & Architecture',
  status: true,
},
{
  title: 'Administration & Facilities',
  status: true,
},
{
  title: 'Aviation & Aerospace',
  status: true,
},
{
  title: 'Construction & Site Engineering',
  status: true,
},
{
  title: 'Consulting',
  status: true,
},
{
  title: 'Content, Editorial & Journalism',
  status: true,
},
{
  title: 'CSR & Social Service',
  status: true,
},
{
  title: 'Energy & Mining',
  status: true,
},
{
  title: 'Environment Health & Safety',
  status: true,
},
{
  title: 'Food, Beverage & Hospitality',
  status: true,
},
{
  title: 'Healthcare & Life Sciences',
  status: true,
},
{
  title: 'Legal & Regulatory',
  status: true,
},
{
  title: 'Media Production & Entertainment',
  status: true,
},
{
  title: 'Merchandising, Retail & eCommerce',
  status: true,
},
{
  title: 'Procurement & Supply Chain',
  status: true,
},
{
  title: 'Research & Development',
  status: true,
},
{
  title: 'Risk Management & Compliance',
  status: true,
},
{
  title: 'Security Services',
  status: true,
},
{
  title: 'Shipping & Maritime',
  status: true,
},
{
  title: 'Sports, Fitness & Personal Care',
  status: true,
},
{
  title: 'Strategic & Top Management',
  status: true,
},
{
  title: 'Teaching & Training',
  status: true,
},
{
  title: 'Other',
  status: true,
},
];

export default class DepartmentSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(Department);
    const batchSize = 100;
    const seedDataLength = seedData.length;
    for (let i = 0; i < seedDataLength; i += batchSize) {
      const batch = seedData.slice(i, i + batchSize);
      await repository.save(batch);
    };
  }
}
