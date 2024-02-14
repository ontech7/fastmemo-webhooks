import type { NextApiRequest } from "next";
import type { NextApiResponseWithSocket } from "./socket/io";

import { sharedNotesQuery, trashedNotesQuery } from "@/libs/utils/internal/queries";
import clientPromise from "@/libs/utils/vendor/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponseWithSocket,
) {
  if (req.method !== "GET") { res.status(404).end(); return; }

  const client = await clientPromise;
  const db = client.db("memo-webhooks");

  const sharedNotes = await sharedNotesQuery(db);
  const trashedNotes = await trashedNotesQuery(db);

  res.status(200).json({
    shared: sharedNotes,
    trashed: trashedNotes
  });
}
