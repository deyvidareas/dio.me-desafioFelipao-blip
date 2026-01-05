var nome = prompt("Qual o nome do herói?");
var xp = parseInt(prompt("Quanto de XP ele possui?")); 
var classificacao;

switch (true) {
  case (xp < 1000):
    classificacao = "Ferro";
    break;
  case (xp >= 1001 && xp <= 2000):
    classificacao = "Bronze";
    break;
  case (xp >= 2001 && xp <= 5000):
    classificacao = "Prata";
    break;
  case (xp >= 5001 && xp <= 7000):
    classificacao = "Ouro";
    break;
  case (xp >= 7001 && xp <= 8000):
    classificacao = "Platina";
    break;
  case (xp >= 8001 && xp <= 9000):
    classificacao = "Ascendente";
    break;
  case (xp >= 9001 && xp <= 10000):
    classificacao = "Imortal";
    break;
  case (xp >= 10001):
    classificacao = "Radiante";
    break;
  default:
    classificacao = "Não Classificado!";
}

// Exibe o resultado final
alert("O Herói de nome " + nome + " possui " + xp + " de XP e está no nível: " + classificacao);