const express = require('express');

const { port } = require('./config');

const {
    getPresentations,
} = require('./presentation-utils');

const app = express();

app.use(
    '/presentations',
    express.static(__dirname + '/presentations'));

const toHtmlList = (html, presentation) =>
    `${html}<li>
        <a href="/presentations/${presentation.dirName}">${presentation.title}</a>
        </li>`;

app.get('/', (req, res) =>
    res.send(getPresentations()
        .reduce(toHtmlList, '')));

app.listen(port, () => console.log('It works!'));
