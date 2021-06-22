const express = require('express');


const app = express();
const Pool = require('pg').Pool;


const pool = new Pool({
    user: 'postgres',
    host: '157.245.216.89',
    database: 'postgres',
    password: 'trabalhodb@2190',
    dialect: 'postgres',
    port: 1234
});


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


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


app.get('/testdata', (req, res, next) => {
    console.log("TEST DATA :");
    pool.query('SELECT * FROM data.test')
        .then(testData => {
            console.log(testData);
            res.send(testData.rows);
        });
});


const server = app.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
});