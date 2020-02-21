const express = require('express');

const server = express();
server.use(express.json());

server.get('/', (req,res) => {
    server.send('<h1>Welcome to my server</h1>')
})

module.exports = server;