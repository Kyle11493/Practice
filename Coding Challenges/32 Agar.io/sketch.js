var player;
var foodCells = [];
const numberOfFoodCells = 20
const velocityMagnitude = 2

function setup() {
	createCanvas(600, 600);
	player = new Cell(20, createVector(width/2, height/2));
	for(let i = 0; i < numberOfFoodCells; i++) {
		foodCells[i] = new Cell(10);
	}
}

function draw() {
	background(0);
	player.show();
	let playerVelocity = player.getVelocity();
	for(let i = foodCells.length -1; i > 0; i--) {
		foodCells[i].move(p5.Vector.mult(playerVelocity, -1));
		foodCells[i].show();
	}
}