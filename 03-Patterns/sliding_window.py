# Напишите функцию под названием max_subarray_sum, 
# которая принимает массив целых чисел и число n. 
# Функция должна вычислить максимальную сумму 
# n последовательных элементов в массиве.

# Примеры использования функции
# print(maxSubarraySum([1, 2, 3, 4, 5], 2))  # Вывод: 9 (4 + 5)
# print(maxSubarraySum([1, 2, 3, 4, 5], 3))  # Вывод: 12 (3 + 4 + 5)
# print(maxSubarraySum([-1, -2, -3, -4], 2)) # Вывод: -3 (-1 + -2)
# print(maxSubarraySum([5, 1, 3, 2, 8], 1))  # Вывод: 8 (максимальный элемент)
# print(maxSubarraySum([], 3))                # Вывод: 0 (пустой массив)


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




def findLongestSubstring(s):
    longest = 0
    seen = {}
    start = 0

    for i in range(len(s)):
        char = s[i]
        if char in seen:
            start = max(start, seen[char])
        # индекс - начало подстроки + 1 (чтобы включить текущий символ в подсчет)
        longest = max(longest, i - start + 1)
        # сохраняем индекс следующего символа, чтобы не считать его дважды
        seen[char] = i + 1

    return longest

# Примеры использования
print(findLongestSubstring(''))  # 0
print(findLongestSubstring('rithmschool'))  # 7
print(findLongestSubstring('thisisawesome'))  # 6
print(findLongestSubstring('thecatinthehat'))  # 7
print(findLongestSubstring('bbbbbb'))  # 1
print(findLongestSubstring('longestsubstring'))  # 8
print(findLongestSubstring('thisishowwedoit'))  # 6