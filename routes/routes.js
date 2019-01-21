'use strict';
const fs = require('fs');

var appRouter = function (app) {
    app.get("/", function (req, res) {
      res.status(200).send({ message: 'Welcome to our restful API' });
    });
  
    app.get("/socialPost", function (req, res) {
        let rawdata = fs.readFileSync('./data.json');  
        let socialPosts = JSON.parse(rawdata);  
        res.header("Access-Control-Allow-Origin", "*");

        res.status(200).send(socialPosts);
    });
  }
  
  module.exports = appRouter;