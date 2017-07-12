var a = db.runCommand (
{aggregate : "posts",
 pipeline: [
            { $project: { localizacao : 1}},
            //{ $match : { owner: "user4"}},
            //{ $unwind: "$" },   // Utilizar em caso de arrays
            { $group: {  _id: "$localizacao",
                         count: {$sum: 1}
                      }
            },
            {$sort: {count : -1}}

           ]
});
printjson(a.result);