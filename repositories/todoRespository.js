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
}

module.exports = {
    TodoRepository
}