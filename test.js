
/*Write a function named tellFortune that:
takes 4 arguments: number of children, 
partner's name, geographic location, job title.
outputs your fortune to the screen like so: 
"You will be a X in Y, and married to Z with N kids."
*/
function tellFortune (x, y, z, w) {
return ("You will be a "+ x +" in "+y+", and married to "+ z+"  with"+ w+" kids."
)
}
console.log(tellFortune("millionaire", "Barcelona", "x", "2"))
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function dogAge(humanAge)
{
var x= humanAge*7;
return ("Your doggie is "+ x +"years old in dog years!")

}

dogAge(5)

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"
Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply (age, amount)
{
    var x = (100-age)*365*amount;
    return ("'You will need "+x+" cups of tea to last you until the ripe old age of 100")
}

console.log(calculateSupply(33, 5))

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name
Ex: greet("Jouza")
=> "Hello Jouza"
*/
function greet(Z)
{
    return ("hello "+Z)
}
console.log(greet ("shaker"))






function double(cat) {
  return 2 * cat;
}

function double(H) {
  return 2 * H;
}

function double(X) {
  return 2 * x;
}






function double1(x) {
  return 2 * x ;
}

function double2 (x){
return 2 * x;
}

function double3(x){
  return 2 * x;
}



/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

function cube(S){
    return S*S*S

}
console.log(cube(3))


/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12

*/

function multiply (x, y)
{
  var  result= x*y;
  return result;
}

console.log(multiply(9, 8))

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

*/

function  canIGetADrivingLicense(age)
{ var x=20-age;
    if (age>=20)
    {return ("yes you can")}
    else{
    return "please come back after "+x+" years to get one"
    }
} 

console.log (canIGetADrivingLicense(17))

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength (x, y)
{
    if (x.length === y.length )
    return true;
    else 
    return false;
}

console.log(sameLength("sh", "or"))

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNubmer (x, y)
{
    if (x> y) 
    return x;
    else return y;
}

console.log (largerNubmer(10,10))

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5
*/


function smallerNubmer (x, y, z)
{   if (x <= y && x<=z ) 
    return x;     
    else if (y<x&&y<=z)
    {return y;}
    else if (z<x&&z<y)
    {return z;}
 }            
 console.log (smallerNubmer(20,20, 10))
 console.log (smallerNubmer(50,50, 50))
 console.log (smallerNubmer(100,100, 10))

 /*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by
*/


function  shorterString (a,b,c,d,e){
    if (a.length<=b.length && a.length<=c.length && a.length<=d.length && a.length<=e.length )
    {return (a);}

    else if ( b.length<=a.length && b.length<=c.length && b.length<=d.length && b.length<=e.length )
    {return (b);}

    else if ( c.length<=a.length && c.length<=b.length && c.length<=d.length && c.length<=e.length )
    {return (c);}

    else if ( d.length<=a.length && d.length<=b.length && d.length<=c.length && d.length<=e.length )
    {return (d);}
    else {return (e);}

}

console.log(shorterString("aa", "bb", "cc", "dd", "e"))


/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: shorterString("air","school","car","github")
=> school
*/

function  longerString (a,b,c,d){
    if (a.length>=b.length && a.length>=c.length && a.length>=d.length )
    {return (a);}

    else if ( b.length>=a.length && b.length>=c.length && b.length>=d.length)
    {return (b);}

    else if ( c.length>=a.length && c.length>=b.length && c.length>=d.length)
    {return (c);}


    else {return (d);}

}
console.log(longerString("air","school","car","github"))

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd
Ex: isEven(1)
=> false
Ex: isEven(2)
=> true
*/

function isEven (a) {
    if (a%2===0)
    return true
    else 
    return false
}
console.log(isEven (5))

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even
Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true
*/

function isOdd (a) {
    if (a%2!==0)
    return true
    else 
    return false
}
console.log(isOdd (5))


/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed
Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5
*/


function positive(a) {
    if (a<0)
    return a*-1;
    else 
    return a
}
console.log(positive(-5))

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.
Ex: fullName("Mohammad","Jouza")
=> "Mohammad Jouza"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"

*/

function fullName(first, last)
{
return (first+ " " + last)

}

console.log(fullName("Alex", "Mercer"))


/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.
Ex: average(1,2,3,4,5)
=> 3
Ex: average(5,7,9,3,5)
=> 5.8
*/
function  average (a,b,c,d,e){

var avg= (a+b+c+d+e)/5;
return avg;

}
console.log(average(2,4,6,8,10))

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN
Ex: randomNumber()
=> 0.2278
Ex: randomNumber()
=> 0.475
*/
function randomNumber(){
return Math.random()
}
console.log(randomNumber())

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN
Ex: randomBetweenNumbers(1,8)
=> 7.5412
Ex: randomBetweenNumbers(3,100)
=> 23
*/
function randomNumber(x,y){
    return (Math.random()*(y-x))+x
    }
    console.log(randomNumber(1,8))
    console.log(randomNumber(3,100))



/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49
Ex: scoreInUniversty(96)
=> "A"
Ex: randomBetweenNumbers(3)
=> "F"
*/

function scoreInUniversty(x){
    if (100>=x && x >=95)
    return "A"
    else if (94>= x && x>=85)
    return "B"
    else if (84>=x && x >=70)
    return "C"
    else if (69>=x && x>=50)
    return "D"
    else if (49>=x && x>=0)
    return "F"

}
console.log(scoreInUniversty(2))

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: counter()
=> 3
*/
var x=-1;

function counter () {
 x=x+1;
 return x;   
}

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: counter()
=> 3
Ex: resetCounter()
=> 3 and the counter reset now
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: resetCounter()
=> 2 and the counter reset now
Ex: counter()
=> 1
*/
function resetCounter () {
   var z=x;
    x=0;
    return (console.log(z+ " and the counter reset now" ) ) ;   
   }






/*
1
Create a function called sum 
that takes a single parameter n, 
and return the sum of all integers up to n starting from 0

Ex: sum(2); => 2 + 1 + 0 => 3 
Ex: sum(5); => 5 + 4 + 3 + 2 + 1 + 0 => 15

*/
function sum(n) {
  // your code here 
}

/*
2
Create a function called factorial 
that takes a single parameter n, 
and return the product of all integers up to n starting from 1

Ex: factorial(2); => 2 * 1 => 6 
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24 

*/
function factorial(n) {
  // your code here 
}


/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space

Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/


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


