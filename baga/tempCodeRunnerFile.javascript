const prompt = require('prompt-sync')();

class Corrida {
    constructor(trajeto, formadepagamento, statusdacorrida, tipodeveiculo) {
        this.trajeto = trajeto; // propriedade
        this.formadepagamento = formadepagamento; // propriedade
        this.statusdacorrida = statusdacorrida; // propriedade
        this.tipodeveiculo = tipodeveiculo; // propriedade
    }

    aceitarMotorista() {this.statusdacorrida = "Corrida Aceita";}

    alterarPagamento(novaForma) {this.formadepagamento = novaForma;}

    cancelarCorrida() {this.statusdacorrida = "Corrida Cancelada"}

    escolherVeiculoMaisRapido() {this.tipodeveiculo = "moto";}

    }

    const corrida1 = new Corrida("Centro até o aeroporto", "Pix", "Aguardando Motorista", "Carro");
    const corrida2 = new Corrida("Rodoviaria até a praia", "Cartão", "Aguardando Motorista", "Moto");

    corrida1.aceitarMotorista();
    console.log(`Corrida 1 -> Status: ${corrida1.statusdacorrida}`);

    corrida2.cancelarCorrida();
    console.log(`Corrida 2 -> Status: ${corrida2.statusdacorrida}`);

    corrida1.alterarPagamento("Cartão");
    console.log(`Corrida 1 -> Pagamento: ${corrida1.formadepagamento}`);

    corrida2.escolherVeiculoMaisRapido();
    console.log(`Corrida 2 -> Veículo: ${corrida2.tipodeveiculo}`);
