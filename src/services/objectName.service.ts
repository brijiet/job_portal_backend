import { AppDataSource } from '../config/typeorm';
import { Jobs } from '../entities/jobs.entity';
import { ObjectName } from '../entities/objectName.entity';

export const saveObjectName = async (objectNameParams: ObjectName) => {
  try {

    const objectNameRepository = AppDataSource.getRepository(ObjectName);
    const objectName = await objectNameRepository.save(objectNameParams);
    console.log('objectName ', objectName.id);
    return objectName;

  } catch (error) {
    console.log('error in saveObjectName', error);
    throw error;
  }
}

export const fetchObjectNameByJobId = async (jobsId: any) => {
  try {

    const objectNameRepository = AppDataSource.getRepository(ObjectName);
    const objectNameData = await objectNameRepository.findOne({
      where: {
        jobs: { id: jobsId }
      }
    });
    return objectNameData;

  } catch (error) {
    console.log('error in fetchObjectName ', error);
    throw error;
  }
}

export const fetchObjectNameBymailComposeId = async (composeMailId: any) => {
  try {

    const objectNameRepository = AppDataSource.getRepository(ObjectName);
    const objectNameData = await objectNameRepository.findOne({
      where: {
        composeMail:{id:composeMailId}
      }
    });
    return objectNameData;

  } catch (error) {
    console.log('error in fetchObjectNameBymailComposeId ', error);
    throw error;
  }
}
