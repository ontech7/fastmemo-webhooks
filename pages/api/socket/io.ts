import { Server as HTTPServer } from "http";
import { Socket } from "net";
import { NextApiRequest, NextApiResponse } from "next";
import { Server as SocketIOServer } from "socket.io";

export type NextApiResponseWithSocket = NextApiResponse & {
  socket: Socket & {
    server: HTTPServer & {
      io: SocketIOServer;
    }
  }
}

export default async function SocketHandler(
  req: NextApiRequest,
  res: NextApiResponseWithSocket
) {
  if (!res.socket.server.io) {
    const io = new SocketIOServer(res.socket.server, {
      path: process.env.NEXT_PUBLIC_SOCKET_ENDPOINT!,
      addTrailingSlash: false
    });

    res.socket.server.io = io;
  }

  res.end();
}

export const config = {
  api: {
    bodyParser: false,
  },
};