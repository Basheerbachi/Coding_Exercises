
let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ]

//   for(let i=0;i<studentRecords.length;i++){
//    console.log(studentRecords[i].name.toUpperCase()); 
// }

// "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

// ['JOHN', 'BABA', 'YAGA', 'WICK']
// "
let result = []
for(let i=0;i<studentRecords.length;i++){
    result.push(studentRecords[i].name.toUpperCase())
}
console.log(result);

// 2.
// let res = []
// for(let i=0;i<studentRecords.length;i++){
//     res.push(studentRecords[i].)
// }
// console.log(res);

res = studentRecords.filter(sr => sr.marks>50)
console.log(res);

//3.
res = studentRecords.filter(stud => stud.marks>50 && stud.id>120)
console.log(res);

//4.
let sum=studentRecords.map(n=>n.marks).reduce((a,b)=>a+b,0);

console.log(sum);

//5.

var1 = studentRecords.filter(stud => stud.marks > 50).map(stud => stud.name)
console.log(var1);

//6.

let temp=studentRecords.filter(stud => stud.id>120).map(n=>n.marks).reduce((a,b)=>a+b,0);

console.log(temp);

//8.

let students = [
    { name: "Tim", class: 9, rollno: "1" },
    { name: "Robert", class: 5, rollno: "2" },
    { name: "Chris", class: 7, rollno: "3" },
    { name: "Johny", class: 10, rollno: "4" },
    { name: "Harry", class: 8, rollno: "5" },
    { name: "James", class: 9, rollno: "6" },
  ];
console.log(students);








