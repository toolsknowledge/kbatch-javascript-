console.log("welcome to javascript");       
//welcome to javascript

console.table(["Angular","ReactJS","NodeJS","VueJS","MongoDB"]);
/*
        ┌─────────┬───────────┐
        │ (index) │  Values   │
        ├─────────┼───────────┤
        │    0    │ 'Angular' │
        │    1    │ 'ReactJS' │
        │    2    │ 'NodeJS'  │
        │    3    │  'VueJS'  │
        │    4    │ 'MongoDB' │
        └─────────┴───────────┘
*/


console.log( 10+10 );               //20
console.log( 10+"10" );             //1010
console.log(10+parseInt("10"));     //20
console.log(10 + +"10");            //20
console.log(10+10+ +"10"+ +"20");   //50
//Note : execution happens from left to right
console.log(10-"10");               //0
console.log("5"-10);                //-5
console.log(10*"10");               //100
console.log(10/"10");               //1
console.log(10/"0");                //Infinity
console.log(10/"A");                //NaN
//true --- 1
//false --- 0
console.log(true+true);             //2
console.log(1+true);                //2
console.log(1+"true");              //1true
console.log(true/false);            //Infinity

//=    (assignment)
//==   (value comparision)
//===  (value with datatype comparision)
console.log( 10 == "10" );          //true
console.log( 1 === "1" );           //false
console.log( 10 == "ten" );         //false
console.log( 10 === "ten" );        //false
console.log( 0.1+0.2 == 0.3 );      //false
console.log( 0.1+0.2 === 0.3 );     //false
console.log( 0.1+0.2 );             //0.30000000000000004


//BODMAS
//B - Bracket
//O - Of
//D - Division
//M - Multiplication
//A - Addition
//S - Subtraction
console.log( 10+5/10-5 );       //5.5
console.log( (10+5)/(10-5) );   //3

//&  (AND) (both are true then result is true)
//|  (OR)  (if atleast one is true then result is true)
//^  (XOR) (if both are opposite then result is true)
console.log( 1 & 1 );   //1
console.log( 1 & 0 );   //0
console.log( 0 & 1 );   //0
console.log( 0 & 0 );   //0
console.log( 1<2 & 2>1 );   //1


console.log( 1 | 1 );       //1
console.log( 1 | 0 );       //1
console.log( 0 | 1 );       //1
console.log( 0 | 0 );       //0
console.log( 1<2 | 2>1 );   //1

console.log( 1 ^ 1 );    //0
console.log( 1 ^ 0 );    //1
console.log( 0 ^ 1 );    //1
console.log( 0 ^ 0 );    //0
console.log( 1<2 ^ 2>1 );//0   







































