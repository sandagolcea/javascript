
var thermostat = new Thermostat();
var updateTemperature = function() {
  $('#temperature-text').text(thermostat.temperature);

  if (thermostat.powerUsage() == 'low-usage') {
    $('.circle').css("background-color","blue");
  }
  else if (thermostat.powerUsage() == 'medium-usage') {
    $('.circle').css("background-color","yellow");
  } else

    $('.circle').css("background-color","red");
};

$(document).ready(function(){
  updateTemperature();
  // $('.increase-temp');
  // console.log("loaded file");

  $('#arrow-up').on('click', function(){
    thermostat.increaseTemperature(1);
    updateTemperature();
  });

  $('#arrow-down').on('click', function(){
    thermostat.decreaseTemperature(1);
    updateTemperature();
  });




});