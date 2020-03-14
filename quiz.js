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
// const responseDiv = document.getElementById("responseContainer");
// const responseDivTwo = document.getElementById("responseContainerTwo");
// const responseDivThree = document.getElementById("responseContainerThree");
// const responseDivFour = document.getElementById("responseContainerFour");
// const responseDivFive = document.getElementById("responseContainerFive");
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
let tempBank = 0;
let jsonResult = [];

// // render a question
// function renderQuestion(){
//     let q = questions[runningQuestion];
    
//     question.innerHTML = "<p>"+ q.question +"</p>";
//     // qImg.innerHTML = "<img src="+ q.imgSrc +">";
//     choiceA.innerHTML = q.choiceA;
//     choiceB.innerHTML = q.choiceB;
//     // choiceC.innerHTML = q.choiceC;
// }

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){

        start.style.display = "none";
            instructionPage.style.display = "none";


    // renderQuestion();
        choiceA.innerHTML = "MAKE BIGGER";
    choiceB.innerHTML = "STOP";
    quiz.style.display = "block";
    // renderProgress();
    renderCounter();
    // TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
// function renderProgress(){
//     for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
//         progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
//     }
// }

// counter render

function renderCounter(){

    	// if(count < 0) {
    	// 	finalCount = count * -1;
     //        counter.innerHTML = 'Temp Bank: ' + tempBank;
     //        counterTwo.innerHTML = 'Permanent Bank: ' + permanentBank;
    	// }
     // else {
        if(roundOne.getItem("carryOverScore") != null) {
            permanentBank += parseInt(roundOne.getItem("carryOverScore"));
        }
            counter.innerHTML = 'Temp Bank: ' + tempBank;
            counterTwo.innerHTML = 'Permanent Bank: ' + permanentBank;
     // }
        // timeGauge.style.width = count * gaugeUnit + "px";
  
    //else{
    //     // change progress color to red
    //     // answerIsWrong();
    //     count--;
        // if(runningQuestion < lastQuestion){
        //     runningQuestion++;
        //     // renderQuestion();
        // }else{
        //     // end the quiz and show the score
        //     clearInterval(TIMER);
        //     scoreRender();
        // }
    // }
}

// checkAnwer

function checkAnswer(answer){
        if(roundOne.getItem('MAX') == null) {
        roundOne.setItem('MAX', MAX);
    }
    if(answer == "A"){
        // answer is correct=
        clicksCount++;
        number += Math.floor(Math.random() * 20) + 1;
        growCirc = Math.floor(Math.random() * 10) + 0.2;
        if(number < roundOne.getItem('MAX')) {
        circle.height += growCirc;
        circle.width += growCirc;
    } else{
        // end the quiz and show the score
        // clearInterval(TIMER);
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
        // if(roundOne.getItem('Session 1') == null) {
        //     roundOne.setItem('Session 1', JSON.stringify({"permanentBank": permanentBank, "numberOfClicks": clicksCount}));
        //     MAX = 445;
        //     roundOne.setItem('MAX', MAX);
        //     checkIn();
        // }
        // else if(roundOne.getItem('Session 2') == null) {
        //     roundOne.setItem('Session 2', JSON.stringify({"permanentBank": permanentBank, "numberOfClicks": clicksCount}));
        //     MAX = 535;
        //     roundOne.setItem('MAX', MAX);
        //    checkInTwo();
        // }
        // else if(roundOne.getItem('Session 3') == null) {
        //     roundOne.setItem('Session 3', JSON.stringify({"permanentBank": permanentBank, "numberOfClicks": clicksCount}));
        //     MAX = 515;
        //     roundOne.setItem('MAX', MAX);
        //     checkInThree();
            
        // }
        // else if(roundOne.getItem('Session 4') == null) {
        //     roundOne.setItem('Session 4', JSON.stringify({"permanentBank": permanentBank, "numberOfClicks": clicksCount}));
        //     MAX = 435;
        //     roundOne.setItem('MAX', MAX);
        //     checkInFour();
        // }
        // else if(roundOne.getItem('Session 5') == null) {
        //     roundOne.setItem('Session 5', JSON.stringify({"permanentBank": permanentBank, "numberOfClicks": clicksCount}));
        //     MAX = 435;
        //     roundOne.setItem('MAX', MAX);
        //     checkInFive();
        // }

        // scoreRender();
    }
        tempBank++;
        counter.innerHTML = 'Temp Bank: ' + tempBank;
        count++;
        // change progress color to green
        // answerIsCorrect();
      } else if (answer == "B") {
        permanentBank += tempBank;
        roundOne.setItem("carryOverScore", permanentBank);
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
        // if(roundOne.getItem('Session 1') == null) {
        //     roundOne.setItem('Session 1', JSON.stringify({"permanentBank": permanentBank, "numberOfClicks": clicksCount}));
        //     MAX = 445;
        //     roundOne.setItem('MAX', MAX);
        //     checkIn();
        // }
        // else if(roundOne.getItem('Session 2') == null) {
        //     roundOne.setItem('Session 2', JSON.stringify({"permanentBank": permanentBank, "numberOfClicks": clicksCount}));
        //     MAX = 535;
        //     roundOne.setItem('MAX', MAX);
        //    checkInTwo();
        // }
        // else if(roundOne.getItem('Session 3') == null) {
        //     roundOne.setItem('Session 3', JSON.stringify({"permanentBank": permanentBank, "numberOfClicks": clicksCount}));
        //     MAX = 515;
        //     roundOne.setItem('MAX', MAX);
        //     checkInThree();
        // }
        // else if(roundOne.getItem('Session 4') == null) {
        //     roundOne.setItem('Session 4', JSON.stringify({"permanentBank": permanentBank, "numberOfClicks": clicksCount}));
        //     MAX = 435;
        //     roundOne.setItem('MAX', MAX);
        //     checkInFour();
        // }

        // else if(roundOne.getItem('Session 5') == null) {
        //     roundOne.setItem('Session 5', JSON.stringify({"permanentBank": permanentBank, "numberOfClicks": clicksCount}));
        //     MAX = 435;
        //     roundOne.setItem('MAX', MAX);
        //     checkInFive();
        // }
        // scoreRender();
      }//else{
    //     // answer is wrong
    //     // change progress color to red
    //     // answerIsWrong();
    //     count--;
    //     renderCounter();
    // }
 
    // if(runningQuestion < lastQuestion){
    //     runningQuestion++;
    //     renderQuestion();
    // }else{
    //     // end the quiz and show the score
    //     clearInterval(TIMER);
    //     scoreRender();
    // }
}

// // answer is correct
// function answerIsCorrect(){
//     document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
// }

// // answer is Wrong
// function answerIsWrong(){
//     document.getElementById(runningQuestion).style.backgroundColor = "#f00";
// }

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
}

function checkIn(sessionNumber) {
    if(sessionNumber == 3 || sessionNumber == 11 || sessionNumber == 18 || sessionNumber == 14 || sessionNumber == 9) {
    responseString = "responseContainer" + sessionNumber;
    response = document.getElementById(responseString);
    response.style.display = "block";
} else {
    response = document.getElementById("responseContainer1");
    response.style.display = "block"; 
}
}

// function checkInTwo() {
//     responseDivTwo.style.display = "block";
// }

// function checkInThree() {
//     responseDivThree.style.display = "block";
// }

// function checkInFour() {
//     responseDivFour.style.display = "block";
// }

// function checkInFive() {
//     responseDivFive.style.display = "block";
// }

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




















