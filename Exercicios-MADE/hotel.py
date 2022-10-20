# manhã = 4
# tarde = 3
# noite = 1

manha = 4
tarde = 3
noite = 1

while True:
    turno = int(input("Digite qual turno dejesa (1 - manhã) (2 - tarde) (3 - noite) : "))

    if turno == 1:
        if manha > 0:
            manha = manha - 1
        else:
            print("Sem vagas")

    if turno == 2:
        if tarde > 0:
            tarde = tarde - 1
        else:
            print("Sem vagas")

    if turno == 3:
        if noite > 0:
            noite = noite - 1
        else:
            print("Sem vagas")

    print(f"manhã: {manha}")
    print(f"tarde: {tarde}")
    print(f"noite: {noite}")

