class inverterArray<T> {
    private itens: T[] = [];
    adicionarItem(item: T): void {
        this.itens.push(item);
    }
    obterItens(): T[] {
        return this.itens.reverse();
    }
}

const arrayNumeros = new inverterArray<number>();
arrayNumeros.adicionarItem(1);
arrayNumeros.adicionarItem(12);
arrayNumeros.adicionarItem(7);
arrayNumeros.adicionarItem(3);
console.log(arrayNumeros.obterItens());


const arrayString = new inverterArray<string>();
arrayString.adicionarItem("asd");
arrayString.adicionarItem("fff");
arrayString.adicionarItem("qwe");
arrayString.adicionarItem("dsa");
console.log(arrayString.obterItens());
