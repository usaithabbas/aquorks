  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAQ6uVeabUb7rzemxwpmuVWslkD4FCATZY",
    authDomain: "aquorks-44bb9.firebaseapp.com",
    databaseURL: "https://aquorks-44bb9-default-rtdb.firebaseio.com",
    projectId: "aquorks-44bb9",
    storageBucket: "aquorks-44bb9.appspot.com",
    messagingSenderId: "1062798736873",
    appId: "1:1062798736873:web:6896fb7c7e9d5365c55f78",
    measurementId: "G-ZJB9V0BVLZ"
  };

  firebase.initializeApp(firebaseConfig);

 var formDB = firebase.database().ref('Form')

 document.getElementById('Application-form').addEventListener('submit', submitform);

 function submitform(e){
  e.preventDefault();
  var name = getElementById('name');
  var email = getElementById('email');
  var number = getElementById('number');
  var Institution = getElementById('Institution');
  var courses = getElementById('courses');
  var Education = getElementById('Education');
  var Others = getElementById('Others');
  var comments = getElementById('comments');

  saveMessages(name, email, number, Institution, courses, Education, Others, comments);
  document.querySelector(".thanks").style.display="block";
  setTimeout(()=>{
    document.querySelector(".thanks").style.display="none";
  }, 5000);

  document.getElementById('Application-form').reset();
 }

 const saveMessages = (name, email, number, Institution, courses, Education, Others, comments)=>{
  var newForm = formDB.push();
  newForm.set({
    name : name,
    email : email,
    number : number,
    Institution : Institution,
    courses : courses,
    Education : Education,
    Others : Others,
    comments : comments,
 })
 };

 const getElementById = (id) =>{
  return document.getElementById(id).value;

 }