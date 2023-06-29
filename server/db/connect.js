const { connect } = require('mongoose');
const { isDev, db } = require('../config');
require('dotenv').config({ path: '.env.example' })
module.exports = async () => {
  try {
    // const uri = isDev ? `mongodb://localhost:27017/${db.name}` : db.uri;
    const uri = `mongodb+srv://cclpowerplay:Pw96jMp93kfLY3fd@cluster0.hkovu43.mongodb.net/LeChat`
    console.log(process.env.MONGO_URI)
    await connect(uri);

    console.log('database connected');
  } catch (error0) {
    console.log(error0.message);
  }
};
