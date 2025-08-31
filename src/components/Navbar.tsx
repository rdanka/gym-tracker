import { cn } from "@/lib/utils";
import {
    BarChart2,
    Dumbbell,
    Home
} from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [page, setPage] = useState(location.pathname.slice(1));

  const navItems = [
    { name: "home", label: "Dashboard", icon: <Home /> },
    { name: "workout", label: "Workout", icon: <Dumbbell /> },
    { name: "progress", label: "Progress", icon: <BarChart2 /> },
  ];

  const handlePageChange = (page: string) => {
    setPage(page);
    navigate(page);
  };

  useEffect(() => {
    setPage(location.pathname.slice(1));
    }, [location.pathname]);

  return (
    <nav className="bg-[var(--secondary)] p-4 px-11 fixed bottom-0 left-0 w-full shadow-md flex justify-between border-t border-[#27352D]">
      {navItems.map((item) => (
        <button
          key={item.name}
          className={cn(
            "flex flex-col items-center justify-center gap-1 text-[var(--primary)]",
            page == item.name ? "text-[var(--primary)]" : "text-white"
          )}
          onClick={() => handlePageChange(item.name)}
        >
          {item.icon}
          <span className="text-xs">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
