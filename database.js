const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_NAME}.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

const DbClient = () => {
    return new MongoClient(uri);
};

module.exports.DbClient = DbClient;