import { Request, RequestHandler, Response, NextFunction } from 'express';
import { emailDurationList } from '../services/emailDuration.service';

export const getEmailDuration: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await emailDurationList();
    return res.status(201).json({
      message: 'Email duration list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}