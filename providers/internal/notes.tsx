import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

import type { NoteCollections } from "@/components/note/types";

/**
 * Notes use-hook
 */

interface NotesContextProps {
  notes: NoteCollections;
  setNotes: Dispatch<SetStateAction<NoteCollections>>;
}

const NotesContext = createContext<NotesContextProps>({
  notes: { shared: [], trashed: [] },
  setNotes: () => {},
});

export const useNotes = () => {
  return useContext(NotesContext);
};

/**
 * Notes provider
 */

interface NotesProviderProps {
  children: React.ReactNode;
}

export const NotesProvider = ({ children }: NotesProviderProps) => {
  const [notes, setNotes] = useState<NoteCollections>({
    shared: [],
    trashed: [],
  });

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};
