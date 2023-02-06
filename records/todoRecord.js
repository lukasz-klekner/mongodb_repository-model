const { ValidationError } = require("../utils/errors");

class TodoRecord {
    constructor({ id, title}){
        if(!id || typeof id !== 'string'){
            throw new ValidationError('id must be an unempty string');
        }

        if(!title || typeof name !== 'string'){
            throw new ValidationError('TodoRecord title must be an unempty string');
        }

        this.id = id;
        this.title = title;
    }
}

module.exports = {
    TodoRecord
}