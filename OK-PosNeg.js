var tweetsPositivos = [
		/ótimo desempenho/,
		/otimo desempenho/,
		/ótima qualidade/,
		/otima qualidade/,
		/ótimo sinal/,
		/otimo sinal/,
		/ótima velocidade/,
		/otima velocidade/,
		/ótimo/,
		/otimo/,
		/ótima/,
		/otima/,
		/excelente/,
		/exelente/,
		/bom/,
		/grande ajuda/,
		/bom suporte/,
		/obrigad/,
		/maravilh/,
		/Lind/, 
		/Anjo/, 
		/bem/, 
		/engraçad/, 
		/convenceram/, 
		/recomend/, 
		/parabéns/,
		/parabens/,
		/adorei/,
		/adoro/
	];

var tweetsNegativos = [
		/péssim/,
		/pessim/,
		/horrível/,
		/horrivel/,
		/sinal ruim/,
		/sinal horrivel/,
		/sinal horrível/,
		/bosta/,
		/merda/,
		/desempenho horrível/,
		/desempenho horrivel/,
		/velocidade horrivel/,
		/velocidade horrível/,
		/sem sinal/,
		/chuva/,
		/não funciona/,
		/nao funciona/,
		/ridiculo/,
		/ridículo/,
		/sem condição/,
		/sem condicão/,
		/sem condiçao/,
		/falta de sinal/,
		/atendimento horrivel/,
		/atendimento horrível/,
		/não atende/,
		/nao atende/,
		/instabilidade/,
		/indignad/,
		/revoltad/   

	];

var countTweetPositivo = db.posts.find({owner:"user4", mensagem:{$in: tweetsPositivos}}).count();

var countTweetNegativo = db.posts.find({owner:"user4", mensagem:{$in: tweetsNegativos}}).count();

print("Positivos: "+countTweetPositivo +
	"\nNegativos: "+countTweetNegativo);
