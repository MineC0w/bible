var currentQuestionId = 0;
var currentQuestion;
var correntAnswer = 0;
$(document).ready(function() {
	$("#amiel").click(function(){
		document.getElementById("elevatorMusic").volume = document.getElementById("elevatorMusic").volume/2;
	});
	
	/* Initiate game-start process */
	$("#showInstructions").click(function(){
		var instructions = document.createElement("div");
		instructions.setAttribute("id","instructionsDivBack");
		instructions.onclick = function(){document.body.removeChild(instructions);};
		document.body.appendChild(instructions);
		
		var instructionsContent = document.createElement("div");
		instructionsContent.setAttribute("id","instructionsDivContent");
		
		instructionsContent.innerHTML = "<h3>הוראות</h3> <h1>תבינו לבד אתם כבר לא בכיתה ט'</h1> <h3>מקשים</h3> עכבר. <h3>דרישות מערכת</h3> דפדפן שהוא לא מתוצרת מייקרוסופט.";
		instructions.appendChild(instructionsContent);
	});
	
	/* Show instructions on screen */
	$("#startGame").click(function(){
		var instructions = document.createElement("div");
		instructions.setAttribute("id","instructionsDivBack");
		document.body.appendChild(instructions);
		
		var instructionsContent = document.createElement("div");
		instructionsContent.setAttribute("id","battleScreen");
		
		instructionsContent.innerHTML = '<div id="shell"> <div id="playerGUI"> <table align="center"> <tr> <td class="Item">Attack</td> <td class="Item">Pokemon</td> </tr> <tr> <td class="Item">Bag</td> <td class="Item">Run</td> </tr> </table> </div> <div id="opponentHp"> <span id="battleOpponentName" class="pokemonName">השאלה כמה חול יכול לאכול חול בשעה בהנחה שחול יכול לאכול חול היא שאלה עתיקת יומין שסינים רבים ניסו לפתור.</span> </div> <div id="playerPokemon"> </div> <div id="opponentPokemon"> </div><div id="opponentPokemonGround"> </div> </div>';
		instructions.appendChild(instructionsContent);
		
		startGame();
	});
	
	
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) { document.body.removeChild(document.getElementById("instructionsDivBack")); document.getElementById("battleMusic").pause(); }   // escape key maps to keycode `27`
});

/* Start the game */
function startGame() {
	//End menu music, begin battle music
	document.getElementById("elevatorMusic").pause();
	document.getElementById("battleMusic").play();
	
	setQuestion();
}

function exitGame() {
	document.getElementById("battleMusic").play();
}

function endGame() {

}

function setQuestion() {
	//Set Pokemon
	document.getElementById("opponentPokemon").style.backgroundImage = "url('evil/"+(Math.floor(Math.random()*3)+1)+".png')";
	/*
	//Generate the question
	var questionId = Math.floor((Math.random() * 100 )% Molds.length);
	var question = CreateQuestion(new Molds[questionId]);
	*/
	var question = death[currentQuestionId];
	//Show question on screen
	currentQuestion = question;
	document.getElementById("battleOpponentName").innerHTML = currentQuestion.Question;
	
	for(var i in currentQuestion.Answers) {
		document.getElementsByClassName("Item")[i].innerHTML = currentQuestion.Answers[i];
		if(currentQuestion.CorrectAnswer == i) 
			document.getElementsByClassName("Item")[i].onclick = function(){correctAnswer()};
		else
			document.getElementsByClassName("Item")[i].onclick = function(){wrongAnswer()};
	}
	
	currentQuestionId++;
}

function correctAnswer() {
	//Show "The answer was correct! It's super effective!" on screen
	var org = document.getElementById("playerGUI").innerHTML;
	document.getElementById("playerGUI").innerHTML = "תשובה נכונה";
	
	//Activate faint animation
	correntAnswer++;
	//Play victory music
	document.getElementById("correctMusic").play();
	document.getElementById("battleMusic").pause();
	$("#opponentPokemon").hide(4000, "linear");
	//Allow continuation to next question
	setTimeout(function(){
		document.getElementById("correctMusic").pause();
		setTimeout(function(){
		document.getElementById("playerGUI").innerHTML = org;
		document.getElementById("correctMusic").pause();
		document.getElementById("battleMusic").play();
		setQuestion();
		$("#opponentPokemon").show(1500, "linear");
		
		
		},2000);
	},3000);
}

function wrongAnswer() {
	document.getElementById("battleMusic").pause();
	//Show "The answer was wrong and you missed! You hit yourself out of frustriation!"
	var org = document.getElementById("playerGUI").innerHTML;
	document.getElementById("playerGUI").innerHTML = "תשובה שגויה";
	document.getElementById("wrongMusic").play();
	//Give new question
	setTimeout(function(){
		document.getElementById("playerGUI").innerHTML = org;
		setQuestion();
		document.getElementById("battleMusic").play();
	},3000);
}