if (!MYSQL_NU_DATABASE || !MYSQL_NU_USERNAME || !MYSQL_NU_PASSWORD) return;

const mysql = require("mysql");

const hostName = process.env.MYSQL_HOSTNAME;
const nuDataBase = process.env.MYSQL_NU_DATABASE;
const nuUserName = process.env.MYSQL_NU_USERNAME;
const nuPassWord = process.env.MYSQL_NU_PASSWORD;

const nuCon = mysql.createConnection({
  host: hostName,
  database: nuDataBase,
  user: nuUserName,
  password: nuPassWord,
});

module.exports = nuCon;