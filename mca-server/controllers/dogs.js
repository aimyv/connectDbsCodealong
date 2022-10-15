const router = require('express').Router();

const Dog = require('../models/dog');

router.get('/', async (req, res) => {
    try {
        const dogs = await Dog.all
        res.status(200).json({data: dogs})
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: err })
    }
});

router.get('/:name', async (req, res) => {
    try {
        const name = req.params.name;
        const dog = await Dog.findByName(name);
        res.status(200).json({data: dog});
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
});

router.post('/', (req, res) => {
    try {
        const data = req.body;
        const newDog = Dog.create(data);
        res.status(201).send(newDog);
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
})

router.put('/:name', (req, res) => {
    try {
        const name = req.params.name;
        const editedDog = Dog.update(name);
        res.status(202).send(editedDog);
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
})

router.delete('/:name', async (req, res) => {
    try {
        const name = req.params.name;
        const dog = await Dog.destroy(name);
        res.status(204).json({data: dog});
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
})

module.exports = router
