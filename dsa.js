
const quizData = [
    {
        question: "What is the time complexity of binary search?",
        a: "O(n)",
        b: "O(log n)",
        c: "O(n^2)",
        d: "O(1)",
        correct: "b"
    },
    {
        question: "Which data structure uses LIFO?",
        a: "Queue",
        b: "Stack",
        c: "Array",
        d: "Linked List",
        correct: "b"
    },
    {
        question: "What is the time complexity for accessing an element in an array by index?",
        a: "O(1)",
        b: "O(n)",
        c: "O(log n)",
        d: "O(n^2)",
        correct: "a"
    },
    {
        question: "Which data structure allows constant-time insertion and deletion with a known reference?",
        a: "Array",
        b: "Stack",
        c: "Linked List",
        d: "Queue",
        correct: "c"
    },
    {
        question: "Which algorithm makes locally optimal choices in hopes of finding a global optimum?",
        a: "Dynamic Programming",
        b: "Greedy Algorithm",
        c: "Graph Algorithm",
        d: "Sorting Algorithm",
        correct: "b"
    },
    {
        question: "What type of tree structure has nodes with at most two children?",
        a: "Graph",
        b: "Binary Tree",
        c: "Heap",
        d: "Linked List",
        correct: "b"
    },
    {
        question: "In which data structure do parent nodes have higher values than their children in a max-heap?",
        a: "Min-Heap",
        b: "Max-Heap",
        c: "Binary Search Tree",
        d: "Graph",
        correct: "b"
    },
    {
        question: "Which graph traversal algorithm explores the nodes in layers?",
        a: "Depth-First Search",
        b: "Breadth-First Search",
        c: "Dijkstra's Algorithm",
        d: "Prim's Algorithm",
        correct: "b"
    },
    {
        question: "Which of the following is an example of a Divide-and-Conquer sorting algorithm?",
        a: "Bubble Sort",
        b: "Merge Sort",
        c: "Insertion Sort",
        d: "Selection Sort",
        correct: "b"
    },
    {
        question: "What is the time complexity for inserting into a balanced binary search tree (BST)?",
        a: "O(n)",
        b: "O(log n)",
        c: "O(1)",
        d: "O(n^2)",
        correct: "b"
    }
];


const quiz = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const result = document.getElementById('result');
const homeButton = document.getElementById('home');
let score = 0;
let selectedAnswers = {};

function loadQuiz() {
    quiz.innerHTML = '';

    quizData.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-container');

        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionTitle);

        ['a', 'b', 'c', 'd'].forEach(option => {
            const button = document.createElement('button');
            button.classList.add('option-btn');
            button.textContent = q[option];
            button.onclick = () => selectAnswer(index, option, button);
            questionDiv.appendChild(button);
        });

        quiz.appendChild(questionDiv);
    });
}

function selectAnswer(questionIndex, option, button) {
    const buttons = document.querySelectorAll(`.question-container:nth-child(${questionIndex + 1}) .option-btn`);
    
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    button.classList.add('selected');
    selectedAnswers[questionIndex] = option;
}

submitButton.addEventListener('click', () => {
    score = 0; 
    
    quizData.forEach((q, index) => {
        const buttons = document.querySelectorAll(`.question-container:nth-child(${index + 1}) .option-btn`);
        
        
        if (selectedAnswers[index] === q.correct) {
            score++; 
        }
        
        buttons.forEach((btn, btnIndex) => {
            const option = ['a', 'b', 'c', 'd'][btnIndex];
            
            if (option === q.correct) {
                btn.classList.add('correct'); 
            }

            if (selectedAnswers[index] === option && option !== q.correct) {
                btn.classList.add('incorrect'); 
            }
        });
    });

    
    result.textContent = `You scored ${score}/${quizData.length}`;
    result.style.display = 'block';
    
    
    submitButton.style.display = 'none';
    homeButton.style.display = 'block';
});


loadQuiz();