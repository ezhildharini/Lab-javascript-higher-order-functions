//Function #1: Array Slice
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
let modifiedFood = foods.slice(1,4);
console.log(modifiedFood);

//Function #2: Array Splice
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
let modifiedFood = foods.splice(2,0, "noodles", "icecream");
console.log(foods);

//Function #3: Filter
const numberArray = [12,324,213,4,2,3,45,4234];
function isEven(numberArray)
{
    let evenNumbers = numberArray.filter(item => {
        return item % 2 == 0;
    });
    console.log(evenNumbers);
}
isEven(numberArray);

//Function #4: Reject:Prime
const numberArray = [12,324,213,4,2,3,45,4234];
function isPrime(numberArray) 
{
    let primeNumber = numberArray.filter((item) => {
      for (let i = 2; i <= Math.sqrt(item); i++) {
        if (item % i == 0) 
          return false;
      }
      return true;
    });
    console.log(primeNumber);
}
  isPrime(numberArray);


//Function #4: Reject:Non Prime
  const numberArray = [12,324,213,4,2,3,45,4234];
  function nonPrime(numberArray) 
  {
      let nonprimeNumber = numberArray.filter((item) => {
        for (var i = 2; i <= Math.sqrt(item); i++) {
          if (item % i == 0) 
          return true;
        }
        return false;
      });
      console.log(nonprimeNumber);
  }
    nonPrime(numberArray);

//Function #5: Lambda
const numberArray = [12,324,213,4,2,3,45,4234];
let evenNumber = numberArray.filter((item) => item % 2 == 0);
console.log(evenNumber);


//Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray)
{
 let squareNumber = myArray.map(function (item)
   {
     return item * item;
   });
console.log(squareNumber);
}
findSquareOfNumbers(myArray);


//Function #7: Reduce
const myArray = [2, 3, 5, 10];
function mutilply(myArray)
{
    let multipliedNumber = myArray.reduce((number1, number2) => {
        return number1*number2;
    });
    console.log(multipliedNumber);
}
mutilply(myArray);