function weekTemps() {
  this.dataStore = [];
  this.add = add;
  this.average = average;
}

function add(temp) {
  this.dataStore.push(temp);
}

function average() {
  var total = 0;
  for (var i = 0; i < this.dataStore.length; ++i) {
    total += this.dataStore[i];
  }
  return total / this.dataStore.length;
}

function print(value) {
  console.log(value);
}

var thisWeek = new weekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
// print(thisWeek.dataStore);
print(thisWeek.average()); // 显示54.875

class studentScore {
  scoreList = [];
  addScore(score) {
    this.scoreList.push(score);
  }
  averageScore() {
    let total = 0;
    for (let i = 0; i < this.scoreList.length; ++i) {
      total += this.scoreList[i];
    }
    return total / this.scoreList.length;
  }
  print(value) {
    console.log(value);
  }
}

const student1 = new studentScore();
student1.addScore(50);
student1.addScore(60);
student1.print(student1.averageScore());

const wordList = ["about", "zero", "but", "word", "you"];
console.log(wordList.sort());
console.log(wordList.sort().reverse());

class letterToWord {
  lettercList = [];
  addLetter = function (letter) {
    this.lettercList.push(letter);
  };
  joinWord = function () {
    return this.lettercList.join("");
  };
  print() {
    console.log(this.joinWord());
  }
}

const word1 = new letterToWord();
word1.addLetter("a");
word1.addLetter("b");
word1.addLetter("o");
word1.addLetter("u");
word1.addLetter("t");
word1.print();
