/* -------------------- startando -------------------- */

// criando as collections
db = db.getSiblingDB("Zoologico");
db.createCollection("animais");
db.createCollection("pessoas");

// inserindo animais

db.animais.insert({
  nome: "Alex",
  tipo_animal: "Leão",
  nome_cientifico: "Panthera leo",
  altura_cm: 88,
  comprimento_cm: 140,
  peso_kg: 198,
  idade: 7,
  descricao: {
    habitat: "Savanas Africanas",
    alimentacao: "Carne fresca e crianças",
    predadores: null,
    periodo_gestacao: 110
  }
});

db.animais.insert({
  nome: "Marty",
  tipo_animal: "Zebra",
  nome_cientifico: "Equus zebra",
  altura_cm: 150,
  comprimento_cm: 170,
  peso_kg: 145,
  idade: 4,
  descricao: {
    habitat: "Savanas Africanas",
    alimentacao: "arbustos, folhas e galhos",
    predadores: ["leões", "leopardos", "crocodilos"],
    periodo_gestacao: 365
  }
});

db.animais.insert({
  nome: "Melman",
  tipo_animal: "Girafa",
  nome_cientifico: "Giraffa",
  altura_cm: 570,
  comprimento_cm: 420,
  peso_kg: 800,
  idade: 6,
  descricao: {
    habitat: "Savanas Semiáridas Africanas",
    alimentacao: "folhas de árvores",
    predadores: [
      "leões",
      "hienas",
      "leopardos",
      "cachorros-selvagens",
      "crocodilos"
    ],
    periodo_gestacao: 450
  }
});

db.animais.insert({
  nome: "Glória",
  tipo_animal: "Hipopótamo",
  nome_cientifico: "Hippopotamus amphibius",
  altura_cm: 140,
  comprimento_cm: 487,
  peso_kg: 1800,
  idade: 12,
  descricao: {
    habitat: "Próximo de rios",
    alimentacao: "Vegetações de rios e lagos",
    predadores: ["leões"],
    periodo_gestacao: 243
  }
});

db.animais.insert({
  nome: "Kowalski",
  tipo_animal: "Pinguim",
  nome_cientifico: "Aptenodytes forsteri",
  altura_cm: 87,
  comprimento_cm: 21,
  peso_kg: 23,
  idade: 7,
  descricao: {
    habitat: "Antártica e em águas frias circundantes",
    alimentacao: "Pequenos peixes, krill e lulas,",
    predadores: ["orcas", "focas-leopardo", "tubarões"],
    periodo_gestacao: 60
  }
});

// inserindo pessoas

db.pessoas.insert({
  nome: "Lucas Alexandre",
  tipo: 0,
  cpf: "885.026.460-79",
  sexo: "M",
  data_nascimento: ISODate("1999-11-01T08:15:39.736Z"),
  salario: 2300.15,
  ctps: "359.46166.96-2",
  endereco: {
    logradouro: "Rua da Usina, s/n",
    numero: "21",
    complemento: "",
    bairro: "Nossa Senhora do Carmo",
    cidade: "Pombos",
    estado: "PE",
    cep: "55630-972"
  }
});

db.pessoas.insert({
  nome: "Gabriel Amancio",
  tipo: 0,
  cpf: "103.159.230-08",
  sexo: "M",
  data_nascimento: ISODate("1998-02-21T20:35:19.736Z"),
  salario: 1900.0,
  ctps: "540.29952.24-6",
  endereco: {
    logradouro: "Rua da Usina, s/n",
    numero: "21",
    complemento: "",
    bairro: "Nossa Senhora do Carmo",
    cidade: "Pombos",
    estado: "PE",
    cep: "55630-972"
  }
});

db.pessoas.insert({
  nome: "Anderson Silva",
  tipo: 0,
  cpf: "393.629.650-20",
  sexo: "M",
  data_nascimento: ISODate("1994-07-18T12:15:29.736Z"),
  salario: 3000.23,
  ctps: "561.67490.60-0",
  endereco: {
    logradouro: "Rua da Usina, s/n",
    numero: "21",
    complemento: "",
    bairro: "Nossa Senhora do Carmo",
    cidade: "Pombos",
    estado: "PE",
    cep: "55630-972"
  }
});

db.pessoas.insert({
  nome: "Matheus Henrique",
  tipo: 0,
  cpf: "333.914.070-77",
  sexo: "M",
  data_nascimento: ISODate("1997-03-11T01:05:09.736Z"),
  salario: 4002.23,
  ctps: "652.45379.60-0",
  endereco: {
    logradouro: "Rua da Usina, s/n",
    numero: "21",
    complemento: "",
    bairro: "Nossa Senhora do Carmo",
    cidade: "Pombos",
    estado: "PE",
    cep: "55630-972"
  }
});

