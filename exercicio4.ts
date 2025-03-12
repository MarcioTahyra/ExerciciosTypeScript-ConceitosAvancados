interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
  }
  
  interface Usuario {
    nome: string;
    email: string;
  }
  
  class UsuarioRepositorio implements Repositorio<Usuario> {
    private usuarios: Usuario[] = [];
  
    salvar(dado: Usuario): void {
      this.usuarios.push(dado);
    }
  
    obterTodos(): Usuario[] {
      return this.usuarios;
    }
  }
  
  const repo = new UsuarioRepositorio();
  repo.salvar({ nome: "Marcio Tahyra", email: "marcio@email.com" });
  repo.salvar({ nome: "João João", email: "joao@email.com" });
  
  console.log(repo.obterTodos());