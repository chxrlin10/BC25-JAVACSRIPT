/**
 * Criem uma função que gera o resultado de uma equação do segundo grau
 * 
 * ax² + bx + c = 0
 * 
 * delta = b² - 4ac
 * b = -b +- raíz de delta / 2a
 */

function equacaoSegundoGrau(a, b, c){
    const delta = b ** 2 - 4 * a * c ;

    const raizDelta = Math.sqrt(delta)

    const x1 =  (b + raizDelta / 2 * a)
    const x2 =  (b - raizDelta / 2 * a)


    return [x1, x2]
}
console.log (equacaoSegundoGrau (1, -1, -12))



