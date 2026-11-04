const prompt = require('prompt-sync')();

// Vetor que guarda todos os empréstimos (cada um é um objeto)
let emprestimos = [];

// Mostra uma lista de empréstimos (usada por listar e buscar)
function exibir(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(`${i + 1}. Aluno: ${lista[i].aluno} | Livro: ${lista[i].livro} | Data: ${lista[i].data}`);
  }
}

// Cadastra um novo empréstimo
function cadastrar() {
  console.log("\n--- Cadastrar empréstimo ---");
  let aluno = prompt("Nome do aluno: ").trim();
  let livro = prompt("Nome do livro: ").trim();
  let data = prompt("Data do empréstimo (dd/mm/aaaa): ").trim();

  // Validação: não aceita campos vazios
  if (aluno === "" || livro === "" || data === "") {
    console.log("Todos os campos são obrigatórios. Empréstimo não cadastrado.");
    return;
  }

  emprestimos.push({ aluno: aluno, livro: livro, data: data });
  console.log("Empréstimo cadastrado com sucesso!");
}

// Lista todos os empréstimos
function listar() {
  console.log("\n--- Empréstimos realizados ---");

  if (emprestimos.length === 0) {
    console.log("Nenhum empréstimo cadastrado.");
    return;
  }

  exibir(emprestimos);
  console.log(`\nTotal de empréstimos: ${emprestimos.length}`);
}

// Busca empréstimos pelo nome do aluno
function buscar() {
  console.log("\n--- Buscar por aluno ---");
  let nome = prompt("Nome do aluno: ").trim();

  let encontrados = emprestimos.filter(function (e) {
    return e.aluno.toLowerCase() === nome.toLowerCase();
  });

  if (encontrados.length === 0) {
    console.log("Nenhum empréstimo encontrado para esse aluno.");
    return;
  }

  console.log(`\nLivros emprestados para ${nome}:`);
  exibir(encontrados);
}

// Menu principal com loop
let opcao = "";

while (opcao !== "0") {
  console.log("\n===== BIBLIOTECA SABER EM AÇÃO =====");
  console.log("1 - Cadastrar empréstimo");
  console.log("2 - Listar empréstimos");
  console.log("3 - Buscar por aluno");
  console.log("0 - Sair");
  opcao = prompt("Escolha uma opção: ").trim();

  switch (opcao) {
    case "1":
      cadastrar();
      break;
    case "2":
      listar();
      break;
    case "3":
      buscar();
      break;
    case "0":
      console.log("Encerrando o programa. Até logo!");
      break;
    default:
      console.log("Opção inválida! Digite 1, 2, 3 ou 0.");
  }
}