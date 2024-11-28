var a = new String( "abc" );

console.log( a );

console.log('a === abc', a === 'abc');

console.log('typeof a', typeof a);                             

console.log('a instanceof String', a instanceof String);                

console.log('Object.prototype.toString.call( a )', Object.prototype.toString.call( a )); 

console.log('Object.prototype.toString.call( {a: 1, b: 2} )', Object.prototype.toString.call( {a: 1, b: 2} )); 

console.log('Object.prototype.toString.call( [1,2,3] )', Object.prototype.toString.call( [1,2,3] ));

console.log('Object.prototype.toString.call( /regex-literal/i )', Object.prototype.toString.call( /regex-literal/i ));

var bl = new Boolean(false);
console.log('bl', bl);
console.log('bl.valueOf()', bl.valueOf());
console.log('!bl', !bl); // false

var a = new Array( 3 );
var b = [ undefined, undefined, undefined ];
delete b[1];
var c = [];
c.length = 3;

console.log(a, b, c)