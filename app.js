//Cersei - the shame client

var express = require('express');
var app = express();
var exec = require('child_process').exec;
var uri = "https://api.particle.io/v1/events";
var shame = __dirname + '/sounds/shame.mp3';
var config = require('./config.json');
var token = "Bearer " + config.token;
var eventSourceInitDict = {rejectUnauthorized: false, headers: {'Authorization': token}};
var EventSource = require('eventsource');




//determine which CLI player to use depending on the platform
if(process.platform == 'win32' || 'win64'){

	//it is Windows
	var player = __dirname + '/players/mpg123-1.22.0-x86-64/mpg123.exe';
}
else if(process.platform == 'darwin'){

	//it is Mac
	var player = 'afplay';
}
else{

	//it is some Linux variant. Assuming this one exists because I doubt there will be many Linux users
	var player = 'mpg123';
}

var es = new EventSource(uri, eventSourceInitDict);

app.listen(1337);


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