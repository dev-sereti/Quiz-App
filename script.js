const questions=[
    {
        question:"Which of the following players has never played for Manchester United",
        answers:[
            {text:"Messi",correct:true},
            {text:"Cavani",correct:false},
            {text:"Di Maria",correct:false},
            {text:"Mata",correct:false},

        ]
    },
    {
        question:"Which of the following manager has never managed Manchester United",
        answers:[
            {text:"Ruben",correct:false},
            {text:"Ruben",correct:false},
            {text:"Alex",correct:false},
            {text:"Conte",correct:true},

        ]
    },
    {
        question:"Which of the following manager has never managed Manchester United",
        answers:[
            {text:"Ruben",correct:false},
            {text:"Ruben",correct:false},
            {text:"Alex",correct:false},
            {text:"Conte",correct:true},

        ]
    },
];
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentquestionIndex=0;
let score=0;

function startQuiz(){
    currentquestionIndex=0
    score=0;
    nextButton.innerHTML="Next"

}


