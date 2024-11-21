let x = 5;
function fn(x) {
    return function(y) {
        console.log(y + (++x));
    }
}
let f = fn(6);
f(7);   // y = 7, 函数还保存着 ++x 的引用 
console.log(x);
