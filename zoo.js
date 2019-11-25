/* -------------------- 1. USE -------------------- */

use zoologico;

/* -------------------- 2. FIND -------------------- */

db.animais.find({ tipo_animal:'Leão' });
db.funcionarios.find({ funcao: 'Biólogo' });
db.clientes.find({ data_nascimento: ISODate("1964-10-02T01:35:09.736Z") });
db.enderecos.find({ cidade: 'Pombos' });

/* -------------------- 3. SIZE -------------------- */

db.animais.find({ descricao: { $size: 4 } }); // não tá pegando

/* -------------------- 4. AGGREGATE -------------------- */

db.enderecos.aggregate([{$group : {_id : "$cidade", num_cidade : {$sum : 1}}}])

/* -------------------- 5. MATCH -------------------- */

db.animais.aggregate(
    [{ $match : { tipo_animal:'Pinguim' } }]
);

/* -------------------- 6. PROJECT -------------------- */

db.animais.aggregate( [ { $project : { descricao : { habitat: 1 } , idade : 1 } } ] );

/* -------------------- 7. GTE -------------------- */

// GTE ==  greater than or equal == >=
// buscando animais com comprimento maior ou igual a 100 cm

db.animais.find( { comprimento_cm: { $gte: 100 } } )

/* -------------------- 8. GROUP -------------------- */

// agrupando os ingressos pelo seu tipo

db.ingressos.aggregate( [ { $group: { _id: '$tipo', count: { $sum: 1 } } } ] );

/* -------------------- 9. SUM -------------------- */

// somando o peso de todos os animais

db.animais.aggregate([{ $group: { _id: null, count: { $sum: '$peso_kg' }}}]);

/* -------------------- 10. COUNT -------------------- */

// somando os salário de todos os funcionários

db.funcionarios.aggregate([{ $group: { _id: null, count: { $sum: '$salario' }}}]);

/* -------------------- 11. MAX -------------------- */

// obtendo o maior salário de todos os funcionários

db.funcionarios.aggregate([{ $group: { _id: null, count: { $max: '$salario' }}}]);

/* -------------------- 12. AVG -------------------- */

// obtendo a média do salário dos funcionários

db.funcionarios.aggregate([{ $group: { _id: null, count: { $avg: '$salario' }}}]);

/* -------------------- 13. EXISTS -------------------- */

// retornando funcionários que tem o tipo do cargo definido

db.funcionarios.find( { tipo_cargo: { $exists: true }})

/* -------------------- 14. SORT -------------------- */

// ordenando os funcionários pelo salário por ordem decrescente 

db.funcionarios.aggregate(
    [
      { $sort : { salario : -1 } }
    ]
 )

/* -------------------- 15. LIMIT -------------------- */

// obtendo os três animais mais pesados

db.animais.aggregate(
    [
      { $sort : { peso_kg : -1 } },
      { $limit : 3 }
    ]
);

/* -------------------- 16. $WHERE -------------------- */

// obtendo animais que tem a altura maior que o comprimento (todos os bichinhos)

db.animais.find( { $where: "this.altura_cm > this.comprimento_cm" } );

/* -------------------- 17. MAPREDUCE -------------------- */

/* -------------------- 18. FUNCTION -------------------- */

/* -------------------- 19. PRETTY -------------------- */

/* -------------------- 20. ALL -------------------- */

/* -------------------- 21. SET -------------------- */

/* -------------------- 22. TEXT -------------------- */

/* -------------------- 23. SEARCH -------------------- */

/* -------------------- 24. FILTER -------------------- */

/* -------------------- 25. UPDATE -------------------- */

/* -------------------- 26. SAVE -------------------- */

/* -------------------- 27. RENAMECOLLECTION -------------------- */

/* -------------------- 28. COND -------------------- */

/* -------------------- 29. FINDONE -------------------- */

/* -------------------- 30. ADDTOSET -------------------- */