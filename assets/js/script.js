document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const nome = urlParams.get('nome');
    const email = urlParams.get('email');
    const mensagem = urlParams.get('mensagem');

    const nomeResultado = document.getElementById('nomeResultado');
    const emailResultado = document.getElementById('emailResultado');
    const mensagemResultado = document.getElementById('mensagemResultado');

    nomeResultado.textContent = `Nome: ${nome}`;
    emailResultado.textContent = `Email: ${email}`;
    mensagemResultado.textContent = `Mensagem: ${mensagem}`;
});

const btnVoltar = document.getElementById("btnVoltar");
btnVoltar.addEventListener("click", function() {
    window.location.href = "index.html"; 
});
