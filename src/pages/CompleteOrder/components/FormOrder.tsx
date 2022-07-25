import { Input } from "../../../components/Input";
import { FormPayment } from "./FormPayment";
import { SelectedCoffees } from "./SelectedCoffees";
import { MapPinLine } from "phosphor-react";

export function FormOrder() {
  return (
    <form className="w-full flex gap-8">
      <div>
        <strong className="inline-block mb-4 text-lg font-baloo font-bold text-gray-800">
          Complete seu pedido
        </strong>

        <div className="p-10 bg-gray-200 rounded-md">
          <div className="mb-8 flex items-start gap-2">
            <MapPinLine size={22} color="#c47f17" />
            <div className="flex flex-col">
              <span className="text-gray-800">Endereço de entrega</span>
              <p className="text-sm text-gray-700">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="cep" className="sr-only">
                informe seu CEP
              </label>
              <Input type="text" id="cep" placeholder="CEP" />
            </div>

            <div className="flex-1">
              <label htmlFor="street" className="sr-only">
                Informe sua Rua
              </label>
              <Input
                type="text"
                id="street"
                placeholder="Rua"
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-3">
              <div>
                <label htmlFor="house_number" className="sr-only">
                  Informe o número da sua casa
                </label>
                <Input type="text" id="house_number" placeholder="Número" />
              </div>

              <div className="flex-1">
                <label htmlFor="house_complement" className="sr-only">
                  Informe o complemento
                </label>
                <Input
                  type="text"
                  id="house_complement"
                  placeholder="Complemento"
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <label htmlFor="district" className="sr-only">
                  Informe seu bairro
                </label>
                <Input type="text" id="district" placeholder="Bairro" />
              </div>

              <div className="flex-1">
                <label htmlFor="city" className="sr-only">
                  Informe sua cidade
                </label>
                <Input
                  type="text"
                  id="city"
                  placeholder="Cidade"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="uf" className="sr-only">
                  Informe o UF do seu estado
                </label>
                <Input type="text" id="uf" placeholder="UF" />
              </div>
            </div>
          </div>
        </div>

        <FormPayment />
      </div>

      <SelectedCoffees />
    </form>
  );
}
