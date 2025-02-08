import { AppDataSource } from "../config/typeorm";
import { Location } from "../entities/location.entity";

export const locationList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(Location)
      .createQueryBuilder("location").select("location")
      .where("location.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const allCityJobsCount = async () => {
  try {
    const page = Number(process.env.JOB_PER_PAGE);
    const skip = (page * 1) - page;
    const queryResult = AppDataSource.getRepository(Location)
    const allCityJobs = await queryResult.find({
      order: {
        location: {
          id: "DESC",
        }
      },
      relations: {
        location: true
      },
      skip: (skip),
      take: (page),
    });
    const countJobs = allCityJobs.map((items: any) => ({
      id: items?.id,
      title: items?.title,
      status: items?.status,
      jobsCount: items?.location?.length
    }));
    return countJobs;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}