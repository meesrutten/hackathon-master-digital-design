const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const index = require('./routes/index');
const http = require('http');
const sassMiddleware = require('node-sass-middleware');
const reload = require('reload');

// Use EJS and the views directory for view engine
app
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs');

// Make POST parameters available in request
app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({
    extended: true
}));

// Compiles SCSS to compressed CSS
app.use(sassMiddleware({
    src: path.join(__dirname, 'src'),
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'compressed',
}));

// Directory for static content
app.use(express.static('public'));


// Routes
app.use('/', index);

const server = http.createServer(app);

server.listen(3000, () => console.log('Listening on port 3000'));

reload(app);