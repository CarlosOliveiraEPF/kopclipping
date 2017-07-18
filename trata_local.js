db.posts.find({mensagem:{$regex:"@NetflixBrasil"}
          , owner: "user4"}
            ).forEach( function(myDoc) {
          		if(myDoc.localizacao != null){
          		//	var encontrou = db.teste_local.count({local: myDoc.localizacao});
          		//	if (encontrou > 0) {
          		//		db.teste_local.update({local: myDoc.localizacao}, { $inc: {quant: 1}});
          		//	}
          		//	else{
          				db.teste_local.save({local: myDoc.localizacao, quant: 1, owner: myDoc.owner});	
          		//	}
          		} 
       		});


db.posts.find({mensagem:{$regex:"@NetflixBrasil"}, owner: "user4"}).forEach( function(myDoc) {
        var encontrou = db.teste_local.count({local: myDoc.localizacao});
        	if(myDoc.localizacao != null){ if (encontrou > 0){ print( "Encontrou: " + encontrou);}else{print( "Não Encontrou: " + encontrou);}}
       	});
// CLASSIFICANDO POR CIDADE
db.posts.find({mensagem:{$regex:"@NetflixBrasil"}, owner: "user4"}).forEach( function(myDoc) {
        var encontrou = db.teste_local.count({local: myDoc.localizacao});
        	if((myDoc.localizacao != null)&&(myDoc.localizacao != "Brasil")&&(myDoc.localizacao != "Brazil")){ if (encontrou > 0){ db.teste_local.update({local: myDoc.localizacao}, { $inc: {quant: 1}});}else{db.teste_local.save({local: myDoc.localizacao, quant: 1, owner: myDoc.owner});}}
       	});
// CLASSIFICANDO POR COMENTARIO BOM
db.posts.find({mensagem:{$regex:"@NetflixBrasil"}, mensagem:{$regex:"maravilh"}, mensagem:{$regex:"parab"}, owner: "user4"}).forEach( function(myDoc) {
        var encontrou = db.teste_opiniao_NetFlixBrasil.count({tipo: "opinião positiva"});
        	if (encontrou > 0){ db.teste_opiniao_NetFlixBrasil.update({tipo: "opinião positiva"}, { $inc: {quant: 1}});}
        	else{db.teste_opiniao_NetFlixBrasil.save({tipo: "opinião positiva", quant: 1, owner: myDoc.owner});}
       	});