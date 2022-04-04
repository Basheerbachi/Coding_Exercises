// //1.Create one function with zero parameter having a console statement;

function sayHi(){
    console.log('Hello World')
}
sayHi()

// //2.Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function addNum(a, b){
    sum = a + b
    return sum
}
console.log(addNum(3, 4))

//3.Create one arrow function

var f1 = () => {
    console.log("Arrow Functions")
}
f1()

//4.

//4.Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ()

// output:- undefined


//5.Pirnt output:

var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

// output:- undefined
//          21 


//6.Print output

var x = 21;
a();
b();
console.log(a);
function a () {
    
    var x = 20;
console.log(x);
};

function b () {
    
    var x = 40;
console.log(x);
};

// output:- x = 20
//          x = 40
//          function a () {
//              var x = 20;
//          console.log(x);
//          };

//7.Print output

var x = 21;
a();
b();
console.log(a);
function a () {
    
   x = 20;
  console.log(x);
};
function b () {
    
    x = 40;
   console.log(x);
};

// output:- x = 20
//          x = 40
//          function a () {
//              var x = 20;
//          console.log(x);
//          };

//8.Print output

var x = 21;
a();
b();
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};

//output:- Uncaught ReferenceError: a is not defined


//9. Write a function that accepts parameter n and returns factorial of n
function fact(n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * fact(n-1);
    }
}
console.log(fact(9))

// output:- 362880
