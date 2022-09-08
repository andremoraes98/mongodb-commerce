db.produtos.updateMany(
  { nome: { $exists: true } },
  { $set: {
    avaliacao: 0,
  } },
  { upsert: true },
);

db.produtos.updateMany(
  { tags: { $in: ["bovino"] } },
  { $inc: { avaliacao: 5 } },
);

db.produtos.updateMany(
  { tags: { $in: ["ave"] } },
  { $inc: { avaliacao: 3 } },
);

db.produtos.find({}, { _id: 0, nome: 1, avaliacao: 1 });