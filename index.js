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

        // const todo = await TodoRepository.find("63e134d256497c0170627c2c")
        // todo.title = 'Finish off creating CRUD :-)'
        // await TodoRepository.update(todo)

        const todeleteTodo = await TodoRepository.find("63e134d256497c0170627c2c")
        await TodoRepository.delete(todeleteTodo)
        console.log(await TodoRepository.find("63e134d256497c0170627c2c"))
        

    } finally {
        client.close()
    }
  })()