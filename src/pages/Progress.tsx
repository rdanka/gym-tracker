import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { routine } from "@/data";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { Line, LineChart, XAxis } from "recharts";

type TimeRange = "lastWeek" | "lastMonth" | "lastYear" | "all" | "";
interface ChartData {
  date: string;
  weight: number;
  reps: number;
}

function Progress() {
  const chartConfig = {
    weight: {
      label: "Weight",
      color: "#38E07B",
    },
    reps: {
      label: "Reps",
      color: "#fff",
    },
  } satisfies ChartConfig;

  const today = new Date();

  const [exercise, setExercise] = useState<string | undefined>();
  const [hasData, setHasData] = useState(false);
  const [chartData, setChartData] = useState<ChartData[] | undefined>();
  const [timeFrame, setTimeFrame] = useState<TimeRange | undefined>();

  const getStartDate = (range: TimeRange) => {
    const start = new Date(today);
    switch (range) {
      case "lastWeek":
        start.setDate(today.getDate() - 7);
        break;
      case "lastMonth":
        start.setMonth(today.getMonth() - 1);
        break;
      case "lastYear":
        start.setFullYear(today.getFullYear() - 1);
        break;
      case "all":
        return null;
    }
    return start.toISOString().split("T")[0];
  };

  const queryBackend = async () => {
    if (!timeFrame) return;
    const startDate = getStartDate(timeFrame);

    let query = supabase
      .from("workout_logs")
      .select("*")
      .filter("exercises", "cs", JSON.stringify([{ name: exercise }]));

    if (startDate) {
      query = query.gte("date", startDate);
    }

    const { data, error } = await query;
    if (data?.length) {
      setHasData(true);
      setChartData(transformToChartData(data));
    } else {
      setHasData(false);
    }
  };

  const transformToChartData = (logs: any[]): ChartData[] => {
    const dailyMap: Record<
      string,
      { totalReps: number; totalWeight: number; sets: number }
    > = {};

    logs.forEach((log) => {
      const { date, exercises } = log;
      exercises.forEach((ex: any) => {
        if (ex.name === exercise) {
          if (!dailyMap[date]) {
            dailyMap[date] = { totalReps: 0, totalWeight: 0, sets: 0 };
          }
          ex.sets.forEach((set: any) => {
            dailyMap[date].totalReps += set.reps;
            dailyMap[date].totalWeight += set.weight;
            dailyMap[date].sets += 1;
          });
        }
      });
    });

    // Convert to array for chart
    const chartData: ChartData[] = Object.entries(dailyMap).map(
      ([date, { totalReps, totalWeight, sets }]) => ({
        date,
        reps: totalReps,
        weight: totalWeight / sets, // average weight per set
      })
    );

    // Sort by date ascending
    chartData.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    return chartData;
  };

  const handleExerciseSelect = (val: string) => {
    setExercise(val);
  };

  const handleTimeFrameSelect = async (val: TimeRange) => {
    setTimeFrame(val);

  };
useEffect(() => {
  if (exercise && timeFrame) {
    queryBackend()
  }
}, [timeFrame, exercise]);

  return (
    <>
      <h1 className="w-full text-center font-bold py-3">Progress</h1>
      <div className="py-5 flex gap-4">
        <Select onValueChange={handleExerciseSelect}>
          <SelectTrigger className="w-full truncate py-5 border-[#27352D] bg-[var(--card)]">
            <SelectValue placeholder="Exercise" />
          </SelectTrigger>
          <SelectContent className="border-0 bg-[#27352D]  text-white truncate">
            {Object.keys(routine.workouts).map((workoutType, index) => (
              <SelectGroup
                className="text-[var(--muted-foreground)] truncate"
                key={workoutType}
              >
                <SelectLabel>{workoutType}</SelectLabel>
                {Object.values(routine.workouts)[index].map((exerciseType) => (
                  <SelectItem
                    key={exerciseType.exercise}
                    className="truncate text-white data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white"
                    value={exerciseType.exercise}
                  >
                    {exerciseType.exercise}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={handleTimeFrameSelect}>
          <SelectTrigger className="w-full py-5 border-[#27352D] bg-[var(--card)]">
            <SelectValue placeholder="Time" />
          </SelectTrigger>
          <SelectContent className="border-0 bg-[#27352D]  text-white">
            <SelectItem
              className="data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white"
              value="lastWeek"
            >
              Last week
            </SelectItem>
            <SelectItem
              className="data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white"
              value="lastMonth"
            >
              Last month
            </SelectItem>
            <SelectItem
              className="data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white"
              value="lastYear"
            >
              Last year
            </SelectItem>
            <SelectItem
              className="data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white"
              value="all"
            >
              All
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {exercise && timeFrame && (
        <Card className="w-full border-0">
          <CardHeader>
            <CardTitle>{exercise}</CardTitle>
          </CardHeader>
          <CardContent>
            {hasData ? (
              <ChartContainer config={chartConfig}>
                <LineChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <XAxis
                    dataKey="date"
                    tickLine={true}
                    axisLine={true}
                    tickMargin={8}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                  />
                  <Line
                    dataKey="weight"
                    type="monotone"
                    stroke="var(--color-weight)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    dataKey="reps"
                    type="monotone"
                    stroke="var(--color-reps)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            ) : (
              <span className="text-bold text-2xl text-center w-full">
                No Data Yet!
              </span>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
}

export default Progress;
