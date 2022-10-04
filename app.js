const express = require('express');
const bodyParser = require('body-parser');
const path =require('path')

const app = express();

app.set('view engine', 'ejs');

 app.use("/images",express.static(__dirname+"/images"));

 app.use(express.static(
     path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({

    extended: true
}));


// renders the home.ejs when home route is request(site is opened)
app.get('/', function (req, res) {
    res.render("home", {

    });
})


















app.listen(3000, function () {
    console.log('port is live')
});