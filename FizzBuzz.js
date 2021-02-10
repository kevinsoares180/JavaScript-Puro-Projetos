//Sistema de verificações de divisões por Kevin Soares
//Se entrada do fizzBuzz() for divisivel por 3, retorna apenas 'Fizz'
//Se entrada do fizzBuzz() for divisivel por 5, retorna apenas 'Buzz'
//Se entrada do fizzBuzz() for divisivel por 3 e 5, retorna 'FizzBuzz'
//Se não for um numero retorna um aviso
//caso não entre em nenhuma das verificações retorna a entrada padrão sem alterações

//Coloque um número aqui
const resultado = fizzBuzz(3);

console.log(resultado);

function fizzBuzz(entrada)
{
    //Divisivel por 3 e 5
    if(entrada % 3 === 0 && entrada % 5 === 0)
    {
        return "FizzBuzz";
    }
    //Divisivel por 3
    if(entrada % 3 === 0)
    {
        return "Fizz";
    }
     //Divisivel por 5
    if(entrada % 5 === 0)
    {
        return "Buzz";
    }
    //Tipo de entrada NÃO é um número
    if(typeof entrada !== number)
    {
        return "Não é um numero";
    }
    //entrada padrão sem alterações
    return entrada;
}