import { Input } from "./ui/input";

function KgInput({
  value,
  onChangeValue,
}: {
  value: string;
  onChangeValue: (val: string) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9.,]/g, "");
    onChangeValue(raw); // parent now owns state
  };

  const handleBlur = () => {
    if (value && !value.endsWith("kg")) {
      const normalized = value.replace(",", ".");
      onChangeValue(`${normalized} kg`);
    }
  };

  const handleFocus = () => {
    if (value.endsWith(" kg")) {
      onChangeValue(value.replace(" kg", ""));
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
