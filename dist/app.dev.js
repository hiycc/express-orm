"use strict";

// 引进express框架
var express = require('express');

var bodyParser = require('body-parser');

var cors = require('cors');

var db = require('./app/models'); //用户表的控制器


var userController = require('./app/controllers/users.controller');

var app = express();
var PORT = 3000; //  设置可访问后端的前端来源为*，避免跨域问题

var corsOptions = {
  origin: '*'
};

var signup = require('./router/signup');

app.use('/signup', signup);
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/', function (req, res) {});
app.listen(PORT, function () {
  console.log("zheye backend app listening on port ".concat(PORT));
});
db.sequelize.sync();