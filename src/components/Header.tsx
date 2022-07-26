import { Link } from "react-router-dom";
import { useCart } from "../context/Cart/CartContext";
import { ShoppingCart, MapPin } from "phosphor-react";
import logoCoffeeDelivery from "../assets/logo.svg";

export function Header() {
  const { cartCoffeeItemsQuantity } = useCart();

  return (
    <header className="w-full sticky top-0 left-0 z-10 bg-gray-100 shadow">
      <div className="w-full max-w-[1120px] mx-auto py-8 flex items-center justify-between">
        <Link to="/">
          <img src={logoCoffeeDelivery} />
        </Link>

        <div className="flex items-center gap-3">
          <span className="py-[10px] px-2 text-purple-800 text-sm flex items-center gap-2 rounded-md bg-purple-100">
            <MapPin size={22} weight="fill" />
            Fortaleza, CE
          </span>

          <Link to="/cart" className="relative p-2 text-yellow-800 bg-yellow-100 rounded-sm">
            {cartCoffeeItemsQuantity >= 1 && (
              <span className="bg-yellow-800 text-white w-5 h-5 flex items-center justify-center rounded-full absolute -top-2 -right-2 text-xs">{cartCoffeeItemsQuantity}</span>
            )}
            <ShoppingCart size={22} weight="fill" />
          </Link>
        </div>
      </div>
    </header>
  );
}
