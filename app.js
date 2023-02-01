//PRIMEIRA AULA: CONVERSOR DE MOEDAS

// var valorEmDolar = 30;
// var cotacaoDoDolar = 5.32;
// var valorEmReal = valorEmDolar * cotacaoDoDolar;

// valorEmReal = valorEmReal.toFixed(2);
// alert("R$" + valorEmReal);


//Primeiro desafio: Adicionar outras moedas para converter

// var valorEmEuro = 30;
// var cotacaoDoEuro = 5.55;
// var valorEmReal = valorEmEuro * cotacaoDoEuro;

// valorEmReal = valorEmReal.toFixed(2);
// alert("R$ " + valorEmReal);

//Segundo desafio: Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra

//SEGUNDA AULA: JOGO DE ADIVINHAÇÃO

var numeroSecreto = parseInt(Math.random() * 1001);

while(chute != numeroSecreto){
var chute = prompt("Digite um numero entre 0 e 1000")

    if (chute == numeroSecreto) {
        alert("Acertou")    
    } else if(chute > numeroSecreto){
        alert("Errou... O numero secreto eh menor do que")
    } else if(chute < numeroSecreto){
        alert("Errou... O numero secreto eh maior")
    }
    
}

//Primeiro desafio: informar que o numero secreto eh maior que...

var numeroSecreto = parseInt(Math.random() * 1001);

while(chute != numeroSecreto){
var chute = prompt("Digite um numero entre 0 e 1000")

    if (chute == numeroSecreto) {
        alert("Acertou")    
    } else if(chute > numeroSecreto){
        alert("Errou... O numero secreto eh menor do que " + chute)
    } else if(chute < numeroSecreto){
        alert("Errou... O numero secreto eh maior do que " + chute)
    }
    
}


