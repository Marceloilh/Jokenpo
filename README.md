# Jokenpô

## Código
html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Jokenpô</title>
  <style>
    /* Estilos CSS */
  </style>
</head>
<body>
  <!-- Conteúdo HTML -->
  <script>
    // Código JavaScript
  </script>
</body>
</html>

Funcionalidades
- Jogo de Jokenpô com opções de pedra, papel e tesoura
- Resultado do jogo é exibido na tela

Como funciona
1. O jogador seleciona uma opção (pedra, papel ou tesoura)
2. O computador seleciona uma opção aleatória
3. O resultado do jogo é determinado com base nas regras do Jokenpô

Código JavaScript

function jogar(escolha) {
  const opcoes = ['pedra', 'papel', 'tesoura'];
  const computador = opcoes[Math.floor(Math.random() * opcoes.length)];

  // Lógica do jogo
}

