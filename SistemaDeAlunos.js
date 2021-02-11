//Sistema de Alunos por Kevin Soares


//Cria um objeto com as propridades de um aluno
function Aluno (nome, notas, media) 
{
    this.nome = nome;
    this.notas = notas;
    this.media = media;
}

//cria um aluno e define suas propridades de acordo
var roberto = new Aluno("Roberto", [10, 7, 8.6], 0);
var vanessa = new Aluno("Vanessa", [4.2, 6, 9], 0);
var marcelo = new Aluno("Marcelo", [0, 7, 6], 0);

//passa informações do aluno e verifica se o mesmo passou de ano
mediaDoAluno(roberto);
mediaDoAluno(vanessa);
mediaDoAluno(marcelo);


//verficação se o aluno passou de ano, Média requirida: 6
function passouDeAno(aluno)
{
    if(aluno.media > 6)
    {
        console.log(aluno.nome + " passou de ano com a média de " + aluno.media);
    }
    else
    {
        console.log(aluno.nome + " infelizmente NÃO passou de ano com somente a média de " + aluno.media);
    }
}


//pega o array de notas e divide pelo numero de elementos passando assim a média do aluno
function mediaDoAluno(aluno)
{
    let media = somarNotas(aluno.notas) / aluno.notas.length;
    aluno.media = media.toFixed(1);
    passouDeAno(aluno);
}

//soma todos os elementos do array de notas
function somarNotas(notas) 
{
    let soma = 0
    for(let i in notas) {
      soma += notas[i]
    }
    return soma
}
