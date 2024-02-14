import { useState } from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

import NoteCard from "@/components/note/card";
import NoteViewer from "@/components/note/viewer";

import { useNotes } from "@/providers/internal/notes";

import type { NoteCollection } from "@/components/note/types";
import { useSocketNotesRefetch } from "@/libs/hooks/use-socket-notes";

interface NotesTabContentProps {
  collection: NoteCollection;
}

export default function NotesTabContent({ collection }: NotesTabContentProps) {
  const { notes } = useNotes();
  const { isLoading } = useSocketNotesRefetch();

  const [selectedNote, setSelectedNote] = useState(-1);
  const openNote = (index: number) => () => setSelectedNote(index);
  const closeNote = () => setSelectedNote(-1);

  const noteCollection = notes[collection];

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={30} minSize={20} maxSize={50}>
        <ScrollArea className="h-[calc(100vh-80px)] pb-4 px-8">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-[152px] my-3" />
              ))
            : noteCollection.map((item, i) => (
                <NoteCard key={item.id} {...item} onOpenNote={openNote(i)} />
              ))}
        </ScrollArea>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={70} minSize={50}>
        <ScrollArea className="h-[calc(100vh-80px)] py-4 px-8">
          {selectedNote != -1 && (
            <NoteViewer
              note={noteCollection[selectedNote]}
              onClose={closeNote}
            />
          )}
        </ScrollArea>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
