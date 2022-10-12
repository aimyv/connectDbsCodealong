// const dogData = require("../../db/dogs");
const { init } = require('../initdb');

class Dog {
    constructor(data){
        this.id = data._id
        this.name = data.name;
        this.age = data.age;
    }

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const dbData = await db.collection('dogs').find({}).toArray()
                const dogs = dbData.map(d => new Dog(d))
                if (!dogs.length) { throw new Error('No Doggos here!') }
                resolve(dogs);
            } catch (err) {
                reject(`Error retrieving dogs: ${err.message}`)
            }
        })
    }
}

module.exports = Dog;