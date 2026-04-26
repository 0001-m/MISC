let quiz = [
    {
        question: "HTML stands for?",
        options: ["Hyper Text Markup Language", "High Text Machine", "Hyper Tool", "None"],
        answer: 0
    },
    {
        question: "CSS is used for?",
        options: ["Structure", "Styling", "Logic", "Database"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

loadQuestion();

function loadQuestion() {
    let q = quiz[currentQuestion];

    document.getElementById("question").innerText = q.question;

    for (let i = 0; i < 4; i++) {
        document.getElementById("opt" + i).innerText = q.options[i];
    }
}

function checkAnswer(selected) {
    let correct = quiz[currentQuestion].answer;

    if (selected === correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quiz.length) {
        loadQuestion();
    } else {
        document.getElementById("result").innerText = "Score: " + score;
    }
}