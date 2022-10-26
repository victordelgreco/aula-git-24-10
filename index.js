//Aluno 1 (Victor)- Responsável por criar o projeto no git e dar acesso aos outros

const catalogo = require('./users.json')

//Aluno 2 (Maisa)- Responsável por criar a função de listar todos os usuários acima de 18 anos.

const listarTodosUsuariosAcimaDeDezoitoAnos = () => {
  return users.filter((id) => id.idade > 18)
}

listarTodosUsuariosAcimaDeDezoitoAnos()

//Aluno 3 (Yago) - Responsável por criar a função de listar todos os usuários inserindo mais uma informação para cada de ativo: true

catalogo.forEach((usuario) => {
    usuario["ativo"] = "true";
    if (usuario.idade > 0){
      usuario["ativo"] = "true";
    }
  });
  
  console.log(catalogo)*/

//Aluno 4 (Patrick) - Responsável por criar a função de adicionar um usuário

const adicionarUsuario = (usuario) =>  {
  const { id, nome, idade, sexo, email, telefone } = usuario;
  const novoUsuario = {
  ...usuario, ativo: true 
 }  
 catalogo.push(novoUsuario);
 return novoUsuario;
}

adicionarUsuario({ id: 7, nome: "André Feitosa", idade: 30, sexo: "M", email: "andre@gmail.com", telefone: "999999999"  })

console.log(catalogo)

//Aluno 5- Responsável por criar a função de remover um usuário

function remover(codigoId)
{

    for(let i = 0 ; i < catalogo.length ; i++)
    {

        if(catalogo[i].id === codigoId)
        {

            return catalogo.splice(i , 1)
             
        }
    }
}





