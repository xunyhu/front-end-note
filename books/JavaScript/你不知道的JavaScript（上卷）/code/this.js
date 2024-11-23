// 使用this
function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = "Hello, I'm " + identify.call(this);
    console.log(greeting);
}

var me = {
    name: "Kyle"
};

var you = {
    name: "Reader"
};

// identify.call(me); // KYLE
// identify.call(you); // READER

// speak.call(me); // Hello, 我是KYLE
// speak.call(you); // Hello, 我是READER

// 不使用this
function identify(context) {
    return context.name.toUpperCase();
}

function speak(context) {
    var greeting = "Hello, I'm " + identify (context);
    console.log(greeting);
}

speak(you); // READER
speak(me); //hello, I'm KYLE