let canvas = document.getElementById('game');
let context = canvas.getContext('2d')

let asteroid = {
	x: 0,
	y: 300,
	dx: 1,
	dy: 2
};
let asteroidImg = new Image();
asteroidImg.src = 'data/asteroid.png';
let fonImg = new Image();
fonImg.src = 'data/wall.jpg';


fonImg.onload = function(){
	game();
}

function game(){
	update();
	render();
	requestAnimFrame(game);
}

function update(){
	//физика
	asteroid.x = asteroid.x + asteroid.dx;
	asteroid.y = asteroid.y + asteroid.dy;

	//Границы
	if (asteroid.x >= 550 || asteroid.x < 0)
		asteroid.dx = -asteroid.dx;
	if (asteroid.y >= 550 || asteroid.y < 0)
		asteroid.dy = -asteroid.dy;
}


function render(){
	context.drawImage(fonImg, 0, 0, 600, 600);
	context.drawImage(asteroidImg, asteroid.x, asteroid.y, 50, 50)
}

let requestAnimFrame = (function(){
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function(callback){
			window.setTimeout(callback, 1000 / 20);
		};
})();