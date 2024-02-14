import type { Db } from "mongodb";

export const sharedNotesQuery = async (db: Db) => await db
  .collection("shared")
  .find({})
  .sort({ "updatedAt": -1 })
  .toArray()

export const trashedNotesQuery = async (db: Db) => await db
  .collection("trashed")
  .find({})
  .sort({ "updatedAt": -1 })
  .toArray()