const express = require('express');

const app = express();
var cors = require('cors')

const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: '157.245.216.89',
    database: 'trabalho',
    password: 'trabalhodb@2190',
    dialect: 'postgres',
    port: 1234
});

app.use(cors())
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


app.get('/aerodromes', (req, res, next) => {
    pool.query(`SELECT aerodromos.code, aerodromos.latitude, aerodromos.longitude, aerodromos.name,
                       metar.date AS metar_date, metar.message AS metar_message, 
                       taf.date AS taf_date, taf.message AS taf_message
                FROM public.aerodromos
                INNER JOIN public.metar ON metar.code_aerodromo=aerodromos.code
                INNER JOIN public.taf ON taf.code_aerodromo=aerodromos.code
                ORDER BY metar.date DESC`)

        .then(testData => {
            res.send(testData.rows);
        });
});

app.get('/tsc', (req, res, next) => {
    pool.query(`SELECT tsc.type, tsc.latitude, tsc.longitude FROM public.tsc`)

        .then(testData => {
            res.send(testData.rows);
        });
});


const server = app.listen(3001, function () {
    let host = server.address().address;
    let port = server.address().port;
});