const quizData = [
    {
        question: 'HTML stands for?',
        a : "Hypertext Markup Language",
        b : "Hypertext Makeup Language",
        c : "Hypertext Marking Language",
        d : "Hyper textediting Markup Language",
        correctAnswer: "a"
    },
    {
        question: 'what is current version of HTML?',
        a : "HTML2",
        b : "HTML3",
        c : "HTML4",
        d : "HTML5",
        correctAnswer: "d"
    },
    {
        question: 'what is correct syntax in below given options',
        a :"@media only screen and (max-width : 300px) and (max-width : 600px)",
        b : "@media only screen and (min-width : 300px) and (min-heigth : 600px)",
        c : "@media only screen and (min-widt : 300px) and (max-width : 600px)",
        d : "@media only screen and (min-width : 300px) and (max-width : 600px)",
        correctAnswer: "d"
    },
    {
        question: 'using HTML we can add',
        a : "styles to webpage",
        b : "content to webpage",
        c : "functionality to webpage",
        d : "animations to webpage",
        correctAnswer: "b"
    },
    {
        question: 'what is the correct format of writing comments in HTML ?',
        a : "<--! comment !-->",
        b : "/* comment */",
        c : "<- comment ->",
        d : "none of the above",
        correctAnswer: "d"
    },
    {
        question: 'which of the below option is a semantic element ?',
        a : "span",
        b : "main",
        c : "id",
        d : "div",
        correctAnswer: "b"
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correctAnswer) {
            score++;
        } 
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }else{
        alert("Please select an option before submitting")
    }

});