map = function() {
    var array = this.descricao.split(' ');
    emit(this.descricao, array);
}

reduce = function(key, values) {
    return values;
}

result = db.runCommand({
        "mapreduce" : "carlos", 
        "map" : map,
        "reduce" : reduce,
        "out" : "resultado_c"
});
print(result);
