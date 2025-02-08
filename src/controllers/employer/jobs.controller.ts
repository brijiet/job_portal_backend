import { Request, RequestHandler, Response, NextFunction } from 'express';
import { saveJobs, jobsList, getJobDetails, userBasedJobsList } from '../../services/employer/jobs.service';
import 'dotenv/config';
import { getEmailTemplate } from '../../services/emailTemplate.service';
import { processSaveEmailStagingTables } from '../../services/emailStaging.service';

export const fetchJobsList: RequestHandler = async (req: Request, res: Response) => {
  try {
    const query = req?.query;
    const result = await jobsList(query);
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

export const fetchUserBasedJobsList: RequestHandler = async (req: Request, res: Response) => {
  try {
    const query = req?.user?.id;
    const result = await userBasedJobsList(query);
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

export const postJobs: RequestHandler = async (req: Request, res: Response) => {
  try {
    const result = await saveJobs(req.body);

    if (req.body.id === null) {
      const emailTemplateData = await getEmailTemplate('RecommendedCandidates');
      if (emailTemplateData) {
        const emailStagingParams = {
          emailTo: req?.user?.email,
          subject: 'RecommendedCandidates Alerts for the job posted',
          templateId: emailTemplateData?.id,
          templateName: 'RecommendedCandidates',
          jobs: result?.id,
          applyJob: null,
          user: null,
          senderUserId: null,
          mailCompose: null,
          priority: 2
        }
        const emailStagingData = await processSaveEmailStagingTables(emailStagingParams);
      }
    }

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


export const fetchJobDetails: RequestHandler = async (req: Request, res: Response) => {
  try {

    const jobId = req.params.id;
    const result = await getJobDetails(parseInt(jobId));
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
