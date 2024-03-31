const questions = [
    {
      question: "Which is the correct way to call an ArrayList",
      choices: ["ArrayList <> list = ArrayList()", "ArrayList <int> list = new ArrayList<>()", "ArrayList <Integer> list = new ArrayList<>()","ArrayList <Integer> list = new ArrayList<>"],
      correct: 2,
      feedback: "To call this method in needs the type to be specified like Intger and not int."
    },
    {
      question: "What is a property of private methods",
      choices: ["They can be accessed in every class related to that project ", "Can only be called in the class it is in", "Creates new objects", "None of the above"],
      correct: 1,
      feedback: "Private methods can't be called outside of the method it was created."
    },
    {
        type: "image",
        question: "What does the line Perso P = new Person(Mike) do?",
        image: "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.cs.columbia.edu%2F~cmurphy%2Fsummer2008%2F1007%2Fnetbeans%2F5_newclasses.html&psig=AOvVaw0CfNMKtl_xzAtV_ykpTXnv&ust=1711935819570000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPCc_4qwnYUDFQAAAAAdAAAAABAD",
        choices: ["Create an object", "Add Mike to a list", "Remove Mike from a list", "Pring out Mike"],
        correct: 0,
        feedback: "" ,
      }
    
  ];
  
  let currentQuestion = 0;
let correctAnswers = 0;
let personName = document.getElementById('name');

function startQuiz() {
    const nameInput = document.getElementById("name");
    const name = nameInput.value.trim();
    if (name) {
      localStorage.setItem("name", name);
      const startView = document.querySelector(".start_view");
      startView.style.display = "none";
      const quizView = document.querySelector(".quiz_view");
      quizView.style.display = "block";
      
      showQuestion();
    } else {
      alert("Please enter your name.");
    }
  }

function showQuestion() {
  const questionText = document.getElementById("question-text");
  questionText.textContent = questions[currentQuestion].question;

  const choices = document.querySelectorAll(".choice");
  choices.forEach((choice, index) => {
    choice.textContent = questions[currentQuestion].choices[index];
  });

  const feedback = document.getElementById("feedback");
  feedback.textContent = "";
}

function checkAnswer(selected) {
  const feedback = document.getElementById("feedback");
  if (selected === questions[currentQuestion].correct) {
    feedback.textContent = "Correct!";
    correctAnswers++;
  } else {
    feedback.textContent = "Incorrect!";
  }

  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      const quizContainer = document.querySelector(".quiz_view");
      quizContainer.innerHTML = `<p> ${personName} you got ${correctAnswers} out of ${questions.length} questions.</p>`;
    }
  }, 500);
}

showQuestion();