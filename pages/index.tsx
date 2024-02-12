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

import { genNotePlaceholders } from "@/components/note/mock";

interface HomePageProps {
  placeholders: Note[];
}

export default function HomePage({ placeholders }: HomePageProps) {
  const [selectedNote, setSelectedNote] = useState(-1);
  const openNote = (index: number) => () =>
    setSelectedNote((prev) => (index != prev ? index : -1));

  return (
    <div className="container flex flex-col min-h-screen">
      <ResizablePanelGroup direction="horizontal" className="flex-grow">
        <ResizablePanel defaultSize={30} minSize={20} maxSize={50}>
          <ScrollArea className="h-screen py-4 px-8">
            {placeholders?.map((item, i) => (
              <NoteCard key={item.id} {...item} onOpenNote={openNote(i)} />
            ))}
          </ScrollArea>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={70} minSize={50}>
          <ScrollArea className="h-screen py-4 px-8">
            {selectedNote != -1 && (
              <NoteViewer note={placeholders[selectedNote]} />
            )}
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      placeholders: genNotePlaceholders(10),
    },
  };
}
