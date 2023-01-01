const cars = ['hb20', 'gol', 'celta', 'palio', 'pajero'];

// no.slice() retornamos um novo array removendo as posições desejadas a partir do número passado como parâmetro.
// podemos passar dois parâmetros: primeiro parâmetro seria a remoção no começo do array e o segundo parâmetro
// também é um número, porém negativo, indicando quantos elementos ele vai remover de trás para frente
// caso passemos somente um parâmetro negativo, o comportamento seria de deixar somente aqueles elementos
// de trás para frente, dentro do array e remover o restante.


console.log(cars.slice(1));
console.log(cars.slice(0, -1));
console.log(cars.slice(2, -2));
console.log(cars.slice(-3 ));
