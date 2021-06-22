const pgConn = require('./pool')

const start = async () => {
  pgConn.query('SELECT * FROM data.test')
        .then(testData => {
            console.log(testData);
        });
}

start();