const user = {
  name: "Bernardo",
  transactions: [/*{ type: 'credito', value: 50 } */],
  balance: 0
};


const createTransaction = (transaction) => {

  user.transactions.push(transaction)

  if (transaction.type == "credit") {
    user.balance += transaction.value
  } else {
    user.balance -= transaction.value
  }

}

createTransaction({ type: 'credito', value: 50 })
createTransaction({ type: 'credito', value: 120 })
createTransaction({ type: 'debito', value: 80 })
createTransaction({ type: 'debito', value: 30 })


const getHigherTransactionByType = (type) => {

  let HigherTransaction
  let higherValue = 0;

  //o higherValue recebe 0
  //no for tem um if que checa qual parametro
  //transaction.value > 0, na primeira vez é true
  //ele atribui 50 e depois o 120
  //porque o higher value passa a ser 50 e nao zero
  //assim por diente
  //sempre que o value anterior for menor que o atual
  //o atual vai substituir o anterior na variavel highervalue
  //no final do if eu atribuo o HigherTransaction = transaction
  //para ele retornar o objeto com o maior value de cada type


  for (let transaction of user.transactions) {
    if (transaction.type == type && transaction.value > higherValue) {
      higherValue = transaction.value
      HigherTransaction = transaction
    }
  }

  return HigherTransaction
}

console.log(getHigherTransactionByType("credito"))
console.log(getHigherTransactionByType("debito"))

//getAverageTransactionValue retorna o valor médio das transações de um usuário independente do seu tipo
// * Média = soma de todos os valores dividido por número de transações
const getAverageTransactionValue = () => {
    let media = 0

  for(let transaction of user.transactions) {
    media+= transaction.value
  }
  return media / user.transactions.length;
}

console.log(getAverageTransactionValue())

//getTransactionsCount //retorna o número de transações de cada tipo credit/debit, o retorno da função deve ser um objeto e seguir exatamente como o modelo apresentado abaixo:
//{ credit: 5, debit: 3 }

const getTransactionsCount = () => {
  let count = {
    credit : 0,
    debit : 0
  }
  
  for(let transaction of user.transactions){
    if(transaction.type === "credito"){
      count.credit+=1
    } else {
      count.debit+=1
    }
  }
return count
}
console.log(getTransactionsCount())

 