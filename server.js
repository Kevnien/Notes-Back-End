const express = require('express');
const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.json({message:'Server is listening.'});
});

module.exports = server;