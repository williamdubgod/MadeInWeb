# Faça um programa que você passe uma senha de 3 digitos númericos, e o seu programa seja capaz de, de identificar essa senha Ex: Imagine que você tenha uma senha do Facebook, de 3 digitos. Você terá que fazer um programa, que irá tentar diversas vezes acertar a senha, até descobrir a verdadeira.

senha = input("Digite a senha: ")

while senha != "123":
    print("Acesso negado!")
    senha = input("Digite a senha novamente: ")
    print("Acesso liberado!")