const seCon = require("../mysql/se.mysql");
const nuCon = require("../mysql/nu.mysql");

function sendIndex(req, res) {
  res.render("index.ejs");
}

function sendSeDates(req, res) {
  const sql = "SELECT date, amount FROM dates;";
  seCon.query(sql, function (err, result) {
    if (err) throw err;
    res.render("sedates.ejs", {
      result: JSON.stringify(result),
    });
  });
}

function sendSeRows(req, res) {
  const date = req.params.date;
  const page = req.params.page;
  let rows1 = page * 18;
  let rows2;
  let maxPage;
  if (page === "0") {
    rows2 = 0;
  } else {
    rows2 = rows1;
  }

  const maxSql = `SELECT amount FROM dates WHERE date = ${date}`;
  seCon.query(maxSql, function (err, result) {
    if (err) throw err;
    maxPage = Math.floor(result[0].amount / 18) + 1;
  });

  const sql = `SELECT domain FROM domains JOIN dates ON domains.dategrp = dates.id WHERE date = ${date} ORDER BY domain ASC OFFSET ${rows2} ROWS FETCH FIRST 18 ROWS ONLY;`;
  seCon.query(sql, function (err, result) {
    if (err) throw err;
    res.render("sedomains.ejs", {
      result: JSON.stringify(result),
      maxPage: maxPage,
    });
  });
}

function sendNuDates(req, res) {
  const sql = "SELECT date, amount FROM dates;";
  nuCon.query(sql, function (err, result) {
    if (err) throw err;
    res.render("nudates.ejs", {
      result: JSON.stringify(result),
    });
  });
}

function sendNuRows(req, res) {
  const date = req.params.date;
  const page = req.params.page;
  let rows1 = page * 18;
  let rows2;
  let maxPage;
  if (page === "0") {
    rows2 = 0;
  } else {
    rows2 = rows1;
  }

  const maxSql = `SELECT amount FROM dates WHERE date = ${date}`;
  nuCon.query(maxSql, function (err, result) {
    if (err) throw err;
    maxPage = Math.floor(result[0].amount / 18) + 1;
  });

  const sql = `SELECT domain FROM domains JOIN dates ON domains.dategrp = dates.id WHERE date = ${date} ORDER BY domain ASC OFFSET ${rows2} ROWS FETCH FIRST 18 ROWS ONLY;`;
  nuCon.query(sql, function (err, result) {
    if (err) throw err;
    res.render("nudomains.ejs", {
      result: JSON.stringify(result),
      maxPage: maxPage,
    });
  });
}

module.exports = {
  sendIndex,
  sendSeDates,
  sendSeRows,
  sendNuDates,
  sendNuRows,
};