//while = enquanto

//Nan = not a Number ( não é um número)

let precoProduto = parseFloat(prompt('Qual o preço do produto?'))

while (isNaN(precoProduto) || precoProduto <= 0 == true) {
    alert('O preço digitado é invalido. Por favor , informe o preço apenas com números')
    precoProduto = parseFloat(prompt('Qual o preço do produto?'))
}

const mensagem= 
`
Informe a forma de Pagamento:
Digite 1 para pagamento em dinheiro 
Digite 2 para pagamento em cheque
Digite 3 para pagamento em cartão
`
const metodoDePagamento= prompt(mensagem)

console.log (precoProduto)
console.log (metodoDePagamento)

// se o valor da constante 'metodoDePagamento' for 1 ou 2, significa que a pessoa receberá 10 porcento de desconto //

if (metodoDePagamento == 1 || metodoDePagamento == 2) {
    const precofinal= precoProduto * 0.9
    alert(`O preço final do pagamento é ${precofinal} reais`)
}
else if (metodoDePagamento == 3) {
    const precofinal= precoProduto * 2
    alert(`O preço final do pagamento será ${precofinal} reais`)
}