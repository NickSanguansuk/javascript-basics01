console.log("---------- ---------- ---------- ---------- ----------");
{
    //document.write("This is Internal JavaScript Example.!!!");
}
console.log("---------- ---------- ---------- ---------- ----------");
{
    let foo = new Boolean(true);
    console.log(foo);

    console.log(5 + 6);

    // function printProps(p) {
    //     console.log(p.friends.one);
    //     for (var key in p) {
    //         var value = p[key];
    //         console.log(key + ": " + value + "\n");
    //     }
    // }
    //
    // var person = {
    //     first_name: "Luke",
    //     last_name: "Lance",
    //     age: 23,
    //     address: "1950 N Logan",
    //     friends: {
    //         one: "a",
    //         two: "b"
    //     },
    //     fullName: function() {
    //         return this.first_name + " " + this.last_name;
    //     }
    // };
    //
    // printProps(person);
    //
    // console.log("----------")
    //
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

    // == vs ===
    // var vs let vs const
    // Should we use var?
    // Do we even have to declare the type of variable
    // how to print in the same line
    // how document.write() work?
    // JQuery
    // map vs forEach
    // Array slice() vs splice()
    // What is prototype

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
