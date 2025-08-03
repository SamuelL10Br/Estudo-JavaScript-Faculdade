
// Função regular com dois parâmetros
function soma(a, b) {
    return a + b;
}

// Chamando a função soma e armazenando o resultado em uma variável
let resultado = soma(13, 29);

// Exibindo o resultado da função soma
console.log("O resultado da soma é: " + resultado);
console.log("O resultado da soma é: " + soma(13, 29));

// Função regular com um parâmetro
function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}

// Chamando a função saudacao e passando um argumento
saudacao("Ana Teixeira");

// Função regular sem parâmetros e sem retorno
function mensagem() {
    console.log("Esta é uma mensagem de boas vindas!");
}

// Chamando a função mensagem
saudacao("Ana");
mensagem();

// Função anônima atribuída a uma variável
let somarParametros = function(parametro1, parametro2) {
    console.log("Parametro 1: " + parametro1);
    console.log("Parametro 2: " + parametro2);
    let resultado = parametro1 + parametro2;
    console.log("Resultado: " + resultado);
    return resultado;
};

// Chamada da função anônima
let resultadoAnonima = somarParametros(5, 10);
console.log("Resultado da chamada da função somarParametros: " + resultadoAnonima);

// Função que recebe outra função como argumento
function executarFuncao(funcao, valor1, valor2) {
    console.log("\nExecutando a função passada como argumento:");
    return funcao(valor1, valor2);
}

let resultadoExecucao = executarFuncao(somarParametros, 7, 3);
console.log("Resultado da execução da função passada como argumento: " + resultadoExecucao);

// Função anônima autoexecutável
let resultadoImediato = (function(a, b) {
    console.log("\nFunção de chamada imediata:");
    return a * b;
})(4, 6);

console.log("Resultado da função anônima chamada imediatamente: " + resultadoImediato);

// Arrow function básica
let somar = (a, b) => {
    return a + b;
};

console.log(somar(5, 3));

// Arrow function com único parâmetro
let dobrar = n => n * 2;
console.log(dobrar(5));

// Arrow function como callback com map
let numeros = [1, 2, 3, 4, 5];
let numerosDobrados = numeros.map(n => n * 2);
console.log(numerosDobrados);

// Arrow function com corpo mais complexo
let saudacaoArrow = (nome, idade) => {
    let mensagem = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
    return mensagem;
};

console.log(saudacaoArrow("Ana", 25));
