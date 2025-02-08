import { Request, Response } from 'express';

export const processInboundEmails = async (req: Request, res: Response) => {
  try {

    const emailBody = req.body;

    console.log('email body', emailBody);

    return res.status(200).json({
      message: 'Successfully received message'
    })

  } catch (error) {
    console.log('error in processInboundEmails ', error);
    return res.status(500).send({
      message: 'Internal server error'
    });
  }

}