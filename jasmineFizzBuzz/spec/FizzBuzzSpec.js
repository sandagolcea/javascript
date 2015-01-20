describe("FizzBuzz", function() {
  
  var fizzbuzz;

  describe("knows when a number", function() {

      it("is divisible by 3", function() {
        fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
      });

      it("is NOT divisible by 3", function() {
        fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.isDivisibleByThree(4)).toBe(false);
      });


      it("is divisible by 5", function() {
        fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.isDivisibleByFive(10)).toBe(true);
      });

      it("is NOT divisible by 5", function() {
        fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.isDivisibleByFive(11)).toBe(false);
      });

      it("is divisible by 15", function() {
        fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
      });


      it("is NOT divisible by 15", function() {
        fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.isDivisibleByFifteen(11)).toBe(false);
      });

  });

 describe("can", function() {

      it("return FizzBuzz for number divisible by 15", function() {
        fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.play(30)).toBe("FizzBuzz");
      });

      it("return Buzz for number divisible by 5", function() {
        fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.play(10)).toBe("Buzz");
      });

      it("return Fizz for number divisible by 3", function() {
        fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.play(3)).toBe("Fizz");
      });

      it("return number for number not divisible by 3 or 5", function() {
        fizzbuzz = new FizzBuzz();
        expect(fizzbuzz.play(31)).toBe(31);
      });

  });

});