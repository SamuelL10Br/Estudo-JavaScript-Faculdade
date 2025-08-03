// Exemplo de uso de var, let e const em JavaScript

const externo = "Olá, eu sou uma constante global!";

// Declaração de uma variável usando var
function exemploVar() {
    if (true) {
        var mensagem = "Olá, Faculdade Descomplica! Eu sou uma var...";
    }
    console.log(mensagem);
}

//Chamando a função exemploVar
exemploVar();

//Exemplo de erro e correção
let mensagem = "Olá, Descomplica! Let externo!";
console.log(mensagem);

// Declaração de uma variável usando let
function exemploLet() {
    if(true) {
        let mensagem = "Olá, Faculdade Descomplica! Eu sou uma let...";
        console.log(mensagem);
    }
}
exemploLet();

// Declaração de uma constante usando const
function exemploConstante() {
    const mensagem = "Olá, Faculdade Descomplica! Eu sou uma constante...";
    console.log(mensagem);
}
exemploConstante();

// Exemplo externo de const
console.log(externo);

//Atividade
let x = 5;
if(x > 3){
    console.log("Maior que 3");
}
