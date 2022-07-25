import { Header } from "../../components/Header";
import { FormOrder } from "./components/FormOrder";

export function CompleteOrder() {
  return (
    <>
      <Header />

      <main className="max-w-[1120px] mx-auto">
        <div className="pt-10">
          <FormOrder />
        </div>
      </main>
    </>
  );
}
