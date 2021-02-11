//Sistema de Radar por Kevin Soares

//A cada 5 kmh acima do limite de 70 kmh o condutor ganha 1 ponto na carteira
//Limite de 12 pontos na carteira


//Pontos na Carteira
let pontos = 0;

//Captar Velocidade do Veículo
verificarVelocidade(300);

function verificarVelocidade(velocidade){

        if(velocidade > 70)
        {
            //Elimina a velocidade limite e deixa só os kmh que o condutor ultrapassou
            let resto;
            resto = velocidade -70;
            
            //Verifica e da um ponto na carteira a cada 5 kmh fora do limite 
            while(resto >= 5)
            {
                resto -= 5;
                pontos++;
                console.log("Velocidade Limite Ultrapassada, Pontos na Carteira: "+ pontos);

                //Caso passe de 12 pontos na carteira suspender CNH do motorista
                if(pontos > 12)
                {
                    return console.log("Carteira Suspensa");
                }
            }
        }
        else
        {
            //Tudo Ok
            console.log("Velocidade Permitida");
        }

}
