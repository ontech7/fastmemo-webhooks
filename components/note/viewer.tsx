import { Folder } from "lucide-react";

import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";

import type { Note } from "./types";

interface NoteViewerProps {
  note: Note;
}

export default function NoteViewer({ note }: NoteViewerProps) {
  const renderNoteContent = (note: Note) => {
    switch (note.type) {
      case "text":
        return (
          <div
            className="p-4 [&_h1]:text-3xl [&_h1]:mb-2.5 [&_ul]:pl-6 [&_ul]:list-disc [&_ul]:mb-2.5 [&_ol]:pl-6 [&_ol]:list-decimal [&_ol]:mb-2.5 [&_img]:max-w-[600px] [&_img]:rounded-md [&_img]:mb-2.5 [&_code]:inline-block dark:[&_code]:bg-slate-800 [&_code]:bg-slate-200 [&_code]:p-1.5 [&_code]:rounded-md [&_code]:mb-2.5"
            dangerouslySetInnerHTML={{
              __html: note.text,
            }}
          />
        );
      case "todo":
        return note.list.map((item) => (
          <div key={item.id} className="px-4 flex items-center space-x-2 my-3">
            <Checkbox
              id={`checkbox_${item.id}`}
              className="h-6 w-6 disabled:opacity-80"
              checked={item.checked}
              disabled
            />
            <label
              htmlFor={`checkbox_${item.id}`}
              className="ml-2 font-medium leading-none"
            >
              {item.text}
            </label>
          </div>
        ));
      default:
        return null;
    }
  };

  return (
    <div className="bg-content1 rounded-large flex-grow overflow-y-auto">
      <h2 className="text-3xl text-blue-950 dark:text-blue-200 font-bold px-4 pt-4 mb-1">
        {note.title || "(No title)"}
      </h2>
      <div className="flex items-center text-sm text-blue-950 dark:text-blue-200 opacity-70 px-4 mb-4">
        <Folder className="mr-2 h-4 w-4" />
        <span>{note.category.name}</span>
      </div>
      <Separator />
      <div>{renderNoteContent(note)}</div>
    </div>
  );
}
