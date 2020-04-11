#!/usr/bin/env node

"use strict";

const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const messages = require('./db/messages');

const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/client/dist"));

app.get('/get_books', (req, res) => {
  messages.getAll(function (err, data) {
    console.log(data);
    return res.json(data);
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
