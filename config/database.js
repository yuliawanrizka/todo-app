var sqlite3 = require('sqlite3').verbose();
const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        db.run(`CREATE TABLE todo (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            todo text
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows if needed
            }
        });  
    }
});

module.exports = db;