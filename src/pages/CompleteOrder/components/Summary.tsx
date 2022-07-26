import { useCart } from "../../../context/Cart/CartContext";
import { formatPrice } from "../../../utils/formatCurrency";

const DELIVERY_PRICE = 3.5;

export function Summary() {
  const { cartCoffeeItemsTotal } = useCart();
  const cartTotalAmount = DELIVERY_PRICE + cartCoffeeItemsTotal;

  const formattedDeliveryPrice = formatPrice(DELIVERY_PRICE);
  const formattedItensTotal = formatPrice(cartCoffeeItemsTotal);
  const formattedICartTotalAmount = formatPrice(cartTotalAmount);



  return (
    <div className="mb-6 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-700">Total de itens</span>
        <span className="text-gray-700">R$ {formattedItensTotal}</span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-700">Entrega</span>
        <span className="text-gray-700">R$ {formattedDeliveryPrice}</span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-gray-700">Total</span>
        <span className="text-xl font-bold text-gray-700">R$ {formattedICartTotalAmount}</span>
      </div>
    </div>
  );
}
