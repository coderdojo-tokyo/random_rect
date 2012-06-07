function saikoro500() {
	return Math.floor(Math.random() * 500);
}

window.onload = function() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	for ( var i = 0; i < 10; i++) {
		var x = saikoro500();
		var y = saikoro500();
		var haba = saikoro500();
		var takasa = saikoro500();
		ctx.fillStyle = "blue";
		ctx.fillRect(x, y, haba, takasa);
		ctx.lineWidth = "3";
		ctx.strokeStyle = "black";
		ctx.strokeRect(x, y, haba, takasa);
	}
}
