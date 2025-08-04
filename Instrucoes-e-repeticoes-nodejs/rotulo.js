// Imagine que você está organizando uma festa de aniversário.
// Os blocos de código são como diferentes áreas da festa, onde diferentes atividades acontecem.
// Por exemplo, você pode ter uma área para dançar, uma área para jogos e uma área para comer.

{
    // Área para dançar
    console.log("Hora de dançar!");
    // Aqui vão as instruções para a pista de dança
}

{
    // Área para jogos
    console.log("Vamos jogar!");
    // Aqui vão as instruções para os jogos
}

{
    // Área para comer
    console.log("Hora de comer!");
    // Aqui vão as instruções para o buffet
}

// Os rótulos são como etiquetas que você coloca em diferentes atividades durante a festa, para identificá-los

danca:
for(let i = 0; i < 3; i++) {
    jogos:
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            console.log("A competição de dança foi interrompida"); // Sai da competição de dança
            break danca;
        }
        console.log("Competidor " + (i+i) + " está dançando enquanto o computador " + (j+1) + " está jogando")
    }
}