// we declare the questions array as an empty one
let questions = [];

// by initializing the variable, we weren't actually updating the empty array..so we use the push function to update the array.
questions.push({ 
    questionText: "What is the capital of France?",
    answerChoices: ["London", "Paris", "Berlin"],
    correctAnswerIndex: 1
});

questions.push({
    questionText: "Who invented the telephone?",
    answerChoices: ["Alex Graham", "Thomas Edison", "Gregory Spencer"],
    correctAnswerIndex: 0
});

questions.push({
    questionText: "When will AI take over the world?",
    answerChoices: ["yes", "no" ],
    correctAnswerIndex: 1
});


let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');
const questionTextElement = document.getElementById('question-text');
const answerChoicesElement = document.getElementById('answer-choices');
const feedbackElement = document.getElementById('feedback');


function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    questionTextElement.innerHTML = currentQuestion.questionText;

    
    answerChoicesElement.innerHTML = currentQuestion.answerChoices.map((choice, index) => `<button data-index="${index}">${choice}</button>`).join('');

}



answerChoicesElement.addEventListener('click', (event) => {
    const clickedButton = event.target;
    const clickedIndex = clickedButton.dataset.index;
    const correctIndex = questions[currentQuestionIndex].correctAnswerIndex;

    if (clickedIndex == correctIndex) {
        score++;
        feedbackElement.classList.add('correct');
        feedbackElement.innerHTML = 'Correct';
    } else {
        feedbackElement.classList.add('incorrect');
        feedbackElement.innerHTML = 'Incorrect';
    }

    // checks if user reached the end of the quiz
    if (currentQuestionIndex + 1 >= questions.length) {
        showFinalScore();
    } else {
        currentQuestionIndex++;
        displayQuestion();
    }


});


function showFinalScore() {
    quizContainer.style.display = 'none';
    const finalScoreElement = document.createElement('p');
    finalScoreElement.innerHTML = `Your final score is ${score} out of ${questions.length}`;
    document.body.appendChild(finalScoreElement);
}

displayQuestion();