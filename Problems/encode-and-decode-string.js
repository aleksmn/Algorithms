// Design an algorithm to encode a list of strings to a single string.
// The encoded string is then decoded back to the original list of strings.


function encode(strs) {
    let res = '';
    for (let s of strs) {
        res += s.length + '#' + s;
    }
    return res;
}



function decode(str) {
    let res = [];
    let i = 0;
    while (i < str.length) {
        let j = i;
        while (str[j] !== '#') {
            j++;
        }
        let length = parseInt(str.substring(i, j));
        i = j + 1;
        j = i + length;
        res.push(str.substring(i, j));
        i = j;
    }
    return res;
}


let encoded = encode(['qwrwerweqr', 'wrewerwe', "gjghj"])
console.log(encoded)
console.log(decode(encoded))