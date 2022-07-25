import { Header } from "../components/Header";

import bgIllustrationDelivery from "../assets/bg-delivery.png";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function Success() {
  return (
    <>
      <Header />
      <div className="max-w-[1120px] mx-auto pt-[80px]">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="font-baloo font-bold text-[32px] text-yellow-800">
              Uhu! Pedido confirmado
            </h2>
            <p className="text-xl text-gray-700">
              Agora é só aguardar que logo o café chegará até você
            </p>

            <div className="mt-10 p-10 flex flex-col gap-8 rounded-t-md rounded-b-[36px] border border-gray-400">
              <div className="flex flex-start gap-5">
                <div className="w-8 h-8 flex items-center justify-center bg-purple-700 text-white rounded-full">
                  <MapPin size={16} />
                </div>

                <div>
                  <span className="text-gray-700">
                    Entrega em <strong>Rua José Guilherme Costa, 100</strong>
                  </span>
                  <p className="text-gray-700">Farrapos - Porto Alegre, RS</p>
                </div>
              </div>
              
              <div className="flex flex-start gap-5">
                <div className="w-8 h-8 flex items-center justify-center bg-yellow-700 text-white rounded-full">
                  <Timer size={16} />
                </div>

                <div>
                  <span className="text-gray-700">
                    Previsão de entrega
                  </span>
                  <p className="font-bold text-gray-700">20 min - 30 min</p>
                </div>
              </div>

               <div className="flex flex-start gap-5">
                <div className="w-8 h-8 flex items-center justify-center bg-yellow-800 text-white rounded-full">
                  <CurrencyDollar size={16} />
                </div>

                <div>
                  <span className="text-gray-700">
                    Pagamento na entrega
                  </span>
                  <p className="font-bold text-gray-700">Cartão de crédito</p>
                </div>
              </div>
            </div>
          </div>

          <img src={bgIllustrationDelivery} />
        </div>
      </div>
    </>
  );
}
