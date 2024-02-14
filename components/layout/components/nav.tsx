import { useRouter } from "next/router";
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs";

import { navList } from "../utils";

export default function Nav() {
  const router = useRouter();
  const pathname = router.pathname.slice(1);

  const onValueChange = (value: string) => {
    router.push(`/${value}`);
  };

  return (
    <nav>
      <Tabs
        value={pathname}
        activationMode="manual"
        onValueChange={onValueChange}
      >
        <TabsList>
          {navList.map((item) => (
            <TabsTrigger key={item.id} value={item.id}>
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </nav>
  );
}
