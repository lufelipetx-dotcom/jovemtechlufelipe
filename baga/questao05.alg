algoritmo "Organizador de Excursões"

var
qtdpassageiros: inteiro

inicio
escreval("Qual a quantidade de passageiros?")
leia(qtdpassageiros)

se qtdpassageiros <=4 entao
escreval("O grupo será acomodado em um carro de passeio.")
fimse

se qtdpassageiros <=8 entao
escreval("O grupo será acomodado em uma Mini Van.")
fimse

se qtdpassageiros <=16 entao
escreval("O grupo será acomodado em uma Van.")
fimse

se qtdpassageiros <=40 entao
escreval("O grupo será acomodado em um ônibus.")
fimse

se qtdpassageiros >40 entao
escreval("Excedeu o limite de passageiros.")
fimse

fimalgoritmo