function saikoro(max) {
	return Math.floor(Math.random() * max);
}

window.onload = function() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	var colors = new Array(4);
	colors[0] = "yellow";
	colors[1] = "green";
	colors[2] = "blue";
	colors[3] = "red";
	
	for ( var i = 0; i < 10; i++) {
		var x = saikoro(500);
		var y = saikoro(500);
		var haba = saikoro(100);
		var takasa = saikoro(100);
		var colorNo = saikoro(4);
		var color = colors[colorNo];
		ctx.fillStyle = color;
		ctx.fillRect(x, y, haba, takasa);
		ctx.lineWidth = "3";
		ctx.strokeStyle = "black";
		ctx.strokeRect(x, y, haba, takasa);
	}
}
