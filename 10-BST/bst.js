class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


// Функция встаки
// 1. создадим новый узел
// 2. если нет root, то новый узел это root
// 3. если узел есть, то проверяем, больше значение или меньше
// 4. если значение больше, то проверяем, есть ли справа узел
// 5. если узел справа есть, то повторяем действия с пункта 3
// 6. если узла справа нет, то добавляем узел в свойство right


//             10
//         6      15
//       3  8        20

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(value) {
        if (this.root === null) return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
}


//      10
//   5     13
// 2  7  11  16

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

console.log(tree.root)
console.log(tree.find(13))



// Problem 1
// Invert Tree

// function invertTree(root) {
//     if (!root) return null;
//     const stack = [root];
//     while (stack.length) {
//         const node = stack.pop();
//         [node.left, node.right] = [node.right, node.left];
//         if (node.left) stack.push(node.left);
//         if (node.right) stack.push(node.right);
//     }
//     return root;
// }


// let invertedTree = invertTree(tree.root);
// console.log(invertedTree)