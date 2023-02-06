const { ObjectId } = require("mongodb");
const { TodoRecord } = require("../records/todoRecord");
const { todos } = require("../utils/db");

class TodoRepository {
    static _checkRecord(record){
        if(!(record instanceof TodoRecord)){
            throw new Error("Record must be an instance of TodoRecord")
        }
    }

    static async find(id){
        return await todos.findOne({
            _id: new ObjectId(String(id))
        })
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

    static async update(record){
        // TodoRepository._checkRecord(record)

        await todos.replaceOne({
            _id: record._id
        }, {
            title: String(record.title)
        })
    }
}

module.exports = {
    TodoRepository
}