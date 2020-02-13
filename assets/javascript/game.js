// Global

var underScore = [];
var miscWord = "";
var wordsUsed = [];
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
var randomWord = ["jet","airplane","aviation","pilot","radar","propeller","rudder","flight","cockpit","runway","helicopter"];


// Game play

function gameStart() {

    // resets everything 
    if (randomWord.length === 0){
        alert("Game over.  No more words");
        randomWord = ["jet","airplane","aviation","pilot","radar","propeller","rudder","flight","cockpit","runway","helicopter"];
        wins = 0;
    }
    
    // Picks the word
    miscWord = randomWord[Math.floor(Math.random()*randomWord.length)];
    // Stores picked words so that they aren't repeated
    wordsUsed = miscWord;
    console.log(miscWord);
    wordLetters = miscWord.split('');
    underScore = [] ;
    letterGuessed = [];
    incorrectLetter = [];
    correctInputs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for (i = 0; i < miscWord.length; i++) {
        underScore.push("_");
        // document.getElementById('currentWord').innerHTML = underScore;
    }

    document.getElementById('currentWord').innerHTML = underScore.join(' ');
    document.getElementById('guessesRemaining').innerHTML = guessRemaining;
    document.getElementById('usedLetters').innerHTML = incorrectLetter.join(' ');
    document.getElementById("hangmanPic").src = "assets/images/Hangman0.png";
    document.getElementById("winsCounter").innerHTML = wins;
    document.getElementById('usedLetters').innerHTML = "--";

}

// In-game play

   document.onkeyup = function(event) {
    
    for(var j = 0; j < correctInputs.length; j++) {
        
        if ((event.key === correctInputs[j])) {
            userChoice = event.key.toLowerCase();
            correctInputs.splice(j, 1);
            // console.log(userChoice);
            guessSort(userChoice);
            document.getElementById('usedLetters').innerHTML = incorrectLetter.join(' ');
            // This adds a small delay so the final letter or guess show on screen
            var myTimer = setInterval(winLose, 1000);
            
        }   
    }     
}
    

function guessSort () {

    if (miscWord.indexOf(userChoice) > -1) {
            for (var i = 0; i < miscWord.length;i++) {
            if (wordLetters[i] === userChoice) {
                //console.log("this worked");
                underScore.splice(i,1,userChoice);
                
                document.getElementById('currentWord').innerHTML = underScore.join(' ');
                correctLetter++
            } 
        }   
    } else {
            incorrectLetter.push(userChoice);
            guessRemaining--
            // console.log(guessRemaining);

            // pulls hangman images based on number of guesses remaining
            if (guessRemaining === 9) {
                document.getElementById("hangmanPic").src = "assets/images/Hangman1.png";
            }
            else if (guessRemaining === 8) {
                document.getElementById("hangmanPic").src = "assets/images/Hangman2.png";
            }
            else if (guessRemaining === 7) {
                document.getElementById("hangmanPic").src = "assets/images/Hangman3.png";
            }
            else if (guessRemaining === 6) {
                document.getElementById("hangmanPic").src = "assets/images/Hangman4.png";
            }
            else if (guessRemaining === 5) {
                document.getElementById("hangmanPic").src = "assets/images/Hangman5.png";
            }
            else if (guessRemaining === 4) {
                document.getElementById("hangmanPic").src = "assets/images/Hangman6.png";
            }
            else if (guessRemaining === 3) {
                document.getElementById("hangmanPic").src = "assets/images/Hangman7.png";
            }
            else if (guessRemaining === 2) {
                document.getElementById("hangmanPic").src = "assets/images/Hangman8.png";
            }
            else if (guessRemaining === 1) {
                document.getElementById("hangmanPic").src = "assets/images/Hangman9.png";
            }
            else if (guessRemaining === 0) {
                document.getElementById("hangmanPic").src = "assets/images/Hangman10.png";
            }

            document.getElementById('guessesRemaining').innerHTML = guessRemaining;
        }
}

// Resets game after win or loss

function gameReset() {

    underScore = [] ;
    guessRemaining = 10;
    guessCorrect = 0;
    wordLetters = [];
    letterGuessed = [];
    correctInputs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    userChoice = [];
    correctLetter = [];
    incorrectLetter = [];
        
    for (var k = 0; k < randomWord.length; k++) {
        if (wordsUsed === randomWord[k]) {
            console.log(wordsUsed);
            randomWord.splice(k,1);
            console.log (randomWord);
        }

    }

    // document.getElementById('usedLetters').innerHTML = incorrectLetter.join(' ');

    gameStart ();

}

// Determins when a win or loss has happened

function winLose() {
    if (miscWord.length === correctLetter) {
        wins++
        document.getElementById("winsCounter").innerHTML = wins;
        alert("Winner winner chicken dinner");
        gameReset();

} else if (guessRemaining === 0) {
        document.getElementById("guessesRemaining").innerHTML = guessRemaining;
        alert("You Choked");
        gameReset();
}

}

gameStart ();