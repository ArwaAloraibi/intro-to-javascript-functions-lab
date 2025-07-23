console.log('========================');

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

console.log('========================');

const isAdult=(number) =>{
    if (number>= 18){
       return ('Adult')
    }
}
console.log('Exercise 2 Result:', isAdult(21));

console.log('========================');

const isCharAVowel=(char) =>{
  char = char.toLowerCase(); 
  if (char==='a' || char==='o' || char==='e' || char==='i' || char==='u'){
    return true;
  }
else{
  return false;
}
}

console.log('Exercise 3 Result:', isCharAVowel("a"));

console.log('========================');

 const generateEmail= (name, domain) =>{

  return `${name}@${domain}`;

 }
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

console.log('========================');

 const greetUser = (name, timeOfDay)=> {

  return `Good ${timeOfDay}, ${name}!`
 }

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

console.log('========================');

 const maxOfThree =(num1, num2, num3)=>{

  let temp=0;

  if (num1>temp)
    {
    temp=num1;
    }
    if (num2>temp)
    {
      temp=num2;
    }
    if (num3>temp){
      temp=num3;
    }
  
   return temp;
 }
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

console.log('========================');

const calculateTip=(bill_amount, tip)=> {
    return (bill_amount * tip) / 100;
}

console.log('Exercise 7 Result:', calculateTip(50, 20));

console.log('========================');

const convertTemperature =(temperature, scale)=>{

  let C=0;
  let F=0;

  if (scale==='C')
    {
    return `${C=(temperature * 9/5) + 32} Fahrenheit`;
    }

    else
    {
    return `${F=(temperature - 32) * 5/9}Celsius`;
    }


}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));

console.log('========================');

const basicCalculator= (num1, num2, operation )=>{

  let result=0;
  if (operation ==='add'){
    result= num1 + num2; 
    return result; 

  }
 if (operation ==='subtract'){
  result= num1 - num2; 
    return result; 

 }
 if (operation ==='multiply'){
result= num1 * num2; 
    return result; 

 }

 if (operation ==='divide'){
result= num1 / num2; 
    return result; 

 }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
