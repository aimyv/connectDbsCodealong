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

    static findByName(name){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const dbData = await db.collection('dogs').find({}).toArray()
                const dog = dbData.filter((dog) => dog.name == name)[0];
                if (!dog) { throw new Error('No Doggo here!') }
                resolve(new Dog(dog));
            } catch (err) {
                reject(`Error retrieving dog: ${err.message}`)
            }
        })
    }

    static create(dog){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const newDog = new Dog({
                    ...dog
                })
                const dbData = await db.collection('dogs').insertOne(newDog)
                resolve(dbData);
                console.log(newDog)
            } catch (err) {
                reject(`Error adding dog: ${err.message}`)
            }
        })
    }

    static destroy(name){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const kill = db.collection('dogs').deleteOne({"name": name})
                if (!kill) { throw new Error("Ruh-roh! You can't kill me!") }
                resolve()
            } catch (err) {
                reject(`Error deleting dog: ${err.message}`)
            }
        })
    }

    
}

module.exports = Dog;
