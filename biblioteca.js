const prompt = require('prompt-sync')();

let cadastro = []
let respostadocadastro;
//let livroemprestado = []



//menu principal
    console.log("=== BIBLIOTECA JOVEM TECH ===");
    console.log("");
    console.log("1 - Cadastrar Empréstimo");
    console.log("2 - Listar Empréstimo");
    console.log("3 - Buscar por Aluno");
    console.log("0 - Sair");
    let opcao = prompt("Escolha uma opção: ");

    if (opcao === "1") {do {
console.log('Cadastro:')
console.log('')
cadastro.push(prompt('Qual o seu nome? '))
cadastro.push(prompt('Qual livro você deseja? '))
cadastro.push(prompt('Data do emprestimo: '))
console.log('')
respostadocadastro = (prompt('Deseja realizar um novo cadastro? S/N: '));
} while (respostadocadastro !== 'N');}
    else if (opcao === "2") {console.log('Pesquise o seu emprestimo ')
console.log('')
let nome = (prompt('Qual o seu nome? '))
for (let i = 0; i < cadastro.length; i += 3) {
if (nome === `${cadastro[i]}`) {

//Impressão do cadastro do cliente:
console.log('');
console.log('--- Cadastro do cliente ---')
console.log(`Nome: ${cadastro[i]}`)
console.log(`Livro do emprestimo: ${cadastro[i+1]}`)
console.log(`Data do emprestimo: ${cadastro[i+2]}`)
}
}}
    else if (opcao === "3") {}
    else if (opcao === "0") {}








//cadastro do cliente:
do {
console.log('Cadastro:')
console.log('')
cadastro.push(prompt('Qual o seu nome? '))
cadastro.push(prompt('Qual livro você deseja? '))
cadastro.push(prompt('Data do emprestimo: '))
console.log('')
respostadocadastro = (prompt('Deseja realizar um novo cadastro? S/N: '));
} while (respostadocadastro !== 'N');


console.log('Pesquise o seu emprestimo ')
console.log('')
let nome = (prompt('Qual o seu nome? '))
for (let i = 0; i < cadastro.length; i += 3) {
if (nome === `${cadastro[i]}`) {

//Impressão do cadastro do cliente:
console.log('');
console.log('--- Cadastro do cliente ---')
console.log(`Nome: ${cadastro[i]}`)
console.log(`Livro do emprestimo: ${cadastro[i+1]}`)
console.log(`Data do emprestimo: ${cadastro[i+2]}`)
}
}