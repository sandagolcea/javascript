var RockPaperScissors = function() {};

RockPaperScissors.prototype.rock_versus = function(choice) {
  if (choice=="scissors") {
    return true;
  }
  return false;
};

RockPaperScissors.prototype.paper_versus = function(choice){
    if (choice=="rock") {
    return true;
  }
  return false;
};

RockPaperScissors.prototype.scissors_versus = function(choice){
    if (choice=="paper") {
    return true;
  }
  return false;
};

RockPaperScissors.randomChoice = function(){
  return("rock");
};