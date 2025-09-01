import { useState } from "react";
import { Input } from "./ui/input";

function KgInput({ onChangeValue }: { onChangeValue: (val: string) => void }) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9.,]/g, "");
    setValue(raw);
    onChangeValue(raw);
  };

  const handleBlur = () => {
    if (value && !value.endsWith("kg")) {
       const normalized = value.replace(",", ".");
      setValue(`${normalized} kg`);
    }
  };

  const handleFocus = () => {
    // remove "kg" when editing again
    if (value.endsWith(" kg")) {
      setValue(value.replace(" kg", ""));
    }
  };

  return (
    <Input
      type="text"
      inputMode="decimal"
      pattern="[0-9]*[.,]?[0-9]*"
      className="bg-[var(--muted)] border-0 font-bold text-center text-[var(--muted-foreground)]"
      value={value}
      placeholder="-"
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
    />
  );
}

export default KgInput;
