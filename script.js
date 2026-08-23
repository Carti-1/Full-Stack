const botaoTema = document.querySelector('#botao-tema');
const anoAtual = document.querySelector('#ano-atual');

botaoTema.addEventListener('click', function () {
    document.body.classList.toggle('tema-claro');

    if (document.body.classList.contains('tema-claro')) {
        botaoTema.textContent = 'Tema escuro';
    } else {
        botaoTema.textContent = 'Tema claro';
    }
});

anoAtual.textContent = new Date().getFullYear();