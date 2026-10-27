algoritmo "alg01"


var
idade: inteiro
datanascimento: caractere
maioridade: logico
salario: real


início
//idade <- 21
//datanascimento <- "23/06/2005"
//maioridade <- verdadeiro
//salario <- 22000.22

//escreval(idade)
//escreval(datanascimento)
//escreval(maioridade)
//escreval(salario)

escreval("Qual a sua idade?: ")
leia(idade)
escreval("Qual o seu salario?: ")
leia(salario)



se ((idade >= 18) e (salario >= 22000.22)) então
    escreval("Você é maior de idade.")
senão
    escreval("Você é menor de idade.")
fimse





fimalgoritmo
