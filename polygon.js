var Polygon = function(points){
	this.points = points;
	
	this.draw = function(){
		for (let i = 0; i< this.points.length; i++){
			let p1 = this.points[i];
			let p2 = this.points[(i+1) % this.points.length];
			line(p1.x, p1.y, p2.x, p2.y);
		}
		
		let centroid = this.getCentroid();
		fill("#0f0");
		ellipse(centroid.x, centroid.y, 5, 5);
	}
	
	this.getCentroid = function() {
		let s = 0.0;
		let mx = 0.0;
		let my = 0.0;
		for (let i = 0; i < this.points.length; i++){
			let p1 = this.points[i];
			let p2 = this.points[(i+1) % this.points.length];
			a = p1.x * p2.y - p2.x * p1.y;
			mx += (p1.x + p2.x) * a;
			my += (p1.y + p2.y) * a;
			s += a;
		}
		
		return {x: mx/(s*3.0), y: my/(s*3.0)};
	}
} 