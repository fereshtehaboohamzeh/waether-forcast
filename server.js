const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
});

app.post('/', (req, res, next) => {
    let city = req.body.city;
    request.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e2c8ab4e035657a747207767b226c916`, (err, response, body) => {
        let weather = JSON.parse(body);
        if (err)
            res.render('index', {weather: null, error: 'Oppps something went wrong, try again please'});
        else if (!weather.main)
            res.render('index', {weather: null, error: 'Try another city please'});
        else
            res.render('index', {
                weather: `It's ${Math.round(weather.main.temp - 273.5)} degrees in ${weather.name}!`,
                error: null
            })


    })
});

app.listen(3005, () => {
    console.log('app is running on port 3005');
});