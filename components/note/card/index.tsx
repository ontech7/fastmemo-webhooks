import { Folder } from "lucide-react";
import { MouseEvent } from "react";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import NoteSettings from "./settings";

import { timeAgo } from "@/lib/utils/date";
import { toast } from "sonner";
import type { BaseNote } from "../types";

interface NoteCardProps extends BaseNote {
  onOpenNote(): void;
}

export default function NoteCard(props: NoteCardProps) {
  const onDelete = (e: MouseEvent) => {
    toast(`Note "${props.title}" deleted! (WIP)`, {
      description: `ID: ${props.id}`,
      action: {
        label: "Undo",
        onClick: () => {},
      },
    });
    e.stopPropagation();
  };

  const onCopyAsJson = (e: MouseEvent) => {
    navigator.clipboard.writeText(JSON.stringify(props));
    toast("Note copied as JSON to clipboard!", {
      description: `ID: ${props.id}`,
    });
    e.stopPropagation();
  };

  const onCopyID = (e: MouseEvent) => {
    navigator.clipboard.writeText(props.id);
    toast("Note ID copied to clipboard!", {
      description: `ID: ${props.id}`,
    });
    e.stopPropagation();
  };

  return (
    <Card className="cursor-pointer my-3" onClick={props.onOpenNote}>
      <CardHeader className="flex flex-row justify-between items-start space-y-0">
        <div>
          <CardTitle className="text-xl text-blue-950 dark:text-blue-200">
            {props.title || "(No title)"}
          </CardTitle>
          <div className="flex items-center text-sm text-blue-950 dark:text-blue-200 opacity-70">
            <Folder className="w-4 h-8" />
            <span className="ml-1.5">{props.category.name}</span>
          </div>
        </div>
        <NoteSettings
          onDelete={onDelete}
          onCopyAsJson={onCopyAsJson}
          onCopyID={onCopyID}
        />
      </CardHeader>
      <CardFooter className="flex justify-end">
        <p className="text-sm text-blue-950 dark:text-blue-200 opacity-70">
          Updated {timeAgo(props.updatedAt)}
        </p>
      </CardFooter>
    </Card>
  );
}
