const prompt = require('prompt-sync')();

// três vetores, cada índice = um pet, dono e serviço
let nomesPets = [];
let nomesDonos = [];
let servicos = [];

let opcao = "";

// Laço repete até que o usuário digite "4"
while (opcao !== "4") {
  console.log(`\n=== PET SHOP AMIGO FIEL ===

1 - Cadastrar pet
2 - Listar todos os pets
3 - Buscar por nome do dono
4 - Sair`);

  opcao = prompt(`\nDigite o número da opção desejada: `);

  // 1. CADASTRAR
  if (opcao === "1") {
    console.log("");
    let pet = prompt(`Nome do pet: `);
    let dono = prompt(`Nome do dono: `);
    let servico = prompt(`Serviço agendado: `);

    nomesPets.push(pet);
    nomesDonos.push(dono);
    servicos.push(servico);

    console.log(`\nPet ${pet} cadastrado com sucesso!`);
  }

  // 2. LISTAR TODOS
  else if (opcao === "2") {
    if (nomesPets.length === 0) {
      console.log(`\nNenhum pet cadastrado!`);
    } else {
      console.log(`\n--- LISTA DE PETS ---`);

      for (let i = 0; i < nomesPets.length; i++) {
        console.log(`Pet: ${nomesPets[i]} | Dono: ${nomesDonos[i]} | Serviço: ${servicos[i]}`);
      }
    }
  }

  // 3. BUSCAR POR DONO
  else if (opcao === "3") {
    if (nomesPets.length === 0) {
      console.log(`\nAinda não há pets para buscar.`);
    } else {
      let busca = prompt(`\nDigite o nome do dono que quer procurar: `);
      let encontrou = false;

      console.log(`\n--- RESULTADOS PARA "${busca}" ---`);

      for (let i = 0; i < nomesDonos.length; i++) {
        if (nomesDonos[i].toLowerCase() === busca.toLowerCase()) {
          console.log(`Pet: ${nomesPets[i]} | Dono: ${nomesDonos[i]} | Serviço: ${servicos[i]}`);
          encontrou = true;
        }
      }

      if (encontrou === false) {
        console.log(`Nenhum cadastro encontrado com o dono: ${busca}`);
      }
    }
  }

  // 4. SAIR
  else if (opcao === "4") {
    console.log(`\nSaindo do sistema!`);
  }

  // OPÇÃO INVÁLIDA
  else {
    console.log(`\nOpção inválida! Escolha de 1 a 4.`);
  }
}
