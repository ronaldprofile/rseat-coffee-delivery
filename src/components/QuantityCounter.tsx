import { Plus, Minus } from "phosphor-react";

interface QuantityCounterProps {
  onIncrease: () => void;
  onDecrease: () => void;
  quantity: number;
}

export function QuantityCounter({
  onDecrease,
  onIncrease,
  quantity,
}: QuantityCounterProps) {
  const quantityIsLessThanOne = quantity <= 1;

  return (
    <div className="h-[38px] w-[72px] px-2 flex items-center justify-center gap-1 bg-gray-400 text-purple-700 rounded-md">
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantityIsLessThanOne}
        className="disabled:cursor-not-allowed"
      >
        <Minus size={14} className="text-purple-700" />
      </button>

      <span className="text-gray-900">{quantity}</span>

      <button type="button" onClick={onIncrease}>
        <Plus size={14} className="text-purple-700" />
      </button>
    </div>
  );
}
