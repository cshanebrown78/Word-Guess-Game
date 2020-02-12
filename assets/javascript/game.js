// Global

// var randomWord = document.getElementById("currentWord");
// var lettersUsed = document.getElementById("usedLetters");
// var guessRemain = document.getElementById("guessesRemaining");
var underScore = [];
var miscWord = "";
var wins = 0;
var guessRemaining = 10;
var totalChances = 10;
var guessCorrect = 0;
var wordLetters = [];
var correctLetter = [];
var incorrectLetter = [];
var letterGuessed = [];
// Only acceptable user inputs
var correctInputs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Words for the game
var randoWord = ["jet","airplane","aviation","pilot","radar","propeller","rudder","flight","cockpit","runway","helicopter"];





// Game play

function gameStart() {

    // Picks the word
    miscWord = randoWord[Math.floor(Math.random()*randoWord.length)];
    console.log(miscWord);
    wordLetters = miscWord.split('');
    underScore = [] ;
    letterGuessed = [];
    

    for (i = 0; i < miscWord.length; i++) {
        underScore.push("_");
        // document.getElementById('currentWord').innerHTML = underScore;
    }

    document.getElementById('currentWord').innerHTML = underScore.join(' ');
    document.getElementById('guessesRemaining').innerHTML = guessRemaining;
 
    

}

gameStart();

   document.onkeyup = function(event) {

     for(var j = 0; j < correctInputs.length; j++) {
        // if((event.key === correctInputs[j]) && (event.key !== letterGuessed[j])) {
        if ((event.key === correctInputs[j])) {
            userChoice = event.key.toLowerCase();
            correctInputs.splice(j, 1);
            // console.log(userChoice);
            letterGuessed[j] = userChoice;
            document.getElementById('usedLetters').innerHTML = letterGuessed.join(' ');

            guessSort(userChoice);
            winLose();
        }   
    }     
    
}
    

function guessSort () {

    if (miscWord.indexOf(userChoice) > -1) {
            for (var i = 0; i < miscWord.length;i++) {
            if (wordLetters[i] === userChoice) {
                //console.log("this worked");
                correctLetter++
                underScore.splice(i,1,userChoice);
                document.getElementById('currentWord').innerHTML = underScore.join(' ');
            } 
        }   
    } else {
            incorrectLetter.push(userChoice);
            guessRemaining--
            // console.log(guessRemaining);
            document.getElementById('guessesRemaining').innerHTML = guessRemaining;
        }
}


function gameReset() {

    miscWord = randoWord[Math.floor(Math.random()*randoWord.length)];
    console.log(miscWord);
    wordLetters = miscWord.split('');

    underScore = [] ;
    guessRemaining = 10;
    guessCorrect = 0;
    wordLetters = [];
    letterGuessed = [];

    gameStart ();

}


function winLose() {
    if (miscWord.length === correctLetter) {
        wins++
        document.getElementById("winsCounter").innerHTML = wins;
        alert("Winner winner chicken dinner");
        gameReset();

} else if (guessRemaining === 0) {
        alert("You Choked");
        gameReset();
}

}