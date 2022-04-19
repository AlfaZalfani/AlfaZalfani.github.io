const quizData = [
    {
        question: "Susunan atau urutan Langkah-langkah dalam menyelesaikan masalah secara logis dan sistematis disebut...",
        a: "Taktik",
        b: "Pemrograman",
        c: "Strategi",
        d: "Algoritma",
        e: "Notasi",
        correct: "d",
    },
    {
        question: "Deretan perintah yang digunakan untuk memerintahkan mesin komputer melakukan sesuatu disebut...",
        a: "Program",
        b: "Notasi pseudocode",
        c: "Pemrograman",
        d: "Bahasa pemrograman",
        e: "Aplikasi",
        correct: "a",
    },
    {
        question: "Bahasa pemrograman yang hanya dimengerti oleh mesin berupa bilangan 0 dan 1 disebut...",
        a: "High level language",
        b: "Low level language",
        c: "Interpreter",
        d: "Compiler",
        e: " Library",
        correct: "b",
    },
    {
        question: "Sebuah wadah sementara nilai dengan tipe data tertentu untuk menyimpan sebuah data disebut...",
        a: "Tipe data",
        b: "Konstanta",
        c: "Variable",
        d: "Operasi",
        e: "Operator",
        correct: "c",
    },
    {
        question: "Contoh penulisan variable yang benar adalah...",
        a: "NamaDepan",
        b: "1Nama",
        c: "Nama Depan",
        d: "namaDepan",
        e: "Nama 1",
        correct: "d",
    },
        {
        question: "Tipe data yang terdiri dari gabungan huruf, angka, dan tanda baca disebut...",
        a: "String",
        b: "Booelan",
        c: "Number",
        d: "Object",
        e: "bigint",
        correct: "a",
    },
        {
        question: "Pada pemrograman javascript i++ sama dengan...",
        a: "i+i",
        b: "i+1",
        c: "1+1",
        d: "i+2",
        e: "i+4",
        correct: "b",
    },
        {
        question: "Pada pemrograman javaScript, perintah console.log berfungsi untuk...",
        a: "Membuat variable",
        b: "Membuat tipe data",
        c: "Membuat function",
        d: "Menginput tulisan",
        e: "Menampilkan tulisan",
        correct: "e",
    },
        {
        question: "Indeks pada sebuah array dimulai dari angka...",
        a: "1",
        b: "3",
        c: "9",
        d: "0",
        e: "5",
        correct: "d",
    },
        {
        question: "Variabel yang didefinisikan di luar blok fungsi memiliki cakupan...",
        a: "Local Scope",
        b: "Umum",
        c: "Global Scope",
        d: "Khusus",
        e: "Independent",
        correct: "c",
    },

];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
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
    e_text.innerText = currentQuizData.e;
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
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Jawaban kamu benar ${score} dari ${quizData.length} soal.</h2>
                
                <button onclick="location.reload()">Ulangi</button>
            `;
        }
    }
});