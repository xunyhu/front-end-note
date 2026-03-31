// function outer() {
//   var a = 1;
//   function inner() {
//     console.log(a);
//   }
//   inner();
// }
// outer();

var a = 1;

function foo() {
  console.log(a);
}

function bar() {
  var a = 2;
  foo();
}

bar();
