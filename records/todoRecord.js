const { ObjectId } = require("mongodb");
const { ValidationError } = require("../utils/errors");

class TodoRecord {
    constructor({ _id, title}){
        this._id = new ObjectId(_id);
        this.title = title;

        this._validate()
    }

    _validate(){
        if(!title || typeof title !== 'string'){
            throw new ValidationError('TodoRecord title must be an unempty string');
        }
    }
}

module.exports = {
    TodoRecord
}