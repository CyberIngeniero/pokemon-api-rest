const express = require('express');
const router = express.Router();
const { sayHello, getItems } = require('../controllers/controller');

router.get('/sayHello', sayHello);
router.get('/all', getItems);

module.exports = router;