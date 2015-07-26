/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
    "name": "Sam Morris",
    "role" : "tester",
    "contacts": {
      "mobile" : "916 6234 3243",
      "email": "sdmorris203@gmail.com",
      "github" : "sdmorris203",
      "twitter" :"@tech",
      "location" : "Sacramento"
    },
    "welcome_message" : "This is a welcome message",
    "skills" : ["great", "testing", "security", "servers"],
    "biopic" : "http://cdn.orkin.com/images/termites/dampwood-termite-illustration_1000x608.jpg"
}

var work = {
  "jobs" : [
    {
    "employer" : "EDD ISO",
    "title" : "Information Security Officer",
    "location" : "Dallas",
    "dates": "1991-2005",
    "description" : "This is a description of the ISO position"
    },
    {
    "employer" : "EDD ISD",
    "title" : "Server Builder",
    "location" : "Elk Grove",
    "dates": "1986-1990",
    "description" : "This is a description of a data technician"
    }
  ]
}

var projects = {
  "project" : [
    {
    "title" : "Firewall updates",
    "dates" : "12/15/99",
    "description" : " This is the firewall",
    "images" : [
      "http://texasstates.org/wp-content/uploads/2015/03/SDL-Logo-200-x-200-FB.jpg",
      "http://technologyadvice.com/wp-content/uploads/2014/07/comindware-project-logo.jpg"
      ]
    },
    {
    "title" : "project2",
    "dates" : "1/14/2005",
    "description" : "This is project2",
    "images" : [
      "http://gastoncountyarc.org/wp-content/uploads/2014/12/holdinghands-300x225.jpg",
      "http://www.logoeps.com/wp-content/uploads/2013/03/joomla-project-team-vector-logo-200x200.png"
      ]
    }
  ]
}

var education = {
  "schools": [
    {
      "name" : "Monterey Bay College",
      "location" : "Monterey",
      "degree" : "swimming",
      "majors": ["english", "math"],
      "dates" : "2009",
      "url" : "http://ucdavis.edu/",
      "minor": ["farming", "weaving"],
      "gradyear" : [1999,2000],
      "online" : "yes"
    },
    {
      "name": "Fresno College",
      "location" : "Fresno",
      "degree" : "weaving",
      "majors" : ["english", "Spanish"],
      "dates" : "2001",
      "url" : "www.harvard.edu/",
      "minor": ["farming", "weaving"],
      "gradyear" : [1998,2002],
      "online" : "no"
    }
  ],
  "onlineCourses" : [
    {
    "title" : "Demolitions",
    "school" : "Stanford",
    "dates" : "2007",
    "url" : "https://www.stanford.edu"
    },
    {
    "title" : "Stargazing",
    "school" : "NYU",
    "dates" : "2008",
    "url" : "www.nyu.edu/"
    }
  ]
}

bio.display = function(){
  var formatedinfo = HTMLheaderRole.replace ("%data%", bio.role);
  $("#header").prepend(formatedinfo);

  formatedinfo = HTMLheaderName.replace ("%data%", bio.name);
  $("#header").prepend(formatedinfo);

  formatedinfo = HTMLmobile.replace ("%data%", bio.contacts.mobile);
  $("#topContacts").append(formatedinfo);

  formatedinfo = HTMLemail.replace ("%data%", bio.contacts.email);
  $("#topContacts").append(formatedinfo);

  formatedinfo = HTMLtwitter.replace ("%data%", bio.contacts.twitter);
  $("#topContacts").append(formatedinfo);

  formatedinfo = HTMLgithub.replace ("%data%", bio.contacts.github);
  $("#topContacts").append(formatedinfo);

  formatedinfo = HTMLlocation.replace ("%data%", bio.location);
  $("#topContacts").append(formatedinfo);

  formatedinfo = HTMLwelcomeMsg.replace ("%data%", bio.welcome_message);
  $("#header").append(formatedinfo);

  formatedinfo = HTMLbioPic.replace ("%data%", bio.biopic);
 $("#header").append(formatedinfo);

  if ( bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formatedSkill = HTMLskills.replace ("%data%", bio.skills[0]);
    $("#skills").append(formatedSkill);
    formatedSkill = HTMLskills.replace ("%data%", bio.skills[1]);
    $("#skills").append(formatedSkill);
    formatedSkill = HTMLskills.replace ("%data%", bio.skills[2]);
    $("#skills").append(formatedSkill);
    formatedSkill = HTMLskills.replace ("%data%", bio.skills[3]);
    $("#skills").append(formatedSkill);
  }
}

