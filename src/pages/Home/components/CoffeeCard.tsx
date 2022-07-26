import { useState } from "react";
import { useCart } from "../../../context/Cart/CartContext";
import { ShoppingCart } from "phosphor-react";
import { formatPrice } from "../../../utils/formatCurrency";
import { QuantityCounter } from "../../../components/QuantityCounter";

interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantityCoffee, setQuantityCoffee] = useState(1);
  const { addCoffeeToCart } = useCart();

  function handleIncreaseQuantityCoffee() {
    setQuantityCoffee((state) => state + 1);
  }

  function handleDecreaseQuantityCoffee() {
    setQuantityCoffee((state) => state - 1);
  }

  function handleAddToCart() {
    const newCoffee = {
      ...coffee,
      quantity: quantityCoffee,
    };

    addCoffeeToCart(newCoffee);
  }

  const formattedPrice = formatPrice(coffee.price);

  return (
    <div className="bg-gray-200 rounded-t-md rounded-b-[36px] pb-5 px-5 flex flex-col items-center text-center relative">
      <img src={`/coffees/${coffee.photo}`} className="-mt-5" />

      <div className="mt-3 mb-4 flex flex-wrap gap-1">
        {coffee.tags.map((tag) => (
          <span
            key={`${coffee.id}${tag}`}
            className="bg-yellow-100 p-2 inline-block rounded-full uppercase text-[10px] font-bold text-yellow-800"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mb-8 flex flex-col gap-2">
        <strong className="text-xl text-gray-800 font-baloo">
          {coffee.name}
        </strong>
        <p className="text-sm font-normal text-gray-600">
          {coffee.description}
        </p>
      </div>

      <div className="w-full flex items-center justify-between">
        <div className="text-gray-700">
          <span className="text-sm">R$ </span>
          <span className="font-bold text-2xl">{formattedPrice}</span>
        </div>

        <div className="flex items-center gap-2">
          <QuantityCounter
            onIncrease={handleIncreaseQuantityCoffee}
            onDecrease={handleDecreaseQuantityCoffee}
            quantity={quantityCoffee}
          />
          <button
            onClick={handleAddToCart}
            className="h-[38px] flex items-center justify-center p-2 bg-purple-800 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
}
