import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Course } from '../course.entity';

export default class CourseSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(Course);
    await repository.upsert([
      {
        title: 'Ph.D/Doctorate',
        educationType: "Doctorate/PhD",
        status: true,
      },
      {
        title: 'MPHIL',
        educationType: "Doctorate/PhD",
        status: true,
      },
      {
        title: 'Other Doctorate',
        educationType: "Doctorate/PhD",
        status: true,
      },
      {
        title: 'MBA/PGDM',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'M.Tech',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'MS/M.Sc(Science)',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'MCA',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'M.Com',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'PG Diploma',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'M.A',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'CA',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'CS',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'DM',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'ICWA (CMA)',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'Integrated PG',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'LLM',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'M.Arch',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'M.Ch',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'M.Des.',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'M.Ed',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'M.Pharma',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'MCM',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'MDS',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'Medical-MS/MD',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'MFA',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'MVSC',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'Other Post Graduate',
        educationType: "Masters/Post-graduation",
        status: true,
      },
      {
        title: 'B.Tech/B.E.',
        educationType: "Graduation/Diploma",
        status: true,
      },
      {
        title: 'B.Com',
        educationType: "Graduation/Diploma",
        status: true,
      },
      {
        title: 'B.Sc',
        educationType: "Graduation/Diploma",
        status: true,
      },
      {
        title: 'B.A',
        educationType: "Graduation/Diploma",
        status: true,
      },
      {
        title: 'Diploma',
        educationType: "Graduation/Diploma",
        status: true,
      },
      {
        title: 'B.Arch',
        educationType: "Graduation/Diploma",
        status: true,
      },
      {
        title: 'B.B.A/ B.M.S',
        educationType: "Graduation/Diploma",
        status: true,
      },
      {
        title: 'B.Des.',
        educationType: "Graduation/Diploma",
        status: true,
      },
      {
        title: 'B.Ed',
        educationType: "Graduation/Diploma",
        status: true,
      },
      {
        title: 'B.El.Ed',
        educationType: "Graduation/Diploma",
        status: true,
      },
      {
        title: 'B.P.Ed',
        educationType: "Graduation/Diploma",
        status: true,
      },
      {
        title: 'B.Pharma',
        educationType: "Graduation/Diploma",
        status: true,
      },
      {
        title: 'B.U.M.S',
        educationType: "Graduation/Diploma",
        status: true,
      },
      {
        title: 'BAMS',
        educationType: "Graduation/Diploma",
        status: true,
      },
      {
        title: 'BCA',
        educationType: "Graduation/Diploma",
        status: true,
      },
      {
        title: 'BDS',
        educationType: "Graduation/Diploma",
        status: true,
      },
      {
        title: 'BFA',
        educationType: "Graduation/Diploma",
        status: true,
      },
      {
        title: 'BHM',
        educationType: "Graduation/Diploma",
        status: true,
      },
      {
        title: 'BHMCT',
        educationType: "Graduation/Diploma",
        status: true,
      },
      {
        title: 'BHMS',
        educationType: "Graduation/Diploma",
        status: true,
      },
      {
        title: 'BVSC',
        educationType: "Graduation/Diploma",
        status: true,
      },
      {
        title: 'LLB',
        educationType: "Graduation/Diploma",
        status: true,
      },
      {
        title: 'MBBS',
        educationType: "Graduation/Diploma",
        status: true,
      },
      {
        title: 'Other Graduate',
        educationType: "Graduation/Diploma",
        status: true,
      },
    ],
      ["id"]);

  }
}