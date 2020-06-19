const nome = 'Silvana'
const sexo = 'F'
const idade = 85
const contribuicao = 30

const calculocontribuicao = idade + contribuicao

const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculocontribuicao >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculocontribuicao >= 85

if ( homemPodeAposentar || mulherPodeAposentar) {
    console.log(`${nome}, você pode se aposentar!`)
     }  else {
        console.log(`${nome}, você não pode se aposentar!`)
}