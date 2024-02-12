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

interface NoteSettingsProps {
  onDelete(e: MouseEvent): void;
  onCopyAsJson(e: MouseEvent): void;
  onCopyID(e: MouseEvent): void;
}

export default function NoteSettings({
  onDelete,
  onCopyAsJson,
  onCopyID,
}: NoteSettingsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8 p-0 -mr-2">
          <Settings className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-xs text-gray-400">
          Settings
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onDelete}>
          <Trash2 className="mr-2 h-4 w-4" />
          <span>Delete</span>
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
