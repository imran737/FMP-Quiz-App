var questions = [
    {
        question: 'HTML stands for -------',
        option: ['Hyper Text Markup Language', 'Hyper Tension Markup Loss', 'Hygen Temp Makeup life', 'Hello Text Mass Language'],
        correctAnswer: 'Hyper Text Markup Language'
    },
    {
        question: 'CSS stands for -------',
        option: ['Curly Score Source', 'Cascading Style Sheets', 'Current Style Solid', 'Cube Style Sheet'],
        correctAnswer: 'Cascading Style Sheets'
    },
    {
        question: 'Is JS Functional languagae?',
        option: ['True', 'False'],
        correctAnswer: 'True'
    },
    {
        question: 'JS stands for -------',
        option: ['Hyper Text Markup Language', 'Hyper Tension Markup Loss', 'Hygen Temp Makeup life', 'Java Script'],
        correctAnswer: 'Java Script'
    }
]

var questionIndx = 0
var marks = 0

function displayQuestion(){
    var a = document.getElementById("questionCompleted")
    a.innerHTML = questionIndx + 1
    var b = document.getElementById('totalQuest')
    b.innerHTML = questions.length
    var questiondisplay = document.getElementById("question")
    questiondisplay.innerHTML = questions[questionIndx].question
    var optionDiv = document.getElementById("optionsparent")
    optionDiv.innerHTML = ''
    for (var i = 0; i < questions[questionIndx].option.length; i++) {
        var div = document.createElement('div')
        div.setAttribute("class", "m-3 shadow rounded")
        var optionbtn = document.createElement("button")
        optionbtn.setAttribute("class", "p-3 border bg-light shadow p-3 mb-5 bg-body rounded")
        optionbtn.setAttribute('onclick', 'checkAnswer(this)')
        var optionBtnText = document.createTextNode(questions[questionIndx].option[i])
        optionbtn.appendChild(optionBtnText)
        div.appendChild(optionbtn)
        optionDiv.appendChild(div) 
    }
}

function nextQuestion(){
    if(questionIndx < questions.length-1){
        var nextbtn = document.getElementById("nextbtn")
        var submitbtn = document.getElementById("submitbtn")
        submitbtn.style.display = 'none'
    }else if (questionIndx == questions.length-1){
        submitbtn.style.display = 'block'
        nextbtn.style.display = 'none'
        alert(marks)
    }
    
    questionIndx++
    displayQuestion()
}
displayQuestion()
function checkAnswer(e) {
    var userAnswer = e.firstChild.nodeValue
    var correctAnswer = questions[questionIndx].correctAnswer
    if (userAnswer === correctAnswer){
        marks++
    }
}