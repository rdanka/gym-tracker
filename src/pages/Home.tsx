import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

function Home() {

    const [date, setDate] = useState<Date | undefined>(new Date())
    const gymDays = ["2025-08-21", "2025-09-01"];
    return (
        <>
            <h1 className="w-full text-center font-bold py-4">Dashboard</h1>

       <Card className="w-full border-0 py-5 flex align-center justify-center">
          <CardContent  className="w-full border-0 flex align-center justify-center">
            
          </CardContent>
        </Card>
            
            <Button className="w-full text-black font-bold py-5 my-5 rounded-4xl drop-shadow-[0_4px_8px_rgba(56,224,123,0.7)]"> Start Workout! </Button>
        </>
    )
}

export default Home;