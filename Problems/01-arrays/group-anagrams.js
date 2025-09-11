function groupAnagrams(strs) {
        const res = {};

        for (let s of strs) {
            const count = new Array(26).fill(0)
            //  a  b  c ...
            // [1, 0, 1]

            for (let c of s) {

                let idx = c.charCodeAt(0) - "a".charCodeAt(0);
                count[idx] += 1;
            }

            // составляем хэш таблицу
            if (!res[count]) {
                res[count] = [];
            }

            res[count].push(s)
        }

        // console.log(Object.values(res))
        return Object.values(res);

}

