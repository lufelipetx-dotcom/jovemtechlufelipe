const prompt = require('prompt-sync')();
const hoje = new Date();
//Controlar empréstimos de livros.

let empréstimos;
let nomedoaluno;
let nomedolivro;
let datadoempréstimo;

console.log("Empréstimo disponíveis: ");
console.log("50 tons de cinza, O pequeno príncipe, O bosque selvagem");
empréstimos = prompt("Digite o livro que deseja: ");
nomedoaluno = prompt("Digite o nome do aluno: ");
//datadoempréstimo = prompt("Digite a data do empréstimo: ");
nomedolivro = prompt("Digite o nome do livro: ");


if (empréstimos === "50 tons de cinza" || empréstimos === "O pequeno príncipe" || empréstimos === "O bosque selvagem") {
    console.log(empréstimos);
    console.log(nomedoaluno);
    console.log(hoje.toLocaleDateString("pt-BR")); // 09/11/2026
    console.log(nomedolivro);
    console.log("Você realizou o empréstimo do livro " + nomedolivro + " para o aluno " + nomedoaluno + " na data " + datadoempréstimo + "!");
}
