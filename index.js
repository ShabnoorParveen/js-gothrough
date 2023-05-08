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