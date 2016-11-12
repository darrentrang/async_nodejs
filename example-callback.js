var request = require('request');

var encodedLocation = "Los Angeles, CA";
var url = 'http://api.openweathermap.org/data/2.5/weather?appid=a0580244d8160ccfe3836f6d7b6c633b&q=' + encodedLocation + '&units=imperial';
console.log(url);

request({url: url, json: true}, 
	function(error, response, body) { //error will be null if none
		if(error){
			console.log('Unable to fetch weather.');
		}
		else {
			console.log(JSON.stringify(body,null,4)); //4 is number of spaces to indent json by
			var temp = body.main.temp;
			var city = body.name;
			console.log("It's currently " + temp + " degrees in " + city);
		}

}); //request json data

//this will get called first while the call back (request) above is processing
console.log("after reqeuest");