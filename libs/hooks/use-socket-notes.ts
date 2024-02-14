import { useCallback, useEffect, useState } from "react";

import { useNotes } from "@/providers/internal/notes";
import { useSocket } from "@/providers/vendor/socket";

import type { NoteCollections } from "@/components/note/types";

/**
 * Refetch
 */

export const useSocketNotesRefetch = () => {
  const { setNotes } = useNotes();
  const { socket } = useSocket();

  const [isLoading, setLoading] = useState(true);

  const fetchNotes = useCallback(async () => {
    const response = await fetch('/api/list');
    const data = await response.json() as NoteCollections;
    setNotes(data);
    setLoading(false);
  }, [setNotes]);

  useEffect(() => {
    // socket not initialized yet
    if (!socket) {
      return;
    }

    // fetch notes at first load
    fetchNotes();

    // fetch notes when webhooks are called
    socket.on(`notes:refetch`, (sharedNotes, trashedNotes) => {
      setNotes({
        shared: sharedNotes,
        trashed: trashedNotes
      })
    });

    // detach events when the component is unmounted
    return () => {
      socket.off(`notes:refetch`)
    }
  }, [socket, setNotes, fetchNotes]);

  return { isLoading }
}