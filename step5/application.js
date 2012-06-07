function saikoro(max) {
	return Math.floor(Math.random() * max);
}

window.onload = function() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	for ( var i = 0; i < 10; i++) {
		var x = saikoro(500);
		var y = saikoro(500);
		var haba = saikoro(100);
		var takasa = saikoro(100);
		ctx.fillStyle = "blue";
		ctx.fillRect(x, y, haba, takasa);
		ctx.lineWidth = "3";
		ctx.strokeStyle = "black";
		ctx.strokeRect(x, y, haba, takasa);
	}
}
