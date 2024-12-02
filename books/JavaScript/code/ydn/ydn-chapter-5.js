var a = 42;
var b = "foo";
var c = [1,2,3];

console.log('a && b || c', a && b || c); // foo

console.log('a || b && c', a || b && c); // 42

var a = 42, b, c;
b = ( a++, a );
c = a++, a;

console.log('a', a)
console.log('b', b)
console.log('c', c)