var hello = require('./custom_hello');
var gb = require('./custom_goodbye');
// gb2 = require('./custom_goodbye').goodbye();
var myMod = require('./my_module');

hello();
gb.goodbye();
// gb2();
myMod.foo();
myMod.bar();