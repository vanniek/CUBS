// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const nextRound = document.getElementById("c");
const circle = document.getElementById("circle");
const counterOne = document.getElementById("counter");
const counterTwo = document.getElementById("countertwo");
const timeGauge = document.getElementById("timeGauge");
const scoreDiv = document.getElementById("scoreContainer");
const instructionPage = document.getElementById("instructionPage");
var number = 100;
var i = 1;
var MAX = 400;
let roundOne = window.sessionStorage;
if(roundOne.getItem('session number') == null) {
roundOne.setItem('session number', 0);
}
// const MAX = (Math.floor(Math.random() * 4.3) + 2) * 100;
const RAND = 1;
// create our questions
let questions = [
    {
        question : "A. What does HTML stand for? <p>B. second choice</p> <p>C. third choice</p>",
        imgSrc : "img/graph.png",
        choiceA : "Correct",
        choiceB : "Wrong",
        correct : "A"
    },{
        question : "A. What does HTML stand for? <p>B. second choice</p> <p>C. third choice</p>",
        imgSrc : "img/graph.png",
        choiceA : "Wrong",
        choiceB : "Correct",
        correct : "B"
    },{
        question : "A. What does HTML stand for? <p>B. second choice</p> <p>C. third choice</p>",
        imgSrc : "img/graph.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C"
    }
];

// create some variables

// const lastQuestion = questions.length - 1;
let clicksCount = 0;
let roundOneKey = "Session 1";
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let permanentBank = 0;
var tempBank = 0;
let jsonResult = [];

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){

    start.style.display = "none";
    instructionPage.style.display = "none";
    choiceA.innerHTML = "MAKE BIGGER";
    choiceB.innerHTML = "STOP";
    quiz.style.display = "block";
    renderCounter();
}

function renderCounter(){
        if(roundOne.getItem("carryOverScore") != null) {
            permanentBank += parseInt(roundOne.getItem("carryOverScore"));
        }
            counter.innerHTML = 'Temp Bank: ' + tempBank;
            counterTwo.innerHTML = 'Permanent Bank: ' + permanentBank;
}

function checkAnswer(answer){
        if(roundOne.getItem('MAX') == null) {
        roundOne.setItem('MAX', MAX);
    }
    if(answer == "A"){
        clicksCount++;
        number += Math.floor(Math.random() * 20) + 1;
        growCirc = Math.floor(Math.random() * 10) + 0.2;
        if(number < roundOne.getItem('MAX')) {
        circle.height += growCirc;
        circle.width += growCirc;
    } else{
        max_sessions = 20;
        sessionNumber = parseInt(roundOne.getItem('session number')) + 1;
        if(sessionNumber < max_sessions) {
        session = 'Session ';
        currentSession = session + sessionNumber.toString();
        roundOne.setItem('session number', sessionNumber);
        if(roundOne.getItem(currentSession) == null) {
            roundOne.setItem(currentSession, JSON.stringify({"permanentBank": permanentBank, "numberOfClicks": clicksCount}));
            MAX = 445;
            roundOne.setItem('MAX', MAX);
            i += 1;
            checkIn(sessionNumber);          
        }
    }

    }
        tempBank++;
        counter.innerHTML = 'Temp Bank: ' + tempBank;
        count++;

      } else if (answer == "B") {
        permanentBank += tempBank;
        roundOne.setItem("carryOverScore", permanentBank);
        max_sessions = 20;
        sessionNumber = parseInt(roundOne.getItem('session number')) + 1;
        if(sessionNumber <= max_sessions) {
        session = 'Session ';
        currentSession = session + sessionNumber.toString();
        roundOne.setItem('session number', sessionNumber);
        if(roundOne.getItem(currentSession) == null) {
            roundOne.setItem(currentSession, JSON.stringify({"permanentBank": permanentBank, "numberOfClicks": clicksCount}));
            MAX = 445;
            roundOne.setItem('MAX', MAX);
            i += 1;
            checkIn(sessionNumber);          
        }
    }

      }
}

function scoreRender(){
    scoreDiv.style.display = "block";
}

function checkIn(sessionNumber) {
    if(sessionNumber == 3 || sessionNumber == 11 || sessionNumber == 18 || sessionNumber == 14 || sessionNumber == 9) {
    responseString = "responseContainer" + sessionNumber;
    scoreblurb = "scoreblurb" + sessionNumber;
    response = document.getElementById(responseString);
    document.getElementById(scoreblurb).innerHTML = "You have reached the end of this session. Your temporary score for this session was " + tempBank + ". Your total score is " + permanentBank + " points.";
    response.style.display = "block";
} else if(sessionNumber == 20) {
    response = document.getElementById("end");
    document.getElementById("repeat1").innerHTML = "You have reached the end of the game. Please let your admin know by raising your hand. Your temporary score for this session was " + tempBank + ". Your total score is " + permanentBank + " points.";
    response.style.display = "block";
}
else {
    response = document.getElementById("responseContainer1");
    document.getElementById("scoreblurb").innerHTML = "You have reached the end of this session. Your temporary score for this session was " + tempBank + ". Your total score is " + permanentBank + " points.";
    response.style.display = "block"; 
}
}

function addCheckIn(answer) {
    roundOne.setItem('question 1', answer);
    window.location.reload();
}

function addCheckInTwo(answer) {
    roundOne.setItem('question 2', answer);
    window.location.reload();
}

function addCheckInThree(answer) {
    roundOne.setItem('question 3', answer);
    window.location.reload();
}

function addCheckInFour(answer) {
    roundOne.setItem('question 4', answer);
    window.location.reload();
}

function addCheckInFive(answer) {
    roundOne.setItem('question 5', answer);
    window.location.reload();
}




















