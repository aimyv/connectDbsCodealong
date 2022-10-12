const router = require('express').Router();

const Dog = require('../models/dog');

router.get('/', async (req, res) => {
    try {
        const dogs = await Dog.all
        res.status(200).json({data: dogs})
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: err})
    }
});

router.get('/:name', async (req, res) => {
    const name = req.params.name;
    try {
        const dog = await Dog.getByName(name)
        res.status(200).json(dog)
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: err})
    }
});

module.exports = router