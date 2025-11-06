
// Узел
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// h-0-0-0-t

// Односвязный список
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // методы
    push(val) {
        // создадим узел
        let newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;

        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        // возвращаем удаленное значение
        return current;
    }

    // shift - удаляем первое значение
    // unshift - добавляем значение в начало списка
    // remove(index) - удаляем по индексу
    // insert(index, val) - вставка 
}


// Создадим объект
let list = new SinglyLinkedList()
list.push("HELLO")
console.log(list);
