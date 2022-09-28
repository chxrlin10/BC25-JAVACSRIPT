/**
 * Funçoes são blocos de construçao fundamentais em javascript.Uma função e um procedimento de Javascript
* -um conjunto de instruções que executa uma tarefa ou calcula um valor. para usar uma função,você deve
* defini-la em algum lugar no escopo do qual você quiser chamá-la */


/* parâmetros são os valores que passamos para as funções , para que elas
utilizem esses valores dentro dela 
Os paramentros podem ser localizados dentro dos parentes apos o nome da funçao
*/

function cumprimentar(mensagem, repetir) {
    for (let i=1; i <= repetir; i++) {
    alert(mensagem.toUpperCase())
    }
}  

/* ao colocar o parenteses em frente ao nome da função , ele entende que 
é pra executar a função */

/* pode-se repetir a função quantas vezes quiser q ao carregar ira aparecer diversas
vezes como no exemplo dado ira aparecer no alert */

 /* cumprimentar('eu sou lindo' , 3) */

function soma(num, num2){
    // return serve para enviar o resultado da execução daquela função
    let result = num + num2
    alert(result)
    return result
}

function maiorValor(a, b) {
    if (a > b) {
        return a
    }   else {
        return b
    }
}

let resultado = soma (5, 9)
console.log (`O valor da variavel resultado é ${resultado}`)

const num1 = parseInt(prompt('Informe o primeiro número'))
const num2 = parseInt(prompt('informe o segundo número'))
alert(`O maior número entre esse é ${maiorValor(num1, num2)}`)