import KgInput from "./KgInput";
import RepInput from "./RepInput";

export interface ExerciseInputProps {
    index: number;
}

function ExerciseInput({index}: Readonly<ExerciseInputProps>) {


    return(
        <div className="flex gap-4 justify-around">
            <span className="bg-[var(--muted)] w-16 h-auto flex items-center justify-center rounded-full">
              {index}
            </span>
            <KgInput />
            <RepInput />
          </div>
    )
}

export default ExerciseInput;