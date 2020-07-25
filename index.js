let request = require('request');
const argv = require('yargs').argv;

const city = argv.r || "Tehran"
request.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e2c8ab4e035657a747207767b226c916`,(err, response, body) => {
  if(err) console.log(err)
    else{
        let weather = JSON.parse(body);
      let message = `It's ${Math.round(weather.main.temp-273.5)} degrees in ${weather.name}!`;
      console.log( '4',message);
  }

})
