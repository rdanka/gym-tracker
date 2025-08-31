export const routine = {
  days: {
    monday: "pushA",
    tuesday: "pullA",
    wednesday: "legsA",
    thursday: "pushB",
    friday: "pullB",
    saturday: "legsB",
    sunday: "rest",
  },
  workouts: {
    pushA: [
      { exercise: "Barbell Bench Press", sets: 4, reps: "6-8" },
      { exercise: "Incline Dumbbell Press", sets: 3, reps: "8-10" },
      { exercise: "Overhead Press (Barbell or Dumbbell)", sets: 4, reps: "6-8" },
      { exercise: "Dumbbell Lateral Raises", sets: 4, reps: "12-15" },
      { exercise: "Cable Chest Fly (high to low)", sets: 3, reps: "12-15" },
      { exercise: "Overhead Triceps Extension (DB or rope)", sets: 3, reps: "10-12" },
    ],
    pullA: [
      { exercise: "Weighted Pull-Ups or Lat Pulldown", sets: 4, reps: "6-8" },
      { exercise: "Barbell Row (overhand grip)", sets: 4, reps: "6-8" },
      { exercise: "Seated Cable Row", sets: 3, reps: "10-12" },
      { exercise: "Face Pulls", sets: 3, reps: "12-15" },
      { exercise: "Incline Dumbbell Curl", sets: 3, reps: "10-12" },
      { exercise: "Hammer Curl", sets: 3, reps: "12-15" },
    ],
    legsA: [
      { exercise: "Squat (back or front)", sets: 4, reps: "6-8" },
      { exercise: "Romanian Deadlift", sets: 3, reps: "8-10" },
      { exercise: "Bulgarian Split Squats", sets: 3, reps: "10-12 each leg" },
      { exercise: "Leg Press", sets: 3, reps: "10-12" },
      { exercise: "Lying Leg Curls", sets: 3, reps: "12-15" },
      { exercise: "Standing Calf Raises", sets: 4, reps: "12-15" },
    ],
    pushB: [
      { exercise: "Overhead Press", sets: 4, reps: "6-8" },
      { exercise: "Incline Barbell Bench", sets: 3, reps: "8-10" },
      { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "8-10" },
      { exercise: "Dumbbell Lateral Raises (heavy)", sets: 4, reps: "10-12" },
      { exercise: "Cable Lateral Raises (light/controlled)", sets: 3, reps: "12-15" },
      { exercise: "Weighted Dips", sets: 3, reps: "8-12" },
      { exercise: "Rope Pushdowns", sets: 3, reps: "12-15" },
    ],
    pullB: [
      { exercise: "Deadlift", sets: 3, reps: "5" },
      { exercise: "Chin-Ups", sets: 3, reps: "8-10" },
      { exercise: "T-Bar Row", sets: 3, reps: "8-10" },
      { exercise: "One-Arm Dumbbell Row", sets: 3, reps: "10-12" },
      { exercise: "Rear Delt Fly", sets: 3, reps: "12-15" },
      { exercise: "Barbell Curl", sets: 3, reps: "8-10" },
      { exercise: "Preacher Curl", sets: 3, reps: "12-15" },
    ],
    legsB: [
      { exercise: "Front Squat or Hack Squat", sets: 4, reps: "6-8" },
      { exercise: "Hip Thrusts", sets: 3, reps: "8-10" },
      { exercise: "Walking Lunges", sets: 3, reps: "10-12 each leg" },
      { exercise: "Leg Extensions", sets: 3, reps: "12-15" },
      { exercise: "Seated Leg Curls", sets: 3, reps: "12-15" },
      { exercise: "Seated Calf Raises", sets: 4, reps: "12-15" },
    ],
    abs: [
       { exercise: "Hanging Leg Raises", sets: 3, reps: "12-15" },
       { exercise: "Cable Rope Crunches", sets: 3, reps: "12-15" },
    ]
  },
};

const workoutLog = {
  date: "2025-08-31",
  workoutType: "pushA",
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
