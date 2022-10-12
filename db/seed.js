db = connect("mongodb://localhost:27017/doggos")

db.dogs.drop()

db.dogs.insertMany([
    { name: "Pochi", age: 10 },
    { name: "Mitzi", age: 2 },
    { name: "Shelley", age: 7, breed: "Frenchie" },
    { name: "Clifford", size: "big", colour: "red" },
    { name: 'Myshkin', age: 5, favouriteToy: "tennis ball" },
    { name: "Rex", age: 4, colour: "brown" },
    { name: "Snoopy", age: 5, ownerName: "Charlie" },
    { name: 'Mochi', age: 3, breed: 'shi-pu', ownerName: 'Naz' },
    { name: 'Masha', age: 5, breed: 'shih-tzu', ownerName: 'Vesna' },
    { name: 'Hendon', age: 2, breed: 'golden retriever', ownerName: 'Vesna' },
    { name: 'Zola', age: 13, breed: 'golden retriever', ownerName: 'Beth' },
    { name: 'Snip', age: 3, breed: 'greyhound' }
])