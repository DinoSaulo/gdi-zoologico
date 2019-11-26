var mapExercicio = function () {
    var doc = {
        count: 1,
        maior_nota: this.imdb.rating,
        media_votos: this.imdb.votes
    }
    emit(this.year, doc)
};

var reduceExercicio = function(ano, doc) {
    var retorno = {count: 0, maior_nota: 0, media_votos: 0}
    var notas = [];
    var votos = [];
    for (var i = 0; i < doc.length; i++){
        retorno.count += doc[i].count;
        notas[i] = doc[i].maior_nota;
        votos[i] = doc[i].media_votos;
    }
    retorno.maior_nota = Math.max(...notas);
    retorno.media_votos = Array.avg(votos);
    return retorno;
};

db.movieDetails.mapReduce(
    mapExercicio,
    reduceExercicio,
    {
        sort: {year: -1},
        out: "map_reduce_exercicio"}
    )
