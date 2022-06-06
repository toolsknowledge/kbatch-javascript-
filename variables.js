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


//null








































































