var stars = [];

const STARS = 1000;

const DELTA = 30;

const VELOCITY = [10, -8];
	
function draw() {
	var canvas = document.getElementById("starry_night");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	for(var i = 0; i < STARS; i++) {
		stars[i][0] += VELOCITY[0] * 1 / DELTA;
		stars[i][1] += VELOCITY[1] * 1 / DELTA;

		if(stars[i][0] < 0) {
			stars[i][0] += canvas.width;
		}
		if(stars[i][0] >= canvas.width) {
			stars[i][0] -= canvas.width;
		}
		if(stars[i][1] < 0) {
			stars[i][1] += canvas.height;
		}
		if(stars[i][1] >= canvas.height) {
			stars[i][1] -= canvas.height;
		}

		ctx.fillStyle = "white";
		ctx.beginPath();
        	ctx.arc(stars[i][0], stars[i][1], stars[i][2], 0, 2 * Math.PI);
        	ctx.fill();
	}
}

document.addEventListener("DOMContentLoaded", function(event) {
	var canvas = document.getElementById("starry_night");
	var ctx = canvas.getContext("2d");
	canvas.width = 2 * window.innerWidth;   
	canvas.height = 2 * window.innerHeight;

	for (var i = 0; i < STARS; i++) {
		var x = Math.random() * canvas.width;
		var y = Math.random() * canvas.height;
		var radius = 2 * Math.random();
	
		stars.push([x, y, radius])
	}
	
	setInterval(draw, DELTA);
});




