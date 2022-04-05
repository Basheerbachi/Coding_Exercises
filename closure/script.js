//------------CLOSURE-------------

function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

//output:- 1  
//         2    
//         3 
//         4


//2.
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();

// output:- 1
//          0


//3.
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }

//  output:- 3 after 1 sec
  
//4.Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function outer(l) {
    function inner(b) {        
        console.log(l*b)
    }
    inner(8)
}
outer(10)


//5. Take a variable in outer function and create an inner function to increase the counter every time it is called

function outer(){
    let count = 0
    function inner(){   
        count += 1   
        console.log(count)
    }
    return inner
} 
res = outer()
res()


//6. Print Output

var a = 12;
(function () {
  alert(a);
})();

// output:- 12

//7.
var a = 10;
var x = (function () {
    var a = 12;
    return function () {
      alert(a);
    };
  })();
  x(); 



//8.

var globalVar = "xyz";

(function outerFunc(outerArg) {     
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {          
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +          //123
        "innerArg = " + innerArg + "\n" +          //456
        "outerVar = " + outerVar + "\n" +          //a
        "innerVar = " + innerVar + "\n" +          //b
        "globalVar = " + globalVar);               //xyz
    
    })(456);
})(123);

//ouput:-
//        outerArg = 123
//        innerArg = 456
//        outerVar = a
//        innerVar = b
//        globalVar = xyz