var a = db.runCommand (
{aggregate : "posts",
 pipeline: [
            { $project: { localizacao : 1}},
            //{ $unwind: "$" },   // Utilizar em caso de arrays
            { $group: {  _id: "$localizacao",
                         count: {$sum: 1}
                      }
            }

           ]
});
printjson(a.result);