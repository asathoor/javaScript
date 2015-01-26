/* 
JavaScript Lesson One
by Per Thykjaer Jensen
 */

// variables 
 var a = 1;
 var b = "one";
 var c = false;
 var d = true;
 var e = null; 

// logging to the console ( ctrl + shift + j )
console.log("This is a test log message ...");
 
// functions 
 function hello() {
 	document.getElementById("content").style.fontSize = "2em"; // CSS style
 	document.getElementById("content").style.color = "red"; // CSS style
 	document.getElementById("content").innerHTML = "Wooow, JavaScript can manipulate the tag content!"; // check the methods here
 }
 
 // selfinvoking function
 
 (function () {
 		var z = "zzzz ...";
    console.log( "Selfinvoked: " + z ) ;
})();
 
// execute a function 
hello();

// Check out the document. options
 
 // object is really a collection of variables
 var workout = { exercise: "Jogging",
 	duration: "00:35:20",
 	note: "Well, just started running again, so ... " 
 }

// add a function to the workout

 var workout2 = { exercise2: "Karate",
 	duration2: "02:15:20",
 	note2: "Well ... ",
 	wrkWrite: function () { return "<p> The function in the workout object: " + this.exercise2 + " " + this.duration2 + "<p>" } 
 }

document.write( workout2.wrkWrite() ); // execute the object's function
  
 // write out from the object (and yes this is how to write something in a document)
 document.write("<div id=\"exercise\"> <em> Exercise: " 
 	+ workout.exercise 
 	+ ".</em><br> " 
 	+ "Duration: " 
 	+ workout.duration 
 	+ ".<br> Note: " 
 	+ workout.note
 	+ "</div>");
 
// you could also use a loop, like this
  
for (x in workout) {
    document.write( workout[x] + "<br>" );
}

// this function will create an object
function myObject(aname,age){
	this.theName = aname; // this = a var in this function
	this.theAge = age;
}

// A new instance of the object (yes, you may reuse the code)
var zzz = new myObject( "Yoko", 84);
document.write("<br>" + zzz.theName );

// array
var clr = ["#ff0000", "#fff", "#000"]; // best practise

var tinct = new Array("#ff0000", "#fff", "#000"); // avoid this (unless you want to create an empty array)

console.log(tinctures);


// document.getElementById("content").innerHTML = cars[0];

// or better: a for loop
// write it ... and use the length property.

/*
NB: 
The JavaScript arrays are indexed and never associative.
Objects on the other hand may hold named variables.0
*/


