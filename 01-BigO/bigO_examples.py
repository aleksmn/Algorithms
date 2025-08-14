# "O большое" используется
# для описания производительности алгоритмов 
# (времени выполнения или использования памяти) 
# в зависимости от размера входных данных.

def add_up_to(n):
    # значение O для функции: 
    # O(n)
    total = 0
    for i in range(n + 1):
        total += i
    return total

print(add_up_to(6))


def add_up_to_constant(n):
    # значение O для функции: 
    # O(1)
    return n * (n + 1) // 2

print(add_up_to_constant(6))


def print_all_pairs(n):
    # значение O для функции: 
    # O(n**2)
    for i in range(n):
        for j in range(n):
            print(i, j)

print_all_pairs(3)
