const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const index = require('./routes/index');
const http = require('http');
const server = http.createServer(app);
const sassMiddleware = require('node-sass-middleware');
const reload = require('reload');
var firmata = require('firmata');
var serialPort = '/dev/cu.usbserial-AL038606';
var PORT = process.env.port || 3000;

const io = require('socket.io')(server);

// var board = require('./firmataConnector').start(serialPort);
// var board = new Board(serialPort)
// var board = startBoard(serialPort);

var five = require("johnny-five");
var board = new five.Board();
var button;

io.on('connection', function (socket) {
    socket.on('disconnect', function () {
        console.log('disconnected');
    });
    console.log('connected');
    board.on("ready", function () {

        // var led = new five.Led(13);
        var i = 0;
        // Create a new `button` hardware instance.
        // This example allows the button module to
        // create a completely default instance
        button = new five.Button({
            pin: 4,
            isPullup: true
        });

        // Inject the `button` hardware into
        // the Repl instance's context;
        // allows direct command line access
        board.repl.inject({
            button: button
        });

        // Button Event API

        button.on("press", function () {
            console.log("Button pressed");
            i++
            if (i >= 10) {
                console.log('Explosion');
                //Sends the explode command to the client
                socket.emit('explode');
                i = 0;
            }
        });

        button.on("release", function () {
            console.log("Button released");
        });

        // #include < Button.h >


        //     // freq. our board and TD - > we are gonna send our RPMs 10 times per second to TD
        //     // 1000 / 10 = 100

        //     // count how many flicks per second

        //     int count = 0;
        // Button btn(12);

        // long startedCount = 0;
        // long howlong = 1000; // 1 sec

        // float rpm = .0;


        // void setup() {
        //     btn.begin();

        //     Serial.begin(9600);
        //     startedCount = millis();
        // }

        // void loop() {
        //     bool released = btn.released();

        //     if (millis() < (startedCount + howlong)) {
        //         if (released) count++;
        //     } else {
        //         startedCount = millis();
        //         rpm = count * 60.0;
        //         count = 0;
        //         Serial.println(rpm);
        //     }
        // }


        // setInterval(function(){
        //     i++;
        //     if (i >= 5) {
        //         i = 0;
        //         console.log('EXPLOSION')
        //     }
        // }, 1000)

        // "blink" the led in 500ms on-off phase periods
        // led.blink(500);
    });


});

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
app.get('/', function (req, res) {
    res.render('index');
});


server.listen(PORT, () => console.log('Listening on port 3000'));

reload(app);