db.pessoas.insert({
  nome: "Saulo Alexandre",
  tipo: 0,
  cpf: "099.202.954-95",
  sexo: "M",
  data_nascimento: ISODate("1997-06-18T10:05:09.737Z"),
  salario: 1997.23,
  ctps: "722.85535.86-0",
  endereco: {
    logradouro: "Rua da Usina, s/n",
    numero: "21",
    complemento: "",
    bairro: "Nossa Senhora do Carmo",
    cidade: "Pombos",
    estado: "PE",
    cep: "55630-972"
  }
});

db.pessoas.insert({
  nome: "Pedro Verissimo",
  tipo: 0,
  cpf: "607.823.430-74",
  sexo: "M",
  data_nascimento: ISODate("1999-09-11T11:05:09.736Z"),
  salario: 2502.2,
  ctps: "654.77860.85-5",
  endereco: {
    logradouro: "Rua da Usina, s/n",
    numero: "21",
    complemento: "",
    bairro: "Nossa Senhora do Carmo",
    cidade: "Pombos",
    estado: "PE",
    cep: "55630-972"
  }
});

db.pessoas.insert({
  nome: "Fred Freitas",
  tipo: 0,
  cpf: "324.823.345-74",
  sexo: "M",
  data_nascimento: ISODate("1990-01-11T11:05:09.736Z"),
  tipo_cargo: "terceirizado",
  ctps: "324.78960.64-5",
  endereco: {
    logradouro: "Rua da Usina, s/n",
    numero: "21",
    complemento: "",
    bairro: "Nossa Senhora do Carmo",
    cidade: "Pombos",
    estado: "PE",
    cep: "55630-972"
  }
});

// inserindo clientes

db.pessoas.insert({
  nome: "Augusto Liberato",
  tipo: 1,
  data_nascimento: ISODate("1957-05-11T11:05:09.736Z"),
  telefone: "(11)4002-8922",
  email: "gugu@gmail.com",
  endereco: {
    logradouro: "Rua da Usina, s/n",
    numero: "21",
    complemento: "",
    bairro: "Nossa Senhora do Carmo",
    cidade: "Pombos",
    estado: "PE",
    cep: "55630-972"
  },
  ingresso: {
    tipo: 0,
    preco: 0,
    data_hora_entrada: ISODate("2019-10-10T10:55:15.116Z"),
    data_hora_saida: ISODate("2019-10-10T14:03:09.116Z"),
    quantidade: 1
  }
});

db.pessoas.insert({
  nome: "Geraldo Galvão",
  tipo: 1,
  data_nascimento: ISODate("1998-10-19T11:05:09.736Z"),
  telefone: "(45)9896-3078",
  email: "gmgn@cin.ufpe.br",
  endereco: {
    logradouro: "Rua da Usina, s/n",
    numero: "21",
    complemento: "",
    bairro: "Nossa Senhora do Carmo",
    cidade: "Pombos",
    estado: "PE",
    cep: "55630-972"
  },
  ingresso: {
    tipo: 0,
    preco: 0,
    data_hora_entrada: ISODate("2019-10-10T10:55:15.116Z"),
    data_hora_saida: ISODate("2019-10-10T14:03:09.116Z"),
    quantidade: 1
  }
});

db.pessoas.insert({
  nome: "Matheus Lima",
  tipo: 1,
  data_nascimento: ISODate("1998-12-18T11:05:09.736Z"),
  telefone: "(580)1494-3871",
  email: "mal3@cin.ufpe.br",
  endereco: {
    logradouro: "Rua da Usina, s/n",
    numero: "21",
    complemento: "",
    bairro: "Nossa Senhora do Carmo",
    cidade: "Pombos",
    estado: "PE",
    cep: "55630-972"
  },
  ingresso: {
    tipo: 2,
    preco: 5,
    data_hora_entrada: ISODate("2019-10-18T09:55:15.116Z"),
    data_hora_saida: ISODate("2019-10-18T13:03:09.116Z"),
    quantidade: 1  
  }
});

db.pessoas.insert({
  nome: "Keanu Reeves",
  tipo: 1,
  data_nascimento: ISODate("1964-10-02T01:35:09.736Z"),
  telefone: "(860)105-59274",
  email: "keanu@reeves.com",
  endereco: {
    logradouro: "Rua da Usina, s/n",
    numero: "21",
    complemento: "",
    bairro: "Nossa Senhora do Carmo",
    cidade: "Pombos",
    estado: "PE",
    cep: "55630-972"
  },
  ingresso: {
    tipo: 2,
    preco: 5,
    data_hora_entrada: ISODate("2019-11-08T09:45:15.116Z"),
    data_hora_saida: ISODate("2019-11-08T14:23:09.116Z"),
    quantidade: 1    
  }
});

