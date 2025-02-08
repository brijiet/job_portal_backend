import { Request, RequestHandler, Response, NextFunction } from 'express';
import { saveApplyJob, getCountApplicant, getApplyJobList, getApplicantListService, checkJobForApplicant, saveApplicantStatus } from '../services/applyJob.service';
import 'dotenv/config';

export const postApplyJob: RequestHandler = async (req: Request, res: Response) => {
  try {
    const userParams = {
      email: req.user.email,
      id:req.user.id
    }
    const result = await saveApplyJob(req.body,userParams);
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

export const postApplicantStatus: RequestHandler = async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    const result = await saveApplicantStatus(req.body);
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



export const fetchApplyJobList: RequestHandler = async (req: Request, res: Response) => {
  try {

    const userId = req.params.userId;
    const result = await getApplyJobList(parseInt(userId));
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


export const fetchCountApplicant: RequestHandler = async (req: Request, res: Response) => {
  try {

    const jobId = req.params.jobId;
    const result = await getCountApplicant(parseInt(jobId));
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

export const checkJobApplyApplicant: RequestHandler = async (req: Request, res: Response) => {
  try {

    const jobId = req.params.jobId;
    const userId = req.params.userId;
    const result = await checkJobForApplicant(userId, jobId);
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
export const fetchApplicantList: RequestHandler = async (req: Request, res: Response) => {
  try {
    const query = req?.query;
    const result = await getApplicantListService(query);
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
