import { ReactNode, useState } from "react";
import { CartCoffeeItem, CartContext } from "./CartContext";
import { produce } from "immer";

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartCoffeeItems, setCartCoffeeItems] = useState<CartCoffeeItem[]>([]);

  const cartCoffeeItemsQuantity = cartCoffeeItems.length;
  const cartCoffeeItemsTotal = cartCoffeeItems.reduce((total, coffeeItem) => {
    return total + coffeeItem.price * coffeeItem.quantity;
  }, 0);

  function addCoffeeToCart(coffee: CartCoffeeItem) {
    const alreadyCoffeeExistsInCart = cartCoffeeItems.findIndex(
      (coffeeItem) => coffeeItem.id === coffee.id
    );

    const newCart = produce(cartCoffeeItems, (draft) => {
      if (alreadyCoffeeExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[alreadyCoffeeExistsInCart].quantity += coffee.quantity;
      }
    });

    setCartCoffeeItems(newCart);
  }

  function updateCoffeeQuantity(
    coffeeId: number,
    action: "increase" | "decrease"
  ) {
    const newCart = produce(cartCoffeeItems, (draft) => {
      const alreadyCoffeeExistsInCart = cartCoffeeItems.findIndex(
        (coffeeItem) => coffeeItem.id === coffeeId
      );

      if (alreadyCoffeeExistsInCart >= 0) {
        const coffeeCurrent = draft[alreadyCoffeeExistsInCart];

        draft[alreadyCoffeeExistsInCart].quantity =
          action === "increase"
            ? coffeeCurrent.quantity + 1
            : coffeeCurrent.quantity - 1;
      }
    });

    setCartCoffeeItems(newCart);
  }

  function removeCoffeeCart(coffeeId: number) {
    const newCart = produce(cartCoffeeItems, (draft) => {
      const alreadyCoffeeExistsInCart = cartCoffeeItems.findIndex(
        (coffeeItem) => coffeeItem.id === coffeeId
      );

      if (alreadyCoffeeExistsInCart >= 0) {
        draft.splice(alreadyCoffeeExistsInCart, 1);
      }
    });

    setCartCoffeeItems(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cartCoffeeItems,
        cartCoffeeItemsQuantity,
        cartCoffeeItemsTotal,
        addCoffeeToCart,
        removeCoffeeCart,
        updateCoffeeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
