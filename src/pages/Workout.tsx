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
import { supabase } from "@/lib/supabase";
import type { DayType, ExerciseDef } from "@/types/routine";
import { BicepsFlexed, ChevronLeft, ChevronRight, Flag } from "lucide-react";
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
    routine.days[dayNames[new Date().getDay()]]
  );
  const navigate = useNavigate();
  const [results, setResults] = useState<
    {
      name: string;
      sets: { reps: number; weight: number; setNumber: number }[];
    }[]
  >([]);

  const handleWorkoutFinish = () => {
    saveWorkout();
    navigate("/home");
  };

  const handleWorkoutChange = () => {
    saveWorkout();
    setWorkoutType("abs");
  };

  async function saveWorkout() {
    const { error } = await supabase.from("workout_logs").insert([
      {
        date: new Date().toISOString().split("T")[0],
        workoutType,
        exercises: results, 
      },
    ]);

    if (error) console.error(error);
    else console.log("Workout saved!");
  }

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
          <CardAction >
           <div className="flex">
            <ChevronLeft onClick={() => setCurrentExercise((prev) => Math.min(prev - 1, workout.length))}/>
            <ChevronRight onClick={() => setCurrentExercise((prev) => Math.min(prev + 1, workout.length))}/>
           </div>
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          {[...Array(workout[currentExercise]?.sets || 0)].map((_, index) => {
  const saved = results
    .find((e) => e.name === workout[currentExercise]?.exercise)
    ?.sets.find((s) => s.setNumber === index + 1);

  return (
    <ExerciseInput
      key={`${workout[currentExercise]?.exercise}-${index}`}
      index={index + 1}
      repRange={workout[currentExercise]?.reps}
      exerciseName={workout[currentExercise]?.exercise}
      value={saved} // 👈 pass saved values
      onSetChange={(setData) => {
        setResults((prev) => {
          const existing = prev.find(
            (e) => e.name === workout[currentExercise]?.exercise
          );
          if (existing) {
            return prev.map((e) =>
              e.name === workout[currentExercise]?.exercise
                ? {
                    ...e,
                    sets: [
                      ...e.sets.filter(
                        (s) => s.setNumber !== setData.setNumber
                      ),
                      setData,
                    ],
                  }
                : e
            );
          } else {
            return [
              ...prev,
              {
                name: workout[currentExercise]?.exercise ?? "",
                sets: [setData],
              },
            ];
          }
        });
      }}
    />
  );
})}

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
            <Button
              className="w-full text-black font-bold py-5"
              onClick={handleWorkoutFinish}
            >
              <Flag />
              Finish workout
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button
                className="w-1/2 text-black font-bold py-5"
                onClick={handleWorkoutChange}
              >
                <BicepsFlexed />
                Continue with abs
              </Button>
              <Button
                className="w-1/2 bg-white text-black font-bold py-5"
                onClick={handleWorkoutFinish}
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
