import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { EmailDuration } from '../emailDuration.entity';

export default class EmailDurationSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(EmailDuration);
    await repository.upsert([
      {
        title: 'System Recommended',
        status: true,
      },
      {
        title: 'Weekly',
        status: true,
      },
      {
        title: 'No Email',
        status: true,
      }
    ],
      ["id"]);

  }
}