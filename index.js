const { TodoRecord } = require('./records/todoRecord');
const { TodoRepository } = require('./repositories/todorespository');
const { client } = require('./utils/db');

(async () => {
    try {
        // console.log(await TodoRepository.findAll())
        const todo = new TodoRecord({
            title: 'Read Frontend\'s article'
        })

        await TodoRepository.insert(todo)
        console.log(todo)

    } finally {
        client.close()
    }
  })()