var Thermostat = function() {
  this.temperature = 20;
};

Thermostat.prototype.increaseTemperature = function(step) {
  this.temperature += step;
};