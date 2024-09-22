
/* 
const db = new sqlite3.Database("mydatabase.db");
db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY, name TEXT)"
  );
});
app.use(express.json());
app.get("/items", (req, res) => {
  db.all("SELECT * FROM items", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ items: rows });
  });
});
app.post("/items", (req, res) => {
  const { name } = req.body;
  db.run("INSERT INTO items (name) VALUES (?)", [name], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID });
  });
});
app.listen(port, () => {
  console.log(`Server working on ${port}`);
});
*/
const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app