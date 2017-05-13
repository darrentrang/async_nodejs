module.exports = function (callback) { //built into Node js and can set to whatever u want. in example-callback.js, you pass weather() a function which is named "callback". so in here you just invoke callback() which all it does is console.log
	var request = require('request');
	var encodedLocation = "Corona, CA";
	var url = 'http://api.openweathermap.org/data/2.5/weather?appid=a0580244d8160ccfe3836f6d7b6c633b&q=' + encodedLocation + '&units=imperial';
	console.log(url);
	
	request({url: url, json: true}, 
	function(error, response, body) { //error will be null if none
		if(error){
			callback('Unable to fetch weather.');
		}
		else {
			console.log(JSON.stringify(body,null,4)); //4 is number of spaces to indent json by
			var temp = body.main.temp;
			var city = body.name;
			callback("It's currently " + temp + " degrees in " + city);
		}

	}); //request json data
}

