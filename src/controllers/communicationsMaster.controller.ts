
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { applyDateForMessaging, jobSeekerToRecruiterCommunication, saveCommunicationMessage, updateIsReadStatus } from '../services/communicationsMaster.service';
import multer from 'multer';
import { fileFilterMessageAttachment, storageMessageAttachment } from '../config/multer';
import { promisify } from 'util';

export const jobSeekerToRecruiterCommunicationController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await jobSeekerToRecruiterCommunication(req.params['userId'], req.params['userType']);
    return res.status(201).json({
      message: 'JobSeeker to recruiter list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}

export const applyDateForMessagingController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await applyDateForMessaging(Number(req.params['jobSeekerProfileId']), Number(req.params['jobId']));
    return res.status(201).json({
      message: 'apply jobs list getting successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}

export const updateIsReadStatusController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await updateIsReadStatus(req.params['communicationsId'], req.params['receiverId']);
    return res.status(201).json({
      message: 'Read status changed successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}

export const communicationMessageController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {

    if (process.env.FILE_LIMIT === undefined) {
      throw new Error('file limit cannot be undefined')
    }

    const upload = promisify(multer({
      storage: storageMessageAttachment,
      fileFilter: fileFilterMessageAttachment,
      limits: { fileSize: parseInt(process.env.FILE_LIMIT) }
    }).single('file'));

    await upload(req, res);

    let messageParams = req.body;
    if (req.file) {
      messageParams.messagesAttachment = [{ attachment: req.file.filename }]
    };
    const result = await saveCommunicationMessage(messageParams);
    return res.status(201).json({
      message: 'Message inserted successfully',
      data: result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  };
}