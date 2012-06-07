window.onload = function() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	
	ctx.fillStyle = "blue";
	ctx.fillRect(100, 100, 300, 300);

	ctx.lineWidth = "3";
	ctx.strokeStyle = "black";
	ctx.strokeRect(100, 100, 300, 300);
}
