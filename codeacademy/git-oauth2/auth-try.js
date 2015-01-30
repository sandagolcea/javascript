// var everyauth = require('everyauth');

// everyauth.debug = true;
// everyauth.github
//   .appId("APP_ID")
//   .appSecret("APP_SECRET")
//   .entryPath('/auth/github')
//   .callbackPath('/auth/github/callback')
//   .scope('gist')
//   .findOrCreateUser( function (sess, accessToken, accessTokenExtra, ghUser) {
//       // user functionality
//   })
//   .redirectPath('/');

var everyauth = require('everyauth')
  , connect = require('connect');

everyauth.github
  .appId('APP_ID')
  .appSecret('APP_SECRET')
  .findOrCreateUser( function (session, accessToken, accessTokenExtra, githubUserMetadata) {
    // find or create user logic goes here
  });
  .redirectPath('/');

var routes = function (app) {
  // Define your routes here
};

connect(
    connect.bodyParser()
  , connect.cookieParser()
  , connect.session({secret: 'whodunnit'})
  , everyauth.middleware()
  , connect.router(routes)
).listen(3000);
