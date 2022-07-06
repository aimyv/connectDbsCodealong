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

module.exports = router