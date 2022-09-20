const seCon = require("../mysql/se.mysql");
const nuCon = require("../mysql/nu.mysql");

function sendIndex(req, res) {
  res.render("index.ejs");
}

function sendSeDates(req, res) {
  const sql = "SELECT date, amount FROM dates;";
  seCon.query(sql, function (err, result) {
    if (err) throw err;
    //res.end(JSON.stringify(result));
    res.render("sedates.ejs", {
      result: JSON.stringify(result),
    });
  });
}

function sendSeRows(req, res) {
  /*
SELECT date, domain FROM domains JOIN dates ON domains.dategrp = dates.id WHERE date = 20220918 ORDER BY domain ASC LIMIT 0,20;
*/
  const date = req.params.date;
  const page = req.params.page;
  let rows1 = page * 20;
  let rows2
  if (page === "0") {
    rows2 = 0;
  } else {
    rows2 = rows1;
  }
  const sql = `SELECT domain FROM domains JOIN dates ON domains.dategrp = dates.id WHERE date = ${date} ORDER BY domain ASC OFFSET ${rows2} ROWS FETCH FIRST 20 ROWS ONLY;`;
  seCon.query(sql, function (err, result) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
}

function sendNuRows(req, res) {
  const page = req.params.page;
  const rows = page * 20;
}

module.exports = {
  sendIndex,
  sendSeDates,
  sendSeRows,
};

/*
SELECT date, domain FROM domains JOIN dates ON domains.dategrp = dates.id WHERE date = 20220918 ORDER BY domain ASC LIMIT 0,20;
*/
