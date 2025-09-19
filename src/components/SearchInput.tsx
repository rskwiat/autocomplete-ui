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
    <fieldset className="">
      <label
        htmlFor={label}
      />
      <input
        type='search'
        className="border-solid p-4 border-2"
        onChange={onChange}
      />
    </fieldset>
  );
};