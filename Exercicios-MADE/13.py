senha = input("Digite uma senha: ")
senhaLength = len(senha)

arraySenha = []

for indexSenha in range(0, senhaLength, 1):
    arraySenha.append(senha[indexSenha])

print(arraySenha)
    
while senhaLength != 4:
    print("senha inválida")
    senha = input("Digite uma senha com 3 digitos uma letra: ")

caracteres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0','1','2','3','4','5','6','7','8','9']
combinacoes = len(caracteres)

hack = ''

for indexCaracter in range (0, combinacoes, 1):
    for indexSenha in range(0, senhaLength, 1):
        if arraySenha[indexSenha] == caracteres[indexCaracter]:
            hack += caracteres[indexCaracter]

if hack == senha:
    print("senha quebrada")

print(hack)
