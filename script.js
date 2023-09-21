// define the array to add all the questions with options
const quizDB =[
    {
        question: "Q1: What is the full form of HTML?" ,
        a: "Hello to my Land",
        b: "Hey Text Markup Language",
        c: "Hey Text Markup Language",
        d: "HyperText Markup Language",
        ans: "ans4"
    },

    {
        question: "Q2: What is the full form of CSS?" ,
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheeps",
        c: "Cartoon Style Stylesheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },

    {
        question: "Q3: What is the full form of HTTP?" ,
        a: "Hypertext Transfer Protocol",
        b: "HyperText Text Protocol ",
        c: "Hey Text Markup Language",
        d: "HyperText totco protocol",
        ans: "ans1"
    },

    {
        question: "Q4: What is the full form of JS?" ,
        a: "Javascript",
        b: "Java Super",
        c: "Just Script",
        d: "Jordan Shoes",
        ans: "ans1"
    },
];
// access all the parameters/places in the html 
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');   // taken all the input parameters together

const  showScore =  document.querySelector('#showScore');

//increment the qs count 
let questionCount = 0;
let score = 0;


// arrow function to add the question
const loadQuestion = () => 
{
    const questionList = quizDB[questionCount];   // it includes one complete part of qs with its options
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}



loadQuestion();

const getCheckAnswer = () => {           // define the function
    let answer;                           // user ne kisko select kia , is stored here

    answers.forEach((curAnsElement) => {              // foreach loop will compare the user's selected ans and the real ans
      if(curAnsElement.checked)    
      {
        answer = curAnsElement.id;
      }    
          });

          return answer;

};

const deselectAll = () => 
{
    answers.forEach((curAnsElement) =>  curAnsElement.checked = false );
}

// this is to know, user selected which radio button.
submit.addEventListener('click', () =>{
    const checkedAnswer = getCheckAnswer();   // call the function
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans)
    {
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length)       // this if else will run all the questions one after the other
    {
        loadQuestion();
    }else
    {
         showScore.innerHTML = `
         <h3> You scored  ${score} / ${quizDB.length}</h3>
         <button class="btn" onclick="location.reload()">Play Again</button>
         `;

         showScore.classList.toggle('scoreArea');

    }
});
