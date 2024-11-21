  function recursivelyCheckEqual(x, ...rest) {
    return Object.is(x, rest[0]) &&
            (rest.length < 2 || recursivelyCheckEqual(...rest));
  }

  const res = recursivelyCheckEqual(0, 0)
  console.log(res)

  let person = {
    name: 'Matt',
    age: 27
  };
  function printPerson(foo, {name, age}, bar) {
    console.log(arguments);
    console.log(name, age);
  }
  function printPerson2(foo, {name: personName, age: personAge}, bar) {
    console.log(arguments);
    console.log(personName, personAge);
  }
  printPerson('1st', person, '2nd');
  // ['1st', { name: 'Matt', age: 27 }, '2nd']
  // 'Matt', 27
  printPerson2('1st', person, '2nd');
  // ['1st', { name: 'Matt', age: 27 }, '2nd']
  // 'Matt', 27