const catalogo = require('./users.json')


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


