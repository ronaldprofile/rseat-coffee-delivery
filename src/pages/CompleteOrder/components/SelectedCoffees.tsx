import { Trash } from "phosphor-react";
import { QuantityCounter } from "../../../components/QuantityCounter";

export function SelectedCoffees() {
  return (
    <div>
      <strong className="inline-block mb-4 text-lg font-baloo font-bold text-gray-800">
        Cafés selecionados
      </strong>

      <div className="p-10 bg-gray-200 rounded-md">
        <div className="flex flex-col border-b pb-6 mb-6 border-gray-400">
          <div className="mb-3 flex gap-5">
            <img src="/coffees/tradicional.png" className="w-16 h-16" />

            <div className="flex flex-col">
              <span className="text-gray-800">Expresso tradicional</span>

              <span className="text-gray-700 font-bold">R$ 9,90</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <QuantityCounter />
            <button
              type="button"
              className="h-8 px-2 flex items-center justify-center gap-2 bg-purple-100 rounded-md uppercase text-xs"
            >
              <Trash size={16} className="text-purple-700" />
              Remover
            </button>
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Total de itens</span>
            <span className="text-gray-700">R$ 29, 70</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Entrega</span>
            <span className="text-gray-700">R$ 3,50</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-700">Total</span>
            <span className="text-xl font-bold text-gray-700">R$ 33,20</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full h-[46px] bg-yellow-700 text-white font-bold uppercase text-sm rounded-md hover:bg-yellow-800 transition-colors"
        >
          Comprar pedido
        </button>
      </div>
    </div>
  );
}
