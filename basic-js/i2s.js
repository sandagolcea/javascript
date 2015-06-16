function int2str(nr) {
  var dict = {1: "1", 2: "2", 3: "3", 4:"4", 5:"5", 6:"6", 7:"7", 8:"8", 9:"9", 0:"0"}
  var arr = [];
  while ( nr > 10 ) {
    rest = Math.floor(nr % 10);
    nr = Math.floor(nr / 10);
    arr.unshift(dict[rest]);
  }
  if (nr > 0) {
    arr.unshift(dict[nr]);
  }
return arr;
}

console.log(int2str(123));