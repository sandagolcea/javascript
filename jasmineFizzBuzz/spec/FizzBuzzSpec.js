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


  });


});