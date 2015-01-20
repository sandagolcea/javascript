describe("Rock Paper Scissors", function() {
  var rps;

  // cases for beating rock vs sc vs paper
  describe("knows that", function(){

    it("rock beats scissors", function(){
      rps = new RockPaperScissors();
      expect(rps.rock_versus("scissors")).toBe(true);
    });

    it("rock loses to paper", function(){
      rps = new RockPaperScissors();
      expect(rps.rock_versus("paper")).toBe(false);
    });

    it("paper beats rock", function(){
      rps = new RockPaperScissors();
      expect(rps.paper_versus("rock")).toBe(true);
    });

    it("paper loses to scissors", function(){
      rps = new RockPaperScissors();
      expect(rps.paper_versus("scissors")).toBe(false);
    });

   it("scissors beats paper", function(){
      rps = new RockPaperScissors();
      expect(rps.scissors_versus("paper")).toBe(true);
    });

    it("scissors loses to rock", function(){
      rps = new RockPaperScissors();
      expect(rps.scissors_versus("rock")).toBe(false);
    });


  });

});