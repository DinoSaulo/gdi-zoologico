/* -------------------- 1. USE -------------------- */

use Zoologico;

/* -------------------- 2. FIND -------------------- */

db.animais.find(
    { "tipo_animal": "Leão" }
);
db.animais.find(
    { "descricao.predadores": "hienas" }
);
db.pessoas.find(
    { "data_nascimento": ISODate("1964-10-02T01:35:09.736Z") }
);
db.pessoas.find(
    { "endereco.cidade": "Pombos" }
);

/* -------------------- 3. SIZE -------------------- */

db.animais.find(
    { "descricao.predadores":
        { $size: 3 }
    }
);

/* -------------------- 4. AGGREGATE e 5. MATCH -------------------- */

db.animais.aggregate(
    [
        { $match :
            { "tipo_animal": "Pinguim" }
        }
    ]
);

/* -------------------- 6. PROJECT -------------------- */

db.animais.aggregate(
    [
        { $project :
            { "descricao" :
                { "habitat": 1 },
                  "idade" : 1
            }
        }
    ]
);

/* -------------------- 7. GTE -------------------- */

// GTE ==  greater than or equal == >=
// buscando animais com comprimento maior ou igual a 100 cm

db.animais.find(
    { "comprimento_cm":
        { $gte: 100 }
    }
);

/* -------------------- 8. GROUP -------------------- */

// agrupando as pessoas pelo seu tipo

db.pessoas.aggregate(
    [
        { $group:
            { "_id": "$tipo", 
              count:
                    { $sum: 1 }
            }
        }
    ]
);

/* -------------------- 9. SUM -------------------- */

// somando o peso de todos os animais

db.animais.aggregate(
    [
        { $group:
            { "_id": null,
              count: 
                    { $sum: "$peso_kg" }
            }
        }
    ]
);

/* -------------------- 10. COUNT -------------------- */

// somando os salário de todos os funcionários

db.pessoas.aggregate(
    [
        { $group: 
            { "_id": null,
              count:
                    { $sum: '$salario' }
            }
        }
    ]
);

/* -------------------- 11. MAX -------------------- */

// obtendo o maior salário de todos os funcionários

db.pessoas.aggregate(
    [
        { $group: 
            { "_id": null,
              count:
                    { $max: '$salario' }
            }
        }
    ]
);

/* -------------------- 12. AVG -------------------- */

// obtendo a média do salário dos funcionários

db.pessoas.aggregate(
    [
        { $group: 
            { "_id": null,
              count:
              { $avg: '$salario' }
            }
        }
    ]
);

/* -------------------- 13. EXISTS -------------------- */

// retornando funcionários que tem o tipo do cargo definido

db.pessoas.find(
    { "tipo_cargo":
        { $exists: true }
    }
);

/* -------------------- 14. SORT -------------------- */

// ordenando os funcionários pelo salário por ordem decrescente 

db.pessoas.aggregate(
    [
        { $sort :
            { "salario": -1 }
        }
    ]
);

/* -------------------- 15. LIMIT -------------------- */

// obtendo os três animais mais pesados

db.animais.aggregate(
    [
        { $sort :
            { "peso_kg": -1 }
        },
        { $limit : 3 }
    ]
);

/* -------------------- 16. $WHERE -------------------- */

// obtendo animais que tem a altura maior que o comprimento (todos os bichinhos)

db.animais.find(
    { $where: "this.altura_cm > this.comprimento_cm" }
);

/* -------------------- 17. MAPREDUCE -------------------- */
var mapFunction = function() {
    emit(this._id, this.salario);
};

var reduceFunction = function(keyCustId, valuesPrices) {
    return Array.sum(valuesPrices);
};

db.pessoas.mapReduce(
    mapFunction,
    reduceFunction,
    { out: "Map Reduce" }
);

/* -------------------- 18. FUNCTION -------------------- */

db.pessoas.find (
    { $where: function ()
        {
            return ((this.nome) == "Keanu Reeves")
        }
    }
);

/* -------------------- 19. PRETTY -------------------- */

// obtendo os três animais mais pesados no formato json identado

db.animais.aggregate(
    [
        { $sort: 
            { "peso_kg": -1 }
        },
        { $limit: 3 }
    ]
).pretty();

/* -------------------- 20. ALL -------------------- */

// retorna todos os animais que tem como predadores leões ou leopardos

db.animais.find(
    { "descricao.predadores":
        { $all:
            ["leões", "leopardos"]
        }
    }
);

/* -------------------- 21. SET -------------------- */

// inserindo a altura de um cliente aos seus dados

db.pessoas.update(
    { "nome": "Nano Moura" },
    {
        $set: {
            "altura": 1.42
        }
    },
    { upsert: true }
);

/* -------------------- 22. TEXT -------------------- */

db.pessoas.createIndex(
    { "email": "text" }
);
db.pessoas.find(
    { $text:
        { $search: "mal3" }
    }
);

/* -------------------- 23. SEARCH -------------------- */

db.animais.createIndex(
    { "descricao.predadores": "text" }
);
db.animais.find(
    { $text:
        { $search: "leões" }
    }
);

/* -------------------- 24. FILTER & 28. COND -------------------- */

db.animais.aggregate([
    {
        $project: {
            "nome":"$nome",
            "descricao.predadores": {
                $filter: {
                    input: "$descricao.predadores",
                    as: "predadores",
                    cond: {$eq: ["$$predadores", "hienas"] }
                }
            }
        }
    }
]).pretty();

/* -------------------- 25. UPDATE -------------------- */

// atualizando o peso de Glória

db.animais.update(
    { "nome": "Glória" },
    {
        $set: {
            "peso_kg": 1835
        }
    },
    { upsert: true }
);

/* -------------------- 26. SAVE -------------------- */

db.animais.save(
    {
        "nome": "Julienn", 
        "tipo_animal": "Lêmure", 
        "nome_cientifico": "Lemuriformes", 
        "altura_cm": 57, 
        "comprimento_cm": 39, 
        "peso_kg": 2.1,
        "idade": 6,
        "descricao": {
            "habitat": "Ilha de Madagascar",
            "alimentacao": "insetos, pequenos vertebrados, frutas e flores",
            "predadores": ["fossa", "Polyboroides radiatus", "Buteo brachypterus"],
            "periodo_gestacao": 135
        }
    }
);

/* -------------------- 27. RENAMECOLLECTION -------------------- */
db.pessoas.renameCollection("pessoa");
db.pessoa.renameCollection("pessoas");

/* -------------------- 29. FINDONE -------------------- */

db.pessoas.findOne (
    { "nome": "Keanu Reeves" }
);

/* -------------------- 30. ADDTOSET -------------------- */

db.animais.update (
    { "tipo_animal": "Zebra"},
    { $addToSet: 
        {"descricao.predadores": "hienas"}
    }
);
