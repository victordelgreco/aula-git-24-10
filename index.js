const catalogo = require('./users.json')


//Aluno 3 (Yago) - Responsável por criar a função de listar todos os usuários inserindo mais uma informação para cada de ativo: true

catalogo.forEach((usuario) => {
    usuario["ativo"] = "true";
    if (usuario.idade > 0){
      usuario["ativo"] = "true";
    }
  });
  
  console.log(catalogo)



//Aluno 5- Responsável por criar a função de remover um usuário



/*function remover(codigoId)
{

    for(let i = 0 ; i < catalogo.length ; i++)
    {

        if(catalogo[i].id === codigoId)
        {

            return catalogo.splice(i , 1)
             
        }
    }
}*/

function adicionarUsuario(){

  var nome=prompt("insira seu nome :")
  var idade=prompt("sua idade :")
  var sexo=prompt("insira seu sexo :")
  var email=prompt("insira seu email:")
  var telefone=prompt("numero de telefone:")
 
  catalogo.push({
        "id": 10,
        "nome": nome,
        "idade": idade,
        "sexo":sexo,
        "email":email,
        "telefone": telefone
      })
  
  console.log(catalogo)
  
  
  }
