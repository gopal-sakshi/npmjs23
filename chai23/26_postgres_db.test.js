const { assert } = require('chai');
const postgres = require('./26_postgres_db');


describe('postgres_test_23', function () {
    
    describe('## create_del_Db23', () => {
        it('createDb23', async () => {
            const createDbQuery = `CREATE DATABASE testdb25;`;
            const res = await postgres.execQuery23(createDbQuery, '');
            // db is getting created... but I dont know how to write test spec to verify if db is created or not
        });
        it('delDb23', async () => {
            const delDbQuery = `DROP DATABASE testdb25;`;
            const res = await postgres.execQuery23(delDbQuery, '');
        });
    });

});