import { Request, RequestHandler, Response, NextFunction } from 'express';
import 'dotenv/config';
import { allCompanies, getCompanyDetails, saveCompanies, employerCompanyList, topCompaniesServices } from '../../services/employer/companies.service';
import { fileFilterImage, storageCompanyLogo } from '../../config/multer';
import multer, { memoryStorage } from 'multer';
import { promisify } from 'util';
import { Companies } from '../../entities/companies.entity';
import { updateCompanyDetails } from '../../services/employer/companies.service';
import { v4 as uuidV4 } from 'uuid'
import path from 'path';
import { deleteAzureBlob, uploadFileToAzureBlobStorage } from '../../services/azure.bolb.service';

export const fetchAllCompanies: RequestHandler = async (req: Request, res: Response) => {
  try {
    const query = req?.query;
    const result = await allCompanies(query);
    return res.status(200).json({
      data: result

    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}

export const postCompanies: RequestHandler = async (req: Request, res: Response) => {
  try {
    const result = await saveCompanies(req.body);
    return res.status(200).json({
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}


export const fetchCompanyDetails: RequestHandler = async (req: Request, res: Response) => {
  try {

    const jobId = req.params.id;
    const result = await getCompanyDetails(parseInt(jobId));
    return res.status(200).json({
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}

export const fetchEmployerCompanyList: RequestHandler = async (req: Request, res: Response) => {
  try {
    const query = req?.query;
    const result = await employerCompanyList(query);
    return res.status(200).json({
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}

export const topCompanies: RequestHandler = async (req: Request, res: Response) => {
  try {
    const query = req?.query;
    const result = await topCompaniesServices(query);
    return res.status(200).json({
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}
export const updateCompanyProfile: RequestHandler = async (req: Request, res: Response) => {
  try {
    if (process.env.FILE_LIMIT === undefined) {
      throw new Error('file limit cannot be undefined')
    }

    const upload = promisify(multer({
      storage: memoryStorage(),
      fileFilter: fileFilterImage,
      limits: { fileSize: parseInt(process.env.FILE_LIMIT) }
    }).single('file'));

    await upload(req, res);

    const id: any = req.params.id;

    let companyDetails: Companies = req.body;
    let companyImage:string;
    if (req.file) {
      const uniqueSuffix = uuidV4();
      const originalname = req && req.file && req.file.originalname
      const fileName = `${req.file?.fieldname}-${uniqueSuffix}${path.extname(originalname ?? 'defualtFile')}`
      const companyConatiner = process.env.AZURE_COMPANY_LOGOS as string
      const azureParams = {
        fileName: fileName,
        buffer: req.file.buffer,
        containerName: companyConatiner,
        size: req.file.size
      }
      companyImage= fileName
      companyDetails.companyImage = companyImage;
      
      const uploadImage =  uploadFileToAzureBlobStorage(azureParams);
      
    } 
 
    const companyDetailsUpdate = await updateCompanyDetails(id, companyDetails);
      return res.status(200).json(
        {
          message: 'success',
          data: companyDetailsUpdate
        }
      );

  } catch (error) {
    console.log('error', error);
    if (error instanceof multer.MulterError) {
      if (error.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
          message: 'Uploaded file size is larger than 2MB'
        })
      }
    } else {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message
        });
      } else {
        return res.status(500).json({
          message: 'Internal server error'
        });
      }
    }
  }
}

export const deleteCompanyProfile = async (req: Request, res: Response) => {
  try {
   const {id,companyImage}= req.body
    let company: any = new Companies();
    company.companyImage = null
    company.companyDescription = null;
    const companyConatiner = process.env.AZURE_COMPANY_LOGOS as string;
    const azureParams = {
      fileName:companyImage,
      containerName:companyConatiner
    };
   
    await deleteAzureBlob(azureParams)
    const companyData = await updateCompanyDetails(id, company);
    res.status(201).json({
      message: 'companyImage deleted successfully',
      data:companyData
    });
  } catch (error: any) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.sqlMessage
    });
  }
}
