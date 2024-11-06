def sum_lista(lista):
    if len (lista) == 0:
        return 0
    else:
        return lista[0] + sum_lista(lista[1:])
    listaa = [1,2,3,4,5,6]
    print(sum_lista(listaa))



 
