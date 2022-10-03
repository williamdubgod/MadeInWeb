# Faça um programa que receba um número inteiro, multiplique esse número por ele mesmo 4 vezes (usando for), e devolva o resultado

qtd = int(input("Digite a quantidade de números: "))

for i in range (0, qtd, 1):
    v = int(input("Digite um valor: "))
    resultado = v * v * v * v
    print(f"{v} X {v} X {v} X {v} = {resultado}")