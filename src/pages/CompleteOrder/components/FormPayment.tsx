import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";

export function FormPayment() {
  return (
    <div className="mt-3 p-10 bg-gray-200 rounded-md">
      <div className="mb-8 flex items-start gap-2">
        <CurrencyDollar size={22} color="#8047f8" />
        <div className="flex flex-col">
          <span className="text-gray-800">Pagamento</span>
          <p className="text-sm text-gray-700">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="h-[50px] px-4 bg-gray-400 text-gray-700 rounded-md flex items-center justify-center gap-3"
        >
          <CreditCard size={22} color="#8047f8" />
          Cartão de crédito
        </button>
        <button
          type="button"
          className="h-[50px] px-4 bg-gray-400 text-gray-700 rounded-md flex items-center justify-center gap-3"
        >
          <Bank size={22} color="#8047f8" />
          Cartão de débito
        </button>
        <button
          type="button"
          className="h-[50px] px-4 bg-gray-400 text-gray-700 rounded-md flex items-center justify-center gap-3"
        >
          <Money size={22} color="#8047f8" />
          Dinheiro
        </button>
      </div>
    </div>
  );
}
