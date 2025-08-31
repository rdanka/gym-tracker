import {
    Card,
    CardAction,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { useState } from "react";
import { Line, LineChart, XAxis } from "recharts";

function Progress() {
  const chartData = [
    { month: "January", desktop: 80, mobile: 6 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#38E07B",
    },
    mobile: {
      label: "Mobile",
      color: "#fff",
    },
  } satisfies ChartConfig;

  const [exercise, setExercise] = useState("");
  const [timeFrame, setTimeFrame] = useState("");

  const handleExerciseSelect = (val: string) => {
    setExercise(val);
  }
  
  const handleTimeFrameSelect = (val: string) => {
    setTimeFrame(val);
  }

  return (
    <>
      <h1 className="w-full text-center font-bold py-3">Progress</h1>
      <div className="py-5 flex gap-4">
        <Select onValueChange={handleExerciseSelect}>
          <SelectTrigger className="w-full py-5 border-[#27352D] bg-[var(--card)]">
            <SelectValue placeholder="Exercise" />
          </SelectTrigger>
          <SelectContent className="border-0 bg-[#27352D]  text-white">
            <SelectItem className="data-[state=checked]:bg-[var(--primary)] data-[state=checked]:text-white" value="light">asd</SelectItem>
            <SelectItem value="sd">546</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={handleTimeFrameSelect}>
          <SelectTrigger className="w-full py-5 border-[#27352D] bg-[var(--card)]">
            <SelectValue placeholder="Time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Last week</SelectItem>
            <SelectItem value="dark">Last month</SelectItem>
            <SelectItem value="system">Last year</SelectItem>
            <SelectItem value="system">All</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {exercise && timeFrame && <Card className="w-full border-0">
        <CardHeader>
          <CardTitle>{exercise}</CardTitle>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
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
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="desktop"
                type="monotone"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="mobile"
                type="monotone"
                stroke="var(--color-mobile)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>}
    </>
  );
}

export default Progress;
