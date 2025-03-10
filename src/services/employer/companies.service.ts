import { In } from 'typeorm';
import { AppDataSource } from '../../config/typeorm'
import { Companies } from '../../entities/companies.entity';

export const saveCompanies = async (companiesParams: Companies) => {
  try {
    let companies: any;
    const companiesRepository = AppDataSource.getRepository(Companies);
    if (companiesParams?.id) {
      companies = await companiesRepository.findOne({
        where: {
          id: companiesParams?.id
        },
        relations: {
          location: true,
          department: true,
          companyType: true,
          industry: true,
          jobs: true
        }
      });

      companies.id = Number(companiesParams?.id);
      companies.title = companiesParams?.title,
        companies.companyDescription = companiesParams?.companyDescription,
        // companies.payScaleLowerRange = companiesParams?.payScaleLowerRange,
        companies.jobs = companiesParams?.jobs,
        // companies.userType = companiesParams?.userType,
        companies.companyType = companiesParams?.companyType,
        // companies.totalExpYearStart = companiesParams?.totalExpYearStart,
        // companies.totalExpYearEnd = companiesParams?.totalExpYearEnd,
        // companies.numberSystem = companiesParams?.numberSystem,
        // companies.recurrence = companiesParams?.recurrence,
        companies.location = companiesParams?.location,
        // companies.jobsRole = companiesParams?.jobsRole,
        companies.industry = companiesParams?.industry,
        companies.department = companiesParams?.department,
        // companies.employeeType = companiesParams?.employeeType,
        // companies.jobType = companiesParams?.jobType,
        // companies.roleCategory = companiesParams?.roleCategory,
        // companies.education = companiesParams?.education,
        // companies.education = companiesParams?.education,
        //companies.user = companiesParams?.user
        // companiesParams?.jobsKeySkills?.forEach((child: any) => {
        //   if (child.id) {
        //     const updatedChild = jobsParams?.jobsKeySkills?.find((item) => Number(item?.jobsKeySkills) === Number(child?.jobsKeySkills));
        //     if (updatedChild) {
        //       child.jobsKeySkills.jobsKeySkills = updatedChild?.jobsKeySkills?.jobsKeySkills,
        //         child.jobsKeySkills.preferred = child?.jobsKeySkills?.preferred

        //     }
        //   }
        // });
        console.log("comapanies-->", companies);

      companies = await companiesRepository.save(companies);
    } else {
      companies = await companiesRepository.save(companiesParams)
    }
    return companies;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const allCompanies = async (data: any) => {
  const items_per_page = Number(process.env.JOB_PER_PAGE);
  const skip = (items_per_page * data?.page) - items_per_page;
  console.log("data--->", data);

  try {
    const companiesRepository = AppDataSource.getRepository(Companies);
    if (data?.page) {
      const companies = await companiesRepository.find({
        order: {
          id: "DESC",
        },
        where: {
          ...((data?.data?.department !== undefined && data?.data?.department?.length !== 0) && { department: { id: In(data?.data?.department) } }),
          ...((data?.data?.location !== undefined && data?.data?.location?.length !== 0) && { location: { id: In(data?.data?.location) } }),
          ...((data?.data?.companyType !== undefined && data?.data?.companyType?.length !== 0) && { companyType: { id: In(data?.data?.companyType) } }),
          ...((data?.data?.industry !== undefined && data?.data?.industry?.length !== 0) && { industry: { id: In(data?.data?.industry) } }),
          ...((data?.data?.company !== undefined && data?.data?.company?.length !== 0) && { id: In(data?.data?.company) }),
        },
        relations: {
          location: true,
          department: true,
          companyType: true,
          industry: true,
          jobs: true
        },
        skip: (skip),
        take: (items_per_page),
      });
      console.log("companiess-->", companies);

      return companies;
    } else {
      const companies = await companiesRepository.find({
        order: {
          id: "DESC",
        },
        where: {
          ...((data?.data?.department !== undefined && data?.data?.department?.length !== 0) && { department: { id: In(data?.data?.department) } }),
          ...((data?.data?.location !== undefined && data?.data?.location?.length !== 0) && { location: { id: In(data?.data?.location) } }),
          ...((data?.data?.companyType !== undefined && data?.data?.companyType?.length !== 0) && { companyType: { id: In(data?.data?.companyType) } }),
          ...((data?.data?.industry !== undefined && data?.data?.industry?.length !== 0) && { industry: { id: In(data?.data?.industry) } }),
          ...((data?.data?.company !== undefined && data?.data?.company?.length !== 0) && { id: In(data?.data?.company) }),
        },
        relations: {
          location: true,
          department: true,
          companyType: true,
          industry: true,
          jobs: true
        },
      });
      console.log("companiess-->", companies);
      return companies;
    }
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
export const topCompaniesServices = async (data: any) => {
  const items_per_pagefilter = Number(process.env.JoB_PER_PAGE);
  const skip = (items_per_pagefilter * data?.page) - items_per_pagefilter;
  try {
    const companiesRepository = AppDataSource.getRepository(Companies);
    const companies = (await companiesRepository.find({
      relations: ['jobs']
    })).map(company => ({
      ...company,
      jobCount: company.jobs?.length
    })).sort((a: any, b: any) => b.jobCount - a.jobCount)
    return companies;
  } catch (error) {

  }
}

export const getCompanyDetails = async (id: number) => {

  try {
    const companiesRepository = AppDataSource.getRepository(Companies);
    const company = await companiesRepository.findOne({
      where: { id },
      relations: {
        // //company: true,
        // totalExpYearStart: true,
        // totalExpYearEnd: true,
        // numberSystem: true,
        // recurrence: true,
        location: true,
        // jobsRole: true,
        industry: true,
        department: true,
        jobs: true,
        // employeeType: true,
        // jobType: true,
        // roleCategory: true,
        // education: true,
        //user: true,
        //jobsKeySkills: { keySkills: true }
      },
    });

    return company;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const employerCompanyList = async (data: any) => {
  try {
    const companiesRepository = AppDataSource.getRepository(Companies);
    let company = await companiesRepository.find({
      order: {
        jobs: { id: "DESC" },
      },
      where: { user: { id: data?.data?.user?.id } },
      relations: {
        user: true,
        location: true,
        jobs: {
          jobStatus: true,
          jobExpiry: true,
          totalExpYearStart: true,
          totalExpYearEnd: true,
          payScaleLowerRange: true,
          payScaleUpperRange: true,
          currency: true,
          numberSystem: true,
          jobsLocation: {
            location: true
          },
          workMode: true,
          employmentType: true,
          jobsRole: true,
          department: true,
          jobsKeySkills: {
            keySkills: true
          }
        },
      }
    });
    return company;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}


export const updateCompanyDetails = async (id: number, Company: any) => {
  try {
    const companiesRepository = AppDataSource.getRepository(Companies);
    await companiesRepository.update(id, {
      ...({ companyImage: Company?.companyImage !== null ? Company.companyImage : null as any }),
      ...({ companyDescription: Company?.companyDescription !== null ? Company.companyDescription : null as any }),
    });
    const companyDetails = await companiesRepository.findOneBy({ id });
    console.log("companyDetails", companyDetails)
    return companyDetails;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}