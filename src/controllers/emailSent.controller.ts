import { Request, Response } from "express";
import { fetchEmailSent } from "../services/emailSent.service";

export const getEmailSent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const emailSent = await fetchEmailSent(parseInt(id));
    console.log('error ',id, emailSent);
    return res.status(200).json({
      message: 'Successfully fetched emailSent data',
      data: emailSent
    })

  } catch (error) {
    console.log('error in getEmailSent', error);
    return res.status(500).json({
      message: 'Internal Server error'
    })
  }
}