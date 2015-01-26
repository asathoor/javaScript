/* 

JavaScript Animation One
by Per Thykjaer Jensen

*/
 

// Question 1 
// A ) Change the title of the document to Animation One
// B ) Change the h1 tag to Animation One
// C ) Do this with as few codelines as possible


// QUESTION 2
// Modify the code below:

// A ) Create a number of geometric shapes on a canvas. Animate them as the bouncing ball below.
// B ) Use a for loop to create at least 81 small bouncing balls, squares or images.
// C ) Modify the speed of each ball.

// Tip: random number: Math.floor( Math.random() * 10 )
// Tip: use a for loop.


// ANIMATION

var c=document.getElementById("boing");
var boing=c.getContext("2d");
var y = 200; // positionerer animationen
var x = 300;
var speedX = 3;
var speedY = 5;
var xPos = 400;


// ANIMATION

function drawCircle(){
		
		boing.clearRect(0,0,500,400); // prepare an empty canvas 	

		this.y = this.y + speedY;
		this.x = this.x + speedX;
		this.size = 20;


		// bouncing ball
		if( this.y<75 || this.y>325) {
			speedY=-speedY;
			} 
		if( this.x<75 || this.x>425) {
			speedX=-speedX;
			} 


		// path
		boing.beginPath();
		boing.arc(this.x,this.y,this.size+50,0,2*Math.PI);

		boing.globalAlpha= 1;
		boing.fillStyle = 'orange';

		boing.fill();
		boing.stroke();



		// Setting FPS to 60
		setTimeout(drawCircle,1000/60); // "selfcall"		

	}

drawCircle(); // execute the function
