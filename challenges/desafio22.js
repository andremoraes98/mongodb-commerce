db.produtos.updateMany(
  {},
  { $set: { vendasPorDia: new Array(7).fill(0) } },
);

db.produtos.updateMany(
  { nome: "Big Mac" },
  { $inc: { "vendasPorDia.3": 60 } },
);

db.produtos.updateMany(
  { tags: { $in: ["bovino"] } },
  { $inc: { "vendasPorDia.6": 120 } },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, vendasPorDia: 1 },
);