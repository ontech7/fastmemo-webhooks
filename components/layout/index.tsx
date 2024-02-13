import { cn } from "@/lib/utils/classes";
import { Tabs } from "../ui/tabs";

import Logo from "./components/logo";
import Nav from "./components/nav";
import SwitchTheme from "./components/switch-theme";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <Tabs defaultValue="shared-notes" className="container h-screen">
      <header
        className={cn("py-4 flex items-center justify-between", className)}
      >
        <Logo className="fill-blue-950 dark:fill-blue-200" />
        <Nav />
        <SwitchTheme />
      </header>
      <main>{children}</main>
    </Tabs>
  );
}
