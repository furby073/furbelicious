document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio do formulário

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (username === "furby" && password === "furby") {
    message.textContent = "✅ Login OK!";
    message.style.color = "green";
  } else {
    message.textContent = "❌ Usuário ou senha incorretos.";
    message.style.color = "red";
  }
});
