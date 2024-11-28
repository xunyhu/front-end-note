var a = {
  index: 1,
};

// 然后
console.log(a); // ? ?

// 再然后
a.index++;


console.log("A");

setTimeout(function () {
  console.log("B");
}, 0);

console.log("C");
