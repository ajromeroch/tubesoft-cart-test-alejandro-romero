import {
  cartsReducer,
  newCart,
  addToCart,
  removeFromCart,
  cancelFromCart,
  deleteAllCart,
} from "./store/carts";

describe("Carro de compra Redux", () => {
  const initialState = {
    allCarts: [],
    actualCartId: 0,
    activeCart: null,
  };

  const products = [
    {
      id: 1,
      name: "Mostacilla Degrade",
      precio: 42990,
    },
    {
      id: 2,
      name: "Aros Maida",
      precio: 68990,
    },
    {
      id: 3,
      name: "Aros Tribu",
      precio: 45990,
    },
  ];

  test("devuelve el estado inicial", () => {
    expect(cartsReducer(undefined, {})).toEqual(initialState);
  });

  test("empieza un carro nuevo", () => {
    expect(cartsReducer(initialState, newCart)).toEqual({
      ...initialState,
      activeCart: [],
    });
  });

  //After the creation of the cart
  const initializedCart = {
    ...initialState,
    activeCart: [],
  };

  const firstProductAdded = { ...products[0], qty: 1 };
  const secondProductAdded = { ...products[0], qty: 2 };
  const thirdProductAdded = { ...products[1], qty: 2 };
  const cartWithProduct = {
    ...initializedCart,
    activeCart: [firstProductAdded],
  };
  const cartWithTwoProducts = {
    ...initializedCart,
    activeCart: [firstProductAdded, thirdProductAdded],
  };

  describe("agregando al carro", () => {
    test("permite agregar un item al carrito", () => {
      expect(
        cartsReducer(initializedCart, addToCart(firstProductAdded))
      ).toEqual({
        ...initializedCart,
        activeCart: [firstProductAdded],
      });
    });

    test("no duplica el mismo item en el carrito", () => {
      expect(
        cartsReducer(cartWithProduct, addToCart(secondProductAdded)).activeCart
          .length
      ).toEqual(1);
    });

    test("agrega item si no esta en carrito", () => {
      expect(
        cartsReducer(cartWithProduct, addToCart(thirdProductAdded)).activeCart
          .length
      ).toEqual(2);
    });
  });

  describe("sacando items del carro", () => {
    test("remover item del carro con solo un elemento", () => {
      expect(
        cartsReducer(
          cartWithProduct,
          removeFromCart({ ...firstProductAdded, qty: 0 })
        ).activeCart.length
      ).toEqual(0);
    });
    test("remover item del carro con mismo elemento cantidad 2", () => {
      expect(
        cartsReducer(
          cartWithProduct,
          removeFromCart({ ...secondProductAdded, qty: 1 })
        ).activeCart.length
      ).toEqual(1);
    });

    test("remover del carro item correspondiente", () => {
      expect(
        cartsReducer(
          cartWithTwoProducts,
          removeFromCart({ ...firstProductAdded, qty: 0 })
        ).activeCart
      ).toEqual([thirdProductAdded]);
    });

    test("remover completamente del carro item con cantidad > 1", () => {
      expect(
        cartsReducer(cartWithTwoProducts, cancelFromCart(secondProductAdded))
          .activeCart
      ).toEqual([thirdProductAdded]);
    });
  });

  describe("borra todo el carro", () => {
    test("elimina todos los productos del carro", () => {
      expect(
        cartsReducer(cartWithTwoProducts, deleteAllCart({})).activeCart
      ).toEqual(null);
    });
  });
});
