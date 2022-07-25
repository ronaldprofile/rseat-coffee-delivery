import { Header } from "../../components/Header";
import { FormOrder } from "./components/FormOrder";

export function CompleteOrder() {
  return (
    <>
      <Header />

      <main className="max-w-[1120px] mx-auto">
        <div className="pt-10 flex items-start gap-8">
          <div>
            <strong className="inline-block mb-4 text-lg font-baloo font-bold text-gray-800">
              Complete seu pedido
            </strong>

            <FormOrder />
          </div>

          <div>
            <strong className="inline-block mb-4 text-lg font-baloo font-bold text-gray-800">
              Cafés selecionados
            </strong>

            <div className="p-10 bg-gray-200 rounded-md">
              <button>Comprar pedido</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
