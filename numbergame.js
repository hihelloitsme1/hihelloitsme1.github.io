num = Math.floor(Math.random() * 11);

function NumberGuess() {
    guess = document.getElementById("guess").value;
    if (guess == num){
        text = "Correct!";
    } else {
        if (guess > num){
            text = "Too big!";
        } else {
            text = "Too small!";
        }
    }
    document.getElementById("result").innerHTML = text;
}

function UpdateText(){
   guess = document.getElementById("guess").value;
   display = document.getElementById("valuedisplay");
   display.innerHTML = guess;
}