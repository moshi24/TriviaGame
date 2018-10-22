

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

var count = 31;
var myInterval;
var correct = 0;
var incorrect = 0;
var solution;
var currentQuestion;
var attempted = [];
var num = Object.keys(myQuestion)[Math.floor(Math.random() * Object.keys(myQuestion).length)]; 



// function start() {
//     $(".intro").show();
//     $('#time-remain').hide();
//     $("#question").hide()
//     $("#start").function()
// }


$(document).ready(function() {


   $('#start').on('click', function() {

    event.preventDefault();

    $(".intro").hide();
    $("#next").hide();
    $("#time-remain").show();
    $("#question").show()
    timer()
    question()
    response()
});

function timer() {
    clearInterval(myInterval);
    myInterval = setInterval(decrement,1000);

function decrement() {
    count--;
    $("#time-remain").html("<h2>"+ "Time remaining: " + count + "</h2>");

    if( count < 10) {
        $("#timer-remain").hover(function() {
            $(this).css("color", "red")
        });
    }

    if( count === 0) {
        $("#time-remain").html("<h1> TIME's UP! </h1>")
        count === 30;
        clearInterval(myInterval);
        $("#question").hide();
        $(".choice").hide();
        $('<img/>', {
            src: 'assets/images/tenor.gif',
            height: '400px',
            width: '400px',
        }).prependTo($("#img"));
        incorrect++;
        $("#next").show();

    
        }
    }
};


$("#next").on("click", function(){

        count = 30;
        num = Object.keys(myQuestion)[Math.floor(Math.random() * Object.keys(myQuestion).length)]; 
        $("#time-remain").show();
        $("#question").show();
        $(".choice").show();
        $("#img").hide()
   
})

    function question() {
        $("#question").append("<h1>" + myQuestion[num].question + "</h1>");
        $("#choice-1").append( "<h3>" + myQuestion[num].answers[0] + "</h3>");
        $("#choice-2").append( "<h3>" + myQuestion[num].answers[1] + "</h3>");
        $("#choice-3").append( "<h3>" + myQuestion[num].answers[2] + "</h3>");
        $("#choice-4").append( "<h3>" + myQuestion[num].answers[3] + "</h3>");

    }


    function response() {
        $(".choice").on("click", function() {
            solution = myQuestion[num].correctAnswer;
            if($(this).text() === solution){
                correct++;
                $("#time-remain").hide();
                $("#question").hide();
                $(".choice").hide();
                $('<img/>', {
                    src: 'assets/images/Winner.gif',
                    height: '400px',
                    width: '400px',
                }).prependTo($("#img"));
                $("#result").html("<h4>That's Correct!!</h4>");
                clearInterval(myInterval);           $("#next").show();         
                

            }
            if($(this).text() !== solution){
                incorrect++;
                $("#time-remain").hide();
                $("#question").hide();
                $(".choice").hide();
                $('<img/>', {
                    src: 'assets/images/Loser.gif',
                    height: '400px',
                    width: '400px',
                }).prependTo($("#img"));
                $("#result").html("<h4>That's Incorrect!!</h4>");
                clearInterval(myInterval);
                $("#next").show();
            }
        
        })
    }



  


});