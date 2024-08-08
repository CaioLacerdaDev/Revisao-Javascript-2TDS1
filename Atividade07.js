let livrosLido = ["HarryPotter ", "HarryPotter 2 ", "HarryPotter 3 ", "HarryPotter 4 ", "HarryPotter 6 ", "HarryPotter 5 "];
let metaLivro = 10
let livrosFaltando = metaLivro - livrosLido.length

console.log("Livros Lidos:")

for (let i = 0; i < livrosLido.length; i++) {
    console.log(livrosLido[i])
}
if (livrosLido <= metaLivro) {
    console.log("Parabéns! Você atingiu sua meta de leitura!")
} else {
    console.log("Você está progredindo! Faltam", livrosFaltando, "livros para atingir sua meta.")
} 
