# Напишите функцию под названием sum_zero, 
# которая принимает отсортированный массив целых чисел.
# Функция должна найти первую пару, сумма которой равна 0. 
# Верните массив, который включает оба значения, 
# сумма которых равна нулю, или None, если такая пара не существует.

def sum_zero(arr):
    left = 0
    right = len(arr) - 1

    while left < right:
        total = arr[left] + arr[right]
        if total == 0:
            return [arr[left], arr[right]]
        elif total > 0:
            right -= 1
        else:
            left += 1

    return None  # Если пара не найдена

print(sum_zero([-4, -3, -2, -1, 0, 1, 2, 3, 10]))


# Напишите функцию под названием count_unique_values, 
# которая принимает отсортированный массив целых чисел
# и считает количество уникальных значений в этом массиве.

def count_unique_values(arr):
    if len(arr) == 0:
        return 0
    
    i = 0
    for j in range(1, len(arr)):
        if arr[i] != arr[j]:
            i += 1
            arr[i] = arr[j]

    return i + 1  # Возвращаем количество уникальных значений

print(count_unique_values([1, 2, 2, 5, 7, 7, 99]))


