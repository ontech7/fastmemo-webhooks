export type NoteType = "text" | "todo";

export type BaseNote = {
  collection: string;
  id: string;
  type?: NoteType;
  title?: string;
  category: {
    iconId: string;
    name: string;
  }
  createdAt: number;
  updatedAt: number;
  important: boolean;
  readOnly: boolean;
  hidden: boolean;
  locked: boolean;
}

export interface NoteText extends BaseNote {
  type: "text";
  text: string;
};

export interface NoteTodo extends BaseNote {
  type: "todo";
  list: {
    id: string;
    text: string;
    checked: boolean;
  }[];
};

export type Note = NoteText | NoteTodo;