bio.display();

work.display = function(){
 for ( job in work.jobs ) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formatedEmployerTitle = formattedEmployer + formattedTitle
    var formattedEmpLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formatedEmpworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var formatedEmpDate =  HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formatedEmployerTitle);
    $(".work-entry:last").append(formatedEmpDate);
    $(".work-entry:last").append(formattedEmpLocation);
    $(".work-entry:last").append(formatedEmpworkDescription);
  }
}

work.display();

projects.display = function() {
  for ( count in projects.project ) {
    $("#projects").append(HTMLprojectStart);
    var formatedProjects = HTMLprojectTitle.replace("%data%",projects.project[count].title);
    $(".project-entry:last").append(formatedProjects);
    formatedProjects = HTMLprojectDates.replace("%data%", projects.project[count].dates);
    $(".project-entry:last").append(formatedProjects);
    formatedProjects = HTMLprojectDescription.replace("%data%", projects.project[count].description);
    $(".project-entry:last").append(formatedProjects);
    for ( imagecount in projects.project[count].images) {
      formatedProjects = HTMLprojectImage.replace("%data%", projects.project[count].images[imagecount]);
      $(".project-entry:last").append(formatedProjects);
    }
  }
}

projects.display();

education.display = function() {
  for ( count in education.schools ) {
    $("#education").append(HTMLschoolStart);
    var formatedschool = HTMLschoolName.replace("%data%",education.schools[count].name);
    $(".education-entry:last").append(formatedschool);

    formatedschool = HTMLschoolDates.replace("%data%", education.schools[count].dates);
    $(".education-entry:last").append(formatedschool);


    formatedschool = HTMLschoolLocation.replace("%data%", education.schools[count].location);
    $(".education-entry:last").append(formatedschool);

    formatedschool = HTMLschoolDegree.replace("%data%", education.schools[count].degree);
    $(".education-entry:last").append(formatedschool);

    for ( majorcount in education.schools[count].majors) {
      formatedschool = HTMLschoolMajor.replace("%data%", education.schools[count].majors[majorcount]);
      $(".education-entry:last").append(formatedschool);
    }
  }
  $(".education-entry:last").append(HTMLonlineClasses);
  for ( counter in education.onlineCourses) {
    formatedschool = HTMLonlineTitle.replace("%data%", education.onlineCourses[counter].title);
    $(".education-entry:last").append(formatedschool);
    formatedschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[counter].school);
  $(".education-entry:last").append(formatedschool);
    formatedschool = HTMLonlineDates.replace("%data%", education.onlineCourses[counter].dates);
    $(".education-entry:last").append(formatedschool);
    formatedschool = HTMLonlineURL.replace("%data%", education.onlineCourses[counter].url);
    $(".education-entry:last").append(formatedschool);
  }
}

education.display();

$("#mapDiv").append(googleMap);

//var internationalizeButton = '<button>Internationalize</button>';
$("#main").append(internationalizeButton);

/*
$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});
*/
function inName( str1 ) {
  var spstr = str1.split(" ");
  var finit1 = spstr[0].substring(0,1);
  var finit2 = spstr[0].substring(1);
  var secondstr = spstr[1];
  var finalName = finit1.toUpperCase() + finit2.toLowerCase() + " " + secondstr.toUpperCase();
  return finalName;
}

function getRelationship(x, y) {
    // Your code goes here!
    var x1 = !isNaN(parseFloat(x)) && isFinite(x);
	var y1 = !isNaN(parseFloat(x)) && isFinite(x);
    var result;

	if (x1 === false) {
        if ( y1 === false) {
          if (y == "undefined") {
            result= "Can't compare relationships because undefined is not a number";
          }
          result= "Can't compare relationships because " + x + " and " + y + " are not numbers";
            return result;
        }
        if( y1 === true) {
          return "Can't compare relationships because this and " + y + " are not numbers";
            return result;
       }
	}
	if (x1 === true) {
        if ( y1 === false) {
          return "Can't compare relationships because this and " + y + " are not numbers";
            return result;
        }
        if( y1 === true) {
              if(y === undefined){
                return "Can't compare relationships because this and " + x + " are not numbers";
                //return "Can't compare relationships because this is not a number";
              }
              if (x > y){
                return ">";
              }
              if ( x<y ){
                return "<";
              }
              if ( x===y ) {
                  return "=" ;
              }
       return result;
       }
	}
 }
