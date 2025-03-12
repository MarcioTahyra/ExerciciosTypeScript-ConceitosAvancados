var UsuarioRepositorio = /** @class */ (function () {
    function UsuarioRepositorio() {
        this.usuarios = [];
    }
    UsuarioRepositorio.prototype.salvar = function (dado) {
        this.usuarios.push(dado);
    };
    UsuarioRepositorio.prototype.obterTodos = function () {
        return this.usuarios;
    };
    return UsuarioRepositorio;
}());
var repo = new UsuarioRepositorio();
repo.salvar({ nome: "Marcio Tahyra", email: "marcio@email.com" });
repo.salvar({ nome: "João João", email: "joao@email.com" });
console.log(repo.obterTodos());
