//Operador E lógico (&&)
const a = true;
const b = false;
const resultadoE1 = a && b;
const resultadoE2 = a && true;
console.log(`true && false: ${resultadoE1}`);
console.log(`true && true: ${resultadoE2}`);

// Operador OU lógico (||)
const resultadoOU1 = a || b; // true
const resultadoOU2 = a || false;
console.log(`true || false: ${resultadoOU1}`);
console.log(`false || false: ${resultadoOU2}`);

// Combinações de operadores lógicos
const resultadoComb1 = (a || b) && !b;
const resultadoComb2 = (a && b) || a;
console.log(`(true || false) && !false:${resultadoComb1}`);
console.log(`!(true && false) || true: ${resultadoComb2}`);
