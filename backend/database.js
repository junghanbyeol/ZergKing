const mysql = require("mysql");
const fs = require("fs");
const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);

const connection = mysql.createConnection({
  host: conf.host, //13.125.99.255
  user: conf.user,
  password: conf.password,
  database: conf.database,
});

module.exports = connection;
