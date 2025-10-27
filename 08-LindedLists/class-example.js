class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.scores = [];
    }

    addScore(score){
        this.scores.push(score);
        return this.scores
    }
}

let firstStudent = new Student("Иван", "Иванов",1);
let secondStudent = new Student("Василий", "Петров",2);

firstStudent.addScore(80)
firstStudent.addScore(90)

secondStudent.addScore(50)
secondStudent.addScore(60)


console.log(firstStudent)
console.log(secondStudent)