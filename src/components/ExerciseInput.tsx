import { useState } from "react";
import KgInput from "./KgInput";
import RepInput from "./RepInput";

export interface ExerciseInputProps {
  index: number;
  repRange: string;
  exerciseName: string;
  onSetChange: (data: { reps: number; weight: number; setNumber: number }) => void;
}

function ExerciseInput({ index, repRange, onSetChange }: Readonly<ExerciseInputProps>) {
  const [weight, setWeight] = useState<number | null>(null);
  const [reps, setReps] = useState<number | null>(null);

  return (
    <div className="flex gap-4 justify-around">
      <span className="bg-[var(--muted)] w-16 h-auto flex items-center justify-center rounded-full">
        {index}
      </span>
      <KgInput
        onChangeValue={(val) => {
          const num = parseFloat(val);
          setWeight(num);
          if (reps !== null) {
            onSetChange({ reps, weight: num, setNumber: index });
          }
        }}
      />
      <RepInput
        repRange={repRange}
        onChangeValue={(val) => {
          const num = parseInt(val);
          setReps(num);
          if (weight !== null) {
            onSetChange({ reps: num, weight, setNumber: index });
          }
        }}
      />
    </div>
  );
}

export default ExerciseInput;