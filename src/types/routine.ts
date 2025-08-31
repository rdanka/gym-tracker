export interface ExerciseDef {
  exercise: string;
  sets: number;
  reps: string;
}

export type DayType = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";

export interface Routine {
  days: Record<
    DayType,
    string
  >;
  workouts: Record<string, ExerciseDef[]>;
}
