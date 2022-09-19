if (!process.env.MYSQL_SE_DATABASE || !process.env.MYSQL_SE_USERNAME || !process.env.MYSQL_SE_PASSWORD) return;

const mysql = require("mysql");

const hostName = process.env.MYSQL_HOSTNAME;
const seDataBase = process.env.MYSQL_SE_DATABASE;
const seUserName = process.env.MYSQL_SE_USERNAME;
const sePassWord = process.env.MYSQL_SE_PASSWORD;

const seCon = mysql.createConnection({
  host: hostName,
  database: seDataBase,
  user: seUserName,
  password: sePassWord,
  port: 31337,
});

module.exports = seCon;