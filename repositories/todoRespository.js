const { TodoRecord } = require("../records/todoRecord");
const { todos } = require("../utils/db");

class TodoRepository {
    static _checkRecord(record){
        if(!(record instanceof TodoRecord)){
            throw new Error("Record must be an instance of TodoRecord")
        }
    }

    static async findAll(){
        return (await todos.find()).toArray()
    }

    static async insert(record){
        TodoRepository._checkRecord(record)

        const { insertedId } = await todos.insertOne(record)
        record._id = insertedId

        return insertedId
    }
}

module.exports = {
    TodoRepository
}