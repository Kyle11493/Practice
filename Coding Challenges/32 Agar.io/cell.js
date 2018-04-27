function Cell(radius, position) {
	this.radius = radius || 20;
	this.position = position || createVector(random(this.radius, width - this.radius), random(this.radius, height - this.radius));
	this.area = 0;
	this.c = color(random(255), random(255), random(255));
}
Cell.prototype.getVelocity = function() {
	let velocity = createVector(mouseX, mouseY);
	velocity.sub(this.position);
	return velocity.setMag(velocityMagnitude); //Scalable later?
}
Cell.prototype.move = function(velocity) {
	this.position = this.position.add(velocity);
}
// Cell.prototype.update = function() {
// 	let velocity = createVector(mouseX, mouseY);
// 	velocity.sub(this.position);
// 	velocity.setMag(3); //TODO set scalable speed
// 	this.position.add(velocity);
// }
Cell.prototype.show = function() {
	fill(this.c)
	ellipse(this.position.x, this.position.y, this.radius*2);
}
Cell.prototype.calculateArea = function() {
	return PI * sq(this.radius);
}
