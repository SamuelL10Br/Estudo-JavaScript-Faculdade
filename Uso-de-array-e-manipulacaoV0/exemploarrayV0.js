let array1 = [];
let array2 = new Array();
let array3 = ["maça", "banana", "uva"];

console.log('Array 1', array1);
console.log('Array 2', array2);
console.log('Array 3', array3);

console.log('/nArray após adicionar elementos', array1);
array1.push('el1');
array2.push('el2');
array3.push('el3');

console.log('/nNovo Array 1', array1);
console.log('Novo Array 2', array2);
console.log('Novo Array 3', array3);

let primeiroElemento = array1[0];
let erro = array1[1];
let segundoElemento = array2[0];
let terceiroElemento = array3[3];

console.log('/nPrimeiro elemento', primeiroElemento);
console.log('Erro:', erro);
console.log('Segundo elemento:', segundoElemento);
console.log('Terceiro Lemento:', terceiroElemento);

array1[0] = "novo elemento"
console.log('/nArray após modificar elementos:', array1);