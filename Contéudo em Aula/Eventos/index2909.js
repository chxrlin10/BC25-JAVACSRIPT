/* Criando uma função responsávelpara mostrar o alerta na tela*/

/* document representa o HTML no javascript */

/* a propriedade classlist retorna com uma array todas as classes que um elemento possui */
function mostraAlerta() {
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.add('mostrar')
}

/* classlist.remove para remova uma classe de um elemento html*/

function fechaAlerta() {
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.remove('mostrar')
}

const btnMostrar = document.getElementById('mostrar')
const btnFechar = document.getElementById('fechar')

/* addEventListener é um metodo que te permite ouvir
eventos do HTML pelo JS */

 /* se precisar passar uma função como parametro para outra 
 eu passo a referencia dela (sem o parenteses)*/

btnMostrar.addEventListener('click' , mostraAlerta) 

btnFechar.addEventListener('click' , fechaAlerta )