# Faça um programa que receba um número inteiro, conte mais 20 (usando for), concatene cada número em uma string (separando por espaço), e devolva essa string.

v = int(input("Digite um número: "))
text = ''
transforma = ''

for i in range (0, 20, 1):
    v = v + 1
    transforma = str(v) 
    text += transforma + " "
print(text)
    


