const returnAposent = (nome,sexo,idade,contribuicao) => {
    let regra = idade + contribuicao
    let timeContribuicao = false

    if(sexo === "masculino"){
       timeContribuicao = regra >= 95 && contribuicao >= 35

       timeContribuicao ? console.log(`Parabens ${nome} o senhor ja pode se aposentar`) : console.log(`Infelizmente  ${nome} não pode se aposentar`)
    } else if(sexo === "feminino") {
      timeContribuicao = regra >=85 && contribuicao >=30

      timeContribuicao ? console.log(`Parabens  ${nome} a senhora ja pode se aposentar`) : console.log(`Infelizmente ${nome} não pode se aposentar`)
    } else {
        console.log(new Error(`Verificar o argumento sexo => ${sexo}`))
    }
}


returnAposent("beranrdo","masculino",70,34)