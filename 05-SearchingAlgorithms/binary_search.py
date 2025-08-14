# Функция бинарного поиска
def binary_search(arr, elem):
    start = 0
    end = len(arr) - 1

    while start <= end:
        middle = (start + end) // 2  # Находим средний индекс

        if arr[middle] == elem:
            return middle  # Возвращаем индекс найденного элемента
        elif elem < arr[middle]:
            end = middle - 1  # Ищем в левой половине
        else:
            start = middle + 1  # Ищем в правой половине

    return -1  # Если элемент не найден, возвращаем -1

# Пример использования
print(binary_search([2, 5, 6, 9, 13, 15, 28, 30], 103))
