import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { ApplicantStatus } from '../applicantStatus.entity';

export default class ApplicantStatusSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(ApplicantStatus);
    await repository.upsert([
      {
        title: 'UnReviewed',
        status: true,
      },
      {
        title: 'ShortListed',
        status: true,
      },
      {
        title: 'Rejected',
        status: true,
      }

    ],
      ["id"]);

  }
}