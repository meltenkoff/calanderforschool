/*var count = 0;
document.getElementById("up").addEventListener("click", myFunction);
function myFunction() {
  //document.getElementById("up").
  //document.write(count);
  count = count + 1;
  document.getElementById("demo").innerHTML = count;
}*/

//updateScore updates the score of the user
var count = 0;
function updateScore(){
  count = count + 1;
  document.getElementById("demo").innerHTML = count;
  document.getElementById("demo").style.color = "green"; 
}
function lose(){
  count =count - 1;
  document.getElementById("demo").innerHTML = count;
  document.getElementById("demo").style.color = "red";
}

//const pic1 = new String("<button type ="button" onclick="updateScore()"><img src="https://www.pinclipart.com/picdir/middle/559-5599326_trash-can-cartoon-png-clipa"></button>");
//<button type ="button" onclick="updateScore()"><img src="https://www.pinclipart.com/picdir/middle/559-5599326_trash-can-cartoon-png-clipa"></button>

/*
array of pictures
string objectPic = [pic1, pic2, pic3, pic4, pic5];
*/

// Array buttons
// [
//    <button type ="button" onclick="updateScore()"><img src="https://www.pinclipart.com/picdir/middle/559-5599326_trash-can-cartoon-png-clipa"></button>,
//           <button type ="button" onclick="updateScore()"><img src="https://cdn.pixabay.com/photo/2014/04/03/10/38/recycle-310938_960_720.png.,
//           <button type ="button" onclick="lose()"><img src="https://cdn.pixabay.com/photo/2015/07/27/19/47/turtle-863336_1280.jpg"></button>,

// ]

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})


function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }

    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })

}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }

}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What are some good habits?',
    answers: [
      { text: 'Cleaning Up', correct: true },
      { text: 'Sleeping Enought', correct: true },
      { text: 'Constantly Sitting', correct: false }
    ]
  },

  {
    question: 'What is a good way to manage stress?',
    answers: [
      { text: 'Binge Eating', correct: false },
      { text: 'Throwing a Tantrum', correct: false },
      { text: 'Exercising', correct: true },
      { text: 'Playing with your Pet', correct: true }
    ]
  },

  {
    question: 'How to organize your work',
    answers: [
      { text: 'Do it on the Last Day', correct: false },
      { text: 'Producive Procrastination', correct: true },
      { text: 'Little by Little', correct: true },
      { text: 'Do not do it', correct: false }
    ]
  },

  {
    question: 'Are you able?',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No', correct: False }
    ]
  }
]
