import Product from "../models/Product";

export const productsInitialState = [
  new Product(
    111,
    "Mattel Uno Playing Card Game",
    "https://images-eu.ssl-images-amazon.com/images/I/41R8fti5wnL._AC_US160_FMwebp_QL70_.jpg",
    129
  ),
  new Product(
    222,
    "Nerf Disruptor Elite Blaster",
    "https://images-eu.ssl-images-amazon.com/images/I/41zn91YS7-L._AC_US160_FMwebp_QL70_.jpg",
    881
  ),
  new Product(
    333,
    "Hot wheels 5 car gift pack",
    "https://images-eu.ssl-images-amazon.com/images/I/41G7anPVPFL._AC_US160_FMwebp_QL70_.jpg",
    537
  ),
  new Product(
    444,
    "Mattel Scrabble Board Game, Multi Color",
    "https://images-eu.ssl-images-amazon.com/images/I/61I2tgDw6JL._AC_US160_FMwebp_QL70_.jpg",
    567
  ),
  new Product(
    555,
    "Nerf N-Strike Nano Fire, Green",
    "https://images-eu.ssl-images-amazon.com/images/I/51TJ5lsZb4L._AC_US160_FMwebp_QL70_.jpg",
    440
  ),
  new Product(
    666,
    "Popsugar 4 Wheel Drive",
    "https://images-eu.ssl-images-amazon.com/images/I/510WyJYfnqL._AC_US160_FMwebp_QL70_.jpg",
    1379
  ),
];

const productsReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
