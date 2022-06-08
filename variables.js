//variables
//variables are used to "store" the "data"
//Ex. string, number, boolean, arrays, objects,....
//we can declare variables in 3 ways
//1) var   2) let    3) const
//let and const introduced in "ES6"
//variables declaration should contain a-z, A-Z, 0-9, $ and _
//variables should not start with digits(numbers)
/*
    var/let/const variablename = value;

    Ex.
        var msg = "welcome to javascript";
*/

//string
//collection of characters called as string
//we will declare string in 3 ways
//1) ""(double quotes)
//2) ''(single quotes)
//3) ``(backtick operator)
//``(backtick operator) introduced in "ES6"
//``(backtick operator) called as "template literal"
//``(backtick operator) used to declare the "multiline string(paragraphs)"

//var 123abc;
//An identifier or keyword cannot immediately follow a numeric literal.

var abc123;
var _123abc;
var $123;
//var #123;
//An identifier or keyword cannot immediately follow a numeric literal.

var subject = "JavaScript";
var welcome_msg = `Welcome To ${subject}`;
console.log(welcome_msg);  //Welcome To JavaScript


var table_name = "employees";
var sal = 50000;
var sql_query1 = `select * from ${table_name} where esal>${sal}`;
console.log(sql_query1);
//select * from employees where esal>50000

var user_name = "sathya";
var user_password = "sathya123";
var login_query = `select * from ${table_name} where uname='${user_name}' and upwd='${user_password}'`;
console.log(login_query);
//select * from employees where uname='sathya' and upwd='sathya123'


var frontend = "ui";
var backend = "dotnet";
var database = "sqlserver";
var dotnet_fullstack = `
            dotnet fullstack means
            **********************
            Frontend ==> ${frontend}
            Backend  ==> ${backend}
            Database ==> ${database}
            ************************
`;
console.log(dotnet_fullstack);

//number
//five types of numbers are possible in javascript
//1) decimal
//2) double
//3) hexadecimal
//4) octal
//5) binary
//hexadecimal numbers prefix with "0x"
//octal numbers prefix with "0o"
//binary numbers prefix with "0b"
var decimal_number = 100;
var double_number = 100.12345;
var hexadecimal_number = 0x123ABC;
var octal_number = 0o123;
var binary_number = 0b1010;
console.log(decimal_number,
            double_number,
            hexadecimal_number,
            octal_number,
            binary_number);
//100 100.12345 1194684 83 10



//boolean
//boolean will allow two values
//1) true     2) false
//true --- 1
//false --- 0
var flag = true;
var flag1 = false;
var flag2 = 2>1;
var flag3 = 1>2;
console.log(flag,
            flag1,
            flag2,
            flag3);     //true false true false
10 == "10" ? console.log("True") : console.log("False");
//True

//undefined
var x;
console.log(x);                 //undefined

//null
x=null;
console.log(x);                 //null


//bigint
//used to represent the "large" numbers
// > 2^53 - 1
//bigint numbers suffix with "n"
var big_number = 123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789n;
console.log(big_number);


//Symbol
var secured = Symbol(1000000);
console.log(secured);
//Symbol(1000000)


/*
    for(let i=0;i<5;i++){

    }
    console.log(i);
    //var : 5      let : ReferenceError: i is not defined
    //var keyword raised the global polluting issue
    //let keyword overcomes the global polluting issue
*/

/*
    let data = 100;
    {
        let data = 200;
    }
    console.log(data);
    //var : 200   let : 100
*/

/*
    console.log(data);
    let data = 100;
    //var : undefined
    //let : ReferenceError: Cannot access 'data' before initialization
    //variable hoisting issue raised because of var keyword
    //we can overcome variable hoisting with let keyword
*/

/*
    let data = 100;
    let data = 200;
    console.log(data);
    //var : 200    let : SyntaxError: Identifier 'data' has already been declared
    //var keyword allows the duplicate variables
    //let keyword wont allows the duplicate variables
*/

/*
            var                     let
    var keyword introduced    let keyword introduced in
    in ES1                    ES6

    global polluting issue    we can overcome global 
    raised in var keyword     polluting issue by using
                              let keyword

    variable hoisting issue   we can overcome variable
    raised in var keyword     hoisting by using let

    duplicate variables       it wont allow duplicate
    allowed                   variables

    var keyword called        let keyword called as 
    as global member          block member
*/

//const
//const is the "keyword"
//const keyword introduced in "ES6"
//const keyword used to declare the "variables"
//"reinitlization" not possible with "const" keyword
//const data = 100;
//data = 200;
//TypeError: Assignment to constant variable.

//const str = "Hello";
//str = "Welcome";
//TypeError: Assignment to constant variable.

const arr = [10,20,30,40,50];
//arr = [];
//TypeError: Assignment to constant variable.
//arr = [100,200,300,400,500];
//TypeError: Assignment to constant variable.
arr[0] = 100;
arr[4] = 500;
console.log(arr);  //[ 100, 20, 30, 40, 500 ]


const arr1 = ["Hello_1","Hello_2","Hello_3","Hello_4","Hello_5"];
//arr1 = [];  //TypeError: Assignment to constant variable.

//arr1 = ["Welcome_1","Welcome_2","Welcome_3","Welcome_4","Welcome_5"];
//TypeError: Assignment to constant variable.

arr1[0] = "Welcome_1";
arr1[4] = "Welcome_5";
arr1[5] = "Welcome_6";
console.log(arr1);
//["Welcome_1","Hello_2","Hello_3","Hello_4","Welcome_5","Welcome_6"]


//JSON
//Java Script Object Notation
//JSON also called as JavaScript Objects
//Syntax
//Objects --- {}
//Ararys  --- []
//Data    --- key & value pairs
//key & value separated by using ":"
//key & value pairs separated by using ","

let obj = {
    "key1" : "Hello_1",
    "key2" : "Hello_2",
    "key3" : "Hello_3"
};
console.log(
    obj.key1,
    obj.key2,
    obj.key3
);
//Hello_1 Hello_2 Hello_3


let obj1 = {
    "sub_one" : "ReactJS",
    "sub_two" : "NodeJS",
    "sub_three" : "MongoDB"
};
console.log(obj1.sub_one,obj1.sub_two,obj1.sub_three);
//ReactJS NodeJS MongoDB


const obj2 = {
    "key1" : "Hello_1",
    "key2" : "Hello_2",
    "key3" : "Hello_3"
};
//obj2 = {};  //TypeError

//obj2 = {"key1":"Welcome_1","key2":"Welcome_2","key3":"Welcome_3"};  //TypeError

obj2.key1 = "Welcome_1";
obj2.key2 = "Welcome_2";
obj2.key3 = "Welcome_3";
console.log(obj2);
//{ key1: 'Welcome_1', key2: 'Welcome_2', key3: 'Welcome_3' }














































































































































