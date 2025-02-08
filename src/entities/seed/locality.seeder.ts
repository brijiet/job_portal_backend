import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Locality } from '../locality.entity';

export default class LocalitySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(Locality);
    await repository.upsert([
      {
        title: 'Aram Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Amboli',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Chakala',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'D.N. Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Four Bungalows',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'JB Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kajuwadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Lokhandwala',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Marol',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Mogra Village',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Model Town',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Poonam Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Saki Naka',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Seven Bungalows',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Versova',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Bandra Kurla Complex',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Bandstand Promenade',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Gandhi Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'M I G Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kherwadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Bharat Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Lands End',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Pali Hill',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Old Town',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Bandra Reclamation',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Chapel Avenue',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'KC Marg',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Carter Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kala Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Naupada',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Nirmal Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'WEH Western Express Highway',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Valmiki Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Sadguru Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Bharam Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Subhash Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Sanjay Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Sant Dnyaneshwar Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Bairam Naupada',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Patkar Blocks',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Vaidya Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Santosh Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Saint Martin Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Saint Andrew Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Bandra Fort',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Saint Paul Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Guru Nanak Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Mount Mary Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Saint Josephs Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Rizvi Complex',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Ranwar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'DMonte Park Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Perry Cross Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Tata Blocks',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Indiraji Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Somnath lane',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Bandra Terminus',
        location: 'Mumbai',
        status: true,
      },
      {
        title: '28th Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: '1st Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: '9th Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Saint Cyril Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'SG Joshi Marg',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'B Block BKC',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'National Library Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Bandra Worli Sea Link',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Manuel Gonsalves Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Pandurang Ashram Marg',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Chimbai Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Hill Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Pereira Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'BJ Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'DR. Ambedkar Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'St. Sebastian Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Mount Carmel Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Vastu',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Galaxy Apartment',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Pali Mala Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'I.C. Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'L.I.C. Colony aka Jeevan Bhima Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Eksar Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Shimpoli',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Gorai',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kora Kendra',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Vazira Naka',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Babhai',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Chikuwadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Yogi Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Devipada',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Magathane',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Nancy Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Sukurwadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'NL Complex',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Mandapeshwar Caves',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Northern heights',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Shakti Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Anand Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Ketkipada',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Anand Park',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Krishna Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Rawalpada',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Ashok Van',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Balaji Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Ekta Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Maratha Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Konkani pada',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'CS Complex',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Avdhut Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Narendra Complex',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Shanti Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Yadav Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Gavde Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Ganpat Patil Marg',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Navagaon',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Mhatre Wadi Tadwe Wadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Best Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Jawahar Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Aarey Milk Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Motilal Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Bangur Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Gokuldham',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Jayprakash Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Pandhurang Wadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'NESCO Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Oshiwara',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Amrut Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kevni Pada',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Behram Baug',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Malcolm Bau',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Patliputra Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Vahatuk Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Oshiwara',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Vaishali Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Sainik Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Patilwadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Dnyaneshwar Marg',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Shastri Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Azad Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Khan Estate',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Pratiksha Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'BR Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Momin Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Prabhat Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kadam Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Ambivali',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Mahatma Jyotiba Phule Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Patel Estate',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Prathmesh Complex',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Somani Gram',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Gautam Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Adarsh Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Balasaheb Thackeray Flyover',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'JVLR',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Gupha Tekdi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Poonam Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Squatters Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Samarth Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Shyam Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Seetawadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Janata Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kranti Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Rup Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Majas Wadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Morga Pada',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Natwar Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Samarth Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Namesingh Chawl',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Oberoi Splendor',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Anand Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Shankar Wadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Pratap Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Sunder Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Jijamata Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Dahanukar Wadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Charkop',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Poisar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Hindustan Naka',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Mahavir Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Samta Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Damu Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Thakur complex',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Thakur village',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Lokhandwala township',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Akurli road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Janupada',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Hanuman Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kranti Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Laxmi Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Dattani',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Jivali Pada',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Pali Naka',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Khar Danda',
        location: 'Mumbai',
        status: true,
      },
      {
        title: '21th Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: '18th Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: '16th Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: '14th Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Ambedkar Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Dindoshi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Sunder Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Pathanwadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Rani Sati Marg',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Malvani',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Ambujwadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Evershine Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Liliya Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Jankalyan Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kalina',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Vakola',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Prabhat colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Anand Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Agripada',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'New Agripada',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Chaitanya Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Davri Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Shivaji Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Vakola Pipeline',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Yashwant Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Juhu Koliwada',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Pothohar Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Gazdhar Bandh',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Irla',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Nehru Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Sahar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Shivaji Talav',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Hanuman Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Pratap Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Maharashtra Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Jamil Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kokan Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'jamin Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Utkarsh Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Samarth Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Tulshet Pada',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Sonapur',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Sahyadri Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Sarvoday Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Baiganwadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Deonar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Shivaji Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Gautam Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Lallubhai Compound',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Amrut Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Asalfa',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Garodia Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Jagdusha Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Pant Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Nehru Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kasaiwada',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Quresh Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Tashilanagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Umerwadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Ali dada estate',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Takiya wad',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Machi market',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kapadia nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Khadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Court',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Taximen colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Halav pool',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Makad wali chawal',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'MIG',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'LIG',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Bachan tabela',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Pipe road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Mubarak complex',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Vinobha bhave',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kohinoor City',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Christian Gaon',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Jagruti Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: '9 number',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Rajiv Gandhi Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Lal Taki',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Charbi Gali',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kamela',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Taxi Stand',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Diamond',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Galaxy',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Bail Bazar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kaju Pada',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Bombay Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Paach Rasta',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Xavier Street',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Mulund Runwals',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Chandivali',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Hiranandani Gardens',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Indian Institute of Technology Bombay campus',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'BSNL Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Passpoli',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Mhada Colony 19',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Morarji Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Rajawadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Pipeline Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kirol',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Khalai',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Gandhi Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Surya Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kannamwar Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Tagore Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Park Site',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Godrej Station Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Godrej Hillside Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Godrej Creek',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Chembur Causeway',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Union Park (Chembur)|Union Park',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Aloysius Soares Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Central Avenue',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'St Anthonys Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'St Gregorious Path',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Golf Club Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'St Sebastians Marouli village',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Pestom sagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Basant Park',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Diamond Garden',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Chedda Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Indian Oil Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'St Francis of Assisi Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Swastik Park',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Maitri Park',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Atur Park',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Sindhi Society',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Punjabwadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Chembur Camp',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Ghatla village',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Borla village',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Deonar Farm Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Subhash Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Sion Trombay Road | VN Purao Marg',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Wadavali village',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Maravali',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Julianwadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'P L Lokhande Marg',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Thakkar Bappa Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Suman Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Postal Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Shell Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Sahakar Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Tilak Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'New Tilak Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Mahul',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Vashinaka',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Mahul Village',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Panjarpol',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Siddharth Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Ramakrishna Chemburkar Marg',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Bhakti Park',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'RCF',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Mysore Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Collector Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Anushakti Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Vishnu Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'HP nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'BPCL',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Deonar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Mandala',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Sangam Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'BPT Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Sahakar Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Trombay Koliwada',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Cheetah Camp',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Agripada',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Chinchpokli',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Chor Bazaar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Churchgate',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Cuffe Parade',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Dava Bazaar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Grant Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kemps Corner',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Lower Parel',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Mahalaxmi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Mahim',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Masjid Bunder',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Marine Drive, Mumbai',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Marine Lines',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Mumbai Central',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Nagpada',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Nariman Point',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Prabhadevi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Worli',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'C.G.S. colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Zaveri Baazar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Bhendi Bazaar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Dagdi Chawl',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Ghodapdeo',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Navy Nagar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Breach Candy',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Hindu colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Shivaji Park Residential Zone',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Parsi Colony',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Naigaon',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Ballard Estate',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Dhobitalao',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kala Ghoda',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Charni Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Khotachiwadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Abdul Rehman Street',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Agiary Lane',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Anant Wadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Arthur Road Junction',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Badam Wadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Balaji Mandir',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Bhuleshwar Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Cavel',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Cavel Cross Lane',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Champa Wadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Chandanwadi Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Chira Bazaar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Clive Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Cotton Exchange',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Dadasaheb Parulekar Marg',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Dadiseth Agiary Lane',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Dhanji Street',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Dhirubhai Parekh Marg',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Dr. Atmaram Merchant Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Dr. M.B. Velkar Street',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Dr. Viegas Street',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Fanas Wadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Fofal Wadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Gaiwadi Lane',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Gaushala',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Gulal Wadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Haines Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Hollvard Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Jagannath Shankarseth (JSS) Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kalbadevi Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kavi Nirav Lane',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kazi Syed Street',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Khodad Circle',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kika Street',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Kolbhat Lane',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Lohar Chawl',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'M.J. Market',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Malharrao Wadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Mangaladevi Marg',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Mirza Street',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Nagdevi Cross Street',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Narayan Dhuru Street',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Old Satta Gully',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Panjrapole Lane',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Pophalwadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Premkumar Sharma Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Ram Wadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Shaikh Memon Street',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Shrikant Palekar Marg',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Sitaram Poddar Marg',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Swadeshi Market',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Tambakata',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Tatya Gharpure Marg',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Thakurdwar Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Vithal Wadi',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Vithoba Lane',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Walkeshwar',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Cotton Green',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Lalbaug',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Chunabhatti',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Carmichael Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Gowalia Tank ',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Altamount Road',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Nana Chowk',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Dongri',
        location: 'Mumbai',
        status: true,
      },
      {
        title: 'Adarsh Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Ashok Vihar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Bawana',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Begum Pur',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Haqiqat Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Karala',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Keshav Puram',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Narela',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Pitam Pura',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Rohini',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Rani Bagh, Delhi',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Shalimar Bagh',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Shastri Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Azadpur',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Civil Lines',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Derawal Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Gulabi Bagh',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Kamla Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Kashmiri Gate',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Daryaganj',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Model Town',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Narela',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Sadar Bazaar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Sarai Rohilla',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Shakti Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Tis Hazari',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Timarpur',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Wazirabad',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'GTB Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Urdu Bazaar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Mukherjee Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Majnu-ka-tilla',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Babarpur',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Bhajanpura',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Dayal Pur',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Dilshad Garden',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Karawal Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Naveen Shahdara',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Nand Nagri',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Shahdara',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Shastri Park',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Seelampur',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Yamuna Vihar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Ashok Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Chandni Chowk',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Civil Lines',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Daryaganj',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Dariba Kalan',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Karol Bagh',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Old Delhi',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Shastri Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'South Patel Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Sadar Bazaar, Delhi',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Paharganj',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Rajender Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Barakhamba Road',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Chanakyapuri',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Connaught Place',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Gole Market',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Golf Links, New Delhi',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'INA Colony',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Inder Puri',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Jaffrabad, Delhi',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Laxmibai Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Lodhi Colony',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Lutyens Delhi',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Mahipalpur',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'New Delhi',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Pragati Maidan',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Raisina Hill',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Rajendra Place',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'East Vinod Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Krishna Nagar, Delhi',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Laxmi Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Mayur Vihar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Pandav Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Preet Vihar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Anand Vihar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Shreshtha Vihar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Vivek Vihar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Vasundhara Enclave',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Geetanjali Enclave',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Green Park',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Gulmohar Park',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Hauz Khas',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Khanpur',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Kailash Colony',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Malviya Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Maharani Bagh',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Moti Bagh',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'New Moti Bagh',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Mehrauli',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Munirka',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Netaji Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Pamposh Enclave',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Safdarjung Enclave',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Sainik Farm',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Saket',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Sarojini Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Sarvodaya Enclave',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Shaheen Bagh',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Siri Fort',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'South Extension',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Shahpur Jat',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Sriniwaspuri',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Ashram Chowk',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Lodhi Colony',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Khan Market',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Netaji Nagar, Delhi',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Nizamuddin East',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Nizamuddin West',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Sarai Kale Khan',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Jangpura',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Defence Colony',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Lajpat Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'New Friends Colony',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Nehru Place',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Chittaranjan Park',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Govindpuri',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Greater Kailash',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Okhla',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Sarita Vihar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Sarai Kale Khan',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Tughlaqabad',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Harkesh colony',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Jaitpur',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Meethapur',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Molarband',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Badarpur',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Pul Pehladpur',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Ber Sarai',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Dabri, New Delhi',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Dashrath Puri',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Dwarka Sub City',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Delhi Cantonment',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Dhaula Kuan',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Ghitorni',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Inderpuri',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Janakpuri',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Mahipalpur',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Moti Bagh',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Munirka',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Najafgarh',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Naraina',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Palam',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Rama Krishna Puram',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Sagar Pur',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Sarojini Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Vasant Kunj',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Vasant Vihar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Kalkaji',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Ashok Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Bali Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Fateh Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Kirti Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Meera Bagh',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Mayapuri',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Moti Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Nangloi Jat',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Paschim Vihar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Patel Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Punjabi Bagh',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Rajouri Garden',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Shivaji Place',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Shadipur Depot',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Shiv Ram Park',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Tihar Village',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Tilak Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Tikri Kalan',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Vikas Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Vikaspuri',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'West Patel Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Uttam Nagar',
        location: 'Delhi',
        status: true,
      },
      {
        title: 'Jayanagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Indira Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Ashok Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Koramangala',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Whitefield',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Marathahalli',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'BTM Layout',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Vijaya Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'JP Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'HSR Layout',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Malleshwaram',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Bannerghatta Road',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Kaggadasapura',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Basavanagudi',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Banashankari',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Bellandur',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'T Dasarahalli',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Brookefield',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Yelahanka',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Sarjapur Road',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Sadashiva Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Kalyan Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'KR Puram',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Hebbal',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Bilekahalli',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Vidyaranyapura',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Hosur Road',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Ramamurthy Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Domlur',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Shivaji Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Arekere',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Sanjay Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Bagalakunte',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'New Thippasandra',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Banaswadi',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Vasanth Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'CV Raman Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Frazer Town',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Bommenahalli',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Sahakara Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Kumaraswamy Layout',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Ulsoor',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Yelahanka New Town',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Seshadripuram',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Sadduguntepalya',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Padmanabha Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Yeshwanthpur',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Wilson Garden',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Kengeri Satellite Town',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Mathikere',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Attiguppe',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Hongasandra',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Mahadevapura',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Doddanekkundi',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Murugesh Palya',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Ejipura',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Kammanahalli',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Nagarabhavi',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Raja Rajeshwari Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Hulimavu',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Gandhi Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Adugodi',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Kodihalli',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Bennigana Halli',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Gottigere',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Chamarajpet',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Jalahalli West',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Uttarahalli',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Nagavara',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Panduranga Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Sudhama Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Bidrahalli',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Sampangi Rama Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Jalahalli East',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Chickpet',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Ganga Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Hoodi',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'RT Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'HBR Layout',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Harlur',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Sunkadakatte',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Kadubeesanahalli',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Konanakunte',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Jayamahal',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Begur',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Jeevanbheema Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Nandini Layout',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'RMV 2nd Stage',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Shanthi Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Maruthi Sevanagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Ragavendra Nagar-Sunkadakatte',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Kempegowda Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Kanakapura Road',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Bannerghatta',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Kamala Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Richmond Town',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Chikkalasandra',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Kalena Agrahara',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Bidadi',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Kasavanahalli',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Kadugodi',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Varthur',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Hombegowda Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Dommasandra',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Jakkur',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Battarahalli',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Cox Town',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Hesaraghatta',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Annapurneshwari Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Basapura',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Singasandra',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Kalkere',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Hegde Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Abbigere',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'kaikondrahalli',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Chikbanavara',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Neelasandra',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Hosakerehalli',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Jnana Ganga Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Jaya Chamarajendra Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Kadugondanahalli',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Viveka Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Guttahalli',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Chansandra',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Victoria Layout',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Kaval Byrasandra',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Maruthi Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Cooke Town',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Devarachikkanahalli',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Azad Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Subramanyapura',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Benson Town',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Doddabommasandra',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Kengeri',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Basaveshwara Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Lingaraja Puram',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Richards Town',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Kothanur',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Kodigehalli',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Soundarya Layout',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Nagasandra',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Thanisandra',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Devinagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Bapuji Nagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Anjanapura',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Andrahalli',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Kattigenahalli',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Laggere',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'SMV Layout',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Sarjapur',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Rayasandra',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Chandapura',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Dasarahalli Hebbal',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Akshayanagar',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Hennur Road',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Nelamangala',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Choodasandra',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Horamavu',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Hennur',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Bommasandra',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Hoskote',
        location: 'Bangalore',
        status: true,
      },
      {
        title: 'Ameerpet',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Begumpet',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'SR Nagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Prakash Nagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Punjagutta',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Balkampet',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Sanathnagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Bharat Nagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Erragadda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Borabanda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Moti Nagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Nehru Nagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Khairtabad',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Somajiguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Raj Bhavan Road',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Lakdikapool',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Saifabad',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'A.C. Guards',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Masab Tank',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Chintal Basti',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Musheerabad',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Chikkadpally',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Himayatnagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Ashok Nagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Domalguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Hyderguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Ramnagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Azamabad',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Adikmet',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Nallakunta',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Shanker Mutt',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'RTC X Roads',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Gandhi Nagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Bagh Lingampally',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Vidyanagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Nayaranguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Amberpet',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Tilaknagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Golnaka',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Barkatpura',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Shivam Road',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Jamia Osmania',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Kachiguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Badichowdi',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Nampally',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Abids',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Aghapura',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Koti',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Bank Street',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Boggulkunta',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Secunderabad',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Chilkalguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Kavadiguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'MG Road (James Street)',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Madannapet',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Minister Road',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Mylargadda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Namalagundu',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Padmarao Nagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Pan bazar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Parsigutta',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Patny',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Rani Gunj',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'RP Road',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Sindhi Colony',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Sitaphalmandi',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Tarnaka',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Warsiguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Addagutta',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Tukaramgate',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Secunderabad Cantonment',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Bowenpally',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Karkhana',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Marredpally',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Sikh Village',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Trimulgherry',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Vikrampuri',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Gachibowli',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Nanakramguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'HITEC City',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Madhapur',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Kondapur',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Kothaguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Jubilee Hills',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Banjara Hills',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Film Nagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Yousufguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Srinagar colony',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Serilingampally',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Chanda Nagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Allwyn Colony',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Hafeezpet',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Madinaguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Miyapur',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Kukatpally',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Allwyn Colony',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Bachupally',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'KPHB',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Nizampet',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Pragathi Nagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Moosapet',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Mallampet',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Patancheru',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'BHEL Township',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'RC Puram',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Ameenpur',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Beeramguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Kistareddypet',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'IDA Bollaram',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Medical Devices Park',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Afzal Gunj',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Aliabad',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Alijah Kotla',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Asif Nagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Azampura',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Barkas',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Bazarghat',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Begum Bazaar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Chaderghat',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Chanchalguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Chandrayan Gutta',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Chatta Bazaar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Dabirpura',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Dar-ul-Shifa',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Dhoolpet',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Edi Bazar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Falaknuma',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Karwan',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Malakpet',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Moghalpura',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Jahanuma',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Laad Bazaar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Lal Darwaza',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Madina',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Maharajgunj',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Mehboob ki Mehendi',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Mir Alam Tank',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Mozamjahi Market',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Nawab Saheb Kunta',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Nayapul',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Noorkhan Bazar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Pisal Banda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Purana pul',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Putlibowli',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Rein Bazar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Shahran Market',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Shah Ali Banda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Sultan Bazar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Udden Gadda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Uppuguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Yakutpura',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Balanagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Fateh Nagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Ferozguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Old Bowenpally',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Hasmathpet',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Quthbullapur',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Jeedimetla',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Jagadgirigutta',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Suraram',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Pet Basheerabad',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Kompally',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Medchal',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Kandlakoya',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Alwal',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Lothkunta',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Old Alwal',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Macha Bollaram',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Venkatapuram',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Shamirpet',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Malkajgiri',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Anandbagh',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Ammuguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Gautham Nagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Kakatiya Nagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Vinayak Nagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Moula-Ali',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Neredmet',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Old Neredmet',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Safilguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Sainikpuri',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Yapral',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Kapra',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'A. S. Rao Nagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'ECIL X Roads',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Kamala Nagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Kushaiguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Cherlapally',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Keesara',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Nagaram',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Dammaiguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Jawaharnagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Rampally',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Cheriyal',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Uppal',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Habsiguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Ramanthapur',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Boduppal',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Nagole',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Nacharam',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Mallapur',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Ghatkesar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Peerzadiguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Chengicherla',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Pocharam',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Narapally',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Medipally',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Dilsukhnagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Kothapet',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Gaddiannaram',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Moosarambagh',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'L. B. Nagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Bairamalguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Chintalakunta',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Vanasthalipuram',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Hastinapuram',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Saroornagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Badangpet',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Balapur',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Champapet',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Jillelguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Karmanghat',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Lingojiguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Meerpet',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Sanghi Nagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Santoshnagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Hayathnagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Ibrahim patnam',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Mehdipatnam',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Toli chowki',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Gudimalkapur',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Asif Nagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Langar Houz',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Laxminagar Colony',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Mallepally',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Padmanabha Nagar Colony',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Red Hills',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Rajendranagar',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Attapur',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Bandlaguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Gandipet',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Kismatpur',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Narsingi',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Puppalguda',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Shamshabad',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Rajiv Gandhi International Airport',
        location: 'Hyderabad',
        status: true,
      },
      {
        title: 'Umdanagar',
        location: 'Bangalore',
        status: true,
      }, {
        title: 'Abasana B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Adroda B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Adval B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ahmedabad G.P.O.',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ambalia B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ambaliara B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ambareli B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ambawadi S.O (Ahmedabad)',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ambli B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ambli B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Amraiwadi S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Anandnagar S.O (Ahmedabad)',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Andej B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Aniali ( K ) B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Aniali Bhimji B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Arnej B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Asalgam B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Asarwa Chakla S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Asarwa Ext South S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ashoknagar B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ashram Road S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Aslali S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Azad Society S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Badanpur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Badarkha B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bagad B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bagodara B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bajarda B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bakrana B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bakrol B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bakrol B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Baldana B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Balsasan B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bamroli B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bamsara B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bapunagar S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bareja S.O (Ahmedabad)',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Barwala Ghelasha S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bavaliary B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bavla Market Yard S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bavla S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Behrampura S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bela B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bhadaj B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bhadana B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bhadiad S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bhairavnath Road S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bhangadh B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bhankoda B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bhat B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bhavda B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bhayla B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bhojwa B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bholad B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bhoyani B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bhurkhi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bhuvaldi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bilasia B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bodakdev S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bodia B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bol B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bopal S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Bordibazar Viramgam S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Buranpur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Calico Mills S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Cantonment S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Chaloda S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Chandarva B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Chandial B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Chandisar B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Chandkheda B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Chandkheda Society Area S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Chandlodia S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Chandranagar B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Changodar S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Charanki B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Charel B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Chaulaj B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Chekhla B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Chhabasar B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Chhaniar B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Chharodi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Chhasiana B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Chiada B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Chokdi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Chuval Dangarva B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Civil Hospital S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ctm Char Rasta S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'D Cabin S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Dabhsar B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Dadhana B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Daduka B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Dadusar B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Dalod B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Daran B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Dariapur S.O (Ahmedabad)',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Daslana B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Daxini Society S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Dehgamda B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Dekawada B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Delhi Gate S.O (Ahmedabad)',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Deo Dholera B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Detroj S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Devaliya B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Devpura B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Devtimoti B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Dhakdi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Dhamatvan B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Dhanala B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Dhandhuka S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Dhanwada B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Dharpipla B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Dhedasana B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Dhingada B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Dholera S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Dholi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Dholka H.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Digvijaynagar S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'District Court S.O (Ahmedabad)',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Dodar B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Dudheshwar Tavdipura S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Dumana B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Durgi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ellisbridge S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Endla B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Fangadi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Fatepur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Fatewadi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Fedra S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Galsana B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Gamanpura B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Gamdi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Gamph B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Gandhi Ashram S.O (Ahmedabad)',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Gandhi Road S.O (Ahmedabad)',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Gangad B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ganol B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Garodia B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Gatrad B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Geratpur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ghatisana B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ghatlodia S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Gheekanta Road S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ghoda B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ghodasar S.O (Ahmedabad)',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ghuma B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Girdharnagar S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Girmatha B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Gita Mandir Road S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Godhavata B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Godhavi S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Gogla B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Gomtipur S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Goraiya B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Goraj B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Gorasu B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Gota B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Gujarat University S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Gunda B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Gundi Sarvodaya Ashram B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Gunjala B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Gunjar B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Gyaspur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Hansalpur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Harniav B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Hathijan B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Hebatpur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Hirapur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Hirapura B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'I E Bapunagar S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'I I M S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Iawa (Vasna) B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ingoli B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Isanpur S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Jagatpur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Jakhada B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Jakwada B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Jalalpur Vajifa B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Jalampur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Jalila S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Jalisana B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Jaliya B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Jamalpur S.O (Ahmedabad)',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Jamp B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Jantanagar S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Jawahar Chowk S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Jawaraj B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Jeska B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Jetalpur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Jholapur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Jivraj Park S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Jodhpur Char Rasta S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Joshipura B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Juhapura S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Junapadhar B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Juval B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Juval Rupavati B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kabir Chowk S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kadipur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kadvasan B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kalana B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kali B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kalupur Chakla S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kalyangadh B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kamiala B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kamijala B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kanbha B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kaneti B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kaniyel B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kankravadi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kanz B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Karakthal B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kasindra B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kasindra B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kathwada B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kathwada Maize Product S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Katosan Road S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kauka S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kavitha B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kelia Vasna B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kerala B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Keria B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kesardi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Khadia S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Khadol B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Khambhada B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Khamidana B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Khandachora Dhandhuka S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Khanpur S.O (Ahmedabad)',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kharad B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kharakuva Dholka S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Khas B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Khasta B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Khoda B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Khodiyar B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Khodiyarnagar S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Khokarnesh B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Khokhara Mehmadabad S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Khorajnanoda B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Khudad B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Khun B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kocharia B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kointia B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kokta B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kolat B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Koth S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kothadia B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Krishnanagar S.O (Ahmedabad)',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kubadthal B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kubernagar B A S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kubernagar S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kuha S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kujad B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kukvav B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kumarkhan B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kundal B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kundal B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kundli B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kunpur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Kunvar B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'L G Hospital S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Lal Darwaja S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Lambha B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Lapkaman B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Limbadia B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Loliya B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Lothal Bhurkhi RS S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'M D Marg S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Madhupura Market S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Madrisana B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Mahijada B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Makarba B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Makhiav B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Mandal S.O (Ahmedabad)',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Manek Chowk S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Manekbag S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Maninagar S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Manipur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Mankol B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Marusana B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Matoda B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Medra B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Meghaningar S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Melaj B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Memnagar S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Mingalpur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Miroli B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Mithapur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Modasar B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Moraiya B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Mota Tradia B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Motera B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Moti Kishol B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Moti Boru B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Moti Rantai B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Moti Vavdi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Muktipur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Municipal Corporation S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'N C Market S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'N C Mills S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Nadishala B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Nana Chiloda B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Nana Ubhada B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Nandej S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Nani Boru B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Nani Devti B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Nani Vavdi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Nanodara B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Naranpura Vistar S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Narayannagar S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Naroda I E S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Naroda Road S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Naroda S A S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Naroda S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Narol S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Nava Vadaj S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Navagam B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Navapura B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Navda B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Navjivan S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Navrangpura H.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Nayakpur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Nedharad B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Nesda B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Nikol B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Nirnaynagar S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Noblenagar S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'O N G C S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ode B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Odhav B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Odhav Industrial Estate S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Odhav S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ogan B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ognaj B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Otaria B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Otaria Sarvodaya Ashram B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Padana B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Paldi Kankaj B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Paldi S.O (Ahmedabad)',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Panar B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Panchham B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Panchhi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Pandharpura B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Parabadi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Pardhol B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Pasunj B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Pimpan B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Piplaj B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Pipli B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Pirana B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Pisawada B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Polarpur S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Polytechnic S.O (Ahmedabad)',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Public Office S.O (Ahmedabad)',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Rahemalpur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Raikhad S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Railway Colony S.O (Ahmedabad)',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Railwaypura S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Raipur S.O (Ahmedabad)',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Rajoda B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Rajpur Gomtipur S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Rajpura B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Rakhial S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Rakhial Udyog Vistar S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Rakhiana B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ramol B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Rampur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Rampura B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Rampura S.O (Ahmedabad)',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ranesar B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Rangpur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ranip S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ranoda B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ranodra B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ranpur S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Rasam B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Rayka B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Refda B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Rethal B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Revdibazar H.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ribadi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Rohika B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Rojid B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Rojka B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Rudatal B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Rupal B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Rupgadh B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'S A C S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'S A Mills S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sabarmati S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sachana B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sadatpura B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sahij B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Saijpur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Saijpur Bogha S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Saiwada B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Salajada B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Salangpur – Hanuman B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Salasar B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sanand S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sanathal B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sandhida B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sangasar B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sangpura B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sankod B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sarandi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Saraspur S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sardarnagar S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sargwala B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sari B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sarkhej Road S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sarkhej S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Saroda B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sarsavadi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sathal B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Shah Alam Roza S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Shahibag S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Shahpur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Shahpur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Shahpur S.O (Ahmedabad)',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Shahwadi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Shardanagar S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Shastrinagar S.O (Ahmedabad)',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Shela B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Shela B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sher B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sherpura B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Shilaj B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Shivpura B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Shiyal B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Siawada B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sihor B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Simej B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sinaj B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sindharej B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sitapur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sobhasan B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sodhi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sola B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sola H B C S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Solgam B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Stadium Marg S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sub Foreign S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sukhrampura S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sunderiana B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Sunvala B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'T B Nagar S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Tagadi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Telav B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Telavi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Thaltej Road S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Thaltej S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Thori Mubarak B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Thori Thumbha B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Thuleta B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Timba B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Tragad B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Transad B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Trent B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ughroj B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ukardi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Ukhlod B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Umrela B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Unchadi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Undrel B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Upardal B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Utelia B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vadaj S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vadgas B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vadhela B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vadod B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vagad B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Valdhera B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Valhia B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Valinda B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vanch B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vani B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vanpardi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vansva B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vanthal B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Varmor B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Varna B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vasai B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vasisthnagar S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vasna (Iawa) B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vasna Chacharvadi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vasna B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vastral S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vataman B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vatva Industrial Estate S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vatva S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vautha B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vehlal B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vejalka B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vejalpur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vekaria B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vinchhan B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vinchhiya B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vinzol B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vinzuvada B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Viramgam S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Virdi B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Virochannagar S.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vishalpur B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vithlpura B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Vivekanand Nagar B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Zanu B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Zanzarka B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Zanzarva B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Zezra B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Zinzar B.O',
        location: 'Ahmedabad',
        status: true,
      },
      {
        title: 'ANNA NAGAR',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Red Hills',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Royapuram',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Korukkupet',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Vyasarpadi',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Perambur',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Tondiarpet',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Tiruvottiyur',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Ennore',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Minjur',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Old Washermenpet',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Madhavaram',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Manali New Town',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Naravarikuppam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Puzhal',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Moolakadai',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Kodungaiyur',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Madhavaram Milk Colony',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Mathur MMDA',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Surapet',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Parrys Corner',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Manali',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Vallalar Nagar',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'New Washermenpet',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Mannadi',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'George Town',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Basin Bridge',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Park Town',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Periamet',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Pattalam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Pulianthope',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'M.K.B. Nagar',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Selavoyal',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Manjambakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Ponniammanmedu',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Sembiam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'T.V.K. Nagar',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'ICF Colony',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Villivakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Lakshmipuram',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Kathivakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Kathirvedu',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Erukanchery',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Broadway',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Jamalia, Chennai',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Kosapet',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Otteri',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Porur',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'manapakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Aminjikarai',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Ayanavaram',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Ambattur',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Kundrathur',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Defence Colony',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Mannurpet',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Padi',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Ayappakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Korattur',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Mogappair',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Arumbakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Avadi',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Pudur',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Maduravoyal',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Koyambedu',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Ashok Nagar',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'K.K. Nagar',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Karambakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Vadapalani',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Saligramam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Virugambakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Alwarthirunagar',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Valasaravakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Thirunindravur',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Pattabiram',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Thirumangalam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Thirumullaivayal',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Thiruverkadu',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Nandambakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Nerkundrum',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Nesapakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Nolambur',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Ramapuram',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Mugalivakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Mangadu',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'M.G.R. Nagar',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'M.G.R. Garden',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Alapakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Poonamallee',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Mowlivakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Gerugambakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'CMDA Colony',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Thirumazhisai',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Iyyapanthangal',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Annanur',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Teynampet',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Thousand Lights',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Gopalapuram',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Mylapore',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Chromepet',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Egmore',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Chetpet',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Perungudi',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Sholinganallur',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Alandur',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Adambakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Adyar',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Besant Nagar',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Triplicane',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'T. Nagar',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Thiruvanmiyur',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Saidapet',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Guindy',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Madipakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Nanganallur',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Velachery',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Taramani',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Pallikaranai',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Keelkattalai',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Kovilambakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Thoraipakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Neelankarai',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Injambakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Hastinapuram',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Pallavaram',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Pozhichur',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Pammal',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Nagalkeni',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Tambaram',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Selaiyur',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Irumbuliyur',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Kadaperi',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Perungalathur',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Pazhavanthangal',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Peerkankaranai',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Mudichur',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Vandalur',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Kolappakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Mambakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Palavakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Varadharajapuram',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Medavakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'West Mambalam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Kottivakkam',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Pudupet',
        location: 'Chennai',
        status: true,
      },
      {
        title: 'Abhirampur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Agarpara',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Alipore',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Amodghata',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Amtala',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Anandapur, Kolkata',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Andul',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Ankurhati',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Argari',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Ariadaha',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Asuti',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'B. B. D. Bagh',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Babughat',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Badartala',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bagbazar',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Baguiati',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Balaram Pota',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Balarampur, Budge Budge',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bally, Bally-Jagachha',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bally, Howrah',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Ballygunge',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Ballygunge Circular Road',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bamangachhi',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bamunari',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bandel',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bangur Avenue',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bankra',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bansberia',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bansdroni',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bantala',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Banupur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Baranagar',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Barasat',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Barisha, Kolkata',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Barkalikapur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Barrackpore',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Barrackpur Cantonment',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bartala',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Baruipur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Batanagar',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bawali',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Behala',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Belepole',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Belgachia',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Belgharia',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Beliaghata',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Belur, West Bengal',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Beniapukur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Benjanhari Acharial',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bhadrakali, Hooghly',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bhadreswar, Hooghly',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bhandardaha',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bhangar Raghunathpur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bhasa, Bishnupur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bhatpara',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bhattanagar',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bhowanipore',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bidhannagar',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bidyadharpur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bijoygarh',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bijpur, North 24 Parganas',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bikramgarh',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bipra Noapara',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Birati',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Birlapur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bishnupur, South 24 Parganas',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bora Gagangohalia',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bow Barracks',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Bowbazar',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Brahmapur, Kolkata',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Budge Budge',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Buita',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Burrabazar',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Burtolla',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Calcutta Riverside',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Chak Alampur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Chak Baria',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Chak Enayetnagar',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Chak Kashipur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Chakapara',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Champdani',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Chamrail',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Chandannagar',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Chanddandaha',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Chandni Chowk (Kolkata)',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Chandpur, Ghola',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Charu Market',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Chata Kalikapur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Chetla',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Chinsurah',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Chitpur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Chowringhee',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Cossipore',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Dakshin Behala',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Dakshin Jhapardaha',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Dakshin Rajyadharpur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Dakshin Raypur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Dakshineswar',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Danga, Sonarpur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Dankuni',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Daulatpur, Bishnupur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Debanandapur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Dhakuria',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Dhalai Bridge',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Dhapa, India',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Dharmapur, West Bengal',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Dharmatala',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Dhuilya',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Domjur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Dum Dum',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Dum Dum Park',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Dunlop, Kolkata',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Durganagar, Kolkata',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Duttapukur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'East Kolkata',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Ekbalpur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Eksara',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Entally',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Esplanade, Kolkata',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Fort William, India',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Ganye Gangadharpur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Garden Reach',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Garfa',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Garia',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Gariahat Road',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Garshyamnagar',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Garulia',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Gayespur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Ghola, North 24 Parganas',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Ghoshpara Bally',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Ghusuri',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Girish Park',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Gobindapur, Bhangar',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Golf Green',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Gondalpara',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Halisahar',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Haltu',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Hanspukuria',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Haridevpur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Harinavi',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Hastings, Kolkata',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Hatgachha',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Hatiara',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Hatibagan',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Hindmotor',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Hridaypur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Hugli-Chuchura',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Ichapore',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Ichhapur Defence Estate',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Jadavpur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Jafarpur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Jagadishpur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Jagatdal',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Janbazar',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Jaynagar Majilpur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Jetia',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Jhorhat',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Jodhpur Park',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Joka, Kolkata',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Jorabagan',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Jorasanko',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kabardanga',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kadamtala',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kaikhali',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kalara',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kalighat',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kalikapur, Sonarpur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kalua, Maheshtala',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kalyani, West Bengal',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kamalgazi',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kamarhati',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kanaipur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kanchrapara',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kanganbaria',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kankurgachi',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kantlia',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kanyanagar',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kasba, Kolkata',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Katju Nagar',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kaugachhi',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Keota, Hooghly',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kesabpur, India',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kestopur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Khalia',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Khantora',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Khardaha',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kidderpore',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kodalia',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kolkata West International City',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Konnagar',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kriparampur',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kudghat',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kulihanda',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Kumortuli',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Lake Gardens',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Lake Town, Kolkata',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Lalbazar',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Liluah',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Madhyamgram',
        location: 'Kolkata',
        status: true,
      },
      {
        title: 'Adajan',
        location: 'Surat',
        status: true,
      },
      {
        title: 'Adajan Road',
        location: 'Surat',
        status: true,
      },
      {
        title: 'Athwa Gate',
        location: 'Surat',
        status: true,
      },
      {
        title: 'Athwalines',
        location: 'Surat',
        status: true,
      },
      {
        title: 'Bhatar Road',
        location: 'Surat',
        status: true,
      },
      {
        title: 'Chowk Bazaar',
        location: 'Surat',
        status: true,
      },
      {
        title: 'City Light Road',
        location: 'Surat',
        status: true,
      },
      {
        title: 'Delhi Gate',
        location: 'Surat',
        status: true,
      },
      {
        title: 'Ghod Dod Road',
        location: 'Surat',
        status: true,
      },
      {
        title: 'Katargam',
        location: 'Surat',
        status: true,
      },
      {
        title: 'Majura Gate',
        location: 'Surat',
        status: true,
      },
      {
        title: 'Pandesara',
        location: 'Surat',
        status: true,
      },
      {
        title: 'Parle Point',
        location: 'Surat',
        status: true,
      },
      {
        title: 'Piplod',
        location: 'Surat',
        status: true,
      },
      {
        title: 'Rander',
        location: 'Surat',
        status: true,
      },
      {
        title: 'Rander Road',
        location: 'Surat',
        status: true,
      },
      {
        title: 'Sagrampura',
        location: 'Surat',
        status: true,
      },
      {
        title: 'Station Road',
        location: 'Surat',
        status: true,
      },
      {
        title: 'Udhna Zone',
        location: 'Surat',
        status: true,
      },
      {
        title: 'Varachha Road',
        location: 'Surat',
        status: true,
      },
      {
        title: 'Ved Road',
        location: 'Surat',
        status: true,
      },
      {
        title: 'Alandi Road',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Ambegaon Budruk',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Anandnagar',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Aundh',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Aundh Road',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Balaji Nagar',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Baner',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Baner road',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Bhandarkar Road',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Bhavani Peth',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Bibvewadi',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Bopodi',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Budhwar Peth',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Bund Garden Road',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Camp',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Chandan Nagar',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Dapodi',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Deccan Gymkhana',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Dehu Road',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Dhankawadi',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Dhayari Phata',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Dhole Patil Road',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Erandwane',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Fatima Nagar',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Fergusson College Road',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Ganesh Peth',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Ganeshkhind',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Ghorpade Peth',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Ghorpadi',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Gokhale Nagar',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Gultekdi',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Guruwar peth',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Hadapsar',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Hadapsar Industrial Estate',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Hingne Khurd',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Jangali Maharaj Road',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Kalyani Nagar',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Karve Nagar',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Karve Road',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Kasba Peth',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Katraj',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Khadaki',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Khadki',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Kharadi',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Kondhwa',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Kondhwa Budruk',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Kondhwa Khurd',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Koregaon Park',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Kothrud',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Law College Road',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Laxmi Road',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Lulla Nagar',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Mahatma Gandhi Road',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Mangalwar peth',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Manik Bagh',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Market yard',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Model colony',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Mukund Nagar',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Mundhawa',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Nagar Road',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Nana Peth',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Narayan Peth',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Narayangaon',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Navi Peth',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Padmavati',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Parvati Darshan',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Pashan',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Paud Road',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Pirangut',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Prabhat Road',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Pune Railway Station',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Rasta Peth',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Raviwar Peth',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Sadashiv Peth',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Sahakar Nagar',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Salunke Vihar',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Sasson Road',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Satara Road',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Senapati Bapat Road',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Shaniwar Peth',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Shivaji Nagar',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Shukrawar Peth',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Sinhagad Road',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Somwar Peth',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Swargate',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Tilak Road',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Uruli Devachi',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Vadgaon Budruk',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Wadgaon Sheri',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Viman Nagar',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Vishrant Wadi',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Wagholi',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Wakadewadi',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Wanowrie',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Warje',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Yerawada',
        location: 'Pune',
        status: true,
      },
      {
        title: 'Adarsh Nagar',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Agra Road',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Ajmer Road',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Ajmeri Gate',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Ambabari',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Amer Road',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Bais Godam',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Bajaj Nagar',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Bani Park',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Bapu Bazaar',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Bapu Nagar',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Barkat Nagar',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Bhawani Singh Road',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Biseswarji',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Brahmapuri',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Chandpol',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Civil Lines',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Durgapura',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Gangori Bazar',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Ghat Darwaza',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Gopalpura',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Indira Bazar',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Jagatpura',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Jalupura',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Janata Colony',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Jawaharlal Nehru Marg',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Jawahar Nagar',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Jhotwara',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Jhotwara Industrial Area',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Jhotwara Road',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Johari Bazar',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Jyothi Nagar',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Kalwar Road',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Kartarpur',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Khatipura',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Mahesh Nagar',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Malviya Nagar',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Mansarovar',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Mirza Ismail Road',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Motidungri Marg',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Muralipura',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'New Colony',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Pink City',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Raja Park',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Ramganj',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Sanganer',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Sansar Chandra Road',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Sethi Colony',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Shastri Nagar',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Shyam Nagar',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Sikar Road',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Sindhi Camp',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Sirsi Road',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Sitapura Industrial Area',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Sodala',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Subhash Nagar',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Sudharshanpura Industrial Area',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Surajpol Bazar',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Tilak Nagar',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Tonk Phatak',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Tonk Road',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Transport Nagar',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Vaishali Nagar',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Vidhyadhar Nagar',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Vishwakarma Industrial Area',
        location: 'Jaipur',
        status: true,
      },
      {
        title: 'Aashiana',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Adarsh Nagar',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Ahmamau',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Aishbagh',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Alambagh',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Alamnagar',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Aliganj',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Amar Shaheed Path',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Amausi',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Amber Ganj',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Anand Nagar',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'AP Sen Marg',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Arjunganj',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Arya Nagar',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Ashiyana Colony',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Ashok Marg',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Balaganj',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Banthra',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Barha',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Behta Saboli',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Bhadrukh',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Bharat Nagar',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Bijnaur',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Chand Ganj',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Charbagh',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Chaupatiyan',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Chinhat',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Civil Lines',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Dalibagh Colony',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Daliganj',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Darulshafa',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Deva Road',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Dilkusha Garden',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'DLF Garden City',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Faizabad Road',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Ganesh Ganj',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Gari Chunauti',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Ghaila',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Ghazipur',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Goila',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Gokhale Marg',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Gomti Nagar',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Gudamba Thaana Road',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Guramba',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'HAL',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Hazratganj',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Husainabad',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Hussainganj',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'IIM Road',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Indira Nagar',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Jal Vayu Vihar',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Jankipuram',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Jopling Road',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Jugor',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Kalyanpur',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Kamalabad Barhauli',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Kanpur Road',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Kuroni',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Kursi Road',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Lalbagh',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Lucknow Cantonment',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Madion',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Mahanagar',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Mahipatmau',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Malesemau',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Manak Nagar',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Manas Nagar',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Maunda',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Miranpur Pinvat',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Mohan Meking Road',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Narayan Nagar',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Natkur',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Naubasta',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Naveen Galla Mandi',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Navi Kot Nandana',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'New Ganeshganj',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'New Hyderabad',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Nijampur Malhor',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Nilmatha',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Nirala Nagar',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Nirala Nagar',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Nishatganj',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Paikaramau',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Pan Dariba Marg',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Park Road',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Pawanpuri',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Piparsand',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Prag Narain Road',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Rae Bareli Road',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Rahim Nagar',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Rajajipuram',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Rajendra Nagar',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Ram Mohan Rai Marg',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Rasoolpur Sadat',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Ruchi Khand-II',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Saadatganj',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Sadrauna',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Sapru Marg',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Sarai Mali Khan',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Sarojini Nagar',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Sarosa Bharosa',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Sarvodaya Nagar',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Sector-14',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Sector-18',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Sector-B',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Sector-D',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Shahnajaf Road',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Sharda Nagar',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Shyam Vihar Colony',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Sikrauri',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Singar Nagar',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Subhash Marg',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Sujanpura',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Sunder Bagh',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Sushant Golf City',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Telibagh',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Thakurganj',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'The Mall Avenue',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Tilak Marg',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Triveni Nagar',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Uattardhona',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Utrathia',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'vasant kunj',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Vibhuti Khand',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Vikas Nagar',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Vineet Khand',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'VIP Road',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Vishesh Khand',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Vivekanand puri',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Vrindavan Yojana',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Wazirganj',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Yahiaganj',
        location: 'Lucknow',
        status: true,
      },
      {
        title: 'Arya Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Ashok Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Azad Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Bhauti',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Barra',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Chowk Sarafa',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Chunni Ganj',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Civil Lines',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Darshan Purwa',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Defence Colony',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Fazalganj',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Ghumni Bazar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'G.T. Road',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Govind Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Indira Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Indrapuri Road',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Harjinder Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Harsh Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Jawahar Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Kakadev',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Kalpi Road',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Kalyanpur',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Kaushal Puri',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Kidwai Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Koyla Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Khalasi Line',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Lajpat Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Lakhanpur',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Lal Bangla',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Mall Road',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Nirala Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Naubasta',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Nayaganj',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Pandu Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Panki',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Ratan Lal Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Saket Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Sarvodaya Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Shastri Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Shyam Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Swaroop Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Shanti Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Sharda Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Singhpur',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Vikas Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Vishnupuri',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Yashoda Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Tatya Tope Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Tilak Nagar',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'VIP Road',
        location: 'Kanpur',
        status: true,
      },
      {
        title: 'Abhyankar Nagar',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Ajni',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Amravati Road',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Ayodhya Nagar',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Bagadganj',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Bajaj Nagar',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Bhandara Road',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'CA Road',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Central Avenue',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Central Avenue Road',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Civil Lines',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Congress Nagar',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Dhantoli',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Dharampeth',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Gandhi Nagar',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Gandhibagh',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Ganesh Nagar',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Ganeshpeth Colony',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Gangabai Ghat Road',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Ghat Road',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Gokulpeth',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Gopal Nagar',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Hanuman Nagar',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Indora',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Itwari',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Jaripatka',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Kamal Chowk',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Kamptee Road',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Katol Road',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Khamla',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Khamla Road',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Lakadganj',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Manewada Road',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Mankapur',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Mohan Nagar',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Mominpura',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Nandanvan',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Nandanvan',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Pratap Nagar',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Ram Nagar',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Ramdaspeth',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Ravi Nagar Chowk',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Sadar Bazar',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Sakkardara',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Shankar Nagar',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Shivaji Nagar',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Sitabuildi',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Subhash Road',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Trimurti Nagar',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Wadi Naka',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Wardha Road',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'Wardhaman Nagar',
        location: 'Nagpur',
        status: true,
      },
      {
        title: 'AB Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Abhinandan Nagar Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Alok Nagar Row Houses',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Annapurna Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Anoop Nagar',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Ashish Nagar',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Bairathi Colony',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Bengali Square',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Bhagirath Pura',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Bicholi Hapsi Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Bicholi Mardana Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Bypass Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Chhavni',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Dhar Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Girdhar Nagar',
        location: 'Indore',
        status: true,
      },
      {
        title: 'IDA Scheme 140',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Indore - Pithampur Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Jail Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Jawahar Marg',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Kalindi Kunj',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Kalindi Mid Town',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Kanadia Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Keshar Bagh Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Khajrana Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Khajuri Bazaar',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Khandwa Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Khatiwala Tank',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Lokmanya Nagar',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Maanavta Nagar',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Manik Bagh Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Manishpuri',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Manorama Ganj',
        location: 'Indore',
        status: true,
      },
      {
        title: 'MG Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Morya Hills',
        location: 'Indore',
        status: true,
      },
      {
        title: 'MR 10 Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'MTH Compound',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Nai Duniya',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Nanda Nagar',
        location: 'Indore',
        status: true,
      },
      {
        title: 'New Palasia',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Nihalpur',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Niranjanpur Circle',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Old Palasia',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Palakhedi',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Pardesi Pura',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Pipliya Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Pipliyahana Square',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Race Course Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Rajendra Nagar',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Rajwada',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Rani Sati Gate',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Regional Park Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Ring Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'RNT Marg',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Sainath Colony',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Sanvid Nagar',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Sapna Sangeeta Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Sarv Suvidha Nagar',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Scheme No.54',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Shiv Shakti Nagar Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Shree Nagar Extension',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Siyaganj',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Sneh Nagar',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Snehlataganj',
        location: 'Indore',
        status: true,
      },
      {
        title: 'South Tukoganj',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Super Corridor',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Telephone Nagar',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Tilak Nagar Main Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Tukoganj',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Ujjain Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Vandana Nagar Main Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Vijay Nagar',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Vishnu Puri Colony',
        location: 'Indore',
        status: true,
      },
      {
        title: 'White Church Colony',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Yeshwant Niwas Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'YN Road',
        location: 'Indore',
        status: true,
      },
      {
        title: 'Arera Colony',
        location: 'Bhopal',
        status: true,
      },
      {
        title: 'Bairagarh',
        location: 'Bhopal',
        status: true,
      },
      {
        title: 'Berasia Road',
        location: 'Bhopal',
        status: true,
      },
      {
        title: 'Bittan Market',
        location: 'Bhopal',
        status: true,
      },
      {
        title: 'Govind Pura',
        location: 'Bhopal',
        status: true,
      },
      {
        title: 'Habib Ganj',
        location: 'Bhopal',
        status: true,
      },
      {
        title: 'Hamidia Road',
        location: 'Bhopal',
        status: true,
      },
      {
        title: 'Hoshangabad Road',
        location: 'Bhopal',
        status: true,
      },
      {
        title: 'Indrapuri',
        location: 'Bhopal',
        status: true,
      },
      {
        title: 'Jahangirabad',
        location: 'Bhopal',
        status: true,
      },
      {
        title: 'Jawahar Chowk',
        location: 'Bhopal',
        status: true,
      },
      {
        title: 'Koh E Fiza',
        location: 'Bhopal',
        status: true,
      },
      {
        title: 'Kolar Road',
        location: 'Bhopal',
        status: true,
      },
      {
        title: 'Malviya Nagar',
        location: 'Bhopal',
        status: true,
      },
      {
        title: 'Marvadi Road',
        location: 'Bhopal',
        status: true,
      },
      {
        title: 'MP Nagar',
        location: 'Bhopal',
        status: true,
      },
      {
        title: 'Peer Gate',
        location: 'Bhopal',
        status: true,
      },
      {
        title: 'Raisen Road',
        location: 'Bhopal',
        status: true,
      },
      {
        title: 'Shahpura',
        location: 'Bhopal',
        status: true,
      },
      {
        title: 'Shivaji Nagar',
        location: 'Bhopal',
        status: true,
      },
      {
        title: 'Sultania Road',
        location: 'Bhopal',
        status: true,
      },
      {
        title: 'TT Nagar',
        location: 'Bhopal',
        status: true,
      },
      {
        title: 'Anu Nagar',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Azad Nagar',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Balkum',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Bhayander Pada',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Brahmand',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Charai',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Diva',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Dhokali Naka',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Eastern Express Highway',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Ghodbander',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Ghodbunder Road',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Jambli Naka',
        location: 'Thane',
        status: true,
      },
      {
        title: 'JK Gram',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Kalwa',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Kapurbawadi',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Kolbad Road',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Kolshet Road',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Kasarvadaval',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Kopri',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Khopat',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Mumbra',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Majiwada',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Manpada',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Naupada',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Panch Pakhadi',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Patil Wadi',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Patlipada',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Pokhran Road',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Pokhran Road No.2',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Shilphata',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Sawarkar Nagar',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Shree Nagar',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Thane East',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Thane West',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Teen Hath Naka',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Tembhi Naka',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Tikuji Ni wadi',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Uthalsar',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Vartak Nagar',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Vasant Vihar',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Vishnu Nagar',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Waghbil',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Wagle Estate',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Wagle Industrial Estate',
        location: 'Thane',
        status: true,
      },
      {
        title: 'Dwaraka Nagar',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Daba Gardens',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Asilmetta',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Siripuram',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Pithapuram Colony',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'CBM Compound',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Maddilapalem',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Narasimha Nagar',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Balayya Sastri Layout',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Kailasapuram',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Seethammadhara',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Resapuvanipalem',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'HB Colony',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Ramnagar',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Santhipuram',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Suryabagh',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Railway New Colony',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Venkojipalem',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Seethammapeta',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Waltair Uplands',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Dondaparthy',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Gnanapuram',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Akkayyapalem',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Shivaji Palem',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Thatichetlapalem',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Kancharapalem',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Isukathota',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Vizianagaram',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Kommadi',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Rushikonda',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Sagar Nagar',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Yendada',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Madhurawada',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'PM Palem',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Thimmapuram',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Jodugullapalem',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Kapuluppada',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Gambhiram',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Anandapuram',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Mangamaripeta',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Gajuwaka',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Pedagantyada',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Kurmannapalem',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Akkireddypalem',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Nathayyapalem',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Yarada',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Aganampudi',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Chinagantyada',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Nadupuru',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Duvvada',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Desapatrunipalem',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Sheela Nagar',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Sriharipuram',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Tunglam',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Mulagada',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Vadlapudi',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Ukkunagaram (Steel Plant Township)',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Gandhigram',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Gangavaram',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'BHPV',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Mindi',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Scindia',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Malkapuram',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Gopalapatnam',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Naidu Thota',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Vepagunta',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Marripalem',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Simhachalam',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Prahaladapuram',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Pendurthi',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Chintalagraharam',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'NAD',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Madhavadhara',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Sujatha Nagar',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Adavivaram',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Muralinagar',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Chinnamushidiwada',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Kakani Nagar',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Narava',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Pineapple Colony',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Jagadamba Centre',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Soldierpet',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'MVP Colony',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Velampeta',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Chinna Waltair',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Kirlampudi Layout',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Pandurangapuram',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Daspalla Hills',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Town Kotha Road',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Peda Waltair',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Lawsons Bay Colony',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Prakashraopeta',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Burujupeta',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Jalari Peta',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'One Town',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Poorna Market',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Allipuram',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Salipeta',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Relli Veedhi',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Maharanipeta',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Chengal Rao Peta',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Chinna Gadhili',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Visalakshi Nagar',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Arilova',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Ravindra Nagar',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Hanumanthavaka',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Adarsh Nagar',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Padmanabham',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Gidijala',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Gudilova',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Tagarapuvalasa',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Bheemunipatnam',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Nidigattu',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Vellanki',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Sontyam',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Pudimadaka',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Dosuru',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Anakapalli',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Pedamadaka',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Duppituru',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Ravada',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Devada',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Lankelapalem',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Parawada',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Appikonda',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Atchutapuram',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Sabbavaram',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Devipuram',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Kothavalasa',
        location: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Anandpur',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Ashiana Nagar',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Bairiya',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Bankipur',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Anisabad',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Beur',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Bari Pahari',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Bihar School Examination Board',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Begampur',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Buddha Colony',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Digha',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Controller Of Defence Accounts',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Digha Ghat',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Fraser Road',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Gardanibagh',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Gandhi Maidan',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Gulzarbagh Field',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Keshri Nagar',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Khajpura',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Kalianpur',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Kankarbagh',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Kadam Kuan',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Kidwaipuri',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Kurthaul',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Lodipur',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Kurji',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Lohia Nagar',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Machhua Toli',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Mahendru',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Marufganj',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Muradpur',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Mithapur',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Malahi Pakri Road',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Old Jakkanpur',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Patna High Court',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Patliputra Colony',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Secretariat',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Phulwari Sharif',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Hanuman Nagar',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Patna City Chowk',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Patna University',
        location: 'Patna',
        status: true,
      },
      {
        title: 'New Punaichak',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Raja Bazar',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Sdaquat Ashram',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Saidpur',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Rajapur',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Saguna More',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Raj Bhavan',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Rukanpura',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Sadikpur',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Shastri Nagar',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Sheikhpura',
        location: 'Patna',
        status: true,
      },
      {
        title: 'Ajod',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Ajwa Road',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Akota',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Alkapuri',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Amaliyara',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Amodar',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Ampad',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Angadh',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Ankhol',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Ankodia',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Asoj',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Atladara',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Bajwa',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Bakrol',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Baranpura',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Bhaily',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Bill',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Chapad',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Chemical Industries',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Chhani Rd',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Chhani (vadodara)',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Danteshwar',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Dashrath',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Dhaniavi',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Dhanora',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Dodka',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Dumad',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Eme',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Fartilizer Nagar',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Fateganj',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Fatepura (vadodara)',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Fazalpur',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Geb',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Gorwa',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Gosindra',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Gotri',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Harni Colony',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Industrial Estate (vadodara)',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Itola',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Itola R.s.',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Jambua',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Jawahar Nagar (vadodara)',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Kalali',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Kapurai',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Karchiya',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Karelibaug',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Karodia',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Kelanpur',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Khanderao Market',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Kotna',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Koyali',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Kumetha',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'M.i. Estate',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Madanzampa',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Makarpura',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Mandvi (vadodara)',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Maneja',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Manjalpur',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Nandesari',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Nandesari Ind. Estate',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Nimetha',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Ongc Col',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Padmala',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Panchvati',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Patarveni',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Petrochemical T Ship',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Petrochemical',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Por',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Pratapganj (vadodara)',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Pratapnagar R.s.',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Pratapnagar (vadodara)',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Racecourse',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Raika',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Raipura',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Ramnath',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Ranoli (vadodara)',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Ruvand',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Samiyala',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Samsabad',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Sankarda',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Santkawnar Colony',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Sarar',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Sardar Nagar Society',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Sayajiganj',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Sayajipura',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Sevasi',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Shahpura',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Sharadnagar',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Sherkhi',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Sindhrot',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Sisva',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Sokhda',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Soma Talav',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Srp Group I',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Subhanpura',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Sundarpura',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'T B Sanatorium',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Tandalja',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Tarsali',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Tatarpura',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Undera',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Vadodara',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Vadsala',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Vadsar',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Varnama',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Vasna Kotaria',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Vasna Road',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Vidhyut Nagar Colony',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Virod',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Wadi S.n. Road',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Waghodia Road',
        location: 'Vadodara',
        status: true,
      },
      {
        title: 'Abhay Khand',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Ankur Vihar',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Ahinsa Khand-1',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Ansals Chiranjiv Vihar',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Ahinsa Khand 2',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Avantika',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Ambedkar Road',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Bhim Nagar',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Bhram Puri',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Bhuapur',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Chander Nagar',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Crossings Republik Road',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'National Highway 24, Crossings Republik',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Dundahera',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Dasna',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Govindpuram',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Gyan Khand 3',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'GT Road',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Gyan Khand IV',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Gyan Khand I',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Gyan Khand II',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Harbans Nagar',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Harsaon',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Indirapuram',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Judges Enclave',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Kamla Nehru Nagar',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Kaushambi',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Kavi Nagar',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Lajpat nagar',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Lal Kuan',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Lohia Nagar',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Loni',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Madhopura',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Marium Nagar',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Madhuban Bapudham',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Model Town',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Maliwara',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Maliwara',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Mohan Nagar',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Nandgram',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Nehru Nagar-III',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Niti Khand I',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Nyay Khand 2',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Naya Ganj',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'NH-24',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Niti Khand II',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Nyay Khand III',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Neelmani Colony',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'NH-24 Bypass',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Niti Khand 3',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Nehru Nagar II',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'NH-58',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Nyay Khand I',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Panchsheel Enclave',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Pandav Nagar Industrial Area',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Patel Nagar',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Pratap Vihar',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Ramprastha',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Raispur',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Raj Nagar',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Raj Nagar Extension',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Ramprastha',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Sadiqpur',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Sewa Nagar',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Shakti Khand III',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Shalimar Garden Extension II',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Surya Nagar',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Sahibabad',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Shahpur Bamheta',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Shakti Khand IV',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Shastri Nagar',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Swaran Jyanti Puram',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Sanjay Nagar',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Shakti Khand I',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Shalimar Garden',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Shatabdipuram',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Sehani Khurd',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Shakti Khand II',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Shalimar Garden Extention I',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vaishali',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vaishali Sector-1',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vaishali Sector-5',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vasundhara Sector-12',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vasundhara Sector-16',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vasundhara Sector-2C',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vasundhara Sector-6',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vijay Nagar',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vasundhara',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vaishali Sector-2',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vasundhara Sector-1',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vasundhara Sector-13',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vasundhara Sector-17',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vasundhara Sector-3',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vasundhara Sector-7',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vaibhav Khand',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vaishali Sector-3',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vasundhara Sector-10',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vasundhara Sector-14',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vasundhara Sector-4',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vasundhara Sector-8',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vaishali Extension',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vaishali Sector-4',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vasundhara Sector-11',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vasundhara Sector-15',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vasundhara Sector-19',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vasundhara Sector-5',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vasundhara Sector-9',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Daulatpura',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Nasirpur',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Ghaziabad Sector 18',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Ghaziabad Sector 19',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Ghaziabad Sector 22',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Vaishali Sector-9',
        location: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Bharat Nagar',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Brown Road',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Chaura Bazar',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Civil Lines',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Dholewal Chowk',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Dugri',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Ferozepur Road',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Field Ganj',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Focal Point',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Ghumar Mandi',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Gill Road',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'GT Road',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Janta Nagar Road',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Kitchlu Nagar',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Kochar Market Chownk',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Link Road',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Industrial Area- A',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Madhopuri',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Miller Ganj',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Model Town',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Model Town Extension',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Pakhowal Road',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Sabzi Mandi Road',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Sherpur Chowk',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Transport Nagar',
        location: 'Ludhiana',
        status: true,
      },
      {
        title: 'Bamrauli Ahir',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Bamrauli Katara',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Bhadrauli',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Budhana Mustkil',
        location: 'Agra',
        status: true,
      },
      {
        title: 'C.o.d.',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Dahtora',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Deoretha',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Deori',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Digner',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Gutila',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Jarua Katra',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Kakua',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Kalal Kheria',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Kalwari',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Karmyogi Enclave',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Malpura',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Mankeda',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Midhakur',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Pathauli',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Sahara',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Semri',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Shahi',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Shyamo',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Subji Mandi',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Sunari',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Taj Nagari',
        location: 'Agra',
        status: true,
      },
      {
        title: 'Adgaon',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Anusuya Nagar',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Ashok Sthamb',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Bytco Point',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Canada Corner',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'College Road',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Dwarka',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Fulenagar',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Gangapur Road',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Gole Colony',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Govind Nagar',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Indira Nagar',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Jail Road',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Mahatma Nagar',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'MG Road',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Mumbai Agra Road',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Mumbai Naka',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Nashik Main Road',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Nashik Road',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Old Agra Road',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Panchvati',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Nashik � Pune Road',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Raviwar Peth',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Saibaba Nagar',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'CDO-MERI Colony',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Sane Guruji Nagar',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Satpur',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Shalimar',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Sharanpur',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Sharanpur Road',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Shivaji Nagar',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Shivaji Road',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Sawarkar Nagar',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Shramik Nagar',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Tidke Nagar',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Tilak Road',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Pathardi Gaon',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Parab Nagar',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Trimbak Road',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Trimurti Chowk',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Vakil Wadi',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Vrindavan Colony',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Koknipura',
        location: 'Nashik',
        status: true,
      },
      {
        title: 'Ajronda Chowk',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Ashoka Enclave Part 3',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Agwanpur',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Anangpur Dairy',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Ajit Nagar',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Ankhir',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Ajronda',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Ashoka Enclave',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Badkhal Chowk',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Ballabhgarh',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'BPTP Parkland',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Basantpur',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Charmwood Village',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Chawla Colony',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Dabuwa Colony',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Dayal Bagh',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Dabua Colony',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Dayal Basti',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Dav College',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Faridpur',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Friends Colony',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Gandhi Colony',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Ghazipur',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Gurukul Basti',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Gurukul Road',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Greenfield Colony',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Gopi Colony',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Hardware Colony',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Industrial Area',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Independant Kothi',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Indraprastha Colony',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Ismailpur Road',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Jawahar Colony',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Jeevan Nagar',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Katan Pahari',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Kheri Road',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Lakkarpur',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Mewala Maharajpur',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Mujesar',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Mathura Road',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Neharpar Faridabad',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'New Industrial Township 2',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'New Industrial Township',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'New Industrial Township 3',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'NH-2',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'New Industrial Township 4',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Nehru Colony',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'New Industrial Township 1',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'New Industrial Township 5',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Parvatiya Colony',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Raveev Nagar',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sainik Colony',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 12',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 15',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 17',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 20',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 21C',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 23-A',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 27/A',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 30',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 35',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 4',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 46',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 55',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 6',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 7',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector-54',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector-75',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector-78',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector-84',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector-88',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'SGM Nagar',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Suraj Kund',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector-28',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 12',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 15A',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 18',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 21 D',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 24',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 27',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 32',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 36',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 41',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 48',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 56',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 62',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 8',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector-31',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector-63',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector-75',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector-80',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector-85',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector-89',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Suraj Kund Road',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 10',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 13',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 16',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 19',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 21A',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 22',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 24',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 29',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 33',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 37',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 42',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 5',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 58',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 64',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 9',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector-43',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector-70',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector-76',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector-81',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector-86',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Shastri Colony',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Surya Nagar',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 11',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 14',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 16A',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 2',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 21B',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 23',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 25',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 3',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 34',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 39',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 45',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 52',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 59',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 65',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector 91',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector-49',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector-72',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector-77',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector-82',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sector-87',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Sehatpur',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Spring Field Colony',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Tikawali',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Vinay Nagar',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Yadav Colony',
        location: 'Faridabad',
        status: true,
      },
      {
        title: 'Abdullapur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Abulane',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Ajrara',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Amanullapur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Anaj Mandi (meerut)',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Arnawali',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Aseelpur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Atrara',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'B. N. Nanu',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Baghpat Gate',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Bahadurpur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Bana',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Banker Street',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Baram',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Begum Bagh',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Behrampur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Belvedere',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Bhadoli',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Bhalsona',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Bhatipura',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Bhola',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Bhoor Baral',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Bijauli',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Boundary Road',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Budhana Gate',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Budhera Zahidpur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Chandori Khas',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Chandsara',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Chhajupur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Chhipi Tank',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Dabathwa',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Dabka',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Dahadra',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Dalampur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Datawali',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Defence Colony (meerut)',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Dulhera',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Gagol',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Gandhi Ashram (meerut)',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Ganganagar',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Gesupur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Ghosipur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Gurukul Dorli',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Harra',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Hasanpur Kadim',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Hasanpur Kalan',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'I. E. Partapur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Jangethi',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Jani Kalan',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Jani',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Janjokhar',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Jaroda',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Jatauli',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Jithauli',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Kabari Bazar',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Kaili',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Kaiser Ganj',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Kaithwari',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Kalanjari',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Kalina',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Kalyanpur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Kanker Khera',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Kanshi',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Kaseru Khera',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Kastla Shamshernagar',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Kaul',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Kayastha Badha',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Kazamabad Goon',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Khanpur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Kharkhuda',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Khaspur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Khirwa Jalalpur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Kina Nagar',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Kishanpura (meerut)',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Kitholi',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Kithore',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Krishana Nagar',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Kurali',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'L. L. R. M. Med.college',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Lalyana',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Lawar',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Lisari',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Lisari Gate',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Machhara',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Mahalwala',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Mainthna Inder Singh',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Malyana',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Maukhas',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Meerpur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Meerut Cantt',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Meerut City',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Meerut City R. S.',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Meerut Kutchery',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Meerut Tehsil',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Meerut University',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Miet',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Modipuram',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Mohiuddinpur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Mundali',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Murlipur Phool',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Muzaffarnagar Saini',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Muzakkipur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Nadir Ali & Co.',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Nagli Badli',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Narangpur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Navinmandi',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Nek',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'P. R. C.',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Pabli Khas',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Panchi',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Panchli Khurd',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Partapur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Paswara',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Pathauli',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Peepla Idrishpur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Phaphunda',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Pohli',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Poothkhas',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'R.a.bazar',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Rachhauti',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Radhana',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Rajpura',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Ramlilaground',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Ramnagar (meerut)',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Rasna',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Rasulpur Aurangabad',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Rasulpur Kinoni',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Rasulpur Rohta',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Rithani',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Rly. Road Meerut',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Rukanpur Morna',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'S.g.mandi',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Saket (meerut)',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Samai Pur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Sarawa',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Sardhana Road',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Sardhana',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Sarrafa Bazar',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Sarwani Arifpur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Satwai',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Shahjahanpur',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Shastri Nagar (meerut)',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Shivpuri (meerut)',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Sikhera',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Sisoli',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Siwal',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Siwaya',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Suraj Kund Road',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Thapar Nagar',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Uldhan',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'Victoria Park',
        location: 'Meerut',
        status: true,
      },
      {
        title: 'W. K. Road',
        location: 'Meerut',
        status: true,
      },
      {
        title: '150 Feet Ring Road',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Amin Marg',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Bhakti Nagar',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Bhavnagar Road',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Canal Road',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Dharmendra Road',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Dhebar Road',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Dr. Yagnik Road',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Gondal Road',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Gundawadi',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Harihar Chowk',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Jay Nath Foundry',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Jamnagar Road',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Jawahar Road',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Kalawad Road',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Kanak Road',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Karanpara',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Kasturba Road',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Kotharia Road',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Lakhajiraj Road',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Laxmiwadi Main Road',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Limda Chowk',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Mangala Main Road',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Mavdi',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Millpara',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Motitanki Chowk',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Palace Road',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Prahalad Road',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Raiya',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Raiya Road',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Rajputpara',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Sadar',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Sanganawa Chowk',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Sardar Nagar',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Soni Bazar',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Tagore Road',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'University Road',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Vidya Nagar Main Road',
        location: 'Rajkot',
        status: true,
      },
      {
        title: 'Ashapur',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Assi Ghat',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Ayar',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Bangali Tola',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Basani Bazaar',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Bazardiha',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Bhagwanpur',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Bhelupur',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Bhelupura',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Bhikhampur',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Bhulanpur PSC',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Birapatti',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Chandpur Industrial Estate',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Chetganj',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Dafi',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Daranagar',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Dashaswmedh Road',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Dheerendra Mahila Maha Vidyalaya',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'DurgaKund',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Gai Ghat',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Hanumaan Ghat',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Harhua',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Ishwargangi Pokhra',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Jaitpura',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Jansa Bazar',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Kamachha Road',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Kandawa Chauraha',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Kedar Ghat',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Khajuri Road',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Lahartara',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Lanka',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Luxa Road',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Maheshpur',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Mahmoorganj',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Manduadih',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Murdaha Bazar',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Nagar Mahapalika Hospital',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Narayanpur',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Naya Ghat',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Newada',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Om Nagar Colony',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Paharia',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Pandeypur',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Phulpur',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Pindra',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Piyari',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Rajpur',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Ramaipatti',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Ramapura Luxa',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Rameshwar',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Ramnagar',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Sarnath',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Shivala',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Shivpur',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Shivraj nagar',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Shri Kashi Vishwanath Temple',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Sidhgiribagh',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Sigra',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Sikraul',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Sindhora',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Singhpur',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Sunderpur',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Susuwahi Road',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Tapovan Ashram',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Vidyapeeth Road',
        location: 'Varanasi',
        status: true,
      },
      {
        title: 'Ajab Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Arif Colony',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Ashok Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Banjara Colony',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Beed Bypass Road',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Bhagatsingh Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Bismillah Colony',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Chatrapathi Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Chetana Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Chilkalthana',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Chintamani Colony',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'CIDCO',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'City Heights Lane',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Dargah Chowk',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Dashmesh Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Devnandji Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Disha Nagari',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Dr Ambedkar Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Gadia Vihar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Ganesh Colony',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Garkheda',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Gevrai Tanda',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Golden City',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Harsul',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Himayat Bagh',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Itkheda',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Jalan Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Jalna Road',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Jaswantpura',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Juna Bazaar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Jyoti Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Kanchanwadi',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Khadkeshwar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Khivansara Park',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Khokadpura',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Kiradpura',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Konkanwadi',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Kotla Colony',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Kotwalpura',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'M G M',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Mahavir Chowk',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Mahmoodpura',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Maliwada',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Maya Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Mayur Park',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Mhada',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'MIDC Industrial Area',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Mirajgave Nagari',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Misarwadi',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Mondha',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'N 1',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'N 10',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'N 11',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'N 12',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'N 13',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'N 2',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'N 3',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'N 4',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'N 5',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'N 7',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'N 8',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'N 9',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'N-6',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Nagar Naka',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Nageshwarwadi',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Nagsenvan',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Naralibag',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Navkhanda',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'New Osmanpura',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Nirala Bazar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Nirala Bazar Road',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Nyay Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Osmanpura',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Padampura',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Padegaon',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Paithan Road',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Pandharpur Village',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Pannalal Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Parvati Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Pragati Housing Society',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'PWD Colony',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Ramanand Colony',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Rana Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Renuka Puram',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Sadat Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Sahakar Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Samarth Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Samata Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Sambhaji Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Sangram Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Satara Parisar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Shahanurwadi',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Shahgunj',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Shantiniketan Colony',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Shantipura',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Shreya Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Sindhi Colony',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Sivajinagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Sundarwadi',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Swapna Nagri',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Ulkanagari',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Vidya Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Vidyut Colony',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Waluj',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Wankhede Nagar',
        location: 'Aurangabad',
        status: true,
      },
      {
        title: 'Adarsh Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Ajit Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Ajnala Road',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Albert Road',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Amar Avenue',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Amritsar Cantonment',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Antaryami Colony',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Azad Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Basant Avenue',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Batala Road',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Bharat Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Chheharta',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Circular Road',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Court Road',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Dashmesh Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Dayanand Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Faquir Singh Colony',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Fatehgarh Churian Road',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'G.T. Road',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Godbind Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Golden Avenue',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Green Avenue',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'GT Road',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Gumtala',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Gurnam Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Guru Arjun Dev Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Guru Colony',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Guru Ram Das Colony',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Hall Bazar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Himatpura',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Hussainpura',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Indira Colony',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Ishwar Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Itahad Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Jaspal Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Jawahar Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Jodh Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Kabir Park Colony',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Kashmir Avenue',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Katra Ahluwalia',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Katra Karam Singh',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Kot Atma Singh',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Kot Khalsa',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Kotatma Ram',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Krishna Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Krishna Square',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Kt. Jaimal Singh',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Lahori Gate',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Lawrence Road',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Majitha Road',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Mall Road',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Maqbool Road',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Model Town',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Mohindra Colony',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Mustafabad',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Nawan Kot',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'New Gurnam Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'New Pavan Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'NH1',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Nimak Mandi',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Niva Tung',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Paris Town',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Punjab House Fed. Housing Society',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Putli Ghar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Putlighar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Queens Road',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Ram Nagar Colony',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Rani Ka Bagh',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Ranjit Avenue',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Roop Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Sahibzada Jujhar Singh Avenue',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Sahid Udham Singh Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Sandhu Colony',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Shakti Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Sharifpura',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Shori Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Shri Guru Amar Dass Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'St Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Sunder Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Tensilpura',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Tilak Nagar',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Tung Bala',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'White Avenue',
        location: 'Amritsar',
        status: true,
      },
      {
        title: 'Kharghar',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Bonkode',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Shiravane',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Airoli',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Juinagar',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Sanpada',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Khanda Colony',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Ghansoli',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Vashi',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Turbhe',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Kopar Khairane',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Nerul',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Seawoods',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Kamothe',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Taloja',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Panvel',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Khandeshwar',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'CBD Belapur',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Roadpali',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Mahape',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Navade',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Karanjade',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Uran',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Nhava',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Vichumbe',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'sector 26 Vashi',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Sector 25 Khandeshwar',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Sector 27 - Kharghar',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'sector 30 Kharghar',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Sector 27 Kharghar',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Vadghar',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Valap',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Sector 22 Kamothe',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Sector 19 Ulwe',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'sector 19 Kharghar',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'sector 19 (shahbaz village)',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Sector 19',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'sector 20',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'sector 20 Kharghar',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Sector 21 Ulwe',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Sector 21 Kharghar',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Sector 21 Kamothe',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'sector 34 Kharghar',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'sector 36 Kamothe',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Shil Phata',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Umroli',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Shelu',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Ulwe',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Tembhode',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Shilottar Raichur',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Talavli',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Taloje Majkur',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Sector 18 Ulwe',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Shedung',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'sector 50',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'sector 5 Ulwe',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Usarli Khurd',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'sector 50 New',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Sector 6',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'sector 8A',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'sector 7',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Sector 35 Kharghar',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Sector 08 Ulwe',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Khalapur',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Kalundre',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Kalamboli',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Garpoli',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Koproli',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Mumbai Pune Express Highway',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'New Panvel',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Nevali',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Nere',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Dronagiri',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Dighe',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Bokadvira',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Apta',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Akurli',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Ajivali',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Bonshet',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Chipale',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Dhansar',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Chouk',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Chirle',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Nilje Gaon',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Padgha',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'sector 11',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Sector 10 ( Kopra)',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Sector 09 Ulwe',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Adai',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Sector 12',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'sector 13',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Sector 17 Ulwe',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Sector 15 Kharghar',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'sector 15',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Sector 02 Ulwe',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'savoli',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Parsik Hill',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Palm Beach Road',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Palaspa',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Pen',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Rabale',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Rohinjan',
        location: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'A D A Colony',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Abdul Wahabpur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Adampur Urf Madaripur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Ahmadpur Asrouli Kachhar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Ahmadpur Asrouli Uparhar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Ahmadpur Pawan',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Akbarpur Mirzapur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Akbarpur Sallahpur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Ashrafpur Khas',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Asrawe Kalan',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Asrawe Khurd',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Baigampur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Bajha',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Baksi Moda',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Bamrouli Kachhar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Bamrouli Uparhar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Barawan',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Begum Bazar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Bhagal Purwa',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Bhagwatpur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Bharat Pump And Compressor Factory',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Bharetha',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Bhikhampur Maidwara',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Bhiti Taluka Asdullapur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Bihka Urf Pura Mufti',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Bisouna',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Chak Dadanpur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Chak Lakhanpur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Chak Pyagpur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Chak Rsoolpur Pyagpur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Chandrabhanpur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Chandrsain',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Chirla Munjapta',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Dadanpur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Dahi',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Daiwghat',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Damupur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Dewari',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Doorbani Nagar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Fulwa',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Gandhi Nagar Manas Nagar Industrial Labour Colon',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Gangotri Nagar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Ganja',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Gayasddinpur Uprhar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Gohti Kachhar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Gohti Uparhar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Gopalpur Tikari',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Govindpur Lokipur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Gurunanak Nagar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Harirampur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Hasimpur Chhabilepur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Hatwa Kachhar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Hatwa Uparhar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Ibrahimpur Bamrouli',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Iguwa Urf Kathgawan',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Ioc Colony Deoghat Ada Colony And Jhalwagaon Og',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Ismailpur Kotwa',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Iti Factory And Res Colony',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Jalalpur Ghosi',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Janka',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Jhalwa',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Jhapiya',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Jodhwal',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Kadirpur Taluka Adampur Bisuna',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Karehada Kachhar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Karehada Uparhar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Kathula Gospur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Keshopur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Khatangi',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Kherwa',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Kodra',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Kundanpur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Kuswan',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Kutubanpur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Lakhanpur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Madpur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Mahewa West',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Mainapur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Mandar Daih Mafi',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Mandari',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Manori',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Mardanpur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Mirapur Taluka Ahmadpur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Mohiuddinpur Amrain',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Mubarkpur Kotwa',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Mudaira Taluka Ibrahimpur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Muhibuddinpur Bharetha',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Mukta Vihar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Nasirpur Silna',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Numaiya',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Patti Ahmad Kachhar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Rahimabad',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Rasoolpur Kashipur Kachhar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Rasoolpur Kashipur Uparhar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Rasoolpur Madiyadeeh Kachhar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Rasoolpur Madiyadeeh Uparhar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Rawatpur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Saeedpur Khas',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Saikh Alipur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Sairpur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Sarai Kamal',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Shaha Urf Pipalgaon',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Shaikh Sarwa',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Shiv Nagar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Subedarganj Railway Colony',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'T S L Factory',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Taiwara',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Tikri Kachhar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Tikri Uparhar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Tiyara',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Triveni Nagar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Ujihiniima',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Ujihni Patti Urf Fatehpur Kach',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Ujihni Patti Urf Fatehpur Uprh',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Umari',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Umarpurniwa Uprhar',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Virampur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Wazidpur',
        location: 'Prayagraj',
        status: true,
      },
      {
        title: 'Agunshi',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Ajodhyaghat',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Alipur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Amaragori',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Amardah',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Amta',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Anantapur (howrah)',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Andul Mouri',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Antila',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Anulia',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Argori',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Bachhri',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Baganda',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Bagnan',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Bagua',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Bahira',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Baidyanathpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Bainan',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Bakshi',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Balichaturi',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Baluhati',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Bangalpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Banharishpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Baniban',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Bantul',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Baramahera',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Bargachia',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Bargarchumuk',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Bargram',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Barunda',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Basudebpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Batai',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Bauria',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Begri',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Belari',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Beldubi',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Belkulai',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Benapur Chandanpara',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Bhandargacha',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Bhatora',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Bhekutal',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Birampur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Birshibpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Brindabanpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Chackasi',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Chakur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Chaturbhujkati',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Chitrasenpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Dafarpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Dakshin Durgapur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Dakshin Ramchandrapur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Dakshin Santoshpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Debandi',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Deoly',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Deora',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Deul Gram',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Deulpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Deulti',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Dhamsia',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Dharsa',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Dhulagori',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Dhulasimla',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Dhunki',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Dhurkhali',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Dihimondal Ghat',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Domjur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Gangadharpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Gazipur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Geneshpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Ghoshpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Gobindapur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Gohalberia',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Gondalpara',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Gourangachak',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Gurepole',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Gutinagari',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Hallyan',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Harop',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Hatgacha',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Hirapur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Islampur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Jagatballavpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Jalabiswanathpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Jhamtia',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Jhinkra',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Jhumjhumi',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Joargori',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Joka',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Joynagar',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Joypur Bill',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Joypur Fakirdas',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Jujursa',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Kaijuri',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Kalidaha',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Kalyanpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Kanjiakhali',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Kankrol',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Kanpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Karatberia',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Kashmul',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Kendua',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Khadinan',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Khajutti',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Khalna',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Khantaberia',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Khantapukur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Kharuberia',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Khasmora',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Khorop',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Khosalpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Kotra',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Kulgachia',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Kulitapara',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Kultikari',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Kumarchak',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Kushberia',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Lakshmanpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Madhabpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Mahishrekha',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Makardaha',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Manikura',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Mankur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Mansuka',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Mashila',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Mato',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Mugkalyan',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Nabaghara',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Nabagram Sikipur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Nakol',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Narna',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Naul',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Nawpala',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Nayachak',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'New Kolora',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Nijbalia',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Noapara',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Nonakundu',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Olanpara',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Orphuli',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Pacharul',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Panchla',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Panitras',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Panpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Parbatipur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Patihal',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Pichaldaha',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Pirpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Polgustia',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Prosastha',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Rabibhag',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Radhanagar',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Radhapur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Raichak',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Ramchandrapur Bo (sank.)',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Ramchandrapur (howr',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Ramnagar',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Rashpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Rudrapur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Rupasgori',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Sahapur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Samruk',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Sankrail',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Santoshpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Sarda',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Sasati',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Sauria',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Shibganj',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Shyampur (howrah)',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Siddheswar',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Sonagachi',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Sonamui',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Sonatala',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Subhararah',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Subsit',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Thalia',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Tulsiberia',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Udang',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Udaynarayanpur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Ula',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Uluberia',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Uttar Batora',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Uttar Durgapur',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Uttar Jharpardah',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Uttar Manasri',
        location: 'Howrah',
        status: true,
      },
      {
        title: 'Adarsh Nagar',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Argora',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Argora Chowk',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Ashok Nagar',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Bahu Bazaar',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Balsiring',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Bara Ghagra',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Bariatu Road',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Bhumiartoli',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Birsa Nagar',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Bogaicholi',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Booti More',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Booty Road',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Burdwan Compound',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Chutia',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Circular Road',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Daladili Bhonda Road',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Daud Nagar',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Delatoli',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Dhurwa',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Dibdih',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Doranda',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Dwarikapuri',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Firayalal',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Gandhi Nagar Colony',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Gitilpiri',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Gosaintola',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'H.B. Road',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Harihar Singh Road',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Harmu Colony Road',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Harmu Housing Colony',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Hatiya',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Hazaribag Road',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Hesag',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Hindpiri',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Hinoo',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Income Tax Colony',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Indira Nagar Colony',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Indrapuri Colony',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Industrial Estate',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Jagannathpur',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Jai Prakash Nagar',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Jawahar Nagar',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Kadru',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Kali Nagar',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Kalyanpur',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Kanchnatoli',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Kanke',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Kanke Chowk',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Kanke Road',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Kantatoli',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Karam Toli Chowk',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Kathalkocha',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Kathartoli',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Kishoreganj',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Kokar',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Kumhartoli',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Kusai',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Kutchery Road',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'L N Mishra Colony',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Lalpur',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Lalpur Chowk',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Latma Road',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Maharatoli',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Main Road',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Masibari',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Morabadi',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Nagra Toli',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Namkum',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Nayatoli',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'New Alkapuri',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'New Barhi Toli',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'New SBI Colony',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'NH -23',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'NH 33',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Old A G Colony',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Pahartoli',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Panchsheel Colony',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Patel Nagar',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Pathalkudwa',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Patratoli',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Pithiyatil',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Prem Nagar',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Pundag',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Purulia Road',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Radium Road',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Ramgarh Cantt',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Rani Bagan',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Ratu',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Ratu Road',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Ring Road',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Rishabh Nagar',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Samlong',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Shanti Nagar',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Shri Krishna Nagar Colony',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Shukla Colony',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Simlia',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Singh More',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Siram Toli Chowk',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Tiril',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Tongritoli',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Tupudana',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Upper Bazaar',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Upper Chutia',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Vikash Nagar',
        location: 'Ranchi',
        status: true,
      },
      {
        title: 'Adhartal',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Agasaud',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Amahinota',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Amkhera',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Archha',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Badkheda',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Baghraji',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Bai Ka Bagicha',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Barbati',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Barela',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Bargi Ipc',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Bargi Nagar',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Bargi',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Baroda',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Baroda Chhedi',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Belkhadu',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Bheraghat',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Bilhari',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Chargawan',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Chhartarpur',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Dehri Khurd',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Deori Patpara',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Dhanpuri',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Dhanwahi',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Dharampura',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Dixitpura',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Engineering College (jabalpur)',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Gangai Badkheda',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Gangai Bijori',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Gangai Padaria',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Ganjipura',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Garha Bazar',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Garha Phatak',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Garha (jabalpur)',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Gauraiyaghat',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Ghat Piparia',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Gohalpur',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Gokulpur',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Gun Shop',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Gupteshwar',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Gurandi Bazar',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Gwarighat',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'H.r.lines',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Hanumantal',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Harrai',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Hathital',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'High Court (jabalpur)',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Hinotia Bhoi',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Howbagh',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'I.t.i.',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Imlai',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Jabalpur Cantt',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Jabalpur City',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Jabalpur Factory',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Jeewan Bima Nigam',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Jonesganj',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Kailwas',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Kaladehi',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Kaladumar',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Kamala Nehru Nagar',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Kanchanpur (jabalpur)',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Karmeta',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Kasturba Nagar (jabalpur)',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Khajri',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Khamaria Market',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Khamaria Neemkheda',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Khamaria (jabalpur)',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Khirahani',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Khukkham',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Kutchery (jabalpur)',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Lac Lines',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Lamheta Ghat',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Lordganj',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Luhkari',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Maharajpur',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Majhita',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Mangela',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Medical College (jabalpur)',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Miloniganj',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Mohas',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Motinala',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Nagar Nigam',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Napier Lines',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Napier Town',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Nichi',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Nigri',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Pachkuiyan',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Padaria',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Padwar',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Panagar (jabalpur)',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Perfect Pottories',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Pindrai Barha',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Piparia',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Polipahar',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Prem Nagar (jabalpur)',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'R.f.r.c.',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Raipura',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Ranjhi Azad Nagar',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Ranjhi',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Reewan',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Regimental Bazar',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Richhai',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Roberts Line (jabalpur)',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Sagada Jhapni',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Sahajpuri',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Sarsawa',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Sarswati Vihar',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Shobhapur',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Simaria',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Singod',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Sonpur',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Subhas Nagar',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Sukha',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Sukha Bharatpur',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Sukri',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Sundarpur',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'T.t.c.',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Telegraph Work Shop',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Temarbhita',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Tilsani',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Tilwara Ghat',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Tinsi',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Tripuri',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Umaria Choubey',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Umaria Kudari',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Umaria Pathra',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Vehicle Factory',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Vidyut Nagar (jabalpur)',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Vijay Nagar Colony (jabalpur)',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Wright Town',
        location: 'Jabalpur',
        status: true,
      },
      {
        title: 'Adupura Khalsa',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Adupurajagir',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Agrabhatpura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Ajaypur',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Akbarpur',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Alinagar',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Amai',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Amargarh',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Antri',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Ari',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Aroli',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Aron',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Arora',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Arroli',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Badagaon',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Badagaonjagir',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Baderafutkar',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Badkagaon',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Badori',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Bagwalagaon',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Bahadurpur',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Bahangikalan',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Bahangikhurd',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Banarpura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Bandha',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Bandholi',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Banheri',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Barahana',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Barai',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Baraipura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Baraj-Kalan',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Baraua Nurabad',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Barauapichhore',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Baretha',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Basota',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Bastari',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Behat',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Behata',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Bela',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Benipura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Berja',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Berkheda',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Bhadroli',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Bhatpura Sani',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Bhatpura(Brahman)',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Bhavanpura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Bhaypura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Bhelakalan',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Bhelakhurd',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Bhonderi',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Bhoreshwar',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Bijoli',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Bilara',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Bilheti',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Bilpura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Birampura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Bithauli',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Cakrampur',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Chait',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Chak Girvai No. 1',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Chak Keshopur',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Chakmaharajpur',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Chaksonpura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Chandoha Khurd',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Chandpura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Chandupura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Changora',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Chaproli',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Charaidang',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Charaipilkhana',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Charairehanta',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Chhikari',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Chhonda',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Chhondi',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Chui(1981=Chuhi)',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Dabka',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Dagrau',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Dangguthina',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Dangiyapura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Dangora',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Dayeli',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Dhaneli',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Dhanwai',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Dhuwan',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Domtorkhalsa',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Domtormafi',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Dongarpur Tal',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Dorar',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Dugnawali',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Duhiya',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Dundapura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Dursedi',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Dwarkaganj',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Fusawali',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Gadroli',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Gajipura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Ganeshpura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Gangapur',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Ganpatpura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Ghatigaon (Barai)',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Ghatwasini',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Ghegholi',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Ghusgawan',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Girgaw',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Girvai',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Gowai',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Gundhara',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Gunjna',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Gurja',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Gurri',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Guthina',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Gwalior',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Habipura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Harjanpura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Harpura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Hastanapur',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Himapura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Hiri',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Hukamgarh',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Ikehara',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Ikona',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Jadidrai',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Jagupura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Jahangirpur',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Jakhara',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Jakhoda',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Jakhodi',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Jamahar',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Jamroha',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Jarga',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Jebra',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Jiganiya',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Jigsoli',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Jinawali',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Jindpura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Jiraina',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Jlalpur',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Jugrupur',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Kaimpura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Kaitha',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Kakrari',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Kalawah',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Karahi [Karai]',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Karigawan',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Kemari',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Keriya Pdyapur',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Khargu Kheda',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Kheda',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Khedi',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Kheriya Bhat',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Kheriya Kachhai',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Kheriya Keshar',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Kheriya Kuleth',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Kheriya Mirdha',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Kheriya Modi',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Kheriya Mritya',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Khitera',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Khodupura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Khudawali',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Khureri',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Kiat',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Kirawali',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Kotaviran',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Kripalpur',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Kui',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Kuleth',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Kushrajpur',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Kuwrpur',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Laduapura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Lakhanpura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Lakhapura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Lakhnotikalan',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Lakhnotikhurd',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Laxmangarh',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Londra',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Luharpura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Madanpur',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Madha',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Maharajpura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Maharampura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Maheshwara',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Mahua Kheda',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Maithana',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Malnpur',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Mangupura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Manpur Arroli',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Manpur [Kakrari]',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Mau',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Mehadpur',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Mehroli',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Milawali',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Mircha',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Mohana',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Mohnpur (Murar)',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Morar Cantt',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Mugalpura',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Mukhtyarpur',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Nagdha',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Nagor',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Nainagiri',
        location: 'Gwalior',
        status: true,
      },
      {
        title: 'Amritanagar',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Arisipalayam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Bodipalayam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Cbe Mpl.central Busstand',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Chettipalayam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Coimbatore Aerodrome',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Coimbatore Bazaar',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Coimbatore Central',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Coimbatore Collectorate',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Coimbatore Courts',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Coimbatore Fort',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Coimbatore',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Coimbatore Industrial Estate',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Coimbatore Racecourse',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Coimbatore Ukkadam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Coimbatore West',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Commercial Tax Office Building',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Devarayapuram',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Eachanari',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Edayapalayam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Elur',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Ettimadai',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Gandhimaanagar',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Gandhipuram (coimbatore)',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Ganesapuram',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Govt.college Of Technology',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Ikkarai Boluvampatti',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Jakkirnaickenpalayam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Kalampalayam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Kalapatti',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Kallapalayam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Kandegounden Salai',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Komarapalayam Coimbatore',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Konavaikalpalayam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Kovaipudur',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Krishnaswamy Nagar',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Kumittipathi',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Kuniamuthur',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Kuppanur',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Kurumbapalayam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Lawley Road',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Madampatti',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Madhvarayapuram',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Madukkarai Cusba',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Madukkarai',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Masthigoundenpathi',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Meenakshipuram',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Mylampatti',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Myleripalayam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Nanjundapuram',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Narasipuram',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Neelikonampalayam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Nilambur',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Odayampalayam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Ondipudur',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Othakkalmandapam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Palathurai',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Panapatti',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Pappampatti',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Pappanaickenpalayam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Pappanaickenpalayam West',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Peedampalli',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Peelamedu East',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Peelamedu',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Periyakuyilai',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Perur Chettipalayam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Perur (coimbatore)',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Pichanur',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Podanur Newtown',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Podanur',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Ponnegoundenpudur',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Puliyakulam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'R.s.puram East',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'R.s.puram South',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'R.s.puram West',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Ramanathapuram Coimbatore',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Ramnagar Coimbatore',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Rathinasabapathy Puram',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Redfields',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'S.b.institute',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Saravanampatti',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Sarkarsamakulam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Siddhapudur',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Singanallur',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Sinnanavakkarai',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Sinniampalayam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Sowripalayam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Sugunapuram',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Sukrawarpettai',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Sundarapuram',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Tatabad',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Telungupalayam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Thennamanallur',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Thirumalayampalayam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Thondamuthur',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Titipalayam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Uppilipalayam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Vaiyampalayam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Valukkuparai',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Vedapatti',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Veerakeralam',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Vellalapalayam Podanur',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Vellalore',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Venkitapuram',
        location: 'Coimbatore',
        status: true,
      },
      {
        title: 'Ajit Singh Nagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Arul Nagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Ashok Nagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Auto Nagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Ayodhya Nagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Ayyappa Nagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Bandar Road',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Bapanayyanagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Bavajipet',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Benz Circle',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Bhagat Singh Nagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Bharathi Nagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Bhavanipuram',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Bhimannavaripeta',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Bramanadha Reddy Nagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Canal Road',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Chalasani Nagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Chittinagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Chowdhary Pet',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Christurajupuram',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Currency Nagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Devi Nagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Durga Agraharam',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Enikepadu',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Fakirgudem',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Fraserpeta',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Gayatri Nagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Gollapudi',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Governorpet',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Gunadala',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Hanumanpet',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Jojinagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Kaleswara Rao Market',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Kamayyathopu',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Kanuru',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Krishnalanka',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Labbipeta',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'LEPL Icon',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'LIC Colony',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Lurdhunagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Mallikarjunapeta',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Milk Colony',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Moghalrajpuram',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Mylavaram Vari Street',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Nehru Nagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'New Rajarajeswaripeta',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'NH-9',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Nidamanuru',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Patamata',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Payakapuram',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'PNT Colony',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Poranki',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Ramalingeswara Nagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Ramarajunagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Ramavarapupadu',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Ranga Nagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Ranigaritota',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'RR Nagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'RTC Colony',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Sanath Nagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Satyanarayanapuram Main Road',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Satyaranayana Puram',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Sidhartha Nagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Sri Ramachandra Nagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Sriram Nagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Stata Bank Colony',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Station Road',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Surya Rao Peta',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Tadigadapa Main Road',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Tarapet',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Tulasi Nagar',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Vambay Colony',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Vidhyadharpuram',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Vinchipeta',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Yanamalakuduru',
        location: 'Vijayawada',
        status: true,
      },
      {
        title: 'Adarsh Nagar',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Air Force Area',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Ajit Colony',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Ashapurna Nagar',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Baldev Nagar',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Basni',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Bhagat Ki Kothi',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Brigadier Zabar Singh Colony',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Chopasni Housing Board',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Circuit House Road',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Dilip Nagar Colony',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Gopal Bari',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Heavy Industrial Area Phase II',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Jwala Vihar',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Kabir Nagar',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Kamla Nehru Nagar',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Khema-Ka-Kuwa',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Krishna Nagar',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Kudi Bhagatasni Housing Board Colony',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Laxmi Nagar',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Madhuban Colony',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Mahadev Nagar',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Mahaveer Colony',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Meera Nagar',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Milkman Colony',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Pal',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Pal Link Road',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Pal Road',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Paota',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Parsvnath City',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Pratap Nagar',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Prem Vihar',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'PWD Colony',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Ratanada',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Ravit',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Rawaton Ka Bass',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Salawas Road',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Sangaria Industrial Area',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Saran Nagar',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Saraswati Nagar',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Sardarpura',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Shastri Nagar',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Shyam Nagar',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Sindhi Colony',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Sirodi',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Subhash Nagar',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Sur Sagar',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Surya Colony',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: 'Vayu Vihar',
        location: 'Jodhpur',
        status: true,
      },
      {
        title: '80 Feet Road',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Alagappan Nagar',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Alagar Kavil Road',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Amman Sannathi Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Anaiyur',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Andalpuram',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Anna Nagar',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Anuppanadi',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Arappalayam',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Arasaradi',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Avaniyapuram',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Bibikulam',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Bypass Road',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Chinna Chokkikulam',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Chokikulam',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Dhanappa Mudali Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'East Avani Moola Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'East Marret Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'East Masi Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'East Veli Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Ellis Nagar',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Gandhi Nagar',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Gnanavolivupuram',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Goripalayam',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Jaihindpuram',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'K.K. Nagar',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'K.Pudur',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Kaka Thoppu Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Kalavasal',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Kamarajar Salai',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Kansamettu Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Kochadai',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Kodikulam',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Koodal Nagar',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Krishnapuram Colony',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Krishnarayar Tank Road',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Lakshmipuram',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Mahaboopalayam',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Manjanakara Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Mattuthavani',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Melakkal Road',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Melur Road',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Munichalai Road',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Naicker New Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Narayanapuram',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Narimedu',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Nethaji Road',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'New Mahalipatti Road',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'New Natham Road',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'North Chitrai Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'North Masi Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'North Veli Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Othakadai',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Palace Road',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Palanganatham',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Pasumalai',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Ponmeni',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'PT Rajan Road',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'S S Colony',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Sathya Sai Nagar',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Sellur',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Sellur Road',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Shenoy Nagar',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Simmakkal',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'South Avani Moola Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'South Gate',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'South Marret Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'South Masi Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'South Veli Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'SS Colony',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Subramaniapuram',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Surya Nagar',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Tallakulam',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Tamil Sangam Road',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Theni Main Road',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Town Hall Road',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'TPK Road',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'TVS Nagar',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Uthangudi',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Vakkil New Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Velmurugan Nagar',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Vengalakadai Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Vilangudi',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Villapuram',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Virattipathu',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Visalakshipuram Main Road',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Vishwanathapuram',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'West Avani Moola Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'West Masi Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'West Perumal Maistry Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'West Tower Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'West Vadampokki Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'West Veli Street',
        location: 'Madurai',
        status: true,
      },
      {
        title: 'Achholi-2 (Achholi)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Akoli-1(Akoli)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Akoli-2 (Akoli)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Ama Seoni',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Amlidih',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Atari',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Bahesar-2 (Bahesar)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Bana-2 (Bana)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Baratnara',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Barauda',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Barbanda',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Bendri-1 (Bendri)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Bhaismuda',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Bhatagaon',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Bhatgaon-1 (Bhatgaon)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Bherawa',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Bhurkoni',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Birgaon',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Boria Kalan',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Boria Khurd',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Borjhara',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Chandanidih',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Charoda-1 (Charoda)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Chhapora',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Chikhali-2 (Chikhali)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Daldal Seoni',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Datrenga',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Deopuri',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Deori-2 (Deori)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Dhaneli-1 Dhaneli)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Dhaneli-2 (Dhaneli)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Dharampura',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Dharsiwa',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Doma-1 (Doma)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Donde Kalan',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Donde Khurd',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Dumartarai',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Dunda',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Fundahar (Fundhar)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Gidhauri',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Giraud',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Godhi-2 (Godhi)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Gogaon',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Gomachi',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Gondwara',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Guma-2 (Guma)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Hatband',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Jarauda',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Jarway Alias Hirapur',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Jora',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Kachana',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Kandul',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Kanhera (Kanheri)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Kapsada',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Kara',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Kathadih (Kanthathi)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Kukera',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Kumhari-1 (Kumhari)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Kunra (Kura)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Kutharail (Kuthrel)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Labhandih',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Lalpur',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Malaud',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Mana',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Mandhar',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Mangasa',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Manhora',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Matiya',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Mauhagaon',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Mehar Sakha',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Mohadi-1 (Mahadi)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Mujgahan',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Munrethi-2 (Munrethi)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Murra',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Nagargaon',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Nakati',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Neurdih',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Nilja',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Nimora -1 (Nimora)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Padar Bhattha',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Parastarai',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Pathari(Pathari Khudmud',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Patharidih',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Pauni',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Pirda-2 (Pirda)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Raipur',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Raita',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Rawabhatha',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Sankara',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Sankari -3 (Sakari)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Saragaon',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Sardhoo (Sardhu)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Sarona',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Sarora',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Sejbahar',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Serikhedi',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Siltara',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Silyari Kurud',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Sondongari',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Sondra',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Tanda',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Taresar',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Tarra-1',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Tekari-2 (Tekari)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Temri',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Tendua-1',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Tikrapara (Lalpur)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Tiwaraiya',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Tor',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Tulsi -2 (Tulsi)',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Urkura',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Urla',
        location: 'Raipuri',
        status: true,
      },
      {
        title: 'Abhaipur',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Akhawa',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Alniya',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Ama Ka Pani',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Amarpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Arampura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Arand Khera',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Aranya',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Arlya Jageer',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bachhriya',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bakshpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Balapura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Baniyani',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Baori Khera',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Barodiya',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Beel Kheri',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bhagwanpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bhagwanpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bhanwariya',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bheenlot',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bhimpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bhojpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Borabas',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Boriyakheri',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Borkui',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Brajeshpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bugchach Kalan',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bugchach Khurd',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Chaipura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Chand Baori',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Chandresal',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Charan Heri',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Chareenda',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Chhatrapura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Chhipan Heri',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Chorda',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Dadwara',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Dahra',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Damodarpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Daulatpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Deeppura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Deolimachhiyan',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Deopura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Dhani',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Dobara',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Dohnya',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Dolya',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Galana',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Gandi Phali',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Ganeshpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Gangaycha',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Gaonri',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Ghaghtana',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Ghodon Ka Gaon',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Girdharpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Godalyaheri',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Gopalpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Hanotya',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Haripura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Haripura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Hirapur',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Indrapura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Jakhora',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Jalkhera',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Jamoonya',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Jampura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Jaspura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Jhamra',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Jheetiya @ Ramnagar',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Jodhpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Kadihera',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Kaithoon (M)',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Kalya Kheri',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Kanwarpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Kasar',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Keetalhera',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Keshopura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Kethori',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Kewal Nagar',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Khangarpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Khanpuriya',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Kharli Baori',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Khera',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Kherli Pande',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Kishanpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Kishanpura Kaithoon',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Kishanpura Takiya',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Kolana @ Laxmipura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Kolipura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Kota (M Corp.)',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Kotbaori',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Kothala',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Ladpura Kaithoon',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Laxmipura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Manasgaon',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Mandalya',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Mandana',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Mandirgarh',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Manpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Mawasa',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Mohan Pura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Morpa',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Motipura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Motipura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Mukundpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Nagpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Narayanpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Nayagaon',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Nechalpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Neemkhera',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Neemkheri',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Notana',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Pachankui',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Pachpahar',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Padampura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Parlya',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Peepal Heri',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Phata Khera',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Pipalda Shekhan',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Prahladpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Prithvipura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Rajpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Ram Kherli',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Ramnagar',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Ramrajpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Rangpur',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Ranipura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Ranwatha',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Rasoolpur',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Ratariya',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Rel',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Renkyakheri',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Rojhala',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Rooparel',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Rooppura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Rooppura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Sabalpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Sarangpur',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Seemalheri',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Shankarpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Shyampura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Shyodanpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Singh Pura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Sohan Pura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Tather',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Tholanpur',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Tholpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Udpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Ummedpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Ummedpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Vijaipura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Zalimpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Achalgarh',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Adagela @ Haripura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Amalda',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Amarpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Aranya',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Asida',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Ayana',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Ayani',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bagawada',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bagli',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Baijpur',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Balupa',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bambooliya Ghata',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bambooliya Kalan',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bambooliya Khurd',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bambooliya Khurda',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bangrod',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Banjari',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Barodiya',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Baroli',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Beeroda',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bhainroopura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bhairoopura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bhawanipura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bhopalganj',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bijawata',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Binayaka',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bishanpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Bislai',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Borda',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Chak Guwari',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Chak Kakawata',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Chak Kherli',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Chak Kherli Pema',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Chak Tori',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Chanda',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Chhapol',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Chhatra Pura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Chhatra Pura @ Kumhariya',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Chyawada',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Dadwara',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Daulatpura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Delod',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Deo Neemri',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Deopura',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Dhanwan',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Dheedhora',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Dheepri ( Kalisindh)',
        location: 'Kota',
        status: true,
      },
      {
        title: 'Ajanta Path',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Ananda Nagar',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Ashok Path',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Azara',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Baghorbori Tiniali',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Bamunimaidan',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Basistha Chariali',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Beharbari Chariali',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Beltola',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Beltola Tiniali',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Bhangagarh',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Bharalumukh',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Bhetapara',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Bhetapara - Ghoramara Road',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Bhubaneswar Barua Road',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Bishnu Rabha Path',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Borbari',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Borjhar',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Chandmari',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Chatribari',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Chenikuthi',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Christian Basti',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Dharapur',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Dispur',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Dr Bhabendra Nath Saikia Path',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Fatasil bazaar',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Gandhi Basti',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Ganesh Mandir Road',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Ganeshguri',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Garchuk',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Geetanagar',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'GS Road',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Guwahati-Shillong Road',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Hatigaon',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Hengerabari',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Jalukbari',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Jalukbari',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Japorigog',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Jayanagar Road',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Jorpukhuri',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Juripar Path',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Jyotinagar Road',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Kahi Kuchi',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Kahilipara',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Kala Pahar',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Kedar Road',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Khanapara',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Kharghuli Hills',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'KK Road',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Lakhimi Nagar',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Lal Ganesh',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Lokhra',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Lokhra Road',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Maligaon',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Manik Nagar',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Mother Teresa Road',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Narengi Tinali',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Narikalbasti',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'NH-37',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Noonmati',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Panjabari',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Pator Kuchi',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'PNGB Road',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Rajgarh',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Rehabari',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Rehabari',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'RG Baruah Road',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Rukmini Gaon',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Rukmininagar',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Rupnagar Road',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Sachal Road',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Sewali Path',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Silpukhuri',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Silpukhuri',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Six Mile',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Sreenagar',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Tarun Nagar',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Ulubari',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Uzan Bazaar',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'VIP Road',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Zoo Narengi Road',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Zoo Road',
        location: 'Guwahati',
        status: true,
      },
      {
        title: 'Aerodrome (Sector-47)',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Bair Majra',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Behlana',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Burail ?',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Chandigarh High Ground',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Dadu Majra',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Daria',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Dhanas',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Hallo Majra',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Indl. Area (Sector-28)',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Jhumaroo',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Kaimbwala',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Khuda Alisher',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Khuda Jassu',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Kujheri',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Lahora',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Maloya',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Mani Majra (R)',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Mani Mazra',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Mauli Jagran',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'New Sectt. (Sector 1,2,3,4)',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Nizampur Burail',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Nizampur Kumbra',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Palsaura',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Raipur Kalan',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Raipur Khurd',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Sarangpur',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'SAS Nagar Mohali',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Sector 10',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Sector 11',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Sector 12',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Sector 13',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Sector 14',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Sector 15',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Sector 16',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Sector 17',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Sector 18',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Sector 19',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Sector 20',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Sector 22',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Sector 23',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Sector 26',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Sector 31',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Sector 36',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Sector 47, 31',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Sector 59',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Sector 61',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Sector 8',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Shahpur',
        location: 'Chandigarh',
        status: true,
      },
      {
        title: 'Ambalamukku',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Ambalathara',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Anayara',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Aramada',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Attakulangara',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Attukkal',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Beemapally',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Cgo Complex Poonkulam',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Chakkai',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Channamkara',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Chempazhanthy',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Cheruvikkal',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Chittattumukku',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Cotton Hill',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Industrial Estate (thiruvananthapuram)',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Jagathy',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Kaimanam',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Kaithamukku',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Kalliyoor',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Kaniyapuram',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Kanjirampara',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Karakulam',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Karamana',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Karikkakom',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Karimanal',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Karumom',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Karyavattom',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Kattachalkuzhy',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Kattaikonam',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Kaudiar',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Kaudiar Square',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Kazhakuttam',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Keezhavur',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Kerala Governors Camp',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Kodunganur',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Koithurkonam',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Kovalam Beach',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Kovalam (thiruvananthapuram)',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Kudappanakunnu',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Kulathur (thiruvananthapuram)',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Kuttichal',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Manacaud',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Manikanteswaram',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Manjamala',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Melvettoor',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Mg College',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Mukkolackal',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Mulakkalathukavu',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Murukumpuzhaa',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Muttada',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Muttakadu',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Nalanchira',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Nellivila',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Nemom',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Nethajipuram',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Nettayam',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Ookode',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Pachallur',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Palkulangara',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Pallichal',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Pallipuram (thiruvananthapuram)',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Pallithura',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Pangappara',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Pappanamcode',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Pattom Palace',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Peringamala',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Perurkada',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Peyad',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Pmg Jn',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Poojapura',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Poojapura Junction',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Poonthura',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Pothencode',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Prasanth Nagar',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Ptp Nagar',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Public Office (thiruvananthapuram)',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Puthencurichy',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Puthenthope',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Sainik School (thiruvananthapuram)',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Santhigiri',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Sasthamangalam',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Sreekaryam',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'St.xavier College',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Thamalam',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Thiruvallom',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Thiruvananthapuram Ags',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Thiruvananthapuram Beach',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Thiruvananthapuram Chalai',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Thiruvananthapuram Engg College',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Thiruvananthapuram Fort',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Thiruvananthapuram Govt Press',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Thiruvananthapuram Isro',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Thiruvananthapuram Medical College',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Thiruvananthapuram Pettah',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Thiruvananthapuram University',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Thiruvananthapuram G.p.o.',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Thonnakkal',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Thope',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Thundathil',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Thuruvikkal',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Thycaud',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Tirumala (thiruvananthapuram)',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Titanium',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Tvm R.k Mission',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Ulloor',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Valiathura',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Valiaveli',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Valiavila',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Vallakkadavoo',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Vanchiyoor Junction',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Vanchiyur',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Vattappara',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Vattiyoorkavu',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Vellayani',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Vikas Bhavan',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Vizhinjam',
        location: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Antroli',
        location: 'Solapur',
        status: true,
      },
      {
        title: 'Arali',
        location: 'Solapur',
        status: true,
      },
      {
        title: 'Auj',
        location: 'Solapur',
        status: true,
      },
      {
        title: 'Boramani',
        location: 'Solapur',
        status: true,
      },
      {
        title: 'Darganhalli',
        location: 'Solapur',
        status: true,
      },
      {
        title: 'Alagarai',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Tiruchirappalli',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Appanallur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Arangoor',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Arasalur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Chinnapallipalayam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Elurpatti',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Kaduvetti',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Kamalapuram',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Kattuputhur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Kattuputtur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Kidaram',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Kolakudi',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'M.Kalathur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'M.Puthur (Musiri)',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Manamedu',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Mullipadi',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Murungai',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Nagayanallur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Natham',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Periapallipalayam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Pidaramangalam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Seelaipillayarputhur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Srinivasanallur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Sriramasamudram',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Thirunarayanapuram',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Tholurpatti',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Thottiyam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Unniyur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Valveluthur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Abinimangalam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Amoor',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Anjalam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Arachi',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Ayyampalayam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Devanur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Evur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Gunaseelam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Jambumadai',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Jeyankondam (T.Puthur)',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Kamatchipatti',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Karattampatti',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Kargudi',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Karikali',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Kattukulam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Kodunthurai',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Komangalam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Konappampatti',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Kottathur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'M.Pudupatti East',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'M.Pudupatti West',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Mahadevi',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Mangalam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Manparai',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Mavilipatti',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Mettupalayam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Moovanur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Mooveli I',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Musiri',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Muthampatti',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Neiveli',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Paithambarai',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Peramangalam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Perur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Pillapalayam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Poolancheri',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Pulivalam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Puthanampatti',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Savanthilingapuram',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Serugudi',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Sithambur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Sittilavai',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Soorampatti',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Sukkampatti',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'T.Puthur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Thathaiyangarpet',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Thinnakonam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Thinnanur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Thiruthalaiyur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Thiruthiamalai',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Thulayanatham',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Thumbalam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Thuraiyur pudupatti',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Umaiyalpuram',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Urakkarai',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Vadamalaipatti',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Valaiyeduppu',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Valasiramani',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Valavandhi (West)',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Valavandhi East',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Vellur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Vengaimandalam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Adanur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Alagapuri',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Alathudaiyanpatti',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Ammapatti',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Baderpettai',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Balakrishnampatti',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Chokkanathapuram',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Eragudi North',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Eragudi South',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Kalingamudayanpatti',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Kamachipuram',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Kannanur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Karapudaiyampatti',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Keerambur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Koittapalayam (West)',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Kollapatti',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Kombai',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Koppamapuri',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Koppampatti',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Kottaiyur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Maruvathur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Murugur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Muthiampalayam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Naduvalur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Nagalapuram',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Okkarai',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Osarapalli',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Pachaperumal patti South',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Pachaperumalpatti North',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Pagalavadi',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Pasari kombai',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Poonnusangampatti',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Puliyansolaikombai',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Rudrakshakombai',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Senappanallur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Sengampatti kombai Bit I',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Sengampatti kombai Bit II',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Sengattupatti',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Sikkathambur South',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Sikkathambur North',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Singalandapuram',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Siruganatham',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Sirunavalur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Sobanapuram',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Sukkalampatti Kombai',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'T. Renganathapuram',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Talugai',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Thenparanadu',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Thuraiyur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Uppiliapuram',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Uppiliapuram South',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Vadakkuveli',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Vairichettipalayam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Vannadu',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Veeramachanpatti',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Vengadathanur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Venkatachalapuram',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Venkatesapuram',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Visalakshiammal Samudram',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Alagiyamanavalam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Ayikudi',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Ayyampalayam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Edumalai',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Irungalur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Kalpalayam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Kariyamanickam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Kariyamanickam (East)',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Kariyamanickam (West)',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Killiyanallur (North)',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Killiyanallur (South)',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Konalai',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Koothur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Kovathakudi',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Madavarperumalkovil',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Manachanallur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Melpathu',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Omandhur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Palaiyur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Perakambi',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Pichandarkovil',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Poonampalayam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Rajampalayam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'S. Kannanur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Samayapuram',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Seedevimangalam (North)',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Seedevimangalam (South)',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Shanamangalam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Siruganur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Sirugudi',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Siruppathur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Solanganallur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Thathamangalam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Theerampalayam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Thiruppangali (North)',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Thiruppangali (South)',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Thiruppattur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Thiruvallarai',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Thiruvasi',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Valaiyur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Vazhaiyur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Vengangudi',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Adikudi',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Alambadi',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Alambakkam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Alangudimahajanam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Angarai',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Appadurai',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Ariyur',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Edangimangalam',
        location: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Elavanthi',
        location: 'Tiruppur',
        status: true,
      },
      {
        title: 'Iduvoi',
        location: 'Tiruppur',
        status: true,
      },
      {
        title: 'Ittiveerampalayam',
        location: 'Tiruppur',
        status: true,
      },
      {
        title: 'Kannakkampalayam',
        location: 'Tiruppur',
        status: true,
      },
      {
        title: 'Kathankanni',
        location: 'Tiruppur',
        status: true,
      },
      {
        title: 'Katturpalldam',
        location: 'Tiruppur',
        status: true,
      },
      {
        title: 'Mannarai',
        location: 'Tiruppur',
        status: true,
      },
      {
        title: 'Mudalipalayam',
        location: 'Tiruppur',
        status: true,
      },
      {
        title: 'Muthanampalayam',
        location: 'Tiruppur',
        status: true,
      },
      {
        title: 'Nachipalayam',
        location: 'Tiruppur',
        status: true,
      },
      {
        title: 'Perumanallur',
        location: 'Tiruppur',
        status: true,
      },
      {
        title: 'Pongupalayam',
        location: 'Tiruppur',
        status: true,
      },
      {
        title: 'Tirupur',
        location: 'Tiruppur',
        status: true,
      },
      {
        title: 'Vavipalayam',
        location: 'Tiruppur',
        status: true,
      },
      {
        title: 'Ababakpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Adalpur Jogi Siniali',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Adampur Urf Ughapur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Adaunagli',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Ahemadpur Nigo Nagala',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Ahmadpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Ahraula',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Akbarpur Chahdauri',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Akbarpur Sihali',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Akka Bhikanpur Mustahkam',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Akka Panday Bhojpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Alipura Khalsa',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Alipura Mazra Kui',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Anwla Ghat',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Anyari Urf Alinagar',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Asgaripur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Ataria',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Avihafizpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Azdahapur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Badhpura Mazra Kuri',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bagadpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bagiya Sagar',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bahdurpur Patti',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Baheri',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bahoranpur Kalan',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bahoranpur Majra Kuri',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bairampur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bakania',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Barahi Lalpur Ahatmali',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Barahi Lalpur Mustahkam',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Barhpura Mazra Mahespur Khem',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Baripur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Barkhera Basantpur Urf Dayanat',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Barodi Beeran',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Baru Bhura',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Barudi Phatehullapur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Barwara Khas Mustahkam',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Barwara Mazra',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Basantpur Ramrai',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bazidpur Tigri',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Begampur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Belwara',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Berkhera Chak',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bhadasana',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bhagatpur Ratan',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bhagtpur Tanda',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bhainsla',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bhainsli Jamalpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bhaipur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bhaiya Nagla',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bhalpura Kheraya',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bhanakwa',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bhankari',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bhanpur Gajraula',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bhatgawan',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bhawanipur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bhensia',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bhikampur Asdalpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bhit Khera',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bhojpur Dharampur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bibipur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bijna',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bikanpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bilakudan',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bilawala Ahatmali',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bilawala Mustahkam',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bina Wala',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Birpur Baryan Urf Kharag',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Birpur Fatehullapur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Birpur Than',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bisahat Jaitpura',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Budanpur Bilayatnagar',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Budhanpur Khalsa',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bujhpur Asha',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Bujpur Maan',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Burhanpur Ahatmali',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Burhanpur Mustahkam',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Chajjupura Doyam',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Chak Gindora',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Chak Hafeezpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Chak Hamidpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Chak Jogwali',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Chak Lohra',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Chak Mewla Dhas',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Chak Shaikriya Urf Kheria',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Chakarpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Chamarpur Dan',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Chamraua',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Chand Kheri',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Chandanpur Isapur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Chandpur Mustahkam',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Changeri',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Chatarpur Nakta Khera',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Chaturpur Naik',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Chaudharpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Chendri Akbarpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Chhajju Nagla',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Chhajlet',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Chuha Nagla',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Dadupur Paindapur Mustahkam',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Dagarpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Dalpatpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Dalpuri Bamania Mustahkam',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Dandi Durjan',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Dari Mahmoodpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Daulara',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Daulari',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Daulatpur Azamatpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Dehra Nikat Umri',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Dehri Ahatmali',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Dehri Jumman',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Devapur Mustahkam',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Devipur Mustahkam',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Dhaki',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Dhanupura',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Dharampur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Dharmpur Urf Loharpura',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Dhatura Megha Nagla Mustahkam',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Didaura',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Didauri',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Dilari',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Dilra Raipur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Dudela',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Dulapur Near Changeri',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Dumela Khalsa',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Dupera',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Emaratpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Faindapur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Faleda Eshapur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Fatehpur Bisnoi',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Fazlabad',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Felra Patti',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Firozpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Gadai Khera',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Gadhi',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Gajgola Nanak Bari',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Ganesh Ghat Ahatmali',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Ganesh Ghat Mustahkam',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Ganeshpur Devi Mustahkam',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Gannor Deya Mafi',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Gataura',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Ghaunda Ahatmali',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Ghaunda Mustahkam',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Ghosipur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Ghosipura Babupura',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Gilpura',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Gindora',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Godhi',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Goharpur Sultanpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Golapanday Urf Saindlipur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Gopalpur Natthanagla Urf Kukar',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Got',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Goverdhanpur Mustahkam',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Govindpur Gyanpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Govindpur Kalan',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Govindpur Khurd',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Guladia',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Gunga Nagla',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Guretha',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Gyanpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Hala Nagla',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Hamirpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Hari Noorpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Harsenpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Hasanganj',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Hashampur Gopal',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Hassu Nagala Urf Jassunagla',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Hathat',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Hiran Khera Ahatmali',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Hiran Khera Mustahkam',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Ilar Rasulabad',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Islampur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Islampur Rampura',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Jagatpur Ramrai Mustahkam',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Jagrampura',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Jahidpur Sikampur Mustahkam',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Jaitia Sadullapur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Jaitpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Jalpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Jamalpur Madi Nagla',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Jamania Khurd',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Jamniya Azam',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Jebara',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Jewadi',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Kachnal Ahatmali',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Kachnal Mustakim',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Kafiyabad',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Kaji Khera',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Kakarghata',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Kala Jhanda',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Kangani',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Kankar Khera',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Kanth',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Karanpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Karanpur Harikishanpur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Kariya Nagla Ahatmali',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Kariya Nagla Mustahkam',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Kariya Nagla Sani',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Kasampur',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Kera Khata',
        location: 'Moradabad',
        status: true,
      },
      {
        title: 'Alanahalli',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Anandur',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Ayyarahalli',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Bannimantap',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Belavadi',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Bogadi',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Brindavan Extension',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Chamundi Betta',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Chamundi Extension',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Daddakallahalli',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Danagalli',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Devalapura',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Doddakanya',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Doddamaragowdanahalli',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Doora',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Duddagere',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'G S Ashram',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Gokulam',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Gopalapura',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Gujjegowdanapura',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Gurur',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Hadajana',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Harohalli',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Hebbal Layout',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Infosys Campus',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Ittigegud',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Jaya Prakash Nagar',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Jayalakshmipuram (mysore)',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Jayanagar (mysore)',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Jayapura',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Kadakola',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Kallur Naganahalli',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Keelanapura',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Kergalli',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Koorgalli',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Krishna Raja Mohalla',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Krishna Rajendra Circle',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Krishnamurthypuram',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Kuvempunagar Ii Stage',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Kuvempunagar (mysore)',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Lakshmipuram (mysore)',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Lalithadripura',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Mallahalli',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Manasagangothri',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Mandakalli',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Mandimohalla',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Marballi',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Martikyathanahalli',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Metagalli',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Mydanahalli',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Mysore Fort',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Mysore',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Mysore Law Courts',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Mysore South',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Mysore University',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Naganahalli',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Nagawala',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Narasimha Raja Mohalla',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Note Mudran Nagar',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Ptc Campus',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Ramakrishna Nagar (mysore)',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Ramanahalli',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Rayanakere',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'S Hemmanahalli',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Saraswathipuram',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Shakthinagar',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Shivaraathreeswar Nagar',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Siddalingapura',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Siddarthanagar Nagar',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Sindhuvalli',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Someshwarapura',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Sri Rampura 2nd Stage',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Srirampura',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Taloor',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Udayagiri (mysore)',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Udbur',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'University Campus (mysore)',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Vajamangala',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Vani Vilas Mohalla',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Varakodu',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Varuna',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Vijaynagar Ii Stage',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Vijaynagar Iii Stage',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Yadakola',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Yadavagiri',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Yelwal',
        location: 'Mysore',
        status: true,
      },
      {
        title: 'Abheypur Camp',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Abdullapur Mafi',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Abheypur Keshonpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Adhkata Bunnyadi Begum',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Adhkata_Brahmnan',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Adlakhia',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Adoopura Jagir',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Ahladpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Aina',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Ainthpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Ajampur Mustaqil',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Akhtiarpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Alampur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Amlaunipur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Angori',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Asaram Rajpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Aspur Khubchand',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Aspur Pitam Rai',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Atakayasthan',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Atapatti Janubi',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Atapatti Shumali',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Babhia',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Badshah Nagar',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bahjuiya Jagir',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Baikunthapur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Balipur Ahmedpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Balla Kotha',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Balrau',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Banjaria Jagir',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Barehpura',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bareilly',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bari Nagla',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Barkapur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bebah',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Beerpur Maqrooqa',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Beerpur Urf Kasam Nager',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Behti Deh Jagir',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Benipur Sadat',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bhagnapur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bhagwanpur Dhimri',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bhagwanpur Thakuran Mustqil',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bhagwantapur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bhagwatipur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bhairpur Khajuria',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bhandaria',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bhandsar',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bhartapur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bhartaul',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bhikampur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bhindaulia',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bhjhia Janoobi',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bhjhia Shumali',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bhoji Pura',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bhoora',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bibia Pur Kayasthan',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bibiapur Chaudhry',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bichra Balkishanpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bilwa',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Birya Narainpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bithri Chainpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bohit',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Bukhara',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Chahar Nagla',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Chandpur Bichpuri',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Chaneta',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Chaneti',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Chathia Jagannath',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Chaubari Mustqil',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Chaupara Janubi',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Chaupara Shumali',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Chausanda',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Chawer',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Chena Murarpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Dabhora Khanjanpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Dahiya',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Dalpatpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Dandia',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Daspur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Dauli Raghuber Dayal',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Deoria Jagir',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Dhaneti Kharagpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Dhantiya',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Dharoopur Thakuran',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Dhaura Tanda',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Dhaurera Mafi',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Didar Patti',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Dogharia',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Dohara',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Dohna Pitam Rai',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Dubari',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Faridapur Barkalisaheb',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Faridapur Inayat Khan',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Faridapur Jagir',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Faridapur Ramcharan',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Fatehpur Durga Prasad',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Gajraula',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Garau',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Ghanghora Piparia',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Ghanghoua Ghanghori',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Ghunsa',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Ghur Shamashpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Girdharipur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Gokulpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Goonga',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Gopalpur Azizpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Gopalpur Nagaria Anoop',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Gujarhai Mustqil',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Gularia Riziqulanisan',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Gupalapur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Hadauria',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Haibatpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Hamirpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Harbanspur Urf Lachhmipur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Hardua',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Herherpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Ichoria',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Isapur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Ismailpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Itauwa Kedar Nath',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Itawa Beni Ram',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Itawa Sukhdevpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Jadaunpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Jafarpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Jagannathpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Jagatpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Jallapur Ram Dayal',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Jallapur Sobha Ram',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Janak Jagir',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Jatau Patti',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Jatawa',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Jhingri',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Jitaur Ethmali',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Jitaur Mustqil',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Jogither',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Kacholi',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Kakgaina',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Kalapur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Kalara',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Kalari',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Kamuan Kalan',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Kamuan Khurd',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Kamuan Maqrooqa',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Kandharpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Kanthri',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Karampur Chaudhary',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Karampur Thakuran',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Kareli',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Karonda',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Keeratpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Kesarpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Keshonpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Khai Khera',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Khajua Jagir',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Khajuhai Ethmali',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Khajuhai Mustqil',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Khajuria Brahmnan',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Khajuria Zulfiqar',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Khanpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Khatola Ganpat Rai',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Khatola Hulas Kunwer',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Khitausa',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Kiara Ehtmali',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Kiara Mustqil',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Kodhampur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Kohni',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Kuan Danda Dhimni',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Kuan Danda Kurmian',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Kumrah',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Kundra Mustqil',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Kunwerpur Banjaria',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Lad Pur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Lahiya',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Lakhampur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Lakhaura',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Lalpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Latoori',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Laxmipur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Lilauri',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Madhav Pur Mafi',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Maheshpur Shahimamuddin',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Maheshpur Shiv Singh',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Maheshpur Thakuran',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Mahgawan Urf Unchagaon',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Majhawa Gangapur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Majhola Sarv Sukhi',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Makrandpur Pitam Rai',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Mallahpur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Mallahpur Dunda',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Mamrezpur Nawadia',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Manda',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Manehra',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Manpur Ahaiyapur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Manpur Chikitia',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Manpuria Delel',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Manpuria Janki Prasad',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Masit',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Mawai',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Mehma Patti',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Memaur',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Meondi Khurd Lalan',
        location: 'Bareily',
        status: true,
      },
      {
        title: 'Adampur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Aklimpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Alimudinpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Allawardi',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Babra Bakipur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Babupur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Badha',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Badshahpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Bahora Kalan',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Bahora Khurd',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Bajghera',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Bar Gujar',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Basai',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Basharia',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Baskushla',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Baslambi',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Basonda',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Begampur Khatola',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Behrampur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Bhang Rola',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Bhudka',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Bhun Karka',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Bilaspur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Bindapur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Binola',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Bir Hera',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Budhera',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Cartarpuri Alias Daulatpur Nasirabad',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Chakarpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Chandla Dungerwas',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Chandu',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Choma',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Daboda',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Danokri',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Daultabad',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Dhana',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Dhanawas',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Dhankot',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Dhanwanpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Dharampur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Dhorka',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Dhumaspur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Duman',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Dundahera',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Fakharpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Faredpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Farrukhnagar',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Fatehpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Fazalpur Badli',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Fazalwas',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Fazilpur Jharsa',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Gairatpurbas',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Garhi Harsaru',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Garhi Nathekhan',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Garoli Kalan',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Garoli Khurd',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Ghasula',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Ghausgarh',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Gopalpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Gugana',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Gurgaon',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Gwaliar',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Haiderpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Hamirpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Harsaru',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Hayatpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Inayatpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Iqbalpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Islampur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Jamalpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Janaula',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Jaraun',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Jarola',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Jatola',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Jhanjrola',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Jhund Sarai Abad',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Jhund Sarai Viran',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Joniawas',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Jori',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Kadipur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Kaliawas',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Kanahi',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Kankrola',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Karola',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Kasan',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Khandevila',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Khandsa',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Kharkhari',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Kharki Majra Dhankot',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Khawaspur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Khetawas',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Khoh',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Khurmpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Kukrola',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Lakhnola',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Langra',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Mahchana',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Manesar',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Mankrola',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Medawas',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Meoka',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Mohammadpur Jharsa',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Mohmadheri',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Mokalwas',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Molahera',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Mubarikpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Mushedpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Naharpur Kasan',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Naharpur Rupa',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Nainwal',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Nangli Umarpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Narsinghpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Nathupur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Navrangpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Nawada Fatehpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Nurpur Bahora',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Nurpur Jharsa',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Palra',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Palri',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Pathrari',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Patli Hajipur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Pawala Khasrupur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Prasoli',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Rajpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Rathiwas',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Sadhrana',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Sanpka',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Sarbasirpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Sarhol',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Sayyad Mohamadpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Sehrawan',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Shahpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Shamshpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Shekhupur Majri',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Sidhrawali',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Sihi',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Sikanderpur Badha',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Sikanderpur Ghosi',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Siwari',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Sukhrali',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Sultanpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Tajnagar',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Tatarpur',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Tigra',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Tikli',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Tikri',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Tripari',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Udepuri',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Wazirabad',
        location: 'Gurgaon',
        status: true,
      },
      {
        title: 'Wazirpur',
        location: 'Gurgaon',
        status: true,
      },




    ],
      ["id"]);

  }
}