import { AppDataSource } from '../config/typeorm';
import { ObjectNameType } from '../entities/objectNameType.entity';

export const fetchObjectNameType = async (title:string) => {
  try {
    
    const objectNameTypeRepository = AppDataSource.getRepository(ObjectNameType);
    return await  objectNameTypeRepository.findOne({
      where: { title }
    });
    
  } catch (error) {
    console.log('error in saveObjectName', error);
    throw error;
  }
}

