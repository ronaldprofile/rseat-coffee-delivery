import { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={clsx(
        `h-[42px] px-3 rounded bg-gray-300 text-gray-600 border border-gray-400 placeholder:text-gray-600 focus:border-yellow-800 transition-all focus:outline-none`,
        className
      )}
    />
  );
}
