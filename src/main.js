const myGuss = Math.floor(Math.random() * 20) + 1;
let guesses = 0;
let guess;

while( guess !== myGuss ) {

    guess = parseInt(prompt("What number I'm thinking of", 10));
    guesses++;

    if( guess > myGuss) {
        alert('Higher');
    }  else if ( guess < myGuss ) {
        alert('Lower')
    }


}

alert(`Well done. You completed the game in ${guesses} guesses.`);