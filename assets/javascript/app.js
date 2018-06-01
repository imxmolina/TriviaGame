


//function for start of game start and initial screen
$(document).ready(function () {
    function startScreen() {
        start = "<a class='btn btn-primary btn-lg start' href='#' role= 'button'>Start Game</a>";
        $(".gameArea").html(start);

    }

    startScreen();

    // function triggered by start button that shows initial html screen
    $(".start").click(function (event) {
        generateHTML();
        gameTimer();
    });

    //clicking an answer button 

    $(document).on("click", ".answer", function (event) {
        //answeredQuestion = true
        selectedAnswer = $(this).text();
        console.log("|"+selectedAnswer + "| |" + answerArray[questionCounter]+"|");
        if (selectedAnswer === answerArray[questionCounter]) {
            clearInterval(timer);
            getWin();   
        }
        else {
            clearInterval(timer);
            getLoss();
        }
    });

    $(document).on("click", ".restart", function (event){
        resetGame();
    }
)


});

function gameTimer() {
    console.log("FUNCTION: gameTimer, COUNTER: " + counter)
    timer = setInterval(tenSeconds, 1000);
    function tenSeconds() {
        if (counter === 0) {
            console.log("This timer is working");
            clearInterval(timer);
            getTimeOutLoss();
        }
        if (counter > 0) {
            counter--;
        }
        $(".timer1").html(counter);
    }
}

function gameOver() {
    gameHTML = "<p class='text-center'>Final Score: " + correct + "/10 </p><a class='btn btn-primary btn-lg restart' href='#' role= 'button'>Restart Game</a>";
$(".gameArea").html(gameHTML);
}

function getWin() {
    correct++;
    gameHTML = "<p class='text-center timer'>Time Remaining: <span class='timer1'>" + counter + "</span></p>  <p class='text-center'> You're Right! The correct answer is: " + answerArray[questionCounter] + "</p>";
    $(".gameArea").html(gameHTML);
    setTimeout(wait, 3000);
    console.log(correct);
}

function getLoss() {
    incorrect++;
    gameHTML = "<p class='text-center timer'>Time Remaining: <span class='timer1'>" + counter + "</span></p> <p class='text-center'> Wrong! The correct answer is: " + answerArray[questionCounter] + "</p>";
    $(".gameArea").html(gameHTML);
    console.log(incorrect);
    setTimeout(wait, 3000);
    

}

function getTimeOutLoss() {
    unAnswered++;
    gameHTML = "<p class='text-center timer'>Time Remaining: <span class='timer1'>" + counter + "</span></p> <p class='text-center'> Outta Time! The correct answer is: " + answerArray[questionCounter] + "</p>";
    $(".gameArea").html(gameHTML);
    console.log("unanswered" + unAnswered);
    setTimeout(wait, 3000);
    

}

function wait() {
    console.log("wait, question counter ="+ questionCounter)
    if (questionCounter < 9) {
        questionCounter++;
        generateHTML();
        counter = 10;
        gameTimer();
    }
    else {
        gameOver();
        console.log("Game Over");
    };
}
function resetGame() {
    correct = 0;
    incorrect = 0;
    unAnswered = 0;
    counter = 10;
    questionCounter = 0;
    generateHTML();
    gametimer();

}

// function generate gameHTML
function generateHTML() {
    gameHTML = "<p class = 'text-center timer'>Remaining Time: <span class = 'timer1'> 10</span></p><p class = 'text-center'>" + questionArray[questionCounter] + "<div class='btnDiv'><p class='btn btn-warning answer text-center' href='#' role= 'button' >A. " + possibleAns[questionCounter][0] + "</p> <p class='btn btn-warning answer' href='#' role= 'button'>B. " + possibleAns[questionCounter][1] + "</p> <p class='btn btn-warning answer ' href='#' role= 'button'>C. " + possibleAns[questionCounter][2] + "</p> <p class='btn btn-warning answer' href='#' role= 'button' >D. " + possibleAns[questionCounter][3] + "</p></div>"
    $(".gameArea").html(gameHTML);
}
//some variables

var questionArray = ["This rapper wrote the McDonalds jingle 'I'm Loving It'", "The fear of the color purple is known as:", "Chantilly and Brussels are two types of:", "What popular designer was responsible for the wardrobe of the film, 'The Fifth Element'", "The Yiddish word for 'grease' is:", "This Japanese city hosted the 1972 Winter Olympics", "What Broadway musical featured the song 'Roses Turn'", "This soda brand comes in flavors like Cream, Black Cherry, and Cel-Ray", "Who was the first African American woman to stage a public flight in the US?", "This Prince song inspired the creation of the Parental Advisory sticker on physical albums"];
var possibleAns = [
    ["Jay-Z", "Pusha-T", "Snoop Dogg", "Kanye West"],
    ["Porphyrophobia", "Chromophobia", "Cynophobia", "Purpuraphobia"],
    ["Cabbage", "2-Door Sedans", "Lace", "White Wines"],
    ["Jean Paul Gaultier", "Alexander McQueen", "Phoebe Philo", "Raf Simons"],
    ["Schlep", "Schmutz", "Schmaltz", "Zissele"],
    ["Tokyo", "Osaka", "Sendai", "Sapporo"],
    ["A Chorus Line", "South Pacific", "Gypsy", "Mame"],
    ["Dr.Brown", "Jones Soda", "Mr. Pop", "Shasta"],
    ["Lorraine Hansberry", "Bessie Coleman", "Zora Neale Hurston", "Rebecca Lee Crumpler"],
    ["Erotic City", "Bat Dance", "Diamonds and Pearls", "Darling Nikki"]
];
var answerArray = ["B. Pusha-T", "A. Porphyrophobia", "C. Lace", "A. Jean Paul Gaultier",
    "C. Schmaltz", "D. Sapporo", "C. Gypsy", "A. Dr.Brown", "B. Bessie Coleman", "D. Darling Nikki"
];

var counter = 10;
var correct = 0;
var incorrect = 0;
var unAnswered = 0;
var questionCounter = 0;

var endTime = 0;

var timer;
var start;
var gameHTML;


