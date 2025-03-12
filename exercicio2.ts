interface Multiplicacao {
    (a: number, b: number): number;
}
const multiplicar: Multiplicacao = (x, y) => x * y;

console.log(multiplicar(7, 3));
console.log(multiplicar(5, -2));
console.log(multiplicar(-3, -4));
console.log(multiplicar(10, 0));