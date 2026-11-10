const prompt = require ('prompt-sync')();

let op;
let num;
let soma = 0;

do {
   num = parseInt(prompt("Digite um número para ser calculado: "));
   soma = soma + num

   console.log("A soma do número digitado é: " + soma);

   
   op = prompt("Deseja continuar? (S/N): ");
  } while (op !== "N" && op !== "n");








