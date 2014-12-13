var servi = require('servi');
var app = new servi(true);

port(3003);
start();

route('/original', showOriginalSong);
route('/revised/:subject', showRevised);

route('/submit', showForm);
route('/formsubmitted', handleForm);


function showForm(request) {
  request.serveFile('form.html');
}

function handleForm(request) {
  console.log(request.params);

  var submittedInfo = "<p>The subject submitted was: " + request.params.subject + "</p>";
  request.respond(submittedInfo);
}

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
