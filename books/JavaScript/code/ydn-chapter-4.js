var a = 42;

var b = a + "";         // 隐式强制类型转换

var c = String( a );    // 显式强制类型转换

// 1.07 连续乘以七个 1000
var a = 1.07 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000;

// 七个1000一共21位数字
console.log('a.toString()', a.toString()); // "1.07e+21"

var a = [1,2,3];

console.log('a.toString()', a.toString()); // "1,2,3"