var inverterArray = /** @class */ (function () {
    function inverterArray() {
        this.itens = [];
    }
    inverterArray.prototype.adicionarItem = function (item) {
        this.itens.push(item);
    };
    inverterArray.prototype.obterItens = function () {
        return this.itens.reverse();
    };
    return inverterArray;
}());
var arrayNumeros = new inverterArray();
arrayNumeros.adicionarItem(1);
arrayNumeros.adicionarItem(12);
arrayNumeros.adicionarItem(7);
arrayNumeros.adicionarItem(3);
console.log(arrayNumeros.obterItens());
var arrayString = new inverterArray();
arrayString.adicionarItem("asd");
arrayString.adicionarItem("fff");
arrayString.adicionarItem("qwe");
arrayString.adicionarItem("dsa");
console.log(arrayString.obterItens());
