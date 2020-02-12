// Global

// var randomWord = document.getElementById("currentWord");
// var lettersUsed = document.getElementById("usedLetters");
// var guessRemain = document.getElementById("guessesRemaining");
var underScore = [];
var miscWord = "";
var wins = 0;
var guessRemaining = 10;
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
    underscore = [] ;

    for (i = 0; i < miscWord.length; i++) {
        underScore.push("_");
        // document.getElementById('currentWord').innerHTML = underScore;
    }

    document.getElementById('currentWord').innerHTML = underScore.join(' ');
    document.getElementById('guessesRemaining').innerHTML = guessRemaining;
 
    

}

gameStart();

   document.onkeyup = function(event) {

    for(var j = 0; j < 26; j++) {
        if((event.key === correctInputs[j]) && (event.key !== letterGuessed[j])) {
            userChoice = event.key.toLowerCase();
            // console.log(userChoice);
            letterGuessed[j] = userChoice;

            document.getElementById('usedLetters').innerHTML = letterGuessed.join(' ');
            document.getElementById('guessesRemaining').innerHTML = guessRemaining;
        }     
    
    }
        

    guessSort(userChoice);

   }    

function guessSort () {

    if (miscWord.indexOf(userChoice) > -1) {
        for (var i = 0; i < miscWord.length;i++) {
            if (wordLetters[i] === userChoice) {
                console.log("this worked");
                underScore.splice(i,1,userChoice);
                document.getElementById('currentWord').innerHTML = underScore.join(' ');
            } 
        }   
    }
        else {
            incorrectLetter.push(userChoice);
            guessRemaining--;
            console.log(guessRemaining);
            document.getElementById('guessesRemaining').innerHTML = guessRemaining;
        }

        
        

    
}


function gameReset() {

    miscWord = randoWord[Math.floor(Math.random()*randoWord.length)];
    console.log(miscWord);
    wordLetters = miscWord.split('');

    underscore = [] ;
    guessRemaining = 10;
    guessCorrect = 0;
    wordLetters = [];

    gameStart ();

}
