const { TodoRepository } = require('./repositories/todorespository');
const { client } = require('./utils/db');

(async () => {
    try {
        console.log(await TodoRepository.findAll())
    } finally {
        client.close()
    }
  })()