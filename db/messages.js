"use strict";

const sqlite3 = require('sqlite3');
const connectionString = "db/collections.db" || ':memory:';

function getAll(cb) {
  const connection = new sqlite3.Database(connectionString, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("connected to " + connectionString);
  });

  const sel = `select id, json_extract(entry, '$') AS entry from books;`;
  connection.all(
    sel, [], (err, rows) => {
      if (err) return cb(err);
      console.log("retrieved data");
      rows = rows.map((i) => JSON.parse(i.entry));
      return cb(null, rows);
    });
  connection.close(() => console.log("closing connection"));
}

module.exports = {
  getAll
};
