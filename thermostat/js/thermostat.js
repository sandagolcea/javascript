var Thermostat = function() {
  this.temperature = 20;
  this.minimumTemperature = 10;
  this.powerSavingMode = true;
};

Thermostat.prototype.maximumTemperature = function() {
  if (this.powerSavingMode == true) return 25;
  return 32;
}

Thermostat.prototype.increaseTemperature = function(step) {
  if ((this.temperature + step) <= this.maximumTemperature()) {
    this.temperature += step;
    }
  else {
    this.temperature = this.maximumTemperature();
  }
};

Thermostat.prototype.decreaseTemperature = function(step) {
  if (this.temperature - step >= this.minimumTemperature) {
    this.temperature -= step;
  }
  else {
    this.temperature = this.minimumTemperature;
  }
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20;
};