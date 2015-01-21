describe("Thermostat", function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe("by default", function(){

    it("starts at 20 degrees", function(){
      expect(thermostat.temperature).toEqual(20);
    });


    it("must have a minimum temperature", function(){
      expect(thermostat.minimumTemperature).toEqual(10);
    });

    it("should have power saving mode turned on", function(){
      expect(thermostat.powerSavingMode).toBe(true);
    });


  });

  describe("has a temperature that", function(){

    it("can be increased", function(){
      thermostat.increaseTemperature(1);
      expect(thermostat.temperature).toEqual(21);
    });

    it("can be decreased", function(){
      thermostat.decreaseTemperature(1);
      expect(thermostat.temperature).toEqual(19);
    });

    it("can not be decreased under 10 degrees", function(){
      thermostat.decreaseTemperature(15);
      expect(thermostat.temperature).toEqual(10);
    });

    it("can not be increased over the maximum temperature", function(){
      thermostat.increaseTemperature(15);
      expect(thermostat.temperature).toEqual(25);
    });

    it("can be reset to 20 by hitting reset", function(){
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20);
    });


  });

describe("when power saving mode is on", function(){

    it("the maximum temperature should be 25", function(){
      thermostat.powerSavingMode = true;
      thermostat.increaseTemperature(35);
      expect(thermostat.temperature).toEqual(25);
    });

    it("the maximum temperature should be 32", function(){
      thermostat.powerSavingMode = false;
      thermostat.increaseTemperature(35);
      expect(thermostat.temperature).toEqual(32);
    });

  });

});