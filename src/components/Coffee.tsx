import { ShoppingCart } from "phosphor-react";
import imageCoffeeOne from "../assets/coffee/1.png";
import { Counter } from "./Counter";

interface CoffeeProps {
  name: string;
  description: string;
  tag: string;
  value: string;
}

export function Coffee({ name, description, tag, value }: CoffeeProps) {
  return (
    <div className="bg-gray-200 rounded-t-md rounded-b-[36px] py-5 px-5 flex flex-col items-center text-center relative">
      <img src={imageCoffeeOne} className="absolute -top-5" />
      <span className="bg-yellow-100 p-2 mt-3 mb-4 inline-block rounded-full uppercase text-[10px] font-bold text-yellow-800">
        {tag}
      </span>

      <div className="mb-8 flex flex-col gap-2">
        <strong className="text-xl text-gray-800 font-baloo">{name}</strong>
        <p className="text-sm font-normal text-gray-600">{description}</p>
      </div>

      <div className="w-full flex items-center justify-between">
        <span className="text-gray-700 text-sm">R$ {value}</span>

        <div className="flex items-center gap-2">
          <Counter />
          <button className="h-[38px] flex items-center justify-center p-2 bg-purple-800 text-white rounded-md hover:bg-purple-700 transition-colors">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
}
