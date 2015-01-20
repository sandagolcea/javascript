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
  var choice = Math.random();
  if (choice <= 0.3)
    return("rock");
  else if (choice > 0.3 && choice < 0.6) 
    return("scissors");
  else 
    return("paper");
};