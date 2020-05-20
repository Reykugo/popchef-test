const { Database, OPEN_READWRITE, OPEN_CREATE } = require('sqlite3').verbose();

// eslint-disable-next-line no-bitwise
const DB_MODE = OPEN_READWRITE | OPEN_CREATE;
const db = new Database(
  './dist/back/src/database.db',
  DB_MODE,
  (err: Error) => {
    if (err) {
      throw err;
    }
  },
);

export default db;
