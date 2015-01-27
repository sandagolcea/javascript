var Game = require('../src/game');
// game = new Game;

describe('A bowling game', function(){
  
  it('A gutter game', function(){
    var game = new Game;

    for (i=0; i<20; i++) {
      game.roll(0);
    }

    expect(game.score).toEqual(0);
  });

  xit('A gutter game', function(){

  });
});