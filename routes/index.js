var express = require('express');
var router = express.Router();
var app = express();
var https = require('https');
var http = require('http');
var firebase = require("firebase");
var request = require('request');
var nodemailer = require('nodemailer');
var config = require('../config');

// GET /server/data
router.get('/data', function(req, res){
    res.json({
        text: "get request is good!"
    })
});

// POST /server/postData
router.post('/postData', function(req, res){

    if(req.body.on === true){
      res.json({
          text:"its working, test: 1"
      })
    }else{
      res.json({
          text:"its working, test: 2"
      })
    }
});


router.post('/contactform', handleSayHello);

function handleSayHello(req, res) {

    if(config.email.account === null || config.email.password === null){

        res.json({
            response: false,
            msg: " email account not configged"
        })

    }else{

        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: config.email.account,
                pass: config.email.password
            }
        });

        var text = 'Test hola';

        var mailOptions = {
            from: 'hello@conormacken.com', // sender address
            to: 'cwmacken@gmail.com', // list of receivers
            subject: 'Test Email', // Subject line
            text: text //, // plaintext body
        };

        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
                res.json({response: false, msg: error});
            }else{
                console.log('Message sent: ' + info.response);
                res.json({response: info.response});
            };
        });


    }


}

module.exports = router;
