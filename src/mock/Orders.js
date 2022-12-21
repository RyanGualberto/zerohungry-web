// array com orders, com os campos mesa, status, produtos, valores unitários e totais
const orders = [
  {
    id: 1,
    table: 1,
    status: "open",
    total: 12,
    time: "12:00",
    products: [
      {
        id: 1,
        name: "Cafasdasdasdasdsdasdasdasdasdasdsdsadsdsadasdasdasasdé",
        price: 5,
        quantity: 1,
        status: "pending",
      },
      {
        id: 2,
        name: "Suco",
        price: 7,
        quantity: 1,
        status: "pending",
      },
    ],
  },
  {
    id: 2,
    table: 2,
    status: "open",
    total: 19,
    time: "12:00",
    products: [
      {
        id: 1,
        name: "Café",
        price: 5,
        quantity: 1,
        status: "pending",
      },
      {
        id: 2,
        name: "Suco",
        price: 7,
        quantity: 1,
        status: "pending",
      },
      {
        id: 3,
        name: "Energético",
        price: 7,
        quantity: 1,
        status: "pending",
      },
    ],
  },
  {
    id: 3,
    table: 3,
    status: "open",
    total: 22,
    time: "11:00",
    products: [
      {
        id: 1,
        name: "Café",
        price: 5,
        quantity: 1,
        status: "pending",
      },
      {
        id: 2,
        name: "Suco",
        price: 7,
        quantity: 1,
        status: "pending",
      },
      {
        id: 3,
        name: "Energético",
        price: 7,
        quantity: 1,
        status: "pending",
      },
      {
        id: 4,
        name: "Chá",
        price: 3,
        quantity: 1,
        status: "pending",
      },
      {
        id: 5,
        name: "Chá",
        price: 3,
        quantity: 1,
        status: "pending",
      },
    ],
  },
  {
    id: 4,
    table: 4,
    status: "open",
    total: 22,
    time: "11:00",
    products: [
      {
        id: 1,
        name: "Café",
        price: 5,
        quantity: 1,
        status: "pending",
      },
      {
        id: 2,
        name: "Suco",
        price: 7,
        quantity: 1,
        status: "pending",
      },
      {
        id: 3,
        name: "Energético",
        price: 7,
        quantity: 1,
        status: "pending",
      },
      {
        id: 4,
        name: "Chá",
        price: 3,
        quantity: 1,
        status: "pending",
      },
    ],
  },
  {
    id: 5,
    table: 1,
    status: "paid",
    time: "12:00",
    total: 12,
    products: [
      {
        id: 1,
        name: "Café",
        price: 5,
        quantity: 1,
        status: "pending",
      },
      {
        id: 2,
        name: "Suco",
        price: 7,
        quantity: 1,
        status: "pending",
      },
    ],
  },
];

export default orders;