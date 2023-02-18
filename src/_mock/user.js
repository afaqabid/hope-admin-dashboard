import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
import { db } from '../firebase/firebase';



const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  // company: faker.company.name(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  status: sample(['active', 'banned']),
  role: sample([
    'Donor',
    'Donee',
    'Organization',
  ]),
}));

export default users;
