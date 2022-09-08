db.produtos.find({
  valoresNutricionais: {
    $elemMatch: {
      $and: [
        {
          percentual: {
            $gte: 30,
            $lte: 40,
          },
        },
        { tipo: "proteínas" },
      ],
    },
  },
}, { _id: 0, nome: 1 });