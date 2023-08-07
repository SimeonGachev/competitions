import { MongoClient } from "mongodb";

let dbConnection;

export const connectToDb = function (callback) {
  MongoClient.connect("mongodb://localhost:27017/myFirstDatabase")
    .then((client) => {
      dbConnection = client.db();
      return callback();
    })
    .catch((err) => callback(err));
};

export const getDb = () => dbConnection;
