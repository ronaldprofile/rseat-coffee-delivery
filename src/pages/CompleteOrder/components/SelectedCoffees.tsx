import { useCart } from "../../../context/Cart/CartContext";
import { CoffeeCardSelected } from "./CoffeeCardSelected";
import { Summary } from "./Summary";

export function SelectedCoffees() {
  const { cartCoffeeItems, cartCoffeeItemsQuantity } = useCart();

  const quantityCoffeeItemsIsLessThanOne = cartCoffeeItemsQuantity < 1;

  return (
    <div>
      <strong className="inline-block mb-4 text-lg font-baloo font-bold text-gray-800">
        Cafés selecionados
      </strong>

      <div className="p-10 bg-gray-200 rounded-md">
        {cartCoffeeItems.map((coffeeItem) => {
          return <CoffeeCardSelected key={coffeeItem.id} coffee={coffeeItem} />;
        })}

        <Summary />

        <button
          type="submit"
          disabled={quantityCoffeeItemsIsLessThanOne}
          className={`w-full h-[46px] bg-yellow-700 text-white font-bold uppercase text-sm rounded-md ${!quantityCoffeeItemsIsLessThanOne && 'hover:bg-yellow-800'} transition-colors disabled:cursor-not-allowed disabled:opacity-70`}
        >
          Comprar pedido
        </button>
      </div>
    </div>
  );
}
