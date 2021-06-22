const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: '157.245.216.89',
    database: 'trabalho',
    password: 'trabalhodb@2190',
    dialect: 'postgres',
    port: 1234
});

pool.connect((err, client, release) => {
  if (err) {
      return console.error(
          'Error acquiring client', err.stack);
  }
  
  client.query('SELECT NOW()', (err, result) => {
      release();
      if (err) {
          return console.error(
              'Error executing query', err.stack);
      }
      console.log("Connected to Database !");
  });
});

module.exports = pool