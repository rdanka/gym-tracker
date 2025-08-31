import ExerciseInput from "@/components/ExerciseInput";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { routine } from "@/data";
import type { DayType, ExerciseDef } from "@/types/routine";
import { BicepsFlexed, Ellipsis, Flag } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Workout() {
  const dayNames: DayType[] = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const [currentExercise, setCurrentExercise] = useState(0);
  const [workout, setWorkout] = useState<ExerciseDef[]>([]);
  const [workoutType, setWorkoutType] = useState<string>(
    routine.days[dayNames[new Date().getDay() + 1]]
  );
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentExercise(0);
    setWorkout(routine.workouts[workoutType] || []);
  }, [workoutType]);

  return (
    <>
      <h1 className="w-full text-center font-bold py-2">Workout</h1>

      <h1 className="w-full font-bold text-2xl">{workoutType}</h1>

      <div className="py-2 flex flex-col gap-1.5">
        <span className="text-[var(--muted-foreground)] text-sm">
          {currentExercise + 1}/{workout.length} exercises done
        </span>
        <Progress value={((currentExercise + 1) / workout.length) * 100} />
      </div>

      <Card className="w-full border-0 my-5">
        <CardHeader>
          <CardTitle>{workout[currentExercise]?.exercise}</CardTitle>
          <CardDescription className="text-[var(--muted-foreground)] text-sm">
            60kg x 8 | 60kg x 8 | 60kg x 8
          </CardDescription>
          <CardAction>
            <Ellipsis />
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          {[...Array(workout[currentExercise]?.sets || 0)].map((_, index) => (
            <ExerciseInput
              key={`${workout[currentExercise]?.exercise}-${index}`}
              index={index + 1}
              repRange={workout[currentExercise]?.reps}
            />
          ))}
          {currentExercise + 1 !== workout.length ? (
            <Button
              className="w-full text-black font-bold py-5"
              onClick={() =>
                setCurrentExercise((prev) => Math.min(prev + 1, workout.length))
              }
            >
              Complete Exercise
            </Button>
          ) : workoutType === "abs" ? (
            // Only one button full width
            <Button
              className="w-full text-black font-bold py-5"
              onClick={() => navigate("/home")}
            >
              <Flag />
              Finish workout
            </Button>
          ) : (
            // Two buttons side by side
            <div className="flex gap-2">
              <Button
                className="w-1/2 text-black font-bold py-5"
                onClick={() => setWorkoutType("abs")}
              >
                <BicepsFlexed />
                Continue with abs
              </Button>
              <Button
                className="w-1/2 bg-white text-black font-bold py-5"
                onClick={() => navigate("/home")}
              >
                <Flag />
                Finish workout
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}

export default Workout;
