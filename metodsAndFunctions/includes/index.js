const cars = ['hb20', 'gol', 'celta'];

// no .includes() passamos o que queremos verificar dentro do array e o retorno é um boolean.
// podemos passar, como segundo parâmetro, o index pelo qual a varificação começaria.

console.log('Existe gol a partir do index 2:',cars.includes('gol', 2));

// também podemos colocar a verificação em uma variável e utilizar com uma lógica posterior.

const handleVerify = () => {
  const verify = cars.includes('gol');
  if (verify) {
    return 'Verificado!';
  }
  return 'Não encontrado!';
};

console.log(handleVerify());
