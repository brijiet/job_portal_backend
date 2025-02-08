import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { TotalExpYear } from '../totalExpYear.entity'

export default class TotalExpYearSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(TotalExpYear);
    await repository.upsert([
      {
        title: '0 Year',
        value: 0,
        status: true,
      },
      {
        title: '1 Year',
        value: 1,
        status: true,
      },
      {
        title: '2 Years',
        value: 2,
        status: true,
      },
      {
        title: '3 Years',
        value: 3,
        status: true,
      },
      {
        title: '4 Years',
        value: 4,
        status: true,
      },
      {
        title: '5 Years',
        value: 5,
        status: true,
      },
      {
        title: '6 Years',
        value: 6,
        status: true,
      },
      {
        title: '7 Years',
        value: 7,
        status: true,
      },
      {
        title: '8 Years',
        value: 8,
        status: true,
      },
      {
        title: '9 Years',
        value: 9,
        status: true,
      },
      {
        title: '10 Years',
        value: 10,
        status: true,
      },
      {
        title: '11 Years',
        value: 11,
        status: true,
      },
      {
        title: '12 Years',
        value: 12,
        status: true,
      },
      {
        title: '13 Years',
        value: 13,
        status: true,
      },
      {
        title: '14 Years',
        value: 14,
        status: true,
      },
      {
        title: '15 Years',
        value: 15,
        status: true,
      },
      {
        title: '16 Years',
        value: 16,
        status: true,
      },
      {
        title: '17 Years',
        value: 17,
        status: true,
      },
      {
        title: '18 Years',
        value: 18,
        status: true,
      },
      {
        title: '19 Years',
        value: 19,
        status: true,
      },
      {
        title: '20 Years',
        value: 20,
        status: true,
      },
      {
        title: '21 Years',
        value: 21,
        status: true,
      },
      {
        title: '22 Years',
        value: 22,
        status: true,
      },
      {
        title: '23 Years',
        value: 23,
        status: true,
      },
      {
        title: '24 Years',
        value: 24,
        status: true,
      },
      {
        title: '25 Years',
        value: 25,
        status: true,
      },
      {
        title: '26 Years',
        value: 26,
        status: true,
      },
      {
        title: '27 Years',
        value: 27,
        status: true,
      },
      {
        title: '28 Years',
        value: 28,
        status: true,
      }
      ,
      {
        title: '29 Years',
        value: 29,
        status: true,
      }
      ,
      {
        title: '30 Years',
        value: 30,
        status: true,
      },
      {
        title: '31 Years',
        value: 31,
        status: true,
      },
      {
        title: '31+ Years',
        value: 32,
        status: true,
      }
    ],
      ["id"]);

  }
}