import { Locality } from '../entities/locality.entity';
import { AppDataSource } from "../config/typeorm";

export const localityList = async (locationList: string) => {
  try {
    const locationArray = locationList.split(",");
    const queryResult = AppDataSource.getRepository(Locality)
      .createQueryBuilder("locality").select("locality")
      .where("locality.status = :status", { status: 1 })
      .andWhere("locality.location In(:...locationList)", { locationList: locationArray })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
