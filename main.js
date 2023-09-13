const questions = [ 
    {
    question:"Who wrote the famous book - 'We the people'?",
    answers : [ "T.N.Kaul", "J.R.D." ,"Tata Khushwant Singh"],
    correct: 2,
    
},
{
    question:"Quel est le nom chinois de la ville de Pékin ? ",
    answers : [ "peijin", "meijin." ,"keijin"],
    correct: 3,
    
},

{
    question:"Que signifie Beijing en français ?",
    answers : [ "ville", "gardin" ,"etoile"],
    correct: 2,
    
},
{
    question:"Quel est le nom de ce lieu central de Pékin ?",
    answers : [ "temple hongulo", "la cite interdite" ,"je sais pas"],
    correct: 2,
    }
];
//start(/)

const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

let score = 0;
let questionIndex = 0;

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;

function clearPage() {
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}

function showQuestion() {
    console.log('showQuestion');

    const headerTemplate = `<h2 class="title">%title%</h2>`;
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
    headerContainer.innerHTML = title;

    listContainer.innerHTML = '';
    for (answerText of questions[questionIndex]['answers']) {
        const questionTemplate =
            `<li>
                <label>
                    <input type="radio" class="answer" name="answer"/>
                    <span>%answer%</span>
                </label>
            </li>`;
        const answerHTML = questionTemplate.replace('%answer%', answerText);
        listContainer.innerHTML += answerHTML;
    }
}

function checkAnswer() {
    console.log('checkAnswer started!');

    const checkedRadio = listContainer.getElementsByClassName('answer');

    for (let i = 0; i < 3; i++) {
        if (checkedRadio[i].checked == true && i + 1 == questions[questionIndex].correct) {
            score++;
        }
    }
    console.log("score = " + score);

    questionIndex++;
    if (questionIndex === questions.length) {
        showScorePage();
    } else {
        showQuestion();
    }
}

function showScorePage() {
    clearPage();

    const scoreTemplate = `
        <h2 class="title">Quiz Results</h2>
        <p class="score">Your score: ${score} out of ${questions.length}</p>
        <button id="restart">Restart Quiz</button>
    `;

    headerContainer.innerHTML = scoreTemplate;

    const restartBtn = document.querySelector('#restart');
    restartBtn.onclick = restartQuiz;
}

function restartQuiz() {
    score = 0;
    questionIndex = 0;
    clearPage();
    showQuestion();
}

