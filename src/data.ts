import type { Routine } from "./types/routine";

export const routine: Routine = {
  days: {
    sunday: "rest",
    monday: "push",
    tuesday: "pull",
    wednesday: "legs",
    thursday: "push",
    friday: "pull",
    saturday: "legs",
  },
  workouts: {
    push: [
      { exercise: "Bench Press", sets: 4, reps: "6-8" },
      { exercise: "Barbell Overhead Press", sets: 4, reps: "6-8" },
      { exercise: "Incline Barbell Press", sets: 3, reps: "8-10" },
      { exercise: "Cable Lateral Raise", sets: 4, reps: "12-15" },
      { exercise: "Dips", sets: 3, reps: "8-12" },
      { exercise: "Overhead Triceps Extension", sets: 3, reps: "10-12" },
    ],
    pull: [
      { exercise: "Pull ups", sets: 4, reps: "AMRAP" },
      { exercise: "Chest supported T row", sets: 4, reps: "8-10" },
      { exercise: "Lat Pulldown (wide)", sets: 3, reps: "10-12" },
      { exercise: "Face Pulls", sets: 3, reps: "12-15" },
      { exercise: "Hammer Curl", sets: 3, reps: "10-12" },
      { exercise: "Incline Dumbbell Curl", sets: 3, reps: "10-12" },
    ],
    legs: [
      { exercise: "Leg Press", sets: 3, reps: "8-10" },
      { exercise: "Lying Leg Curls", sets: 3, reps: "12-15" },
      { exercise: "Leg extensions", sets: 3, reps: "12-15" },
      { exercise: "Squat", sets: 4, reps: "6-8" },
      { exercise: "Romanian Deadlift", sets: 4, reps: "8-10" },
      { exercise: "Standing Calf Raises", sets: 4, reps: "12-15" },
    ],
    abs: [
       { exercise: "Hanging Leg Raises", sets: 3, reps: "12-15" },
       { exercise: "Weighted Crunches", sets: 3, reps: "12-15" },
       { exercise: "Plank", sets: 2, reps: "1:00-1:30" },
    ]
  },
};

const workoutLog = {
  date: "2025-08-31",
  workoutType: "push",
  exercises: [
    {
      name: "Bench Press",
      sets: [
        { setNumber: 1, weight: 60, reps: 8 },
        { setNumber: 2, weight: 60, reps: 8 },
        { setNumber: 3, weight: 62.5, reps: 6 },
      ],
    },
    {
      name: "Overhead Press",
      sets: [
        { setNumber: 1, weight: 40, reps: 10 },
        { setNumber: 2, weight: 42.5, reps: 8 },
        { setNumber: 3, weight: 42.5, reps: 8 },
      ],
    },
  ],
};
