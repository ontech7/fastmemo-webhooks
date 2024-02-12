import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { Skeleton } from "../../ui/skeleton";

export default function SwitchTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme == "light" ? "dark" : "light");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton className="w-4 h-4 p-5" />;
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {theme == "light" ? <Moon /> : <Sun />}
    </Button>
  );
}
