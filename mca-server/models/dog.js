const dogData = require("../../db/dogs");

class Dog {
    constructor(data){
        this.id = data._id
        this.name = data.name;
        this.age = data.age;
    }

    static get all(){
        const dogs = dogData.map(d => new Dog(d))
        return dogs;
    }
}

module.exports = Dog;