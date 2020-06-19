// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média.


const aluno01 = {
        nome: "Mayk",
        nota: 9.8
}

const aluno02 = {
        nome: "Diego",
        nota: 10
}

const aluno03 = {
        nome: "Fulano",
        nota: 2
}

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

// Se a média for maior que 5, parabenizar a turma
if (media > 5) {
     console.log(`A media foi de ${media}. Parabéns`)
} else {
      console.log( 'A media é menor que 5')
}

