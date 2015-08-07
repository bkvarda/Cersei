//Cersei - the shame client

var express = require('express');
var fs = require('fs');
var readLineSync = require('readline-sync');
var app = express();
var exec = require('child_process').exec;
var uri = "https://api.particle.io/v1/events";




//check for config file, if it doesn't exit prompt for token

if(fs.existsSync('./config.json')){
  var config = require('./config.json');
  var token = "Bearer " + config.token;
}
else{

  var token = "Bearer " + readLineSync.question("Config file not detected. Please enter your Particle API token:");

}

//set up the SSE client
var eventSourceInitDict = {rejectUnauthorized: false, headers: {'Authorization': token}};
var EventSource = require('eventsource');




//determine which CLI player to use depending on the platform
if(process.platform == 'win32' || 'win64'){

	//it is Windows
	var player = __dirname + '/players/mpg123-1.22.0-x86-64/mpg123.exe';
	var shame = 'http://www.myinstants.com/media/sounds/shame-1.mp3';
}
if(process.platform == 'darwin'){

	//it is Mac
	var player = 'afplay';
	var shame = __dirname + '/sounds/shame.mp3';
}

var es = new EventSource(uri, eventSourceInitDict);

app.listen(1337);

console.log("Cersei is walking with her head down on " + process.platform);

//listens for the shame event on the Particle Cloud and plays the shame clip when it sees the event
es.addEventListener('shamedingdingding', function(event){

   console.log(event);
   
   playShame(function(err){


   });

}, false);

//in case of errors...
es.onerror = function(err){

	console.log(err);
}


//Shame! DING DING DING!
function playShame(callback){
	console.log("Shame! Ding Ding Ding");

	
	exec(player +' '+shame, function(error, stdout, stderr){
		if(error){
			return callback(error);
		}
	return callback(null);
})
}