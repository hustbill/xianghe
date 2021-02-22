a = [1, 2, 3]

def foo(ls): 
    ls[1] = 4
    return ls


print(foo(a))

print(a)