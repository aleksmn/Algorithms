//  Longest Consecutive Sequence
// Дан массив целых чисел nums. Вернуть длину самой длинной последовательности подряд идущих целых, которую можно составить из элементов массива.
// Последовательность подряд идущих чисел — это такая последовательность, где каждое следующее число на 1 больше предыдущего. Элементы не обязаны идти подряд в исходном массиве.
// Требование: алгоритм должен работать за O(n) времени.

// Пример:
// Ввод: nums = [2, 20, 4, 10, 3, 4, 5]
// Вывод: 4

// Пояснение: самая длинная последовательность подряд идущих чисел — [2, 3, 4, 5].


function longestConsecutive(nums) {
    if (nums.length === 0) {
        return 0;
    }
    nums.sort((a, b) => a - b);

    let res = 0,
        curr = nums[0],
        streak = 0,
        i = 0;

    while (i < nums.length) {
        if (curr !== nums[i]) {
            curr = nums[i];
            streak = 0;
        }
        while (i < nums.length && nums[i] === curr) {
            i++;
        }
        streak++;
        curr++;
        res = Math.max(res, streak);
    }
    return res;
}

console.log(longestConsecutive([2, 20, 4, 10, 3, 4, 5]))