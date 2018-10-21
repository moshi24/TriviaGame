

const myQuestion =   [                               
{ 
    question: "What is my name?",
    answers: ["uno", "dos", "tres", "cuatro"],
    correctAnswer: "uno"
},
{ 
    question: "What the fuck?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: "1"
},
{ 
    question: "What the hell?",
    answers: ["a", "b", "c", "d"],
    correctAnswer: "b"
},
{ 
    question: "What in the world?",
    answers: ["z", "x", "w", "v"],
    correctAnswer: "x"
},
{ 
    question: "What on earth?",
    answers: ["4", "5", "6", "7"],
    correctAnswer: "7"
},
]



$(document).ready(function() {

var count = 30;
var myInterval;
var correct = 0;
var incorrect = 0;

function start() {
    $('.container').hide()
}

   $('#start').on('click', function() {

    event.preventDefault();

    $(".start").hide();
    

 
       });

//     function timer() {
//         clearInterval(myInterval);
//         myInterval = setInterval(decrement,1000);
    
//     function decrement() {
//         count--;
//         $("#time-remain").html("<h2>"+ "Time remaining: " + count + "</h2>");
//         }
      

// }
//    function quest1() {
       
       
      
//         $(".question").append("<h2 class='questionInput'>" + myQuestion.question + "</h2>")
       
//     var picked = myQuestion[num].answers;
//     var correct = myQuestion[num].correctAnswer;

//         for( var i = 0; i < 4; i++) {

//           $(".question").append("<li class='answerInput'>" + picked[i] + "</li>") 
//    }

//     $('.answerInput').on('click', function() {
//         console.log(this);
        
//    })

// }

  


});