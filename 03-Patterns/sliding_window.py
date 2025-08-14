# Напишите функцию под названием max_subarray_sum, 
# которая принимает массив целых чисел и число n. 
# Функция должна вычислить максимальную сумму 
# n последовательных элементов в массиве.

def max_subarray_sum(arr, num):
    if len(arr) < num:
        return None

    max_sum = 0
    temp_sum = 0

    # Считаем сумму первых n элементов
    for i in range(num):
        max_sum += arr[i]

    temp_sum = max_sum

    # Сдвигаем окно по массиву
    for i in range(num, len(arr)):
        temp_sum = temp_sum - arr[i - num] + arr[i]
        max_sum = max(max_sum, temp_sum)

    return max_sum

print(max_subarray_sum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))
