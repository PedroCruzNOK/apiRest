const { Client } = require ('pg');

async function getConection(){
    const client = new Client({
        host:'localhost',
        port: 5432,
        user: 'pedro',
        password: 'simons83',
        database: 'apirest'
    });
    
    await client.connect();
    return client;

}

module.exports = getConection;