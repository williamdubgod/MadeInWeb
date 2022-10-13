# Faça um programa que concatene em uma string somente os números impares de 0 até 20, e devolva essa string.
text = ''
transforma = ''

for i in range (0, 21, 1):
    if i % 2 == 1:
        transforma = str(i)
        text += transforma + " "    
print(text)
