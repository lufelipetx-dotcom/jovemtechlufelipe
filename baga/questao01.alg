algoritmo "questao01"

var
nome_do_aluno: caractere
nota1, nota2, nota3, nota4, media: real

início

escreval("Qual o seu nome?: ")
leia(nome_do_aluno)
escreval("Qual a sua nota 1?: ")
leia(nota1)
escreval("Qual a sua nota 2?: ")
leia(nota2)
escreval("Qual a sua nota 3?: ")
leia(nota3)
escreval("Qual a sua nota 4?: ")
leia(nota4)
media<-(nota1 + nota2 + nota3 + nota4) /4

se media >= 6.0 então
    
    escreval("Parabéns, você foi aprovado!")

senão
    escreval("Infelizmente você foi reprovado!")
fimse

Escreval(nome_do_aluno, " sua média foi: ", media)

fimalgoritmo