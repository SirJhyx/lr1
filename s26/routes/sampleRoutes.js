const express = require('express');
const router = express.Router();

router.get('/example', () => {
    console.log("working");
})

module.exports = router;