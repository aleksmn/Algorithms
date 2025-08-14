# Рекурсия - функция, которая вызывает саму себя
def count_down(num):
    if num <= 0:
        print("Пуск!")
        return
    print(num)
    count_down(num - 1)

count_down(3)


def sum_range(num):
    if num == 1:
        return 1
    return num + sum_range(num - 1)

print(sum_range(4))


def factorial(num):
    if num == 1:
        return 1
    return num * factorial(num - 1)

print(factorial(5))


# Вспомогательный метод рекурсии
def collect_odd_values(arr):
    result = []

    def helper(helper_input):
        if len(helper_input) == 0:
            return
        
        if helper_input[0] % 2 != 0:
            result.append(helper_input[0])
        
        helper(helper_input[1:])  # Используем срез для передачи оставшихся элементов

    helper(arr)
    return result

print(collect_odd_values([1, 2, 3, 4, 5, 6, 7, 8, 9]))


# Чистая рекурсия
def collect_odd_values_pure(arr):
    new_arr = []
    
    if len(arr) == 0:
        return new_arr
    
    if arr[0] % 2 != 0:
        new_arr.append(arr[0])
    
    new_arr += collect_odd_values_pure(arr[1:])  # Используем срез для передачи оставшихся элементов
    return new_arr

print(collect_odd_values_pure([1, 2, 3, 4, 5]))
