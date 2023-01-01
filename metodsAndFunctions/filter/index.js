const cars = ['hb20', 'gol', 'celta']

// no .filter() passamos uma função (que pode ser arrow function () => {}) que é executada para cada
// elemento dentro do array e retorna um array novo conforme a lógica de filtragem.
const newCars = cars.filter((item) => {
    return item !== 'hb20'
} )

console.log(newCars)