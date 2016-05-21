
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.fillStyle = "black";
context.fillRect(0, 0, 1062, 550);

var classPicked = false;

//Create Menu Box
context.beginPath();
context.lineWidth="10";
context.strokeStyle="white";
context.strokeRect(50,400,962,135);
context.stroke();



context.font = "30px Arial";
context.fillStyle = "white";
//context.textAlign = "center";
context.fillText("Choose a Class", 425, 100);
context.fillText("Warrior", 725, 480);
context.fillText("Mage", 250, 480);


//White Dot
context.beginPath();
context.lineWidth="10";
context.strokeStyle="white"; 
context.strokeRect(225,470,1,1);
context.stroke();

var classChosen = 1;



document.addEventListener("keydown", function(e) {

	if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
    if(!classPicked) {
    	chooseClass(e);
    }

});



//clearBox();


function chooseClass(e) {


	var userInput = e.keyCode;

	//Begin Idea 1 Below VV
	//console.log(userInput);

	if(userInput == 37) {

		//Create White Dot
		context.beginPath();
		context.lineWidth="10";
		context.strokeStyle="white";
		context.strokeRect(225,470,1,1);
		context.stroke();


		//Remove other White Dot
		context.beginPath();
		context.lineWidth="10";
		context.strokeStyle="black";
		context.strokeRect(700,470,1,1);
		context.stroke();

		classChosen = 1;
	}
	else if(userInput == 39){
		context.beginPath();
		context.lineWidth="10";
		context.strokeStyle="white";
		context.strokeRect(700,470,1,1);
		context.stroke();

		context.beginPath();
		context.lineWidth="10";
		context.strokeStyle="black";
		context.strokeRect(225,470,1,1);
		context.stroke();

		classChosen = 2;
	}
	else if(userInput == 13){
		clearBox();
		classPicked = true;
		clearScreen();
		askName();
	}
}
var userName = "";
function askName(e) {
	var nameChosen = false;
	// var userInput = e.keyCode;
	context.fillStyle = "white";
	context.fillText("Enter your name", 425, 100);

	document.addEventListener("keydown", function(x) {
		//console.log(x);
		if([32, 37, 38, 39, 40].indexOf(x.keyCode) > -1) {
	        x.preventDefault();
	    }
	    if(x.keyCode !== 13) {
	    	userName += String.fromCharCode(x.keyCode);
	    	userName = userName.toLowerCase();
	    }
	    else {
	    	beginExposition();
	    }
	});
}


function clearBox() {
	context.beginPath();
	context.fillStyle="black";
	context.fillRect(60,410,942,115);
}

function clearScreen() {
	context.beginPath();
	context.fillStyle="black";
	context.fillRect(0,0,1062, 390);
	context.fillStyle="white";
}



function beginExposition() {
	clearScreen();
	
	drawCharacter();
	context.font = "20px Arial";
	context.fillStyle="white";
	context.fillText("In this world, names hold great power. If one's true name is spoken aloud, the speaker has the power", 80 , 450);
	context.fillText("over their soul. The very essence of their being. You, brave ", 80 , 475);
	if(classChosen == 2) {
		context.fillText("Warrior", 610, 475);
		context.fillText(userName, 685, 475);
	}
	else if(classChosen == 1) {
		context.fillText("Mage", 610, 475);
		context.fillText(userName, 670, 475);
	}
	context.fillText("are the chosen one, with the power to see the names of all evil-doers. Slay the Evil Necromancer!", 80 , 500);
	beginGame();
}

var x = 700, //Initialize X starting position
    velX = 0, //Initialize x starting speed ( i think?)
    speed = 2,
    friction = 0.4,
    keys = [];

function beginGame() {
	document.addEventListener("keydown", function(y) {
		//console.log(y);
		keys[y.keyCode] = true;
		if([32, 37, 38, 39, 40].indexOf(y.keyCode) > -1) {
	        y.preventDefault();
	    }
	    var userInput = y.keyCode;
		if(userInput === 13) {
			clearBox();
			moveEnemies();

		}
		enemiesDefeated();
			//userName += String.fromCharCode(x.keyCode);
	    	//userName = userName.toLowerCase();

	});


}

function drawCharacter() {
	var smiley = document.getElementById("character");
	context.drawImage(smiley, 10, 10);
}




var fruitDefeated = false;
var enemyOne = "fruit";

function moveEnemies() {
	// if(userInput === enemyOne.charCodeAt(0)) {
	// 	enemyOne = enemyOne.slice(1);
			
	// 	if(enemyOne === "") {
	// 		enemiesDefeated();
	// 	}

	// }
	var count = 5;

	if(keys[70] && count == 5) {
		//enemyOne = enemyOne.slice(1);
		count--;		
	}

	if(keys[82] && count == 4) {
		//enemyOne = enemyOne.slice(1);
		count--;
	}

	if(keys[85] && count == 3) {
		//enemyOne = enemyOne.slice(1);
		count--;
	}
	if(keys[73] && count == 2) {
		//enemyOne = enemyOne.slice(1);
		count--;
	}
	if(keys[84] && count == 1) {
		//enemyOne = enemyOne.slice(1);
		count--;
	}
	if(count == 0) {
		clearScreen();
		return;
	}

    velX = velX * friction; //Controls speed
    x   += velX;            //changes the value of x

    if (x <= 5) { 			//Make sure X doesn't go off the side
        x = 5;
    }
    velX--;
    clearScreen();
    context.beginPath();
    context.fillStyle = "white";
    drawCharacter();
    context.fillText(enemyOne, (x - 5), 225);
    context.strokeRect(x,250,1,1);
    context.stroke();

    if(count > 0) {
    	setTimeout(moveEnemies, 10);
	}
}

function enemiesDefeated() {
		context.fillText(enemyOne, 80 , 450);
		clearScreen();
		drawCharacter();

}