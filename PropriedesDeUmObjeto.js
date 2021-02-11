//Sistema de exibir somente propriedades do tipo 'string' de um objeto


//objeto filme e suas propriedades
const filme = 
{
    titulo: "De volta ao jogo",
    duracao: 2064,
    ano: 2018,
    linguagem: "Português",
    elenco: "John Wick"
}

exibirPropriedades(filme);
function exibirPropriedades(obj)
{
    //varrer todos as propridades do objeto
    for (var prop in obj) 
    {
        //filtrar somente as propridades do tipo string
        if(typeof obj[prop] === "string") 
        {
            //mostrar no console os resultados
            console.log(obj[prop]);
        }
    }
}