var a = "foo"
var b = a.concat("bar")
console.log('a',a)
console.log('b', b)
console.log('a[1]', a[1])
console.log('a.charAt(1)', a.charAt(1))

var c = Array.prototype.join.call(a, '-');
console.log('c', c)

console.log(void a, a);