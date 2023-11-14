const firebaseConfig = {
  apiKey: "AIzaSyA21y0CO0RtMGElW9NxIq6wZ5ak162Liaw",
  authDomain: "testekwitter.firebaseapp.com",
  databaseURL: "https://testekwitter-default-rtdb.firebaseio.com",
  projectId: "testekwitter",
  storageBucket: "testekwitter.appspot.com",
  messagingSenderId: "364995332721",
  appId: "1:364995332721:web:0de8c39165ffdfe29269d0",
  measurementId: "G-09MT67BKZQ"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Defina a função.

function addUser() {

 // Obtenha o nome do usuário da input box e armazene dentro de uma variável
  userName = document.getElementById("userName").value;
  // Então, armazenamos o valor da variável userName no local storage com a palavra-chave userName.
  localStorage.setItem("userName", userName);
  // Em seguida, redirecionamos para kwitterRoom.html.
  window.location = "kwitterRoom.html";
}


