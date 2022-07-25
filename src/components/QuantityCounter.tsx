import { Plus, Minus } from "phosphor-react";

export function QuantityCounter() {
  return (
    <div className="h-[38px] w-[72px] px-2 flex items-center justify-center gap-1 bg-gray-400 text-purple-700 rounded-md">
      <button>
        <Minus size={14} className="text-purple-700" />
      </button>
      <span className="text-gray-900">1</span>
      <button className="">
        <Plus size={14} className="text-purple-700" />
      </button>
    </div>
  );
}
