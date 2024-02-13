import { useCallback, useEffect, useState } from "react";

import { useNotes } from "@/states/note";
import { io, type Socket } from "socket.io-client";
import { toast } from "sonner";

import type { Note } from "@/components/note/types";

type SocketData = {
  notes: Note[];
};

/**
 * Socket.io hooks
 */

type SocketFunction = (socket: Socket) => void;

export const useSocket = (listeners?: SocketFunction) => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [socketId, setSocketId] = useState<string | null>(null);

  useEffect(() => {
    // connect to socket.io server
    fetch("/api/socket");

    const socket = io({
      path: "/api/socket_io",
    });

    socket.on("connect", () => {
      setIsConnected(true);
      setSocketId(socket.id ?? null);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
      setSocketId(socket.id ?? null);
    });

    listeners?.(socket);

    return () => {
      socket.disconnect();
    };
  }, [listeners]);

  return { isConnected, socketId };
};

/**
 * Socket.io provider
 */

interface SocketProviderProps {
  children: React.ReactNode;
}

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const [, setNotes] = useNotes();

  const noteListeners = useCallback(
    (socket: Socket) => {
      socket.on("shared-notes", (data: SocketData) => {
        setNotes((prev) => ({ ...prev, shared: [...data.notes] }));
      });

      socket.on("trashed-notes", (data: SocketData) => {
        setNotes((prev) => ({ ...prev, trashed: [...data.notes] }));
      });
    },
    [setNotes]
  );

  const { isConnected, socketId } = useSocket(noteListeners);

  useEffect(() => {
    if (isConnected === null) return;

    if (isConnected) {
      toast.success("User client connected!", {
        description: `SocketID: ${socketId}`,
      });
    } else {
      toast.warning("User client disconnected!", {
        description: `SocketID: ${socketId}`,
      });
    }
  }, [isConnected, socketId]);

  return <>{children}</>;
};
