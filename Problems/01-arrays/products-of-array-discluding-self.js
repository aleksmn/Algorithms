// Даны целые числа в массиве nums. Вернуть массив output, где output[i] — произведение всех элементов nums, кроме nums[i].
// Гарантируется, что каждое произведение помещается в 32‑битное целое.
// Усложнение: можно ли решить за O(n) времени без использования операции деления?

// Пример:
// Ввод: nums = [1, 2, 4, 6]
// Вывод: [48, 24, 12, 8]



function productExceptSelf(nums) {
        let prod = 1;
        let zeroCount = 0;
        for (let num of nums) {
            if (num !== 0) {
                prod *= num;
            } else {
                zeroCount++;
            }
        }

        if (zeroCount > 1) {
            return Array(nums.length).fill(0);
        }

        const res = new Array(nums.length);
        for (let i = 0; i < nums.length; i++) {
            if (zeroCount > 0) {
                res[i] = nums[i] === 0 ? prod : 0;
            } else {
                res[i] = prod / nums[i];
            }
        }
        return res;
}


console.log(productExceptSelf([1, 2, 4, 6]))