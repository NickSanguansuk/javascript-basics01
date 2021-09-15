console.log('---------- ---------- ---------- ---------- ----------');
{
    //document.write('This is Internal JavaScript Example.!!!');

    console.log('##### ---------- #####');
    console.log('Testing');

    var arr = ['9+1', '-5.0+-2.0', '0000.2+0.5',
        '3.0+2', 'b+c'];

    for (var i = 0; i < arr.length; i++) {
        try {
            console.log(eval(arr[i]));
        } catch (e) {
            console.log('Invalid');
        }
    }

    console.log('----------');

    console.log('Hello' + ' World');

    console.log('----------');

    var date = new Date('Thu Jan 29 2009 17:31:44');
    var now = new Date('2019-01-24 18:31:44');

    console.log(now.getMonth() === date.getMonth());

    console.log('----------');

    a = 8 + '8';
    console.log(a);

    console.log('----------');

    console.log('Hello' - ' World');

    console.log('----------');

    let i2 = 4;

    console.log(i2 != 5);

    var x = function () {
        if (i2 != 5) {
            x = true
        } else {
            x = false
        }
    };
    console.log(x());

    console.log(function () {
        if (i2 != 5) {
            return true
        } else {
            return false
        }
    });

    var x = function () {
        if (i2 === 5) {
            return true
        } else {
            return false
        }
    };
    console.log(x());

    console.log('----------');

    //let name = 'Per Scholas';   // Error
    //let name = 'JavaScript';    // Error
    //console.log(name);

    console.log('----------');

    //alert('Hello JS!');     // Correct
    //alertbox('Hello JS!');  // Uncaught ReferenceError: alertbox is not defined
    //msg('Hello JS!');       // Uncaught ReferenceError: msg is not defined
    //msgbox('Hello JS!');    // Uncaught ReferenceError: msgbox is not defined

    console.log('----------');

    var a = [9, 8, 7, 6, 5, 4];
    console.log(a.splice(3));
    console.log(a);

    console.log('----------');

    var x = 5;
    var y = 6;
    var res = eval('x*y');
    console.log(res);

    console.log('----------');

    var a = 'Per Scholas';
    var x = a.lastIndexOf('l');
    console.log(x);

    console.log('----------');

    var a = 'Per Scholas';
    var result = a.substring(4, 5);
    console.log(result);

    console.log('----------');

    var a = [4, 8, 5, 7, 6, 9];
    console.log(a.slice(3).sort());
    console.log(a);

    console.log('----------');

    var data = '1+2, 2+3, 3+4, 4+5, 5 + 1 '.split(/\s*,\s*/).reverse();
    console.log(data[1][0] + data[1][2]);

    console.log('----------');

    var arr = [1, 2, 3, 4, 5,];
    console.log(arr);
    arr.forEach(function (value, index, array) {
        array[index] = value * value
    });
    console.log(arr);
    console.log(arr.reverse().filter(function (x) {
        return x % 5 // if x % 5 equal 0, it will return false.
    }));
    console.log(arr);

    console.log('----------');

    var strArr = ['a', 'b', 'c', 'd', 'e'];
    console.log(strArr);
    console.log(strArr.filter(function (x) {
        if (x == 'c') {
            return true;
        } else {
            return false;
        }
    }));
    console.log(strArr);

    console.log('----------');

    numbers = '12345';
    for (var i = 0; i < 5; i++) {
        if (numbers[i] == 3) {
            break;
        }
        console.log(numbers[i]);
    }

    console.log('----------');

    var name = 'Per Scholas';
    var name = 'JavaScript';
    console.log(name);

    console.log('----------');

    numbers = '12345';
    for (var i = 0; i < 5; i++) {
        if (numbers[i] == 3) {
            continue;
        }
        console.log(numbers[i]);
    }

    console.log('----------');

    var person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 50,
        eyeColor: 'blue'
    };
    for (var i in person) {
        console.log(i);
    }

    console.log('##### ---------- #####');

}
console.log('---------- ---------- ---------- ---------- ----------');
{
    console.log('Basics JavaScript Day 1.a');

    console.log('----------');
    console.log('Wrappers')

    let fooWrapper = new Boolean(true);
    console.log(fooWrapper);
    let foo = Boolean(true);
    console.log(foo);

    let foo2Wrapper = new String('Hello World!');
    console.log(foo2Wrapper);
    let foo2 = String('Hello World!');
    console.log(foo2);

    let foo3Wrapper = new Number('ddd');
    console.log(foo3Wrapper);
    foo3Wrapper = 5;
    console.log(foo3Wrapper);
    let foo3 = Number('ddd');
    console.log(foo3); // NaN
    foo3 = 5;
    console.log(foo3);

    console.log('----------');
    console.log('Operators');

    console.log(5 + 6);

    console.log(3 > 2 && 5 > 3);

    console.log((5 <= 3 || 6 > 0) && (20 % 3 == 2 && 88 / 2 > 30));

    console.log('----------');
    console.log('var, let, and const');

    let greeting = 'say Hi';
    if (true) {
        console.log(greeting);
        //let greeting ='say Hello'; // This will give Error
        //console.log(greeting);
    }
    console.log(greeting);

    // Declaring a const object
    const object1 = {
        name: 'Rock',
        age: 10
    }

    //// We cannot do this
    //object1 = {
    //    number: 'five'
    //}

    // We can do this
    object1.name = 'Paper';
    console.log(object1.name);

    console.log('----------');
    console.log('== and ===');

    console.log(3 == '3');
    console.log(3 === '3');

    console.log('----------');
    console.log('Control Statements - if and switch');

    // if statement is the same as Java
    // switch is a little different

    let x = 2;
    switch (x) {
        case 1:
            console.log('case 1 here');
            break;
        case 2:
            console.log('case 2 here');
            break;
        case 3:
            console.log('case 3 here');
            break;
        default:
            console.log('not in the 3 cases');
            break;
    }

    console.log('----------');
    console.log('do while loop');

    let j = 1;
    do {
        let value = j * 2;
        j++;
        console.log(value);
    } while (j <= 5);

    console.log('----------');
    console.log('Simple algorithm');

    let userInput = '';
    let operand = '';
    let nums = '';
    const SEPARATOR = '|';
    //userInput = prompt('Enter an Arithmetic Expression: ');
    //console.log(userInput);
    userInput = '34+55+72';
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] >= '0' && userInput[i] <= '9') {
            console.log('digit here');
            while (i < userInput.length && userInput[i] >= '0' && userInput[i] <= 9) {
                nums += userInput[i];
                i++;
            }
            nums += SEPARATOR;
        }
        if (userInput[i] == '+' || userInput[i] == '-' || userInput[i] == '^') {
            console.log('operand here');
            operand += userInput[i] + SEPARATOR;
        }
    }
    console.log('numbers', nums);
    console.log('operands', operand);

    console.log('----------');

}
console.log('---------- ---------- ---------- ---------- ----------');
{
    console.log('Basics JavaScript Day 1.b');

    console.log('----------');
    console.log('Function');

    function defaultMessage() {
        console.log('Default');
    }

    function customMessage(custom, times) {
        for (let i = 0; i < times; i++) {
            console.log(i, custom);
        }
    }

    customMessage('useful message', 5);

    function add(a, b) {
        let c = a + b;
        return c;
    }

    let result = add(13, 5);
    console.log(result);

    console.log('----------');
    console.log('Function with object');

    function printProps(p) {
        console.log(p.friends.one); // a
        for (let key in p) {
            let value = p[key];
            console.log(key);
            console.log(value);
            console.log(key + ': ' + value + '\n');
        }
    }

    let person = {
        first_name: 'Luke',
        last_name: 'Lance',
        age: 23,
        address: '1950 N Logan',
        friends: {
            one: 'a',
            two: 'b'
        },
        fullName: function () {
            return this.first_name + ' ' + this.last_name;
        }
    };

    printProps(person);

    console.log('---')

    console.log(person.first_name);     // Luke
    console.log(person['first_name']);  // Luke

    person.height = '5\' 11\"';
    console.log(person['height']);      // 5' 11'

    console.log(person.fullName());     // Luke Lance
    console.log(person['fullName']);    // f () { ... }

    console.log('---')

    delete person.age;

    let myArray1 = Object.values(person);
    let myArray2 = Object.keys(person);

    console.log(person);
    console.log(myArray1);
    console.log(myArray2);

    console.log('\n');
    for (x in person) {
        console.log(x);
        console.log(person[x]);
        console.log(x + ': ' + person[x]);
        console.log('\n');
    }

    console.log('----------');
    console.log('Variable Scope');

    //var scope = 'global'; // Declare scope global
    let scope = 'global';

    function checkScope() {
        //var scope = 'local';
        let scope = 'local';
        console.log('Inside function ---> ' + scope); // local
        return scope;
    }

    console.log('Outside function ---> ' + scope); // global

    let res = checkScope();
    console.log('Return result ---> ' + res); // local

    console.log('----------');
    console.log('Variable Scope 2');

    scope2 = 'global'; // Declare scope global

    function checkScope2() {
        scope2 = 'local';           // Just changed the global
        myScope2 = 'local';         //Implicitly declare myScope as global var
        return [scope2, myScope2];    // return two values
    }

    var result2 = checkScope2();
    console.log(scope2);
    console.log(myScope2);  // global variable value has changed
    console.log(result2);   // global namespace cluttered.

    console.log('----------');
    console.log('Hoisting');

    person2 = {
        first_name: 'Luke',
        last_name: 'Lance',
        age: 23
    };

    function printProps2(p) {
        for (var o in p) {
            console.log(o + ': ' + p[o] + '\n');
        }
    }

    printProps2(person2);
    var person2;

    console.log('---');

    function printProps3(p) {
        for (var o in p) {
            console.log(o + ': ' + p[o] + '\n');
        }
    }

    printProps3(person3); // This line print nothing
    console.log(person3); // This line print undefined
    var person3 = {
        first_name: 'Luke',
        last_name: 'Lance',
        age: 23
    };

    console.log('----------');
    console.log('Type of and null');

    console.log(typeof 42); // expected output: 'number'
    console.log(typeof 'blubber'); // expected output: 'string'
    console.log(typeof true); // expected output: 'boolean'
    console.log(typeof undeclaredVariable); // expected output: 'undefined'
    console.log(typeof null);

    console.log('----------');
    console.log('Debugger');

    var url = /(\w+):\/\/([\w.]+)\/(\S*)/;
    var text = 'Visit my blog at https://www.example.com/~david';
    var result3 = text.match(url);
    if (result3 != null) {
        var fullUrl = result3[0]; // Contains 'https://www.example.com/~david'
        var protocol = result3[1]; // Contains 'https'
        //debugger; // Can also do this on Chrome ---> Inspect > Sources > click the line that want to debug > F5
        var host = result3[2]; // Contains 'www.example.com'
        var path = result3[3]; // Contains '~david'
    }
    console.log('fullUrl: ', fullUrl);
    console.log('protocol: ', protocol);
    console.log('host: ', host);
    console.log('path: ', path);

    console.log('----------');
    console.log('Custom Error');

    console.log(Error);

    console.log('---')

    const err = new Error('Custom Error made by the developer');
    console.log(err);

    console.log('---')

    var someFunc = function (a) {
        if (a === 4) {
            throw err;
        }
    }

    try {
        someFunc(4);
    } catch (e) {
        console.log('Logging Customer Error');
        console.log(e);
    }

    console.log('----------');
    console.log('Strict Mode');

    function iUseStrictMode() {
        'use strict';
        //strict = 'use strict mode'; // Uncaught ReferenceError: strict is not defined
        let strict = 'The strict mode';
        console.log('I will use ' + strict);
    }

    iUseStrictMode();

    function iDontUseStrictMode() {
        noStrict = 'The not strict mode';
        console.log('I will use ' + noStrict);
    }

    iDontUseStrictMode();

    console.log('----------');
    console.log('bin, oct, Decimal, hex');

    const bin = (10).toString(2);
    const oct = (10).toString(8);
    const hex = (10).toString(16);
    console.log(bin); // 1010
    console.log(oct); // 12
    console.log(hex); // a

    const dec0 = parseInt('1010', 2);
    const dec1 = parseInt('12', 8);
    const dec2 = parseInt('a', 16);
    console.log(dec0); // 10
    console.log(dec1); // 10
    console.log(dec2); // 10

    let bin2 = 0b0111;
    console.log(bin2); // 7
    let oct2 = 0o0051;
    console.log(oct2); // 41
    let hex2 = 0x002A;
    console.log(hex2); // 42

    console.log('----------');

}
console.log('---------- ---------- ---------- ---------- ----------');
{
    console.log('Basics JavaScript Day 2');

    console.log('----------');
    console.log('Creating a JavaScript Object');

    console.log('1. Define and create a single object by using an object literal.\n');

    // Declare a object for student and specify the default values
    let student1 = {
        id: 2244,
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        class: 'Java Developer',
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        },
        getDoubleAge: function () {
            return this.age * 2;
        }
    };

    // Add new property for score and value 90%
    student1.score = '90%';

    // Print
    console.log('Print');
    console.log(student1.firstName);
    console.log(student1.class);
    console.log(student1.score);
    console.log(student1);
    console.log(typeof student1);
    console.log(student1.prototype); // undefined (why?)
    console.log(student1.constructor);
    console.log(student1.toLocaleString());

    console.log('---');
    console.log('more on creating objects using literal');

    let empty = {};                                 // An object with no properties
    let point = {x: 0, y: 0};                       // Two properties
    let point2 = {x: point.x, y: point.y + 1};      // More complex value
    let book = {
        'main title': 'JavaScript', // Property names include spaces,
        'sub-title': 'The Definitive Guide', // and hyphens, so use string literals
        'for': 'all audiences', // for is a reserved word, so quote
        author: { // The value of this property is itself an object. Note that these property names are unquoted.
            firstName: 'David',
            lastName: 'Flanagan'
        }
    };

    console.log('2. Define and create a single object  with the keyword new.\n');

    let x1 = new Object();    // A new Object object
    let x2 = new String();    // A new String object
    let x3 = new Number();    // A new Number object
    let x4 = new Boolean();   // A new Boolean object
    let x5 = new Array();     // A new Array object
    let x6 = new RegExp();    // A new RegExp object
    let x7 = new Function();  // A new Function object
    let x8 = new Date();      // A new Date object
    // The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.

    console.log(x1);
    console.log(x2);
    console.log(x3);
    console.log(x4);
    console.log(x5);
    console.log(x6);
    console.log(x7);
    console.log(x8);

    console.log('---');

    let r = new RegExp('js');
    console.log(r);

    console.log('---');

    let person = new Object();
    person.firstName = 'John';
    person.lastName = 'Doe';
    person.age = 50;
    person.eyeColor = 'blue';
    console.log(person);

    console.log(person.age);
    console.log(person['age']);
    let x = 'age';
    console.log(person[x]);

    console.log('---');
    console.log('accessing JavaScript object\'s values and keys');
    let myObjValues = Object.values(person);
    console.log(myObjValues);
    let myObjKeys = Object.keys(person);
    console.log(myObjKeys);

    console.log('---');
    let txt = '';
    for (x in person) {
        txt += person[x]; //note: You must use person[x] in the loop. person.x will not work (Because x is a variable).
        console.log(x + ': ' + person[x]);
    }
    console.log(txt)

    console.log('---');
    console.log('deleting properties')

    delete person.age;
    //delete person['age'];
    console.log(person);

    console.log('3. Define an object constructor, and then create objects of the constructed type(using this keyword).\n');

    function Teacher(firstName, lastName, age, eyeColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.eyeColor = eyeColor;
        this.changeName = function (name) {
            this.lastName = name;
        };
    }

    let teacherA = new Teacher('Wasin', 'Sanguansuk', 34, 'black');
    let teacherB = new Teacher('Davin', 'Smith', 38, 'green');

    teacherA.birthday = '1st March';
    teacherB.birthday = '8th July';

    console.log(teacherA);
    console.log(teacherB);

    console.log('---');
    console.log('testing')

    let simObj = function (c) {
        this.city = c;
    }
    let live1 = new simObj('Brooklyn');
    let live2 = new simObj('Bronx');
    console.log(live1);
    console.log(live2);
    console.log(simObj);

    simObj.state = 'New York';

    console.log(live1.city);
    console.log(live1.state);

    console.log(live1);
    console.log(live2);
    console.log(simObj);
    console.log(simObj.state);

    console.log('---');

    console.log(simObj.prototype);
    console.log(live1.prototype);
    console.log(live2.prototype);
    console.log('prototype = ' + (live1.prototype === live2.prototype)); // true

    console.log('---');

    simObj.prototype.zip = '80203';
    console.log(simObj.zip); // undefined
    console.log(live1.zip); // 80203
    console.log(live2.zip); // 80203
    console.log(simObj);
    console.log(simObj()); // the return value is void, so printing 'undefined'

    console.log('----------');
    console.log('Prototypes');

    function Programmer(first, last, language) {
        this.firstName = first;
        this.lastName = last;
        this.programmingLanguage = language;
    }

    let simObjProgrammer = Programmer;

    console.log(simObj);
    console.log(simObjProgrammer);
    console.log(Programmer);

    console.log('---');

    simObjProgrammer.prototype.father = 'Padre';
    Programmer.prototype.mother = 'Madre';

    console.log(simObjProgrammer);
    console.log(Programmer);

    let programmerA = new Programmer('aaa', 'AAA', 'Java');
    let programmerB = new Programmer('bbb', 'BBB', 'JavaScript');

    console.log(programmerA);
    console.log(programmerB);
    console.log(programmerB.father);
    console.log(programmerB.mother);

    Programmer.prototype.grandmother = 'GrandMadre';

    console.log(programmerB.grandmother);

    programmerA.grandmother = 'Jane';
    programmerB.mother = 'Nancy';

    console.log('A');
    console.log(programmerA.father);
    console.log(programmerA.mother);
    console.log(programmerA.grandmother);
    console.log('B');
    console.log(programmerB.father);
    console.log(programmerB.mother);
    console.log(programmerB.grandmother);

    let programmerC = new Programmer('ccc', 'CCC', 'C++');

    console.log('C');
    console.log(programmerC.father);
    console.log(programmerC.mother);
    console.log(programmerC.grandmother);

    console.log('----------');
    console.log('Testing');

    console.log(live1.prototype); // undefined
    console.log(programmerA.prototype); // undefined
    console.log(live1.prototype === programmerA.prototype);

    console.log('----------');
    console.log('Array');
    console.log('JavaScript arrays are dynamic: they grow or shrink as needed and there is no need to declare a fixed size for the array when you create it or to reallocate it when the size changes.\n');

    let emptyArray = [];
    let array1 = [2, 5, 2, 7, 9];
    let mixArray = [1.1, true, 'A'];

    console.log(emptyArray);
    console.log(array1);
    console.log(mixArray);

    let mix_of_types = [[{key1: 'value11'}, {key2: 'value12'}], [{key1: 'value21'}, {key2: 'value22'}]];
    console.log(mix_of_types);
    console.log(mix_of_types[0][1]['key2']);

    console.log('Arrays can have undefined elements')
    let array2 = [1, , 3];
    console.log(array2);
    console.log(array2[1]);

    console.log('---');
    console.log('create array using Array Constructor');

    let a = new Array(); //same as var a = [];
    let b = new Array(10); // array of size 10, all elements initialized to undefined
    let c = new Array(5, 4, 3, 2, 1, 'testing, testing');

    console.log(a);
    console.log(b);
    console.log(c);

    console.log('---');

    console.log(c[c[3]]); // c[3] is 2, and c[2] is 3

    console.log('---');
    console.log('changing array length');

    c.length = 20;
    console.log(c.length);
    console.log(c);
    console.log(c[15]);
    c[22] = 50;
    console.log(c[22]);
    console.log(c); // now the length is 23

    console.log('---');

    c.push('elementIndex23');
    c.push('elementIndex24');
    console.log(c); // now the length is 25

    console.log('---');
    console.log('deleting Array elements');

    delete c[4];
    console.log(c);

    let tmp = c.pop();
    console.log(c);
    console.log(tmp);

    let tmp2 = c.shift();
    console.log(c);
    console.log(tmp2);

    console.log('---');
    console.log('iterating Array');

    for (let i = 0; i < c.length; i++) {
        console.log(c[i]);
    }

    console.log('---');
    console.log('JavaScript Array Methods');

    // split(): which creates an array by breaking a string into tokens.
    // length(): Returns the number of elements in an array
    // reverse(): Returns the array in reverse order
    // sort(): Sorts the elements of an array in specific order
    // join(): Concatenates the array elements to a string
    // toString(): Returns the string representation of an array
    // pop(): Removes and returns the last array element
    // push(); Adds elements to end of array & returns its length
    // splice(): Returns an array by changing its elements in place
    // slice(): Returns a shallow copy of a portion of an array

    console.log('----------');
    console.log('Testing Array');

    const arr1 = ['a', 'b', 'c'];
    const arr2 = ['b', 'c', 'a'];
    console.log(arr1);
    console.log(arr2);

    console.log(
        arr1.sort() === arr1,       // true
        arr2.sort() == arr2,        // true
        arr1.sort() == arr2.sort(), // false ---> different object
        arr1.sort() === arr2.sort() // false
    );

    console.log('----------');
    console.log('more Array example');

    const items = [
        {name: 'Bike', price: 100},
        {name: 'TV', price: 200},
        {name: 'Album', price: 10},
        {name: 'Book', price: 5},
        {name: 'Phone', price: 500},
        {name: 'Computer', price: 1000},
        {name: 'Keyboard', price: 25}
    ]

    // filter()
    console.log('filter()');
    const filteredItems = items.filter((item) => {
        return item.price <= 100;
    });
    console.log(filteredItems);

    // map()
    console.log('map()');
    const itemNames = items.map((item) => {
        return item.name;
    });
    console.log(itemNames);

    // find()
    console.log('find()');
    const foundItem = items.find((item) => {
        return item.name === 'Book';
    });
    console.log(foundItem);

    // forEach()
    console.log('forEach()');
    items.forEach((item) => {
        console.log(item.name);
    });

    // some()
    console.log('some()');
    const hasInexpensiveItems = items.some((item) => {
        return item.price <= 100;
    });
    console.log(hasInexpensiveItems);

    // every()
    console.log('every()');
    const isAllInexpensiveItems = items.every((item) => {
        return item.price <= 100;
    });
    console.log(isAllInexpensiveItems);

    // reduce()
    console.log('reduce()');
    const total = items.reduce((currentTotal, item) => {
        return item.price + currentTotal;
    }, 0);
    console.log(total);

    // include()
    console.log('include()');
    const items2 = [1, 2, 3, 4, 5];
    const includesTwo = items2.includes(2);
    console.log(includesTwo);
    const includesSix = items2.includes(6);
    console.log(includesSix);

    console.log('----------');
    console.log('Date Object');

    let d1 = new Date();
    console.log(d1);

    let d2 = new Date(2021, 11, 24, 10, 33, 30, 0); // e.g of new Date(year, month, ...)
    // Careful: month is from 0-11
    console.log(d2);

    // December is Central Standard Time
    let d3a = new Date(2021, 11, 24); // e.g of new Date(year, month, ...)
    console.log(d3a);

    // October is Central Daylight Time
    let d3b = new Date(2021, 9, 24); // e.g of new Date(year, month, ...)
    console.log(d3b);

    let d4 = new Date('October 13, 2021 11:13:00'); // e.g of new Date(dateString)
    console.log(d4);

    // 86400 seconds
    // 1440 minutes
    // 24 hours
    let d5a = new Date(86400000);  // new Date(milliseconds)
    console.log(d5a);

    let d5b = new Date(0);  // new Date(milliseconds)
    console.log(d5b);

    console.log('----------');
    console.log('Testing Date Objects');

    let first = new Date('January 1, 2019 04:30:00');
    let second = new Date('2019-01-01T04:30:00');

    console.log(first);
    console.log(second);

    console.log(first === second); // false ---> different object

    console.log(first.getTime() === second.getTime()); // true

    console.log('----------');
    console.log('Number Object');

    let strNum1 = '23';
    let num1 = Number(strNum1);
    console.log(num1);

    let strNum2 = 23;
    let num2 = Number(strNum2);
    console.log(num2);

    console.log('----------');
    console.log('Math Object');

    console.log(Math.PI);
    console.log(Math.round(4.6));
    console.log(Math.round(4.4));
    console.log(Math.pow(8, 2));
    console.log(Math.sqrt(64));

    console.log('---');

    //let input = prompt('Enter a range min(inclusive) and max(exclusive): ', '5 10');
    //let range = input.split(' ');
    //let guess = (Math.floor(Math.random() * (Number(range[1]) - Number(range[0])) + Number(range[0])));
    //console.log(guess);
    //let stopper = 0;
    ////let userGuess = prompt('Guess a number between ${range[0]} and ${range[1]}');
    //let userGuess = prompt('Guess a number between ' + range[0] + ' and ' + range[1]);
    //while (stopper < 2) {
    //    stopper++;
    //    if (guess == userGuess) {
    //        alert('You got it: ' + userGuess);
    //        break;
    //    }
    //    userGuess = prompt('Keep guessing a number between ${range[0]} and ${range[1]}');
    //}
    //if (guess != userGuess) {
    //    alert('Sorry, the answer was ' + guess);
    //}

    console.log('----------');
    console.log('JavaScript Data Types');

    // Boolean type
    // Null type
    // Undefined type
    // Number type
    // BigInt type
    // String type
    // Symbol type

    console.log('----------');

}
console.log('---------- ---------- ---------- ---------- ----------');
{
    console.log('Basics JavaScript Day 3');

    console.log('----------');
    console.log('');

    //

    console.log('----------');

}
console.log('---------- ---------- ---------- ---------- ----------');
{
    console.log('KBA review');

    // how to print in the same line
    // JQuery
    // Login validation RegEx pattern

    console.log('Message a' - 'Message b'); // NaN

    numbers = '123456'; // this is 0 base
    for (var i = 0; i < 6; i++) {
        if (i == 3) {
            continue;
        }
        console.log(numbers[i]);
    }

    a = 8 + 8;
    console.log(a);
    a = 8 + '8';
    console.log(a);

    var a = numbers.indexOf(3);
    console.log(a);
    var a = numbers.substring(1, 3);
    console.log(a);

    var a = '4';
    var b = 5;

    var y = a * b;
    console.log('y = ' + y);
    var x = eval('a * b');
    console.log('x = ' + x);

    var m = 5;
    var m = 6;
    console.log(m);

    let n = 5;
    //let n = 6;
    n = 6;
    console.log(n);

    console.log('----------');

    // YYYY-MM-DD
    var firstDate = new Date('January 1, 2019 04:30:00');
    var secondDate = new Date('2019-01-01T04:30:00');
    var thirdDate = new Date('2019-01-01T04:30:00');

    console.log(firstDate);
    console.log(secondDate);
    console.log(thirdDate);

    console.log('---');

    console.log(firstDate == secondDate);
    console.log(firstDate === secondDate);
    console.log(firstDate === thirdDate);

    console.log('---');

    console.log(firstDate);
    console.log(firstDate.getTime());
    console.log(firstDate.getMilliseconds());
    console.log(firstDate.getHours());

    console.log('---');

    console.log(+firstDate === +secondDate);
    console.log(firstDate.getTime() === secondDate.getTime());
    console.log(firstDate.getMilliseconds() === secondDate.getMilliseconds());
    console.log(firstDate.getHours() === secondDate.getHours());

    console.log('----------');

    console.log('Regular expressions');

    var data = '4,5 ,   6 , 7, 8 + 5 ,   aa9'.split(/\s*,\s*/).reverse();
    console.log(data);
    console.log(data[0]);
    console.log(data[0][0]);

    console.log(typeof data[0][0]);
    console.log(data[0][0] + data[0][2]);

    console.log('----------');

    let sum2 = 0;
    const numbers2 = [65, 44, 12, 4];
    numbers2.forEach(myFunction);

    function myFunction(item) {
        sum2 += item;
    }

    console.log('total = ' + sum2);

    console.log('---');

    let sum3 = 0;
    const numbers3 = [65, 44, 12, 4];
    numbers3.forEach(function (item) {
        sum3 += item;
    });

    console.log('total = ' + sum3);

    console.log('---');

    let sum4 = 0;
    const numbers4 = [65, 44, 12, 4];
    numbers4.forEach((num) => {
        sum4 += num;
    });

    console.log('total = ' + sum4);

    console.log('----------');

    var arr = ['000.2+0.5', '4+5', '5+6', '6+7', '1.0+6', '-5+-2', 'p+q'];
    console.log(arr);

    for (var i = 0; i < arr.length; i++) {
        try {
            console.log(eval(arr[i]));
        } catch (e) {
            console.log('Invalid: ' + e);
        }
    }

    console.log('----------');
    {
        var arr = [1, 2, 3, 4, 5, 6];

        var sp = arr.splice(2);

        console.log(arr);
        console.log(sp);
    }
    console.log('----------');
    {
        let sum = 0;
        const numbers = [65, 44, 12, 4];
    }
    console.log('----------');
    {
        var person = {
            firstName: 'John',
        };
    }
    console.log('----------');
    {
        var i = 3;
        var x = function () {
            if (i != 5) {
                x = true;
                return x;
            } else {
                x = false;
                return x;
            }
            //return x;
        };

        console.log(x);
    }
}