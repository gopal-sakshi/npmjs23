const { Client, Pool, Connection } = require("pg");


const connectionParams = {
    user             : 'postgres',
    password         : '1258',
    host             : '10.0.54.240',
    port             : 5432,
    application_name : `npmjs23_mocha_test`,
    database         : 'football'
};

const postgres = {};

postgres.setDb23 = async (databaseName) => {
    connectionParams.database = databaseName;
    return {};
};
  
postgres.execQuery23 = async (query, values) => {
    return await pgExecute(query, values);
}

async function pgExecute(query, values) {
    const client = new Client(connectionParams);
    await client.connect();
    let result = await client.query(query).then((data) => data);
    await client.end();
    return result;
}

pgExecute('SELECT NOW()').then(res => {
    console.log("res from pg query23 ===> ", res.rows)
});

module.exports = postgres;
