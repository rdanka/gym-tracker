import { Input } from "./ui/input";

function RepInput({
  repRange,
  value,
  onChangeValue,
}: {
  repRange: string;
  value: string;
  onChangeValue: (val: string) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    onChangeValue(raw);
  };

  const handleBlur = () => {
    if (value && !value.endsWith("reps")) {
      onChangeValue(`${value} reps`);
    }
  };

  const handleFocus = () => {
    if (value.endsWith(" reps")) {
      onChangeValue(value.replace(" reps", ""));
    }
  };

  return (
    <Input
      type="text"
      inputMode="decimal"
      pattern="[0-9]*"
      className="bg-[var(--muted)] border-0 font-bold text-center text-[var(--muted-foreground)] [&::placeholder]:opacity-30"
      value={value}
      placeholder={`${repRange} reps`}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
    />
  );
}

export default RepInput;
