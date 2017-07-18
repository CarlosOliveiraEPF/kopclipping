"C:\Program Files\MongoDB\Server\3.4\bin\mongo.exe" ds139942.mlab.com:39942/kopteste -u user4 -p 123456
// Exemplo select com like no campo mensagem.
db.posts.count({owner:"user4", mensagem:{$regex: "NetflixBrasil"}, mensagem:{$regex: "felipeneto"}})


Palavras boas:
Linda, Anjo, maravilhosa, bem, engraçado, obrigado, convenceram, qualidade, recomento, parabéns

Palavras Ruins
Não lançou, instabilidade, serviço, indignada, revoltada, horrivel, ruim, pessima 