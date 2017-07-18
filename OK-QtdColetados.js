// Quantidade de mensagens coletadas @NetflixBrasil
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
print("Quantidade de registros coletados..." );
printjson(a.result);