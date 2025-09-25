import type { ChangeEvent } from "react";

interface SearchInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export default function SearchInput({
  onChange,
  label
}: SearchInputProps) {
  return (
    <fieldset className="mb-4 w-xl">
      <label
        htmlFor={label}
      />
      <input
        type="search"
        className="block p-4 w-full text-gray-900 border order-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500"
        onChange={onChange}
      />
    </fieldset>
  );
};