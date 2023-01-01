const cars = ['hb20', 'gol', 'celta', 'palio', 'pajero'];

// no.reverse() retornamos um novo array com a ordem invertida. Para funcionar, devemos desestruturar o array
// inicial com spread operator e aplicar o reverse.

const newCars = [...cars].reverse()
console.log(newCars);