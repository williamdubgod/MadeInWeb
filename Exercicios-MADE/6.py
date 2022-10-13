# Faça um programa que receba um número inteiro, multiplique esse número por ele mesmo 4 vezes (usando for), e devolva o resultado.

v = int(input("Digite um valor: "))
potencia = 1

for i in range (0, 4, 1):
    potencia = potencia * v
print(potencia)