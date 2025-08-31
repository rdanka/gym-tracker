import { useState } from "react";
import { Input } from "./ui/input";

function RepInput() {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9.]/g, "");
    setValue(raw);
  };

  const handleBlur = () => {
    if (value && !value.endsWith("reps")) {
      setValue(`${value} reps`);
    }
  };

  const handleFocus = () => {
    // remove "kg" when editing again
    if (value.endsWith(" reps")) {
      setValue(value.replace(" reps", ""));
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

export default RepInput;
