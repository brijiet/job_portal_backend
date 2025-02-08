import { Request, RequestHandler, Response, NextFunction } from 'express';
import 'dotenv/config';
import { saveJob, deleteJob, getSaveJobList, checkApplicantToSave } from '../services/saveJob.service';

export const postSaveJob: RequestHandler = async (req: Request, res: Response) => {
  try {
    const result = await saveJob(req.body);
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

export const checkJobToSaveController: RequestHandler = async (req: Request, res: Response) => {
  try {

    const jobId = req.params.jobId;
    const userId = req.params.userId;
    const result = await checkApplicantToSave(userId, jobId);
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

export const deleteSaveJob: RequestHandler = async (req: Request, res: Response) => {
  try {
    const jobs = req.params.jobs;
    const userID = req.params.userId;
    const result = await deleteJob(jobs, userID);
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


export const SaveJobList: RequestHandler = async (req: Request, res: Response) => {
  try {

    const userId = req.params.userId;
    const result = await getSaveJobList(parseInt(userId));
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

