# Функция линейного поиска
def linear_search(arr, val):
    for i in range(len(arr)):
        if arr[i] == val:
            return i  # Возвращаем индекс найденного элемента
    return -1  # Если элемент не найден, возвращаем -1

# Пример использования
print(linear_search([34, 51, 1, 2, 3, 45, 56, 687], 100))
