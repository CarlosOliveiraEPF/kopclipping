// Separa por palavras para contabilizar os quantitativos
map = function() {
    var array = this.mensagem.split(' ');
    emit(this.mensagem, array);
}

reduce = function(key, values) {
    return values;
}

result = db.runCommand({
        "mapreduce" : "posts", 
        "map" : map,
        "reduce" : reduce,
        "out" : "netflix_palavras"
});
/*
var a = db.runCommand(
    { aggregate: "netflix_palavras",
      pipeline: [
      			  { $match : { _id:{$regex: "#"}}},
                  { $project: { value: 1 } },
                  { $unwind: "$value" },
                  { $group: {
                              _id: "$value",
                              count: { $sum : 1 }
                            }
                  },
                  {$sort: {count : -1}}
                ]
    }
 );
print("Os hashtags mais evidentes...");
print(a.result);
*/