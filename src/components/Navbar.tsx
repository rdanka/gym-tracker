import { ChartBarIncreasing, Dumbbell, Home } from "lucide-react";
import { useState } from "react";

function Navbar() {
    const [page, setPage] = useState('Home')
    return (
        <div>
            <ul>
                <li>
                    <Home />
                    Dashboard
                </li>
                <li>
                    <Dumbbell />
                    Workout
                </li>
                <li>
                    <ChartBarIncreasing />
                    Progress
                </li>
            </ul>
        </div>
    )
}

export default Navbar;