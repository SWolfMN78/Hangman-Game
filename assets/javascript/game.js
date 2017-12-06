var gamesWon = 0; // this will increase beyond 0 if a round is won.
var gamesLost = 0; // this will increase beyond 0 if a round is lost.
var letterCheck; // this may be used to track the user's inputted letter.
var wordList1 = ["dog", "wolf", "demon", "dragon", "demagorgan"];
var wordList2 = ["mage", "thief", "knight", "paladin", "sorcerer"];
var wordList3 = ["bat", "mace", "sword", "dagger", "halbard"];

//practice function code for looping through an array.
function listReader(arr){
	for (var i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
	console.log("--------")
}
listReader(wordList1);
listReader(wordList2);
listReader(wordList3);

/*Index information - user able to press enter to start the game into the next
screen as an alternitive to pressing the buttons below.*/



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



/*gameOver display info - final screen data will go here.
*/