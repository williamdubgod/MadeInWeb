# Declare um vetor de inteiros, e mostre somente os números pares.

array = []

qtd = int(input("Digite a quantidade de números: "))

for i in range (0, qtd, 1):
    n = int(input("Digite um numero: "))
    if n % 2 == 0:
        array.append(n)

print("Os números pares são:")
print(array)
