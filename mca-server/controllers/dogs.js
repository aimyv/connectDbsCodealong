const router = require('express').Router();

const Dog = require('../models/dog');

router.get('/', (req, res) => {
    const dogs = Dog.all
    res.status(200).json({data: dogs})
});

module.exports = router