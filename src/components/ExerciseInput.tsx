import KgInput from "./KgInput";
import RepInput from "./RepInput";

export interface ExerciseInputProps {
  index: number;
  repRange: string;
  exerciseName: string;
  value?: { reps: number; weight: number };
  onSetChange: (data: { reps: number; weight: number; setNumber: number }) => void;
}

function ExerciseInput({ index, repRange, value, onSetChange }: Readonly<ExerciseInputProps>) {
  return (
    <div className="flex gap-4 justify-around">
      <span className="bg-[var(--muted)] w-16 h-auto flex items-center justify-center rounded-full">
        {index}
      </span>
      <KgInput
        value={value?.weight?.toString() ?? ""}
        onChangeValue={(val) => {
          const num = parseFloat(val);
          onSetChange({
            reps: value?.reps ?? 0,
            weight: isNaN(num) ? 0 : num,
            setNumber: index,
          });
        }}
      />
      <RepInput
        repRange={repRange}
        value={value?.reps?.toString() ?? ""}
        onChangeValue={(val) => {
          const num = parseInt(val);
          onSetChange({
            reps: isNaN(num) ? 0 : num,
            weight: value?.weight ?? 0,
            setNumber: index,
          });
        }}
      />
    </div>
  );
}

export default ExerciseInput;
