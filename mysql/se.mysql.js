if (!MYSQL_SE_DATABASE || !MYSQL_SE_USERNAME || !MYSQL_SE_PASSWORD) return;

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
});

module.exports = seCon;