const express = require('express')
var createError = require('http-errors')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser')

let app = express()

app.use(express.static(path.join(__dirname, '/public')));

app.use(cors());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
app.use(bodyParser.json({ limit: '5mb' , extended: true }));
app.use(bodyParser.raw({limit: '5mb', extended: true  }))
app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
  })

// Import Router
var router = require('./routes/mainRoute')
var authorizeRouter = require('./routes/authorize')


app.use('/tni/api',router)


app.get('/tni',(req,res) =>{
    res.sendFile(path.join(__dirname,'./public/index.html'))
})
app.use('/tni/api/authorize',authorizeRouter)
app.listen(3000, () =>
console.log("listening on port 3000:")
);