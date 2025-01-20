interface SelectProps {
  label: string;
  options: string[];
}
export function Select({ options, label }: SelectProps) {
  return (
    <div>
      <label htmlFor="location" className="text-sm/6 font-medium text-white">
        {label}
      </label>
      <select className="mt-2 w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-inset focus:ring-4 hover:ring-[#027BFF] sm:text-sm/6">
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
}
