//RODANDO O COMANDO DE AGREGAÃ‡ÃƒO
/* var a = db.runCommand(
    { aggregate: "carlosarticles",
      pipeline: [
                  { $project: { tags: 1 } },
                  { $unwind: "posts                 { $group: {
                              _id: "$tags",
                              count: { $sum : 1 }
                            }
                  }
                ]
    }
 );
*/

//RODANDO O COMANDO DE AGREGACAO
 var a = db.runCommand(
    { aggregate: "posts",
      pipeline: [
      			      { $match : { owner: "user4", mensagem:{$regex: "@NetflixBrasil"}}},
                  { $project: { value: 1 } },
                  //{ $unwind: "$value" },
                  { $group: {
                              _id: "$value",
                              count: { $sum : 1 }
                            }
                  }
                ]
    }
 );

//SALVANDO O RESULTADO DA AGREGACAO
 a.result.forEach(function(data){
     db.netflix_values.insert(data);
     print(data);
 });