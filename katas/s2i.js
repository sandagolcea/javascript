function s2i(str) {
  var dict = {"1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "0":0};
  var minInt = -2147483648;
  var maxInt = 2147483647;

  //handling whitespaces before number
  str = str.trim();

  //handling sign
  var sign = 1;
  if (str[0] === "+" || str[0] === "-") {
    sign = str[0] == "+" ? 1 : -1;
    str = str.slice(1);
  }

  //reading nr until first alpha
  var newStr="";
  var i = 0;
  while (str[i] >= '0' && str[i] <= '9') {
    newStr += str[i];
    i++;
  }
  if (newStr.length > 0) {
    str = newStr;
  }

  //remove zeroes before number
  while (str[0] === '0') { str = str.slice(1) }

  //actual number handling
  var nr = 0;
  var order = 1;
  for (i = str.length-1; i>=0; i--) {
    nr += dict[str[i]] * order;
    order = order * 10;
  }
  if (!nr) return 0;

  // handling overflow cases
  nr = nr * sign;
  if (nr > maxInt) { nr = maxInt }
  else if (nr < minInt) { nr = minInt }
  return nr;
};

console.log(s2i("   +0 123"));
console.log(s2i("123"));
console.log(s2i("3"));
console.log(s2i("-1"));
console.log(s2i("+1"));
console.log(s2i("010"));
console.log(s2i("  0123"));
console.log(s2i("99999"));
console.log(s2i("ABC"));
console.log(s2i("  0012a42"));
console.log(s2i("012a42"));
console.log(s2i("  -0054fda12a42"));
console.log(s2i("089a42"));
console.log(s2i("2147483648"));
console.log(s2i("-2147483649"));
