import { Copy, FileJson2, Settings, Trash2 } from "lucide-react";
import { MouseEvent } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { NoteCollection } from "../types";

interface NoteSettingsProps {
  collection: NoteCollection;
  onDelete(e: MouseEvent): void;
  onDeletePermanently(e: MouseEvent): void;
  onCopyAsJson(e: MouseEvent): void;
  onCopyID(e: MouseEvent): void;
}

export default function NoteSettings({
  collection,
  onDelete,
  onDeletePermanently,
  onCopyAsJson,
  onCopyID,
}: NoteSettingsProps) {
  const isSharedCollection = collection == "shared";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-blue-950 dark:text-blue-200 h-8 w-8 p-0 -mr-2"
        >
          <Settings className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-blue-950 dark:text-blue-200">
        <DropdownMenuLabel className="text-xs opacity-70">
          Settings
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={isSharedCollection ? onDelete : onDeletePermanently}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          <span>{isSharedCollection ? "Delete" : "Delete permanently"}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onCopyAsJson}>
          <FileJson2 className="mr-2 h-4 w-4" />
          <span>Copy as JSON</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onCopyID}>
          <Copy className="mr-2 h-4 w-4" />
          <span>Copy ID</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
