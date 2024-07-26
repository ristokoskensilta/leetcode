// Leetcode problem 233. Number of Digit One
// https://leetcode.com/problems/number-of-digit-one

// Given an integer n, count the total number of digit 1 
// appearing in all non-negative integers less than or equal to n.

var countDigitOne = function (n) {
  let base = 10; 
  let sum = 0;
  const digits = Array.from(String(n), Number).reverse();
  let oneCount = 0;     // digits 1 in the given number
  for(const d of digits){
    if(d == 1) 
      oneCount++;
  }
  let placeValue = 1;   // current place value, ch. https://en.wikipedia.org/wiki/Positional_notation#Exponentiation
  let prevOnes = 0;     // number of 1's in the less significant places 
  for(const d of digits){
    if(d > 0){
      if(d == 1){
        oneCount--;
      }
      //          LEFT PLACES              CURRENT PLACE           RIGHT PLACES
      sum += (d*oneCount*placeValue) + (d > 1 ? placeValue : 1) + (d*prevOnes);
    }
    prevOnes = (prevOnes * base) + placeValue;
    placeValue *= base;
  }
  return sum;
};
