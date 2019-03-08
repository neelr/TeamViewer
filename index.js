let express = require('express');
var nodemailer = require('nodemailer');
var app = express();
app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'));
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
var places = {'person1':'Home','person2':'Home','person3':'Home','person4':'Home'}
app.get('/', function (req, res) {
      res.render('index', {places : places});
});
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tectonroot@gmail.com',
      pass: 'tectonisgood'
    }
  });
var mailOptions = {
    from: 'no-reply@teamviewer.com',
    to: 'neel.redkar@outlook.com',
    subject: 'Server startup Complete',
    text: 'That was easy!'
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

app.post('/change1', function (req,res) {
    var newplace = req.body.place1;
    if (newplace == 1) {
        places.person1 = 'Home';
    } else if (newplace == 2) {
        places.person1 = 'Work';
    } else if (newplace == 3) {
        places.person1 = 'Other';
    }
    res.redirect('/');
});
app.post('/change2', function (req,res) {
    var newplace = req.body.place1;
    if (newplace == 1) {
        places.person2 = 'Home';
    } else if (newplace == 2) {
        places.person2 = 'Work';
    } else if (newplace == 3) {
        places.person2 = 'Other';
    }
    res.redirect('/');
});
app.post('/change3', function (req,res) {
    var newplace = req.body.place1;
    if (newplace == 1) {
        places.person3 = 'Home';
    } else if (newplace == 2) {
        places.person3 = 'Work';
    } else if (newplace == 3) {
        places.person3 = 'Other';
    }
    res.redirect('/');
});
app.post('/change4', function (req,res) {
    var newplace = req.body.place1;
    if (newplace == 1) {
        places.person4 = 'Home';
    } else if (newplace == 2) {
        places.person4 = 'Work';
    } else if (newplace == 3) {
        places.person4 = 'Other';
    }
    res.redirect('/');
});
app.listen(3000,function() {
    console.log('TeamViewer has started to listen on port 3000')
})