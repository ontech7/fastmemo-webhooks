import { useState } from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";

import NoteCard from "@/components/note/card";
import type { Note } from "@/components/note/types";
import NoteViewer from "@/components/note/viewer";

import { TabsContent } from "@/components/ui/tabs";

interface SharedNotesTabProps {
  placeholders: Note[];
}

export default function SharedNotesTab({ placeholders }: SharedNotesTabProps) {
  const [selectedNote, setSelectedNote] = useState(-1);
  const openNote = (index: number) => () =>
    setSelectedNote((prev) => (index != prev ? index : -1));

  return (
    <TabsContent value="shared-notes">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={30} minSize={20} maxSize={50}>
          <ScrollArea className="h-[calc(100vh-80px)] pb-4 px-8">
            {placeholders.map((item, i) => (
              <NoteCard key={item.id} {...item} onOpenNote={openNote(i)} />
            ))}
          </ScrollArea>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={70} minSize={50}>
          <ScrollArea className="h-[calc(100vh-80px)] py-4 px-8">
            {selectedNote != -1 && (
              <NoteViewer note={placeholders[selectedNote]} />
            )}
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TabsContent>
  );
}
