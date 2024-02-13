import { Note } from "@/components/note/types"
import { atom, useAtom } from "jotai"

type Config = Note[]

const configAtom = atom<Config>([])

export function useNotes() {
  return useAtom(configAtom)
}