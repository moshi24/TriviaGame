

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

var time = 30;
var intervalId;
var timeRun = false;


   $('#start').on('click', function() {

    event.preventDefault();

    $(".start").hide();

    quest1();
    
   })

   function quest1() {
       
        var num = Math.floor(Math.random()* 5);
    
        $(".question").append("<h2 class='questionInput'>" + myQuestion[num].question + "</h2>")
       
    var picked = myQuestion[num].answers;
    var correct = myQuestion[num].correctAnswer;

        for( var i = 0; i < 4; i++) {

          $(".question").append("<li class='answerInput'>" + picked[i] + "</li>") 
   }

    $('.answerInput').on('click', function() {
    
        for( var j = 0; j < 4; j++) {
            if(picked[j] === correct) {
               console.log();
          
            }
        }

   })

}

  


});