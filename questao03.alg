algoritmo "ImpostoDeRenda"


var
nome: caractere
valor_anual_recebido: real



inicio
escreval("Qual o nome do contribuinte?")
leia(nome)
escreval("Qual o valor anual recebido?")
leia(valor_anual_recebido)

se valor_anual_recebido<=19000 então
escreval("O contribuinte ", nome, " não precisa pagar imposto de renda.")
senão
escreval("O contribuinte ", nome, " precisa pagar imposto de renda.")
fimse




fimalgoritmo