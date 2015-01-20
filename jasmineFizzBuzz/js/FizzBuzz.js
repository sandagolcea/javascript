var FizzBuzz = function() {
  // this.color = "red";
};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
    return (number%3===0);
};

FizzBuzz.prototype.isDivisibleByFive = function(number) {
    return (number%5===0);
};

FizzBuzz.prototype.isDivisibleByFifteen = function(number) {
    if (this.isDivisibleByFive(number) && this.isDivisibleByThree(number)) return true;
    return false;
};

FizzBuzz.prototype.play = function(number) {
  if (this.isDivisibleByFifteen(number))
    return "FizzBuzz";
  else if (this.isDivisibleByThree(number))
    return "Fizz";
  else if (this.isDivisibleByFive(number))
    return "Buzz";
  else
    return number;
};

// var fizzy = my_array.map( function(number) {return fizzbuzz.play(number)})
// console play:
// var array = [1,2,3,4,5,6,7,8,9,10];
// fizzbuzz = new FizzBuzz();
// var fizzy = array.map( function(number) {return fizzbuzz.play(number)} );
// fizzy
// TA-DA!
// [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]