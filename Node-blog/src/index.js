const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { urlencoded } = require('express');
const app = express();
const port = 3001;

const route = require('./routes');
const db = require('./config/db');

// Copnnect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
   express.urlencoded({
      extended: true,
   })
);
app.use(express.json());

// HTP logger
// app.use(morgan('common'));

// Template engine
app.engine(
   'hbs',
   handlebars.engine({ defaultLayout: 'main', extname: '.hbs' })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

// Routs init
route(app);

app.listen(port, () => {
   console.log(`App listening on port ${port}`);
});
