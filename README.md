# Word-Guess-Game

What the project does:
    This is a simple Hangman game based on aviation.  That is the only clue.  A random word is chosen and users guess letters that might be in that word.  Those letters either start filling in the word or start drawing the hangman.  Incorrect letters show up in the letters used section and each letter lowers the number of guesses remaining.
    An alert will let you know when you have won or lost and you confirm if you are ready for the next word.

This Project was for educational purposes and built by me as a homework assignement.

The method I used was to create global variables and then multiple functions that would trigger actions and call on other functions.  There is a gameStart function that sets the variables when called, picks the random word, and gets the game going.  User inputs start another function that calls on a letter sorting function that determines if the letter is correct or incorrect.  Then the winLose function is called on to see if it is a win or loss.  If a win or loss happens the gameReset function is called on and resets the variables again, with the exception of the win counter.

Contact me with any questions.