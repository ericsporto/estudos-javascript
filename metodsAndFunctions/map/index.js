const cars = ['hb20', 'gol', 'celta', 'palio', 'pajero'];

// no.map() percorremos todo o array executando a função que passamos como parâmetro para cada um dos elementos,
// retornando um novo array. Como estamos retornando um novo array, podemos transformar, adicionar elemento, retornar
// tags html, listas, etc

const newCars = cars.map((item, index) => {
    return item + ' ' + index
})
console.log(newCars);

const newCars1 = cars.map((item, index) => {
    return 'Item transformado:' + ' ' + item + ', ' + 'index:' + ' ' + index
})
console.log(newCars1);