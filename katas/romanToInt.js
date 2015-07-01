var romanToInt = function(s) {
    var number = 0;
    roman = s.toLowerCase();
    var dict = {"i": 1, "v": 5, "x": 10, "l": 50, "c": 100, "d": 500, "m": 1000};
    for(var i=0; i<roman.length; i++) {
      if (dict[roman[i]] < dict[roman[i+1]]) {
        number -= dict[roman[i]];
      } else {
        number += dict[roman[i]];
      }
    }
    return number;
};

//2605 => MMDCV
console.log(romanToInt("MMDCV"));
//1551 => MDLI
console.log(romanToInt("MDLI"));
//4 => IV
console.log(romanToInt("IV"));
//3 => III
console.log(romanToInt("III"));
// 1954 as MCMLIV
console.log(romanToInt("MCMLIV"));
// 1990 as MCMXC
console.log(romanToInt("MCMXC"));
// 2014 as MMXIV
console.log(romanToInt("MMXIV"));
