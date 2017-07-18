// Quantidade de mensagens coletadas @NetflixBrasil
/*
var a = db.runCommand (
{aggregate : "posts",
 pipeline: [
            { $match : { owner: "user4", mensagem:{$regex: "@NetflixBrasil"}}},
            { $project: { owner : 1}},
            { $group: {  _id: "$owner",
                         count: {$sum: 1}
                      }
            }
           ]
});
printjson("Quantidade de mensagens coletadas do perfil @NetflixBrasil" + a.result);

*/

// CLASSIFICANDO POR CIDADE
/*var b = db.runCommand(
{aggregate : "posts",
 pipeline: [
            { $match : { owner: "user4", mensagem:{$regex: "@NetflixBrasil"}}},
            { $project: { localizacao : 1}},
            { $group: {  _id: "$localizacao",
                         count: {$sum: 1}
                      }
            }
           ]
});
//SALVANDO O RESULTADO DA AGREGACAO
b.result.forEach(function(data){
        db.netflix_localizacao.insert([data]);     
     //print(data.localizacao);
});
*/

map = function() {
    var array = this.localizacao.split(' ');
    emit(this.localizacao, array);
}

reduce = function(key, values) {
    return values;
}

result = db.runCommand({
        "mapreduce" : "netflix_localizacao", 
        "map" : map,
        "reduce" : reduce,
        "out" : "net_loc_result"
});

/*


}
db.posts.find({mensagem:{$regex:"@NetflixBrasil"}, owner: "user4"}).forEach( function(myDoc) {
        var encontrou = db.teste_local.count({local: myDoc.localizacao});
          if((myDoc.localizacao != null)&&(myDoc.localizacao != "Brasil")&&(myDoc.localizacao != "Brazil")){ if (encontrou > 0){ db.teste_local.update({local: myDoc.localizacao}, { $inc: {quant: 1}});}else{db.teste_local.save({local: myDoc.localizacao, quant: 1, owner: myDoc.owner});}}
        });









var a = db.runCommand (
{aggregate : "posts",
 pipeline: [
            { $match : { owner: "user4", mensagem:{$regex: "NetflixBrasil"}}},
            { $project: { localizacao : 1}},
            { $group: {  _id: "$localizacao",
                         count: {$sum: 1}
                      }
            }
           ]
});
printjson(a.result);
*/
/* QUANBTIDADE DE REGISTROS COLETADOS
var a = db.runCommand (
{aggregate : "posts",
 pipeline: [
            { $project: { owner : 1}},
            //{ $unwind: "$" },   // Utilizar em caso de arrays
            { $group: {  _id: "$owner",
                         count: {$sum: 1}
                      }
            }

           ]
});
printjson(a.result);
*/

/*
db.posts.find({mensagem:{$regex:"@NetflixBrasil"}
          , owner: "user4"}).forEach( function(myDoc) {
          if(myDoc.localizacao != null){
          	db.teste_local.save({local: myDoc.localizacao, quant: 1});
          //print( "usuário: " + myDoc.localizacao);
          } 
       } 
);
*/