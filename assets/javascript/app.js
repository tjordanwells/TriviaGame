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

    $("#questions").hide();



    // functions

    $("#start").click(function () {
        $("#questions").show();

        run();

        $("#question").text(questionArray[0]);
        $("#answer1").text(answerArray[0][0]);
        $("#answer2").text(answerArray[0][1]);
        $("#answer3").text(answerArray[0][2]);

        if (timeRemaining === 0) {
            $("#question").text(questionArray[1]);
            $("#answer1").text(answerArray[1][0]);
            $("#answer2").text(answerArray[1][1]);
            $("#answer3").text(answerArray[1][2]);
        }

        var intervalId;

        var timeRemaining = 30;
    
        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }
    
        function decrement() {
            timeRemaining--;
    
            $("#time").text("Time Remaining: " + timeRemaining);
            console.log(timeRemaining)
    
            if (timeRemaining === 0) {
                alert("Time's up!");
                stop();
            }
    
        }
    
        function stop() {
            clearInterval(intervalId);
        }



    });



});