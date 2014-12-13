// Version 2: Define one or more dynamic routes

var servi = require('servi');
var app = new servi(true);
port(3002); 
start();

/*
TO DO:
Start with the previous version, with static routes defined, and add dynamic routes
*/

//static routes
route('/original', showOriginalSong);

//dynamic route
route('/revised/:subject', showRevised);

var content = {
	subject: "walrus",
};

function showOriginalSong(request) {
	request.serveFile("originalSong.html");
}

var subjects = {
	walrus: {
		subject: "walrus"
	},
	schoolBus: {
		subject: "school bus"
	},
	mangoTree: {
		subject: "mango tree"
	},
	monkey: {
		subject: "monkey"
	},
	doorknob: {
		subject: "doorknob"
	},
	floorboard: {
		subject: "floorboard"
	},
	mermaid: {
		subject: "mermaid"
	},
	burrito: {
		subject: "burrito"
	},
	jellyfish: {
		subject: "jellyfish"
	},
	onesie: {
		subject: "onesie"
	},
	earmuffs: {
		subject: "earmuffs"
	},
}

// inside the callback function, access the variable ":subject" with request.params.subject
// example callback function:
function showRevised(request){
    request.respond("I am the " + request.params.subject);  
}

function showRevised(request){
	var subjectName = request.params.subject;
	if(subjectName in subjects) {
		request.render("templates/template.html", subjects[subjectName]);
	} else {
		request.respond("Page not found");
	}
}
