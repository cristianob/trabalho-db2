const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: '157.245.216.89',
    database: 'trabalho',
    password: 'trabalhodb@2190',
    dialect: 'postgres',
    port: 1234
});

const connectToDb = () => {
    return new Promise((resolve, reject) => {
        pool.connect((err, client, release) => {
            if (err) {
                reject('Error acquiring client', err.stack);                
            }
            
            client.query('SELECT NOW()', (err, result) => {
                release();

                if (err) {
                    reject('Error executing query', err.stack);
                }
                
                resolve();
            });
        });
    });
}

const insertAerodrome = async (aerodrome) => {
    try {
        const response = await pool.query('INSERT INTO aerodromos(code, latitude, longitude, name) VALUES($1, $2, $3, $4)',
                    [aerodrome.cod, aerodrome.latitude, aerodrome.longitude, aerodrome.nome])
        return true
    } catch(e) {
        console.log(e)
        return null
    }
}

const insertMETAR = async (metar) => {
    try {
        const response = await pool.query('INSERT INTO metar(code_aerodromo, date, message) VALUES($1, $2, $3)',
                    [metar.id_localidade, metar.validade_inicial, metar.mens])
        return true
    } catch(e) {
        console.log(e)
        return null
    }
}

const insertTAF = async (taf) => {
    try {
        const response = await pool.query('INSERT INTO taf(code_aerodromo, date, message) VALUES($1, $2, $3)',
                    [taf.id_localidade, taf.validade_inicial, taf.mens])
        return true
    } catch(e) {
        console.log(e)
        return null
    }
}

const insertSTSC = async (stsc) => {
    try {
        for(let i=0; i < stsc.length; i++) {
            const item = stsc[i]

            const response = await pool.query('INSERT INTO tsc(type, latitude, longitude) VALUES($1, $2, $3)',
                        [+item.ti, item.la, item.lo])

            console.log(response)   
        }
        return true
    } catch(e) {
        console.log(e)
        return null
    }
}

module.exports = {
    connectToDb,
    insertAerodrome,
    insertMETAR,
    insertTAF,
    insertSTSC
}