const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'megak_music';

(async () => {
    try {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const songs = db.collection('songs');

        const foundSongs = songs.find()

        for await (const song of foundSongs) {
            console.log(song)
        }

        const searchedSong = await songs.findOne({ _id: new ObjectId('63de347ebb7a4f236765d2d7')})
        console.log(searchedSong, 'I found it!')

        await songs.updateOne({ _id: new ObjectId('63de347ebb7a4f236765d2d8')}, { $set : {artistId: new ObjectId('63de3bebbb7a4f236765d2db')}})
        await db.collection('artists').updateOne({ _id: new ObjectId('63de3bebbb7a4f236765d2dc')}, { $set : {startAt: new Date()}})
    } catch (err) {
        console.error(err)
        await client.close();
    }
  })()