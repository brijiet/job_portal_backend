import { NextFunction, Request, Response } from 'express';
import { getSaveResumeService, getSingleSaveResumeService, saveSearchResumeService, searchResumeResultService } from '../services/searchResume.service';


export const saveSearchResumeController = async (req: Request, res: Response) => {
  try {
    const saveResume = await saveSearchResumeService(req.body);
    res.status(201).json({
      message: 'Save search resume added successfully',
      data: saveResume
    });
  } catch (error: any) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.sqlMessage
    });
  }
}

export const searchResumeController = async (req: Request, res: Response) => {
  try {
    const searchResume = await searchResumeResultService(req.body);
    res.status(200).json({
      data: searchResume
    });
  } catch (error: any) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.sqlMessage
    });
  }
}

export const getSaveResumeController = async (req: Request, res: Response) => {
  try {
    const getSearchResume = await getSaveResumeService();
    res.status(200).json({
      data: getSearchResume
    });
  } catch (error: any) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.sqlMessage
    });
  }
}

export const getSingleSaveResumeController = async (req: Request, res: Response) => {
  try {
    const reqId = req.params["reqId"]
    const getSearchResume = await getSingleSaveResumeService(Number(reqId));
    res.status(200).json({
      data: getSearchResume
    });
  } catch (error: any) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.sqlMessage
    });
  }
}