var TwitterPackage = require('twitter');
var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/carlos');

mongoose.connect('mongodb://user4:123456@ds139942.mlab.com:39942/kopteste');


var secret = {
  consumer_key: 'NbPWv4YokBOvqUb27uBtYcw5P',
  consumer_secret: 'F4S2qw5qUj1zowh8J3VkMRRkBwokAEXSDRCqAcLwfPxQDZTf2T',
  access_token_key: '713714429-ATnlrIrW9P5KljawarU1w76KI1ghRYVpALDlGJWh',
  access_token_secret: 'ZLoOCSwjC3Onjqk5lYjqcE5Jabr6ccZEVuqXO4FLFPBj5'
}

var Post = mongoose.model('Post',{id: String
                                , id_user: String
                                , localizacao: String
                                , data : Date
                                , mensagem: String
                                , owner : String});

var Twitter = new TwitterPackage(secret);
Twitter.stream('statuses/filter', {track: '@BancodoBrasil'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.id, tweet.user.id, tweet.user.location, tweet.text, tweet.timestamp_ms);
    //console.log(tweet);   @NetflixBrasil @Bradesco @itau @AloBradesco @BancodoBrasil
 
    var postAtual = new Post({ id: tweet.id, 
                               mensagem: tweet.text, 
                               id_user: tweet.user.id, 
                               localizacao: tweet.user.location,
                               data: tweet.timestamp_ms, 
                               owner: "user4"  }); 

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