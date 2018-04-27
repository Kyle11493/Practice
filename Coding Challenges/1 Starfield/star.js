function Star() {
	this.x = random(0, width);
	this.y = random(0, height);
	this.z = random(0, width);
}
Star.prototype.update = function() {

}
Star.prototype.show = function() {
	fill(255);
	noStroke();
	ellipse(this.x, this.y, 3, 3);
}