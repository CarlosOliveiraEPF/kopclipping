// Separa por palavras para contabilizar os quantitativos
// Parte 1
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
        "out" : "nfBr_"
});



//db.testexxx.insert([
//    { "_id" : 10, "descricao" : "#Apple #iPhone 4" },
//    { "_id" : 12, "descricao" : "Apple #iPhone 5 16gb" },
//    { "_id" : 13, "descricao" : "#Motorola #MotoX" }
//]);
/*

map = function() {
    var array = this._id.split(', ');
    emit(this._id, array);
}

reduce = function(key, values) {
    return values;
}

result = db.runCommand({
        "mapreduce" : "teste_carlos", 
        "map" : map,
        "reduce" : reduce,
        "out" : "testexxx_r2"
});

*/

/*
var a = db.runCommand(
    { aggregate: "testexxx_r",
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
printjson(a.result);
*/