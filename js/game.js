// dynamically add the Play Game button
document.getElementById('prompt').innerHTML = "<button onClick='playGame()'>Play Game</button>";

var questions = [
    ["Which North African sea port is the name in Spanish for the white house?", 0, "Casablanca", "Madrid", "Chicago"],
    ["What is the most popular drink in the world that does not have alcohol?", 1, "Tea", "Coffee", "Coke"],
    ["What is the most popular web development programming language today?", 2, "HTML", "CSS", "JavaScript"]
];

// use this counter to track the questions
var count = 0;

// clicking the Play Game buton call the playGame function to load a question with answers
function playGame() {
    var question = questions[count]; // select the next available question array from the multi-dimensional array
    document.getElementById('question').innerHTML = "<p><strong>" + question[0] + "</strong></p>";
    question.shift(); // remove the question from the array
    var correctIndex = question[0];
    question.shift(); // remove the correct answer index from the array

    var answerChoices = "";
    question.forEach(createAnswerList);
    function createAnswerList(item, index) {
        answerChoices += "<li><a href='#' onClick='checkAnswer(" + index + ', ' + correctIndex + ")'>" + item + "</a></li>";
    }
    
    document.getElementById('answers').innerHTML = answerChoices;
    document.getElementById('prompt').innerHTML = "<p>Click the best or most correct answer above.</p>";
    return false;
}

function checkAnswer(index, correctIndex) {
    if (index == correctIndex) {
        document.getElementById('answers').innerHTML = "<li class='success'>That's right!</li>";
        document.getElementById('question').innerHTML = "";
    } else {
        document.getElementById('answers').innerHTML = "<li class='error'>Sorry, that is not correct!</li>";
        document.getElementById('question').innerHTML = "";
    }
    count++;
    if (count < questions.length) {
        document.getElementById('prompt').innerHTML = "<button onClick='playGame()'>Play Game</button>";
    } else {
        document.getElementById('prompt').innerHTML = "<button onClick='location.reload()'>Restart Game</button>";
    }
    return false;
}