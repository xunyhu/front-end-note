for (let i=1; i<=5; i++) {
    // (function (j) {
    //     setTimeout(function timer(){
    //         console.log(j)
    //     }, j*1000)
    // })(i)
    setTimeout(function timer(){
        console.log(i)
    }, i*1000)
}