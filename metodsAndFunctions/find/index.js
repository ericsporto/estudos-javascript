const cars = ['hb20', 'gol', 'celta']

// no .find() passamos uma função (que pode ser arrow function () => {}) que é executada para cada
// elemento dentro do array e retorna o resultado no primeiro elemento que satisfaz a busca .
const newCars = cars.find((item) => {
    return item !== 'hb20'
} )

console.log(newCars)