algoritmo "Pontuador de Tarefas"





var
pontos: inteiro
tarefas_concluidas: inteiro




inicio

escreval("Das 5 Tarefas diárias, quantas tarefas foram concluídas?")
leia(tarefas_concluidas)

pontos <-tarefas_concluidas * 2

escreval("O total de pontos obtidos é: ", pontos)

se pontos <= 5 entao
escreval("Você precisa se esforçar mais!") senao

escreval("Parabéns! Você está se saindo muito bem!")
fimse

fimalgoritmo