import { ButtonTypes } from "@src/types";


export default function Button({ label }: ButtonTypes.ButtonProps) {
  return (
    <button className="w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-gray-700 dark:highlight-white/5 dark:hover:bg-gray-800">
      {label}
    </button>
  );
}
