const express = require ('express');
const bodyParser = require ('body-parser');
const path = require ('path');
const db = require ('./database');

const app = express ();
const PORT = 3000;

app.use (bodyParser.json ());
app.use (express.static (path.join (__dirname))); // 提供前端 index.html

// 计算费用逻辑
function calculateFee (entry, exit) {
  const entryTime = new Date (entry);
  const exitTime = new Date (exit);
  const hours = Math.ceil ((exitTime - entryTime) / (1000 * 60 * 60)); //ceil 数值取大，天花板

  if (hours <= 1) return 0; // 1小时内免费
  return (hours - 1) * 10; // 超过1小时，每小时10刀
}

app.post ('/calculate', (req, res) => {
  const {entry, exit} = req.body;
  const fee = calculateFee (entry, exit);

  db.run (
    'INSERT INTO records (entry_time, exit_time, fee) VALUES (?, ?, ?)',
    [entry, exit, fee],
    err => {
      if (err) return res.status (500).json ({error: 'DB Error'});
      res.json ({fee});
    }
  );
});

app.listen (PORT, () => {
  console.log (`Server running at http://localhost:${PORT}`);
});
