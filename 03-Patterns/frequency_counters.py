# Напишите функцию под названием same, которая принимает два массива. 
# Функция должна возвращать True, если каждое значение в первом массиве 
# имеет соответствующее значение, возведенное в квадрат, во втором массиве. 
# Частота значений должна быть одинаковой.

def same(arr1, arr2):
    if len(arr1) != len(arr2):
        return False
    
    frequency_counter1 = {}
    frequency_counter2 = {}

    for val in arr1:
        frequency_counter1[val] = frequency_counter1.get(val, 0) + 1

    for val in arr2:
        frequency_counter2[val] = frequency_counter2.get(val, 0) + 1

    for key in frequency_counter1:
        if key ** 2 not in frequency_counter2:
            return False
        if frequency_counter2[key ** 2] != frequency_counter1[key]:
            return False

    return True

print(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]))



# Даны две строки, напишите функцию, чтобы определить, является ли 
# вторая строка анаграммой первой.

def valid_anagram(first, second):
    if len(first) != len(second):
        return False

    lookup = {}

    for letter in first:
        lookup[letter] = lookup.get(letter, 0) + 1

    for letter in second:
        if letter not in lookup:
            return False
        else:
            lookup[letter] -= 1

    return True

print(valid_anagram('anagrams', 'nagaramm'))


# Напишите функцию под названием same_frequency. 
# Даны два положительных целых числа, определите, 
# имеют ли эти два числа одинаковую частоту цифр.

def same_frequency(num1, num2):
    str_num1 = str(num1)
    str_num2 = str(num2)
    if len(str_num1) != len(str_num2):
        return False

    count_num1 = {}
    count_num2 = {}

    for digit in str_num1:
        count_num1[digit] = count_num1.get(digit, 0) + 1

    for digit in str_num2:
        count_num2[digit] = count_num2.get(digit, 0) + 1

    for key in count_num1:
        if count_num1[key] != count_num2.get(key, 0):
            return False

    return True

print(same_frequency(182, 281))  # True
print(same_frequency(34, 14))    # False
print(same_frequency(3589578, 5879385))  # True
print(same_frequency(22, 222))   # False
