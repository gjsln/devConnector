const express = require('express');
const router = express.Router();

// @route GET api/userAuth/test
// @desc Tests userAuth route
// @access Public 

router.get('/test', (req, res) => res.json({
    msg: "Users Works"
}));

module.exports = router;