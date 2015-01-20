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

  describe("can get a random choice", function(){
    it("from values rock paper and scissors", function(){
      var choiceArray = ["rock","paper","scissors"];
      expect(choiceArray).toContain(RockPaperScissors.randomChoice());
    });

    it("only in the range rock paper scissors", function(){
      // var choiceArray = ["rock","paper","scissors"];
      var choiceArray=["ping","pong"];
      expect(choiceArray).not.toContain(RockPaperScissors.randomChoice());
    });
  });

});