/*
  Data types
  Number-
  String-
  Boolean-
  Null-
  Undefined-
  Symbol-ES2015
  BigInt-ES2020
*/

const age = 15;
if(age >= 18){
  console.log('Sara can drive');
}else{
  const yearLeft = 18-age;
  console.log(`Sara is too young. Wait another ${yearLeft} years`);
}

const birthYear = 2010;

let century;
if(birthYear <=2000){
century = 20;
}else{
century = 21;
}
console.log(century);

//------Type conversion 

const inputYear = '1999';
console.log(Number(inputYear), inputYear);
console.log(inputYear+18);
console.log(Number(inputYear)+18);

console.log(Number('Shabnoor'));
console.log(typeof NaN);
console.log(String(23), 23);

// type coersion
console.log('I am ' + 23 +' years old.' );
console.log(23 - '10' - 3);//automatic type coersion
console.log('23' + 10 + 3);

let n = '1'+1;// string- 11
n = n-1;//automatically covert to number 10
console.log(n);//10

console.log(2+3+4+'5');//95
console.log('10'-'4'-'3'-2+'5');
//10-4=9----> 6-3=3-----> 3-2=1----> converted to string and then 15 output


//5 falsy values: 0, '' , undefined, null, NaN

/*
Falsy values are values that are considered false when evaluated in a boolean context, such as in an if statement. They include false, null, undefined, 0, -0, NaN, and "" (an empty string). Any other value that is not explicitly falsy is considered truthy.
*/

/*
Truthy values are values that are considered true when evaluated in a boolean context, such as in an if statement. They include `true`, non-empty strings, non-zero numbers, non-empty objects (including arrays and functions), and the value `Infinity`. Any other value that is not explicitly truthy is considered falsy.
*/
console.log(Boolean(0));//false
console.log(Boolean(undefined));//false
console.log(Boolean('Shabnoor'));//true
console.log(Boolean({}));//true
console.log(Boolean(''));//false

//automatic coesion happen in if-else conditional statment
const money = 0;//0 is number a flasy value 
if (money) { // js will try to covert to boolean according to falsy & thruthy value 
console.log('Dont spend money');//0 is falsy 
}else{//so else part executed
console.log('You should get a job!');
}

let height;
if(height){
console.log('YAY! height is defined')
}else{
console.log('Height is UNDEFINED');//this will run because height is undefined.
}

//Equality Operator:-  strict equality operator '===' and loose equality operator '=='
//'===' does not perform coersion so its strict
//'==' if need it converts string to number

const agee ='18'
if (agee === 18) console.log('you an adult now :D (Strict)');
if (agee == 18) console.log('you an adult now :D (Loose)');

// const favourite = Number(prompt("What is your fav number?"));
// console.log(favourite);
// console.log(typeof favourite);

//  if (favourite === 23) {
//   console.log(' 23 is Cool!');
//  } else if (favourite === 7) {
//   console.log(' 7 is Cool!');
//  }else{
//   console.log(' not 23 or 7');
//  }

/*
In JavaScript, the AND and OR operators are used to evaluate logical expressions and return a boolean value (true or false) based on the conditions specified.

The AND operator in JavaScript is represented by the && symbol. It returns true if both of its operands evaluate to true, and false otherwise. For example, the expression x && y will return true if both x and y are true.

The OR operator in JavaScript is represented by the || symbol. It returns true if at least one of its operands evaluates to true, and false otherwise. For example, the expression x || y will return true if either x or y (or both) are true.

The not operator is a logical operator that reverses the truth value of a boolean expression. It is denoted by the exclamation mark ! and takes a single operand. When the not operator is applied to a boolean expression, it returns the opposite boolean value.

In other words, if the operand is true, the not operator returns false, and if the operand is false, the not operator returns true. The not operator can be useful in programming to check for conditions that are not true, or to reverse the result of a boolean expression.
*/
const license = true;
const goodVision = true;

console.log(license && goodVision);
console.log(license || goodVision);
console.log(!license);

if(license && goodVision){
console.log('Shab should drive');
}else{
console.log('Someone else should drive')
}

const isTired = true //c
console.log(license && goodVision && isTired);

if(license && goodVision && !isTired){ //true && true && true-->false
console.log('Shab should drive');
}else{
console.log('Someone else should drive')
}

//challange 
const dolphins = (96 + 108 + 89) / 3;
const koalas = (88 + 91 + 110) / 3;
console.log(dolphins , koalas);

if(dolphins > koalas){
console.log('Dolphins wins');
}else if ( koalas > dolphins) {
console.log('Koalas wins');
}else if (dolphins === koalas) {
console.log('Both wins');
}


const dolphinss = (97 + 112 + 81) / 3;
const koalass = (109 + 95 + 86) / 3;
console.log(dolphinss , koalass);

if(dolphinss > koalass && dolphinss >= 100){
console.log('Dolphinss wins');
}else if ( koalass > dolphinss && koalass >= 100) {
console.log('Koalass wins');
}else if (dolphinss === koalass && dolphinss >= 100 && koalass >= 100) {
console.log('Both wins');
} else{
console.log('No one wins');
}