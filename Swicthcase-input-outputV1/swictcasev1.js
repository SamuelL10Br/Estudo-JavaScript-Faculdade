const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkTrafficLight(lightcolor){
    switch(lightcolor.toLowerCase()){
        case 'verde':
            console.log("Pode atravessar a rua.");
            break;
        case 'amarelo':
            console.log("Prepare-se para parar");
            break;
        case 'vermelho':
            console.log("Pare! Não atravesse a rua.");
            break;
            default:
                console.log("Cor inválida! Por selecione uma cor que seja válida ao semáforo");
    }
}
r1.question("Olá! Digite uma cor para o semáforo(verde, amarelo ou vermelho):", function(answer){
    checkTrafficLight(answer);
    r1.close();
});