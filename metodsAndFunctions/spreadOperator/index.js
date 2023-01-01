let cars = ['hb20', 'gol', 'celta'];
const cars1 = ['hb20', 'gol', 'celta'];

// podemos usar spread operator em variáveis declaradas com let para atualizar o array inicial
// ou, quando declaradas com const, devemos instanciar em uma nova variável, retornando um novo array.
cars = [...cars, 'polo']
const newCars1 = [...cars1, 'pajero']

console.log(cars, newCars1);


