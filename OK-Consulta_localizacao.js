
var a = db.runCommand (
{aggregate : "posts",
 pipeline: [
            { $match : { owner: "user4", mensagem:{$regex: "NetflixBrasil"}}},
            { $project: { localizacao : 1}},
            //{ $unwind: "$" },   // Utilizar em caso de arrays
            { $group: {  _id: "$localizacao",
                         qtd: {$sum: 1}
                      }
            },
            {$sort: {qtd : -1}}
           ]
});
print("Separando as localidades dos tweets @NetflixBrasil por ordem decrescente...")
db.nfBr_localidades.drop();
db.nfBr_localidades.save(a.result);
printjson(a.result);