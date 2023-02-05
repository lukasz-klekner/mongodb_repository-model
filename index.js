const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'megak_music';

(async () => {
    try {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
    } catch (err) {
        console.error(err)
        await client.close();
    }
  })()