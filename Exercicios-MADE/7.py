# Faça um programa que receba um número inicial, um número final, execute o for usando esses números, concatene cada número em um string e devolva essa string.

inicial = int(input("Digite o número inicial: "))
final = int(input("Digite o número final: "))

array = []

for i in range (inicial, final, 1):
    array.append(i)
print(f"O intervalo de {inicial} até {final} é {i}")