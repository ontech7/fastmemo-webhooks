import { createContext, useContext, useEffect, useState } from "react";

import { Socket, io as socketIOClient } from "socket.io-client";
import { toast } from "sonner";

/**
 * Socket.io use-hook
 */

interface SocketContextProps {
  socket: Socket | null;
  isConnected: boolean;
  socketId: string | null;
}

const SocketContext = createContext<SocketContextProps>({
  socket: null,
  isConnected: false,
  socketId: null,
});

export const useSocket = () => {
  return useContext(SocketContext);
};

/**
 * Socket.io provider
 */

interface SocketProviderProps {
  children: React.ReactNode;
}

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [socketId, setSockedId] = useState<string | null>(null);

  useEffect(() => {
    const socket = socketIOClient({
      path: "/api/socket/io",
      addTrailingSlash: false,
    });

    socket.on("connect", () => {
      setIsConnected(true);
      setSockedId(socket.id ?? null);
      toast.success("User client connected!", {
        description: `SocketID: ${socket.id ?? null}`,
      });
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
      setSockedId(socket.id ?? null);
      toast.warning("User client disconnected!");
    });

    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ isConnected, socket, socketId }}>
      {children}
    </SocketContext.Provider>
  );
};
