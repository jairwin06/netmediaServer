// Version 1: Define some static routes

// a server that defines some static routes
// every servi application must have these 2 lines
var servi = require('servi');
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
port(3001); 

// define the first route -- home page
route('/', showHome);
route('/original', showOriginalSong);
route('/differentsubjects', showSubjects);

// define the showHome method
function showHome(request){
    request.serveFile("index.html"); 
}

// TO DO: 
// define 2+ more routes with corresponding functions
function showOriginalSong(request) {
	request.serveFile("originalSong.html");
}

function showSubjects(request) {
	request.serveFile("subjects.html");
}
start();