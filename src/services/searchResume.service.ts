import { Between, In } from 'typeorm';
import { AppDataSource } from '../config/typeorm';
import { JobSeekerProfile } from '../entities/jobSeekerProfile.entity';
import { ResumeSearch } from '../entities/resumeSearch.entity';

export const saveSearchResumeService = async (searchResumeParams: ResumeSearch) => {

  try {
    const searchResumeProfileRepository = AppDataSource.getRepository(ResumeSearch);
    searchResumeProfileRepository.save(searchResumeParams);

    return;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

export const searchResumeResultService = async (reqData: any) => {
  const selectedKeySkill = [] as any
  let searchResume = [] as any
  try {
    reqData?.resumeSearchFormData?.resumeSearchKeywords?.filter((item: any) => selectedKeySkill?.push(Number(item?.resumeSearchKeywords?.id)));
    let parameterSkill = {}
    if (selectedKeySkill.length > 0) {
      parameterSkill = { keySkills: { profileKeySkills: { id: In([...selectedKeySkill]) } } }
    }
    let parameterExperience = {}
    if (reqData?.resumeSearchFormData?.minExperience && reqData?.resumeSearchFormData?.maxExperience) {
      parameterExperience = { totalExpYear: { value: reqData?.resumeSearchFormData?.minExperience && reqData?.resumeSearchFormData?.maxExperience && Between(Number(reqData?.resumeSearchFormData?.minExperience), Number(reqData?.resumeSearchFormData?.maxExperience)) } }
    }

    let parameterSalary = {}
    if (reqData?.resumeSearchFormData?.minSalary && reqData?.resumeSearchFormData?.maxSalary) {
      parameterSalary = { currentSalary: reqData?.resumeSearchFormData?.minSalary && reqData?.resumeSearchFormData?.maxSalary && Between(Number(reqData?.resumeSearchFormData?.minSalary) * 100000, Number(reqData?.resumeSearchFormData?.maxSalary) * 100000) }
    }
    const searchResumeRepository = AppDataSource.getRepository(JobSeekerProfile);
    searchResume = await searchResumeRepository.find({
      where: {
        ...parameterSkill,
        ...parameterExperience,
        ...parameterSalary,
      },
      relations: {
        currentLocation: true,
        totalExpMonth: true,
        totalExpYear: true,
        noticePeriod: true,
        keySkills: { profileKeySkills: true },
        currentCompany: true,
        currentJobTitle: true,
        user: true,
        personalDetails: {
          language: true
        },
        educations: true,
        careerProfile: {
          industry: true,
          department: true,
          roleCategory: true,
          jobRole: true,
          careerProfileJobType: { jobType: true },
          careerProfileEmployeeType: { employeeType: true },
          jobSeekerProfile: true,
          careerProfilePreferredShift: { preferredShift: true },
          currency: true
        },
        employments: {
          jobSeekerProfileEmploymentSkills: {
            keySkills: true
          },
          totalExpMonths: true,
          totalExpYears: true,
          noticePeriod: true,
          joiningDateYear: true,
          joiningDateMonth: true,
          currencyType: true,
          department: true,
        }
      }
    });
    return searchResume;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const getSaveResumeService = async () => {
  try {
    const resumeSearchRepository = AppDataSource.getRepository(ResumeSearch)
    const resultSearchResume = await resumeSearchRepository.find({
      relations: {
        resumeSearchKeywords: { resumeKeySkills: { keySkills: true } },
      },
    })
    return resultSearchResume;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const getSingleSaveResumeService = async (reqId: number) => {
  try {
    const resumeSearchRepository = AppDataSource.getRepository(ResumeSearch)
    const resultSearchResume = await resumeSearchRepository.find({
      where: { id: reqId },
      relations: {
        resumeSearchKeywords: { resumeKeySkills: { keySkills: true } },
      },
    })
    return resultSearchResume;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
