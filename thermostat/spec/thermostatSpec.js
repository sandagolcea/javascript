describe("Thermostat", function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe("by default", function(){

    it("starts at 20 degrees", function(){
      expect(thermostat.temperature).toEqual(20);
    });

  });

  describe("changing temperature", function(){

    it("can increase", function(){
      thermostat.increaseTemperature(1);
      expect(thermostat.temperature).toEqual(21);
    });

    // it("must have a minimum temperature", function(){
    //   expect(thermostat.minimumTemperature).toEqual(0);
    // });

  });

// describe("changing temperature", function(){

//     it("must have a minimum temperature", function(){
      
//     });

//   });

});