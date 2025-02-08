import { AppDataSource } from '../config/typeorm'
import { User } from '../entities/user.entity';
import { generateToken } from '../utils/generateToken';
import bcrypt from 'bcrypt';
import { sendResetTokenEmail } from '../utils/sendEmail';
import moment from 'moment';
import { MoreThan } from 'typeorm';
import { getEmailTemplate } from './emailTemplate.service';
import { processSaveEmailStagingTables } from './emailStaging.service';

type UserParams = {
  email: string;
  mobileNumber: string;
  name: string;
  isEmailVerified: boolean;
  isMobileVerified: boolean;
}
export const saveUser = async (userParams: User) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.save(userParams);
    delete user.hashedPassword
    return user;

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const updateUser = async (email: string, userParams: any) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.update({ email }, userParams);
    return user;

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const fetchUser = async (email: string) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({
      where: {
        email
      },
      relations: {
        jobSeekerProfile: true,
        recruiterCommunications: {
          messages: true
        }
      }
    });
    return user;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const loginCheckUser = async (email: string) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.createQueryBuilder("user")
      .where("user.email = :email", { email: email })
      .getOne();
    return user;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const getUser = async (type: string) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.findBy({ userType: type })
    return users;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const sendResetToken = async ({ email }: any) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user: any = await userRepository.findOne({ where: { email } });
    if (user) {
      const resetToken = await generateToken(user);
      user.resetToken = await resetToken;
      user.resetTokenExpiry = moment().add(1, 'hour').toDate();;
      await userRepository.save(user);
      const emailTemplateData = await getEmailTemplate('ResetPassword');
      if (emailTemplateData) {
        const emailStagingParams = {
          emailTo: user?.email,
          senderUserId: null,
          subject: 'Reset Password Link',
          templateId: emailTemplateData?.id,
          templateName: 'ResetPassword',
          jobs: null,
          applyJob: null,
          user: user.id,
          mailCompose: null,
          priority: 1
        }
        const emailStagingData = await processSaveEmailStagingTables(emailStagingParams);
      }
      // Send reset token to the user's email
      // await sendResetTokenEmail(user);
      return ({
        success: true,
        message: 'Reset password link has been sent to your email. Please check the email.',
        email
      });
    } else {
      return ({
        success: false,
        message: 'Invalid Email.',
      });
    }
  } catch (error) {
    throw error;
  }
}

export const updateNewPassword = async (email: string, resetToken: string, password: string) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user: any = await userRepository.findOne({
      where: {
        email: email,
        resetToken: resetToken,
        resetTokenExpiry: MoreThan(new Date()),
      },
    });
    if (user && password) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds).then(function (hash) { return hash });
      user.hashedPassword = hashedPassword
      user.resetToken = null;
      user.resetTokenExpiry = null;
      await userRepository.save(user);
      return ({
        success: true,
        message: 'Password reset successful'
      });
    } else if (!user) {
      return ({
        success: false,
        message: 'Invalid or token expired'
      });
    } else {
      return ({
        resetTokenExpiry: true,
      });
    }
  } catch (error) {
    throw error;
  }
}

export const updateNewUserPassword = async (id: number, password: string) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user: any = await userRepository.findOne({
      where: {
        id: id,
      },
    });
    if (user && password) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds).then(function (hash) { return hash });
      user.hashedPassword = hashedPassword
      user.resetToken = null;
      user.resetTokenExpiry = null;
      await userRepository.save(user);
      return ({
        success: true,
        message: 'Password reset successful'
      });
    } else if (!user) {
      return ({
        success: false,
        message: 'Invalid or token expired'
      });
    } else {
      return ({
        resetTokenExpiry: true,
      });
    }
  } catch (error) {
    throw error;
  }
}

export const updateEmailAddress = async (id: number, emailParams: any) => {
  try {

    const userRepository = AppDataSource.getRepository(User);
    const userUnique = await userRepository.createQueryBuilder("user")
      .where("user.email = :email", { email: emailParams.email })
      .andWhere("user.id <>:id", { id: id })
      .getOne();
    if (!userUnique) {
      const user = await userRepository.update({ id }, emailParams);
      return user;
    } else {
      return {
        message: "User already exists",
        count: 1
      }
    }

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const updateMobileNumber = async (id: number, mobileNumberParams: any) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.update({ id }, mobileNumberParams);
    return user;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}