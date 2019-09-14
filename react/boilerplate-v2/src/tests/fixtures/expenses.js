import moment from 'moment';

export default [
  {
    id: '0',
    description: 'candy',
    note: '',
    amount: 100,
    createdAt: 0,
  },
  {
    id: '1',
    description: 'shoes',
    note: '',
    amount: 300,
    createdAt: moment(0)
      .subtract(5, 'day')
      .valueOf(),
  },
  {
    id: '2',
    description: 'bike',
    note: '',
    amount: 200,
    createdAt: moment(0)
      .add(5, 'day')
      .valueOf(),
  },
];
