function Cell(radius, position) {
	this.radius = radius || 20;
	this.position = position || createVector(random(-width, width*2), random(-height, height*2));
	this.area = 0;
	this.c = color(random(255), random(255), random(255));
}
Cell.prototype.update = function() {
	let velocity = createVector(mouseX - width/2, mouseY - height/2);
	velocity.setMag(velocityMagnitude);
	this.position.add(velocity);
}
Cell.prototype.show = function() {
	fill(this.c)
	ellipse(this.position.x, this.position.y, this.radius*2);
}
Cell.prototype.calculateArea = function() {
	return PI * sq(this.radius);
}
