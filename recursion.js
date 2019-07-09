/*
1
Create a function called sum 
that takes a single parameter n, 
and return the sum of all integers up to n starting from 0

Ex: sum(2); => 2 + 1 + 0 => 3 
Ex: sum(5); => 5 + 4 + 3 + 2 + 1 + 0 => 15

*/
function sum(n) {
    if (n===0)
    return 0

    return n+sum(n-1)
  }
 
  console.log(sum(4))
  /*
  2
  Create a function called factorial 
  that takes a single parameter n, 
  and return the product of all integers up to n starting from 1
  
  Ex: factorial(2); => 2 * 1 => 6 
  Ex: factorial(4); => 4 * 3 * 2 * 1 => 24 
  
  */
  function factorial(n) {
    if (n===1)
    return 1

    return n*factorial(n-1)
  }
  console.log(factorial(5))
  
  /*
  3
  Create a function called repeatStr
  that takes 2 parameters string and number,
  and return the string number time with space
  
  Ex: repeatStr("to",2); => "to to"
  Ex: repeatStr("to",4); => "to to to to"
  */
  function repeatStr (x, y)
  {
if (y===0)
return ""

return (x+" "+repeatStr(x, y-1))
  }

  console.log(repeatStr("hi", 6))
  /*
  4
  Create a function called fibon
  that takes 1 parameter a number,
  and return the fibonacci for this number
  
  Ex: fibon(7); => 21
  Ex: fibon(2); => 2
  Ex: fibon(1); => 1
  Ex: fibon(0); => 1
  
  fib(n): 1 1 2 3 5 8 13 21
          | | | | | |  |  |
  n:      0 1 2 3 4 5  6  7
  */
  function fibon(x){
      if (x===0 || x===1)
      return 1

      return fibon(x-1) + fibon(x-2)
  }
  
console.log (fibon(7))

  /*
  
  
  
  
  */
  
  
  /*
  
  
  
  
  */
  
  
  /*
  
  
  
  
  */
  
  
  /*
  
  
  
  
  */
  
  
  /*
  
  
  
  
  */
  
  
  /*
  
  
  
  
  */
  
  
  /*
  
  
  
  
  */
  
  
  /*
  
  
  
  
  */
  
  
  /*
  
  
  
  
  */
  
  
  /*
  
  
  
  
  */
  
  
  /*
  
  
  
  
  */
  
  
  /*
  
  
  
  
  */
  
  
  /*
  
  
  
  
  */
  
  