var TwitterPackage = require('twitter');

var secret = {
  consumer_key: 'NbPWv4YokBOvqUb27uBtYcw5P',
  consumer_secret: 'F4S2qw5qUj1zowh8J3VkMRRkBwokAEXSDRCqAcLwfPxQDZTf2T',
  access_token_key: '713714429-ATnlrIrW9P5KljawarU1w76KI1ghRYVpALDlGJWh',
  access_token_secret: 'ZLoOCSwjC3Onjqk5lYjqcE5Jabr6ccZEVuqXO4FLFPBj5'
}

var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', {track: '@RedeGlobo'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
