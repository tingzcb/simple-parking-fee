const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./parking.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS records (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      entry_time TEXT,
      exit_time TEXT,
      fee REAL
    )
  `);
});

module.exports = db;
