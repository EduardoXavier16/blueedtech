let rodadas = +prompt("Quantas rodadas você quer jogar?");
console.log(`Você escolheu ${rodadas} rodadas!`);

let escolhaUser = prompt("Escolha entre: Pedra, Papel ou Tesoura");
console.log(`Você escolheu ${escolhaUser}!`);

let escolhaPc =Math.floor(Math.random()*(4-1))+1;
console.log(escolhaPc);

if(escolhaPc == 1){escolhaPc = "Pedra";}else if(escolhaPc = 2){escolhaPc = "Papel";} else{escolhaPc = "Tesoura";}
console.log("Computador escolheu: " + escolhaPc);

//let compare = function (escolhaUser, escolhaPc) { 
  //if(escolhaUser === escolhaPc)
 // return("Empate!")
 // else if(escolhaUser === "Pedra")
  // if(escolhaPc === "Tesoura")
 // return("Pedra vence")

  //else
  //return("Papel vence")}
