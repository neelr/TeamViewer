var today = new Date();
let express = require('express');
var app = express();
app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'));
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
var fs = require('fs')
var data = fs.readFileSync('place.json')
var places = JSON.parse(data)
app.get('/', function (req, res) {
      res.render('index', {places : places, date : today});
});
app.post('/change1', function (req,res) {
    var newplace = req.body.place1;
    if (newplace == 1) {
        places.person1 = 'Pleasanton';
    } else if (newplace == 2) {
        places.person1 = 'Foster City';
    } else if (newplace == 3) {
        places.person1 = 'Other';
    } else if (newplace == 0) {
        places.person1 = 'Home';
    }
    data = JSON.stringify(places)
    fs.writeFile('place.json',data, function () {
        console.log('Logged to json')
    })
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
    } else if (newplace == 0) {
        places.person2 = 'Home';
    }
    data = JSON.stringify(places)
    fs.writeFile('place.json',data, function () {
        console.log('Logged to json')
    })
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
    } else if (newplace == 0) {
        places.person3 = 'Home';
    }
    data = JSON.stringify(places)
    fs.writeFile('place.json',data, function () {
        console.log('Logged to json')
    })
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
    } else if (newplace == 0) {
        places.person4 = 'Home';
    }
    data = JSON.stringify(places)
    fs.writeFile('place.json',data, function () {
        console.log('Logged to json')
    })
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
    } else if (newplace == 0) {
        places.person5 = 'Home';
    }
    data = JSON.stringify(places)
    fs.writeFile('place.json',data, function () {
        console.log('Logged to json')
    })
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
    } else if (newplace == 0) {
        places.person6 = 'Home';
    }
    data = JSON.stringify(places)
    fs.writeFile('place.json',data, function () {
        console.log('Logged to json')
    })
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
    } else if (newplace == 0) {
        places.person7 = 'Home';
    }
    data = JSON.stringify(places)
    fs.writeFile('place.json',data, function () {
        console.log('Logged to json')
    })
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
    } else if (newplace == 0) {
        places.person8 = 'Home';
    }
    data = JSON.stringify(places)
    fs.writeFile('place.json',data, function () {
        console.log('Logged to json')
    })
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
    } else if (newplace == 0) {
        places.person9 = 'Home';
    }
    data = JSON.stringify(places)
    fs.writeFile('place.json',data, function () {
        console.log('Logged to json')
    })
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
    } else if (newplace == 0) {
        places.person10 = 'Home';
    }
    data = JSON.stringify(places)
    fs.writeFile('place.json',data, function () {
        console.log('Logged to json')
    })
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
    } else if (newplace == 0) {
        places.person11 = 'Home';
    }
    data = JSON.stringify(places)
    fs.writeFile('place.json',data, function () {
        console.log('Logged to json')
    })
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
    } else if (newplace == 0) {
        places.person12 = 'Home';
    }
    data = JSON.stringify(places)
    fs.writeFile('place.json',data, function () {
        console.log('Logged to json')
    })
    res.redirect('/');
});
app.post('/change13', function (req,res) {
    var newplace = req.body.place1;
    if (newplace == 1) {
        places.person13 = 'Pleasanton';
    } else if (newplace == 2) {
        places.person13 = 'Foster City';
    } else if (newplace == 3) {
        places.person13 = 'Other';
    } else if (newplace == 0) {
        places.person13 = 'Home';
    }
    data = JSON.stringify(places)
    fs.writeFile('place.json',data, function () {
        console.log('Logged to json')
    })
    res.redirect('/');
});
app.post('/change14', function (req,res) {
    var newplace = req.body.place1;
    if (newplace == 1) {
        places.person14 = 'Pleasanton';
    } else if (newplace == 2) {
        places.person14 = 'Foster City';
    } else if (newplace == 3) {
        places.person14 = 'Other';
    } else if (newplace == 0) {
        places.person14 = 'Home';
    }
    data = JSON.stringify(places)
    fs.writeFile('place.json',data, function () {
        console.log('Logged to json')
    })
    res.redirect('/');
});
app.listen(process.env.PORT || 3000,function() {
    console.log('TeamViewer has started to listen on port 3000')
})
