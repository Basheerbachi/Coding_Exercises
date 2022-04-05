// let myMap = new Map()

// myMap.set(1, 'num1')
// myMap.set('1', 'str1')
// myMap.set(true, 'bool1')

// console.log(myMap.get(1))



var s = "abcadeecfb";
var len = s.length;


function identify( s , len) {
var contains = new Map();

var str = "";
for (var i = 0; i < len; i++) {
    if (!contains.has(s[i])) {
        str += s[i];
        contains.set(s[i], 1);
    }
}
console.log(str)
}
identify(s,len)

