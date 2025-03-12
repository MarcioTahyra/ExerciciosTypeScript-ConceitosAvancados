function processarResposta(resposta) {
    if (typeof resposta === "string") {
        console.log("Resultado:", resposta);
    }
    else if (typeof resposta === "boolean") {
        console.log(resposta ? "Sucesso" : "Erro");
    }
}
processarResposta("Usuário encontrado");
processarResposta(true);
processarResposta(false);
