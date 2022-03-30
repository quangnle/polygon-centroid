let name = 'DINOVATIVE';
let points = [];

function setup(){
	var canvas = createCanvas(640, 480);
	canvas.parent('sketch-holder');
}

function draw(){
	background(255);
	stroke(0.5);
	
	for (let i = 0; i< points.length; i++){
		ellipse(points[i].x, points[i].y, 2, 2);
	}
	
	if (points.length > 2){
		let polygon = new Polygon(points);
		polygon.draw();
	}
}

function mousePressed(){
	points.push({x: mouseX, y:mouseY});
}