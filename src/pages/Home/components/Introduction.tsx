import {
  Package,
  ShoppingCart,
  Timer,
  Coffee as CoffeeIcon,
} from "phosphor-react";
import bgCoffeeDelivery from "../../../assets/bg-coffee-delivery.png";

export function Introduction() {
  return (
    <section className="w-full pt-[94px] pb-[140px] flex items-center justify-between">
      <div className="max-w-[588px]">
        <h1 className="font-baloo text-5xl font-bold text-gray-900">
          Encontre um café perfeito para qualquer hora do dia
        </h1>

        <p className="mt-4 font-roboto text-xl text-gray-800 font-normal">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <div className="mt-[66px]">
          <div className="max-w-[567px] grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 p-2 flex items-center justify-center rounded-full bg-yellow-800 text-white">
                  <ShoppingCart size={16} />
                </div>
                <span className="text-sm lg:text-base text-gray-700 font-normal">
                  Compra simples e segura
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 p-2 flex items-center justify-center rounded-full bg-yellow-700 text-white">
                  <Timer size={16} />
                </div>
                <span className="text-sm lg:text-base text-gray-700 font-normal">
                  Entrega rápida e rastreada
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 p-2 flex items-center justify-center rounded-full bg-gray-700 text-white">
                  <Package size={16} />
                </div>
                <span className="text-sm lg:text-base text-gray-700 font-normal">
                  Café chega intacto
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 p-2 flex items-center justify-center rounded-full bg-purple-700 text-white">
                  <CoffeeIcon size={16} />
                </div>
                <span className="text-sm lg:text-base text-gray-700 font-normal">
                  O café chega fresquinho
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img src={bgCoffeeDelivery} />
    </section>
  );
}
