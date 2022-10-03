# Declare um vetor de inteiros, e mostre o maior valor

array = []

qtd = int(input("Digite a quantidade de números: "))

for i in range (0, qtd, 1):
    n = int(input("Digite um numero: "))
    array.append(n)

    if (i == 0):
        maior = n
    elif (n > maior):
        maior = n
        
print(f"O maior valor do array {array} é o: {maior}")