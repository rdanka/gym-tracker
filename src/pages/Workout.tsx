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
import { Ellipsis } from "lucide-react";

function Workout() {
    const sets = [{},{},{}]
  return (
    <>
      <h1 className="w-full text-center font-bold py-2">Workout</h1>

      <h1 className="w-full font-bold text-2xl">Push A</h1>

      <div className="py-2 flex flex-col gap-1.5">
        <span className="text-[var(--muted-foreground)] text-sm">
          2/5 exercises done
        </span>
        <Progress value={33} />
      </div>

      <Card className="w-full border-0 my-5">
        <CardHeader>
          <CardTitle>Bench Press</CardTitle>
          <CardDescription className="text-[var(--muted-foreground)] text-sm">
            60kg x 8 | 60kg x 8 | 60kg x 8
          </CardDescription>
          <CardAction><Ellipsis /></CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
            {sets.map((item, index) => (
                <ExerciseInput key={index} index={ index + 1 }/>
            ))}
          <Button className="w-full text-black font-bold py-5">
            Complete Exercise
          </Button>
        </CardContent>
      </Card>
    </>
  );
}

export default Workout;
