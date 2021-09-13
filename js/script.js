console.log("---------- ---------- ---------- ---------- ----------");
{
    //document.write("This is Internal JavaScript Example.!!!");

    console.log("##### ---------- #####");
    console.log("Testing");

    var arr = ["9+1", "-5.0+-2.0", "0000.2+0.5",
        "3.0+2", "b+c"];

    for (var i = 0; i < arr.length; i++) {
        try {
            console.log(eval(arr[i]));
        } catch (e) {
            console.log("Invalid");
        }
    }

    console.log("----------");

    console.log("Hello" + " World");

    console.log("----------");

    var date = new Date("Thu Jan 29 2009 17:31:44");
    var now = new Date("2019-01-24 18:31:44");

    console.log(now.getMonth() === date.getMonth());

    console.log("----------");

    a = 8 + "8";
    console.log(a);

    console.log("----------");

    console.log("Hello" - " World");

    console.log("----------");

    let i2 = 4;

    console.log(i2!=5);

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

    console.log("----------");

    //let name = "Per Scholas";   // Error
    //let name = "JavaScript";    // Error
    //console.log(name);

    console.log("----------");

    //alert("Hello JS!");     // Correct
    //alertbox("Hello JS!");  // Uncaught ReferenceError: alertbox is not defined
    //msg("Hello JS!");       // Uncaught ReferenceError: msg is not defined
    //msgbox("Hello JS!");    // Uncaught ReferenceError: msgbox is not defined

    console.log("----------");

    var a = [9, 8, 7, 6, 5, 4];
    console.log(a.splice(3));
    console.log(a);

    console.log("----------");

    var x = 5;
    var y = 6;
    var res = eval("x*y");
    console.log(res);

    console.log("----------");

    var a = "Per Scholas";
    var x = a.lastIndexOf("l");
    console.log(x);

    console.log("----------");

    var a = "Per Scholas";
    var result = a.substring(4, 5);
    console.log(result);

    console.log("----------");

    var a = [4, 8, 5, 7, 6, 9];
    console.log(a.slice(3).sort());
    console.log(a);

    console.log("----------");

    var data = "1+2, 2+3, 3+4, 4+5, 5 + 1 ".split(/\s*,\s*/).reverse();
    console.log(data[1][0]+data[1][2]);

    console.log("----------");

    var arr = [1, 2, 3, 4, 5, ];
    console.log(arr);
    arr.forEach(function(value, index, array) {
        array[index] = value * value
    });
    console.log(arr);
    console.log(arr.reverse().filter(function(x) {
        return x % 5 // if x % 5 equal 0, it will return false.
    }));
    console.log(arr);

    console.log("----------");

    var strArr = ["a", "b", "c", "d", "e"];
    console.log(strArr);
    console.log(strArr.filter(function (x) {
        if (x == "c") {
            return true;
        } else {
            return false;
        }
    }));
    console.log(strArr);

    console.log("----------");

    numbers = "12345";
    for (var i = 0; i < 5; i++) {
        if (numbers[i] == 3) {
            break;
        }
        console.log(numbers[i]);
    }

    console.log("----------");

    var name = "Per Scholas";
    var name = "JavaScript";
    console.log(name);

    console.log("----------");

    numbers = "12345";
    for (var i = 0; i < 5; i++) {
        if (numbers[i] == 3) {
            continue;
        }
        console.log(numbers[i]);
    }

    console.log("----------");

    var person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    };
    for (var i in person) {
        console.log(i);
    }

    console.log("##### ---------- #####");
}
console.log("---------- ---------- ---------- ---------- ----------");
{
    console.log("Basics JavaScript Day 1.a");

    console.log("----------");
    console.log("Wrappers")

    let fooWrapper = new Boolean(true);
    console.log(fooWrapper);
    let foo = Boolean(true);
    console.log(foo);

    let foo2Wrapper = new String("Hello World!");
    console.log(foo2Wrapper);
    let foo2 = String("Hello World!");
    console.log(foo2);

    let foo3Wrapper = new Number("ddd");
    console.log(foo3Wrapper);
    foo3Wrapper = 5;
    console.log(foo3Wrapper);
    let foo3 = Number("ddd");
    console.log(foo3); // NaN
    foo3 = 5;
    console.log(foo3);

    console.log("----------");
    console.log("Operators");

    console.log(5 + 6);

    console.log(3 > 2 && 5 > 3);

    console.log((5 <= 3 || 6 > 0) && (20 % 3 == 2 && 88 / 2 > 30));

    console.log("----------");
    console.log("var, let, and const");

    let greeting = "say Hi";
    if (true) {
        console.log(greeting);
        //let greeting ="say Hello"; // This will give Error
        //console.log(greeting);
    }
    console.log(greeting);

    // Declaring a const object
    const object1 = {
        name: "Rock",
        age: 10
    }

    //// We cannot do this
    //object1 = {
    //    number: "five"
    //}

    // We can do this
    object1.name = "Paper";
    console.log(object1.name);

    console.log("----------");
    console.log("== and ===");

    console.log(3 == "3");
    console.log(3 === "3");

    console.log("----------");
    console.log("Control Statements - if and switch");

    // if statement is the same as Java
    // switch is a little different

    let x = 2;
    switch (x) {
        case 1:
            console.log("case 1 here");
            break;
        case 2:
            console.log("case 2 here");
            break;
        case 3:
            console.log("case 3 here");
            break;
        default:
            console.log("not in the 3 cases");
            break;
    }

    console.log("----------");
    console.log("do while loop");

    let j = 1;
    do {
        let value = j * 2;
        j++;
        console.log(value);
    } while (j <= 5);

    console.log("----------");
    console.log("Simple algorithm");

    let userInput = "";
    let operand = "";
    let nums = "";
    const SEPARATOR = "|";
    //userInput = prompt("Enter an Arithmetic Expression: ");
    //console.log(userInput);
    userInput = "34+55+72";
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] >= "0" && userInput[i] <= "9") {
            console.log("digit here");
            while (i < userInput.length && userInput[i] >= "0" && userInput[i] <= 9) {
                nums += userInput[i];
                i++;
            }
            nums += SEPARATOR;
        }
        if (userInput[i] == "+" || userInput[i] == "-" || userInput[i] == "^") {
            console.log("operand here");
            operand += userInput[i] + SEPARATOR;
        }
    }
    console.log("numbers", nums);
    console.log("operands", operand);
}
console.log("---------- ---------- ---------- ---------- ----------");
{
    console.log("Basics JavaScript Day 1.b");

    console.log("----------");
    console.log("Function");

    function defaultMessage() {
        console.log("Default");
    }

    function customMessage(custom, times) {
        for (let i = 0; i < times; i++) {
            console.log(i, custom);
        }
    }

    customMessage("useful message", 5);

    function add(a, b) {
        let c = a + b;
        return c;
    }

    let result = add(13, 5);
    console.log(result);

    console.log("----------");
    console.log("Function with object");

    function printProps(p) {
        console.log(p.friends.one);
        for (let key in p) {
            let value = p[key];
            console.log(key);
            console.log(value);
            console.log(key + ": " + value + "\n");
        }
    }

    let person = {
        first_name: "Luke",
        last_name: "Lance",
        age: 23,
        address: "1950 N Logan",
        friends: {
            one: "a",
            two: "b"
        },
        fullName: function () {
            return this.first_name + " " + this.last_name;
        }
    };

    printProps(person);

    console.log("----------");
    console.log("Variable Scope");

    //var scope = "global"; // Declare scope global
    let scope = "global";

    function checkScope() {
        //var scope = "local";
        let scope = "local";
        console.log("Inside function ---> " + scope); // local
        return scope;
    }

    console.log("Outside function ---> " + scope); // global

    let res = checkScope();
    console.log("Return result ---> " + res); // local

    console.log("----------");
    console.log("Variable Scope 2");

    scope2 = "global"; // Declare scope global

    function checkScope2() {
        scope2 = "local";           // Just changed the global
        myScope2 = "local";         //Implicitly declare myScope as global var
        return [scope2, myScope2];    // return two values
    }

    var result2 = checkScope2();
    console.log(scope2);
    console.log(myScope2);  // global variable value has changed
    console.log(result2);   // global namespace cluttered.

    console.log("----------");
    console.log("Hoisting");

    person2 = {
        first_name: "Luke",
        last_name: "Lance",
        age: 23
    };
    function printProps2(p) {
        for (var o in p) {
            console.log(o + ": " + p[o] + "\n");
        }
    }
    printProps2(person2);
    var person2;

    console.log("---");

    function printProps3(p) {
        for (var o in p) {
            console.log(o + ": " + p[o] + "\n");
        }
    }
    printProps3(person3); // This line print nothing
    console.log(person3); // This line print undefined
    var person3 = {
        first_name: "Luke",
        last_name: "Lance",
        age: 23
    };

    console.log("----------");
    console.log("Type of and null");

    console.log(typeof 42); // expected output: "number"
    console.log(typeof "blubber"); // expected output: "string"
    console.log(typeof true); // expected output: "boolean"
    console.log(typeof undeclaredVariable); // expected output: "undefined"
    console.log(typeof null);

    console.log("----------");
    console.log("Debugger");

    var url = /(\w+):\/\/([\w.]+)\/(\S*)/;
    var text = "Visit my blog at https://www.example.com/~david";
    var result3 = text.match(url);
    if (result3 != null) {
        var fullUrl = result3[0]; // Contains "https://www.example.com/~david"
        var protocol = result3[1]; // Contains "https"
        //debugger; // Can also do this on Chrome ---> Inspect > Sources > click the line that want to debug > F5
        var host = result3[2]; // Contains "www.example.com"
        var path = result3[3]; // Contains "~david"
    }
    console.log("fullUrl: ", fullUrl);
    console.log("protocol: ", protocol);
    console.log("host: ", host);
    console.log("path: ", path);

    console.log("----------");
    console.log("Custom Error");

    console.log(Error);

    console.log("---")

    const err = new Error("Custom Error made by the developer");
    console.log(err);

    console.log("---")

    var someFunc = function (a) {
        if (a === 4) {
            throw err;
        }
    }

    try {
        someFunc(4);
    } catch (e) {
        console.log("Logging Customer Error");
        console.log(e);
    }



    // console.log(person.first_name);
    // console.log(person["first_name"]);
    //
    // person.height = "5' 11\"";
    // console.log(person["height"]);
    //
    // console.log("----------")
    //
    // var simObj = function (c) {
    //     this.city = c;
    // }
    //
    // var live1 = new simObj("Brooklyn");
    // var live2 = new simObj("Bronx");
    //
    // //co
}
console.log("---------- ---------- ---------- ---------- ----------");
{
    console.log("KBA review");

    // Do we even have to declare the type of variable
    // how to print in the same line
    // how document.write() work?
    // JQuery
    // map vs forEach
    // Array slice() vs splice()
    // What is prototype
    // Login validation RegEx pattern

    console.log("Message a" - "Message b"); // NaN

    numbers = "123456"; // this is 0 base
    for (var i = 0; i < 6; i++) {
        if (i == 3) {
            continue;
        }
        console.log(numbers[i]);
    }

    a = 8 + 8;
    console.log(a);
    a = 8 + "8";
    console.log(a);

    var a = numbers.indexOf(3);
    console.log(a);
    var a = numbers.substring(1, 3);
    console.log(a);

    var a = "4";
    var b = 5;

    var y = a * b;
    console.log("y = " + y);
    var x = eval("a * b");
    console.log("x = " + x);

    var m = 5;
    var m = 6;
    console.log(m);

    let n = 5;
    //let n = 6;
    n = 6;
    console.log(n);

    console.log("----------");

    // YYYY-MM-DD
    var firstDate = new Date("January 1, 2019 04:30:00");
    var secondDate = new Date("2019-01-01T04:30:00");
    var thirdDate = new Date("2019-01-01T04:30:00");

    console.log(firstDate);
    console.log(secondDate);
    console.log(thirdDate);

    console.log("---");

    console.log(firstDate == secondDate);
    console.log(firstDate === secondDate);
    console.log(firstDate === thirdDate);

    console.log("---");

    console.log(firstDate);
    console.log(firstDate.getTime());
    console.log(firstDate.getMilliseconds());
    console.log(firstDate.getHours());

    console.log("---");

    console.log(+firstDate === +secondDate);
    console.log(firstDate.getTime() === secondDate.getTime());
    console.log(firstDate.getMilliseconds() === secondDate.getMilliseconds());
    console.log(firstDate.getHours() === secondDate.getHours());

    console.log("----------");

    console.log("Regular expressions");

    var data = "4,5 ,   6 , 7, 8 + 5 ,   aa9".split(/\s*,\s*/).reverse();
    console.log(data);
    console.log(data[0]);
    console.log(data[0][0]);

    console.log(typeof data[0][0]);
    console.log(data[0][0] + data[0][2]);

    console.log("----------");

    let sum2 = 0;
    const numbers2 = [65, 44, 12, 4];
    numbers2.forEach(myFunction);

    function myFunction(item) {
        sum2 += item;
    }

    console.log("total = " + sum2);

    console.log("---");

    let sum3 = 0;
    const numbers3 = [65, 44, 12, 4];
    numbers3.forEach(function (item) {
        sum3 += item;
    });

    console.log("total = " + sum3);

    console.log("---");

    let sum4 = 0;
    const numbers4 = [65, 44, 12, 4];
    numbers4.forEach((num) => {
        sum4 += num;
    });

    console.log("total = " + sum4);

    console.log("----------");

    var arr = ["000.2+0.5", "4+5", "5+6", "6+7", "1.0+6", "-5+-2", "p+q"];
    console.log(arr);

    for (var i = 0; i < arr.length; i++) {
        try {
            console.log(eval(arr[i]));
        } catch (e) {
            console.log("Invalid: " + e);
        }
    }
}
console.log("----------");
{
    var arr = [1, 2, 3, 4, 5, 6];

    var sp = arr.splice(2);

    console.log(arr);
    console.log(sp);
}
console.log("----------");
{
    let sum = 0;
    const numbers = [65, 44, 12, 4];
}
console.log("----------");
{
    var person = {
        firstName: "John",
    };
}
console.log("----------");
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
