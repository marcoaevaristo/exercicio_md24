
class Veiculo {
    constructor(marca, modelo, ano, precoDiaria) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.precoDiaria = precoDiaria;
    }

    informacoes() {
        return `${this.marca} ${this.modelo} - Ano ${this.ano}`;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, precoDiaria, numPortas) {
        super(marca, modelo, ano, precoDiaria);
        this.numPortas = numPortas;
    }

    informacoes() {
        return super.informacoes() + `, ${this.numPortas} portas`;
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, precoDiaria, cilindradas) {
        super(marca, modelo, ano, precoDiaria);
        this.cilindradas = cilindradas;
    }

    informacoes() {
        return super.informacoes() + `, ${this.cilindradas} cilindradas`;
    }
}

// Instâncias de objetos
const carro1 = new Carro("Bmw", "X6", 2023, 300, 5);
const moto1 = new Moto("Ybr", "Xj6", 2021, 100, 600);
const carro2 = new Carro("Mercedez", "Qba", 2019, 250, 5);

// Teste dos métodos
console.log(carro1.informacoes()); // Bmw-X6-2023,300
console.log(moto1.informacoes()); // Ybr- Xj6 - 2021, 100-600 cilindradas
console.log(carro2.informacoes()); // Mercedez - Qba-2019-250-5