const startCellsNumber = 5;
const wallDampening = 0.5;
const growthRate = 0.01;
var cells = [];

function setup() {
	createCanvas(700, 700);
	for (let i = 0; i < startCellsNumber; i++) {
		cells[i] = new Cell();
	}
}

function draw() {
	background(51);
	for (let i = 0; i < cells.length; i++) {
		cells[i].grow();
		cells[i].move();
		cells[i].show();
	}
}

function mousePressed() {
	for(let i = cells.length - 1; i > 0; i--) {
		if(cells[i].clicked(mouseX, mouseY)) {
			cells.push(cells[i].mitosis());
		}
	}
}