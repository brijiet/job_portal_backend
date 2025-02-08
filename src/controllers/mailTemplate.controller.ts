import { Request, RequestHandler, Response } from 'express';
import 'dotenv/config';
import { getOneMailTemplate, saveMailTemplate, deleteoneMailTemplate,getOneMailTemplateDetails,updateExistMailTemplate} from '../services/mailTemplate.service';

export const postMailTemplate: RequestHandler = async (req: Request, res: Response) => {
  try {
    const result = await saveMailTemplate(req.body);
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

export const fetchOneMailTemplate: RequestHandler = async (req: Request, res: Response) => {
  try {

    const userId = req.params.userId;
    const result = await getOneMailTemplate(parseInt(userId));
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

export const deleteMailTemplate: RequestHandler = async (req: Request, res: Response) => {
    try {
      const result = await deleteoneMailTemplate(req.body);
      return res.status(200).json({
        data: result
      });
  
    } catch (error) {
      return res.status(500).json({
        message: 'Internal server error'
      })
    }
  }

  export const getMailTemplateDetails : RequestHandler = async (req: Request, res: Response) => {
    try {
      const templateId = req?.query?.templateId;
      if(templateId !== undefined){
        const result = await getOneMailTemplateDetails(templateId);
        return res.status(200).json({
          data: result
        });
      }
  
    } catch (error) {
      console.log('error', error);
      return res.status(500).json({
        message: 'Internal server error'
      })
    }
  }

  export const updateMailTemplate: RequestHandler = async (req: Request, res: Response) => {
    try {
      const id = req.body.id;
      const result = await updateExistMailTemplate(id,req.body);
      return res.status(200).json({
        data: result
      });
    }
    catch (error) {}
      return res.status(500).json({
        message: 'Internal server error'
      })
  }