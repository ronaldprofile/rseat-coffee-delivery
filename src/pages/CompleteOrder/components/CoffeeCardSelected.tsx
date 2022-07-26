import { Trash } from "phosphor-react";
import { QuantityCounter } from "../../../components/QuantityCounter";
import { CartCoffeeItem, useCart } from "../../../context/Cart/CartContext";
import { formatPrice } from "../../../utils/formatCurrency";

interface CoffeeCardSelectedProps {
  coffee: CartCoffeeItem;
}

export function CoffeeCardSelected({ coffee }: CoffeeCardSelectedProps) {
  const { updateCoffeeQuantity, removeCoffeeCart } = useCart();

  function handleIncreaseQuantityCoffee() {
    updateCoffeeQuantity(coffee.id, "increase");
  }

  function handleDecreaseQuantityCoffee() {
    updateCoffeeQuantity(coffee.id, "decrease");
  }

  function handleRemoveCoffeeCart() {
    removeCoffeeCart(coffee.id);
  }

  const coffeeAmount = coffee.price * coffee.quantity;
  const formattedPrice = formatPrice(coffeeAmount);

  return (
    <div className="flex flex-col border-b pb-6 mb-6 border-gray-400">
      <div className="mb-3 flex gap-5">
        <img src={`/coffees/${coffee.photo}`} className="w-16 h-16" />

        <div className="flex flex-col">
          <span className="text-gray-800">{coffee.name}</span>

          <span className="text-gray-700 font-bold">R$ {formattedPrice}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <QuantityCounter
          onIncrease={handleIncreaseQuantityCoffee}
          onDecrease={handleDecreaseQuantityCoffee}
          quantity={coffee.quantity}
        />
        <button
          type="button"
          onClick={handleRemoveCoffeeCart}
          className="h-8 px-2 flex items-center justify-center gap-2 bg-purple-100 rounded-md uppercase text-xs"
        >
          <Trash size={16} className="text-purple-700" />
          Remover
        </button>
      </div>
    </div>
  );
}
