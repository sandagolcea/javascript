function s2i(str) {
  var nr = 0;
  var order = 1;
  var dict = {"1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "0":0};

  for ( i = str.length-1; i>=0; i--) {
    nr += dict[str[i]] * order;
    if (!nr) return 0;
    order = order * 10;
  }
  return nr;
}

console.log(s2i("123"));
console.log(s2i("3"));
console.log(s2i("0"));
console.log(s2i("99999"));
console.log(s2i("ABC"));
//todo : negative number
//todo : nr out of bounds
