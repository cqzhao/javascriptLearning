window.onload = init;

function init () {
	for (var i = 1; i <= 25; i++) {
		setSquare(i);
	}
}

function setSquare (i) {
	var current = document.getElementById("square"+i);
	if(current){
		current.innerHTML = getNum(i);
		console.log(current+"  "+getNum(i));
	}
}

function getNum (i) {
	return Math.floor((i-1)/5)*15+Math.floor(Math.random()*15);
}