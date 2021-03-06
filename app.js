const express = require('express');

const { port } = require('./config');

const {
    getPresentations: getSlides,
} = require('./slides-utils');

const app = express();

app.set('view engine', 'pug');

app.use(
    '/slides',
    express.static(__dirname + '/slides'));

app.use(
    '/static',
    express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    const presentations = getSlides();
    return res.render('home', { presentations });
});
app.get('/slides/:name', (req, res) => {
    const { name } = req.params;
    return res.render('slides', { name });
});

app.listen(port, () => console.log('It works!'));
