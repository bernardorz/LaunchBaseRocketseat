// const usuario = {
//     nome: "Bernardo",
//     empresa: {
//       nome: "Brasil Connecting"
//     }
//   };

//   console.log(`${usuario.nome} trabalha na  ${usuario.empresa.nome}`)


  /* EXERCICIO 2  */

  const objeto = {
    propriedade: [
      { nome: "Bernardo", lingaguem:"Javasctipt",especialidade: "Web/Mobile" },
      { nome: "Hans", lingaguem:"Python" ,especialidade: "Back-EnD" }
    ]
  };
  

const returnSkill = (users) => {
    for(let i =0; i < users.propriedade.length; i++){
        console.log(`O usuario ${objeto.propriedade[i].nome} programa em ${objeto.propriedade[i].lingaguem} voltado para ${objeto.propriedade[i].especialidade}`)
    }
}

returnSkill(objeto)