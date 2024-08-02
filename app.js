let randomNumber =  Math.floor(Math.random() * 100)+1;

function checkGuess(){
    const userGuess = Number(document.getElementById("guessinput").value);
    const message = document.getElementById("message");

    if (userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
    }else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        message.textContent = 'Too high! Try again.';
    }else {
        message.textContent = `Congratulations! You guessed the correct number: ${randomNumber}.`;
    }
}