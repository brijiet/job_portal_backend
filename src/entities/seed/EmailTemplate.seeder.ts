import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { EmailTemplate } from '../emailTemplate.entity';

export default class EmailTemplateSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
    ): Promise<any> {
        const repository = dataSource.getRepository(EmailTemplate);
        await repository.upsert([
            {
                title: "emailVerify",
                status: true,
            },
            {
                title: "RecommendedJobs",
                status: true,
            },
            {
                title: "ApplyJob",
                status: true,
            },
            {
                title: "RecommendedCandidates",
                status: true,
            },
            {
                title: "RecruiterSendingEmail",
                status: true,
            },
            {
                title: "ResetPassword",
                status: true,
            },

        ],
            ["id"]);

    }
}