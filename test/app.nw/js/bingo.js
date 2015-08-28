window.onload = init;
var usedNum = [];

function init () {
	if (document.getElementById){
		document.getElementById("reload").onclick = anotherCard;
		newCard();
	}else{
		alert("Ur browser need javascript!");
	}
}

function newCard(){
	for (var i = 1; i <= 25; i++) {
		setSquare(i);
	}
}

function anotherCard () {
	for (var i = 0; i < usedNum.length; i++) {
		usedNum[i] = false;
	}; 
	newCard();
}

function setSquare (i) {
	var current = document.getElementById("square"+i);
	if(current){
		var newNum = null;
		do{
			newNum = getNum(i);
		}while(usedNum[newNum]);
		current.innerHTML = newNum;
		current.className = "";
		current.onmousedown = picked;
		usedNum[newNum] = true;
	}
}

function picked (event) {
	if(event){
		var thisSquare = event.target;
	}else{
		var thisSquare = window.event.srcElement;
	}
	if(thisSquare.className === ""){
		thisSquare.className = "pickedBG";
	}else{
		thisSquare.className = "";
	}
	checkWin();
}

function checkWin () {
	
}

function getNum (i) {
	return Math.floor((i-1)/5)*15+Math.floor(Math.random()*15);
}