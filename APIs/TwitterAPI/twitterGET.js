
var OAuth= require('oauth').OAuth;

oa = new OAuth("https://api.twitter.com/oauth/request_token",
                 "https://api.twitter.com/oauth/access_token", 
                 process.env.CUSTOMER_KEY, process.env.CUSTOMER_SECRET, 
                 "1.0A", "http://localhost:3000/oauth/callback", "HMAC-SHA1");

var access_token= process.env.ACCESS_TOKEN;
var access_token_secret= process.env.TOKEN_SECRET;

oa.get("https://api.twitter.com/1.1/users/show.json?screen_name=sandagolcea", access_token, access_token_secret, function(error, data) {
  console.log(data);
});
