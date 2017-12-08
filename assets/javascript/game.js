var gamesWon = 0; // this will increase beyond 0 if a round is won.
var gamesLost = 0; // this will increase beyond 0 if a round is lost.
var failedGuesses = 0;
var maxFailedGuesses = 5;
var letterCheck = ""; // this may be used to track the user's inputted letter.
var wordList1 = ["dog", "wolf", "demon", "dragon", "demagorgan", "mage", "thief", "knight", "paladin", "sorcerer", "bat", "mace", "sword", "dagger", "halbard"];
var secretWord;
var displayWord = "";


/*practice function code for looping through an array.
	function listReader(arr){
 	for (var i = 0; i < arr.length; i++){
		console.log(arr[i]);
 	}
 	console.log("--------")
	}
 listReader(wordList1);
 listReader(wordList2);
 listReader(wordList3); */

/*Index information - user able to press enter to start the game into the next screen as an alternitive to pressing the buttons below.
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

//When the window loads up run the preset function for the controls behind the page load so that the stage is set for the player.
window.onload = pageLoad;

/* Pull a random word from the array and load it into the game. 
	Be sure to show directions for play in top right hand corner for the user - 
	CSS this will be absolute so that it sits ontop of the interface.*/
function pageLoad(){
	secretWord = wordList1[Math.floor(Math.random() * wordList1.length)];

	UpdateDisplayWord();
	//empty out the guessed letters.
	document.getElementById("guessed-letters").innerHTML = "";
	letterCheck = "";

	//insure that the key-entry is set to the textarea.
	document.getElementById("user-guess").focus();

	//not forgetting to set failedguesses back to 0.
	failedGuesses = 0;
}

/* make a function which will handle the information guessed by the user.
	User can now press any key a-z followed by enter or the "submit letter" button to check if they guessed right.
	If all the letters are revealed then add one to user score - generate new word - reset all fields and starts game over. */
function UserGuess() {
	var guessedLetter;

	//set the 
	guessedLetter = document.getElementById("user-guess").value;
	document.getElementById("user-guess").value = "";

	if (letterCheck.indexOf	(guessedLetter) > -1) //insure that the user will not pick the same letter again.
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

//if the game is won or lost function to be written
function CheckGameOver(guessedLetter){
	if (displayWord.indexOf("_") === -1) {
		gamesWon += 1;
		document.getElementById("games-won").innerHTML = gamesWon;
		alert("Congrats!!! Now for a new challenge");
		pageLoad();
		return;
	}

	/*  If user guesses wrong display error alert - This will be replaced later on by applying a section of the hanged man via css.  
	in the meantime - simply track if the game is over according to the maxFailedGuesses variable created. 5 chances = head, arm, arm, leg, leg = death. 
	 Clear guess field after the guess.  If too many wrong guesses move to Game Over screen. */
	if (secretWord.indexOf(guessedLetter) === -1){ //in other words if the user's guess does not line up - remove 1 from max guesses.
		maxFailedGuesses -= 1; //remove 1 from max guesses until it hits 0
		if (maxFailedGuesses < 1){ // in here is where a portion of the hanged man will appear.   <<=====
			alert("You have run out of guesses, a good man has been hung.");
			gamesLost += 1;
			pageLoad();
				//not sure why but the new word being loaded is seen at first.
			return;
		}
	}
}

/* Create a function which will handle updating the displayed word.  For each letter in the selected word create that 
number of "_" as a hint to the length of the word. */
function UpdateDisplayWord(){
	var currentLetter;

	//set the display word to blank just to be on the safe side of things.
	displayWord = "";

	/*create a for loop which will run over the length of the secret word that was pulled in, then move past each letter to check it */
	for (var i = 0; i < secretWord.length; i++){
		currentLetter = secretWord.substring(i, i + 1);

		if (letterCheck.indexOf(currentLetter) === -1){
			currentLetter = "_";
		}

		//combine the information of displayWord and the currentletter + a space
		displayWord += currentLetter + " ";
	}
	//
	document.getElementById("secret-word").innerHTML = displayWord;
}

/*This part is for the buttons of the gameDisplay screen:*/
// Was going to use this but after playing around with the code it feels more fluid to not have this button in the controls.
window.addEventListener("keyup", function(event) {
		//submit letter button - 13 is the keyCode for "enter".
		if (event.keyCode === 13) {
			document.getElementById("submit-answer").click();
		}
	});

//confirm if the user wants to actually start a new game or not.
document.getElementById("new-game").addEventListener("click", function(){
	if (confirm("Are you sure you want to start a new game? Your current score will be lost.")) {
		pageLoad();
	}
});

//confirm if the user wants to actually end the game - throw a warning then act on it.
//used the event.preventDefault to insure that if they select to stay in the game that the game remains.
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