// 1.
let parent = {
    college: "myCollege",
    fee: "10000",
    course: "Full Stack DEvelopment",
  };
  let child = {
    fname: "Cillian",
    lname: "Murphy",
    Steram: "ECE",
    age: 22,
  };
  child.__proto__ = parent;
  console.log(child["college"]); 
  console.log(child["fee"]);
  console.log(child["course"]);


  // 2.
  let prof={
    teach:"Yes",
    Strict:function(){
        console.log("Yes")
    }
}
let Me={
    food:"study less",
    pass:"true",
}
let myFrnd={
    food:"study More",
    pass:"true",

}

Me.__proto__=prof
myFrnd.__proto__=Me
Me.Strict()// yes
myFrnd.Strict()//yes
  

// 3.
let arr = [67, 34, 87, 90, 29];
let sum = arr.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);
console.log(sum);