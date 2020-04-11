#!/usr/bin/env node

"use strict";

const fs = require("fs");
const yargs = require("yargs");
const sqlite3 = require("sqlite3");
const lodash = require("lodash");

const schema = "db/schema.sql";
const tables = {
  books: {
    type: "json",
    path: "db/books.json",
    sql: "INSERT into books (entry) VALUES (json(?));"
  }
};

const argv = yargs
  .option(
    "db", {
      alias: "d",
      describe: "sqlite database file"
    })
  .demandOption(["db"], "all arguments required")
  .help()
  .argv;

(function () {
  console.log("Inserting ... ");
  if (!argv.db.endsWith(".db"))
    return console.error("please provide a database file with suffix '.db'");

  let connection = new sqlite3.Database(
    argv.db, (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("connected to " + argv.db);
    });

  connection.serialize(() => {
    connection.exec(fs.readFileSync(schema, "utf8"));
    lodash.forEach(
      tables, (table) => {
        const els = JSON.parse(fs.readFileSync(table.path, "utf8"));
        els.forEach(
          (i) => connection.run(
            table.sql, JSON.stringify(i), (err) => function () {
              if (err) console.error(err);
            }
          )
        );
      });
    connection.close(() => console.log("closing connection"));
  });
})();
