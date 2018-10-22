$( document ).ready(function() {

var rightAnswers = 0;
var wrongAnswers = 0;
var noAnswers = 6;

var triviaQuestions = [
    {
        question: "Which Schuyler sister did Alexander Hamilton marry?",
        answers: ["Anjelica", "Eliza", "Peggy", "Wilma Flintstone"],
        correctAnswer: "Eliza"
    },

    {
        question: "who was NOT part of the original cast?",
        answers: ["Leslie Odom Jr", "Philippa Soo", "Daveed Diggs", "Wayne Brady"],
        correctAnswer: "Wayne Brady"
    },

    {
        question: "who wrote 'Hamilton'?",
        answers: ["Lin-Manuel Miranda", "Philippa Soo", "Daveed Diggs", "Dr. Seuss"],
        correctAnswer: "Lin-Manuel Miranda"
    },

    {
        question: "Complete the lyric: 'I am not throwing away.....",
        answers: ["My Shot", "My trash", "My empty water bottle", "My dinner"],
        correctAnswer: "My Shot"
    },

    {
        question: "What song introduces Thomas Jefferson when he appears at the beginning of Act 2?",
        answers: ["Happy Birthday", "Cell Block Tango", "What'd I Miss", "Guerrilla Radio"],
        correctAnswer: "What'd I Miss"
    },

  
    {
        question: "Who shoots Alexander Hamilton in a duel?",
        answers: ["King George", "Aaron Burr", "Eliza Hamilton", "Jay-Z"],
        correctAnswer: "Aaron Burr"
    },
]

//attempt at creating a counter
var counter = 30;
function createTimer() {
    $("#timer").text("Time remaining: " + counter + " seconds");

    function timeIt() {
        counter--;
        $("#timer").text(counter);
    
    }
    setInterval(timeIt, 1000);
    
}

function showQuestions(){
    
    for (var i = 0; i < triviaQuestions.length; i++){
        answers = [];
        $("#displayQuestion").text(question[i]);
            function showAnswers() {

            }
    }

}

function showResults(){}

// display game right away
buildGame();
createTimer();

// on submit, show results
submitButton('click', showResults);

