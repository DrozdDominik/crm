const express = require('express');
const { db } = require('./utils/db');

const clientRouter = express.Router();

clientRouter
        .get('/', (req, res) => {
            res.render('client/list-all', {
                clients: db.getAll(),
            });
        })
        .get('/:id', (req, res) => {         
            res.render('client/one', {
                client: db.getOne(req.params.id),
            });
        })
        .post('/', (req, res) => {

        })
        .put('/:id', (req, res) => {

        })
        .delete('/:id', (req, res) => {

        })

module.exports = {
    clientRouter,
}