db.pessoas.insert({
  nome: "Nano Moura",
  tipo: 1,
  data_nascimento: ISODate("1984-04-28T11:35:09.736Z"),
  telefone: "(13)7314-1164",
  email: "nando@mestredocaptalismo.com",
  endereco: {
    logradouro: "Rua da Usina, s/n",
    numero: "21",
    complemento: "",
    bairro: "Nossa Senhora do Carmo",
    cidade: "Pombos",
    estado: "PE",
    cep: "55630-972"
  },
  ingresso: {
    tipo: 1,
    preco: 20,
    data_hora_entrada: ISODate("2019-11-28T10:00:09.116Z"),
    data_hora_saida: ISODate("2019-11-28T12:00:59.116Z"),
    quantidade: 2
  }
});

// // inserindo ingressos

// db.ingressos.insert({
//   cliente_id: ObjectId("5ddb265925e6201bc4ee3865"),
//   tipo: "inteiro",
//   preco: 10,
//   data_hora_entrada: ISODate("2019-11-28T10:00:09.116Z"),
//   data_hora_saida: ISODate("2019-11-28T12:00:59.116Z")
// });

// db.ingressos.insert({
//   cliente_id: ObjectId("5ddb265925e6201bc4ee3866"),
//   tipo: "meio",
//   preco: "R$5,00",
//   data_hora_entrada: ISODate("2019-11-08T09:45:15.116Z"),
//   data_hora_saida: ISODate("2019-11-08T14:23:09.116Z")
// });

// db.ingressos.insert({
//   cliente_id: ObjectId("5ddb265925e6201bc4ee3867"),
//   tipo: "meio",
//   preco: "R$5,00",
//   data_hora_entrada: ISODate("2019-10-18T09:55:15.116Z"),
//   data_hora_saida: ISODate("2019-10-18T13:03:09.116Z")
// });

// db.ingressos.insert({
//   cliente_id: ObjectId("5ddb265925e6201bc4ee3868"),
//   tipo: "gratuito",
//   preco: "R$0,00",
//   data_hora_entrada: ISODate("2019-10-10T10:55:15.116Z"),
//   data_hora_saida: ISODate("2019-10-10T14:03:09.116Z")
// });

// db.ingressos.insert({
//   cliente_id: ObjectId("5ddb26da25e6201bc4ee386c"),
//   tipo: "inteiro x 2",
//   preco: "R$20,00",
//   data_hora_entrada: ISODate("2019-11-30T10:00:15.116Z"),
//   data_hora_saida: ISODate("2019-11-30T14:45:39.116Z")
// });

// // inserindo enderecos

// db.enderecos.insert({
//   logradouro: "Rua Portela",
//   numero: "36A",
//   complemento: "",
//   bairro: "Várzea",
//   cidade: "Recife",
//   estado: "PE",
//   cep: "75131-545"
// });

// db.enderecos.insert({
//   logradouro: "Rua Ijaci",
//   numero: "345",
//   complemento: "Apartamento B",
//   bairro: "Santo Amaro",
//   cidade: "Recife",
//   estado: "PE",
//   cep: "50110-505"
// });

// db.enderecos.insert({
//   logradouro: "1ª Travessa da Amizade",
//   numero: "78",
//   complemento: null,
//   bairro: "Santo Amaro",
//   cidade: "Recife",
//   estado: "PE",
//   cep: "50110-841"
// });

// db.enderecos.insert({
//   logradouro: "Rua Rio Branco do Sul",
//   numero: "12",
//   complemento: "Bloco A",
//   bairro: "Vale das Pedreiras",
//   cidade: "Camaragibe",
//   estado: "PE",
//   cep: "54753-776"
// });

// db.enderecos.insert({
//   logradouro: "Avenida Betânia",
//   numero: "234",
//   complemento: null,
//   bairro: "Vera Cruz",
//   cidade: "Camaragibe",
//   estado: "PE",
//   cep: "54786-800"
// });

// db.enderecos.insert({
//   logradouro: "Rua do Comercio, s/n",
//   numero: "43",
//   complemento: "",
//   bairro: "Centro",
//   cidade: "Pombos",
//   estado: "PE",
//   cep: "55633-970"
// });

// db.enderecos.insert({
//   logradouro: "Rua da Usina, s/n",
//   numero: "21",
//   complemento: "",
//   bairro: "Nossa Senhora do Carmo",
//   cidade: "Pombos",
//   estado: "PE",
//   cep: "55630-972"
// });
