let susp = 0;
console.log("")


let ind1 = prompt("Telefonou para a vítima?");

if(ind1==="Sim"){susp=susp+1}else{susp=susp+0}

let ind2 = prompt("Esteve no local do crime?");

if(ind2==="Sim"){susp=susp+1}else{susp=susp+0}

let ind3 = prompt("Mora perto da vítima?");

if(ind3==="Sim"){susp=susp+1}else{susp=susp+0}

let ind4 = prompt("Devia a vítima?");

if(ind4==="Sim"){susp=susp+1}else{susp=susp+0}

let ind5 = prompt("Já trabalhou com a vítima?");

if(ind5==="Sim"){susp=susp+1}else{susp=susp+0}

console.log(susp);

if(susp < 2 )
{console.log("Você é Inocente!")}

else if(susp == 2)
{console.log("Você é Suspeito!")}

 else if(susp >= 3 && susp <= 4)
{console.log("Você é Cúmplice!")}

else if(susp == 5 )
{console.log("Voce é Assassino!")}
