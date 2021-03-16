const usuarios = [
  { nome: "Bernardo", tecnologias: ["HTML", "JavaScript", "Pascal"] },
  { nome: "Hans", tecnologias: ["JavaScript", "css"] },
  { nome: "Wagner", tecnologias: ["JavaScript", "CSS"] }
];



const checkCss = (users) => {
  users.forEach(user => {

    const newArray = user.tecnologias.map(tecnologia => tecnologia.toLowerCase())
    user.tecnologias = newArray
    user.tecnologias.includes("css") ? console.log(`${user.nome} trabalha com css`) : console.log(`${user.nome} não trabalha com css`)

  })
}


checkCss(usuarios)

/*exc 2*/

const clientes = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

const calculaSaldo = (receitas, despesas) => {
  const somaReceita = somaNumeros(receitas)
  const somaDespesas = somaNumeros(despesas)

  return somaReceita - somaDespesas
}

function somaNumeros(numeros) {
  let soma = 0;
  for (let numero of numeros) {
    soma += numero
  }
  return soma
}


for (let usuario of clientes) {
  const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

  if (saldo > 0) {
    console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
  } else {
    console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
  }
}





