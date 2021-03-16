
const nome = "Bernardo";
const peso = 89;
const altura = 1.78;

let imc = peso / (altura * altura)
imc = imc.toFixed(2)

if(imc >= 30){
    console.log(`${nome} você está acima do peso`)
} else {
    console.log(`${nome} você não está acima do peso`)
}

//Aposentadoria


