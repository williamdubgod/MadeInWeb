# Faça um programa que receba um número inteiro, conte mais 10 (usando for) e devolva o resultado.

qtd = int(input("Digite a quantidade de números: "))

for i in range (0, qtd, 1):
    v = int(input("Digite um valor: "))
    resultado = v + 10
    print(f"{v} + 10 = {resultado}")