# Faça um programa que concatene em uma string somente os números impares de 0 até 20, e devolva essa string.

impares = []

for i in range (0, 21, 1):
    if i % 2 == 1:
        impares.append(i)
print(f"Os números ímpares de 0 a 20 são: {impares}")
