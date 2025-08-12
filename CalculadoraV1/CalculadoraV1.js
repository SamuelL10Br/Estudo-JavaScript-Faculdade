// calculadora.js — CLI de calculadora em Node.js

// Usaremos a API de promessas do readline (Node 17+)
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

/** Normaliza números digitados com vírgula ou espaços, e valida */
function lerNumeroBruto(str) {
  if (typeof str !== "string") return NaN;
  // troca vírgula por ponto e remove espaços
  const normalizado = str.trim().replace(",", ".");
  return Number(normalizado);
}

/** Pergunta repetidamente até obter um número válido */
async function perguntarNumero(rl, mensagem) {
  while (true) {
    const resposta = await rl.question(mensagem);
    const n = lerNumeroBruto(resposta);
    if (!Number.isNaN(n) && Number.isFinite(n)) return n;
    console.log("Valor inválido. Tente novamente (ex.: 3.14 ou 3,14).");
  }
}

/** Pergunta uma opção dentro de um conjunto permitido */
async function perguntarOpcao(rl, mensagem, opcoesValidas) {
  const valido = new Set(opcoesValidas.map((s) => s.toLowerCase()));
  while (true) {
    const r = (await rl.question(mensagem)).trim().toLowerCase();
    if (valido.has(r)) return r;
    console.log(`Opção inválida. Escolha entre: ${[...valido].join(", ")}`);
  }
}

/** Executa a operação escolhida, com checagens básicas */
function calcular(operacao, a, b) {
  switch (operacao) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/":
      if (b === 0) throw new Error("Divisão por zero não é permitida.");
      return a / b;
    case "%":
      if (!Number.isInteger(a) || !Number.isInteger(b)) {
        console.warn("Aviso: usando resto (%) com não-inteiros pode não ser o que você espera.");
      }
      if (b === 0) throw new Error("Resto com divisor zero não é permitido.");
      return a % b;
    case "^": // potenciação
      return a ** b;
    case "sqrt":
      if (a < 0) throw new Error("√ de número negativo não é real.");
      return Math.sqrt(a);
    default:
      throw new Error("Operação desconhecida.");
  }
}

async function main() {
  const rl = readline.createInterface({ input, output });

  console.log("=== Calculadora no Console ===");
  console.log("Operações: +  -  *  /  %  ^  sqrt   (digite 'sair' a qualquer momento)\n");

  let continuar = true;
  let ultimoResultado = null; // permite reutilizar com 'ans'

  while (continuar) {
    // Escolher operação
    const op = await perguntarOpcao(
      rl,
      "Escolha a operação (+, -, *, /, %, ^, sqrt): ",
      ["+", "-", "*", "/", "%", "^", "sqrt"]
    );

    // Definir quantos operandos pedir
    const aridade = op === "sqrt" ? 1 : 2;

    // Entrada do primeiro operando (permite 'ans' se já houver)
    let a;
    if (ultimoResultado !== null) {
      const r = (await rl.question(`Primeiro número (ou 'ans' = ${ultimoResultado}): `)).trim();
      if (r.toLowerCase() === "ans") {
        a = ultimoResultado;
      } else {
        a = lerNumeroBruto(r);
      }
      if (Number.isNaN(a) || !Number.isFinite(a)) {
        a = await perguntarNumero(rl, "Valor inválido. Digite o primeiro número: ");
      }
    } else {
      a = await perguntarNumero(rl, "Digite o primeiro número: ");
    }

    // Entrada do segundo operando (se necessário)
    let b;
    if (aridade === 2) {
      if (ultimoResultado !== null) {
        const r2 = (await rl.question(`Segundo número (ou 'ans' = ${ultimoResultado}): `)).trim();
        if (r2.toLowerCase() === "ans") {
          b = ultimoResultado;
        } else {
          b = lerNumeroBruto(r2);
        }
        if (Number.isNaN(b) || !Number.isFinite(b)) {
          b = await perguntarNumero(rl, "Valor inválido. Digite o segundo número: ");
        }
      } else {
        b = await perguntarNumero(rl, "Digite o segundo número: ");
      }
    }

    // Calcular com tratamento de erros
    try {
      const resultado = aridade === 1 ? calcular(op, a) : calcular(op, a, b);
      console.log(`\nResultado: ${resultado}\n`);
      ultimoResultado = resultado;
    } catch (err) {
      console.error(`Erro: ${err.message}\n`);
    }

    // Perguntar se continua
    const prox = await perguntarOpcao(rl, "Quer fazer outra conta? (s/n): ", ["s", "n"]);
    continuar = prox === "s";
    console.log();
  }

  console.log("Até mais! 👋");
  await rl.close();
}

// Permite capturar Ctrl+C com uma mensagem amigável
process.on("SIGINT", () => {
  console.log("\nEncerrando. Até mais! 👋");
  process.exit(0);
});

// Executa
main().catch((e) => {
  console.error("Falha inesperada:", e);
  process.exit(1);
});
