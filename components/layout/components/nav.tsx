import { TabsList, TabsTrigger } from "../../ui/tabs";

import { navList } from "../utils";

export default function Nav() {
  return (
    <nav>
      <TabsList>
        {navList.map((item) => (
          <TabsTrigger key={item.id} value={item.id}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </nav>
  );
}
