const express = require('express');
const hbs  = require('express-handlebars');
const methodOverride = require('method-override');
const { clientRouter } = require('./routers/client');
const { homeRouter } = require('./routers/home');
const { handleError } = require('./utils/errors');

const app = express();

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));
app.use(express.json());
app.use(methodOverride('_method'));
app.engine('.hbs', hbs({
    extname: '.hbs',
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/client', clientRouter);

app.use(handleError)

app.listen('3000', 'localhost');