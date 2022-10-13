# Declare um vetor de inteiro, e ordene em ordem crescente os valores em um novo vetor.

array = []

qtd = int(input("Digite a quantidade de números: "))

for i in range (0, qtd, 1):
    n = int(input("Digite um numero: "))
    array.append(n)

newArray = sorted(array)

print(newArray)