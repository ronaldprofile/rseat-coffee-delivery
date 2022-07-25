import { Link } from "react-router-dom";
import { ShoppingCart, MapPin } from "phosphor-react";
import logoCoffeeDelivery from "../assets/logo.svg";

export function Header() {
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
          
          <Link to="#" className="p-2 text-yellow-800 bg-yellow-100 rounded-sm">
            <ShoppingCart size={22} weight="fill" />
          </Link>
        </div>
      </div>
    </header>
  );
}
