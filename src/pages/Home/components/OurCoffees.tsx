import { CoffeeCard } from "./CoffeeCard";
import { coffees } from "../../../data/coffees";

export function OurCoffees() {
  return (
    <section>
      <h2 className="text-[32px] text-gray-800 font-baloo font-bold">
        Nossos cafés
      </h2>

      <div className="mt-[54px] grid grid-cols-4 gap-8">
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />;
        })}
      </div>
    </section>
  );
}
