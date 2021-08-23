export let arrayItems = [
  {
    id: 1,
    title: "Remera Rufit Azul",
    price: 900,
    category: "remeras",
    pictureUrl: "../assets/img/a.jpg",
  },
  {
    id: 2,
    title: "Remera Rufit Salmon",
    price: 900,
    category: "remeras",
    pictureUrl: "../assets/img/remera_rufit_salmon.jpg",
  },
  {
    id: 3,
    title: "Proteinas ",
    category: "suplementos",
    price: 1300,
    pictureUrl: "../assests/img/syntha_6.jpg",
  },
];

export const productos = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arrayItems);
    }, 2000);
  });
  return promise;
};
