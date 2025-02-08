import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Location } from '../location.entity';

export default class LocationSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(Location);
    await repository.upsert([
      {
        title: 'Mumbai',
        status: true,
      },
      {
        title: 'Delhi',
        status: true,
      },
      {
        title: 'Bangalore',
        status: true,
      },
      {
        title: 'Hyderabad',
        status: true,
      },
      {
        title: 'Ahmedabad',
        status: true,
      },
      {
        title: 'Chennai',
        status: true,
      },
      {
        title: 'Kolkata',
        status: true,
      },
      {
        title: 'Surat',
        status: true,
      },
      {
        title: 'Pune',
        status: true,
      },
      {
        title: 'Jaipur',
        status: true,
      },
      {
        title: 'Lucknow',
        status: true,
      },
      {
        title: 'Kanpur',
        status: true,
      },
      {
        title: 'Nagpur',
        status: true,
      },
      {
        title: 'Indore',
        status: true,
      },
      {
        title: 'Thane',
        status: true,
      },
      {
        title: 'Bhopal',
        status: true,
      },
      {
        title: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Patna',
        status: true,
      },
      {
        title: 'Vadodara',
        status: true,
      },
      {
        title: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Ludhiana',
        status: true,
      },
      {
        title: 'Agra',
        status: true,
      },
      {
        title: 'Nashik',
        status: true,
      },
      {
        title: 'Faridabad',
        status: true,
      },
      {
        title: 'Meerut',
        status: true,
      },
      {
        title: 'Rajkot',
        status: true,
      },
      {
        title: 'Varanasi',
        status: true,
      },
      {
        title: 'Aurangabad',
        status: true,
      },
      {
        title: 'Amritsar',
        status: true,
      },
      {
        title: 'Navi Mumbai',
        status: true,
      },
      {
        title: 'Prayagraj',
        status: true,
      },
      {
        title: 'Howrah',
        status: true,
      },
      {
        title: 'Ranchi',
        status: true,
      },
      {
        title: 'Jabalpur',
        status: true,
      },
      {
        title: 'Gwalior',
        status: true,
      },
      {
        title: 'Coimbatore',
        status: true,
      },
      {
        title: 'Vijayawada',
        status: true,
      },
      {
        title: 'Jodhpur',
        status: true,
      },
      {
        title: 'Madurai',
        status: true,
      },
      {
        title: 'Raipur',
        status: true,
      },
      {
        title: 'Kota',
        status: true,
      },
      {
        title: 'Guwahati',
        status: true,
      },
      {
        title: 'Chandigarh',
        status: true,
      },
      {
        title: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Solapur',
        status: true,
      },
      {
        title: 'Tiruchirappalli',
        status: true,
      },
      {
        title: 'Tiruppur',
        status: true,
      },
      {
        title: 'Moradabad',
        status: true,
      },
      {
        title: 'Mysore',
        status: true,
      },
      {
        title: 'Bareily',
        status: true,
      },
      {
        title: 'Gurgaon',
        status: true,
      },
      // {
      //   title: 'Aligarh',
      //   status: true,
      // },
      // {
      //   title: 'Jalandhar',
      //   status: true,
      // },
      // {
      //   title: 'Bhubaneswar',
      //   status: true,
      // },
      // {
      //   title: 'Salem',
      //   status: true,
      // },
      // {
      //   title: 'Mira-Bhayandar',
      //   status: true,
      // },
      // {
      //   title: 'Warangal[7]',
      //   status: true,
      // },
      // {
      //   title: 'Guntur[8]',
      //   status: true,
      // },
      // {
      //   title: 'Bhiwandi',
      //   status: true,
      // },
      // {
      //   title: 'Saharanpur',
      //   status: true,
      // },
      // {
      //   title: 'Gorakhpur',
      //   status: true,
      // },
      // {
      //   title: 'Bikaner',
      //   status: true,
      // },
      // {
      //   title: 'Amravati',
      //   status: true,
      // },
      // {
      //   title: 'Noida',
      //   status: true,
      // },
      // {
      //   title: 'Jamshedpur',
      //   status: true,
      // },
      // {
      //   title: 'Bhilai',
      //   status: true,
      // },
      // {
      //   title: 'Cuttack',
      //   status: true,
      // },
      // {
      //   title: 'Firozabad',
      //   status: true,
      // },
      // {
      //   title: 'Kochi',
      //   status: true,
      // },
      // {
      //   title: 'Nellore[9]',
      //   status: true,
      // },
      // {
      //   title: 'Bhavnagar',
      //   status: true,
      // },
      // {
      //   title: 'Dehradun',
      //   status: true,
      // },
      // {
      //   title: 'Durgapur',
      //   status: true,
      // },
      // {
      //   title: 'Asansol',
      //   status: true,
      // },
      // {
      //   title: 'Rourkela',
      //   status: true,
      // },
      // {
      //   title: 'Nanded',
      //   status: true,
      // },
      // {
      //   title: 'Kolhapur',
      //   status: true,
      // },
      // {
      //   title: 'Ajmer',
      //   status: true,
      // },
      // {
      //   title: 'Akola',
      //   status: true,
      // },
      // {
      //   title: 'Gulbarga',
      //   status: true,
      // },
      // {
      //   title: 'Jamnagar',
      //   status: true,
      // },
      // {
      //   title: 'Ujjain',
      //   status: true,
      // },
      // {
      //   title: 'Loni',
      //   status: true,
      // },
      // {
      //   title: 'Siliguri',
      //   status: true,
      // },
      // {
      //   title: 'Jhansi',
      //   status: true,
      // },
      // {
      //   title: 'Ulhasnagar',
      //   status: true,
      // },
      // {
      //   title: 'Jammu',
      //   status: true,
      // },
      // {
      //   title: 'Sangli-Miraj & Kupwad',
      //   status: true,
      // },
      // {
      //   title: 'Mangalore',
      //   status: true,
      // },
      // {
      //   title: 'Erode[10]',
      //   status: true,
      // },
      // {
      //   title: 'Belgaum',
      //   status: true,
      // },
      // {
      //   title: 'Ambattur',
      //   status: true,
      // },
      // {
      //   title: 'Tirunelveli',
      //   status: true,
      // },
      // {
      //   title: 'Malegaon',
      //   status: true,
      // },
      // {
      //   title: 'Gaya',
      //   status: true,
      // },
      // {
      //   title: 'Jalgaon',
      //   status: true,
      // },
      // {
      //   title: 'Udaipur',
      //   status: true,
      // },
      // {
      //   title: 'Maheshtala',
      //   status: true,
      // },
      // {
      //   title: 'Davanagere',
      //   status: true,
      // },
      // {
      //   title: 'Kozhikode',
      //   status: true,
      // },
      // {
      //   title: 'Kurnool',
      //   status: true,
      // },
      // {
      //   title: 'Rajpur Sonarpur',
      //   status: true,
      // },
      // {
      //   title: 'Rajahmundry[11][12]',
      //   status: true,
      // },
      // {
      //   title: 'Bokaro',
      //   status: true,
      // },
      // {
      //   title: 'South Dumdum',
      //   status: true,
      // },
      // {
      //   title: 'Bellary',
      //   status: true,
      // },
      // {
      //   title: 'Patiala',
      //   status: true,
      // },
      // {
      //   title: 'Gopalpur',
      //   status: true,
      // },
      // {
      //   title: 'Agartala',
      //   status: true,
      // },
      // {
      //   title: 'Bhagalpur',
      //   status: true,
      // },
      // {
      //   title: 'Muzaffarnagar',
      //   status: true,
      // },
      // {
      //   title: 'Bhatpara',
      //   status: true,
      // },
      // {
      //   title: 'Panihati',
      //   status: true,
      // },
      // {
      //   title: 'Latur',
      //   status: true,
      // },
      // {
      //   title: 'Dhule',
      //   status: true,
      // },
      // {
      //   title: 'Tirupati[13]',
      //   status: true,
      // },
      // {
      //   title: 'Rohtak',
      //   status: true,
      // },
      // {
      //   title: 'Korba',
      //   status: true,
      // },
      // {
      //   title: 'Bhilwara',
      //   status: true,
      // },
      // {
      //   title: 'Berhampur',
      //   status: true,
      // },
      // {
      //   title: 'Muzaffarpur',
      //   status: true,
      // },
      // {
      //   title: 'Ahmednagar',
      //   status: true,
      // },
      // {
      //   title: 'Mathura',
      //   status: true,
      // },
      // {
      //   title: 'Kollam',
      //   status: true,
      // },
      // {
      //   title: 'Avadi',
      //   status: true,
      // },
      // {
      //   title: 'Kadapa',
      //   status: true,
      // },
      // {
      //   title: 'Kamarhati',
      //   status: true,
      // },
      // {
      //   title: 'Sambalpur',
      //   status: true,
      // },
      // {
      //   title: 'Bilaspur',
      //   status: true,
      // },
      // {
      //   title: 'Shahjahanpur',
      //   status: true,
      // },
      // {
      //   title: 'Satara',
      //   status: true,
      // },
      // {
      //   title: 'Bijapur',
      //   status: true,
      // },
      // {
      //   title: 'Rampur',
      //   status: true,
      // },
      // {
      //   title: 'Shivamogga',
      //   status: true,
      // },
      // {
      //   title: 'Chandrapur',
      //   status: true,
      // },
      // {
      //   title: 'Junagadh',
      //   status: true,
      // },
      // {
      //   title: 'Thrissur',
      //   status: true,
      // },
      // {
      //   title: 'Alwar',
      //   status: true,
      // },
      // {
      //   title: 'Bardhaman',
      //   status: true,
      // },
      // {
      //   title: 'Kulti',
      //   status: true,
      // },
      // {
      //   title: 'Kakinada',
      //   status: true,
      // },
      // {
      //   title: 'Nizamabad',
      //   status: true,
      // },
      // {
      //   title: 'Parbhani',
      //   status: true,
      // },
      // {
      //   title: 'Tumkur',
      //   status: true,
      // },
      // {
      //   title: 'Khammam',
      //   status: true,
      // },
      // {
      //   title: 'Ozhukarai',
      //   status: true,
      // },
      // {
      //   title: 'Bihar Sharif',
      //   status: true,
      // },
      // {
      //   title: 'Panipat',
      //   status: true,
      // },
      // {
      //   title: 'Darbhanga',
      //   status: true,
      // },
      // {
      //   title: 'Bally',
      //   status: true,
      // },
      // {
      //   title: 'Aizawl',
      //   status: true,
      // },
      // {
      //   title: 'Dewas',
      //   status: true,
      // },
      // {
      //   title: 'Ichalkaranji',
      //   status: true,
      // },
      // {
      //   title: 'Karnal',
      //   status: true,
      // },
      // {
      //   title: 'Bathinda',
      //   status: true,
      // },
      // {
      //   title: 'Jalna',
      //   status: true,
      // },
      // {
      //   title: 'Eluru',
      //   status: true,
      // },
      // {
      //   title: 'Kirari Suleman Nagar',
      //   status: true,
      // },
      // {
      //   title: 'Barasat',
      //   status: true,
      // },
      // {
      //   title: 'Purnia',
      //   status: true,
      // },
      // {
      //   title: 'Satna',
      //   status: true,
      // },
      // {
      //   title: 'Mau',
      //   status: true,
      // },
      // {
      //   title: 'Sonipat',
      //   status: true,
      // },
      // {
      //   title: 'Farrukhabad',
      //   status: true,
      // },
      // {
      //   title: 'Sagar',
      //   status: true,
      // },
      // {
      //   title: 'Rourkela',
      //   status: true,
      // },
      // {
      //   title: 'Durg',
      //   status: true,
      // },
      // {
      //   title: 'Imphal',
      //   status: true,
      // },
      // {
      //   title: 'Ratlam',
      //   status: true,
      // },
      // {
      //   title: 'Hapur',
      //   status: true,
      // },
      // {
      //   title: 'Arrah',
      //   status: true,
      // },
      // {
      //   title: 'Karimnagar',
      //   status: true,
      // },
      // {
      //   title: 'Anantapur',
      //   status: true,
      // },
      // {
      //   title: 'Etawah',
      //   status: true,
      // },
      // {
      //   title: 'Ambernath',
      //   status: true,
      // },
      // {
      //   title: 'North Dumdum',
      //   status: true,
      // },
      // {
      //   title: 'Bharatpur',
      //   status: true,
      // },
      // {
      //   title: 'Begusarai',
      //   status: true,
      // },
      // {
      //   title: 'New Delhi',
      //   status: true,
      // },
      // {
      //   title: 'Gandhidham',
      //   status: true,
      // },
      // {
      //   title: 'Baranagar',
      //   status: true,
      // },
      // {
      //   title: 'Tiruvottiyur',
      //   status: true,
      // },
      // {
      //   title: 'Puducherry',
      //   status: true,
      // },
      // {
      //   title: 'Sikar',
      //   status: true,
      // },
      // {
      //   title: 'Thoothukudi',
      //   status: true,
      // },
      // {
      //   title: 'Rewa',
      //   status: true,
      // },
      // {
      //   title: 'Mirzapur',
      //   status: true,
      // },
      // {
      //   title: 'Raichur',
      //   status: true,
      // },
      // {
      //   title: 'Pali',
      //   status: true,
      // },
      // {
      //   title: 'Ramagundam[16]',
      //   status: true,
      // },
      // {
      //   title: 'Haridwar',
      //   status: true,
      // },
      // {
      //   title: 'Vijayanagaram',
      //   status: true,
      // },
      // {
      //   title: 'Katihar',
      //   status: true,
      // },
      // {
      //   title: 'Nagarcoil',
      //   status: true,
      // },
      // {
      //   title: 'Sri Ganganagar',
      //   status: true,
      // },
      // {
      //   title: 'Karawal Nagar',
      //   status: true,
      // },
      // {
      //   title: 'Mango',
      //   status: true,
      // },
      // {
      //   title: 'Thanjavur',
      //   status: true,
      // },
      // {
      //   title: 'Bulandshahr',
      //   status: true,
      // },
      // {
      //   title: 'Uluberia',
      //   status: true,
      // },
      // {
      //   title: 'Murwara',
      //   status: true,
      // },
      // {
      //   title: 'Sambhal',
      //   status: true,
      // },
      // {
      //   title: 'Singrauli',
      //   status: true,
      // },
      // {
      //   title: 'Nadiad',
      //   status: true,
      // },
      // {
      //   title: 'Secunderabad',
      //   status: true,
      // },
      // {
      //   title: 'Naihati',
      //   status: true,
      // },
      // {
      //   title: 'Yamunanagar',
      //   status: true,
      // },
      // {
      //   title: 'Bidhan Nagar',
      //   status: true,
      // },
      // {
      //   title: 'Pallavaram',
      //   status: true,
      // },
      // {
      //   title: 'Bidar',
      //   status: true,
      // },
      // {
      //   title: 'Munger',
      //   status: true,
      // },
      // {
      //   title: 'Panchkula',
      //   status: true,
      // },
      // {
      //   title: 'Burhanpur',
      //   status: true,
      // },
      // {
      //   title: 'Raurkela Industrial Township',
      //   status: true,
      // },
      // {
      //   title: 'Kharagpur',
      //   status: true,
      // },
      // {
      //   title: 'Dindigul',
      //   status: true,
      // },
      // {
      //   title: 'Gandhinagar',
      //   status: true,
      // },
      // {
      //   title: 'Hospet',
      //   status: true,
      // },
      // {
      //   title: 'Nangloi Jat',
      //   status: true,
      // },
      // {
      //   title: 'Malda',
      //   status: true,
      // },
      // {
      //   title: 'Ongole',
      //   status: true,
      // },
      // {
      //   title: 'Deoghar',
      //   status: true,
      // },
      // {
      //   title: 'Chapra',
      //   status: true,
      // },
      // {
      //   title: 'Haldia',
      //   status: true,
      // },
      // {
      //   title: 'Khandwa',
      //   status: true,
      // },
      // {
      //   title: 'Nandyal',
      //   status: true,
      // },
      // {
      //   title: 'Chittoor',
      //   status: true,
      // },
      // {
      //   title: 'Morena',
      //   status: true,
      // },
      // {
      //   title: 'Amroha',
      //   status: true,
      // },
      // {
      //   title: 'Anand',
      //   status: true,
      // },
      // {
      //   title: 'Bhind',
      //   status: true,
      // },
      // {
      //   title: 'Bhalswa Jahangir Pur',
      //   status: true,
      // },
      // {
      //   title: 'Madhyamgram',
      //   status: true,
      // },
      // {
      //   title: 'Bhiwani',
      //   status: true,
      // },
      // {
      //   title: 'Navi Mumbai Panvel Raigad',
      //   status: true,
      // },
      // {
      //   title: 'Baharampur',
      //   status: true,
      // },
      // {
      //   title: 'Ambala',
      //   status: true,
      // },
      // {
      //   title: 'Morvi',
      //   status: true,
      // },
      // {
      //   title: 'Fatehpur',
      //   status: true,
      // },
      // {
      //   title: 'Rae Bareli',
      //   status: true,
      // },
      // {
      //   title: 'Khora',
      //   status: true,
      // },
      // {
      //   title: 'Bhusawal',
      //   status: true,
      // },
      // {
      //   title: 'Orai',
      //   status: true,
      // },
      // {
      //   title: 'Bahraich',
      //   status: true,
      // },
      // {
      //   title: 'Vellore',
      //   status: true,
      // },
      // {
      //   title: 'Mahesana',
      //   status: true,
      // },
      // {
      //   title: 'Sambalpur',
      //   status: true,
      // },
      // {
      //   title: 'Raiganj',
      //   status: true,
      // },
      // {
      //   title: 'Sirsa',
      //   status: true,
      // },
      // {
      //   title: 'Danapur',
      //   status: true,
      // },
      // {
      //   title: 'Serampore',
      //   status: true,
      // },
      // {
      //   title: 'Sultan Pur Majra',
      //   status: true,
      // },
      // {
      //   title: 'Guna',
      //   status: true,
      // },
      // {
      //   title: 'Jaunpur',
      //   status: true,
      // },
      // {
      //   title: 'Panvel',
      //   status: true,
      // },
      // {
      //   title: 'Shivpuri',
      //   status: true,
      // },
      // {
      //   title: 'Surendranagar Dudhrej',
      //   status: true,
      // },
      // {
      //   title: 'Unnao',
      //   status: true,
      // },
      // {
      //   title: 'Hugli and Chinsurah',
      //   status: true,
      // },
      // {
      //   title: 'Alappuzha',
      //   status: true,
      // },
      // {
      //   title: 'Kottayam',
      //   status: true,
      // },
      // {
      //   title: 'Machilipatnam',
      //   status: true,
      // },
      // {
      //   title: 'Shimla',
      //   status: true,
      // },
      // {
      //   title: 'Adoni',
      //   status: true,
      // },
      // {
      //   title: 'Tenali',
      //   status: true,
      // },
      // {
      //   title: 'Proddatur',
      //   status: true,
      // },
      // {
      //   title: 'Saharsa',
      //   status: true,
      // },
      // {
      //   title: 'Hindupur',
      //   status: true,
      // },
      // {
      //   title: 'Sasaram',
      //   status: true,
      // },
      // {
      //   title: 'Hajipur',
      //   status: true,
      // },
      // {
      //   title: 'Bhimavaram',
      //   status: true,
      // },
      // {
      //   title: 'Dehri',
      //   status: true,
      // },
      // {
      //   title: 'Madanapalle',
      //   status: true,
      // },
      // {
      //   title: 'Siwan',
      //   status: true,
      // },
      // {
      //   title: 'Bettiah',
      //   status: true,
      // },
      // {
      //   title: 'Guntakal',
      //   status: true,
      // },
      // {
      //   title: 'Srikakulam',
      //   status: true,
      // },
      // {
      //   title: 'Motihari',
      //   status: true,
      // },
      // {
      //   title: 'Dharmavaram',
      //   status: true,
      // },
      // {
      //   title: 'Gudivada',
      //   status: true,
      // },
      // {
      //   title: 'Narasaraopet',
      //   status: true,
      // },
      // {
      //   title: 'Bagaha',
      //   status: true,
      // },
      // {
      //   title: 'Miryalaguda',
      //   status: true,
      // },
      // {
      //   title: 'Tadipatri',
      //   status: true,
      // },
      // {
      //   title: 'Kishanganj',
      //   status: true,
      // },
      // {
      //   title: 'Karaikudi',
      //   status: true,
      // },
      // {
      //   title: 'Suryapet',
      //   status: true,
      // },
      // {
      //   title: 'Jamalpur',
      //   status: true,
      // },
      // {
      //   title: 'Kavali',
      //   status: true,
      // },
      // {
      //   title: 'Tadepalligudem',
      //   status: true,
      // },
      // {
      //   title: 'Amaravati',
      //   status: true,
      // },
      // {
      //   title: 'Buxar',
      //   status: true,
      // },
      // {
      //   title: 'Jehanabad',
      //   status: true,
      // },
      // {
      //   title: 'Aurangabad',
      //   status: true,
      // }






    ],
      ["id"]);

  }
}