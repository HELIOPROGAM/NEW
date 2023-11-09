// Defina a função.
function addUser() {

 // Obtenha o nome do usuário da input box e armazene dentro de uma variável
  userName = document.getElementById("userName").value;
  // Então, armazenamos o valor da variável userName no local storage com a palavra-chave userName.
  localStorage.setItem("userName", userName);
  // Em seguida, redirecionamos para kwitterRoom.html.
  window.location = "kwitterRoom.html";
}


