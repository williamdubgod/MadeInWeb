# Faça um programa que receba um número inicial, um número final, execute o for usando esses números, concatene cada número em um string e devolva essa string.

inicial = int(input("Digite o número inicial: "))
final = int(input("Digite o número final: "))

text = ''
transforma = ''

for i in range (inicial, final + 1, 1):
    transforma = str(i)
    text += transforma + " "
    
print(text)