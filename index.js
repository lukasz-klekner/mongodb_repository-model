const { TodoRecord } = require('./records/todoRecord');
const { TodoRepository } = require('./repositories/todorespository');
const { client } = require('./utils/db');

(async () => {
    try {
        // console.log(await TodoRepository.findAll())
        // const todo = new TodoRecord({
        //     title: 'Read Frontend\'s article'
        // })

        // await TodoRepository.insert(todo)
        // console.log(todo)
        console.log(await TodoRepository.find("63e134d256497c0170627c2c"))
        

    } finally {
        client.close()
    }
  })()