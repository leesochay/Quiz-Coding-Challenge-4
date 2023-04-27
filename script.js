const questions = ["Which of the following variables contains a truthy value?", "What does CSS stand for?", "Choose the correct HTML element for the largest heading"];
const selectZero = ["let varThree = 0;", "let varTwo = false;", "let varOne = 'false';", "let varFour = ' ';"];
const selectOne = ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"];
const selectTwo = ["<h6>", "<heading>", "<head>", "<h1>"];
const ansZero = "let varOne = 'false';";
const ansOne = "Cascading Style Sheets";
const ansTwo = "<h1>";



var questionContainer = document.querySelector("#quiz-container");
var quizQuestion = document.querySelector("#question");



function startQuiz() { 
  document.getElementById("start-button").style.display = "none";
  return;
}

function displayQuestion() {
questionContainer.setAttribute("style", "display: flex; flex-direction: column; align-items: center; justify-content: center; margin-top: 50px;");
quizQuestion.setAttribute("style", "text-align: center; font-size: 24px; margin: 50px;");
document.getElementById("question").innerText = questions[0];
}

function displayChoices () {
document.getElementById("question").innerText = questions[0];
for (var j = 0; j < 4; j++) {
var selectList = selectZero;
const choiceButton = document.createElement("button");
choiceButton.innerText = selectList[j];
choiceButton.addEventListener("click", selectionCheck)
choiceButton.addEventListener("click", secondQuestion)
document.getElementById("selection-container").appendChild(choiceButton);
}
}	

var selectionCheck = function(event) {
var selectedAnswer = event.target;
if (selectedAnswer.innerText === ansZero) {
document.getElementById("selection-container").innerHTML = "";
document.getElementById("result").innerHTML = "&#129321 Correct &#129321";

var questionResult = "correct";
var key = "score0";
var values = questionResult;
localStorage.setItem(key, JSON.stringify(values));




} else {
document.getElementById("selection-container").innerHTML = "";
document.getElementById("result").innerHTML = "Incorrect &#128534";
}
}


function secondQuestion() {
document.getElementById("question").innerText = questions[1];
for (var j = 0; j < 4; j++) {
var selectList = selectOne;
const choiceButton = document.createElement("button");
choiceButton.innerText = selectList[j];
choiceButton.addEventListener("click", secondQuestionCheck)
choiceButton.addEventListener("click", thirdQuestion)
document.getElementById("selection-container").appendChild(choiceButton);
}
}

var secondQuestionCheck = function(event) {
var selectedAnswer = event.target;
if (selectedAnswer.innerText === ansOne) {
document.getElementById("selection-container").innerHTML = "";
document.getElementById("result").innerHTML = "&#129321 Correct &#129321";

var questionResult = "correct";
var key = "score1";
var values = questionResult;
localStorage.setItem(key, JSON.stringify(values));




} else {
document.getElementById("selection-container").innerHTML = "";
document.getElementById("result").innerHTML = "Incorrect &#128534";
}
}

function thirdQuestion() {
document.getElementById("question").innerText = questions[2];
for (var j = 0; j < 4; j++) {
var selectList = selectTwo;
const choiceButton = document.createElement("button");
choiceButton.innerText = selectList[j];
choiceButton.addEventListener("click", thirdQuestionCheck)
document.getElementById("selection-container").appendChild(choiceButton);
}
}

var thirdQuestionCheck = function(event) {
var selectedAnswer = event.target;
if (selectedAnswer.innerText === ansTwo) {
finalScore.push("correct");


var questionResult = "correct";
var key = "score2";
var values = questionResult;
localStorage.setItem(key, JSON.stringify(values));




document.getElementById("selection-container").innerHTML = "";
document.getElementById("question").innerText = ("You have finished the quiz!");
document.getElementById("result").innerHTML = "&#129321 Correct &#129321";

} else {

document.getElementById("selection-container").innerHTML = "";
document.getElementById("question").innerText = ("You have finished the quiz!");
document.getElementById("result").innerHTML = "Incorrect &#128534";

}






var parInitials = document.createElement("p");
parInitials.innerText = "Please enter your initials:";
document.getElementById("form-container").appendChild(parInitials);
var inputInitialsText = document.createElement("input");
inputInitialsText.setAttribute("type", "text");
inputInitialsText.setAttribute("id", "initialsText");
document.getElementById("form-container").appendChild(inputInitialsText);
var inputInitialsBtn = document.createElement("button");
inputInitialsBtn.setAttribute("type", "submit");
inputInitialsBtn.innerText = "Submit";
document.getElementById("form-container").appendChild(inputInitialsBtn);
}



const startEvent = document.getElementById("start-button");
startEvent.addEventListener("click", startQuiz)
startEvent.addEventListener("click", displayQuestion)
startEvent.addEventListener("click", displayChoices)
