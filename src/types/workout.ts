export interface PerformedSet {
  setNumber: number;
  weight: number;
  reps: number;
}

export interface PerformedExercise {
  name: string;
  sets: PerformedSet[];
}

export interface WorkoutLog {
  date: string;
  workoutType: string;
  exercises: PerformedExercise[];
}