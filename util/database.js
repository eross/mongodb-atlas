const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const DBUSER = process.env.DBUSER;
const DBPASSWORD = process.env.DBPASSWORD;

const mongoConnect = callback => {
  MongoClient.connect(
    `mongodb+srv://${DBUSER}:${DBPASSWORD}@sandbox.wgeng.mongodb.net/?retryWrites=true&w=majority&appName=sandbox`
  )
    .then(client => {
      console.log('Connected!');
      callback(client);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = mongoConnect;
