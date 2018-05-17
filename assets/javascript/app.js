$(document).ready(function () {
    
// global variables

var correct = 0;
var incorrect = 0;

var questionArray = [
    "What is Batman's secret identity?", 
    "Who was Batman's first Robin?", 
    "Who wrote 'The Dark Knight Returns'?", 
    "Who does the Joker kill in 'Death In The Family'?",
    "Where does the Joker meet Harley Quinn?",
    "How many actors have portrayed The Caped Crusader?",
    "Who played the Joker in Tim Burton's 'Batman'?",
    "Who created Batman?",
    "Who breaks Batman's back?",
    "How does Batman typically get around Gotham City?",
];

var answerArray = [
    ["Alfred Pennyworth", "Bruce Wayne", "Hugo Strange"], 
    ["Dick Grayson", "Damian Wayne", "Jason Todd"],
    ["Scott Snyder", "Jason Todd", "Frank Miller"],
    ["Wayne Manor", "Arkham Asylum", "Gotham City"],
    ["Batman", "Jason Todd (Robin)", "Barbara Gordon"],
    [4, 5, 8],
    ["Jack Nicholson", "Al Pacino", "George Clooney"],
    ["Tim Burton", "Adam West", "Bob Kane"],
    ["The Joker", "Bane", "Killer Croc"],
    ["He flies", "The Batmobile", "He walks"],
];

console.log(questionArray[0]);
console.log(answerArray[0][0]);
console.log(answerArray[0][1]);
console.log(answerArray[0][2]);

$("#question").hide();




// functions

$("#start").click(function() {
    $("#question").show();
    

    for (var i = 0; i < questionArray.length; i++) {
        $("#question").text(questionArray[i]);
        run();
    }
    
});




// time functions

var intervalId; 

var timeRemaining = 30;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timeRemaining--;

    $("#time").text(timeRemaining);
    console.log(timeRemaining)
    
    if (timeRemaining === 0) {
        alert("Time's up!");
        stop();
    }
}

function stop() {
    clearInterval(intervalId);
}


})
