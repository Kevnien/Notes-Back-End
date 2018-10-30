const express = require('express');
const server = express();
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);
const cors = require('cors');

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.json({message:'Server is listening.'});
});

server.get('/api/notes', (req, res) => {
    db('notes')
        .then(notes => {
            res.status(200).json({notes:notes});
        })
        .catch(err => res.status(400).json(err.message));
});

server.post('/api/notes', (req, res) => {
    const {title, content} = req.body;
    const note = {title, content};
    db('notes').insert(note)
        .then(idArray => {
            res.status(200).json({id:idArray[0]});
        })
        .catch(err => res.status(400).json(err.message));
});

module.exports = server;