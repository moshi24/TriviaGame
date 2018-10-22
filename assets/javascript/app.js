

const myQuestion =   [                               
{ 
    question: "Who is the only basketball player to score 100 pts in a single NBA game?",
    answers: ["Kobe Bryan", "Michael Jordan", "Lebrick James", "Wilt Chamberlain"],
    correctAnswer: "Wilt Chamberlain"
},
{ 
    question: "In what city would you find the Wizard of Oz?",
    answers: ["The Emerald City", "Narnia", "Kansas City", "Bogota"],
    correctAnswer: "The Emerald City"
},
{ 
    question: "Hamburgers get their from what European city?",
    answers: ["Paris", "Hamburg", "Munich", "Lisbon"],
    correctAnswer: "Hamburg"
},
{ 
    question: "Which superheroe is not in the Avengers?",
    answers: ["Hulk", "Iron", "Batman", "Thor"],
    correctAnswer: "Batman"
},
{ 
    question: "How many continents does the planet earth have?",
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
console.log("hi", num );




    
    
    $(document).ready(function() {
        
        function start() {
           $(".intro").show();
           $('#time-remain').hide();
           $("#question").hide();
           $(".choice").hide();
           $("#next").hide();
           
       }   
    function control() {
        start();
        
        $('#start').on('click', function() {
            
            event.preventDefault();
            
            $(".intro").hide();
            $("#next").hide();
            $("#time-remain").show();
            $("#question").show()
            $(".choice").show()
            timer()
            question()
            response()
        });
        
    }    
        $("#next").on("click", function(){
        
                reset();
                $("#time-remain").show();
                $("#question").show();
                $(".choice").show();
                $("#img").hide();
                $("#next").hide();
        
        })

function timer() {
    clearInterval(myInterval);
    myInterval = setInterval(decrement,1000);

function decrement() {
    count--;
    $("#time-remain").html("<h2>"+ "Time remaining: " + count + "</h2>");

    if( count < 10) {
        $("#timer-remain").css("background-color", "red");
    }

    if( count === 0) {
        incorrect++;
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

    function reset(){
        
        count = 30;
        timer()
        num = Object.keys(myQuestion)[Math.floor(Math.random() * Object.keys(myQuestion).length)]; 
        question(num);
        response();
        // $("#result").hide()
        console.log("Hello", num);
        if(attempted.includes(num)) {
            if(attempted.length === 5) {
                $("#question").hide();
                $(".choice").hide();
                $("#time-remain").hide();
                $("#result").hide()
                // show stats
                $("#correct").show();
                $("#incorrect").show();
                console.log("abc", attempted);
                stats();
            } else {
                reset();
            }
        }
        
    }


    function question() {
        $("#question").html("<h1>" + myQuestion[num].question + "</h1>");
        $("#choice-1").html( "<h3>" + myQuestion[num].answers[0] + "</h3>");
        $("#choice-2").html( "<h3>" + myQuestion[num].answers[1] + "</h3>");
        $("#choice-3").html( "<h3>" + myQuestion[num].answers[2] + "</h3>");
        $("#choice-4").html( "<h3>" + myQuestion[num].answers[3] + "</h3>");

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

    function stats(){
        $("#start-over").show();
        $("#correct").text("Correct: " + correct);
        $("#incorrect").text("Incorrect: " + incorrect);
        $("#grade").text("Score: " + ((correct/5)*100) + "%");
    }

    control();

  


});