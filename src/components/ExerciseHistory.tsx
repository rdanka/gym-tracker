import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface ExerciseHistoryProps {
  name: string;
  history: {
    date: string;
    sets: { weight: number; reps: number }[];
  }[];
}

export function ExerciseHistory({ name, history }: ExerciseHistoryProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-0">
        <AccordionTrigger className="bg-[var(--muted)] rounded-xl px-4 py-2">
          {name}
        </AccordionTrigger>
        <AccordionContent>
          {" "}
          <ul className="space-y-2 p-2">
            {history.map((session, i) => (
              <li
                key={i}
                className="bg-[var(--background)] rounded-lg p-3 shadow-sm"
              >
                <p className="text-sm text-muted-foreground mb-1">
                  {session.date}
                </p>
                <div className="space-y-1">
                  {session.sets.map((set, j) => (
                    <p key={j} className="text-sm font-medium">
                      {set.weight} kg × {set.reps} reps
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
export default ExerciseHistory;
