// 3 pessoas cadastradas
const usuarios = [
  {login: "Steve", senha: "1234"},
  {login: "Technoblade", senha: "Porco"},
  {login: "Creeper", senha: "Explosão"}
];

function verificarLogin(){
  const loginDigitado = document.getElementById("login").value; // pega o que a pessoa digitou no login
  const senhaDigitada = document.getElementById("senha").value; // pega o que a pessoa digitou na senha
  const mensagem = document.getElementById("mensagem"); // pega a área de mensagem

  let encontrado = false; // começa como falso (ninguém logado ainda)

for(let i = 0; i < usuarios.length; i++){
  if(loginDigitado === usuarios[i].login && senhaDigitada === usuarios[i].senha){
  encontrado = true; // achou login e senha corretos
  break; // pode parar o laço
}
}

if(encontrado){
  mensagem.innerHTML = "Bem-vindo ao servidor, " + loginDigitado + "!";
  mensagem.style.color = "white";

setTimeout(() =>{
  mensagem.innerHTML = "será que você está cadastrado ?";
  mensagem.innerHTML = "redirecionando...";

  mensagem.style.color= "white"
  window.location.href = "minecraft.html";
}, 2500);
  
} else {

  mensagem.innerHTML = "Nome ou senha incorretos! Tenta de novo...";
  mensagem.style.color = "white";
}

  document.getElementById("login").value = ""; // limpa o campo de login
  document.getElementById("senha").value = ""; // limpa o campo de senha
}  