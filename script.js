function jogar(escolha) {
  const opcoes = ['pedra', 'papel', 'tesoura'];
  const computador = opcoes[Math.floor(Math.random() * opcoes.length)];

  if (escolha === computador) {
    document.querySelector('.resultado').innerHTML = `Empate!`;
  } else if ((escolha === 'pedra' && computador === 'tesoura') ||
             (escolha === 'tesoura' && computador === 'papel') ||
             (escolha === 'papel' && computador === 'pedra')) {
    document.querySelector('.resultado').innerHTML = `Você ganhou!`;
  } else {
    document.querySelector('.resultado').innerHTML = `Você perdeu!`;
  }

  document.querySelector('.computador').innerHTML = `O computador escolheu: ${computador}`;
}

function reiniciar() {
  document.querySelector('.resultado').innerHTML = '';
  document.querySelector('.computador').innerHTML = '';
}