var Twit = require('twit')

var T = new Twit({
    consumer_key: process.env.CUSTOMER_KEY
  , consumer_secret:      process.env.CUSTOMER_SECRET
  , access_token:         process.env.ACCESS_TOKEN
  , access_token_secret:  process.env.TOKEN_SECRET
})

var options = { q: 'makersacademy since:2015-01-01', 
              count: 1 };

var options2 = { screen_name: 'sandagolcea',
                count: 3 };

// Get a tweet about makersacademy that was posted since 2015-01-01
T.get('search/tweets', options , function(err, data, response) {
  console.log(data);
})

// Get three tweets from my timeline - full info here
T.get('statuses/user_timeline', options2 , function(err, data, response) {
  console.log(data);
})


// Show my last tree tweets (just the tweet text)
T.get('statuses/user_timeline', options2 , function(err, data) {
  for (var i = 0; i < data.length ; i++) {
    console.log(data[i].text);
  }
})


// Show the last 2 tweets with hashtag makersacademy
T.get('search/tweets', { q: 'makersacademy', count: 2 }, function(err, reply) {
    if (err) {
        console.dir(err);
    } else {
        for (var i = 0; i < reply.statuses.length; i++) {
            var status = reply.statuses[i];
            console.log('  username: ' + status.user.name);
            console.log('   ' + status.text);
            console.log('  time/date: ' + status.created_at);
            console.log('***');
        }
    }
})