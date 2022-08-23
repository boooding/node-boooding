// 1.
const mysql = require('mysql');

// 2.
const db = mysql.createPool({
  host: 'XXX.XXX.XXX.XXX',
  user: '',
  password: '',
  database: ''
})

// 3. test
db.query('', (err, results) => {
  if (err) {
    return console.log(err.message)
  }
  console.log(results);
})

