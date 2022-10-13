# Faça um programa que você passe uma senha de 3 digitos númericos, e o seu programa seja capaz de, de identificar essa senha Ex: Imagine que você tenha uma senha do Facebook, de 3 digitos. Você terá que fazer um programa, que irá tentar diversas vezes acertar a senha, até descobrir a verdadeira.

senha = int(input("Digite uma senha de 3 digitos: "))

while senha <= 99 or senha >= 999:
    print("A senha deve ter 3 digitos")
    senha = int(input("Digite a senha novamente: "))

hack = 0

while hack < 1000:
    if hack == senha:
        print("Sua senha foi quebrada") 
    hack = hack + 1

    
