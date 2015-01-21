
var thermostat = new Thermostat();
var updateTemperature = function() {
  $('#temperature-text').text(thermostat.temperature);
};

$(document).ready(function(){
  updateTemperature();
  // $('.increase-temp');
  // console.log("loaded file");

  $('#arrow-up').on('click', function(){
    thermostat.increaseTemperature(1);
    updateTemperature();
  });
});