module.exports = function (...nomes) {
    return nomes.map(nome => {
        return `Boa Semana ${nome}!`
    });
}