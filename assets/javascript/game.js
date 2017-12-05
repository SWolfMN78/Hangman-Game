var gamesWon = 0; // this will increase beyond 0 if a round is won.
var gamesLost = 0; // this will increase beyond 0 if a round is lost.
var letterCheck; // this may be used to track the user's inputted letter.
var wordList1 = ["dog", "wolf", "demon", "dragon", "demagorgan"];
var wordList2 = ["mage", "thief", "knight", "paladin", "sorcerer"];
var wordList3 = ["bat", "mace", "sword", "dagger", "halbard"];

function randomreader(arr){
	for (var i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
	console.log("--------")
}

randomreader(wordList1);
randomreader(wordList2);
randomreader(wordList3);
