var today = new Date();
let express = require('express');
var nodemailer = require('nodemailer');
var app = express();
app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'));
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
var places = {'person1':'Pleasanton','person2':'Pleasanton','person3':'Pleasanton','person4':'Pleasanton','person5':'Pleasanton','person6':'Pleasanton','person7':'Pleasanton','person8':'Pleasanton','person9':'Pleasanton','person10':'Pleasanton','person11':'Pleasanton','person12':'Pleasanton'}
app.get('/', function (req, res) {
      res.render('index', {places : places, date : today});
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
        places.person1 = 'Pleasanton';
    } else if (newplace == 2) {
        places.person1 = 'Foster City';
    } else if (newplace == 3) {
        places.person1 = 'Other';
    }
    res.redirect('/');
});
app.post('/change2', function (req,res) {
    var newplace = req.body.place1;
    if (newplace == 1) {
        places.person2 = 'Pleasanton';
    } else if (newplace == 2) {
        places.person2 = 'Foster City';
    } else if (newplace == 3) {
        places.person2 = 'Other';
    }
    res.redirect('/');
});
app.post('/change3', function (req,res) {
    var newplace = req.body.place1;
    if (newplace == 1) {
        places.person3 = 'Pleasanton';
    } else if (newplace == 2) {
        places.person3 = 'Foster City';
    } else if (newplace == 3) {
        places.person3 = 'Other';
    }
    res.redirect('/');
});
app.post('/change4', function (req,res) {
    var newplace = req.body.place1;
    if (newplace == 1) {
        places.person4 = 'Pleasanton';
    } else if (newplace == 2) {
        places.person4 = 'Foster City';
    } else if (newplace == 3) {
        places.person4 = 'Other';
    }
    res.redirect('/');
});
app.post('/change5', function (req,res) {
    var newplace = req.body.place1;
    if (newplace == 1) {
        places.person5 = 'Pleasanton';
    } else if (newplace == 2) {
        places.person5 = 'Foster City';
    } else if (newplace == 3) {
        places.person5 = 'Other';
    }
    res.redirect('/');
});
app.post('/change6', function (req,res) {
    var newplace = req.body.place1;
    if (newplace == 1) {
        places.person6 = 'Pleasanton';
    } else if (newplace == 2) {
        places.person6 = 'Foster City';
    } else if (newplace == 3) {
        places.person6 = 'Other';
    }
    res.redirect('/');
});
app.post('/change7', function (req,res) {
    var newplace = req.body.place1;
    if (newplace == 1) {
        places.person7 = 'Pleasanton';
    } else if (newplace == 2) {
        places.person7 = 'Foster City';
    } else if (newplace == 3) {
        places.person7 = 'Other';
    }
    res.redirect('/');
});
app.post('/change8', function (req,res) {
    var newplace = req.body.place1;
    if (newplace == 1) {
        places.person8 = 'Pleasanton';
    } else if (newplace == 2) {
        places.person8 = 'Foster City';
    } else if (newplace == 3) {
        places.person8 = 'Other';
    }
    res.redirect('/');
});
app.post('/change9', function (req,res) {
    var newplace = req.body.place1;
    if (newplace == 1) {
        places.person9 = 'Pleasanton';
    } else if (newplace == 2) {
        places.person9 = 'Foster City';
    } else if (newplace == 3) {
        places.person9 = 'Other';
    }
    res.redirect('/');
});
app.post('/change10', function (req,res) {
    var newplace = req.body.place1;
    if (newplace == 1) {
        places.person10 = 'Pleasanton';
    } else if (newplace == 2) {
        places.person10 = 'Foster City';
    } else if (newplace == 3) {
        places.person10 = 'Other';
    }
    res.redirect('/');
});
app.post('/change11', function (req,res) {
    var newplace = req.body.place1;
    if (newplace == 1) {
        places.person11 = 'Pleasanton';
    } else if (newplace == 2) {
        places.person11 = 'Foster City';
    } else if (newplace == 3) {
        places.person11 = 'Other';
    }
    res.redirect('/');
});
app.post('/change12', function (req,res) {
    var newplace = req.body.place1;
    if (newplace == 1) {
        places.person12 = 'Pleasanton';
    } else if (newplace == 2) {
        places.person12 = 'Foster City';
    } else if (newplace == 3) {
        places.person12 = 'Other';
    }
    res.redirect('/');
});
app.listen(process.env.PORT || 3000,function() {
    console.log('TeamViewer has started to listen on port 3000')
})