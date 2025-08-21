// Напишите функцию под названием maxSubarraySum, 
// которая принимает массив целых чисел и число n. 
// Функция должна вычислить максимальную сумму 
// n последовательных элементов в массиве.

// Примеры использования функции:
// console.log(maxSubarraySum([1, 2, 3, 4, 5], 2));  // Вывод: 9 (4 + 5)
// console.log(maxSubarraySum([1, 2, 3, 4, 5], 3));  // Вывод: 12 (3 + 4 + 5)
// console.log(maxSubarraySum([-1, -2, -3, -4], 2)); // Вывод: -3 (-1 + -2)
// console.log(maxSubarraySum([5, 1, 3, 2, 8], 1));  // Вывод: 8 (максимальный элемент)
// console.log(maxSubarraySum([], 3));                // Вывод: 0 (пустой массив)















// решение с вложенным циклом
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))


// рефакторинг
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))





// Напишите функцию под названием findLongestSubstring,
// которая принимает строку и возвращает длину самой длинной
// подстроки с уникальными символами.
// Сложность по времени - O(n)

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6


function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // индекс - начало подстроки + 1 (чтобы включить текущий символ в подсчет)
    longest = Math.max(longest, i - start + 1);
    // сохраняем индекс следующего символа, чтобы не считать его дважды
    seen[char] = i + 1;
  }
  console.log(longest)
  return longest;
}

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6