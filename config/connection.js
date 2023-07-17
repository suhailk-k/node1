const mongoClient = require("mongodb").MongoClient;
const state = {
  db: null,
};

module.exports.connect = function (done) {
  console.log("====================================");
  console.log("Connecting to database");
  console.log("====================================");
  const url = "mongodb://localhost:27017";
  const dbname = "shopping";

  mongoClient.connect(url, (err, client) => {
    console.log("====================================");
    console.log("Connected to database");
    console.log("====================================");
    if (err) return done(err);
    state.db = client.db(dbname);
    done();
  });
};

module.exports.get = function () {
  return state.db;
};
