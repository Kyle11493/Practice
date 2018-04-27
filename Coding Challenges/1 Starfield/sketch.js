var stars = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	for(let i = 100; i > 0; i--) {
		stars[i] = new Star();
	}
}

function draw() {
	background(0);
	for(let i = 0; i < stars.length; i++) {
		stars[i].update();
		stars[i].show();
	}
}