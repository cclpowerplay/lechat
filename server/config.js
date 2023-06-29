
require('dotenv').config({ path: '.env.example' })
const isDev = process.env.NODE_ENV === 'development';
const db = {
  uri: process.env.MONGO_URI,
  name: 'LeChat',
};

module.exports = {
  isDev,
  cors: {
    origin: ['http://localhost:3000'],
  },
  db,
};
