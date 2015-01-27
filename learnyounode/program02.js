
var argumentsSum = 0;
var nr = 0;

(process.argv).forEach( function(argument) {
  if ( nr = Number(argument)) 
    argumentsSum += nr;
});

console.log(argumentsSum);