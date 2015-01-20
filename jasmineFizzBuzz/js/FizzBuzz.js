var FizzBuzz = function() {
  // this.color = "red";
};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
    return (number%3===0);
};

FizzBuzz.prototype.isDivisibleByFive = function(number) {
    return (number%5===0);
};