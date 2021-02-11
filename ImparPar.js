//Simples sistema de verificação de Impar ou Par por Kevin Soares

//coloque seu número aqui
exibirTipo(1);

function exibirTipo(numero)
{
    //se o número for divisivel por 2 logo ele é par
    if(numero % 2 === 0)
    {
        return console.log("Par");
    }
    else //caso contrario é impar
    {
        return console.log("Impar");
    }
}