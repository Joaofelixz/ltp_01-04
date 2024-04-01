class carro{
    constructor(marca, modelo, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
    }
}

let meuCarro = new carro("Toyota", "Corrola", "Prata");

console.log("Marca do Carro:", meuCarro.marca);
console.log("Marca do Carro", meuCarro.modelo);
console.log("Cor de Carro", meuCarro.cor);

let seuCarro = new carro("Chevrolet", "Celta", "Preto");

console.log("Marca do Carro:", meuCarro.marca);
console.log("Marca do Carro", meuCarro.modelo);
console.log("Cor de Carro", meuCarro.cor);

let nossoCarro = new carro("Honda", "civic", "Branco");

console.log("Marca do Carro:", meuCarro.marca);
console.log("Marca do Carro", meuCarro.modelo);
console.log("Cor de Carro", meuCarro.cor);