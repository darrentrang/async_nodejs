var weather = require('./weather.js');

weather(function(currentWeather){
	console.log(currentWeather);
});


//this will get called first while the call back (request) above is processing
console.log("after reqeuest");