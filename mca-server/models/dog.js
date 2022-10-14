// const dogData = require("../../db/dogs");
const {pool} = require('../initdb');

class Dog {
    constructor(data){
        this.id = data._id
        this.name = data.name;
        this.age = data.age;
    }

    static get all(){
        return new Promise ( async (resolve, reject) => {
            try {
                const dogsData = await pool.query(`SELECT * FROM dogs;`)
                const dogs = dogsData.rows.map(d => new Dog(d))
                if (!dogs.length) { throw new Error('No doggos here') }
                resolve(dogs);
            } catch (err) {
                reject(`Error retrieving dogs: ${err.message}`)
            }
        })
    }

    static getByName(name){
        return new Promise ( async (resolve, reject) => {
            try {
                const dogData = await pool.query(`SELECT * FROM dogs WHERE name = $1;`, [name])
                const dog = new Dog(dogData.rows[0])
                if (!dog) { throw new Error('No doggos here') }
                resolve(dog);
            } catch (err) {
                reject(`Error retrieving dogs: ${err.message}`)
            }
        })
    }

    static create(dog) {
        return new Promise ( async (resolve, reject) => {
            try {
                const dogData = await pool.query(`INSERT INTO dogs VALUES ($1);`, [dog])
                if (!dogData) { throw new Error("Ruh-roh! Can't add a new dog at the moment!") }
                resolve();
            } catch (err) {
                reject(`Error retrieving dogs: ${err.message}`)
            }
        })
    }
}

module.exports = Dog;
