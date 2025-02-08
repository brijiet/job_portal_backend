import { Request, RequestHandler, Response } from 'express';
import { getOneComposeMail, saveComposeMail } from '../services/composeMail.service';
import 'dotenv/config';

export const postComposeMail: RequestHandler = async (req: Request, res: Response) => {
  try {
    const userParams = {
      email: req.user.email,
      id:req.user.id
    }
    const result = await saveComposeMail(req.body,userParams);
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

export const fetchOneComposeMail: RequestHandler = async (req: Request, res: Response) => {
  try {

    const userId = req.params.userId;
    const result = await getOneComposeMail(parseInt(userId));
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