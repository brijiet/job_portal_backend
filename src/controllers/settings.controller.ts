
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { blockApplicant, deleteBlockCompanies, emailNotification, getBlockCompanies, getEmailNotification, saveBlockCompanies, updateEmailAndMobileNotification } from '../services/settings.service';

export const saveBlockCompaniesController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await saveBlockCompanies(req.body);
    return res.status(201).json({
      message: 'Blocked companies saved successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}

export const getBlockCompaniesController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await getBlockCompanies(Number(req.params['userId']));
    return res.status(201).json({
      message: 'Blocked companies saved successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}

export const blockApplicantController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await blockApplicant(Number(req.params['companyId']));
    return res.status(201).json({
      message: 'Get block applicant list successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}

export const emailNotificationController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await emailNotification(req.body);
    return res.status(201).json({
      message: 'Email notification updated successfully',
      data: result
    });
  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}

export const updateEmailAndMobileNotificationController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const notificationPrivacy = req.user.id
    const result = await updateEmailAndMobileNotification(notificationPrivacy, req.body);
    return res.status(201).json({
      message: 'Email and mobile notification updated successfully',
      data: result
    });
  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}

export const getEmailNotificationController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await getEmailNotification(Number(req.params["userId"]));
    return res.status(201).json({
      message: 'Email notification fetch successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}

export const deleteBlockCompaniesController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await deleteBlockCompanies(Number(req.params['companyId']));
    return res.status(201).json({
      message: 'Blocked companies deleted successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}