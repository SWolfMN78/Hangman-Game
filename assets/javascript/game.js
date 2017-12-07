var gamesWon = 0; // this will increase beyond 0 if a round is won.
var gamesLost = 0; // this will increase beyond 0 if a round is lost.
var failedGuesses = 0;
var maxFailedGuesses = 5;
var letterCheck = ""; // this may be used to track the user's inputted letter.
var wordList1 = ["dog", "wolf", "demon", "dragon", "demagorgan", "mage", "thief", "knight", "paladin", "sorcerer", "bat", "mace", "sword", "dagger", "halbard"];
var secretWord;
var displayWord = "";


//practice function code for looping through an array.
// function listReader(arr){
// 	for (var i = 0; i < arr.length; i++){
// 		console.log(arr[i]);
// 	}
// 	console.log("--------")
// }
// listReader(wordList1);
// listReader(wordList2);
// listReader(wordList3);

/*Index information - user able to press enter to start the game into the next
screen as an alternitive to pressing the buttons below.
Use for the key --start-game-- */
window.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		document.getElementById("start-game").click();
	}
});


/*gameDisplay info - meat of programming will go here.
things to be added: -User will be given a word from the above arraylist to select from.
					-Key up the buttons to help with navigation.
					-handle adding an element to the screen for each right 
					or wrong answer.
					-All of the rules for the game will be stored here
					-When the user gets a word correct give them a point for a won game.
					-When a user gets hung give them a point for a lost game.
					-If a game is lost then ask if they wish to continue.
					*/

// 1 - select one of the three arrays to use -- Next pull a word from that array that the player will pick from.
	//Show directions for play in top right hand corner for the user - CSS this will be absolute so that it sits ontop of the interface.

// 2 - For each letter in the selected word create that number of "_" as a hint to the length of the word.

// 3 - User can now press any key a-z followed by enter or the "submit letter" button to check if they guessed right.
	//If all the letters are revealed then add one to user score - generate new word - reset all fields and starts game over.


// 4 - If user guesses wrong display error alert - This will be replaced later on by applying a section of the hanged man via css.  
		// Clear guess field after the guess.  If too many wrong guesses move to Game Over screen.

// 5 - If the user guesses correctly then fill in the letter the user selected and clear 

window.onload = pageLoad;

function pageLoad(){
	secretWord = wordList1[Math.floor(Math.random() * wordList1.length)];

	UpdateDisplayWord();
	document.getElementById("guessed-letters").innerHTML = "";
	letterCheck = "";

	failedGuesses = 0;
}

function UserGuess() {
	var guessedLetter;

	guessedLetter = document.getElementById("user-guess").value;
	document.getElementById("user-guess").value = "";

	if (letterCheck.indexOf	(guessedLetter) > -1)
	{
		alert("You already guessed that letter");
		return; //returns will leave the function so that the code below does not run.
	}

	letterCheck += guessedLetter;
	//update the guessed letters for the user:
	document.getElementById("guessed-letters").innerHTML = letterCheck;

	UpdateDisplayWord();
	CheckGameOver(guessedLetter); //pass this information into the function below.
}

function CheckGameOver(guessedLetter){
	if (displayWord.indexOf("_") === -1) {
		gamesWon += 1;
		document.getElementById("games-won").innerHTML = gamesWon;
		alert("Congrats!!! Now for a new challenge");
		pageLoad();
		return;

	}

	if (secretWord.indexOf(guessedLetter) === -1){
		//failed guess - Place code in for if failed

	}
}

function UpdateDisplayWord(){
	var currentLetter;

	displayWord = "";

	for (var i = 0; i < secretWord.length; i++){
		currentLetter = secretWord.substring(i, i + 1);

		if (letterCheck.indexOf(currentLetter) === -1){
			currentLetter = "_";
		}

		displayWord += currentLetter + " ";
	}

	document.getElementById("secret-word").innerHTML = displayWord;
}

/*This part is for the buttons of the gameDisplay screen:*/
// Was going to use this but after playing around with the code it feels more fluid to not have this button in the controls.
window.addEventListener("keyup", function(event) {
		//submit letter button 
		if (event.keyCode === 13) {
			document.getElementById("submit-answer").click();
		}
	});

//confirm if the user 
document.getElementById("new-game").addEventListener("click", function(){
	if (confirm("Are you sure you want to start a new game? Your current score will be lost.")) {
		pageLoad();
	}
});

document.getElementById("end-game").addEventListener("click", function(event){
	if (confirm("Are you sure you want to end the game? Your current score will be lost.")) {
		alert("You're leaving the game! Thank you for playing");
		return;
	}
	event.preventDefault();
});


/*gameOver display info - final screen data will go here.
Items requried: -Key event listener for Y/y for button Yes and N/n for button No
*/
//was considering this code but figured to comment it out after considering that this is not a common function of most websites.
	// window.addEventListener("keyup", function(event) {
	// 	if (event.keyCode === 89 || event.keyCode === 121) {
	// 		document.getElementById("yes-restart").click();
	// 	}
	// 	if (event.keyCode === 78 || event.keyCode === 110) {
	// 		document.getElementById("no-restart").click();
	// 	}
	// });