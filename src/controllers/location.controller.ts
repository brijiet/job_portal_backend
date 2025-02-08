
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { locationList, allCityJobsCount } from '../services/location.service';

export const getLocation: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await locationList();
    return res.status(201).json({
      message: 'Location list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}

export const getAllCityJobsCount: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await allCityJobsCount();
    return res.status(201).json({
      message: 'Location list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}