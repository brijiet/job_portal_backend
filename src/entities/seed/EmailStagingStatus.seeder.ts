import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { EmailStagingStatus } from '../emailStagingStatus.entity';

export default class EmailStagingStatusSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
    ): Promise<any> {
        const repository = dataSource.getRepository(EmailStagingStatus);
        await repository.upsert([
            {
                title: "pending",
                status: true,
            },
            {
                title: "failed",
                status: true,
            },
            {
                title: "sent",
                status: true,
            },

        ],
            ["id"]);

    }
}