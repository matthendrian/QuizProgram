var timer;
var timerCount;
var score = 0;
var initials = '';
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var currentScore = document.querySelector(".CurrentScore");
var Highscore = document.querySelector(".MyScore")


//Store the total number of questions
var totalQuestions = $('.questions').size();
//Set the current question to display to the first. 
var questionIndex = 0;
//Sets the current questions' answer index. 
var currentAnswer = 0; 
//Stores question class into a selector variable.
$questions = $('.questions');
//stores correct answer into a selector variable
$correct = $('.correctAnswer');

// assigns a selector to the endgame prompt so it is hidden until the Endgame function is triggered. 
$endGame = $('.EndGame');


//Hide all the questions
$questions.hide();
$endGame.hide();

//when user starts the quiz, it kicks off the function. Must fade in since its hidden by defualt. 
function StartQuiz (){ 
  $($questions.get(questionIndex)).fadeIn();
  Checker();
}

//This calls the next function prior to the previous one fading.
$('#next').click(function () {
     
     $($questions.get(questionIndex)).fadeOut(function () {
        //increment the current question by one
        questionIndex = questionIndex + 1;
        
        Checker();
        //if there are no more questions do stuff
        if (questionIndex == totalQuestions) {

          endGame();

        } else {

            //otherwise show the next question
            $($questions.get(questionIndex)).fadeIn();

        }
    });

});


function Checker (){
  if(document.getElementsByClassName("correctAnswer") == true){
    console.log("True!");
    currentScore = score+5;

  } else {
    timerCount = timerCount - 3;
    console.log("Incorrect");
    timerElement.textContent = timerCount;
  }
}

function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      //if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        //clearInterval(timer);
        //winGame();
      //}
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      //End game function (show score and prompt for intitials + reset)
    }
  }, 1000);
}

function startGame() {
  timerCount = 60;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;

  //This unhides the first question so the user can navigate.
  $($questions.get(questionIndex)).fadeIn();

  startTimer()
}


function endGame(){
  //This ends the game once the last question is submitted, or the timer runs out. 
  if (timerCount == 0 || questionIndex == totalQuestions){
    $questions.hide();
    clearInterval(timer);
    timer = 60;
    alert("Your final score is: " + score);
    UserInitials = window.prompt("Please enter your initials.") ;
    Highscore = textContent.UserInitials;
  }
}



startButton.addEventListener("click", startGame);

var resetButton = document.querySelector(".reset-button");
