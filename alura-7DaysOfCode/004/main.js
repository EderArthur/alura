function numeroAleatório(min, max) {
    return Math.random() * (10 - 1) + 1;
  }

  const chute = prompt("Escolha um numero entre 1 a e 10");
  let numeroChutado = "";

  
  if (numeroChutado == numeroAleatório ){
    chute = prompt("Otimo acertou!");
  }
  else if (numeroChutado === numeroAleatório){
    chute = prompt("ah não você errou");
  }


