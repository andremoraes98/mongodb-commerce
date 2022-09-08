db.produtos.find({
  valoresNutricionais: {
    $elemMatch: {
      $and: [
        {
          quantidade: {
            $lt: 500,
          },
        },
        { tipo: "calorias" },
      ],
    },
  },
}, { _id: 0, nome: 1 });