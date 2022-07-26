import { createContext, useContext } from "react";
import { Coffee } from "../../@types/coffee";

export interface CartCoffeeItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartCoffeeItems: CartCoffeeItem[];
  cartCoffeeItemsQuantity: number;
  cartCoffeeItemsTotal: number;
  addCoffeeToCart: (coffee: CartCoffeeItem) => void;
  removeCoffeeCart: (coffeeId: number) => void;
  updateCoffeeQuantity: (
    coffeeId: number,
    action: "increase" | "decrease"
  ) => void;
}

export const CartContext = createContext({} as CartContextType);
export const useCart = () => useContext(CartContext);
