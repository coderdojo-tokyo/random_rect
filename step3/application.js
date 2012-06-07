window.onload = function() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	
	for(var i = 0; i < 10; i++) {
		var x = Math.floor(Math.random() * 500);
		var y = Math.floor(Math.random() * 500);
		ctx.fillStyle = "blue";
		ctx.fillRect(x, y, 100, 100);
		ctx.lineWidth = "3";
		ctx.strokeStyle = "black";
		ctx.strokeRect(x, y, 100, 100);
	}
}
