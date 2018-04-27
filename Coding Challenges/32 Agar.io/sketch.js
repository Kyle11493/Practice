var player;
var foodCells = [];
const numberOfFoodCells = 200;
const velocityMagnitude = 2;

function setup() {
	createCanvas(600, 600);
	player = new Cell(20, createVector(width/2, height/2));
	for(let i = 0; i < numberOfFoodCells; i++) {
		foodCells[i] = new Cell(10);
	}
}

function draw() {
	background(0);

	translate(width/2-player.position.x, height/2-player.position.y);
	player.update();
	player.show();
	for(let i = foodCells.length -1; i > 0; i--) {
		foodCells[i].show();
	}
}