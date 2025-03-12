interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}
const meuCarro: Carro = {
    marca: "Volkswagen",
    modelo: "Voyage",
    ano: 1991
};

console.log("Marca:", meuCarro.marca);
console.log("Modelo:", meuCarro.modelo);
console.log("Ano:", meuCarro.ano);
console.log("Motor:", meuCarro.motor ?? "Não especificado");