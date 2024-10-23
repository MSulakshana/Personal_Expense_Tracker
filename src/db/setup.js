// src/db/setup.js
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./expenses.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        type TEXT CHECK(type IN ('income', 'expense'))
    )`);

  db.run(`CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT CHECK(type IN ('income', 'expense')),
        category TEXT,
        amount REAL,
        date TEXT,
        description TEXT
    )`);
});

db.close();
