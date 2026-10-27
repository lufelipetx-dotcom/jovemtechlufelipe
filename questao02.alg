algoritmo "ResultadoDeVendas"

var
janeiro, fevereiro, marco: real
soma: real

início

escreval("Quanto foi vendido em Janeiro?: ")
leia(janeiro)
escreval("Quanto foi vendido em Fevereiro?: ")
leia(fevereiro)
escreval("Quanto foi vendido em Março?: ")
leia(marco)

soma <- janeiro + fevereiro + marco

se soma >= 17000 então
    escreval("Parabéns, você atingiu a meta de vendas!")
senão
    escreval("Infelizmente você não atingiu a meta de vendas!") 

    fimse

    se janeiro > fevereiro e janeiro > marco então
        escreval("O mês de Janeiro foi o que mais vendeu!")     
fimse
    se fevereiro > janeiro e fevereiro > marco então
        escreval("O mês de Fevereiro foi o que mais vendeu!")
fimse
    se marco > janeiro e marco > fevereiro então
        escreval("O mês de Março foi o que mais vendeu!") 

        fimse


fimalgoritmo