const express = require('express');
const router = express.Router('socket.io');

router.get('/', (req,res) =>{
    res.send('server is up and runing');
});

module.exports = router;