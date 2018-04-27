function Cell(position, radius, c, velocity) {
	this.position = position || createVector(random(width), random(height));
	this.radius = radius || random(10, 100);
	this.c = c || color(random(255), random(255), random(255));
	this.velocity = velocity || p5.Vector.random2D();
}
Cell.prototype.move = function () {
	this.calculateVelocity();
	this.position.add(this.velocity);
}

Cell.prototype.calculateVelocity = function() {
	let bounce = function(velocity) {
		return velocity * -wallDampening;
	}
	this.velocity = this.velocity.add(p5.Vector.random2D());

	if(this.velocity.x + this.position.x <= 0 || this.velocity.x + this.position.x >= width) {
		this.velocity.x = bounce(this.velocity.x);
	}
	if(this.velocity.y + this.position.y <= 0 || this.velocity.y + this.position.y >= height) {
		this.velocity.y = bounce(this.velocity.y);
	}
}

Cell.prototype.grow = function() {
	this.radius += growthRate;
}

Cell.prototype.mitosis = function () {
	this.radius /= sqrt(2);
	return new Cell(this.position.copy(), this.radius, this.c, p5.Vector.mult(this.velocity, -1));
}

Cell.prototype.show = function () {
	fill(this.c);
	ellipse(this.position.x, this.position.y, this.radius, this.radius);
}

Cell.prototype.clicked = function (clickedX, clickedY) {
	let distance = dist(this.position.x, this.position.y, clickedX, clickedY);
	return (distance <= this.radius);
}