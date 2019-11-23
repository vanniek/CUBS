// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const circle = document.getElementById("circle");
// const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
// const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
var number = 100;
const MAX = (Math.floor(Math.random() * 4.3) + 2) * 100;

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
        // choiceC : "Wrong",
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
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

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
    if(count <= questionTime){
    	if(count < 0) {
    		finalCount = count * -1;
    		counter.innerHTML = finalCount;
    	}
     else {
     	        counter.innerHTML = count;
     }
        timeGauge.style.width = count * gaugeUnit + "px";
  
    }//else{
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
    if(answer == "A"){
        // answer is correct=
        number += Math.floor(Math.random() * 100) + 1;
        if(number < MAX) {
        circle.height = number;
        circle.width = number;
    } else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
        score++;
        count++;
        // change progress color to green
        // answerIsCorrect();
        renderCounter();
      } else if (answer == "B") {
                clearInterval(TIMER);
        scoreRender();
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





















