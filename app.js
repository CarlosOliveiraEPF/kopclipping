var TwitterPackage = require('twitter');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carlos');

var secret = {
  consumer_key: 'NbPWv4YokBOvqUb27uBtYcw5P',
  consumer_secret: 'F4S2qw5qUj1zowh8J3VkMRRkBwokAEXSDRCqAcLwfPxQDZTf2T',
  access_token_key: '713714429-ATnlrIrW9P5KljawarU1w76KI1ghRYVpALDlGJWh',
  access_token_secret: 'ZLoOCSwjC3Onjqk5lYjqcE5Jabr6ccZEVuqXO4FLFPBj5'
}

var Post = mongoose.model('Post',{mensagem: String});

var Twitter = new TwitterPackage(secret);
Twitter.stream('statuses/filter', {track: '@realDonaldTrump'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);

    var postAtual = new Post({mensagem: tweet.text});

    postAtual.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Salvo com sucesso!');
      }
    });
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});