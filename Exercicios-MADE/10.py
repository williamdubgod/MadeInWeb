# Faça um programa que você passe um número inicial, um número final, e some todos os valores entre esses números (incluindo os números passados).

inicial = int(input("Digite o número inicial: "))
final = int(input("Digite o número final: "))

array = []
soma = 0

for i in range (inicial, final + 1, 1):
    array.append(i)
    soma += i
print(f"A soma de {inicial} até {final} é: {soma}")