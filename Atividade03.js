let idadeMinima = 7
let idadeAluno = 5
let primeiroAno = 7
let segundoAno = 8
let terceiroAno = 9

if (idadeAluno > idadeMinima) {
    console.log ("Matricula realizada com sucesso")
    if (idadeAluno > primeiroAno && idadeAluno < terceiroAno) {
        console.log("Voce esta no segundo ano")
    } else if (idadeAluno == primeiroAno){
        console.log("Voce esta no primeiro ano")
    } else {
        console.log("Voce esta no terceiro ano")
    }
} else {
    console.log("Desculpe, voce ainda nao pode se matricular nessa escola")
}


