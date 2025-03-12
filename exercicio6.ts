type Estudante = {
    nome: string;
    curso: string;
};
type Trabalhador = {
    empresa: string;
    cargo: string;
};

type EstudanteTrabalhador = Estudante & Trabalhador;

const estTrab: EstudanteTrabalhador = {
    nome: "Marcio",
    curso: "Engenharia de Software",
    cargo: "Estagiario",
    empresa: "FIAP"
};

console.log("Nome:", estTrab.nome);
console.log("Curso:", estTrab.curso);
console.log("Empresa:", estTrab.empresa);
console.log("Cargo:", estTrab.cargo);