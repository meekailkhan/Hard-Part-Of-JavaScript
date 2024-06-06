// class Student {
//     constructor(name, marks, standard) {
//         this.name = name;
//         this.marks = marks;
//         this.standard = standard
//     }
//     sayName() {
//         console.log(`stdent name is ${this.name}`)
//     }
//     setMarks() {
//         console.log(`student marks achive ${this.marks}`)
//     }
//     class() {
//         console.log(`this student is ${this.standard} class`)
//     }
// }

// const arr = [
//     { name: 'student', age: 80, class: '5th' },
//     { name: 'student1', age: 81, class: '6th' },
//     { name: 'student2', age: 82, class: '7th' },
//     { name: 'student3', age: 83, class: '8th' },
//     { name: 'student4', age: 84, class: '9th' },
//     { name: 'student5', age: 85, class: '10th' },
//     { name: 'student6', age: 86, class: '11th' },
//     { name: 'student7', age: 87, class: '12th' },
// ];

// const studentInstances = [];
// arr.forEach(eachStudent => {
//     const currentInstance = new Student(eachStudent.name, eachStudent.age, eachStudent.class);
//     studentInstances.push(currentInstance);
// });
// console.log(studentInstances);

class Student{
   
    constructor(name,age,standard,marks){
            this.name = name;
            this.age = age;
            this.standard = standard;
            this.marks = marks;
    }

    info(){
        return `hey this student name is ${this.name} achive marks by this student is ${this.marks} this student in the ${this.standard}`
    }
    
}

let user1 = new Student("saif",18,"12th",90)
console.log(user1.info())




