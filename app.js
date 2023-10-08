
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
 import { 
  getDatabase,
  ref,
  push,
  set,
 onChildAdded,} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyCM2duCN6PJ6SyhP6JMsK59FimmmgwcXEE",
   authDomain: "quizapp-68904.firebaseapp.com",
   projectId: "quizapp-68904",
   storageBucket: "quizapp-68904.appspot.com",
   messagingSenderId: "540006746113",
   appId: "1:540006746113:web:cd6c2670e431bbea4bd800"
 };

 // Initialize Firebase
 var app = initializeApp(firebaseConfig);
 var db = getDatabase(app)

var question = document.getElementById("question");
var option = document.getElementById("option");
var optionsParent = document.getElementById("optionsParent");
var correctAnswerElem = document.getElementById("correctAnswer");

var options = [];
var correctAnswer;

function renderOptions() {
  optionsParent.innerHTML = "";
  for (var i = 0; i < options.length; i++) {
    optionsParent.innerHTML += `<li onclick = "setCorrectAnswer('${options[i]}')" class = 'p-2 bg-light fs-5 rounded shadow my-2'>${options[i]}</li>`;
  }
}

window.add = function () {
  options.push(option.value);
  console.log(options);
  renderOptions();
};

window.setCorrectAnswer = function (a) {
  correctAnswer = a;
  correctAnswerElem.innerHTML = correctAnswer;
};

window.submintQuestion = function () {
  var obj = {
    question: question.value,
    options: options,
    correctAnswer: correctAnswer,
  };
  obj.id = push(ref(db, "question/")).key;

  var refrence = ref(db, `question/${obj.id}`);
  set(refrence, obj);

  console.log(obj);
};
