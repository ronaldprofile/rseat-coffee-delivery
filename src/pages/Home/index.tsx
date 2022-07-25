import { Header } from "../../components/Header";
import { Introduction } from "./components/Introduction";
import { OurCoffees } from "./components/OurCoffees";

export function Home() {
  return (
    <div>
      <Header />

      <main className="max-w-[1120px] mx-auto">
        <Introduction />

        <OurCoffees />
      </main>
    </div>
  );
}
